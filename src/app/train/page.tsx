import { Suspense } from "react";
import { FaceTrainer } from "@/components/face-trainer/FaceTrainer";
import { PageLoader } from "@/components/ui/page-loader";

export default function TrainPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <FaceTrainer />
    </Suspense>
  );
}
