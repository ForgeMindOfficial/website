import { useEffect, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Grid3X3,
  CirclePlay,
  ExternalLink,
  Camera,
  Layers3,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const INSTAGRAM_URL = "https://www.instagram.com/newsglowde/";

/*
  Add your actual published NewsGlow assets here.

  Images should be placed in:
  public/images/projects/newsglow/instagram/

  Each post can contain multiple slides.
*/

const posts = [
  {
    id: 1,
    type: "carousel",
    title: "Positive News",
    caption:
      "Die Welt hat auch gute Nachrichten. 🌍✨ Entdecke die positiven Entwicklungen des Tages.",
    slides: [
      "/images/projects/newsglow/instagram/post-01.jpg",
      "/images/projects/newsglow/instagram/post-02.jpg",
      "/images/projects/newsglow/instagram/post-03.jpg",
    ],
  },
  {
    id: 2,
    type: "story",
    title: "Environment",
    caption: "Positive Nachrichten aus der Welt der Umwelt.",
    slides: [
      "/images/projects/newsglow/story-preview.png",
    ],
  },
  {
    id: 3,
    type: "carousel",
    title: "Science & Innovation",
    caption: "Fortschritt, Innovation und gute Nachrichten.",
    slides: [
      "/images/projects/newsglow/instagram/post-04.jpg",
      "/images/projects/newsglow/instagram/post-05.jpg",
    ],
  },
];

function InstagramViewer({ post, onClose }) {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide(0);
  }, [post]);

  useEffect(() => {
    if (!post) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();

      if (event.key === "ArrowRight") {
        setSlide((current) =>
          Math.min(current + 1, post.slides.length - 1)
        );
      }

      if (event.key === "ArrowLeft") {
        setSlide((current) => Math.max(current - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [post, onClose]);

  if (!post) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="presentation"
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 z-20 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
        aria-label="Close preview"
      >
        <X size={22} />
      </button>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className={`relative flex max-h-[90vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#111827] shadow-2xl ${
          post.type === "story"
            ? "max-w-[430px] flex-col"
            : "max-w-[1000px] flex-col md:flex-row"
        }`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${post.title} preview`}
      >
        {/* IMAGE */}

        <div
          className={`relative flex min-h-0 items-center justify-center bg-[#050B14] ${
            post.type === "story"
              ? "aspect-[9/16] w-full"
              : "aspect-square w-full md:w-[60%]"
          }`}
        >
          <img
            src={post.slides[slide]}
            alt={`${post.title}, slide ${slide + 1}`}
            className="h-full w-full object-contain"
          />

          {/* STORY PROGRESS / CAROUSEL INDICATORS */}

          {post.type === "story" ? (
            <div className="absolute left-4 right-4 top-4 flex gap-1.5">
              {post.slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full ${
                    index <= slide ? "bg-white" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          ) : (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
              {post.slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === slide ? "bg-blue-400" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}

          {/* NAVIGATION */}

          {slide > 0 && (
            <button
              onClick={() => setSlide((current) => current - 1)}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
          )}

          {slide < post.slides.length - 1 && (
            <button
              onClick={() => setSlide((current) => current + 1)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          )}
        </div>

        {/* POST DETAILS */}

        {post.type !== "story" && (
          <div className="flex min-h-0 flex-1 flex-col bg-[#111827]">
            <div className="flex items-center gap-3 border-b border-white/10 p-5">
<div className="h-10 w-10 overflow-hidden rounded-full border border-white/10">
  <img
    src="/images/projects/newsglow/logo.png"
    alt="NewsGlow logo"
    className="h-full w-full object-cover"
  />
</div>

              <div>
                <p className="text-sm font-semibold text-white">
                  newsglowde
                </p>
                <p className="text-xs text-slate-400">
                  Positive Nachrichten
                </p>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <p className="text-sm leading-relaxed text-slate-300">
                <span className="mr-2 font-semibold text-white">
                  newsglowde
                </span>
                {post.caption}
              </p>
            </div>

            <div className="border-t border-white/10 p-5">
              <div className="mb-4 flex items-center gap-5 text-white">
                <Heart size={22} />
                <MessageCircle size={22} />
                <Send size={22} />
                <Bookmark size={22} className="ml-auto" />
              </div>

              <p className="text-xs text-slate-500">
                Portfolio preview · Not connected to Instagram
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function NewsGlowInstagram() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <section className="relative overflow-hidden bg-[#172337] px-6 py-28 md:px-10">
      <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* SECTION HEADING */}

        <div className="mb-14">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">
            The Final Product
          </p>

          <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            From automation
            <br />
            to audience.
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-slate-400">
            The final result of NewsGlow's editorial automation is
            published as branded social media content. Explore an
            interactive preview of the NewsGlow Instagram experience.
          </p>
        </div>

        {/* INSTAGRAM PROFILE */}

        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] border border-white/10 bg-[#0B1B2B] shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
          {/* TOP BAR */}

          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-3">
              <Camera size={22} className="text-white" />

              <span className="font-semibold text-white">
                Instagram
              </span>
            </div>

            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
              Interactive Preview
            </span>
          </div>

          {/* PROFILE HEADER */}

          <div className="grid gap-7 border-b border-white/10 px-6 py-10 md:grid-cols-[180px_1fr] md:px-12">
            <div className="flex justify-center md:justify-start">
<div className="h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-amber-400 via-orange-400 to-blue-500 p-[3px]">
  <img
    src="/images/projects/newsglow/logo.png"
    alt="NewsGlow logo"
    className="h-full w-full rounded-full object-cover"
  />
</div>
            </div>

            <div>
              <div className="mb-6 flex flex-wrap items-center gap-4">
                <h3 className="text-2xl font-semibold text-white">
                  newsglowde
                </h3>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400"
                >
                  View Profile
                  <ExternalLink size={15} />
                </a>
              </div>

              <p className="mb-3 font-semibold text-white">
                NewsGlow DE | Positive Nachrichten
              </p>

              <div className="space-y-1 text-sm leading-relaxed text-slate-300">
                <p>🌍 Die Welt hat auch gute Nachrichten.</p>
                <p>✨ Täglich positive News & echte Fortschritte.</p>
                <p>💛 Mehr Hoffnung. Weniger Negativität.</p>
              </div>
            </div>
          </div>

          {/* CONTENT TABS */}

          <div className="flex items-center justify-center gap-10 border-b border-white/10 px-6 py-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-white">
              <Grid3X3 size={16} />
              Posts
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              <CirclePlay size={16} />
              Stories
            </div>
          </div>

          {/* POST GRID */}

          <div className="grid grid-cols-3 gap-1 p-1 sm:gap-2 sm:p-3">
            {posts.map((post) => (
              <button
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="group relative aspect-square overflow-hidden bg-[#111827]"
                aria-label={`Open ${post.title}`}
              >
                <img
                  src={post.slides[0]}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/40">
                  {post.type === "carousel" ? (
                    <Layers3
                      size={26}
                      className="absolute right-3 top-3 text-white"
                    />
                  ) : (
                    <CirclePlay
                      size={26}
                      className="absolute right-3 top-3 text-white"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* PROFILE FOOTER */}

          <div className="border-t border-white/10 px-6 py-5 text-center">
            <p className="text-xs text-slate-500">
              Interactive portfolio preview using NewsGlow content.
            </p>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <InstagramViewer
            post={selectedPost}
            onClose={() => setSelectedPost(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}