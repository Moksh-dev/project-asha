import Card from "@/components/ui/Card";

interface GalleryCardProps {
  title: string;
  category: string;
  image?: string;
}

export default function GalleryCard({
  title,
  category,
  image,
}: GalleryCardProps) {
  return (
    <Card
      hover
      padding="none"
      className="overflow-hidden"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="h-72 w-full object-cover"
        />
      ) : (
        <div className="flex h-72 items-center justify-center bg-slate-200">
          <span className="font-semibold text-slate-400">
            Gallery Image
          </span>
        </div>
      )}

      <div className="p-6">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-white">
          {title}
        </h3>

      </div>

    </Card>
  );
}