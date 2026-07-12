import Link from "next/link";
import Button from "@/components/ui/Button";

interface HeroButtonsProps {
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function HeroButtons({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: HeroButtonsProps) {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <Link href={primaryHref}>
        <Button size="lg">
          {primaryText}
        </Button>
      </Link>

      {secondaryText && secondaryHref && (
        <Link href={secondaryHref}>
          <Button
            variant="outline"
            size="lg"
          >
            {secondaryText}
          </Button>
        </Link>
      )}

    </div>
  );
}