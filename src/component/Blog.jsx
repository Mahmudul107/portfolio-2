import React from "react";

const blogs = [
  {
    id: 1,
    title: "Mastering React in 2025",
    summary: "A complete guide to staying ahead with React in the modern frontend landscape.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["React", "Frontend", "JavaScript"],
    readTime: "6 min read",
    date: "May 1, 2025",
  },
  {
    id: 2,
    title: "Scaling with TypeScript",
    summary: "Why TypeScript is the secret sauce for large codebases and how to implement it right.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["TypeScript", "Scalability", "Best Practices"],
    readTime: "7 min read",
    date: "April 25, 2025",
  },
  {
    id: 3,
    title: "Backend Design Patterns in Node.js",
    summary: "Learn how to apply clean architecture patterns to write maintainable backend code.",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["Node.js", "Backend", "Design Patterns"],
    readTime: "8 min read",
    date: "April 10, 2025",
  },
];

const Blog = () => {
  return (
    <section className="min-h-screen  text-[#e2e8f0] px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-lime-400 mb-4">Insights & Ideas</h2>
        <p className="text-lg text-slate-300 mb-28">Stay updated with the latest web development trends, tips, and tutorials curated by Mahmudul Islam.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1e293b] rounded-xl shadow-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            data-aos="fade-up"
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-6 space-y-4">
              <div className="flex gap-2 flex-wrap">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-lime-700 text-white px-2 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-lime-300">{blog.title}</h3>
              <p className="text-slate-400">{blog.summary}</p>
              <div className="flex justify-between items-center text-sm text-slate-500">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <button className="mt-3 inline-block text-lime-400 hover:underline transition">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
