"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { storiesData } from "@/data/stories";
import {
  ArrowLeft,
  BookOpen,
  ChevronRight,
  RotateCcw,
  Timer,
  Trophy,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  params: Promise<{
    storyId: string;
  }>;
};

export default function StoryPage({ params }: Props) {
  const { storyId } = use(params);

  const story = storiesData[Number(storyId)] || storiesData[1];

  type SceneKey = keyof typeof story.scenes;

  const [scene, setScene] = useState<SceneKey>("start");
  const [showVocab, setShowVocab] = useState(false);
  const [prepStarted, setPrepStarted] = useState(false);
  const [prepDone, setPrepDone] = useState(false);
  const [startQuiz, setStartQuiz] = useState(false);
  const [quizDone, setQuizDone] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  const current = story.scenes[scene];
  const isDummy = story.vocab.length === 0 && story.quiz.length === 0;
  const isEnding = current.choices.length === 0;

  const prepLimit = 60;
  const quizLimit = story.vocab.length > 6 ? 330 : 300;

  const [prepTimer, setPrepTimer] = useState(prepLimit);
  const [quizTimer, setQuizTimer] = useState(quizLimit);

  /* TIMER HAFALAN */
  useEffect(() => {
    if (prepStarted && prepTimer > 0 && !startQuiz) {
      const t = setTimeout(() => setPrepTimer((p) => p - 1), 1000);
      return () => clearTimeout(t);
    }

    if (prepStarted && prepTimer === 0 && !startQuiz) {
      setPrepDone(true);
      setStartQuiz(true);
    }
  }, [prepStarted, prepTimer, startQuiz]);

  /* TIMER QUIZ */
  useEffect(() => {
    if (startQuiz && quizTimer > 0 && !quizDone) {
      const t = setTimeout(() => setQuizTimer((p) => p - 1), 1000);
      return () => clearTimeout(t);
    }

    if (quizTimer === 0) {
      setQuizDone(true);
    }
  }, [startQuiz, quizTimer, quizDone]);

  /* SAVE */
  useEffect(() => {
    if (quizDone) {
      const saved = JSON.parse(
        localStorage.getItem("storyProgress") || "{}"
      );

      saved[storyId] = {
        completed: true,
        score,
      };

      localStorage.setItem(
        "storyProgress",
        JSON.stringify(saved)
      );
    }
  }, [quizDone, score, storyId]);

  const answer = (i: number) => {
    if (story.quiz[quizIndex]?.answer === i) {
      setScore((p) => p + 1);
    }

    if (quizIndex + 1 < story.quiz.length) {
      setQuizIndex((p) => p + 1);
    } else {
      setQuizDone(true);
    }
  };

  /* PERHITUNGAN BINTANG FLEKSIBEL (BERBASIS PERSENTASE) */
  const totalQuestions = story.quiz.length;
  const percentage = totalQuestions > 0 ? (score / totalQuestions) * 100 : 0;

  const stars =
    percentage >= 80 ? 5 :
    percentage >= 60 ? 4 :
    percentage >= 40 ? 3 :
    percentage >= 20 ? 2 : 1;

  const reset = () => {
    setScene("start");
    setShowSummary(false);
    setShowVocab(false);
    setPrepStarted(false);
    setPrepDone(false);
    setStartQuiz(false);
    setQuizDone(false);
    setQuizIndex(0);
    setScore(0);
    setPrepTimer(prepLimit);
    setQuizTimer(quizLimit);
  };

  if (isDummy) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        Story belum tersedia
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-800">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">

        {/* SCENE NORMAL */}
        {!isEnding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="mb-6 flex justify-between">
              <Link href="/cerita">
                <ArrowLeft />
              </Link>

              <button onClick={() => setShowVocab(true)}>
                <BookOpen />
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow overflow-hidden">
              {current.image && (
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full aspect-[16/10] sm:aspect-video object-contain bg-slate-50"
                />
              )}

              <div className="p-4 sm:p-6 md:p-8">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-3 sm:mb-4">
                  {current.title}
                </h1>
                <p>{current.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {current.choices.map((choice, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setScene(choice.next as SceneKey);
                    setShowSummary(false);
                  }}
                  className="p-5 rounded-2xl border hover:bg-green-50 flex justify-between"
                >
                  {choice.text}
                  <ChevronRight />
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {/* ENDING */}
        {isEnding && !startQuiz && !quizDone && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow overflow-hidden"
          >
            {!showSummary ? (
              <>
                {current.image && (
                  <img
                    src={current.image}
                    alt={current.title}
                    className="w-full aspect-video object-contain"
                  />
                )}

                <div className="p-4 sm:p-6 md:p-8 text-center">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-4 sm:mb-6">
                    {current.title}
                  </h2>

                  <button
                    onClick={() => setShowSummary(true)}
                    className="bg-green-500 text-white px-8 py-4 rounded-2xl font-bold"
                  >
                    Lihat Kesimpulan
                  </button>
                </div>
              </>
            ) : (
              <div className="p-10 text-center">
                <CheckCircle2
                  size={60}
                  className="mx-auto text-blue-500 mb-6"
                />

                <h2 className="text-3xl font-black mb-4">
                  {current.title}
                </h2>

                <p className="mb-8">{current.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    onClick={() => setShowVocab(true)}
                    className="bg-yellow-100 py-4 rounded-xl font-bold"
                  >
                    Kosakata
                  </button>

                  <button
                    onClick={() => {
                      setPrepDone(true);
                      setStartQuiz(true);
                    }}
                    className="bg-green-500 text-white py-4 rounded-xl font-bold"
                  >
                    Mulai Quiz
                  </button>
                </div>

                <button
                  onClick={reset}
                  className="mt-6 flex gap-2 mx-auto text-slate-500"
                >
                  <RotateCcw size={18} />
                  Ulangi Cerita
                </button>
              </div>
            )}
          </motion.div>
        )}

        {/* QUIZ */}
        {startQuiz && !quizDone && (
          <div className="bg-white p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl shadow">
            <div className="flex justify-between mb-6">
              <span>{quizIndex + 1}/{story.quiz.length}</span>
              <span>{quizTimer}s</span>
            </div>

            <h2 className="text-2xl font-bold mb-8">
              {story.quiz[quizIndex].question}
            </h2>

            <div className="grid gap-4">
              {story.quiz[quizIndex].options.map((o, i) => (
                <button
                  key={i}
                  onClick={() => answer(i)}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl border hover:bg-green-50 flex justify-between items-center text-sm sm:text-base"
                >
                  {o}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* RESULT */}
        {quizDone && (
          <div className="bg-white p-10 rounded-3xl shadow text-center">
            <Trophy className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto text-yellow-500 mb-4" />

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black">
              Score {score}/{story.quiz.length}
            </h2>

            <div className="text-3xl my-4">
              {[...Array(stars)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>

            <Link
              href="/cerita"
              className="inline-block mt-6 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold"
            >
              Kembali
            </Link>
          </div>
        )}
      </div>

      {/* VOCAB MODAL */}
      <AnimatePresence>
        {showVocab && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-lg w-[95%] sm:w-full max-h-[90vh] overflow-y-auto">
              <h2 className="text-2xl font-black mb-6">Kosakata</h2>

              <div className="space-y-4">
                {story.vocab.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-bold">{item.word}</h3>
                    <p>{item.meaning}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setShowVocab(false)}
                className="mt-6 w-full bg-blue-500 text-white py-4 rounded-xl font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}