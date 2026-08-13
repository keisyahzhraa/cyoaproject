export type VocabItem = {
  word: string;
  meaning: string;
};

export type QuizItem = {
  question: string;
  options: string[];
  answer: number;
};

export type StoryScene = {
  title: string;
  image?: string;
  description?: string;
  summary?: string;
  vocab: VocabItem[];
  choices: {
    text: string;
    next: string;
  }[];
};

export type StoryPack = {
  isReady: boolean;
  vocab: VocabItem[];
  quiz: QuizItem[];
  scenes: Record<string, StoryScene>;
};

/* =========================================
VOCAB
========================================= */

export const sharedVocab: VocabItem[] = [
  {
    word: "Kepulauan",
    meaning: "Gugusan beberapa buah pulau.",
  },
  {
    word: "Turis",
    meaning: "Pelancong atau wisatawan.",
  },
  {
    word: "Flora",
    meaning: "Keseluruhan tumbuhan di suatu daerah.",
  },
  {
    word: "Fauna",
    meaning: "Keseluruhan hewan di suatu habitat.",
  },
  {
    word: "Biota",
    meaning: "Gabungan flora dan fauna dalam suatu daerah.",
  },
];

/* =========================================
QUIZ
========================================= */

export const quiz: QuizItem[] = [
  {
    question: "Apa arti kata 'kepulauan'?",
    options: [
      "Laut luas",
      "Kumpulan beberapa pulau",
      "Hutan lebat",
      "Tempat hewan",
    ],
    answer: 1,
  },
  {
    question: "Siapakah turis?",
    options: ["Penjaga laut", "Pelancong", "Guru", "Nelayan"],
    answer: 1,
  },
  {
    question: "Apa arti flora?",
    options: ["Tumbuhan", "Hewan", "Pulau", "Wisata"],
    answer: 0,
  },
  {
    question: "Apa arti fauna?",
    options: ["Bunga", "Hewan", "Tanah", "Air"],
    answer: 1,
  },
  {
    question: "Apa arti biota?",
    options: [
      "Gabungan flora dan fauna",
      "Hanya hewan",
      "Hanya tumbuhan",
      "Turis",
    ],
    answer: 0,
  },
];

/* =========================================
STORY 1
========================================= */

const storyOne: StoryPack = {
  isReady: true,
  vocab: sharedVocab,
  quiz,

  scenes: {
    /* SCENE 1 */

    start: {
      title: "Liburan Belajar di Kepulauan Raja Ampat",
      image: "/comics/story1/scene1.png",
      description:
        "Bu Rina mengajak anak-anak belajar tentang flora, fauna, dan biota di kepulauan Raja Ampat.",
      vocab: sharedVocab,
      choices: [
        {
          text: "a. Menjelajah Hutan Melihat Flora",
          next: "forest2",
        },
        {
          text: "b. Menjelajah Laut Melihat Fauna",
          next: "sea2",
        },
      ],
    },

    /* ======================
       FLORA
    ====================== */

    forest2: {
      title: "Hutan Anggrek Biru",
      image: "/comics/story1/scene2a.png",
      description:
        "Seorang turis terlihat ingin memetik Anggrek Biru Raja Ampat.",
      vocab: sharedVocab,
      choices: [
        {
          text: "a. Mengingatkan turis dengan sopan agar menjaga flora",
          next: "forestGood",
        },
        {
          text: "b. Diam saja karena takut menegur turis",
          next: "forestBad",
        },
      ],
    },

    forestGood: {
      title:
        "Turis meminta maaf dan tidak jadi memetik bunga. Anak-anak berhasil menjaga flora dan biota Raja Ampat.",
      image: "/comics/story1/ending-good.png",
      summary:
        "Menjaga flora dan seluruh biota adalah tanggung jawab bersama. Keberanian untuk peduli dan mengingatkan dengan sopan dapat menjaga keindahan alam agar tetap lestari bagi generasi mendatang.",
      vocab: sharedVocab,
      choices: [],
    },

    forestBad: {
      title:
        "Turis memetik anggrek langka. Anak-anak menyesal karena tidak menjaga flora.",
      image: "/comics/story1/ending-bad.png",
      summary:
        "Diam saat melihat kerusakan flora dapat merugikan fauna dan seluruh biota. Keberanian menjaga alam adalah tanggung jawab semua orang.",
      vocab: sharedVocab,
      choices: [],
    },

    /* ======================
       FAUNA
    ====================== */

    sea2: {
      title: "Hiu Berjalan Raja Ampat",
      image: "/comics/story1/scene2b.png",
      description: "Anak-anak melihat fauna langka: hiu berjalan.",
      vocab: sharedVocab,
      choices: [
        {
          text: "a. Mengingatkan turis agar mengambil kembali sampahnya",
          next: "seaGood",
        },
        {
          text: "b. Membiarkan saja karena takut menegur turis",
          next: "seaBad",
        },
      ],
    },

    seaGood: {
      title:
        "Hiu berjalan tetap nyaman. Anak-anak belajar menghormati fauna dan habitatnya.",
      image: "/comics/story1/ending-sea-good.png",
      summary:
        "Berani menegur dengan sopan dapat menjaga fauna dan biota tetap lestari. Kepedulian kecil bisa memberi dampak besar bagi alam.",
      vocab: sharedVocab,
      choices: [],
    },

    seaBad: {
      title:
        "Hiu berjalan kabur ketakutan. Anak-anak belajar bahwa fauna tidak boleh diganggu.",
      image: "/comics/story1/ending-sea-bad.png",
      summary:
        "Diam saat melihat kerusakan alam bisa membawa akibat buruk. Menjaga fauna dan biota harus dimulai dari keberanian bertindak benar.",
      vocab: sharedVocab,
      choices: [],
    },
  },
};

