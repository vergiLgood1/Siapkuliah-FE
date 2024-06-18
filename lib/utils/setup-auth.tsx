"use client";

import { useVerify } from "@/hooks";
import { Toaster } from "sonner";

export default function SetupAuth() {
  useVerify();

  <Toaster position="top-center" richColors={true} />;
}
