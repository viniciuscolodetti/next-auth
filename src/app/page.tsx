import {
  LoginButton,
  RegisterButton,
} from "@/components/buttons.component";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { User } from "@/components/user.component";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div className="flex flex-col gap-6 items-center justify-between">
        <div className="flex flex-row gap-2">
          <LoginButton />
          <RegisterButton />
        </div>

        <div className="flex flex-col gap-2">
          <h1>Server Session</h1>
          <pre>{JSON.stringify(session)}</pre>
        </div>
        
        <User />
      </div>
    </main>
  );
}
