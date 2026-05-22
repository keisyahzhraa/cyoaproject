"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { storiesData } from "@/data/stories";
import {
  ChevronRight,
  BookOpen,
  Trophy,
  Eye,
} from "lucide-react";

type HistoryItem = {
  completed: boolean;
  score: number;
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function CeritaPage() {
  const [selectedWords, setSelectedWords] = useState<{ word: string; meaning: string }[] | null>(null);
  const [history, setHistory] = useState<Record<string, HistoryItem>>({});

  useEffect(() => {
    const saved = localStorage.getItem("storyProgress");
    if (saved) {
      setHistory(JSON.parse(saved));
    }
  }, []);

  const allStories = Object.entries(storiesData).map(([id, story]) => ({
    id,
    title: story.scenes?.start?.title || `Story ${id}`,
    image: story.scenes?.start?.image ?? "/fallback.png",
    words: story.vocab || [],
    completed: history[id]?.completed || false,
    score: history[id]?.score || 0,
  }));

  return (
    <main className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#15803d]">
            Jejak Petualanganmu
          </h1>
          <p className="text-[#166534] mt-4 max-w-4xl mx-auto leading-relaxed">
            Semua cerita yang pernah kamu jelajahi akan muncul di sini.
            Lihat progres belajarmu, ulangi cerita favoritmu, dan pelajari
            kembali kosakata baru.
          </p>
        </motion.div>

        {/* CARD GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {allStories.map((story, idx) => (
            <motion.div
              key={story.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={cardVariants}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={story.image || "/fallback.png"}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = "/fallback.png";
                  }}
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 px-4 py-1 rounded-full text-[10px] font-black text-[#22c55e] uppercase shadow-sm">
                    Story {story.id}
                  </span>
                  {story.completed && (
                    <span className="bg-yellow-400 px-4 py-1 rounded-full text-[10px] font-black text-[#451a03] shadow-sm flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      {story.score}/5
                    </span>
                  )}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col flex-grow text-left">
                <h3 className="text-xl font-bold text-[#451a03] mb-2">
                  {story.title}
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                  {story.completed
                    ? "Cerita sudah selesai dipelajari."
                    : "Belum pernah dibaca."}
                </p>

                {/* PROGRESS */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-slate-500 uppercase">
                      Progress
                    </span>
                    <span
                      className={`text-sm font-black ${
                        story.completed ? "text-[#22c55e]" : "text-slate-400"
                      }`}
                    >
                      {story.completed ? "100%" : "0%"}
                    </span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: story.completed ? "100%" : "0%",
                      }}
                      transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut" as const,
                      }}
                      className={`h-full ${
                        story.completed ? "bg-[#22c55e]" : "bg-slate-300"
                      }`}
                    />
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="flex flex-col gap-3 mt-auto">
                  <Link
                    href={`/story/${story.id}`}
                    className="group/btn relative w-full py-3 bg-[#22c55e] hover:bg-[#fbbf24] text-white hover:text-[#451a03] font-bold rounded-xl transition-all duration-300 overflow-hidden shadow-sm flex items-center justify-center gap-2"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <ChevronRight className="w-4 h-4" />
                      Baca Lagi
                    </span>
                  </Link>

                  {story.completed && (
                    <button
                      onClick={() => setSelectedWords(story.words)}
                      className="w-full py-3 border-2 border-[#22c55e] text-[#22c55e] rounded-xl font-bold hover:bg-[#22c55e] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" />
                      Lihat Kosakata
                    </button>
                  )}

                  {!story.completed && (
                    <button
                      disabled
                      className="w-full py-3 border-2 border-slate-200 text-slate-400 rounded-xl font-bold flex items-center justify-center gap-2 cursor-not-allowed"
                    >
                      <Eye className="w-4 h-4" />
                      Belum Dibuka
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL VOCAB */}
      <AnimatePresence>
        {selectedWords && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-[2rem] p-8 w-full max-w-xl shadow-2xl"
            >
              <h2 className="text-2xl font-black text-[#15803d] mb-8">
                Kosakata yang Dipelajari
              </h2>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                {selectedWords.map((word, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="p-4 bg-green-50 rounded-2xl border border-green-100 text-left"
                  >
                    <h3 className="font-bold text-[#451a03]">
                      {word.word}
                    </h3>
                    <p className="text-sm text-slate-600 italic">
                      {word.meaning}
                    </p>
                  </motion.div>
                ))}
              </div>
              <button
                onClick={() => setSelectedWords(null)}
                className="mt-8 w-full py-4 bg-[#22c55e] text-white rounded-xl font-bold hover:scale-105 active:scale-95 transition-all"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}