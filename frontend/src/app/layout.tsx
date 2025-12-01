import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finance App",
  description: "Track your personal finance",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <header className="p-4 shadow-md bg-[var(--background)]">
          <h1 className="text-xl font-semibold">Finance App</h1>
        </header>

        <main>{children}</main>

        <footer className="p-4 text-center text-sm text-neutral-500">
          &copy; 2025 My Finance App
        </footer>
      </body>
    </html>
  );
}
