"use client";

import {
  SignInButton,
  UserButton,
  useAuth,
  useUser,
  SignOutButton,
} from "@clerk/nextjs";

import { syncUserApi } from "./lib/api";

import {
  successToast,
  errorToast,
} from "./lib/toast";

export default function HomePage() {
  const {
    isSignedIn,
    getToken,
    isLoaded,
  } = useAuth();

  const { user } = useUser();

  const syncUser = async () => {
    try {
      const token = await getToken();

      if (!token) return;

      await syncUserApi(token);

      successToast(
        "User Synced Successfully"
      );
    } catch (error) {
      errorToast(
        "Something went wrong"
      );
    }
  };

  if (!isLoaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-zinc-700 border-t-white" />
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-sm border border-zinc-800 bg-zinc-900/90 p-8 shadow-2xl backdrop-blur-xl">
        
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-2xl font-bold">
            C
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-center text-4xl font-extrabold tracking-tight">
          Clerk Auth
        </h1>

        <p className="mb-8 text-center text-zinc-400">
          Next.js + Express + MongoDB
        </p>

        {!isSignedIn ? (
          <SignInButton mode="modal">
            <button className="w-full rounded-sm bg-white px-5 py-3 text-lg font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-200">
              Sign In
            </button>
          </SignInButton>
        ) : (
          <div className="flex flex-col items-center gap-6">
            
            {/* Avatar */}
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "w-16 h-16",
                },
              }}
            />

            {/* User Info */}
            <div className="text-center">
              <h2 className="text-2xl font-semibold">
                Welcome
              </h2>

              <p className="mt-1 text-zinc-400">
                {user?.fullName ||
                  user?.primaryEmailAddress
                    ?.emailAddress}
              </p>
            </div>

            {/* Sync Button */}
            <button
              onClick={syncUser}
              className="w-full rounded-sm bg-blue-600 px-5 py-3 text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-blue-700"
            >
              Sync User
            </button>

            {/* Logout Button */}
            <SignOutButton>
              <button className="w-full rounded-sm border border-zinc-700 bg-zinc-800 px-5 py-3 text-lg font-semibold transition-all duration-300 hover:bg-zinc-700">
                Logout
              </button>
            </SignOutButton>
          </div>
        )}
      </div>
    </main>
  );
}