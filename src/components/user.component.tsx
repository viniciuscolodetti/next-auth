"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col gap-2">
      <h1>Client Session</h1>
      <pre>{JSON.stringify(session)}</pre>
    </div>
  );
};