const storyTwoVocab: VocabItem[] = [
  {
    word: "Penyerang",
    meaning: "Orang yang menyerang; pemain depan dalam permainan sepak bola.",
  },
  {
    word: "Penjaga",
    meaning: "Orang yang menjaga keselamatan atau keamanan; pengawal.",
  },
  {
    word: "Lincah",
    meaning: "Selalu bergerak; aktif dan gesit; tidak dapat diam.",
  },
  {
    word: "Mengarahkan",
    meaning: "Menunjukkan arah; membimbing ke suatu jalan yang baik.",
  },
  {
    word: "Lamban",
    meaning: "Tidak cekatan; lambat dalam gerakan atau kerja.",
  },
  {
    word: "Ekspresi",
    meaning:
      "Pengungkapan perasaan atau gagasan; pandangan air muka yang memperlihatkan perasaan.",
  },
  {
    word: "Menyaksikan",
    meaning:
      "Melihat sendiri dengan mata kepala sendiri suatu peristiwa; menonton.",
  },
  { word: "Naungan", meaning: "Tempat berlindung; perlindungan." },
  {
    word: "Pendapat",
    meaning: "Pikiran; anggapan; buah pemikiran tentang suatu hal.",
  },
  {
    word: "Tertunduk",
    meaning: "Dalam keadaan menunduk tentang kepala atau pandangan.",
  },
  { word: "Patah semangat", meaning: "Hilang keberaniannya; putus asa." },
  {
    word: "Beranjak",
    meaning: "Beralih tempat; bergerak sedikit; mulai berbuat sesuatu.",
  },
  {
    word: "Menggertak",
    meaning: "Menakut-nakuti dengan suara atau kata-kata keras; mengancam.",
  },
  {
    word: "Menghiraukan",
    meaning: "Memedulikan; memperhatikan; mengindahkan.",
  },
  {
    word: "Termenung",
    meaning: "Diam berpikir-pikir karena sedih atau susah.",
  },
  {
    word: "Kasar",
    meaning:
      "Tidak halus; tidak sopan; agak keras tentang perbuatan atau perkataan.",
  },
  {
    word: "Meminta",
    meaning: "Berkata-kata supaya diberi atau mendapat sesuatu; memohon.",
  },
  {
    word: "Mengakui",
    meaning: "Menyatakan sah atau benar; membenarkan tentang kesalahan.",
  },
  { word: "Kemampuan", meaning: "Kesanggupan; kecakapan; kekuatan." },
  {
    word: "Berharga",
    meaning: "Mempunyai harga; bernilai; mempunyai mutu yang tinggi; penting.",
  },
  {
    word: "Handal",
    meaning:
      "Bentuk tidak baku dari andal: dapat dipercaya; memberikan hasil yang sama pada ujian berulang.",
  },
  { word: "Berselang", meaning: "Ada jaraknya atau antaranya; berantara." },
  {
    word: "Kekeliruan",
    meaning: "Kesalahan; kekhilafan; hal-hal yang keliru.",
  },
  {
    word: "Mengurungkan",
    meaning: "Menjadikan urung atau tidak jadi; membatalkan.",
  },
  {
    word: "Wasit",
    meaning: "Pemimpin pertandingan; penengah; pelerai antara yang bertengkar.",
  },
  {
    word: "Adil",
    meaning: "Tidak berat sebelah; tidak memihak; berpegang pada kebenaran.",
  },
];

const storyTwoQuiz: QuizItem[] = [
  {
    question:
      "Di dalam tim sepak bola Herdi, Neva bertugas sebagai penyerang. Apa yang dimaksud dengan penyerang?",
    options: [
      "Pemain lini depan yang bertugas menyerang dan mencetak gol",
      "Pemain lini belakang yang menjaga pertahanan gawang",
      "Orang yang bertugas memimpin pertandingan dan membawa peluit",
      "Orang yang memberikan instruksi dari pinggir lapangan",
    ],
    answer: 0,
  },
  {
    question:
      "Ojan terkenal sebagai anak yang lincah saat bermain bola. Apa arti dari kata lincah?",
    options: [
      "Anak yang pendiam dan jarang bergerak",
      "Selalu bergerak, tidak bisa diam, serta aktif dan gesit",
      "Mudah merasa lelah saat berlari di lapangan",
      "Anak yang memiliki postur tubuh paling tinggi",
    ],
    answer: 1,
  },
  {
    question:
      "Ojan mengejek Herdi dengan sebutan lamban. Apa arti dari kata lamban?",
    options: [
      "Terlalu cepat mengambil keputusan tanpa berpikir",
      "Tidak cekatan atau lambat dalam gerakan maupun kerja",
      "Sangat kuat menahan benturan fisik dari lawan",
      "Pintar menyusun rencana taktik permainan",
    ],
    answer: 1,
  },
  {
    question:
      "Sikap Herdi membuat teman-temannya menjadi patah semangat dan ingin pulang. Apa arti istilah patah semangat?",
    options: [
      "Mengalami cedera patah tulang kaki saat bermain",
      "Hilang keberanian, kehilangan gairah berjuang, atau putus asa",
      "Mendapatkan kekuatan baru setelah istirahat",
      "Semangat yang menggebu-gebu untuk menang",
    ],
    answer: 1,
  },
  {
    question:
      "Herdi termenung sendirian di bangku lapangan setelah ditinggal pergi. Apa arti kata termenung?",
    options: [
      "Tertidur sangat lelap sampai mendengkur",
      "Diam berpikir-pikir karena merasa sedih, susah, atau menyesal",
      "Tertawa terbahak-bahak melihat kejadian lucu",
      "Berlari mondar-mandir karena panik",
    ],
    answer: 1,
  },
];

/* =========================================
STORY 2
========================================= */

