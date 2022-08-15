import React from "react";
import styles from "./Button.module.css";

const Button = ({ title, type }) => {
	return (
		<button className={`${styles.button} ${type !== "" && styles[type]}`}>
			{title}
		</button>
	);
};

export default Button;
