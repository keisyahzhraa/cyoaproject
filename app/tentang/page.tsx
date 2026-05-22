"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const teamMembers = [
  { name: "Haura",   image: "/icon1.png", bgColor: "#EB4600" },
  { name: "Zahra",   image: "/icon2.png", bgColor: "#FEF08A" },
  { name: "Keisyah", image: "/icon3.png", bgColor: "#6698CC" },
  { name: "Aurisa",  image: "/icon4.png", bgColor: "#84592B" },
  { name: "Adis",    image: "/icon5.png", bgColor: "#A92F50" },
];

export default function TentangPage() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden text-slate-800">

      {/* SECTION 1: HERO */}
      <section className="relative pt-0 pb-32 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 relative z-10">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex-1 space-y-6"
          >
            {/* Badge dengan Titik Berkedip */}
            <div className="inline-flex items-center gap-3 px-5 py-2 bg-green-100 text-green-700 rounded-full text-xs font-bold tracking-wider uppercase">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Tentang Kami
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight">
              Membangun Dunia <span className="text-green-600">Literasi</span> yang Menyenangkan
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
              Platform kami adalah ruang petualangan digital yang dirancang khusus untuk memicu imajinasi anak-anak melalui cerita interaktif. Kami percaya bahwa membaca bukan sekadar mengeja kata, tapi gerbang menuju dunia pengetahuan yang tak terbatas. Setiap fitur dibuat untuk memastikan pengalaman belajar yang bermakna dan aman.
            </p>
          </motion.div>

          {/* Area Logo & Dekorasi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" as const }}
            className="flex-1 relative flex justify-center items-center min-h-[450px]"
          >
            <div className="absolute top-10 right-50 text-6xl animate-pulse hidden sm:block z-20">☀️</div>
            <div className="absolute top-15 left-5 text-7xl animate-bounce z-20" style={{ animationDuration: '5s' }}>☁️</div>
            <div className="absolute top-23 left-40 text-6xl animate-bounce z-20" style={{ animationDuration: '5s' }}>☁️</div>

            <div className="relative z-10 w-full max-w-[5000px] transform hover:scale-105 transition-transform duration-500">
              <img
                src="/logo.png"
                alt="Logo KataPetualang"
                className="w-full max-w-none h-auto drop-shadow-2xl"
              />
            </div>

            <div className="absolute top-25 right-20 text-5xl animate-bounce z-20" style={{ animationDuration: '4s' }}>☁️</div>
            <div className="absolute top-10 right-1 text-5xl animate-bounce z-20" style={{ animationDuration: '4s' }}>☁️</div>
          </motion.div>
        </div>

        {/* WAVE DECORATION */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg className="relative block w-[calc(130%+1.3px)] h-[120px] left-[-15%]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,0 C150,90 400,10 600,60 C800,110 1050,30 1200,80 L1200,120 L0,120 Z"
              fill="#bbf7d0"
              opacity="0.3"
            ></path>
          </svg>
          <svg className="absolute bottom-0 left-0 w-full h-[70px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="#f0fdf4"
            />
          </svg>
        </div>
      </section>

      {/* SECTION 2: VISI & MISI */}
      <section className="pt-16 pb-40 px-6 bg-[#f0fdf4] relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8">

            {/* VISI CARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-[#451a03]/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#451a03]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#451a03]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 shadow-inner">
                  <svg className="w-8 h-8 text-[#451a03]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>

                <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight group-hover:text-[#451a03] transition-colors">Visi Kami</h2>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Menjadi katalisator utama dalam meningkatkan minat baca generasi muda melalui teknologi yang edukatif, aman, dan menginspirasi bagi seluruh anak di Indonesia.
                </p>
              </div>
            </motion.div>

            {/* MISI CARD */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative bg-white p-8 md:p-10 rounded-[2.5rem] shadow-lg hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-yellow-400/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-yellow-600 transition-colors">Misi Kami</h2>
                </div>

                <div className="relative space-y-6">
                  <div className="absolute left-[15px] top-2 w-[3px] h-[80%] bg-slate-100 rounded-full overflow-hidden">
                    <div className="w-full h-0 group-hover:h-full bg-gradient-to-b from-yellow-400 to-orange-400 transition-all duration-[1500ms] ease-in-out"></div>
                  </div>

                  {[
                    "Konten cerita berkualitas & visual menarik.",
                    "Integrasi gamifikasi literasi harian.",
                    "Komunitas membaca yang inklusif."
                  ].map((misi, i) => (
                    <div key={i} className="flex items-start gap-5 group/item relative">
                      <div className="relative mt-1">
                        <div className="w-8 h-8 bg-white border-[3px] border-slate-100 rounded-full flex items-center justify-center text-[10px] font-bold text-slate-400 group-hover:border-yellow-400 group-hover/item:bg-yellow-400 group-hover/item:text-white transition-all duration-300 z-10 relative shadow-sm">
                          {i + 1}
                        </div>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-slate-600 font-semibold group-hover/item:text-slate-900 group-hover/item:translate-x-2 transition-all duration-300">
                          {misi}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 3: TIM KAMI */}
      <section className="py-16 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#FEF9C3] text-[#78350F] rounded-full border border-[#FDE047] shadow-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
              </span>
              <h2 className="text-2xl md:text-3xl font-black tracking-widest uppercase">
                Tim Kami
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12 text-left">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col items-center"
              >
                {/* AREA ICON */}
                <div className="relative w-36 h-36 md:w-52 md:h-52 mb-8 flex items-center justify-center">
                  <div
                    className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-500 scale-50 group-hover:scale-110"
                    style={{ backgroundColor: member.bgColor }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative z-10 w-full h-full object-contain transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  />

                  {/* <div className="absolute -right-1 top-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 z-20">
                    <a href={member.linkedin} className="p-2 bg-white shadow-lg rounded-full text-slate-700 hover:text-blue-600 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href={member.ig} className="p-2 bg-white shadow-lg rounded-full text-slate-700 hover:text-pink-500 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849s.012-3.585.07-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.617 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.351-.2 6.78-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.338-2.617-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                  </div> */}
                </div>

                {/* INFO TEKS */}
                <div className="text-center group-hover:-translate-y-1 transition-transform duration-300">
                  <h3 className="text-xl font-black text-slate-900 group-hover:text-green-600 transition-colors uppercase tracking-tight">
                    {member.name}
                  </h3>
                  {/* member.role dikomen karena belum ada datanya */}
                  {/* <p className="text-slate-400 font-bold text-[10px] tracking-widest uppercase mt-1">
                    {member.role}
                  </p> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-bounce-slow-delayed {
          animation: bounce-slow 4s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}