const storyTwo: StoryPack = {
  isReady: true,
  vocab: storyTwoVocab,
  quiz: storyTwoQuiz,

  scenes: {
    start: {
      title: "Pertandingan Tim Herdi",
      image: "/comics/story2/scene1.png",
      description:
        "Herdi bermain sepak bola bersama teman-temannya. Ojan ingin ikut bermain, tetapi tim Herdi sudah penuh. Apa yang harus Herdi lakukan?",
      vocab: storyTwoVocab,
      choices: [
        {
          text: "a. Tetap bermain dan menolak Ojan masuk tim",
          next: "scene2a",
        },
        {
          text: "b. Keluar dari tim agar Ojan bisa bermain",
          next: "scene2b",
        },
      ],
    },

    scene2a: {
      title: "Herdi Mulai Termenung",
      image: "/comics/story2/scene2a.png",
      description:
        "Herdi menyaksikan Ojan duduk sendirian dengan ekspresi sedih. Ia mulai termenung memikirkan pendapatnya tentang situasi ini.",
      vocab: storyTwoVocab,
      choices: [
        {
          text: "a. Tidak menghiraukan Ojan dan tetap bermain",
          next: "badA",
        },
        {
          text: "b. Beranjak menghampiri Ojan dan meminta maaf",
          next: "goodA",
        },
      ],
    },

    badA: {
      title:
        "Ojan pulang dengan sedih. Herdi menyesal telah tidak menghiraukan temannya.",
      image: "/comics/story2/ending-bad1.png",
      summary:
        "Tidak menghiraukan perasaan teman bisa membuat orang lain patah semangat. Kita harus belajar peduli kepada sesama.",
      vocab: storyTwoVocab,
      choices: [],
    },

    goodA: {
      title: "Ojan memaafkan Herdi. Mereka bermain bersama dengan gembira.",
      image: "/comics/story2/ending-good1.png",
      summary:
        "Mengakui kesalahan dan meminta maaf adalah sikap berani dan berharga. Kepedulian membuat persahabatan semakin kuat.",
      vocab: storyTwoVocab,
      choices: [],
    },

    scene2b: {
      title: "Herdi Mengalah",
      image: "/comics/story2/scene2b.png",
      description:
        "Herdi duduk di bangku penonton. Namun teman-temannya terlihat lamban dan kebingungan karena kehilangan penyerang andalan.",
      vocab: storyTwoVocab,
      choices: [
        {
          text: "a. Tetap diam dan membiarkan tim kebingungan",
          next: "badB",
        },
        {
          text: "b. Beranjak menghampiri teman-teman untuk mengarahkan",
          next: "goodB",
        },
      ],
    },

    badB: {
      title: "Tim bermain kacau karena tidak saling bekerja sama.",
      image: "/comics/story2/ending-bad2.png",
      summary:
        "Mengalah saja tidak cukup. Kita juga perlu mengarahkan dan berkomunikasi agar masalah bisa selesai.",
      vocab: storyTwoVocab,
      choices: [],
    },

    goodB: {
      title:
        "Herdi mengarahkan situasi. Tim kembali lincah dan kompak bermain bersama.",
      image: "/comics/story2/ending-good2.png",
      summary:
        "Kemampuan mengarahkan dan bekerja sama membuat masalah lebih mudah diselesaikan. Wasit pun mengakui permainan mereka adil dan sportif.",
      vocab: storyTwoVocab,
      choices: [],
    },
  },
};

/* =========================================
DUMMY
========================================= */

const dummyStory = (title: string): StoryPack => ({
  isReady: false,
  vocab: [],
  quiz: [],
  scenes: {
    start: {
      title,
      description: "",
      vocab: [],
      choices: [],
    },
  },
});

/* =========================================
STORY 3
========================================= */

const storyThreeVocab: VocabItem[] = [
  {
    word: "Panorama",
    meaning: "Pemandangan yang luas dan indah.",
  },
  {
    word: "Destinasi",
    meaning: "Tempat tujuan yang ingin dikunjungi.",
  },
  {
    word: "Antrean",
    meaning: "Barisan orang yang menunggu giliran.",
  },
  {
    word: "Kerajinan",
    meaning: "Barang hasil buatan tangan.",
  },
  {
    word: "Apresiasi",
    meaning: "Pujian atau penghargaan terhadap sesuatu yang baik.",
  },
];

const storyThreeQuiz: QuizItem[] = [
  {
    question: "Apa arti kata 'panorama'?",
    options: [
      "Jalan menuju desa",
      "Pemandangan yang luas dan indah",
      "Tempat membeli makanan",
      "Barisan orang berjalan",
    ],
    answer: 1,
  },
  {
    question: "Apa yang dimaksud dengan 'destinasi'?",
    options: [
      "Tempat tujuan yang dikunjungi",
      "Tempat untuk beristirahat",
      "Orang yang memandu wisata",
      "Kendaraan untuk bepergian",
    ],
    answer: 0,
  },
  {
    question: "Apa arti kata 'antrean'?",
    options: [
      "Tempat duduk pengunjung",
      "Jalan kecil di pasar",
      "Barisan orang yang menunggu giliran",
      "Tempat membayar makanan",
    ],
    answer: 2,
  },
  {
    question: "Apa yang dimaksud dengan 'kerajinan'?",
    options: [
      "Barang hasil buatan tangan",
      "Makanan khas daerah",
      "Tempat wisata terkenal",
      "Pakaian adat tradisional",
    ],
    answer: 0,
  },
  {
    question: "Apa arti kata 'apresiasi'?",
    options: [
      "Hukuman karena melanggar aturan",
      "Pujian atau penghargaan",
      "Perjalanan menuju wisata",
      "Tempat untuk berkumpul",
    ],
    answer: 1,
  },
];

