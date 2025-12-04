// Sidebar.tsx
"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/transactions", label: "Transactions" },
  { href: "/budgets", label: "Budgets" },
  { href: "/invoices", label: "Invoices" },
  { href: "/accounts", label: "Accounts" },
  { href: "/settings", label: "Settings" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white border-r h-screen p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-8 text-gray-900">My App</h2>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-4 py-2 rounded-md hover:bg-gray-100 transition text-gray-900",
              pathname === item.href && "bg-gray-200 font-semibold"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-auto text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} My App
      </div>
    </aside>
  );
};

export default Sidebar;
