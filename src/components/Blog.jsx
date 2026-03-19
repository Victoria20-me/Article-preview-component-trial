import React from "react";
import { useState, useEffect } from "react";

const Blog = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    async function getArticles() {
      const response = await fetch("https://dev.to/api/articles");
      const data = await response.json();
      setArticles(data);
    }
    getArticles();
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Latest Articles</h1>
      <p className="text-center text-gray-500 mb-8">
        Latest tech articles from Dev.to
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden h-full"
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
            )}

            <div className="p-4">
              <div className="text-sm text-gray-400 mb-4">
                {article.tag_list?.map((tag, index) => (
                  <span key={index} className="mr-2">
                    #{tag}
                  </span>
                ))}
              </div>

              <h1 className="font-semibold text-lg mb-2 line-clamp-2">
                {article.title}
              </h1>
              <p>{article.description}</p>
              <div className="flex items-center gap-2 mt-4">
                <img
                  src={article.user.profile_image}
                  alt={article.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <p className="font-medium flex items-center">
                  {article.user.name}
                </p>
              </div>
              <div className="text-sm">
                <div className="flex flex-row gap-20">
                  <p className="">{article.readable_publish_date}</p>
                  <p className="text-sm text-gray-400">
                    {article.reading_time_minutes}min read
                  </p>
                  <p>{article.positive_reactions_count}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
