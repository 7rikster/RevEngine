import { Button } from "@/components/ui/button";
import LogOut from "@/module/auth/components/logout";
import { requireAuth } from "@/module/auth/utils/auth-utils";
import Image from "next/image";

export default async function Home() {
  await requireAuth();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to My Next.js App!</h1>
      <LogOut><Button className="cursor-pointer">Log Out</Button></LogOut>
    </div>
  );
}
