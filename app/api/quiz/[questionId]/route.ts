import { questions } from "@/lib/question";
import { NextRequest } from "next/server";

export const revalidate = 10;

export async function GET(
  _req: NextRequest,
  {
    params,
  }: {
    params: Promise<{
      questionId: string;
    }>;
  }
) {
  const questionId = (await params).questionId;

  const question = questions.find((el) => el.id === Number(questionId)) ?? null;

  return Response.json(question);
}
