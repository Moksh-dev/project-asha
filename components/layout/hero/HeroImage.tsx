import Image from "next/image";

interface HeroImageProps {
  image?: string;
  alt?: string;
}

export default function HeroImage({
  image = "/logos/Logo.png",
  alt = "Project ASHA",
}: HeroImageProps) {
  return (
    <div className="flex justify-center">

      <Image
        src={image}
        alt={alt}
        width={500}
        height={500}
        priority
        className="w-full max-w-md object-contain"
      />

    </div>
  );
}