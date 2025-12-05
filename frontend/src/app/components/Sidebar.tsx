// Sidebar.tsx
"use client";


import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
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
    { href: "/invoices", label: "Invoices", icon: "Invoices" },
    { href: "/accounts", label: "Accounts", icon: "Accounts" },
    { href: "/settings", label: "Settings", icon: "Settings" },
  ];

  const secondaryItems = [
    { href: "/help", label: "Help", icon: "Help" },
    { href: "#", label: "Logout", icon: "Logout", onClick: handleLogout},
  ]

  return (
    <aside className="w-64 h-screen bg-gray-100 flex flex-col p-4">
      <Image
        src="/Logo.svg"
        alt="Finance Dashboard Logo"
        width={150}
        height={50}
        className="mb-8"
      />

      <div className="flex flex-col mb-auto">
        {navItems.map((item) => {
          const isSelected = pathname === item.href;

          const iconSrc = `/${item.icon}_${
            isSelected ? "Selected" : "Unselected"
          }.svg`;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 mb-4 p-2 rounded-md font-semibold text-sm ${
                isSelected ? "bg-[var(--primary)]" : ""
              }`}
            >
              <Image
                src={iconSrc}
                alt={item.label}
                width={22}
                height={22}
                className="shrink-0"
              />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      <div>
        {secondaryItems.map((item) => {
          const isSelected = pathname === item.href;

          const iconSrc = `/${item.icon}_${
            isSelected ? "Selected" : "Unselected"
          }.svg`;

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={item.onClick}
              className={`flex items-center gap-3 mb-4 p-2 rounded-md font-semibold text-sm ${
                isSelected ? "bg-[var(--primary)]" : ""
              }`}
            >
              <Image
                src={iconSrc}
                alt={item.label}
                width={22}
                height={22}
                className="shrink-0"
              />

              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
      
    </aside>
  );
};

export default Sidebar;
