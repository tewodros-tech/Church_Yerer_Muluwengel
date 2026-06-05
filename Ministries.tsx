import { Link } from "react-router-dom";
import AnimatedSection from "../components/AnimatedSection";

const ministries = [
  {
    name: "Worship Ministry",
    tagline: "Leading Hearts to the Throne of God",
    description: "Our worship ministry is dedicated to creating an atmosphere where people can encounter God's presence through music and song. We blend contemporary and traditional styles to lead the congregation in heartfelt, Spirit-led worship.",
    details: [
      "Sunday worship team leadership",
      "Choir ministry with weekly rehearsals",
      "Instrumental training and development",
      "Special musical presentations for holidays and events",
      "Sound and audio-visual technical team",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=80",
    color: "from-amber-500 to-yellow-600",
    leader: "Sister Genet Assefa",
    meeting: "Saturdays, 3:00 PM - 5:00 PM",
  },
  {
    name: "Youth Ministry",
    tagline: "Empowering the Next Generation",
    description: "Our youth ministry is a vibrant community for young people (ages 13-25) to grow in their faith, build lasting friendships, and discover their purpose in God's kingdom. We provide a safe, engaging environment where youth can be themselves and encounter God.",
    details: [
      "Weekly Friday night youth services",
      "Annual youth camps and retreats",
      "Leadership development and mentorship",
      "Community outreach and service projects",
      "Sports and recreational activities",
      "Bible study and discipleship groups",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    color: "from-emerald-500 to-teal-600",
    leader: "Brother Dawit Mekonnen",
    meeting: "Fridays, 5:00 PM - 7:00 PM",
  },
  {
    name: "Children's Ministry",
    tagline: "Nurturing Young Hearts for Jesus",
    description: "We believe children are a vital part of our church family. Our children's ministry provides a fun, safe, and nurturing environment where kids can learn about God's love through age-appropriate teaching, songs, crafts, and activities.",
    details: [
      "Sunday School classes for all ages",
      "Vacation Bible School (VBS) during summer",
      "Children's church during main service",
      "Bible memory verse programs",
      "Holiday special events and performances",
      "Trained and vetted children's workers",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80",
    color: "from-pink-500 to-rose-600",
    leader: "Sister Hiwot Desta",
    meeting: "Sundays, 9:00 AM - 11:00 AM",
  },
  {
    name: "Prayer Ministry",
    tagline: "The Power of Intercession",
    description: "Prayer is the heartbeat of our church. Our prayer ministry is dedicated to intercessory prayer, spiritual warfare, and creating a culture of prayer throughout the church. We believe in the power of united prayer to bring transformation.",
    details: [
      "Weekly prayer meetings every Wednesday",
      "Early morning prayer (Monday - Friday, 6:00 AM)",
      "Prayer chain for urgent requests",
      "Monthly all-night prayer vigils",
      "Prayer counseling and support",
      "Intercessory prayer teams",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80",
    color: "from-purple-500 to-violet-600",
    leader: "Deacon Bekele Hailu",
    meeting: "Wednesdays, 6:00 PM - 8:00 PM",
  },
  {
    name: "Outreach Ministry",
    tagline: "Sharing God's Love in Action",
    description: "We are called to be the hands and feet of Jesus in our community. Our outreach ministry organizes various programs to serve those in need, share the Gospel, and make a tangible difference in the lives of people around us.",
    details: [
      "Food distribution programs for families in need",
      "Medical missions and health awareness campaigns",
      "School supplies and education support",
      "Visitation to hospitals and elderly homes",
      "Evangelism and community outreach events",
      "Disaster relief and emergency assistance",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    color: "from-blue-500 to-indigo-600",
    leader: "Deacon Bekele Hailu",
    meeting: "Monthly (varies by program)",
  },
  {
    name: "Women's Ministry",
    tagline: "Sisters in Faith, Together in Love",
    description: "Our women's ministry provides a supportive community for women of all ages to grow spiritually, build meaningful relationships, and discover their God-given purpose. We meet regularly for fellowship, Bible study, and mutual encouragement.",
    details: [
      "Bi-weekly women's Bible study and prayer",
      "Annual women's conference and retreat",
      "Mentorship program (Titus 2 model)",
      "Community service and outreach initiatives",
      "Craft and fellowship gatherings",
      "Support for new mothers and families",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1524638431109-93d95c968f8e?w=600&q=80",
    color: "from-rose-500 to-pink-600",
    leader: "Pastor Meron Tadesse",
    meeting: "Saturdays, 10:00 AM - 12:00 PM (Bi-weekly)",
  },
  {
    name: "Men's Ministry",
    tagline: "Raising Godly Men for Today's World",
    description: "Our men's ministry is committed to helping men become strong leaders in their families, churches, and communities. Through fellowship, accountability, and God's Word, we equip men to live with purpose and integrity.",
    details: [
      "Monthly men's fellowship breakfast",
      "Annual men's conference and retreat",
      "Fatherhood and family workshops",
      "Community service and mentorship programs",
      "Accountability groups and discipleship",
      "Sports and recreational fellowship",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&q=80",
    color: "from-sky-500 to-blue-600",
    leader: "Brother Tekle Berhan",
    meeting: "First Saturday of each month, 8:00 AM",
  },
  {
    name: "Hospitality Ministry",
    tagline: "Making Everyone Feel at Home",
    description: "Our hospitality ministry ensures that every person who walks through our doors feels welcomed, valued, and loved. From greeting guests to organizing fellowship meals, this ministry creates a warm and inviting atmosphere.",
    details: [
      "Welcome team for Sunday services",
      "Fellowship refreshments and meals",
      "New member orientation and follow-up",
      "Event planning and coordination",
      "Visitor care and connection",
      "Church cleaning and preparation",
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&q=80",
    color: "from-orange-500 to-amber-600",
    leader: "Sister Almaz Girma",
    meeting: "Ongoing (varies by event)",
  },
];

export default function Ministries() {
  return (
    <div className="pt-20">
      {/* ═══ PAGE HEADER ═══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-church-gold/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-emerald-500/5 rounded-full blur-[80px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              Our Work
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Our
              <span className="block gold-gradient-text text-4xl sm:text-5xl lg:text-6xl mt-2">
                Ministries
              </span>
            </h1>
            <div className="cross-divider" />
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Discover a place to grow, serve, and connect. Our ministries are designed 
              to help you deepen your faith and find your purpose.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ MINISTRIES GRID ═══ */}
      <section className="relative py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-church-gold-dark font-semibold tracking-[0.25em] uppercase text-sm mb-3">Serve & Grow</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-church-navy mb-4">
                Find Your Place
              </h2>
              <div className="cross-divider" />
              <p className="text-church-warm/70 mt-6 max-w-2xl mx-auto text-lg">
                We have a ministry for everyone. Explore the different ways you can 
                get involved and make a difference.
              </p>
            </div>

            <div className="space-y-20">
              {ministries.map((ministry, i) => (
                <div key={i} className="group">
                  <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img
                          src={ministry.image}
                          alt={ministry.name}
                          className="w-full h-72 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-church-navy/60 via-transparent to-transparent" />
                        <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${ministry.color} flex items-center justify-center text-white shadow-lg`}>
                          {ministry.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-church-cream rounded-full mb-4">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${ministry.color}`} />
                        <span className="text-church-warm text-sm font-medium">Led by {ministry.leader}</span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold text-church-navy mb-2">
                        {ministry.name}
                      </h3>
                      <p className="text-church-gold-dark font-semibold text-lg mb-4 italic">
                        "{ministry.tagline}"
                      </p>
                      <p className="text-church-warm/70 leading-relaxed mb-6">
                        {ministry.description}
                      </p>

                      {/* Details */}
                      <div className="bg-church-cream rounded-2xl p-6 mb-6">
                        <p className="text-sm font-semibold text-church-navy mb-3 uppercase tracking-wider">What we do:</p>
                        <ul className="space-y-2">
                          {ministry.details.map((detail, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-church-warm/70">
                              <svg className="w-4 h-4 text-church-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Meeting info */}
                      <div className="flex items-center gap-3 text-sm text-church-warm">
                        <svg className="w-5 h-5 text-church-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium text-church-navy">Meets:</span> {ministry.meeting}
                      </div>
                    </div>
                  </div>
                  {i < ministries.length - 1 && (
                    <div className="mt-16 border-t border-church-gold/10" />
                  )}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ GET INVOLVED ═══ */}
      <section className="relative py-20 bg-gradient-to-r from-church-gold to-church-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-church-navy mb-4">
              Ready to Get Involved?
            </h2>
            <p className="text-church-navy/80 text-lg max-w-2xl mx-auto mb-8">
              We believe God has given each of us unique gifts and talents. 
              There's a place for you to serve and make a difference.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-10 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                I Want to Serve
              </Link>
              <Link
                to="/services"
                className="px-10 py-4 bg-white/20 backdrop-blur-sm text-church-navy font-bold rounded-full border-2 border-church-navy/30 hover:bg-white/30 transition-all duration-300"
              >
                View Service Times
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
