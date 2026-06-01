import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import DeveloperProfile from './DeveloperProfile';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);
  const WEB3FORMS_ACCESS_KEY = 'b1193960-2c79-456c-9c3f-45a1b909411d';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: 'New Contact Form Submission from Om Shree Ganesh Website',
          from_name: 'Om Shree Ganesh Website',
          reply_to: formData.email,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          success: true,
          message: 'Your message has been sent successfully! We will get back to you soon.',
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        throw new Error(result.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-[80px] bg-surface-container-low">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-headline text-headline-md text-primary mb-4">Get In Touch</h2>
          <p className="text-on-surface-variant font-body max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white rounded-3xl card-shadow border border-outline-variant/10 p-8 md:p-10">
            <h3 className="font-headline text-headline-sm text-primary mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface font-body mb-1">Our Location</h4>
                  <p className="text-on-surface-variant font-body text-body-md">
                    Shri Sevantilal Khandwala Marg, opp. Rajiv Gandhi Commercial Complex,
                    Kandivali West, Mumbai, Maharashtra 400067
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface font-body mb-1">Call Us</h4>
                  <p className="text-on-surface-variant font-body text-body-md">+91 8087475826</p>
                  <p className="text-on-surface-variant font-body text-body-md">+91 8433654258</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface font-body mb-1">Business Hours</h4>
                  <p className="text-on-surface-variant font-body text-body-md">Mon – Sat: 9:00 AM – 8:00 PM</p>
                  <p className="text-on-surface-variant font-body text-body-md">Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-on-surface font-body mb-1">Email Us</h4>
                  <p className="text-on-surface-variant font-body text-body-md">omshreeganeshplywood@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl card-shadow border border-outline-variant/10 p-8 md:p-10"
          >
            <h3 className="font-headline text-headline-sm text-primary mb-8">Send Us a Message</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-on-surface font-body text-label-md mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary font-body text-body-md transition-all"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-on-surface font-body text-label-md mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary font-body text-body-md transition-all"
                  placeholder="Your Phone Number"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-on-surface font-body text-label-md mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary font-body text-body-md transition-all"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-on-surface font-body text-label-md mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary font-body text-body-md transition-all resize-none"
                placeholder="How can we help you?"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-2xl font-body text-label-md transition-all duration-300 flex items-center justify-center gap-2 ${
                isSubmitting
                  ? 'bg-outline-variant text-on-surface-variant cursor-not-allowed'
                  : 'bg-primary-container text-on-primary-container hover:bg-secondary hover:text-white'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  <span>Send Message</span>
                </>
              )}
            </button>

            {submitStatus && (
              <div
                className={`mt-4 p-4 rounded-xl flex items-center gap-2 ${
                  submitStatus.success
                    ? 'bg-green-50 text-green-700 border border-green-200'
                    : 'bg-error-container text-on-error-container border border-error/20'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {submitStatus.success ? 'check_circle' : 'error'}
                </span>
                <p className="font-body text-body-md">{submitStatus.message}</p>
              </div>
            )}
          </form>
        </div>

        {/* Google Map */}
        <div className="mt-12 bg-white rounded-3xl card-shadow overflow-hidden border border-outline-variant/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.7308647997968!2d72.82791790000002!3d19.2003092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b749fb03848b%3A0x859f06454cb95ee8!2sOm%20Shree%20Ganesh%20Plywood%20and%20Laminates!5e0!3m2!1sen!2sin!4v1716978528!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Om Shree Ganesh Plywood and Laminates Location"
            className="rounded-3xl"
          />
        </div>

        <DeveloperProfile />
      </div>
    </section>
  );
};

export default Contact;
