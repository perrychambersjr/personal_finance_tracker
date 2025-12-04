"use client"; 

import { ProtectedRoute } from "@/app/components/ProtectedRoute";
import { redirect } from "next/navigation";

export default function Home() {
  redirect('/login')
}
