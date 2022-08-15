import React from "react";
import photo from "../imgs/illustration-hero.svg";

import Button from "./Button";
import Plan from "./Plan";

import styles from "./Card.module.css";

const Card = () => {
	return (
		<article className={styles.wrapper}>
			<header className={styles.header}>
				<img className={styles.hero} src={photo} alt="" />
			</header>
			<div className={styles.container}>
				<h1 className={styles.title}>Order Summary</h1>
				<p className={styles.description}>
					You can now listen to millions of songs, audiobooks, and
					podcasts on any device anywhere you like!
				</p>

				<Plan />

				<Button title="Proceed to Payment" />
				<Button title="Cancel Order" type="button--transparent" />
			</div>
		</article>
	);
};

export default Card;
