import { ThemeProvider } from "./theme-provider";
import { Toaster } from "@/components/ui/sonner";

function providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        themes={["light", "dark", "blue", "red"]}
      >
        {children}
      </ThemeProvider>
    </>
  );
}

export default providers;
