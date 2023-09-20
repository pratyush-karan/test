"use client";
import React from "react";
import "./landingPage.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div className="container">
        <button className="button" onClick={() => router.push("/test")}>
          Start
        </button>
      </div>
    </main>
  );
}
