import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';

type Crumb = {
  label: string;
  to?: string;
};

type PageShellProps = {
  crumbs: Crumb[];
  children: React.ReactNode;
};

/**
 * Layout for standalone pages (/about, /faq). Keeps the navbar in its solid state
 * because these pages have no dark hero behind it, and renders a visible breadcrumb
 * that mirrors the BreadcrumbList JSON-LD in each page's <head>.
 */
const PageShell: React.FC<PageShellProps> = ({ crumbs, children }) => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <div className="w-full overflow-hidden">
        <Navbar alwaysSolid />

        <nav aria-label="Breadcrumb" className="max-w-[1280px] mx-auto px-6 pt-28 md:pt-32">
          <ol className="flex flex-wrap items-center gap-2 font-body text-label-sm text-on-surface-variant">
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;
              return (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.to && !isLast ? (
                    <Link to={crumb.to} className="hover:text-secondary transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-primary font-bold">
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <span className="material-symbols-outlined text-[16px] text-outline-variant" aria-hidden="true">
                      chevron_right
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <main>{children}</main>

        <Footer />
        <FloatingActionButton />
      </div>
    </div>
  );
};

export default PageShell;