const storyThree: StoryPack = {
  isReady: true,
  vocab: storyThreeVocab,
  quiz: storyThreeQuiz,

  scenes: {
    start: {
      title: "Petualangan di Kampung Pelangi",
      image: "/comics/story3/scene1.png",
      description:
        "Bu Rina mengajak anak-anak berkunjung ke Kampung Pelangi. Panorama di sana sangat indah. Mereka harus memilih destinasi pertama.",
      vocab: storyThreeVocab,
      choices: [
        {
          text: "a. Pergi ke Sungai",
          next: "river2",
        },
        {
          text: "b. Pergi ke Pasar Tradisional",
          next: "market2",
        },
      ],
    },

    /* ======================
       SUNGAI
    ====================== */

    river2: {
      title: "Sungai Kampung Pelangi",
      image: "/comics/story3/scene2a.png",
      description:
        "Di tepi sungai terlihat sampah plastik berserakan. Apa yang harus dilakukan?",
      vocab: storyThreeVocab,
      choices: [
        {
          text: "a. Memungut sampah plastik",
          next: "riverGood",
        },
        {
          text: "b. Membiarkan sampah dan pergi",
          next: "riverBad",
        },
      ],
    },

    riverGood: {
      title:
        "Sungai kembali bersih dan indah. Bu Rina memberi apresiasi kepada anak-anak.",
      image: "/comics/story3/ending-good1.png",
      summary:
        "Menjaga kebersihan lingkungan adalah tanggung jawab bersama. Tindakan kecil bisa memberi perubahan besar.",
      vocab: storyThreeVocab,
      choices: [],
    },

    riverBad: {
      title: "Sampah menumpuk dan merusak panorama sungai.",
      image: "/comics/story3/ending-bad1.png",
      summary:
        "Membiarkan sampah dapat merusak keindahan alam. Kita harus peduli pada lingkungan sekitar.",
      vocab: storyThreeVocab,
      choices: [],
    },

    /* ======================
       PASAR
    ====================== */

    market2: {
      title: "Pasar Tradisional",
      image: "/comics/story3/scene2b.png",
      description:
        "Anak-anak melihat banyak kerajinan unik dan antrean pembeli. Mereka ingin jajan.",
      vocab: storyThreeVocab,
      choices: [
        {
          text: "a. Izin dulu ke Bu Guru sebelum jajan",
          next: "marketGood",
        },
        {
          text: "b. Diam-diam jajan tanpa memberi tahu",
          next: "marketBad",
        },
      ],
    },

    marketGood: {
      title: "Bu Rina mengizinkan mereka membeli jajanan dengan tertib.",
      image: "/comics/story3/ending-good2.png",
      summary: "Meminta izin menunjukkan sikap sopan dan bertanggung jawab.",
      vocab: storyThreeVocab,
      choices: [],
    },

    marketBad: {
      title: "Anak-anak tersesat di keramaian pasar karena pergi tanpa izin.",
      image: "/comics/story3/ending-bad2.png",
      summary:
        "Pergi tanpa izin dapat membahayakan diri sendiri. Selalu beri tahu guru atau orang tua.",
      vocab: storyThreeVocab,
      choices: [],
    },
  },
};

/* =========================================
STORY 4
========================================= */

const storyFourVocab: VocabItem[] = [
  {
    word: "Adaptasi",
    meaning:
      "Proses penyesuaian diri terhadap lingkungan baru agar dapat bertahan hidup.",
  },
  {
    word: "Erosi",
    meaning:
      "Proses pengikisan tanah atau batuan oleh air, angin, atau tenaga alam lainnya.",
  },
  {
    word: "Generasi",
    meaning: "Sekelompok orang yang hidup pada masa yang sama.",
  },
  {
    word: "Mitigasi",
    meaning: "Upaya untuk mengurangi risiko dan dampak bencana.",
  },
];

const storyFourQuiz: QuizItem[] = [
  {
    question:
      "Saat hujan deras turun terus-menerus, air yang mengalir bisa membawa tanah dari bukit yang gundul turun ke bawah. Peristiwa terkikisnya tanah oleh air ini dinamakan...",
    options: ["Mitigasi", "Generasi", "Erosi", "Adaptasi"],
    answer: 2,
  },
  {
    question:
      "Sejak kabut tebal sering turun dan membuat cuaca lebih lembap, warga desa mulai mengubah cara bertani mereka dengan menanam sayuran yang tidak butuh banyak sinar matahari. Proses penyesuaian cara hidup warga agar bisa terus bertahan dengan kondisi alam yang baru ini disebut...",
    options: ["Erosi", "Adaptasi", "Mitigasi", "Generasi"],
    answer: 1,
  },
  {
    question:
      "Di tengah kekhawatiran para tetua desa, sekelompok anak muda dan pelajar justru maju untuk memimpin gotong royong membersihkan jalur air. Kelompok anak muda yang lahir, tumbuh besar, dan memiliki kepedulian yang sama di era kabut ini disebut sebagai sebuah...",
    options: ["Generasi", "Erosi", "Adaptasi", "Mitigasi"],
    answer: 0,
  },
  {
    question:
      "Untuk berjaga-jaga dari ancaman tanah longsor saat hujan deras, warga desa kabut secara mandiri membangun dinding penahan tanah dari bambu dan membuat jalur evakuasi. Berbagai persiapan dan tindakan untuk mengurangi dampak bahaya dari bencana ini dinamakan...",
    options: ["Mitigasi", "Generasi", "Erosi", "Adaptasi"],
    answer: 0,
  },
  {
    question:
      "Mengapa mitigasi penting dilakukan sebelum bencana terjadi?",
    options: [
      "Agar warga lebih siap dan aman menghadapi bencana",
      "Agar hujan semakin deras",
      "Agar tanah semakin terkikis",
      "Agar warga tidak perlu bekerja sama",
    ],
    answer: 0,
  },
];

