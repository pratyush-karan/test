"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Questions = () => {
  const [question, setQuestion] = useState("");
  const router = useRouter();

  return (
    <>
      <div>Questions</div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <Link
        href={{
          pathname: `/question/${question}`,
          query: {
            name: "Ezio Auditore",
            age: 30,
          },
        }}
      >
        {question ? `Go to Question - ${question}` : `Input Question`}
      </Link>
    </>
  );
};

export default Questions;
