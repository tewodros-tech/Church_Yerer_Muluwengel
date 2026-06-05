import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const quickLinks = [
  {
    to: "/about",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Our Story",
    desc: "Learn about our journey of faith",
    color: "from-amber-500 to-yellow-600",
  },
  {
    to: "/services",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Service Times",
    desc: "When we gather for worship",
    color: "from-blue-500 to-indigo-600",
  },
  {
    to: "/ministries",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Ministries",
    desc: "Find your place to serve",
    color: "from-emerald-500 to-teal-600",
  },
  {
    to: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contact Us",
    desc: "We'd love to hear from you",
    color: "from-rose-500 to-pink-600",
  },
];

const upcomingEvents = [
  {
    date: "16",
    month: "JUN",
    title: "Sunday Worship Service",
    time: "9:00 AM - 11:30 AM",
    desc: "Join us for a powerful time of worship and the Word.",
    color: "bg-church-gold",
  },
  {
    date: "18",
    month: "JUN",
    title: "Midweek Bible Study",
    time: "6:00 PM - 8:00 PM",
    desc: "Deep dive into Scripture with our community.",
    color: "bg-blue-500",
  },
  {
    date: "20",
    month: "JUN",
    title: "Youth Night",
    time: "5:00 PM - 8:00 PM",
    desc: "Special evening for our youth with games and worship.",
    color: "bg-emerald-500",
  },
];

