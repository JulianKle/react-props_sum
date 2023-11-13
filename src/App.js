import React from "react";
import "./styles.css";

function Summation(a, b) {
  let numberA = parseInt(a);
  let numberB = parseInt(b);
  const sum = numberA + numberB;
  return sum;
}

export default function App() {
  return <Sum valueA="2" valueB="4" />;
}

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {Summation(valueA, valueB)}
    </h1>
  );
}
