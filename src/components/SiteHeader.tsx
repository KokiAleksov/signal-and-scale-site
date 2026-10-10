import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <nav aria-label="Main" className={`wrap ${styles.nav}`}>
        <a href="#book">The Book</a>
        <a href="#author" className={styles.optional}>
          The Author
        </a>
        <a href="#buy" className={styles.buy}>
          Buy it
        </a>
        <a href="#contact" className={styles.contact}>
          Contact
        </a>
      </nav>
    </header>
  );
}
