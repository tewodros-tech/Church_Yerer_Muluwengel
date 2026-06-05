import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Service Times", path: "/services" },
  { label: "Ministries", path: "/ministries" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "Facebook",
    path: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    path: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    path: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.192c-.243.357-.574.646-.992.867-.42.22-.866.33-1.338.33-.543 0-1.08-.158-1.614-.474-.534-.316-1.095-.77-1.683-1.363-.588-.592-1.043-1.153-1.364-1.683-.321-.53-.482-1.06-.482-1.59 0-.476.108-.921.325-1.338.217-.416.508-.744.873-.986.352-.23.72-.345 1.106-.345.277 0 .501.064.673.192.172.128.29.271.355.428.065.158.098.293.098.406 0 .118-.049.294-.147.53-.098.235-.152.395-.163.48-.013.084.01.176.069.276.058.1.135.202.23.306.097.104.262.273.495.507.234.234.403.399.507.496.104.097.2.165.29.208.087.041.17.059.25.053.078-.006.22-.056.426-.15.205-.094.373-.147.504-.159.13-.012.262.003.397.046.135.043.26.114.377.212.116.099.24.226.372.382.13.156.218.304.264.444.046.14.069.27.069.39 0 .3-.113.576-.34.829z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    path: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    path: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-church-navy text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="relative h-2">
        <div className="absolute inset-0 bg-gradient-to-r from-church-gold via-church-gold-light via-white/30 to-church-gold animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-church-gold/50 to-transparent animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-cross-pattern opacity-[0.03]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Church Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-4 mb-5 group">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-church-gold to-church-gold-dark flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-500">
                <svg className="w-8 h-8 text-church-navy" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l6 3v7L12 17l-6-3V7l6-3z"/>
                  <path d="M12 8l-3 1.5v3L12 14l3-1.5v-3L12 8z" opacity="0.75"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight">Yerer Full Gospel Church</h3>
                <p className="text-church-gold-light text-xs tracking-[0.15em] uppercase font-medium mt-0.5">
                  የረር ሙሉ ወንጌል ቤተ ክርስቲያን
                </p>
              </div>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-md text-sm">
              A place where faith comes alive. Join our vibrant community and experience 
              the love, hope, and transformation found in Jesus Christ. We welcome 
              everyone with open arms.
            </p>
            {/* Subscribe */}
            <div className="mt-6">
              <p className="text-white/60 text-sm font-medium mb-2">Stay Connected</p>
              <div className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder:text-white/30 focus:border-church-gold/50 focus:outline-none focus:ring-1 focus:ring-church-gold/30 transition-all"
                />
                <button className="px-5 py-2.5 bg-church-gold text-church-navy font-semibold rounded-xl text-sm hover:bg-church-gold-light transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-6 text-church-gold uppercase tracking-widest text-sm">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-church-gold transition-all duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-church-gold/50 rounded-full group-hover:w-2 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-base mb-6 text-church-gold uppercase tracking-widest text-sm">
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-church-gold hover:bg-church-gold/10 hover:border-church-gold/30 transition-all duration-300 hover:scale-110"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-white/40 flex items-center gap-2">
                <svg className="w-4 h-4 text-church-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@yererfullgospel.org
              </p>
              <p className="text-white/40 flex items-center gap-2">
                <svg className="w-4 h-4 text-church-gold/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +251 91 234 5678
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Yerer Full Gospel Church. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center italic max-w-lg">
            "For where two or three gather in my name, there am I with them." — Matthew 18:20
          </p>
        </div>
      </div>
    </footer>
  );
}
