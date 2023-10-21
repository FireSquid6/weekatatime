"use client";
import Image from "next/image";
import AuthCheck from "../components/AuthCheck";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello world!</p>
      <AuthCheck>
        <p>You're logged in!</p>
      </AuthCheck>
    </main>
  );
}
