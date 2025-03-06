import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

import { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider placement="bottom-center" />
      {children}
    </HeroUIProvider>
  );
}
