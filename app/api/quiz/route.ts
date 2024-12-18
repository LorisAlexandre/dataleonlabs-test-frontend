import { questions } from "@/lib/question";

export const revalidate = 0;

export async function GET() {
  const randomNb = Math.floor(Math.random() * questions.length);

  const question = questions[randomNb] ?? null;

  return Response.json(question);
}
