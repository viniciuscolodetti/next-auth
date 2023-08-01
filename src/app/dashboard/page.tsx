'use client'

import { LogoutButton, ProfileButton } from "@/components/buttons.component";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session } = useSession();

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="flex flex-col items-start gap-3">
        <h1>Dashboard</h1>
        <span>Usuário: {session?.user?.name}</span>

        <div className="flex flex-row gap-2">
          <ProfileButton />
          <LogoutButton />
        </div>
      </div>
    </main>
  );
}
