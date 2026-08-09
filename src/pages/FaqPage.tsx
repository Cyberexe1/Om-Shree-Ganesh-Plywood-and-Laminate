import React from 'react';
import PageShell from '../components/PageShell';
import FAQ from '../components/FAQ';
import useDocumentMeta from '../hooks/useDocumentMeta';

const FaqPage: React.FC = () => {
  useDocumentMeta({
    title: 'Plywood & Sunmica FAQs | Rates, Grades & Delivery, Mumbai',
    description:
      'Plywood rates from ₹65/sq ft, sunmica ₹900–₹3,500 per sheet, MR vs BWR vs marine grades, and delivery across Mumbai — answered by a Kandivali West ply shop.',
    canonical: 'https://www.omshreeganeshplywood.in/faq',
  });

  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]}>
      <FAQ />
    </PageShell>
  );
};

export default FaqPage;
