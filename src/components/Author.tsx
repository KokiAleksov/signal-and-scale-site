import Image from "next/image";

import sketch from "@/assets/sketch.png";
import { authorBio, book, headings } from "@/content/site";

import styles from "./Author.module.css";

export function Author() {
  return (
    <section id="author" className={`section ${styles.author}`} aria-labelledby="author-title">
      <Image className={styles.sketch} src={sketch} alt="" sizes="(max-width: 820px) 90vw, 640px" />
      <div className={`wrap ${styles.split}`}>
        <h2 id="author-title" className={styles.title}>
          {headings.author.title}
        </h2>
        <div className={styles.text}>
          <p className={styles.ident}>
            <span className={styles.name}>{book.author}</span>
            <span className={styles.role}>{book.authorRole}</span>
          </p>
          {authorBio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
