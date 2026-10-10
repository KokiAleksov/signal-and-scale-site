import type { CSSProperties } from "react";

import { headings, organization } from "@/content/site";

import styles from "./Chapters.module.css";

// Hand-drawn rungs are never quite level.
const tilts = [-4, -2, -6, -3, -5, -2, -4, -6, -3, -5];

export function Chapters() {
  const total = organization.chapters.length;

  return (
    <section className={`section ${styles.section}`} aria-labelledby="chapters-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.intro}>
          <div className="section-head">
            <p className="eyebrow">{headings.chapters.eyebrow}</p>
            <h2 id="chapters-title" className="section-title">
              {headings.chapters.title}
            </h2>
          </div>
          <p>{organization.summary}</p>
        </div>

        <div className={styles.ladderWrap}>
          <div className={styles.sun} aria-hidden="true">
            <span className={styles.dot} />
            <span className={styles.startHere}>start here</span>
          </div>
          <ol className={styles.ladder}>
            {organization.chapters.map((chapter, index) => (
              <li
                key={chapter}
                className={styles.rung}
                style={
                  {
                    "--tilt": `${tilts[index % tilts.length]}deg`,
                    "--fade": `${Math.round((index / (total - 1)) * 70)}%`,
                  } as CSSProperties
                }
              >
                <span className={styles.number}>chapter {index + 1}</span>
                <h3 className={styles.chapter}>{chapter}</h3>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
