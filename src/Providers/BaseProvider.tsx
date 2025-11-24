"use client";

import RouteAnimation from "@/components/common/RouteAnimation";
import Navbar from "@/components/Layout/Navbar";
import { ScrollDirectionProvider } from "./ScrollDirectionProvider";

export default function BaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollDirectionProvider>
      <Navbar />

      <RouteAnimation>{children}</RouteAnimation>
    </ScrollDirectionProvider>
  );
}
