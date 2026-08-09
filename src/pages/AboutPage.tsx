import React from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import AboutUs from '../components/AboutUs';
import useDocumentMeta from '../hooks/useDocumentMeta';

const standards = [
  {
    icon: 'verified',
    title: 'Certified grades only',
    body: 'Plywood is stocked in IS 710 and IS 303 certified grades, so you know whether you are buying boiling-water-resistant or moisture-resistant board before you pay for it.',
  },
  {
    icon: 'palette',
    title: '500+ laminate designs',
    body: 'Wood grain, marble, stone and solid colour finishes in high-pressure laminate, plus water-resistant and termite-proof PVC sheets for shutters and vanities.',
  },
  {
    icon: 'local_shipping',
    title: 'Pan-Mumbai delivery',
    body: 'Free delivery across Mumbai on bulk orders, with standard delivery in 24 to 48 hours to Kandivali, Charkop, Malad, Borivali, Goregaon, Dahisar and Andheri.',
  },
  {
    icon: 'support_agent',
    title: 'Honest, no-pressure advice',
    body: 'We help match grade and finish to your budget and application, in English, Hindi, Marathi or Gujarati. Quotes are shared the same day, usually within 24 hours.',
  },
];

const AboutPage: React.FC = () => {
  useDocumentMeta({
    title: 'About Us | Plywood & Sunmica Dealer in Kandivali West',
    description:
      'Om Shree Ganesh Plywood and Laminate has supplied certified plywood, sunmica and adhesives in Kandivali West, Mumbai since 2020. 500+ customers, 5,000+ sheets sold.',
    canonical: 'https://www.omshreeganeshplywood.in/about',
  });

  return (
    <PageShell crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}>
      <AboutUs />

      {/* Standards */}
      <section className="py-16 md:py-20 px-6 bg-surface-container-low">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary font-body text-label-md uppercase tracking-widest block mb-4">
              How We Work
            </span>
            <h2 className="font-headline text-headline-md text-primary">
              What you get when you buy from us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {standards.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl card-shadow border border-outline-variant/10 p-8 flex items-start gap-5"
              >
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">{item.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-headline-sm text-primary mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant font-body text-body-md leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit us */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center bg-surface-container rounded-3xl border border-outline-variant/10 p-8 md:p-12">
          <h2 className="font-headline text-headline-md text-primary mb-4">Visit the shop</h2>
          <p className="font-body text-body-lg text-on-surface-variant mb-2">
            Shri Sevantilal Khandwala Marg, opp. Rajiv Gandhi Commercial Complex, Kandivali West, Mumbai 400067
          </p>
          <p className="font-body text-body-md text-on-surface-variant mb-8">
            Mon – Sat: 9:00 AM – 8:00 PM · Sunday: 10:00 AM – 4:00 PM
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918087475826"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Call +91 8087475826
            </a>
            <Link
              to="/faq"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-2xl font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Read the FAQs
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default AboutPage;
