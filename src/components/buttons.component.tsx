"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button className="p-2 bg-blue-400 rounded-sm" onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link href="/register" className="p-2 bg-green-400 rounded-sm">
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button className="p-2 bg-red-400 rounded-sm" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile" className="p-2 bg-purple-400 rounded-sm">Profile</Link>;
};

export const DashboardButton = () => {
  return <Link href="/dashboard" className="p-2 bg-yellow-400 rounded-sm">Dashboard</Link>;
};
