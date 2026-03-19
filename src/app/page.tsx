"use client";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleMoveToPage = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Next.js Training</h1>
        <button
          type="button"
          onClick={() => handleMoveToPage("/modal/keep_open_on_sucess")}
          className="bg-white text-black"
        >
          モーダルを開く
        </button>
      </main>
    </div>
  );
}
