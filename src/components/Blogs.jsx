import React from "react";
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";

const posts = [
  {
    id: 1,
    image: blog1,
    tags: ["Asia", "East Nusa Tenggara", "Indonesia", "Labuan Bajo"],
    title: "How To Visit Nuca Molas: Jurassic Park Island In Flores",
    excerpt:
      "The latest place in Indonesia that’s been compared to Jurassic Park is Nuca Molas, a little island off the coast of Flores with wild and exotic scenery.…",
  },
  {
    id: 2,
    image: blog2,
    tags: ["Arizona", "North America", "Slot Canyons", "USA"],
    title: "6 Ways To Avoid The Crowds At Antelope Canyon",
    excerpt:
      "Antelope Canyon is as famous as it’s beautiful, and unfortunately that means it draws huge crowds of people wanting to see it for themselves. Visitors are …",
  },
  {
    id: 3,
    image: blog3,
    tags: ["Hiking", "Jungles", "South America", "Suriname"],
    title: "Hiking Mount Kasikasima In Suriname: My Experience",
    excerpt:
      "I just got back from hiking Mount Kasikasima in Suriname! It’s a fun expedition that involves flying a little bush plane into the jungle, taking a canoe …",
  },
  {
    id: 4,
    image: blog4,
    tags: ["Asia", "East Nusa Tenggara", "Indonesia", "Labuan Bajo"],
    title: "How To Visit Nuca Molas: Jurassic Park Island In Flores",
    excerpt:
"The latest place in Indonesia that’s been compared to Jurassic Park is Nuca Molas, a little island off the coast of Flores with wild and exotic scenery.…",
  },
  {
    id: 5,
    image: blog5,
    tags: ["Arizona", "North America", "Slot Canyons", "USA"],
    title: "6 Ways To Avoid The Crowds At Antelope Canyon",
    excerpt:
      "Antelope Canyon is as famous as it’s beautiful, and unfortunately that means it draws huge crowds of people wanting to see it for themselves. Visitors are …",
  },
  {
    id: 6,
    image: blog6,
    tags: ["Hiking", "Jungles", "South America", "Suriname"],
    title: "Hiking Mount Kasikasima In Suriname: My Experience",
    excerpt:
      "I just got back from hiking Mount Kasikasima in Suriname! It’s a fun expedition that involves flying a little bush plane into the jungle, taking a canoe …",
  },
];

export default function Blogs() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h3 className="text-xs font-semibold text-gray-700 uppercase mb-1 tracking-wider">
          Blog Posts
        </h3>
        <div className="h-0.5 w-12 bg-orange-500 mb-8"></div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-md transition bg-white"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-2 text-xs text-orange-500 font-medium">
                  {post.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-base font-semibold mb-2 hover:text-orange-500 transition cursor-pointer">
                  {post.title}
                </h4>

                {/* Excerpt */}
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Button */}
                <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-sm transition">
                  READ MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </section>
  );
}
