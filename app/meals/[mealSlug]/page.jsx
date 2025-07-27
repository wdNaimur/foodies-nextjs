import React from "react";
import classes from "./page.module.css";
import Image from "next/image";
import { getMeal } from "@/app/_lib/meals";
import { notFound } from "next/navigation";

export default function SingleMeal({ params }) {
  const { mealSlug } = params;
  const meal = getMeal(mealSlug);
  console.log(meal);
  if (!meal) {
    notFound();
  }
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main className={classes.main}>
        <div className={classes.instructions}>
          <h2
            style={{
              marginBottom: "-40px",
              marginTop: "-10px",
              color: "#ddd8d8",
            }}
          >
            Instructions
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: meal.instructions.replace(/\n/g, "<br />"),
            }}
          ></p>
        </div>
      </main>
    </>
  );
}
