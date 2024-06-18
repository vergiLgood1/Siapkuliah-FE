"use client";

import { FC } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";

interface PaginationControlsProps {
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";
  const per_page = searchParams.get("per_page") ?? "5";

  return (
    <div className="flex gap-2">
      <Button
        disabled={!hasPrevPage}
        onClick={() => {
          router.push(`/?page=${Number(page) - 1}&per_page=${per_page}`);
        }}
      >
        prev page
      </Button>

      <div>
        {page} / {Math.ceil(10 / Number(per_page))}
      </div>

      <Button
        disabled={!hasNextPage}
        onClick={() => {
          router.push(`/?page=${Number(page) + 1}&per_page=${per_page}`);
        }}
      >
        next page
      </Button>
    </div>
  );
};

export default PaginationControls;
