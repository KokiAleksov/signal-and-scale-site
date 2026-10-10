import { editions, headings, type Edition } from "@/content/site";
import { formatEur, formatUsd } from "@/lib/format";

import { Book3D } from "./Book3D";
import styles from "./Editions.module.css";

export function Editions() {
  return (
    <section id="buy" className={`section ${styles.section}`} aria-labelledby="buy-title">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">{headings.editions.eyebrow}</p>
          <h2 id="buy-title" className="section-title">
            {headings.editions.title}
          </h2>
        </div>
        <ul className={styles.grid}>
          {editions.map((edition) => (
            <EditionCard key={edition.id} edition={edition} />
          ))}
        </ul>
        <p className={styles.note}>{headings.editions.note}</p>
      </div>
    </section>
  );
}

function EditionCard({ edition }: { edition: Edition }) {
  const savings = edition.regularPriceUsd - edition.priceUsd;
  const buttonClass = edition.featured ? "btn btn-primary" : "btn btn-outline";

  return (
    <li className={`${styles.card} ${edition.featured ? styles.featured : ""}`}>
      {edition.featured ? <span className={styles.badge}>Best value</span> : null}

      <Book3D
        className={styles.cover}
        cover={edition.cover}
        alt={`Cover of Signal and Scale, ${edition.name}`}
        pages={edition.pages}
        sizes="(max-width: 820px) 72vw, 300px"
      />

      <div className={styles.heading}>
        <h3 className={styles.name}>
          <span aria-hidden="true">[ </span>
          {edition.name}
          <span aria-hidden="true"> ]</span>
        </h3>
        <p className={styles.meta}>
          {edition.format} · {edition.pages} pages
        </p>
      </div>

      {/* Always rendered so the prices stay lined up across the cards. */}
      <div className={styles.about}>
        {edition.description ? <p>{edition.description}</p> : null}
        {edition.bestFor ? (
          <p className={styles.bestFor}>
            <strong>Best for</strong> {edition.bestFor}
          </p>
        ) : null}
      </div>

      <p className={styles.price}>
        <span className={styles.now}>
          <span className="sr-only">Launch price </span>
          {formatUsd(edition.priceUsd)}
        </span>
        <s className={styles.was}>
          <span className="sr-only">Regular price </span>
          {formatUsd(edition.regularPriceUsd)}
        </s>
        <span className={styles.eur}>
          <span className="sr-only">or </span>
          {formatEur(edition.priceEur)}
        </span>
      </p>

      <p className={styles.save}>You save {formatUsd(savings)}</p>

      {edition.buyUrl ? (
        <a className={buttonClass} href={edition.buyUrl}>
          Buy for {formatUsd(edition.priceUsd)}
        </a>
      ) : (
        <span className="btn" aria-disabled="true">
          Available soon
        </span>
      )}
    </li>
  );
}
