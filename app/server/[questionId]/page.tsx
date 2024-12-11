import { isAnswerValid } from "@/lib/is-answer-valid";
import { getQuestionById } from "@/lib/question";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  searchParams: Promise<{ [key: string]: string[] | string | undefined }>;
  params: Promise<{ [key: string]: string[] | string | undefined }>;
}
export default async function ServerQuestionPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = await props.params;

  const questionId = Array.isArray(params.questionId)
    ? params.questionId[0]
    : params.questionId;
  const answer = Array.isArray(searchParams.answer)
    ? searchParams.answer[0]
    : searchParams.answer;

  const question = await getQuestionById(questionId);

  if (!question) {
    return notFound();
  }

  return (
    <div
      className={cn(
        "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen size-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] transition-colors duration-300",
        isAnswerValid(answer) &&
          answer === question.expectedAnswer &&
          "bg-green-500",
        isAnswerValid(answer) &&
          answer !== question.expectedAnswer &&
          "bg-red-500"
      )}
    >
      <section className="row-span-2 size-full flex flex-col items-center justify-evenly">
        <h1 className="text-3xl text-foreground text-center font-extrabold max-w-md">
          {question.text}
        </h1>

        {isAnswerValid(answer) ? (
          <div className="w-full flex flex-col items-center justify-center gap-4 text-3xl font-bold">
            {answer === question.expectedAnswer ? (
              <p>Good choice !</p>
            ) : (
              <p>Damn !</p>
            )}

            <a className="text-base font-normal underline" href="/server">
              Another one ?
            </a>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center gap-4">
            <Link
              className="size-full max-w-32 aspect-square rounded shadow border  flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              prefetch={true}
              href={`/server/${questionId}?answer=YES`}
            >
              YES
            </Link>
            <Link
              className="size-full max-w-32 aspect-square rounded shadow border  flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300"
              prefetch={true}
              href={`/server/${questionId}?answer=NO`}
            >
              NO
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