const storyFour: StoryPack = {
  isReady: true,
  vocab: storyFourVocab,
  quiz: storyFourQuiz,

  scenes: {
    start: {
      title: "Desa Lereng Hijau",
      image: "/comics/story4/scene1.png",
      description:
        "Jati tiba di desa pegunungan yang sedang belajar menghadapi perubahan alam.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene2" }],
    },

    scene2: {
      title: "Pelajaran Adaptasi",
      image: "/comics/story4/scene2.png",
      description:
        "Pak Kades menjelaskan pentingnya adaptasi menghadapi musim hujan.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene3" }],
    },

    scene3: {
      title: "Bahaya Erosi",
      image: "/comics/story4/scene3.png",
      description:
        "Jati belajar bahwa erosi bisa merusak desa jika tidak dicegah.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene4" }],
    },

    scene4: {
      title: "Mulai Petualangan",
      image: "/comics/story4/scene4.png",
      description: "Hari ini Jati memilih tempat belajar mitigasi.",
      vocab: storyFourVocab,
      choices: [
        {
          text: "Ayo masuk ke Balai Desa dan bermain tebak gambar bersama Jati dan teman-teman!",
          next: "scene5A",
        },
        {
          text: "Ayo ikut Pak Kades dan para petani ke kebun bibit!",
          next: "scene5B",
        },
      ],
    },

    /* ===== JALUR A ===== */

    scene5A: {
      title: "Balai Desa",
      image: "/comics/story4/scene5A.png",
      description: "Anak-anak belajar mitigasi melalui permainan.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene6A" }],
    },

    scene6A: {
      title: "Belajar Bersama",
      image: "/comics/story4/scene6A.png",
      description: "Mereka bermain tebak gambar bencana.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene7A" }],
    },

    scene7A: {
      title: "Simulasi Dimulai",
      image: "/comics/story4/scene7A.png",
      description: "Pak Guru memberi aba-aba latihan.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene8A" }],
    },

    scene8A: {
      title: "Awan Gelap Datang",
      image: "/comics/story4/scene8A.png",
      description: "Cuaca berubah cepat.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene9A" }],
    },

    scene9A: {
      title: "Hujan Deras",
      image: "/comics/story4/scene9A.png",
      description: "Air mulai naik di sekitar balai desa.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene10A" }],
    },

    scene10A: {
      title: "Apa Keputusanmu?",
      image: "/comics/story4/scene10A.png",
      description: "Anak-anak menunggu arahan.",
      vocab: storyFourVocab,
      choices: [
        {
          text: "AA. Tetap di dalam dan amankan buku",
          next: "bad1",
        },
        {
          text: "AB. Evakuasi ke bukit batu",
          next: "scene12",
        },
      ],
    },

    /* ===== JALUR B ===== */

    scene5B: {
      title: "Kebun Bibit",
      image: "/comics/story4/scene5B.png",
      description: "Pak Tani mengajari menjaga tanah.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene6B" }],
    },

    scene6B: {
      title: "Belajar Menanam",
      image: "/comics/story4/scene6B.png",
      description: "Bibit ditanam rapi.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene7B" }],
    },

    scene7B: {
      title: "Tanah Mulai Licin",
      image: "/comics/story4/scene7B.png",
      description: "Hujan deras turun.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene8B" }],
    },

    scene8B: {
      title: "Saluran Air Meluap",
      image: "/comics/story4/scene8B.png",
      description: "Lumpur mulai mengalir.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene9B" }],
    },

    scene9B: {
      title: "Situasi Gawat",
      image: "/comics/story4/scene9B.png",
      description: "Pak Tani meminta bantuan.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene10B" }],
    },

    scene10B: {
      title: "Apa Keputusanmu?",
      image: "/comics/story4/scene10B.png",
      description: "Harus cepat memilih tindakan.",
      vocab: storyFourVocab,
      choices: [
        {
          text: "a. Menumpuk karung pasir",
          next: "bad2",
        },
        {
          text: "b. Mundur ke pemukiman",
          next: "scene12",
        },
      ],
    },

    /* BAD END */

    bad1: {
      title: "Anak-anak terlambat evakuasi.",
      image: "/comics/story4/bad1.png",
      summary: "Mitigasi berarti bertindak cepat demi keselamatan.",
      vocab: storyFourVocab,
      choices: [],
    },

    bad2: {
      title: "Karung pasir tak cukup menahan longsor.",
      image: "/comics/story4/bad2.png",
      summary: "Keselamatan manusia lebih penting.",
      vocab: storyFourVocab,
      choices: [],
    },

    bad3: {
      title: "Evakuasi kacau dan warga tertinggal.",
      image: "/comics/story4/bad3.png",
      summary: "Mitigasi butuh kerja sama.",
      vocab: storyFourVocab,
      choices: [],
    },

    /* LANJUT */

    scene12: {
      title: "Semua Berkumpul",
      image: "/comics/story4/scene12.png",
      description: "Warga menunggu arahan.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene13" }],
    },

    scene13: {
      title: "Menyusun Strategi",
      image: "/comics/story4/scene13.png",
      description: "Pak Kades membagi tugas.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene14" }],
    },

    scene14: {
      title: "Semangat Warga",
      image: "/comics/story4/scene14.png",
      description: "Semua siap bekerja sama.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene15" }],
    },

    scene15: {
      title: "Mitigasi Bersama",
      image: "/comics/story4/scene15.png",
      description: "Kerja sama dimulai.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene16" }],
    },

    scene16: {
      title: "Saatnya Evakuasi",
      image: "/comics/story4/scene16.png",
      description: "Semua bersiap bergerak.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene17" }],
    },

    scene17: {
      title: "Pilih Strategi",
      image: "/comics/story4/scene17.png",
      description: "Bagaimana evakuasi dilakukan?",
      vocab: storyFourVocab,
      choices: [
        {
          text: "a. Evakuasi cepat anak-anak duluan",
          next: "bad3",
        },
        {
          text: "b. Evakuasi kompak bersama",
          next: "scene18",
        },
      ],
    },

    scene18: {
      title: "Barisan Rapi",
      image: "/comics/story4/scene18.png",
      description: "Semua bergerak aman.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene19" }],
    },

    scene19: {
      title: "Selamat Sampai",
      image: "/comics/story4/scene19.png",
      description: "Warga lega.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene20" }],
    },

    scene20: {
      title: "Evaluasi Bersama",
      image: "/comics/story4/scene20.png",
      description: "Pak Kades memuji kerja sama.",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene21" }],
    },

    scene21: {
      title: "Masa Depan Desa",
      image: "/comics/story4/scene21.png",
      description: "Apa langkah selanjutnya?",
      vocab: storyFourVocab,
      choices: [{ text: "Lanjut", next: "scene22" }],
    },

    scene22: {
      title: "Pilihan Akhir",
      image: "/comics/story4/scene22.png",
      description: "Bagaimana Jati membantu?",
      vocab: storyFourVocab,
      choices: [
        {
          text: "Menyebarkan Kampanye Hijau ke Luar Desa",
          next: "good1",
        },
        {
          text: "Membantu Gerakan Menanam Lokal",
          next: "good2",
        },
      ],
    },

    good1: {
      title: "Desa menjadi inspirasi mitigasi bagi wilayah lain.",
      image: "/comics/story4/good1.png",
      summary: "Edukasi lingkungan menjaga generasi masa depan.",
      vocab: storyFourVocab,
      choices: [],
    },

    good2: {
      title: "Desa kembali hijau dan kuat menghadapi hujan.",
      image: "/comics/story4/good2.png",
      summary: "Menanam pohon adalah mitigasi nyata.",
      vocab: storyFourVocab,
      choices: [],
    },
  },
};

