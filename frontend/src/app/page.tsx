"use client";

import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

import { syncUserApi } from "./lib/api";

export default function HomePage() {
  const { getToken } = useAuth();

  const syncUser = async () => {
    try {
      const token = await getToken();

      if (!token) return;

      const data =
        await syncUserApi(token);

      console.log(data);

      alert("User Synced");
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center text-white">
      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
        
        <h1 className="mb-2 text-center text-4xl font-bold">
          Clerk Auth
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Next.js + Express + MongoDB
        </p>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="w-full rounded-xl bg-white px-5 py-3 font-semibold text-black hover:opacity-90">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <div className="flex flex-col items-center gap-6">
            <UserButton />

            <button
              onClick={syncUser}
              className="w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-700"
            >
              Sync User
            </button>
          </div>
        </SignedIn>
      </div>
    </main>
  );
}