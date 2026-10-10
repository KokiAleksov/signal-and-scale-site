import { headings, manual } from "@/content/site";

import styles from "./Manual.module.css";

export function Manual() {
  return (
    <section id="book" className={`section ${styles.manual}`} aria-labelledby="book-title">
      <div className={`wrap ${styles.split}`}>
        <div className="section-head">
          <p className="eyebrow">{headings.manual.eyebrow}</p>
          <h2 id="book-title" className={styles.lead}>
            {manual.lead} <em>{manual.leadHighlight}</em>
          </h2>
        </div>
        <div className={styles.prose}>
          {manual.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className={styles.thread}>{manual.thread}</p>
        </div>
      </div>
    </section>
  );
}
