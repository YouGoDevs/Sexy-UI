import React from "react";
import styles from "../styles/button.module.css";

interface ButtonProps {
  backgroundColor?: string;
  size?: string;
  label?: string;
  onClick?: (e: any) => void;
  color?: string;
  width?: string;
}

export const Button = ({
  backgroundColor,
  size,
  label,
  onClick,
  color,
  width,
}: ButtonProps) => {
  return <div className={styles.button}>{label}</div>;
};
