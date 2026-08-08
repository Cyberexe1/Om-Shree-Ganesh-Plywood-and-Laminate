import { useEffect } from 'react';

type DocumentMeta = {
  title: string;
  description: string;
  canonical: string;
};

const setMetaTag = (selector: string, attribute: string, value: string) => {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attribute, value);
};

/**
 * Keeps the document head in sync during client-side navigation.
 *
 * Each page already ships the correct tags in its static HTML, which is what
 * crawlers read. This only matters for in-app route changes, where the browser
 * never fetches a new document.
 */
const useDocumentMeta = ({ title, description, canonical }: DocumentMeta) => {
  useEffect(() => {
    document.title = title;
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('link[rel="canonical"]', 'href', canonical);
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonical);
  }, [title, description, canonical]);
};

export default useDocumentMeta;
