import { http, HttpResponse } from "msw";
import { generateMockPosts } from "./mockPosts";

let postId = 101;

type RequestBody = {
  title: string;
  content: string;
};

export const postHandlers = [
  http.get("/:locale/posts", () => {
    const posts = generateMockPosts();
    return HttpResponse.json(posts, { status: 200 });
  }),

  http.get("/posts", () => {
    const posts = generateMockPosts();
    return HttpResponse.json(posts, { status: 200 });
  }),

  http.post("/posts", async ({ request }) => {
    const { title, content } = (await request.json()) as RequestBody;

    return HttpResponse.json(
      {
        id: postId++,
        title,
        content,
      },
      { status: 201 }
    );
  }),
];
