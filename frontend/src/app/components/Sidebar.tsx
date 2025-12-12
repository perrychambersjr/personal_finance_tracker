// Sidebar.tsx
"use client";


import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Clear bearer token from cookies and localStorage
    document.cookie = "auth_token=; Max-Age=0; path=/"; 
    localStorage.removeItem("token"); 

    // Redirect to the login page after logging out
    window.location.href = "/login";
  };

  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: "Dashboard" },
    { href: "/transactions", label: "Transactions", icon: "Transactions" },
    { href: "/budgets", label: "Budgets", icon: "Budgets" },
    { href: "/goals", label: "Goals", icon: "Goals" },
    { href: "/analytics", label: "Analytics", icon: "Analytics" },
    { href: "/accounts", label: "Accounts", icon: "Accounts" },
    { href: "/settings", label: "Settings", icon: "Settings" },
  ];

  const secondaryItems = [
    { href: "/help", label: "Help", icon: "Help" },
    { href: "#", label: "Logout", icon: "Logout", onClick: handleLogout},
  ]

  return (
    <aside
      className={`
        h-screen bg-white text-black flex flex-col 
        transition-all duration-300 p-4

        ${collapsed ? "w-20 rounded-full items-center justify-between py-6" : "w-56 rounded-none"}
      `}
    >
      {/* Toggle button — keep it inside, aligned at top */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className={`mb-6 p-2 rounded-md hover:bg-[var(--primary)] transition duration-200 flex justify-center
        }`}
      >
        <Image
          src={collapsed ? "/Toggle_Right.svg" : "/Toggle_Left.svg"}
          alt="Toggle"
          width={20}
          height={20}
        />
      </button>

      {/* Logo only when expanded */}
      {!collapsed && (
        <Image
          src="/Logo.svg"
          alt="Logo"
          width={150}
          height={50}
          className="mb-10"
        />
      )}

      {/* MAIN NAV */}
      <nav
        className={`flex flex-col ${
          collapsed ? "items-center gap-6 flex-1 mt-4" : "gap-2"
        }`}
      >
        {navItems.map((item) => {
          const isSelected = pathname === item.href;
          const iconSrc = `/${item.icon}_${isSelected ? "Selected" : "Unselected"}.svg`;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex items-center hover:bg-[var(--primary)]
                ${collapsed ? "justify-center" : "gap-3"} 
                p-2 rounded-md transition-all duration-200
                ${isSelected ? "bg-[var(--primary)]" : ""}
              `}
            >
              <Image
                src={iconSrc}
                alt={item.label}
                width={collapsed ? 26 : 22}
                height={collapsed ? 26 : 22}
              />

              {!collapsed && <span className="text-sm font-semibold">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* BOTTOM SECTION */}
      <div className={`mt-auto ${collapsed ? "flex flex-col items-center gap-6" : ""}`}>
        {secondaryItems.map((item) => {
          const isSelected = pathname === item.href;
          const iconSrc = `/${item.icon}_${isSelected ? "Selected" : "Unselected"}.svg`;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.onClick}
              className={`
                flex items-center 
                ${collapsed ? "justify-center" : "gap-3"} 
                p-2 rounded-md transition-all duration-200
                ${isSelected ? "bg-white/20" : ""}
              `}
            >
              <Image
                src={iconSrc}
                alt={item.label}
                width={collapsed ? 26 : 22}
                height={collapsed ? 26 : 22}
              />

              {!collapsed && <span className="text-sm font-semibold">{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
