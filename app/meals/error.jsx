"use client";
import React from "react";

export default function Error({ error }) {
  console.log("error", { error });
  return (
    <main className="error">
      <h1>An Error Has occurred!</h1>
      <p>Failed to load meals. Please try again later.</p>
    </main>
  );
}
