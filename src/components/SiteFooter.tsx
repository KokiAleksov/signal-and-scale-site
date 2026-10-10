import { book, copyrightYear } from "@/content/site";

import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.inner}>
          <p>
            © {copyrightYear} {book.author}. {book.title}.
          </p>
          <p>Relevance beats volume.</p>
        </div>
      </div>
    </footer>
  );
}
