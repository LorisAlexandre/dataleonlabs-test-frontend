import { getRandomQuestion } from "@/lib/question";
import { Home } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export const revalidate = 0;

export default async function ServerPage() {
  const question = await getRandomQuestion();

  question && redirect(`/server/${question.id}`);

  return (
    <div className="flex-1 flex items-center justify-center min-h-screen size-full">
      <Link
        prefetch={true}
        href={"/"}
        className="flex items-center justify-center gap-1"
      >
        <Home /> Home
      </Link>
    </div>
  );
}
