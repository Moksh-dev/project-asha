import GalleryCard from "./GalleryCard";

interface GalleryItem {
  title: string;
  category: string;
  image?: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({
  items,
}: GalleryGridProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

      {items.map((item) => (

        <GalleryCard
          key={item.title}
          title={item.title}
          category={item.category}
          image={item.image}
        />

      ))}

    </div>
  );
}