import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";

import styles from "./Book3D.module.css";

type Book3DProps = {
  cover: StaticImageData;
  alt: string;
  /** Page count. The block of pages gets thicker as it grows. */
  pages: number;
  sizes: string;
  className?: string;
};

export function Book3D({ cover, alt, pages, sizes, className }: Book3DProps) {
  return (
    <div
      className={className ? `${styles.scene} ${className}` : styles.scene}
      style={{ "--pages": pages } as CSSProperties}
    >
      <div className={styles.book}>
        <span className={styles.back} aria-hidden="true" />
        <span className={styles.pages} aria-hidden="true" />
        <Image className={styles.front} src={cover} alt={alt} sizes={sizes} quality={90} />
      </div>
      <span className={styles.shadow} aria-hidden="true" />
    </div>
  );
}
