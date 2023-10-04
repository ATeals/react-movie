import { Suspense } from "react";
import { DetailModal, Skeleton } from "./DetailModal";

export const MovieDetail = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      <DetailModal />
    </Suspense>
  );
};
