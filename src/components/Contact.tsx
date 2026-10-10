import { contact, headings } from "@/content/site";

import styles from "./Contact.module.css";

export function Contact() {
  const hasLinks = Boolean(contact.email || contact.linkedinUrl);

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>{headings.contact.eyebrow}</p>
          <h2 id="contact-title" className={styles.title}>
            {headings.contact.title}
          </h2>
          <p className={styles.body}>
            {hasLinks ? headings.contact.body : headings.contact.fallback}
          </p>
        </div>
        {hasLinks ? (
          <ul className={styles.links}>
            {contact.email ? (
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            ) : null}
            {contact.linkedinUrl ? (
              <li>
                <a href={contact.linkedinUrl} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </li>
            ) : null}
          </ul>
        ) : null}
      </div>
    </section>
  );
}
