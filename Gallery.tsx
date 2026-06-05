import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "../components/AnimatedSection";

const categories = [
  { id: "all", label: "All Photos" },
  { id: "worship", label: "Worship" },
  { id: "community", label: "Community" },
  { id: "events", label: "Events" },
  { id: "outreach", label: "Outreach" },
  { id: "youth", label: "Youth" },
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1438032005730-c779502df39b?w=700&q=80", alt: "Church worship service", category: "worship", caption: "Sunday Morning Worship" },
  { src: "https://images.unsplash.com/photo-1528458876867-5cefedb86a63?w=700&q=80", alt: "Bible study group", category: "community", caption: "Bible Study Fellowship" },
  { src: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=700&q=80", alt: "Prayer meeting", category: "worship", caption: "United in Prayer" },
  { src: "https://images.unsplash.com/photo-1446457292912-fc64f283db61?w=700&q=80", alt: "Church community", category: "community", caption: "Church Family Gathering" },
  { src: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=700&q=80", alt: "Worship band", category: "worship", caption: "Worship Team Leading" },
  { src: "https://images.unsplash.com/photo-1548625360-27f9fe5e2b21?w=700&q=80", alt: "Cross at sunset", category: "events", caption: "Sunset Service" },
  { src: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=700&q=80", alt: "Church gathering", category: "events", caption: "Annual Church Conference" },
  { src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80", alt: "Community service", category: "outreach", caption: "Community Food Drive" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=700&q=80", alt: "Youth group", category: "youth", caption: "Youth Night Event" },
  { src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=700&q=80", alt: "Children's ministry", category: "community", caption: "Children's Ministry" },
  { src: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=700&q=80", alt: "Men's fellowship", category: "community", caption: "Men's Fellowship Breakfast" },
  { src: "https://images.unsplash.com/photo-1524638431109-93d95c968f8e?w=700&q=80", alt: "Women's gathering", category: "events", caption: "Women's Conference" },
  { src: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=700&q=80", alt: "Hospitality", category: "community", caption: "Fellowship and Hospitality" },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=700&q=80", alt: "Nature worship", category: "events", caption: "Outdoor Worship Service" },
  { src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=700&q=80", alt: "Festival", category: "outreach", caption: "Community Festival" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const navigateImage = useCallback((direction: "prev" | "next") => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      if (direction === "prev") return (prev - 1 + filteredImages.length) % filteredImages.length;
      return (prev + 1) % filteredImages.length;
    });
  }, [filteredImages.length]);
  const prevImage = useCallback(() => navigateImage("prev"), [navigateImage]);
  const nextImage = useCallback(() => navigateImage("next"), [navigateImage]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, prevImage, nextImage]);

  return (
    <div className="pt-20">
      {/* ═══ PAGE HEADER ═══ */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-church-navy via-[#1a2d52] to-church-navy" />
        <div className="absolute inset-0 bg-cross-pattern opacity-10" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-church-gold/8 rounded-full blur-[120px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-church-gold font-semibold tracking-[0.25em] uppercase text-sm mb-4">
              Moments
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Photo
              <span className="block gold-gradient-text text-4xl sm:text-5xl lg:text-6xl mt-2">
                Gallery
              </span>
            </h1>
            <div className="cross-divider" />
            <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
              Capturing the beautiful moments of worship, fellowship, and service 
              in our church community.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ GALLERY ═══ */}
      <section className="relative py-24 bg-church-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-church-gold text-church-navy shadow-lg shadow-church-gold/30"
                      : "bg-white text-church-warm hover:bg-church-gold/10 hover:text-church-navy border border-church-gold/20"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Image Grid */}
            {filteredImages.length === 0 ? (
              <div className="text-center py-20">
                <svg className="w-20 h-20 text-church-warm/30 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="text-church-warm/50 text-lg">No photos in this category yet.</p>
              </div>
            ) : (
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                {filteredImages.map((image, index) => (
                  <div
                    key={index}
                    className="break-inside-avoid group cursor-pointer relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-church-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white text-sm font-medium">{image.caption}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-church-gold text-xs capitalize">{image.category}</span>
                          <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* ═══ LIGHTBOX ═══ */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10 bg-black/30 p-2 rounded-full hover:bg-black/50"
            onClick={closeLightbox}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute top-6 left-6 text-white/50 text-sm bg-black/30 px-4 py-2 rounded-full">
            {selectedIndex + 1} / {filteredImages.length}
          </div>

          {/* Image */}
          <img
            src={filteredImages[selectedIndex].src.replace("w=700", "w=1200")}
            alt={filteredImages[selectedIndex].alt}
            className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-center bg-black/40 backdrop-blur-sm px-6 py-3 rounded-full">
            <p className="text-white font-medium">{filteredImages[selectedIndex].caption}</p>
            <p className="text-church-gold text-xs capitalize">{filteredImages[selectedIndex].category}</p>
          </div>

          {/* Navigation */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4">
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-white hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="p-4 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 text-white hover:scale-110"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Keyboard navigation */}
          <div className="hidden">
            <button onClick={prevImage}>Prev</button>
            <button onClick={nextImage}>Next</button>
          </div>
        </div>
      )}

      {/* ═══ CTA ═══ */}
      <section className="relative py-20 bg-gradient-to-r from-church-gold to-church-gold-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-black text-church-navy mb-4">
              Want to See More?
            </h2>
            <p className="text-church-navy/80 text-lg max-w-2xl mx-auto mb-8">
              Follow us on social media for more photos and updates from our church community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-church-navy text-white font-bold rounded-full hover:bg-church-navy-light transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Follow on Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-sm text-church-navy font-bold rounded-full border-2 border-church-navy/30 hover:bg-white/30 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.192c-.243.357-.574.646-.992.867-.42.22-.866.33-1.338.33-.543 0-1.08-.158-1.614-.474-.534-.316-1.095-.77-1.683-1.363-.588-.592-1.043-1.153-1.364-1.683-.321-.53-.482-1.06-.482-1.59 0-.476.108-.921.325-1.338.217-.416.508-.744.873-.986.352-.23.72-.345 1.106-.345.277 0 .501.064.673.192.172.128.29.271.355.428.065.158.098.293.098.406 0 .118-.049.294-.147.53-.098.235-.152.395-.163.48-.013.084.01.176.069.276.058.1.135.202.23.306.097.104.262.273.495.507.234.234.403.399.507.496.104.097.2.165.29.208.087.041.17.059.25.053.078-.006.22-.056.426-.15.205-.094.373-.147.504-.159.13-.012.262.003.397.046.135.043.26.114.377.212.116.099.24.226.372.382.13.156.218.304.264.444.046.14.069.27.069.39 0 .3-.113.576-.34.829z"/></svg>
                Follow on Instagram
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
