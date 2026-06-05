import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const weeklyServices = [
  {
    day: "Sunday",
    date: "Every Sunday",
    services: [
      {
        name: "Sunday School",
        time: "9:00 AM - 10:00 AM",
        description: "Bible study and spiritual education for all ages, from children to adults.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        ),
        color: "from-blue-500 to-indigo-600",
      },
      {
        name: "Morning Worship Service",
        time: "10:00 AM - 12:30 PM",
        description: "Our main weekly gathering with powerful worship, prayer, and an inspiring message from God's Word.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ),
        color: "from-amber-500 to-yellow-600",
        featured: true,
      },
    ],
  },
  {
    day: "Wednesday",
    date: "Every Wednesday",
    services: [
      {
        name: "Bible Study & Prayer Meeting",
        time: "6:00 PM - 8:00 PM",
        description: "A mid-week gathering for deeper Bible study, corporate prayer, and spiritual growth together.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
        color: "from-purple-500 to-violet-600",
      },
    ],
  },
  {
    day: "Friday",
    date: "Every Friday",
    services: [
      {
        name: "Youth Fellowship",
        time: "5:00 PM - 7:00 PM",
        description: "An engaging program for young people with contemporary worship, relevant teachings, games, and fellowship.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        color: "from-emerald-500 to-teal-600",
      },
    ],
  },
  {
    day: "Saturday",
    date: "Every Saturday",
    services: [
      {
        name: "Choir Practice",
        time: "3:00 PM - 5:00 PM",
        description: "Worship team rehearsals and music ministry practice to prepare for Sunday services.",
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        ),
        color: "from-rose-500 to-pink-600",
      },
    ],
  },
];

const specialServices = [
  {
    name: "First Sunday Prayer & Fasting",
    time: "First Sunday of every month",
    description: "A special morning of prayer and fasting to start the month seeking God's direction and blessing.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    name: "Monthly Healing Service",
    time: "Last Thursday of every month",
    description: "A dedicated service focusing on prayer for healing, restoration, and wholeness through faith in Christ.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Baptism Service",
    time: "Quarterly",
    description: "A celebration of new faith as believers publicly declare their commitment to Jesus Christ through baptism.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    name: "Annual Church Conference",
    time: "October (Annually)",
    description: "A powerful weekend of special teachings, worship, and fellowship with guest speakers and ministers.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const whatToExpect = [
  {
    title: "Warm Welcome",
    desc: "From the moment you arrive, you'll be greeted with a smile. Our welcome team is ready to help you feel at home.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Inspiring Worship",
    desc: "Our worship team leads contemporary and traditional songs that help us focus our hearts on God.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    title: "Powerful Prayer",
    desc: "We believe in the power of prayer. Each service includes time for personal and corporate prayer.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    title: "Relevant Teaching",
    desc: "Our messages are Bible-based and practical, helping you apply God's Word to your daily life.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Children's Ministry",
    desc: "Your children will enjoy a safe, fun, and engaging environment with age-appropriate teaching.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Community & Fellowship",
    desc: "After service, join us for refreshments and conversation. Build lasting friendships in our church family.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* ═══ PAGE HEADER ═══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-church-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              Join Us
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Service
              <span className="block gold-gradient-text text-4xl sm:text-5xl lg:text-6xl mt-2">
                Times & Schedule
              </span>
            </h1>
            <div className="cross-divider" />
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              We gather throughout the week to worship, learn, and grow together.
              Everyone is welcome — come as you are!
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WEEKLY SERVICES ═══ */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Weekly Gatherings</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Weekly Schedule
              </h2>
              <div className="cross-divider" />
            </div>

            <div className="space-y-8">
              {weeklyServices.map((day, i) => (
                <div key={i} className="bg-church-cream rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-church-gold to-church-gold-dark flex items-center justify-center shadow-lg">
                      <svg className="w-7 h-7 text-church-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-church-navy">{day.day}</h3>
                      <p className="text-church-gold-dark text-sm font-medium">{day.date}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {day.services.map((service, j) => (
                      <div
                        key={j}
                        className={`relative rounded-2xl p-5 transition-all duration-500 group ${
                          service.featured
                            ? "bg-gradient-to-br from-church-gold/10 to-amber-500/5 border border-church-gold/30"
                            : "bg-white border border-church-gold/10 hover:border-church-gold/30"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white flex-shrink-0`}>
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-church-navy text-lg mb-1">{service.name}</h4>
                            <p className="text-church-gold-dark font-semibold text-sm mb-2 flex items-center gap-1.5">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              {service.time}
                            </p>
                            <p className="text-church-warm/70 text-sm leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                        {service.featured && (
                          <div className="absolute -top-2 -right-2 px-3 py-1 bg-church-gold text-church-navy text-xs font-bold rounded-full shadow-lg">
                            Featured
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ WHAT TO EXPECT ═══ */}
      <section className="relative py-24 bg-church-navy overflow-hidden">
        <div className="absolute inset-0 bg-cross-pattern opacity-[0.05]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-church-gold/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">New Here?</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                What to Expect
              </h2>
              <div className="cross-divider" />
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Visiting a new church can be intimidating. Here's what you can expect 
                when you join us.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whatToExpect.map((item, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 hover:bg-white/12 transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-church-gold/20 text-church-gold flex items-center justify-center mb-4 group-hover:bg-church-gold group-hover:text-church-navy transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ SPECIAL SERVICES ═══ */}
      <section className="relative py-24 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Special Events</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Special Services
              </h2>
              <div className="cross-divider" />
              <p className="text-church-warm/70 mt-6 max-w-2xl mx-auto text-lg">
                Throughout the year, we hold special services and events for our community.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {specialServices.map((service, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-church-gold/10 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-church-gold/20 to-amber-500/10 text-church-gold-dark flex items-center justify-center flex-shrink-0 group-hover:from-church-gold group-hover:to-church-gold-dark group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-church-navy mb-1">{service.name}</h3>
                      <p className="text-church-gold-dark text-sm font-medium mb-2">{service.time}</p>
                      <p className="text-church-warm/70 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 bg-gradient-to-r from-church-gold to-church-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-church-navy mb-4">
              We Can't Wait to Meet You!
            </h2>
            <p className="text-church-navy/80 text-lg max-w-2xl mx-auto mb-8">
              Whether you're new to faith or have been a believer for years, 
              you are welcome at Yerer Full Gospel Church.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              Have Questions? Contact Us
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
