"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const LoginForm = () => {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const url = "http://localhost:5000";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const endpoint = mode === "login" ? "/api/auth/login" : "/api/auth/register";

      // Prepare body
      const bodyData =
        mode === "register"
          ? { name, email, password }
          : { email, password };

      // Send request
      const res = await fetch(url + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      // Instead of assuming JSON, check first
      const text = await res.text(); // get raw response
      console.log("Raw response:", text);

      let data;
      try {
        data = JSON.parse(text); // try parsing JSON
      } catch (err) {
        console.error("Failed to parse JSON:", err);
        setError("Server returned invalid response");
        setLoading(false);
        return;
      }

      if (!res.ok) {
        throw new Error(data.message || "Request failed");
      }

      // Save token
      localStorage.setItem("token", data.token);
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen w-full bg-[var(--background)] p-4 gap-8">
      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-[var(--background)] rounded-lg shadow-md"
      >
        <h1 className="text-3xl font-semibold mb-4 text-[var(--foreground)]">
          {mode === "login" ? "Welcome back" : "Create your account"}
        </h1>
        <p className="text-lg font-light mb-6 text-[var(--foreground)]/60">
          {mode === "login"
            ? "Please enter your details"
            : "Fill in your email and password to register"}
        </p>

        {error && (
          <p className="mb-4 text-red-500 font-medium text-sm">{error}</p>
        )}

      {mode === "register" && (
        <label className="block mb-4 text-[var(--foreground)] font-medium">
          Name
          <input
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
        </label>
      )}

        <label className="block mb-4 text-[var(--foreground)] font-medium">
          Email
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
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
            placeholder="••••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md bg-[var(--primary)] text-black font-semibold hover:bg-[var(--primary)/90] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading
            ? mode === "login"
              ? "Logging in..."
              : "Creating account..."
            : mode === "login"
            ? "Sign in"
            : "Register"}
        </button>

        <p className="mt-4 text-sm text-[var(--foreground)]/70">
          {mode === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <button
            type="button"
            className="text-[var(--primary)] font-medium hover:underline"
            onClick={() => setMode(mode === "login" ? "register" : "login")}
          >
            {mode === "login" ? "Sign up" : "Log in"}
          </button>
        </p>
      </form>

      {/* Logo */}
      <div className="hidden md:block">
        <Image src="/LoginLogo.png" width={350} height={300} alt="Logo" />
      </div>
    </div>
  );
};
