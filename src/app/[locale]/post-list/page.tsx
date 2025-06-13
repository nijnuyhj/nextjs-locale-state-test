"use client";

import { useEffect, useState } from "react";
import axios from "@/lib/axios";

type Post = {
  id: number;
  title: string;
  content: string;
};

export default function PostListPage() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts");
        setPosts(res.data);
      } catch (e) {
        console.error("Error", e);
      }
    };

    fetchPosts();
  }, []);

  if (!posts) return <div>로딩중...</div>;

  return (
    <main className="p-10 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">게시글 목록</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-1">{post.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
