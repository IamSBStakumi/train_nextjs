"use client";

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import useModal from "@/src/hooks/useModal";
import ApplyModal from "@/src/components/ApplyModal";

export default function Home() {
  const modal = useModal();

  const { data: date } = useQuery({
    queryKey: ["date"],
    queryFn: () => {
      return new Date();
    },
    gcTime: 1000 * 60 * 60 * 24 * 365,
    staleTime: 5 * 60,
  });
  const queryClient = useQueryClient();

  const handleClickOpenModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    modal.open();
  };

  const mutation = useMutation({
    mutationFn: () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("mutation");
        }, 1000);
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["date"] });
    },
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h2>{date?.toISOString()}</h2>
        <button
          type="button"
          onClick={handleClickOpenModal}
          className="bg-white text-black"
        >
          モーダルを開く
        </button>
        {modal.isOpen && (
          <ApplyModal
            doAction={mutation.mutate}
            isPending={mutation.isPending}
            hasDone={mutation.isSuccess}
            onClose={modal.close}
          />
        )}
      </main>
    </div>
  );
}
