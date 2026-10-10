import { everyChapter, headings } from "@/content/site";

import styles from "./EveryChapter.module.css";

export function EveryChapter() {
  return (
    <section className="section" aria-labelledby="every-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{headings.everyChapter.eyebrow}</p>
          <h2 id="every-title" className="section-title">
            {headings.everyChapter.title}
          </h2>
        </div>
        <div className={styles.grid}>
          {everyChapter.map((item) => (
            <article key={item.title} className={styles.item}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.tags.length > 0 ? (
                <ul className={styles.tags} aria-label="Industries">
                  {item.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
