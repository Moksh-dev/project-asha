import BlogCard from "./BlogCard";

interface Blog {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  image?: string;
}

interface BlogGridProps {
  blogs: Blog[];
}

export default function BlogGrid({
  blogs,
}: BlogGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      {blogs.map((blog) => (

        <BlogCard
          key={blog.slug}
          title={blog.title}
          excerpt={blog.excerpt}
          date={blog.date}
          author={blog.author}
          slug={blog.slug}
          image={blog.image}
        />

      ))}

    </div>
  );
}