/* =========================================
STORY 5
========================================= */

const storyFiveVocab: VocabItem[] = [
  {
    word: "Sinisme",
    meaning: "Sikap mengejek atau memandang sesuatu secara negatif.",
  },
  {
    word: "Bijaksana",
    meaning: "Pandai dan baik dalam mengambil keputusan.",
  },
  {
    word: "Relawan Pendidikan",
    meaning:
      "Orang yang membantu bidang pendidikan secara sukarela.",
  },
  {
    word: "Tertunggak",
    meaning:
      "Belum terselesaikan atau belum dibayar.",
  },
  {
    word: "Potensi",
    meaning:
      "Kemampuan yang dapat berkembang.",
  },
  {
    word: "Mengandalkan",
    meaning:
      "Percaya dan bergantung pada seseorang.",
  },
  {
    word: "Ketangguhan",
    meaning:
      "Kemampuan untuk tetap kuat menghadapi kesulitan.",
  },
  {
    word: "Guncangan",
    meaning:
      "Cobaan atau perubahan besar dalam hidup.",
  },
  {
    word: "Magang",
    meaning:
      "Belajar sambil bekerja untuk mendapatkan pengalaman.",
  },
  {
    word: "Kesetaraan Paket C",
    meaning:
      "Pendidikan setara SMA melalui jalur nonformal.",
  },
  {
    word: "Sesak Napas",
    meaning:
      "Sulit bernapas.",
  },
  {
    word: "Terkuras",
    meaning:
      "Habis karena terlalu digunakan.",
  },
  {
    word: "Epilog",
    meaning:
      "Bagian penutup cerita.",
  },
  {
    word: "Percabangan Cerita",
    meaning:
      "Cerita dengan banyak pilihan jalan dan akhir.",
  },
  {
    word: "Harga Diri",
    meaning:
      "Perasaan menghargai diri sendiri.",
  },
  {
    word: "Kewajiban",
    meaning:
      "Sesuatu yang harus dilakukan.",
  },
  {
    word: "Menagih",
    meaning:
      "Meminta pembayaran yang belum dibayar.",
  },
  {
    word: "Tergesa-gesa",
    meaning:
      "Dilakukan dengan terburu-buru.",
  },
  {
    word: "Kemungkinan",
    meaning:
      "Peluang sesuatu dapat terjadi.",
  },
  {
    word: "Mencerminkan",
    meaning:
      "Menunjukkan atau menggambarkan sesuatu.",
  },
];

const storyFiveQuiz: QuizItem[] = [
  {
    question: "Apa arti kata sinisme?",
    options: [
      "Sikap penuh semangat",
      "Sikap mengejek dan memandang negatif",
      "Sikap mudah percaya",
      "Sikap terlalu malu",
    ],
    answer: 1,
  },
  {
    question: "Apa arti bijaksana?",
    options: [
      "Ceroboh",
      "Pandai mengambil keputusan",
      "Keras kepala",
      "Takut masalah",
    ],
    answer: 1,
  },
  {
    question: "Apa arti relawan pendidikan?",
    options: [
      "Pekerja mencari keuntungan",
      "Membantu pendidikan secara sukarela",
      "Membuka sekolah",
      "Penjual buku",
    ],
    answer: 1,
  },
  {
    question: "Apa arti tertunggak?",
    options: [
      "Dibayar awal",
      "Belum terselesaikan",
      "Hilang",
      "Diperbaiki",
    ],
    answer: 1,
  },
  {
    question: "Apa arti potensi?",
    options: [
      "Kemampuan berkembang",
      "Kesalahan besar",
      "Kelemahan",
      "Beban hidup",
    ],
    answer: 0,
  },
];

