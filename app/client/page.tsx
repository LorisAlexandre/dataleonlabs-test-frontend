"use client";

import { BASE_URL } from "@/lib/base-url";
import { isAnswerValid } from "@/lib/is-answer-valid";
import { Question } from "@/lib/question";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function ClientPage() {
  const [refresh, setRefresh] = useState<boolean>(false);
  const [question, setQuestion] = useState<Question | null>(null);
  const [clientAnswer, setClientAnswer] = useState<"YES" | "NO" | undefined>(
    undefined
  );

  useEffect(() => {
    (async () => {
      const fetchedQuestion = await fetch(BASE_URL + "/api/quiz").then((res) =>
        res.json()
      );

      setClientAnswer(undefined);
      setQuestion(fetchedQuestion);
    })();
  }, [refresh]);

  return (
    <div
      className={cn(
        "grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen size-full p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] transition-colors duration-300",
        isAnswerValid(clientAnswer) &&
          clientAnswer === question?.expectedAnswer &&
          "bg-green-500",
        isAnswerValid(clientAnswer) &&
          clientAnswer !== question?.expectedAnswer &&
          "bg-red-500"
      )}
    >
      <section className="row-span-2 size-full flex flex-col items-center justify-evenly">
        <h1 className="text-3xl text-foreground text-center font-extrabold max-w-md">
          {question?.text}
        </h1>

        {isAnswerValid(clientAnswer) ? (
          <div className="w-full flex flex-col items-center justify-center gap-4 text-3xl font-bold">
            {clientAnswer === question?.expectedAnswer ? (
              <p>Good choice !</p>
            ) : (
              <p>Damn !</p>
            )}

            <div
              className="text-base font-normal underline cursor-pointer"
              onClick={() => setRefresh(!refresh)}
            >
              Another one ?
            </div>
          </div>
        ) : (
          <div className="w-full flex items-center justify-center gap-4">
            <div
              className="size-full max-w-32 aspect-square rounded shadow border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
              onClick={() => setClientAnswer("YES")}
            >
              YES
            </div>
            <div
              className="size-full max-w-32 aspect-square rounded shadow border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300 cursor-pointer"
              onClick={() => setClientAnswer("NO")}
            >
              NO
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
