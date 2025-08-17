"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/", // always send user back to home
        })
      }
      className="flex items-center w-full gap-2 px-3 py-2 text-sm font-medium text-red-500 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-600 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      <span>Logout</span>
    </button>
  );
}
