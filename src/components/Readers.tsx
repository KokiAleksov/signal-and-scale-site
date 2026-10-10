import { headings, readers } from "@/content/site";

import styles from "./Readers.module.css";

export function Readers() {
  return (
    <section className={`section ${styles.readers}`} aria-labelledby="readers-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{headings.readers.eyebrow}</p>
          <h2 id="readers-title" className="section-title">
            {headings.readers.title}
          </h2>
        </div>
        <ul className={styles.list}>
          {readers.map((reader) => (
            <li key={reader.title} className={styles.item}>
              <h3>{reader.title}</h3>
              <p>{reader.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
