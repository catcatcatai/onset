import { Suspense } from "react";
import { PageLoader } from "@/components/ui/page-loader";
import { ProfilesContent } from "./profiles-content";

export default function ProfilesPage() {
  return (
    <Suspense fallback={<PageLoader />}>
      <ProfilesContent />
    </Suspense>
  );
}
