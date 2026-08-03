import React from 'react';

type FaqItem = {
  question: string;
  answer: string;
};

/**
 * Visible FAQ content. The questions and answers here are mirrored exactly in the
 * FAQPage JSON-LD block in index.html — keep both in sync when editing, otherwise
 * search engines and AI answer engines may drop the rich result.
 */
const faqs: FaqItem[] = [
  {
    question: 'Where is Om Shree Ganesh Plywood and Laminate located?',
    answer:
      'The shop is on Shri Sevantilal Khandwala Marg, opposite Rajiv Gandhi Commercial Complex, Kandivali West, Mumbai, Maharashtra 400067. It is a short drive from Kandivali station and serves nearby areas including Charkop, Malad, Borivali and Goregaon.',
  },
  {
    question: 'What are the shop timings?',
    answer:
      'Om Shree Ganesh Plywood and Laminate is open Monday to Saturday from 9:00 AM to 8:00 PM, and on Sunday from 10:00 AM to 4:00 PM. You can call +91 8087475826 or +91 8433654258 during these hours.',
  },
  {
    question: 'What types of plywood are available in Kandivali West?',
    answer:
      'We stock waterproof plywood, marine plywood, BWR grade plywood and commercial plywood, along with MDF boards and pre-laminated boards. Plywood is IS 710 or IS 303 certified depending on grade, so it is suitable for kitchens, wardrobes and bathroom furniture.',
  },
  {
    question: 'Which plywood is best for a modular kitchen in Mumbai?',
    answer:
      "For Mumbai's humid climate, IS 710 marine or BWR grade waterproof plywood is the safest choice for kitchen carcasses and bathroom vanities. Pair it with a heat-resistant adhesive such as Fevicol Heatx for countertop laminates. Our team helps match grade to budget in store.",
  },
  {
    question: 'What is the difference between MR, BWR and marine plywood?',
    answer:
      'MR (moisture resistant) plywood suits dry interior use such as wardrobes and bedroom furniture. BWR (boiling water resistant) plywood handles regular moisture exposure, making it right for kitchens. Marine plywood, certified to IS 710, offers the highest water resistance and is used where water contact is constant.',
  },
  {
    question: 'Do you deliver plywood and laminates across Mumbai?',
    answer:
      'Yes. Delivery is free across Mumbai on bulk orders, and standard pan-Mumbai delivery takes 24 to 48 hours. We regularly deliver to Kandivali, Charkop, Malad, Borivali, Goregaon, Dahisar and Andheri.',
  },
  {
    question: 'How many laminate designs do you have?',
    answer:
      'The showroom carries over 500 decorative laminate designs, including wood grain, marble, stone and solid colour finishes in high-pressure laminate, plus water-resistant and termite-proof PVC laminate sheets for shutters and vanities.',
  },
  {
    question: 'Which adhesives and hardware do you sell?',
    answer:
      'We stock Fevicol Heatx for heat-exposed laminate bonding, Fevicol Marine for high-moisture plywood bonding, Super Grip Bond multi-surface contact adhesive, and Abro double-sided mounting tape for mirrors and panels.',
  },
  {
    question: 'Do you supply carpenters, contractors and interior designers in bulk?',
    answer:
      'Yes. We supply homeowners as well as carpenters, contractors and interior designers, from single-room renovations to full commercial fit-outs. Bulk enquiries get a quote on the same day, usually within 24 hours.',
  },
  {
    question: 'Do you sell timber and door frame material?',
    answer:
      'Yes. Seasoned Tikwood and Salwood timber is available for door frames, window frames and solid-wood furniture, alongside plain and pre-laminated MDF boards for panelling and CNC work.',
  },
  {
    question: 'How do I get a price quote?',
    answer:
      'Call +91 8087475826, message the same number on WhatsApp, email omshreeganeshplywood@gmail.com, or send your requirement through the enquiry form on this page. Quotes are typically shared the same day, and walk-in consultations are free.',
  },
  {
    question: 'How long has Om Shree Ganesh Plywood been in business?',
    answer:
      'The shop has served Kandivali West since 2020, with more than 500 satisfied customers across Mumbai and over 5,000 sheets sold, covering home renovations as well as office and retail fit-outs.',
  },
];

const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 md:py-[80px] px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-secondary font-body text-label-md uppercase tracking-widest block mb-4">
            Questions & Answers
          </span>
          <h2 className="font-headline text-headline-md text-primary mb-4">
            Plywood & Laminate FAQs — Kandivali West, Mumbai
          </h2>
          <p className="text-on-surface-variant font-body max-w-2xl mx-auto">
            Straight answers on stock, plywood grades, laminate designs, delivery and pricing. Still unsure? Call
            {' '}
            <a href="tel:+918087475826" className="text-secondary font-bold hover:underline">
              +91 8087475826
            </a>
            .
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              open={index === 0}
              className="group bg-white rounded-3xl card-shadow border border-outline-variant/10 overflow-hidden"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none p-6 md:p-8 [&::-webkit-details-marker]:hidden">
                <h3 className="font-headline text-headline-sm text-primary text-left">{faq.question}</h3>
                <span className="material-symbols-outlined text-secondary flex-shrink-0 transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-8 -mt-2">
                <p className="text-on-surface-variant font-body text-body-md leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="mt-12 text-center bg-surface-container rounded-3xl border border-outline-variant/10 p-8">
          <p className="font-body text-body-lg text-on-surface-variant mb-6">
            Need a quote for your project? Share your sizes and finishes — we usually reply the same day.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-primary-container text-on-primary-container px-8 py-4 rounded-2xl font-body text-label-md hover:bg-secondary hover:text-white transition-all duration-300"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/918087475826"
              className="bg-[#25D366] text-white px-8 py-4 rounded-2xl font-body text-label-md hover:opacity-90 transition-all duration-300 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[18px]">chat</span>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