export default function Home() {
  return (
    <div>
      {/* ═══ HERO SECTION ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-gradient-to-r from-church-navy/80 via-transparent to-church-navy/80" />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(212, 168, 75, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 168, 75, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }} />
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-church-gold/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[40%] right-[25%] w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "3s" }} />

        {/* Floating cross particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-church-gold/10"
            style={{
              top: `${15 + i * 15}%`,
              left: `${5 + i * 18}%`,
              fontSize: `${12 + i * 4}px`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          >
            ✝
          </div>
        ))}

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Cross emblem */}
          <div className="mb-10 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-church-gold/20 to-amber-500/10 border-2 border-church-gold/30 shadow-2xl shadow-church-gold/20 animate-pulse-glow">
              <svg className="w-12 h-12 text-church-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l6 3v7L12 17l-6-3V7l6-3z"/>
                <path d="M12 8l-3 1.5v3L12 14l3-1.5v-3L12 8z" opacity="0.75"/>
              </svg>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white mb-4 animate-fade-in-up leading-[0.9] tracking-tight">
            Yerer Full
            <span className="block gold-gradient-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl mt-2">
              Gospel Church
            </span>
          </h1>

          <p className="text-xl sm:text-2xl md:text-3xl text-church-gold-light/60 mb-2 animate-fade-in-up-delay-1 font-light tracking-wider">
            የረር ሙሉ ወንጌል ቤተ ክርስቲያን
          </p>

          <div className="cross-divider my-8 animate-fade-in-up-delay-1 max-w-[120px]" />

          <p className="text-white/60 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 animate-fade-in-up-delay-2 leading-relaxed font-light">
            A place of worship, fellowship, and spiritual growth.
            Experience the transforming power of God's love in our community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up-delay-3">
            <Link
              to="/services"
              className="group relative px-10 py-4 bg-gradient-to-r from-church-gold to-church-gold-dark text-church-navy font-bold rounded-full text-lg tracking-wide overflow-hidden shadow-xl shadow-church-gold/30 hover:shadow-2xl hover:shadow-church-gold/50 transition-all duration-500 hover:scale-105"
            >
              <span className="relative z-10">Join Us This Sunday</span>
              <div className="absolute inset-0 bg-gradient-to-r from-church-gold-light to-church-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
            <Link
              to="/about"
              className="group px-10 py-4 border-2 border-white/25 text-white font-semibold rounded-full text-lg tracking-wide hover:bg-white/10 transition-all duration-500 hover:border-white/50 hover:scale-105 flex items-center gap-2"
            >
              Discover Our Story
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <svg className="w-5 h-5 text-church-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ═══ QUICK LINKS SECTION ═══ */}
      <section className="relative -mt-24 z-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, i) => (
              <Link
                key={i}
                to={link.to}
                className="group relative bg-white/95 backdrop-blur-xl rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/50 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.color} bg-opacity-10 flex items-center justify-center mb-4 text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  style={{ background: `linear-gradient(135deg, ${link.color.split(' ')[0].replace('from-', '')}, ${link.color.split(' ')[1].replace('to-', '')})` }}
                >
                  {link.icon}
                </div>
                <h3 className="text-church-navy font-bold text-lg mb-1 group-hover:text-church-gold-dark transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-church-warm/60 text-sm">{link.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WELCOME SECTION ═══ */}
      <section className="relative py-24 lg:py-32 bg-church-cream overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-church-gold via-church-gold-light to-church-gold" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image collage */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1438032005730-c779502df39b?w=500&q=80"
                        alt="Church worship"
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1507692049790-de58290a4334?w=500&q=80"
                        alt="Prayer"
                        className="w-full h-36 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1528458876867-5cefedb86a63?w=500&q=80"
                        alt="Bible study"
                        className="w-full h-36 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src="https://images.unsplash.com/photo-1446457292912-fc64f283db61?w=500&q=80"
                        alt="Community"
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-church-gold/20 rounded-2xl -z-10" />
              </div>

              {/* Right - Text */}
              <div>
                <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-4">
                  Welcome to Our Church
                </p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-church-navy mb-6 leading-tight">
                  A Place Where
                  <span className="block gold-gradient-text">Faith Comes Alive</span>
                </h2>
                <div className="w-20 h-1 bg-church-gold rounded-full mb-6" />
                <p className="text-church-warm/80 text-lg leading-relaxed mb-4">
                  Welcome to <strong className="text-church-navy">Yerer Full Gospel Church</strong>, 
                  a vibrant Christian community dedicated to worshipping God, nurturing faith, 
                  and serving our neighbors with love and compassion.
                </p>
                <p className="text-church-warm/70 leading-relaxed mb-4">
                  Whether you are exploring faith for the first time or have walked with Christ 
                  for years, you are welcome here. We believe in the power of prayer, the truth 
                  of the Gospel, and the transformative work of the Holy Spirit.
                </p>
                <p className="text-church-warm/70 leading-relaxed mb-8">
                  Our doors are open to everyone — come as you are, and experience the love 
                  of Christ in a community that cares.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/about"
                    className="px-6 py-3 bg-church-navy text-white font-semibold rounded-xl hover:bg-church-navy-light transition-all duration-300 text-sm"
                  >
                    Learn More About Us
                  </Link>
                  <Link
                    to="/contact"
                    className="px-6 py-3 border-2 border-church-navy/20 text-church-navy font-semibold rounded-xl hover:bg-church-navy/5 transition-all duration-300 text-sm"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ UPCOMING EVENTS ═══ */}
      <section className="relative py-24 lg:py-32 bg-church-navy overflow-hidden">
        <div className="absolute inset-0 bg-cross-pattern opacity-[0.05]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-church-gold/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">
                What's Happening
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                Upcoming Events
              </h2>
              <div className="cross-divider" />
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Join us for our weekly gatherings and special events. 
                There's a place for everyone at Yerer Full Gospel.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, i) => (
                <div
                  key={i}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 cursor-default"
                >
                  {/* Date badge */}
                  <div className={`inline-flex flex-col items-center ${event.color} text-white rounded-xl px-4 py-2 mb-5 shadow-lg`}>
                    <span className="text-2xl font-black">{event.date}</span>
                    <span className="text-[10px] font-bold tracking-widest uppercase">{event.month}</span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-2 group-hover:text-church-gold transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-church-gold-light/70 text-sm font-medium mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.time}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{event.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-church-gold hover:text-church-gold-light transition-colors font-medium group"
              >
                <span>View Full Schedule</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ TESTIMONIAL / VERSE SECTION ═══ */}
      <section className="relative py-24 lg:py-28 bg-church-cream overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <div className="relative">
              {/* Large quote mark */}
              <div className="text-8xl font-serif text-church-gold/20 leading-none mb-4">"</div>
              <blockquote className="text-2xl sm:text-3xl lg:text-4xl text-church-navy font-light leading-relaxed italic mb-8">
                "For I know the plans I have for you, declares the Lord, 
                plans to prosper you and not to harm you, plans to give you 
                hope and a future."
              </blockquote>
              <p className="text-church-gold-dark font-semibold text-lg">— Jeremiah 29:11</p>
              <div className="cross-divider mt-8" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <section className="relative py-20 bg-gradient-to-r from-church-gold to-church-gold-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 25% 25%, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-church-navy mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-church-navy/80 text-lg sm:text-xl max-w-2xl mx-auto mb-8">
              We'd love to welcome you to our church family. Come and experience 
              the joy of worship and fellowship with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="px-10 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-base"
              >
                View Service Times
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-white/20 backdrop-blur-sm text-church-navy font-bold rounded-full border-2 border-church-navy/30 hover:bg-white/30 transition-all duration-300 text-base"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
