import React from 'react';

type RateCard = {
  icon: string;
  product: string;
  range: string;
  unit: string;
  detail: string;
  grades: string[];
};

const rateCards: RateCard[] = [
  {
    icon: 'layers',
    product: 'Plywood',
    range: '₹65 – ₹120',
    unit: 'per sq ft',
    detail:
      'The rate moves with grade. Canon plywood sits at the lower end, semi-marine plywood in the middle, and IS 710 marine plywood at the top. Thickness, brand and order size decide where you land in the range.',
    grades: ['Canon plywood', 'Semi-marine plywood', 'Marine plywood (IS 710)'],
  },
  {
    icon: 'palette',
    product: 'Sunmica (decorative laminate)',
    range: '₹900 – ₹3,500',
    unit: 'per sheet',
    detail:
      'Covers both 0.8 mm and 1 mm sunmica sheets across 500+ designs — wood grain, marble, stone and solid colours. Acrylic sunmica is also stocked for high-gloss shutters and modular kitchen fronts.',
    grades: ['0.8 mm sunmica', '1 mm sunmica', 'Acrylic sunmica'],
  },
];

const Rates: React.FC = () => {
  return (
    <section id="rates" className="py-20 md:py-[80px] px-6 bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-body text-label-md uppercase tracking-widest block mb-4">
            Rates
          </span>
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Plywood & Sunmica Rates in Kandivali West, Mumbai
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl mx-auto">
            Indicative rates so you can budget before you visit the ply shop. Plywood is priced per square foot and
            sunmica per sheet. Call for today's confirmed rate on your exact grade and quantity.
          </p>
        </div>

        {/* Rate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rateCards.map((card) => (
            <div
              key={card.product}
              className="bg-white rounded-3xl card-shadow border border-outline-variant/10 p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">{card.icon}</span>
                </div>
                <h3 className="font-headline text-headline-sm text-primary">{card.product}</h3>
              </div>

              <p className="font-headline text-headline-md text-secondary leading-none mb-1">{card.range}</p>
              <p className="font-body text-label-md text-on-surface-variant uppercase tracking-wider mb-6">
                {card.unit}
              </p>

              <p className="text-on-surface-variant font-body text-body-md leading-relaxed mb-6">{card.detail}</p>

              <ul className="flex flex-wrap gap-2">
                {card.grades.map((grade) => (
                  <li
                    key={grade}
                    className="bg-surface-container text-primary px-3 py-1.5 rounded-full text-label-sm font-body font-semibold border border-outline-variant/10"
                  >
                    {grade}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer + CTA */}
        <div className="mt-10 bg-white rounded-3xl border border-outline-variant/10 card-shadow p-8 text-center">
          <p className="text-on-surface-variant font-body text-body-md mb-6">
            Rates are indicative and change with brand, thickness and quantity. Bulk orders for carpenters, contractors
            and interior designers are quoted at wholesale rates, usually within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+918087475826"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Call for today's rate
            </a>
            <a
              href="https://wa.me/918087475826"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-body text-label-md hover:opacity-90 transition-all duration-300 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp for a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rates;
