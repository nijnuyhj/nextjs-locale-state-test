import { faker } from "@faker-js/faker";

export const generateMockPosts = (count: number = 100) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(2),
  }));
};
