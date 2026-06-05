import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";

const contactMethods = [
  {
    title: "Visit Us",
    details: [
      "Yerer, Ethiopia",
      "Near the main road",
      "Behind Yerer Health Center",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Call Us",
    details: [
      "+251 91 234 5678",
      "+251 11 123 4567",
      "+251 92 345 6789",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email Us",
    details: [
      "info@yererfullgospel.org",
      "hello@yererchurch.com",
      "pastor@yererfullgospel.org",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Service Hours",
    details: [
      "Sunday: 9:00 AM - 12:30 PM",
      "Wednesday: 6:00 PM - 8:00 PM",
      "Friday: 5:00 PM - 7:00 PM (Youth)",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const socialPlatforms = [
  {
    name: "Facebook",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    color: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.192c-.243.357-.574.646-.992.867-.42.22-.866.33-1.338.33-.543 0-1.08-.158-1.614-.474-.534-.316-1.095-.77-1.683-1.363-.588-.592-1.043-1.153-1.364-1.683-.321-.53-.482-1.06-.482-1.59 0-.476.108-.921.325-1.338.217-.416.508-.744.873-.986.352-.23.72-.345 1.106-.345.277 0 .501.064.673.192.172.128.29.271.355.428.065.158.098.293.098.406 0 .118-.049.294-.147.53-.098.235-.152.395-.163.48-.013.084.01.176.069.276.058.1.135.202.23.306.097.104.262.273.495.507.234.234.403.399.507.496.104.097.2.165.29.208.087.041.17.059.25.053.078-.006.22-.056.426-.15.205-.094.373-.147.504-.159.13-.012.262.003.397.046.135.043.26.114.377.212.116.099.24.226.372.382.13.156.218.304.264.444.046.14.069.27.069.39 0 .3-.113.576-.34.829z" />
      </svg>
    ),
    color: "hover:bg-pink-600",
  },
  {
    name: "YouTube",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    color: "hover:bg-red-600",
  },
  {
    name: "Telegram",
    url: "#",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
    color: "hover:bg-sky-600",
  },
];

const faqItems = [
  {
    q: "What time should I arrive on Sunday?",
    a: "We recommend arriving 10-15 minutes early, especially if it's your first visit. This gives you time to park, find a seat, and enjoy the pre-service worship atmosphere.",
  },
  {
    q: "What should I wear?",
    a: "Come as you are! At Yerer Full Gospel Church, you'll find people dressed in everything from casual attire to formal wear. We're more concerned with your heart than your outfit.",
  },
  {
    q: "Is there parking available?",
    a: "Yes, we have ample parking space available on the church premises. Our parking attendants will be happy to guide you.",
  },
  {
    q: "What about my children?",
    a: "We have a wonderful children's ministry running during our Sunday service. Your children will be well cared for in a safe, fun, and nurturing environment with trained volunteers.",
  },
  {
    q: "Do you have services in Amharic?",
    a: "Yes! Our services are conducted in both Amharic and English to accommodate our diverse congregation. Translation is provided as needed.",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-20">
      {/* ═══ PAGE HEADER ═══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-church-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              Get In Touch
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Contact
              <span className="block gold-gradient-text text-4xl sm:text-5xl lg:text-6xl mt-2">
                Us
              </span>
            </h1>
            <div className="cross-divider" />
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              We'd love to hear from you! Whether you have a question, a prayer request, 
              or just want to say hello, don't hesitate to reach out.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CONTACT METHODS + FORM ═══ */}
      <section className="relative py-24 bg-church-cream">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-church-gold via-church-gold-light to-church-gold" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left - Contact Info */}
              <div>
                <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Reach Out</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-6 leading-tight">
                  We're Here to
                  <span className="block gold-gradient-text">Help & Connect</span>
                </h2>
                <div className="w-16 h-1 bg-church-gold rounded-full mb-8" />

                <div className="space-y-6">
                  {contactMethods.map((method, i) => (
                    <div key={i} className="flex items-start gap-4 group bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-church-gold/20 to-amber-500/10 text-church-gold-dark flex items-center justify-center group-hover:from-church-gold group-hover:to-church-gold-dark group-hover:text-white transition-all duration-500">
                        {method.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-church-navy text-lg mb-1">{method.title}</h3>
                        {method.details.map((detail, j) => (
                          <p key={j} className="text-church-warm/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="mt-8">
                  <p className="text-church-navy font-semibold mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {socialPlatforms.map((platform, i) => (
                      <a
                        key={i}
                        href={platform.url}
                        className={`w-12 h-12 rounded-xl bg-white text-church-warm flex items-center justify-center shadow-sm hover:text-white ${platform.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                        title={platform.name}
                      >
                        {platform.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-church-gold/10">
                  {/* Success message */}
                  {submitted && (
                    <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 flex items-center gap-3">
                      <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold">Message Sent!</p>
                        <p className="text-sm">Thank you for reaching out. We'll get back to you soon.</p>
                      </div>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-church-navy mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-church-navy mb-1.5">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-church-gold/20 bg-church-cream/50 focus:border-church-gold focus:ring-2 focus:ring-church-gold/20 outline-none transition-all text-church-navy placeholder:text-church-warm/40"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-church-navy mb-1.5">Email *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-church-gold/20 bg-church-cream/50 focus:border-church-gold focus:ring-2 focus:ring-church-gold/20 outline-none transition-all text-church-navy placeholder:text-church-warm/40"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-church-navy mb-1.5">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 rounded-xl border border-church-gold/20 bg-church-cream/50 focus:border-church-gold focus:ring-2 focus:ring-church-gold/20 outline-none transition-all text-church-navy placeholder:text-church-warm/40"
                          placeholder="+251 91 234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-church-navy mb-1.5">Subject *</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-church-gold/20 bg-church-cream/50 focus:border-church-gold focus:ring-2 focus:ring-church-gold/20 outline-none transition-all text-church-navy"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="visiting">Planning to Visit</option>
                          <option value="ministry">Ministry Interest</option>
                          <option value="support">Need Support</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-church-navy mb-1.5">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3.5 rounded-xl border border-church-gold/20 bg-church-cream/50 focus:border-church-gold focus:ring-2 focus:ring-church-gold/20 outline-none transition-all text-church-navy placeholder:text-church-warm/40 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-church-gold to-church-gold-dark text-church-navy font-bold rounded-xl hover:from-church-gold-light hover:to-church-gold transition-all duration-300 shadow-lg shadow-church-gold/30 hover:shadow-xl hover:shadow-church-gold/50 text-base tracking-wide"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ MAP SECTION ═══ */}
      <section className="relative h-96 bg-church-navy overflow-hidden">
        {/* Placeholder map with church styling */}
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy to-[#0f1a30]" />
        <div className="absolute inset-0 bg-cross-pattern opacity-5" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 rounded-full bg-church-gold/20 border-2 border-church-gold/40 flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-white/60 text-lg">Yerer, Ethiopia — Near the Main Road</p>
            <p className="text-church-gold/60 text-sm mt-1">Find us on Google Maps</p>
          </div>
        </div>
        {/* Map overlay gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-church-navy to-transparent" />
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="relative py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Common Questions</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Frequently Asked
                <span className="block gold-gradient-text">Questions</span>
              </h2>
              <div className="cross-divider" />
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  className="bg-church-cream rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-church-navy pr-4">{item.q}</span>
                    <svg
                      className={`w-5 h-5 text-church-gold flex-shrink-0 transition-transform duration-300 ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openFaq === i ? "max-h-48 pb-5 px-5" : "max-h-0"
                    }`}
                  >
                    <p className="text-church-warm/70 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="relative py-20 bg-gradient-to-r from-church-gold to-church-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-church-navy mb-4">
              We Can't Wait to Welcome You!
            </h2>
            <p className="text-church-navy/80 text-lg max-w-2xl mx-auto mb-8">
              Join us this Sunday and experience the love of Christ in a community 
              that feels like family.
            </p>
            <a
              href="/services"
              className="inline-flex px-10 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              View Service Times
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
