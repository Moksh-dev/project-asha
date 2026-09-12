"use client";

import { type CSSProperties, type ReactNode, useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./FoldText.module.css";

gsap.registerPlugin(ScrollTrigger);

const HINGE_CONFIG = {
  top: { origin: "50% 0%", rotateX: -92, rotateY: 0 },
  bottom: { origin: "50% 100%", rotateX: 92, rotateY: 0 },
  left: { origin: "0% 50%", rotateX: 0, rotateY: 92 },
  right: { origin: "100% 50%", rotateX: 0, rotateY: -92 },
} as const;

type FoldTextProps = {
  text: string;
  splitBy?: "char" | "word" | "line";
  hinge?: keyof typeof HINGE_CONFIG;
  duration?: number;
  stagger?: number;
  ease?: string;
  perspective?: number;
  creaseShading?: number;
  trigger?: "mount" | "hover" | "scroll" | "loop";
  fontSize?: CSSProperties["fontSize"];
  fontWeight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
  className?: string;
  style?: CSSProperties;
};

type FoldStyle = CSSProperties & Partial<Record<"--fold-perspective" | "--fold-crease" | "--fold-text-font-size" | "--fold-text-font-weight" | "--fold-text-color", string | number | undefined>>;

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

function Whitespace({ value }: { value: string }) {
  return <>{value.split(/(\n)/).map((part, index) => part === "\n" ? <br key={`br-${index}`} /> : part ? <span className={styles.whitespace} key={`space-${index}`}>{part}</span> : null)}</>;
}

export default function FoldText({
  text,
  splitBy = "char",
  hinge = "top",
  duration = 0.65,
  stagger = 0.045,
  ease = "power3.out",
  perspective = 700,
  creaseShading = 0.55,
  trigger = "mount",
  fontSize,
  fontWeight,
  color,
  className = "",
  style,
}: FoldTextProps) {
  const rootRef = useRef<HTMLSpanElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const hingeConfig = HINGE_CONFIG[hinge];
  const safeCrease = clamp(creaseShading, 0, 1);
  const safePerspective = Math.max(120, perspective);

  const segments = useMemo(() => {
    let segmentIndex = 0;
    const renderSegment = (content: ReactNode, key: string, split = splitBy) => {
      segmentIndex += 1;
      return (
        <span className={styles.segment} data-fold-split={split} key={key} style={{ "--fold-perspective": `${safePerspective}px` } as FoldStyle}>
          <span className={styles.piece} data-fold-hinge={hinge} style={{ transformOrigin: hingeConfig.origin, "--fold-crease": 0 } as FoldStyle}>
            {content || "\u00A0"}
          </span>
        </span>
      );
    };

    if (splitBy === "line") return text.split("\n").map((line, index) => <span className={styles.line} key={`line-${index}`}>{renderSegment(line || "\u00A0", `segment-line-${index}`, "line")}</span>);
    if (splitBy === "word") return text.split(/(\s+)/).flatMap((part, index) => !part ? [] : /^\s+$/.test(part) ? <Whitespace key={`whitespace-${index}`} value={part} /> : renderSegment(part, `segment-word-${segmentIndex}`));
    return Array.from(text).map((character, index) => character === "\n" ? <br key={`br-${index}`} /> : renderSegment(character === " " ? "\u00A0" : character, `segment-char-${index}`));
  }, [hinge, hingeConfig.origin, safePerspective, splitBy, text]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pieces = Array.from(root.querySelectorAll<HTMLElement>(`.${styles.piece}`));
    if (!pieces.length) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fromVars = { opacity: 0, rotateX: reduceMotion ? 0 : hingeConfig.rotateX, rotateY: reduceMotion ? 0 : hingeConfig.rotateY, "--fold-crease": reduceMotion ? 0 : safeCrease, transformOrigin: hingeConfig.origin, force3D: true };
    const toVars = { opacity: 1, rotateX: 0, rotateY: 0, "--fold-crease": 0, duration: reduceMotion ? Math.min(duration, 0.22) : duration, ease: reduceMotion ? "power1.out" : ease, stagger: reduceMotion ? Math.min(stagger, 0.02) : stagger, clearProps: "willChange" };
    const stop = () => { timelineRef.current?.kill(); timelineRef.current = null; gsap.killTweensOf(pieces); };
    const play = (repeat: boolean) => { stop(); timelineRef.current = gsap.timeline({ repeat: repeat ? -1 : 0, repeatDelay: repeat ? 0.75 : 0 }); timelineRef.current.fromTo(pieces, fromVars, toVars); };

    let scrollTrigger: ScrollTrigger | undefined;
    let hoverHandler: (() => void) | undefined;
    if (trigger === "hover") {
      gsap.set(pieces, { opacity: 1, rotateX: 0, rotateY: 0, "--fold-crease": 0, transformOrigin: hingeConfig.origin });
      hoverHandler = () => play(false);
      root.addEventListener("mouseenter", hoverHandler);
    } else if (trigger === "scroll") {
      gsap.set(pieces, fromVars);
      scrollTrigger = ScrollTrigger.create({ trigger: root, start: "top 82%", once: true, onEnter: () => play(false) });
    } else if (trigger === "loop") play(true); else play(false);

    return () => { if (hoverHandler) root.removeEventListener("mouseenter", hoverHandler); scrollTrigger?.kill(); stop(); };
  }, [duration, ease, hingeConfig, safeCrease, stagger, text, trigger]);

  const rootStyle: FoldStyle = { "--fold-text-font-size": fontSize, "--fold-text-font-weight": fontWeight, "--fold-text-color": color, ...style };
  return <span ref={rootRef} className={`${styles.root} ${className}`.trim()} style={rootStyle}><span className={styles.srOnly}>{text}</span><span className={styles.visual} aria-hidden="true">{segments}</span></span>;
}
