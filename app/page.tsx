"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import { storiesData } from "@/data/stories";
import {
  BookOpen,
  PlayCircle,
  Sparkles,
  CheckCircle,
  Trophy,
  ChevronRight,
} from "lucide-react";

const fadeInVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0, 0, 0.58, 1] as const },
  },
};

export default function Home() {
  const [greeting, setGreeting] = useState("");
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const ceritaSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const updateGreeting = () => {
      const hours = new Date().getHours();
      if (hours >= 5 && hours < 11)
        setGreeting("Halo, Selamat Pagi!");
      else if (hours >= 11 && hours < 15)
        setGreeting("Halo, Selamat Siang!");
      else if (hours >= 15 && hours < 18)
        setGreeting("Halo, Selamat Sore!");
      else setGreeting("Halo, Selamat Malam!");
    };
    updateGreeting();
  }, []);

  const scrollToCerita = () => {
    if (!ceritaSectionRef.current) return;
    const targetPosition =
      ceritaSectionRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      40;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;
    const duration = 800;
    function ease(t: number, b: number, c: number, d: number) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }
    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    requestAnimationFrame(animation);
  };

  const daftarCerita = Object.entries(storiesData)
    .slice(0, 3)
    .map(([id, story]) => ({
      id,
      judul: story.scenes.start.title,
      ringkasan:
        story.scenes.start.description || "Petualangan seru menunggumu.",
      gambar: story.scenes.start.image || "/comics/komik1.png",
      tag: ["Story"],
    }));

  const steps = [
    {
      title: "Pilih Cerita",
      desc: "Pilih petualangan favoritmu.",
      icon: <BookOpen className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-emerald-100 text-emerald-600 border-emerald-200",
    },
    {
      title: "Baca & Nikmati",
      desc: "Baca dengan ilustrasi menarik.",
      icon: <PlayCircle className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-blue-100 text-blue-600 border-blue-200",
    },
    {
      title: "Cari Kosakata",
      desc: "Temukan kata-kata ajaib.",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-amber-100 text-amber-600 border-amber-200",
    },
    {
      title: "Jawab Quiz",
      desc: "Uji pemahaman ceritamu.",
      icon: <CheckCircle className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-rose-100 text-rose-600 border-rose-200",
    },
    {
      title: "Dapat Badge",
      desc: "Kumpulkan koleksi badgemu!",
      icon: <Trophy className="w-6 h-6 md:w-8 md:h-8" />,
      color: "bg-yellow-100 text-yellow-600 border-yellow-200",
    },
  ];

  return (
    <main className="w-full bg-white">
      {/* HERO */}
      <div className="relative min-h-screen w-full overflow-hidden -mt-24 md:-mt-32">
        <div className="absolute inset-0 z-0">
          <picture className="w-full h-full">
            <source media="(max-width: 767px)" srcSet="/heromobile.png" />
            <Image
              src="/bghero.png"
              alt="Background"
              fill
              priority
              className="object-cover object-center"
            />
          </picture>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-32 md:pt-0"
        >
          <h1 className="text-3xl md:text-6xl font-extrabold text-[#78350f] leading-tight uppercase tracking-tight">
            {greeting || "Halo!"}
          </h1>
          <div className="mt-2 w-full max-w-4xl mx-auto px-2">
            <p className="text-xs sm:text-sm md:text-lg text-[#78350f] font-semibold bg-white/50 backdrop-blur-md rounded-2xl md:rounded-full px-6 py-2 inline-block border border-white/30 shadow-sm">
              Jelajahi dunia penuh cerita dan temukan kosakata ajaibmu hari ini.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToCerita}
            className="mt-8 group relative px-8 py-2.5 md:px-10 md:py-3 overflow-hidden rounded-full font-bold text-sm md:text-base text-white transition-all duration-300 shadow-md bg-[#22c55e]"
          >
            <span className="relative z-10">Mulai Baca</span>
          </motion.button>
        </motion.div>
      </div>

      {/* CERITA */}
      <section
        ref={ceritaSectionRef}
        className="relative z-20 max-w-6xl mx-auto px-6 py-20 bg-white"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#451a03]">
              Pilih Petualanganmu!
            </h2>
            <p className="text-[#78350f] font-medium mt-2 text-sm md:text-base">
              Pilih cerita yang paling kamu sukai hari ini.
            </p>
          </div>
          <Link
            href="/cerita"
            className="text-[#22c55e] font-bold hover:scale-105 transition-transform flex items-center gap-2 group text-sm"
          >
            Lihat Semua
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {daftarCerita.map((cerita, idx) => (
            <motion.div
              key={cerita.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: idx * 0.1 },
                },
              }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              <div className="relative h-52 w-full overflow-hidden bg-red-100">
                <img
                  src={cerita.gambar}
                  alt={cerita.judul}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    console.log("gambar error:", cerita.gambar);
                    e.currentTarget.src = "/fallback.png";
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-black text-[#22c55e] uppercase tracking-tighter shadow-sm">
                    {cerita.tag[0]}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold text-[#451a03] mb-2">
                  {cerita.judul}
                </h3>
                <p className="text-sm text-slate-600 font-medium line-clamp-2 mb-6 flex-grow">
                  {cerita.ringkasan}
                </p>
                <Link
                  href={`/story/${cerita.id}`}
                  className="group/btn relative w-full py-3 bg-[#22c55e] hover:bg-[#fbbf24] text-white hover:text-[#451a03] font-bold rounded-xl transition-all duration-300 overflow-hidden shadow-sm flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Baca Sekarang
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FLOW */}
      <section className="relative bg-[#fffbeb] pt-24 pb-0 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 pb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariant}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-black text-[#451a03] uppercase tracking-tight">
              Langkah Petualanganmu
            </h2>
            <p className="mt-4 text-slate-600 font-medium">
              Dekati langkahnya untuk melihat rahasianya!
            </p>
          </motion.div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-2 px-4">
            <div className="hidden lg:block absolute top-[40px] left-[10%] w-[80%] h-0.5 border-t-4 border-dashed border-amber-200 z-0"></div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: index * 0.1 },
                  },
                }}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative z-10 flex flex-col items-center text-center transition-all duration-500 w-full lg:w-1/5 ${
                  activeStep !== null && activeStep !== index
                    ? "opacity-40 scale-95"
                    : "opacity-100 scale-100"
                }`}
              >
                <div
                  className={`w-20 h-20 md:w-24 md:h-24 ${step.color}
                  rounded-[2rem] flex items-center justify-center
                  border-4 border-white shadow-xl
                  transform transition-all duration-500 cursor-pointer
                  ${
                    activeStep === index
                      ? "rotate-0 -translate-y-4 scale-110 shadow-amber-200"
                      : "rotate-3"
                  }`}
                >
                  {step.icon}
                  <div className="absolute -top-2 -right-2 bg-amber-500 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">
                    {index + 1}
                  </div>
                </div>

                <div
                  className={`mt-6 transition-all duration-500 transform ${
                    activeStep === index ? "translate-y-0" : "translate-y-2"
                  }`}
                >
                  <h3
                    className={`text-lg font-black transition-colors duration-300 ${
                      activeStep === index ? "text-amber-600" : "text-[#451a03]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeStep === index
                        ? "grid-rows-[1fr] opacity-100 mt-2"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden text-xs text-slate-600 font-bold leading-relaxed px-4">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-amber-300 animate-bounce">
                    <ChevronRight className="w-6 h-6 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}