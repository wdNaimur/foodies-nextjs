import React from "react";

export default function SingleMeal({ params }) {
  return (
    <main>
      <h1>SingleMeal</h1>
      <p>{params.slug}</p>
    </main>
  );
}
