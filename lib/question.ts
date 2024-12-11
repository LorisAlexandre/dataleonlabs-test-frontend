"server-only";

import { BASE_URL } from "./base-url";

export async function getRandomQuestion(): Promise<Question | null> {
  const res = await fetch(BASE_URL + "/api/quiz", {
    cache: "no-cache",
  });

  if (!res.ok) {
    return null;
  }

  const question = (await res.json()) as Question;

  return question;
}

export async function getQuestionById(
  questionId?: string
): Promise<Question | null> {
  const res = await fetch(`${BASE_URL}/api/quiz/${questionId ?? ""}`);

  if (!res.ok) return null;

  const question = (await res.json()) as Question;

  return question;
}

export type Question = {
  id: number;
  text: string;
  expectedAnswer: "YES" | "NO";
};
// This questions was made by CHATGPT
// There is only 3 NO as expectedAnswer
export const questions: Question[] = [
  {
    text: "Do you like React?",
    expectedAnswer: "YES",
    id: 0,
  },
  {
    text: "Is CSS challenging for you?",
    expectedAnswer: "YES",
    id: 1,
  },
  {
    text: "Do you use Node.js for backend development?",
    expectedAnswer: "YES",
    id: 2,
  },
  {
    text: "Have you tried TypeScript?",
    expectedAnswer: "YES",
    id: 3,
  },
  {
    text: "Do you prefer frontend over backend?",
    expectedAnswer: "YES",
    id: 4,
  },
  {
    text: "Is JavaScript your primary programming language?",
    expectedAnswer: "YES",
    id: 5,
  },
  {
    text: "Have you built a project with Next.js?",
    expectedAnswer: "YES",
    id: 6,
  },
  {
    text: "Do you enjoy debugging code?",
    expectedAnswer: "NO",
    id: 7,
  },
  {
    text: "Do you know how to use Git?",
    expectedAnswer: "YES",
    id: 8,
  },
  {
    text: "Have you ever used a CSS framework like Tailwind?",
    expectedAnswer: "YES",
    id: 9,
  },
  {
    text: "Do you write unit tests for your code?",
    expectedAnswer: "YES",
    id: 10,
  },
  {
    text: "Do you use REST APIs regularly?",
    expectedAnswer: "YES",
    id: 11,
  },
  {
    text: "Do you prefer SQL over NoSQL databases?",
    expectedAnswer: "YES",
    id: 12,
  },
  {
    text: "Have you tried building a Progressive Web App (PWA)?",
    expectedAnswer: "YES",
    id: 13,
  },
  {
    text: "Do you enjoy working with JavaScript libraries?",
    expectedAnswer: "YES",
    id: 14,
  },
  {
    text: "Have you ever used Docker in your projects?",
    expectedAnswer: "YES",
    id: 15,
  },
  {
    text: "Is learning new frameworks difficult for you?",
    expectedAnswer: "NO",
    id: 16,
  },
  {
    text: "Do you use Visual Studio Code as your IDE?",
    expectedAnswer: "YES",
    id: 17,
  },
  {
    text: "Have you worked with GraphQL?",
    expectedAnswer: "YES",
    id: 18,
  },
  {
    text: "Do you prefer manual deployments over CI/CD pipelines?",
    expectedAnswer: "NO",
    id: 19,
  },
  {
    text: "Is responsive design a priority in your projects?",
    expectedAnswer: "YES",
    id: 20,
  },
  {
    text: "Do you enjoy writing HTML?",
    expectedAnswer: "YES",
    id: 21,
  },
  {
    text: "Have you ever built a mobile-first web application?",
    expectedAnswer: "YES",
    id: 22,
  },
  {
    text: "Do you use Sass or SCSS for styling?",
    expectedAnswer: "YES",
    id: 23,
  },
  {
    text: "Have you worked with serverless technologies?",
    expectedAnswer: "YES",
    id: 24,
  },
];
