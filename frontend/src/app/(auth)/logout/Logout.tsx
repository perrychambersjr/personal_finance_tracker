import { useRouter } from "next/dist/client/components/navigation";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import React, { useEffect } from 'react';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    // Clear token from localStorage
    document.cookie = 'token=; Max-Age=0; path=/;';
    localStorage.removeItem("token");

    // Redirect to login page
    router.push("/login");
  }, [router]);

  return (
    <div>
      <p>Logging out...</p>
    </div>
  )
}

export default Logout