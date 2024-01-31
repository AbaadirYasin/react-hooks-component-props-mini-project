import React from "react";

export default function Article(props) {
  const { title, date, preview, minutes } = props;

  const renderMinutes = () => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);

    if (minutes < 30) {
      return '☕️'.repeat(coffeeCups) + ` ${minutes} min read`;
    } else {
      return '🍱'.repeat(bentoBoxes) + ` ${minutes} min read`;
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderMinutes()}</p>
    </article>
  );
}
