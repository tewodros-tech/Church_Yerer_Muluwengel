import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const values = [
  {
    title: "Faith",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    verse: "Hebrews 11:1",
    description: "We are grounded in unwavering faith in God, believing in His promises and His power to transform lives through the Gospel of Jesus Christ.",
  },
  {
    title: "Love",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    verse: "1 Corinthians 13:13",
    description: "God's love is the foundation of everything we do. We strive to love God with all our hearts and love our neighbors as ourselves.",
  },
  {
    title: "Community",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    verse: "Acts 2:42-47",
    description: "We are a family of believers committed to walking together, supporting one another, and building meaningful relationships rooted in Christ.",
  },
  {
    title: "Service",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    verse: "Galatians 5:13",
    description: "We believe in serving others as an expression of God's love, using our gifts and resources to make a difference in our community and beyond.",
  },
  {
    title: "Prayer",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    verse: "Philippians 4:6-7",
    description: "Prayer is our lifeline. We are a praying church that believes in the power of communication with God for guidance, strength, and breakthrough.",
  },
  {
    title: "Worship",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    verse: "Psalm 95:6",
    description: "Worship is at the heart of who we are. We express our love and devotion to God through passionate worship, both in song and in our daily lives.",
  },
];

const leadership = [
  {
    name: "Pastor Tesfaye Ayele",
    role: "Senior Pastor",
    bio: "Leading with wisdom and compassion for over 15 years, Pastor Tesfaye has been instrumental in the growth and spiritual development of our church family.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Pastor Meron Tadesse",
    role: "Associate Pastor",
    bio: "Pastor Meron brings a heart for discipleship and teaching, overseeing our Bible study programs and women's ministry with passion and dedication.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    name: "Deacon Bekele Hailu",
    role: "Head Deacon",
    bio: "Serving the church with humility and excellence, Deacon Bekele coordinates our outreach efforts and ensures the smooth operation of church services.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
  {
    name: "Sister Genet Assefa",
    role: "Worship Director",
    bio: "With a gift for leading worship, Sister Genet guides our music ministry, creating atmospheres where people can encounter God's presence.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

const timeline = [
  { year: "2002", event: "Church Founded", desc: "Yerer Full Gospel Church was established with a small group of believers gathering for prayer and worship." },
  { year: "2006", event: "First Building", desc: "Our first permanent church building was completed, providing a dedicated space for worship and fellowship." },
  { year: "2010", event: "Community Outreach", desc: "Launched our community outreach programs, serving the local community through food drives, medical camps, and education support." },
  { year: "2015", event: "Youth Center", desc: "Opened our youth center, providing a safe and engaging space for young people to gather, learn, and grow." },
  { year: "2020", event: "Online Ministry", desc: "Expanded our reach through online services and digital ministry, connecting with believers around the world." },
  { year: "2024", event: "Growing Together", desc: "Continuing to grow and expand our impact, with over 500 members and 10 active ministries serving the community." },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* ═══ PAGE HEADER ═══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-church-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              About Us
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Our Church
              <span className="block gold-gradient-text text-4xl sm:text-5xl lg:text-6xl mt-2">
                Family
              </span>
            </h1>
            <div className="cross-divider" />
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Discover our story, our beliefs, and the community that makes 
              Yerer Full Gospel Church a place of faith, hope, and love.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ OUR MISSION ═══ */}
      <section className="relative py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Our Purpose</p>
                <h2 className="text-4xl sm:text-5xl font-bold text-church-navy leading-tight">
                  Mission & Vision
                </h2>
                <div className="w-16 h-1 bg-church-gold rounded-full mt-4" />
              </div>
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-church-cream rounded-2xl p-8 border-l-4 border-church-gold">
                  <h3 className="text-xl font-bold text-church-navy mb-3">Our Mission</h3>
                  <p className="text-church-warm/80 leading-relaxed">
                    To make disciples of Jesus Christ by proclaiming the Gospel, nurturing believers 
                    in their faith, and serving our community with love and compassion. We are 
                    committed to creating an environment where people can encounter God, grow in 
                    their relationship with Christ, and discover their purpose in His kingdom.
                  </p>
                </div>
                <div className="bg-church-cream rounded-2xl p-8 border-l-4 border-church-gold">
                  <h3 className="text-xl font-bold text-church-navy mb-3">Our Vision</h3>
                  <p className="text-church-warm/80 leading-relaxed">
                    To be a beacon of God's love and hope in Yerer and beyond — a vibrant, 
                    Spirit-filled church where people from all backgrounds come together to 
                    worship, grow, and serve. We envision a community transformed by the power 
                    of the Gospel, impacting generations to come.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ OUR VALUES ═══ */}
      <section className="relative py-24 bg-church-cream overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-church-gold via-church-gold-light to-church-gold" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Our Foundation</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Core Values
              </h2>
              <div className="cross-divider" />
              <p className="text-church-warm/70 mt-6 max-w-2xl mx-auto text-lg">
                These values guide everything we do as a church family.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-church-gold/5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-church-gold/20 to-amber-500/10 flex items-center justify-center text-church-gold-dark mb-5 group-hover:bg-gradient-to-br group-hover:from-church-gold group-hover:to-church-gold-dark group-hover:text-white transition-all duration-500">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-church-navy mb-2">{value.title}</h3>
                  <p className="text-church-gold-dark text-sm font-medium mb-3">{value.verse}</p>
                  <p className="text-church-warm/70 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ OUR HISTORY ═══ */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Our Journey</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Church History
              </h2>
              <div className="cross-divider" />
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-church-gold via-church-gold-light to-church-gold transform md:-translate-x-1/2" />

              <div className="space-y-12">
                {timeline.map((item, i) => (
                  <div key={i} className={`relative flex items-start gap-8 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-church-gold rounded-full border-4 border-church-cream transform -translate-x-1/2 z-10 shadow-lg" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className="bg-church-cream rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                        <span className="inline-block px-4 py-1 bg-church-gold text-church-navy font-bold rounded-full text-sm mb-3">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-bold text-church-navy mb-2">{item.event}</h3>
                        <p className="text-church-warm/70 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ LEADERSHIP ═══ */}
      <section className="relative py-24 bg-church-navy overflow-hidden">
        <div className="absolute inset-0 bg-cross-pattern opacity-[0.05]" />
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-church-gold/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-3">Our Leaders</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Church Leadership
              </h2>
              <div className="cross-divider" />
              <p className="text-white/50 mt-6 max-w-2xl mx-auto text-lg">
                Meet the dedicated leaders who guide and serve our church family.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((leader, i) => (
                <div key={i} className="group cursor-default">
                  <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[3/4]">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-church-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg">{leader.name}</h3>
                      <p className="text-church-gold-light text-sm font-medium">{leader.role}</p>
                    </div>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{leader.bio}</p>
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
              Become Part of Our Story
            </h2>
            <p className="text-church-navy/80 text-lg max-w-2xl mx-auto mb-8">
              We'd love to welcome you to Yerer Full Gospel Church. 
              Come and experience the love of Christ in our community.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="px-10 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Join Us This Sunday
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 bg-white/20 backdrop-blur-sm text-church-navy font-bold rounded-full border-2 border-church-navy/30 hover:bg-white/30 transition-all duration-300"
              >
                Get In Touch
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
