import { ThemeProvider } from "./theme-provider";

function providers({ children }: { children: React.ReactNode }) {
  return (
    <>
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
