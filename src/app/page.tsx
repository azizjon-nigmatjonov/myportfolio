"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch(`https://full-stack-react-app.onrender.com/api/articles`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
}
