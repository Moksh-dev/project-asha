interface AvatarProps {
  name: string;
  image?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function Avatar({
  name,
  image,
  size = "md",
}: AvatarProps) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const sizes = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-lg",
    xl: "h-20 w-20 text-2xl",
  };

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className={`${sizes[size]} rounded-full object-cover border border-white/10`}
      />
    );
  }

  return (
    <div
      className={`${sizes[size]} flex items-center justify-center rounded-full bg-blue-600 font-bold text-white select-none`}
    >
      {initials}
    </div>
  );
}