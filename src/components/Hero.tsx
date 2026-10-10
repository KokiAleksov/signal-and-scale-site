import Image from "next/image";

import illustration from "@/assets/illustration.png";
import { book, editions } from "@/content/site";
import { formatUsd } from "@/lib/format";

import styles from "./Hero.module.css";

const lowestPrice = Math.min(...editions.map((edition) => edition.priceUsd));

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.art}>
          <Image
            src={illustration}
            alt="Hand-drawn ladder climbing to an orange sun marked start here, over pencil sketches of buyers, targets and rising bars."
            sizes="(max-width: 820px) 380px, 520px"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className={styles.copy}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.name}>{book.title}:</span>
            <span className={styles.subtitle}>{book.subtitle}</span>
          </h1>
          <p className={styles.tagline}>{book.tagline}</p>
          <p className={styles.byline}>
            <strong>by {book.author}</strong>
            <span>{book.authorRole}</span>
          </p>
          <div className={styles.actions}>
            <a className="btn btn-primary" href="#buy">
              Choose your edition
            </a>
            <a className="btn btn-outline" href="#book">
              What&apos;s inside
            </a>
          </div>
          <p className={styles.note}>
            Three editions from {formatUsd(lowestPrice)} at launch pricing
          </p>
        </div>
      </div>
    </section>
  );
}
