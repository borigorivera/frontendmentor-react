import React from "react";
import icon from "../imgs/icon-music.svg";
import styles from "./Plan.module.css";

const Plan = () => {
	return (
		<article className={styles.wrapper}>
			<div className={styles.container}>
				<img src={icon} alt="" />
				<div className={styles.nameContainer}>
					<h2 className={styles.name}>Annual Plan</h2>
					<p className={styles.price}>$59.99/year</p>
				</div>
			</div>
			<a className={styles.link} href="">
				Change
			</a>
		</article>
	);
};

export default Plan;