const storyFive: StoryPack = {
  isReady: true,
  vocab: storyFiveVocab,
  quiz: storyFiveQuiz,

  scenes: {
    start: {
      title: "Langkah Raka Menuju Mimpi",
      image: "/comics/story5/scene1.png",
      description:
        "Malam itu Raka berdiri di persimpangan hidup. Di satu sisi ada pekerjaan untuk membantu keluarga, di sisi lain ada sekolah malam yang menyimpan mimpinya. Langkah mana yang akan ia pilih?",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "A. Menerima pekerjaan tambahan",
          next: "scene2A",
        },
        {
          text: "B. Tetap mempertahankan sekolah malam",
          next: "scene2B",
        },
      ],
    },

    /* ======================
       BABAK 2A
    ====================== */

    scene2A: {
      title: "Ejekan Bima",
      image: "/comics/story5/scene2A.png",
      description:
        "Bima merendahkan Raka di tempat kerja.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "A. Tetap fokus bekerja",
          next: "scene3A",
        },
        {
          text: "B. Marah dan berhenti bekerja",
          next: "scene3B",
        },
      ],
    },

    /* ======================
       BABAK 3A
    ====================== */

    scene3A: {
      title: "Tubuh Mulai Lelah",
      image: "/comics/story5/scene3A.png",
      description:
        "Raka kelelahan setelah bekerja terus-menerus.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "a. Tetap bekerja tanpa peduli kesehatan",
          next: "endingKetikaTubuhBerbicara",
        },
        {
          text: "b. Mencari cara bekerja sambil sekolah",
          next: "scene4",
        },
      ],
    },

    endingKetikaTubuhBerbicara: {
      title: "Ketika Tubuh Berbicara",
      image: "/comics/story5/ending-ketika-tubuh-berbicara.png",
      summary:
        "Tubuh memiliki batas. Mengabaikan kesehatan bisa menghentikan mimpi.",
      vocab: storyFiveVocab,
      choices: [],
    },

    /* ======================
       BABAK 3B
    ====================== */

    scene3B: {
      title: "Nasihat Pak Salim",
      image: "/comics/story5/scene3B.png",
      description:
        "Pak Salim menawarkan jalan baru.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "a. Mendengarkan nasihat",
          next: "scene4",
        },
        {
          text: "b. Menolak bantuan",
          next: "endingJalanPanjang",
        },
      ],
    },

    endingJalanPanjang: {
      title: "Jalan Panjang",
      image: "/comics/story5/ending-jalan-panjang.png",
      summary:
        "Kadang keras kepala membuat perjalanan terasa lebih berat.",
      vocab: storyFiveVocab,
      choices: [],
    },

    /* ======================
       BABAK 4
    ====================== */

    scene4: {
      title: "Langkah Baru",
      image: "/comics/story5/scene4.png",
      description:
        "Raka kembali sekolah sambil bekerja.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "a. Terus berjuang sampai ujian",
          next: "scene5",
        },
        {
          text: "b. Masa sulit kembali datang",
          next: "endingKembaliKeMasaSulit",
        },
      ],
    },

    endingKembaliKeMasaSulit: {
      title: "Ketika Kembali ke Masa Sulit",
      image: "/comics/story5/ending-kembali-ke-masa-sulit.png",
      summary:
        "Setiap pilihan punya konsekuensi. Tidak semua perjuangan berhasil pada percobaan pertama.",
      vocab: storyFiveVocab,
      choices: [],
    },

    /* ======================
       BABAK 2B
    ====================== */

    scene2B: {
      title: "Harapan Baru",
      image: "/comics/story5/scene2B.png",
      description:
        "Ada orang yang percaya pada masa depan Raka.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "A. Menerima beasiswa",
          next: "scene3C",
        },
        {
          text: "B. Menolak beasiswa",
          next: "scene3D",
        },
      ],
    },

    scene3C: {
      title: "Motivasi Baru",
      image: "/comics/story5/scene3C.png",
      description:
        "Raka semakin semangat belajar.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene5",
        },
      ],
    },

    scene3D: {
      title: "Amplop Alya",
      image: "/comics/story5/scene3D.png",
      description:
        "Alya memberi bantuan diam-diam.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "a. Menerima bantuan",
          next: "scene5",
        },
        {
          text: "b. Mengembalikan amplop",
          next: "endingJalanPanjang",
        },
      ],
    },

    /* ======================
       BABAK 5
    ====================== */

    scene5: {
      title: "Hari Ujian",
      image: "/comics/story5/scene5.png",
      description:
        "Raka harus memilih antara ujian atau menemani ayahnya.",
      vocab: storyFiveVocab,
      choices: [
        {
          text: "A. Pergi ujian",
          next: "endingJejakYangTertinggal",
        },
        {
          text: "B. Menemani ayah",
          next: "endingKetikaCintaMemilih",
        },
      ],
    },

    endingJejakYangTertinggal: {
      title: "Jejak yang Tertinggal",
      image: "/comics/story5/ending-jejak-yang-tertinggal.png",
      summary:
        "Perjuangan panjang meninggalkan jejak kesuksesan.",
      vocab: storyFiveVocab,
      choices: [],
    },

    endingKetikaCintaMemilih: {
      title: "Ketika Cinta Memilih",
      image: "/comics/story5/ending-ketika-cinta-memilih.png",
      summary:
        "Kadang cinta kepada keluarga lebih penting daripada kemenangan pribadi.",
      vocab: storyFiveVocab,
      choices: [],
    },
  },
};



/* =========================================
STORY 6
========================================= */

const storySixVocab: VocabItem[] = [
  {
    word: "Kehebatan",
    meaning: "Keunggulan atau kemampuan yang luar biasa.",
  },
  {
    word: "Membandingkan",
    meaning: "Melihat atau menilai sesuatu dengan membandingkannya dengan yang lain.",
  },
  {
    word: "Festival",
    meaning: "Kegiatan atau acara khusus yang diadakan untuk merayakan sesuatu.",
  },
  {
    word: "Percaya diri",
    meaning: "Keyakinan terhadap kemampuan dan nilai diri sendiri.",
  },
  {
    word: "Kelebihan",
    meaning: "Hal yang menjadi keunggulan atau kekuatan seseorang.",
  },
];

const storySixQuiz: QuizItem[] = [
  {
    question: "Apa arti kata 'kehebatan'?",
    options: [
      "Keunggulan atau kemampuan yang luar biasa",
      "Rasa takut kepada orang lain",
      "Kebiasaan menghindari teman",
      "Perasaan sedih karena gagal",
    ],
    answer: 0,
  },
  {
    question: "Apa arti kata 'membandingkan'?",
    options: [
      "Menyembunyikan sesuatu dari orang lain",
      "Melihat atau menilai sesuatu dengan membandingkannya dengan yang lain",
      "Membantu seseorang tanpa diminta",
      "Menghindari suatu kegiatan",
    ],
    answer: 1,
  },
  {
    question: "Apa yang dimaksud dengan 'festival'?",
    options: [
      "Tempat tinggal para hewan",
      "Kegiatan atau acara khusus untuk merayakan sesuatu",
      "Kegiatan belajar seorang diri",
      "Perlombaan yang hanya dilakukan di sekolah",
    ],
    answer: 1,
  },
  {
    question: "Apa arti 'percaya diri'?",
    options: [
      "Takut mencoba sesuatu yang baru",
      "Selalu merasa lebih hebat dari orang lain",
      "Keyakinan terhadap kemampuan dan nilai diri sendiri",
      "Tidak mau menerima bantuan teman",
    ],
    answer: 2,
  },
  {
    question: "Apa yang dimaksud dengan 'kelebihan'?",
    options: [
      "Hal yang menjadi keunggulan atau kekuatan seseorang",
      "Kesalahan yang dilakukan seseorang",
      "Hal yang membuat seseorang merasa sedih",
      "Kekurangan yang harus disembunyikan",
    ],
    answer: 0,
  },
];

