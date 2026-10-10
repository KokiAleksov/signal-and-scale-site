import { book, editions } from "@/content/site";
import { siteUrl } from "@/lib/site-url";

/** Structured data so search engines can show the book, author and prices. */
export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: `${book.title}: ${book.subtitle}`,
    description: book.description,
    url: siteUrl,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: book.author,
      jobTitle: book.authorRole,
    },
    workExample: editions.map((edition) => ({
      "@type": "Book",
      name: `${book.title}, ${edition.name}`,
      bookEdition: edition.name,
      numberOfPages: edition.pages,
      ...(edition.description ? { description: edition.description } : {}),
      offers: [
        { price: edition.priceUsd, priceCurrency: "USD" },
        { price: edition.priceEur, priceCurrency: "EUR" },
      ].map((offer) => ({
        "@type": "Offer",
        ...offer,
        ...(edition.buyUrl
          ? { url: edition.buyUrl, availability: "https://schema.org/InStock" }
          : {}),
      })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      // JSON.stringify output with "<" escaped is safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
