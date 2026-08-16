"use client";

import PublicShell from "@/components/v2/PublicShell";
import { PageHero, Section } from "@/components/v2/Primitives";
import { blogFeatures } from "@/components/v2/data";
import { useLiveBlogs } from "@/components/v2/liveContent";

export default function BlogsPage() {
  const blogs = useLiveBlogs(blogFeatures);
  return (
    <PublicShell><main>

      <PageHero eyebrow="Blog & features" title="Stories and educational articles." body="Read and contribute stories that advance awareness, safety, hope, and action." />
      <section className="px-5 pb-8 md:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 rounded-[2rem] bg-asha-ink p-7 text-white md:flex-row md:items-center"><div><p className="font-hand text-asha-gold">Contribute</p><h2 className="font-display mt-2 text-2xl font-black">Interested in writing for Project A.S.H.A.?</h2><p className="mt-2 text-white/75">Submit your interest through our blog contributor form.</p></div><a href="https://docs.google.com/forms/d/1CuOj0NtkYWJDocfqKHr4-3M4Su2Vzmxpb_qALf43gVg/preview" target="_blank" rel="noreferrer" className="shrink-0 rounded-full border-2 border-[#1F5EFF] bg-white px-6 py-3 text-sm font-black !text-[#1F5EFF] shadow-soft transition hover:bg-[#EAF3FF] hover:!text-[#174BD6]">Blog interest form</a></div></section>

      <Section className="pt-0"><div className="mx-auto max-w-7xl">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {blogs.map((blog) => (

            <article
              key={blog.url}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <p className="text-sm font-semibold text-asha-green">
                {blog.date}
              </p>

              <h2 className="font-display mt-4 text-2xl font-black text-asha-ink">
                {blog.title}
              </h2>

              <p className="mt-4 leading-7 text-asha-muted">
                {blog.excerpt}
              </p>

              <a href={blog.url} target="_blank" rel="noreferrer" className="mt-8 inline-block rounded-full bg-asha-green px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-asha-blue-dark">Read feature</a>

            </article>

          ))}

          {blogs.length === 0 ? <p className="rounded-3xl bg-white p-8 text-lg font-semibold text-asha-muted md:col-span-2 lg:col-span-3">Blog stories will appear here when they are published. News coverage is available on the Press page.</p> : null}

        </div>

      </div></Section>

    </main></PublicShell>
  );
}
