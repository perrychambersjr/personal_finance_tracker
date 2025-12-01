"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const url ='http://localhost:5000'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(url + "/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Login failed");
      }

      const data = await res.json();
      localStorage.setItem("token", data.token);

      // Redirect after login
      router.push("/");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full p-6 bg-[var(--background)] border border-gray-200 dark:border-gray-700 rounded-lg shadow-md"
    >
      <h1 className="text-2xl font-semibold mb-6 text-[var(--foreground)]">
        Login
      </h1>

      {error && (
        <p className="mb-4 text-red-500 font-medium text-sm">{error}</p>
      )}

      <label className="block mb-4 text-[var(--foreground)] font-medium">
        Email
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          required
        />
      </label>

      <label className="block mb-6 text-[var(--foreground)] font-medium">
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 rounded-md bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary)/90] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};
