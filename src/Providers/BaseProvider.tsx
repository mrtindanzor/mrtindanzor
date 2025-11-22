"use client";

import Navbar from "@/components/Layout/Navbar";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollDirectionProvider } from "./ScrollDirectionProvider";

export default function BaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ScrollDirectionProvider>
      <Navbar />

      <AnimatePresence>
        <div key={pathname}>{children}</div>
      </AnimatePresence>
    </ScrollDirectionProvider>
  );
}