const storySix: StoryPack = {
  isReady: true,
  vocab: storySixVocab,
  quiz: storySixQuiz,

  scenes: {
    /* =========================================
       PEMBUKA
       ========================================= */

    start: {
      title: "Luna dan Hutan yang Penuh Warna",
      image: "/comics/story6/scene1.png",
      description:
        "Di sebuah hutan yang sangat indah, hiduplah berbagai macam hewan. Ada yang memiliki bulu indah, ada yang pandai berlari, ada yang bisa memanjat pohon, dan ada juga yang sangat pandai membantu teman. Di antara mereka, tinggal seekor kelinci kecil bernama Luna. Luna adalah kelinci yang baik dan suka membantu.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene2",
        },
      ],
    },

    /* =========================================
       BABAK 1
       ========================================= */

    scene2: {
      title: "Kabar dari Bubu",
      image: "/comics/story6/scene2.png",
      description:
        "Suatu pagi, Bubu si burung hantu mengumumkan sebuah kegiatan yang akan diadakan di hutan.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene3",
        },
      ],
    },

    /* =========================================
       BABAK 2
       ========================================= */

    scene3: {
      title: "Festival Kehebatan Hutan",
      image: "/comics/story6/scene3.png",
      description:
        "Keesokan harinya, Festival Kehebatan Hutan dimulai. Semua hewan bersiap menunjukkan kemampuan terbaik mereka. Luna mulai memperhatikan kehebatan teman-temannya.",
      vocab: storySixVocab,
      choices: [
        {
          text: "A. Luna terus membandingkan dirinya dengan teman-temannya dan tidak mengikuti festival",
          next: "scene3A",
        },
        {
          text: "B. Luna mencoba mencari satu hal yang ia sukai dari dirinya sendiri",
          next: "scene3B",
        },
      ],
    },

    /* =========================================
       BABAK 3A
       JALUR A
       ========================================= */

    scene3A: {
      title: "Luna Mulai Meragukan Dirinya",
      image: "/comics/story6/scene3A.png",
      description:
        "Luna terus melihat kemampuan teman-temannya. Ia merasa dirinya tidak sehebat mereka dan mulai meragukan kemampuan dirinya sendiri.",
      vocab: storySixVocab,
      choices: [
        {
          text: "A1. Luna tetap merasa dirinya tidak cukup baik",
          next: "scene4A",
        },
        {
          text: "A2. Luna mencoba mengingat hal-hal baik yang pernah ia lakukan",
          next: "scene4B",
        },
      ],
    },

    /* =========================================
       BABAK 3B
       JALUR B
       ========================================= */

    scene3B: {
      title: "Menemukan Kebaikan dalam Diri",
      image: "/comics/story6/scene3B.png",
      description:
        "Luna mencoba berhenti membandingkan dirinya dengan teman-temannya. Ia mulai mencari satu hal yang ia sukai dari dirinya sendiri.",
      vocab: storySixVocab,
      choices: [
        {
          text: "B1. Luna segera membantu Mimi",
          next: "scene4C",
        },
        {
          text: "B2. Luna merasa dirinya tidak cukup hebat untuk membantu",
          next: "scene4D",
        },
      ],
    },

    /* =========================================
       BABAK 4A
       ========================================= */

    scene4A: {
      title: "Luna Belajar Menghargai Diri",
      image: "/comics/story6/scene4A.png",
      description:
        "Luna masih merasa dirinya tidak cukup baik. Namun, ia mulai menyadari bahwa setiap hewan memiliki kemampuan dan kelebihan yang berbeda.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene5",
        },
      ],
    },

    /* =========================================
       BABAK 4B
       ========================================= */

    scene4B: {
      title: "Mengingat Kebaikan",
      image: "/comics/story6/scene4B.png",
      description:
        "Luna mengingat berbagai hal baik yang pernah ia lakukan untuk teman-temannya. Ia mulai menyadari bahwa membantu dan peduli kepada orang lain juga merupakan sebuah kelebihan.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene5",
        },
      ],
    },

    /* =========================================
       BABAK 4C
       ========================================= */

    scene4C: {
      title: "Luna Membantu Mimi",
      image: "/comics/story6/scene4C.png",
      description:
        "Luna memilih untuk membantu Mimi. Ia menyadari bahwa kemampuannya untuk peduli dan membantu teman juga merupakan sesuatu yang berharga.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene5",
        },
      ],
    },

    /* =========================================
       BABAK 4D
       ========================================= */

    scene4D: {
      title: "Luna Masih Ragu",
      image: "/comics/story6/scene4D.png",
      description:
        "Luna merasa dirinya tidak cukup hebat untuk membantu. Namun, perlahan ia belajar bahwa seseorang tidak harus menjadi yang paling hebat untuk dapat memberikan kebaikan kepada orang lain.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "scene5",
        },
      ],
    },

    /* =========================================
       BABAK 5
       ========================================= */

    scene5: {
      title: "Setiap Diri Memiliki Keistimewaan",
      image: "/comics/story6/scene5.png",
      description:
        "Luna akhirnya memahami bahwa setiap hewan memiliki kelebihan masing-masing. Ia tidak perlu menjadi seperti teman-temannya untuk menjadi berharga.",
      vocab: storySixVocab,
      choices: [
        {
          text: "Lanjut",
          next: "epilog",
        },
      ],
    },

    /* =========================================
       EPILOG
       ========================================= */

    epilog: {
      title: "Luna Menemukan Kehebatannya",
      image: "/comics/story6/epilog.png",
      summary:
        "Luna belajar bahwa setiap orang memiliki kelebihan dan keistimewaan masing-masing. Kita tidak perlu terus membandingkan diri dengan orang lain. Dengan menghargai diri sendiri dan menggunakan kemampuan yang dimiliki untuk membantu sesama, kita dapat menemukan arti kehebatan yang sebenarnya.",
      vocab: storySixVocab,
      choices: [],
    },
  },
};


/* =========================================
EXPORT
========================================= */

export const storiesData: Record<number, StoryPack> = {
  1: storyOne,
  2: storyTwo,
  3: storyThree,
  4: storyFour,
  5: storyFive,
  6: storySix,
};
