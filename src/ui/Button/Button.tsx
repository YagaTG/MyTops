"use client";

import { useState } from "react";
import styles from "./button.module.css";
interface IButton {
  text: string;
}

export default function Counter({ text, onClick }: IButton) {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {text}
    </button>
  );
}
