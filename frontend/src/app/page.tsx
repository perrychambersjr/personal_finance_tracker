"use client"; 

import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)]">
        <h1 className="text-3xl font-bold text-[var(--foreground)]">Welcome</h1>
        <p className="mt-4 text-[var(--foreground)]">Your finance dashboard goes here.</p>
      </main>
    </ProtectedRoute>
  );
}
