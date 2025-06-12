import { http, HttpResponse } from "msw";

let postId = 1;

type RequestBody = {
  title: string;
  content: string;
};

export const resetPk = () => {
  postId = 1;
};

export const handlers = [
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
