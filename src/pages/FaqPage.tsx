import React from 'react';
import PageShell from '../components/PageShell';
import FAQ from '../components/FAQ';
import useDocumentMeta from '../hooks/useDocumentMeta';

const FaqPage: React.FC = () => {
  useDocumentMeta({
    title: 'Plywood & Laminate FAQs | Grades, Delivery & Rates in Kandivali West',
    description:
      'Answers on plywood grades, MR vs BWR vs marine plywood, laminate designs, adhesives, bulk supply, shop timings and delivery across Mumbai from Om Shree Ganesh Plywood and Laminate, Kandivali West. Call +91 8087475826 for a same-day quote.',
    canonical: 'https://www.omshreeganeshplywood.in/faq',
  });

  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}>
      <FAQ />
    </PageShell>
  );
};

export default FaqPage;
