// --- Fungsi Utilitas untuk Mengacak Opsi ---
function shuffleOptions(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const quizPackagesData = [
    // --- Kategori: Sejarah & Perumusan ---
    {
        id: "paket1",
        title: "Sejarah Lahirnya Pancasila",
        description: "Kumpulan soal mengenai BPUPKI, PPKI, dan pidato Soekarno.",
        soal: [
            {
                question: "Sidang pertama BPUPKI dilaksanakan pada tanggal...",
                options: shuffleOptions(["29 Mei - 1 Juni 1945", "10 - 17 Juli 1945", "17 Agustus 1945", "18 Agustus 1945"]),
                answer: "29 Mei - 1 Juni 1945"
            },
            {
                question: "Istilah 'Pancasila' pertama kali diperkenalkan oleh...",
                options: shuffleOptions(["Soekarno", "Mohammad Yamin", "Soepomo", "Ki Hadjar Dewantara"]),
                answer: "Soekarno"
            },
            {
                question: "BPUPKI adalah singkatan dari...",
                options: shuffleOptions(["Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia", "Badan Persiapan Untuk Pahlawan Kemerdekaan Indonesia", "Badan Panitia Urusan Persiapan Kemerdekaan Indonesia", "Barisan Penolong Usaha-usaha Pahlawan Kemerdekaan"]),
                answer: "Badan Penyelidik Usaha-usaha Persiapan Kemerdekaan Indonesia"
            },
            {
                question: "Siapa ketua BPUPKI?",
                options: shuffleOptions(["Dr. K.R.T. Radjiman Wedyodiningrat", "Ir. Soekarno", "Drs. Mohammad Hatta", "Soepomo"]),
                answer: "Dr. K.R.T. Radjiman Wedyodiningrat"
            },
            {
                question: "Pada tanggal berapa Ir. Soekarno menyampaikan pidato tentang dasar negara?",
                options: shuffleOptions(["1 Juni 1945", "29 Mei 1945", "31 Mei 1945", "17 Agustus 1945"]),
                answer: "1 Juni 1945"
            }
        ]
    },
    {
        id: "paket2",
        title: "Tokoh Perumus Pancasila",
        description: "Mengenal tokoh-tokoh kunci di balik perumusan dasar negara.",
        soal: [
            {
                question: "Siapa tokoh yang mengusulkan 5 dasar negara pada tanggal 29 Mei 1945?",
                options: shuffleOptions(["Mohammad Yamin", "Soepomo", "Soekarno", "Mohammad Hatta"]),
                answer: "Mohammad Yamin"
            },
            {
                question: "Tokoh yang menyampaikan usulan dasar negara pada 31 Mei 1945 adalah...",
                options: shuffleOptions(["Soepomo", "Mohammad Yamin", "Soekarno", "A.A. Maramis"]),
                answer: "Soepomo"
            },
            {
                question: "Berikut ini adalah tiga tokoh utama yang menyampaikan gagasan dasar negara di sidang BPUPKI, kecuali...",
                options: shuffleOptions(["Ki Hadjar Dewantara", "Mohammad Yamin", "Soepomo", "Soekarno"]),
                answer: "Ki Hadjar Dewantara"
            },
            {
                question: "Siapa yang memberi nama 'Pancasila' pada rumusan dasar negara?",
                options: shuffleOptions(["Soekarno", "Mohammad Yamin", "Soepomo", "Radjiman Wedyodiningrat"]),
                answer: "Soekarno"
            },
            {
                question: "Siapa wakil ketua BPUPKI yang berasal dari Jepang?",
                options: shuffleOptions(["Ichibangase Yosio", "Saichiro Miyoshi", "Emperor Hirohito", "Kenji Tanaka"]),
                answer: "Ichibangase Yosio"
            }
        ]
    },
    {
        id: "paket3",
        title: "Panitia Sembilan & Piagam Jakarta",
        description: "Soal mengenai kelompok kecil perumus dan Piagam Jakarta.",
        soal: [
            {
                question: "Panitia Sembilan dibentuk oleh BPUPKI untuk...",
                options: shuffleOptions(["Menyusun rumusan dasar negara", "Mempersiapkan kemerdekaan", "Melawan penjajah", "Membentuk kabinet"]),
                answer: "Menyusun rumusan dasar negara"
            },
            {
                question: "Siapa ketua Panitia Sembilan?",
                options: shuffleOptions(["Ir. Soekarno", "Drs. Mohammad Hatta", "Mohammad Yamin", "Ahmad Soebardjo"]),
                answer: "Ir. Soekarno"
            },
            {
                question: "Dokumen yang dihasilkan oleh Panitia Sembilan dikenal sebagai...",
                options: shuffleOptions(["Piagam Jakarta (Jakarta Charter)", "Teks Proklamasi", "UUD 1945", "Dekrit Presiden"]),
                answer: "Piagam Jakarta (Jakarta Charter)"
            },
            {
                question: "Kapan Piagam Jakarta dirumuskan?",
                options: shuffleOptions(["22 Juni 1945", "1 Juni 1945", "17 Agustus 1945", "18 Agustus 1945"]),
                answer: "22 Juni 1945"
            },
            {
                question: "Sila pertama dalam Piagam Jakarta kemudian diubah untuk UUD 1945. Siapa tokoh yang mengusulkan perubahan ini?",
                options: shuffleOptions(["Mohammad Hatta", "Soekarno", "Wahid Hasyim", "Mohammad Yamin"]),
                answer: "Mohammad Hatta"
            }
        ]
    },
    {
        id: "paket4",
        title: "PPKI dan Pengesahan",
        description: "Seputar pengesahan Pancasila sebagai dasar negara.",
        soal: [
            {
                question: "PPKI adalah singkatan dari...",
                options: shuffleOptions(["Panitia Persiapan Kemerdekaan Indonesia", "Pasukan Pembela Kemerdekaan Indonesia", "Panitia Perjuangan Kemerdekaan Indonesia", "Persatuan Pemuda Kemerdekaan Indonesia"]),
                answer: "Panitia Persiapan Kemerdekaan Indonesia"
            },
            {
                question: "Siapa ketua PPKI?",
                options: shuffleOptions(["Ir. Soekarno", "Dr. Radjiman Wedyodiningrat", "Drs. Mohammad Hatta", "Sutan Sjahrir"]),
                answer: "Ir. Soekarno"
            },
            {
                question: "Kapan PPKI mengesahkan UUD 1945 yang memuat Pancasila di dalamnya?",
                options: shuffleOptions(["18 Agustus 1945", "17 Agustus 1945", "19 Agustus 1945", "22 Juni 1945"]),
                answer: "18 Agustus 1945"
            },
            {
                question: "Di mana Pancasila secara resmi tercantum?",
                options: shuffleOptions(["Pembukaan UUD 1945 alinea ke-4", "Batang Tubuh UUD 1945", "Teks Proklamasi", "Piagam Jakarta"]),
                answer: "Pembukaan UUD 1945 alinea ke-4"
            },
            {
                question: "Berapa jumlah anggota PPKI pada awalnya?",
                options: shuffleOptions(["21 orang", "62 orang", "9 orang", "27 orang"]),
                answer: "21 orang"
            }
        ]
    },
    {
        id: "paket5",
        title: "Lambang dan Sila",
        description: "Mencocokkan lambang negara dengan bunyi sila Pancasila.",
        soal: [
            {
                question: "Lambang 'Bintang' adalah untuk sila...",
                options: shuffleOptions(["Ketuhanan Yang Maha Esa", "Kemanusiaan yang Adil dan Beradab", "Persatuan Indonesia", "Keadilan Sosial bagi Seluruh Rakyat Indonesia"]),
                answer: "Ketuhanan Yang Maha Esa"
            },
            {
                question: "Bunyi sila ketiga Pancasila adalah...",
                options: shuffleOptions(["Persatuan Indonesia", "Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan...", "Kemanusiaan yang Adil dan Beradab", "Ketuhanan Yang Maha Esa"]),
                answer: "Persatuan Indonesia"
            },
            {
                question: "Lambang 'Padi dan Kapas' mencerminkan sila ke...",
                options: shuffleOptions(["5", "2", "3", "4"]),
                answer: "5"
            },
            {
                question: "Apa lambang sila 'Kemanusiaan yang Adil dan Beradab'?",
                options: shuffleOptions(["Rantai Emas", "Pohon Beringin", "Kepala Banteng", "Bintang"]),
                answer: "Rantai Emas"
            },
            {
                question: "Bunyi sila ke-4 dilambangkan dengan...",
                options: shuffleOptions(["Kepala Banteng", "Padi dan Kapas", "Rantai Emas", "Pohon Beringin"]),
                answer: "Kepala Banteng"
            }
        ]
    },
    {
        id: "paket6",
        title: "Makna Lambang Garuda",
        description: "Memahami arti dan makna dari bagian-bagian Garuda Pancasila.",
        soal: [
            {
                question: "Jumlah bulu pada leher Garuda melambangkan...",
                options: shuffleOptions(["Tahun kemerdekaan (45)", "Tanggal kemerdekaan (17)", "Bulan kemerdekaan (8)", "Jumlah sila (5)"]),
                answer: "Tahun kemerdekaan (45)"
            },
            {
                question: "Jumlah bulu pada masing-masing sayap Garuda adalah...",
                options: shuffleOptions(["17", "8", "45", "19"]),
                answer: "17"
            },
            {
                question: "Apa arti semboyan 'Bhinneka Tunggal Ika'?",
                options: shuffleOptions(["Berbeda-beda tetapi tetap satu jua", "Bersatu kita teguh, bercerai kita runtuh", "Keadilan untuk semua", "Kemerdekaan adalah hak segala bangsa"]),
                answer: "Berbeda-beda tetapi tetap satu jua"
            },
            {
                question: "Arah kepala Garuda Pancasila menoleh ke...",
                options: shuffleOptions(["Kanan", "Kiri", "Depan", "Atas"]),
                answer: "Kanan"
            },
            {
                question: "Garis hitam tebal di tengah perisai Garuda melambangkan...",
                options: shuffleOptions(["Garis khatulistiwa", "Pemisah antar sila", "Persatuan Indonesia", "Batasan negara"]),
                answer: "Garis khatulistiwa"
            }
        ]
    },
    {
        id: "paket7",
        title: "Sila ke-1: Ketuhanan",
        description: "Soal pemahaman dan implementasi sila pertama.",
        soal: [
            {
                question: "Menghormati teman yang sedang beribadah sesuai agamanya adalah pengamalan sila ke...",
                options: shuffleOptions(["Satu", "Dua", "Tiga", "Lima"]),
                answer: "Satu"
            },
            {
                question: "Berikut ini yang BUKAN merupakan pengamalan sila ke-1 adalah...",
                options: shuffleOptions(["Memaksakan agama kepada orang lain", "Membina kerukunan hidup antar umat beragama", "Percaya dan takwa terhadap Tuhan YME", "Tidak mengganggu ibadah orang lain"]),
                answer: "Memaksakan agama kepada orang lain"
            },
            {
                question: "Lambang sila pertama (Bintang) memiliki latar berwarna...",
                options: shuffleOptions(["Hitam", "Merah", "Putih", "Kuning Emas"]),
                answer: "Hitam"
            },
            {
                question: "Kebebasan memeluk agama dan beribadah dijamin dalam UUD 1945, yang merupakan penjabaran sila ke-...",
                options: shuffleOptions(["1", "2", "3", "5"]),
                answer: "1"
            },
            {
                question: "Sikap toleransi antar umat beragama sangat penting untuk menjaga...",
                options: shuffleOptions(["Kerukunan dan persatuan", "Kekuasaan individu", "Kekayaan pribadi", "Perbedaan pendapat"]),
                answer: "Kerukunan dan persatuan"
            }
        ]
    },
    {
        id: "paket8",
        title: "Sila ke-2: Kemanusiaan",
        description: "Soal pemahaman dan implementasi sila kedua.",
        soal: [
            {
                question: "Membantu korban bencana alam adalah cerminan sila ke-...",
                options: shuffleOptions(["Dua", "Satu", "Tiga", "Lima"]),
                answer: "Dua"
            },
            {
                question: "Lambang Rantai Emas pada sila kedua tersusun atas mata rantai bulat dan...",
                options: shuffleOptions(["Persegi", "Segitiga", "Oval", "Bintang"]),
                answer: "Persegi"
            },
            {
                question: "Mengakui persamaan derajat, hak, dan kewajiban adalah inti dari sila...",
                options: shuffleOptions(["Kemanusiaan yang Adil dan Beradab", "Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Keadilan Sosial bagi Seluruh Rakyat Indonesia"]),
                answer: "Kemanusiaan yang Adil dan Beradab"
            },
            {
                question: "Sikap 'tenggang rasa' atau 'tepa selira' sesuai dengan pengamalan sila ke-...",
                options: shuffleOptions(["2", "1", "4", "5"]),
                answer: "2"
            },
            {
                question: "Tidak membeda-bedakan teman berdasarkan suku, ras, atau agama adalah contoh sila...",
                options: shuffleOptions(["Kedua", "Ketiga", "Pertama", "Kelima"]),
                answer: "Kedua"
            }
        ]
    },
    {
        id: "paket9",
        title: "Sila ke-3: Persatuan",
        description: "Soal pemahaman dan implementasi sila ketiga.",
        soal: [
            {
                question: "Menggunakan produk dalam negeri adalah cerminan sikap yang sesuai dengan sila ke...",
                options: shuffleOptions(["Tiga", "Satu", "Dua", "Empat"]),
                answer: "Tiga"
            },
            {
                question: "Apa lambang dari sila 'Persatuan Indonesia'?",
                options: shuffleOptions(["Pohon Beringin", "Rantai Emas", "Kepala Banteng", "Bintang"]),
                answer: "Pohon Beringin"
            },
            {
                question: "Sikap rela berkorban demi kepentingan bangsa dan negara adalah pengamalan sila...",
                options: shuffleOptions(["Ketiga", "Kelima", "Kedua", "Pertama"]),
                answer: "Ketiga"
            },
            {
                question: "Berikut ini yang merupakan contoh pengamalan sila ke-3 adalah...",
                options: shuffleOptions(["Mengikuti upacara bendera dengan khidmat", "Melakukan musyawarah untuk mufakat", "Rajin beribadah", "Menolong teman yang kesusahan"]),
                answer: "Mengikuti upacara bendera dengan khidmat"
            },
            {
                question: "Semboyan 'Bhinneka Tunggal Ika' sangat erat kaitannya dengan sila ke-...",
                options: shuffleOptions(["3", "1", "2", "5"]),
                answer: "3"
            }
        ]
    },
    {
        id: "paket10",
        title: "Sila ke-4: Kerakyatan",
        description: "Soal pemahaman dan implementasi sila keempat.",
        soal: [
            {
                question: "Melakukan musyawarah untuk mufakat adalah cerminan sila ke...",
                options: shuffleOptions(["Empat", "Dua", "Tiga", "Lima"]),
                answer: "Empat"
            },
            {
                question: "Pemilihan umum (Pemilu) untuk memilih presiden adalah penerapan sila ke-...",
                options: shuffleOptions(["4", "5", "3", "1"]),
                answer: "4"
            },
            {
                question: "Apa lambang sila 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan'?",
                options: shuffleOptions(["Kepala Banteng", "Padi dan Kapas", "Pohon Beringin", "Rantai Emas"]),
                answer: "Kepala Banteng"
            },
            {
                question: "Dalam musyawarah, jika mufakat tidak tercapai, keputusan dapat diambil melalui...",
                options: shuffleOptions(["Pemungutan suara (voting)", "Keputusan ketua", "Menunda rapat", "Tidak ada keputusan"]),
                answer: "Pemungutan suara (voting)"
            },
            {
                question: "Sikap menghargai pendapat orang lain saat diskusi adalah pengamalan sila ke-...",
                options: shuffleOptions(["Empat", "Lima", "Dua", "Tiga"]),
                answer: "Empat"
            }
        ]
    },
    {
        id: "paket11",
        title: "Sila ke-5: Keadilan Sosial",
        description: "Soal pemahaman dan implementasi sila kelima.",
        soal: [
            {
                question: "Sikap 'adil terhadap sesama' merupakan pengamalan sila ke...",
                options: shuffleOptions(["Lima", "Satu", "Dua", "Tiga"]),
                answer: "Lima"
            },
            {
                question: "Lambang 'Padi dan Kapas' pada sila kelima melambangkan...",
                options: shuffleOptions(["Kesejahteraan dan kemakmuran", "Kekuatan dan kekuasaan", "Persatuan dan kesatuan", "Agama dan kepercayaan"]),
                answer: "Kesejahteraan dan kemakmuran"
            },
            {
                question: "Menghargai hasil karya orang lain adalah contoh pengamalan sila...",
                options: shuffleOptions(["Kelima", "Keempat", "Ketiga", "Kedua"]),
                answer: "Kelima"
            },
            {
                question: "Sikap hidup hemat dan tidak boros adalah cerminan sila ke-...",
                options: shuffleOptions(["5", "4", "3", "1"]),
                answer: "5"
            },
            {
                question: "Berikut ini yang BUKAN merupakan pengamalan sila kelima adalah...",
                options: shuffleOptions(["Bersikap sombong dan pamer kekayaan", "Menjaga keseimbangan antara hak dan kewajiban", "Suka bekerja keras", "Suka memberi pertolongan kepada orang lain"]),
                answer: "Bersikap sombong dan pamer kekayaan"
            }
        ]
    },
    {
        id: "paket12",
        title: "Pancasila sebagai Ideologi",
        description: "Memahami kedudukan Pancasila sebagai ideologi bangsa.",
        soal: [
            {
                question: "Apa arti Pancasila sebagai ideologi terbuka?",
                options: shuffleOptions(["Dapat menyesuaikan diri dengan perkembangan zaman", "Tidak dapat diubah sama sekali", "Hanya berlaku untuk suku tertentu", "Dapat diganti dengan ideologi lain"]),
                answer: "Dapat menyesuaikan diri dengan perkembangan zaman"
            },
            {
                question: "Pancasila berfungsi sebagai 'dasar negara', artinya...",
                options: shuffleOptions(["Menjadi landasan penyelenggaraan negara", "Menjadi hiasan lambang negara", "Hanya dihafalkan saat upacara", "Dapat diabaikan dalam pemerintahan"]),
                answer: "Menjadi landasan penyelenggaraan negara"
            },
            {
                question: "Pancasila sebagai 'pandangan hidup bangsa' (Weltanschauung) berarti...",
                options: shuffleOptions(["Petunjuk arah dalam kehidupan sehari-hari", "Hanya untuk para pemimpin", "Aturan yang kaku", "Pilihan pribadi"]),
                answer: "Petunjuk arah dalam kehidupan sehari-hari"
            },
            {
                question: "Nilai-nilai Pancasila digali dari...",
                options: shuffleOptions(["Budaya dan kepribadian bangsa Indonesia", "Ideologi bangsa lain", "Kitab suci satu agama", "Peraturan penjajah"]),
                answer: "Budaya dan kepribadian bangsa Indonesia"
            },
            {
                question: "Pancasila ditetapkan sebagai dasar negara pada tanggal...",
                options: shuffleOptions(["18 Agustus 1945", "17 Agustus 1945", "1 Juni 1945", "22 Juni 1945"]),
                answer: "18 Agustus 1945"
            }
        ]
    },
    {
        id: "paket13",
        title: "Butir-Butir Pengamalan (P4)",
        description: "Soal spesifik mengenai butir-butir P4 (Pedoman Penghayatan dan Pengamalan Pancasila).",
        soal: [
            {
                question: "'Mengembangkan sikap saling mencintai sesama manusia' adalah butir pengamalan sila ke-...",
                options: shuffleOptions(["2", "1", "3", "5"]),
                answer: "2"
            },
            {
                question: "'Tidak menggunakan hak milik untuk usaha-usaha yang bersifat pemerasan terhadap orang lain' adalah butir sila ke-...",
                options: shuffleOptions(["5", "4", "3", "2"]),
                answer: "5"
            },
            {
                question: "'Sanggup dan rela berkorban untuk kepentingan negara dan bangsa' adalah butir sila ke-...",
                options: shuffleOptions(["3", "2", "4", "5"]),
                answer: "3"
            },
            {
                question: "'Tidak boleh memaksakan kehendak kepada orang lain' saat musyawarah, adalah butir sila ke-...",
                options: shuffleOptions(["4", "5", "3", "1"]),
                answer: "4"
            },
            {
                question: "'Membina kerukunan hidup di antara sesama umat beragama' adalah butir sila ke-...",
                options: shuffleOptions(["1", "2", "3", "4"]),
                answer: "1"
            }
        ]
    },
    {
        id: "paket14",
        title: "Pancasila di Sekolah",
        description: "Contoh penerapan nilai-nilai Pancasila di lingkungan sekolah.",
        soal: [
            {
                question: "Melaksanakan piket kelas dengan tanggung jawab adalah cerminan sila...",
                options: shuffleOptions(["Kelima (Keadilan Sosial)", "Pertama (Ketuhanan)", "Kedua (Kemanusiaan)", "Ketiga (Persatuan)"]),
                answer: "Kelima (Keadilan Sosial)"
            },
            {
                question: "Memilih ketua kelas melalui musyawarah atau voting adalah penerapan sila ke-...",
                options: shuffleOptions(["4", "3", "2", "1"]),
                answer: "4"
            },
            {
                question: "Tidak mengejek teman yang berbeda suku atau agama adalah penerapan sila...",
                options: shuffleOptions(["Ketiga (Persatuan)", "Kedua (Kemanusiaan)", "Pertama (Ketuhanan)", "Semua jawaban benar"]),
                answer: "Semua jawaban benar"
            },
            {
                question: "Menghormati guru dan sesama teman adalah pengamalan sila ke-...",
                options: shuffleOptions(["2", "1", "4", "5"]),
                answer: "2"
            },
            {
                question: "Berdoa sebelum dan sesudah belajar adalah pengamalan sila ke-...",
                options: shuffleOptions(["1", "2", "3", "4"]),
                answer: "1"
            }
        ]
    },
    {
        id: "paket15",
        title: "Pancasila di Masyarakat",
        description: "Contoh penerapan nilai-nilai Pancasila di lingkungan masyarakat.",
        soal: [
            {
                question: "Ikut serta dalam kegiatan gotong royong membersihkan lingkungan adalah cerminan sila...",
                options: shuffleOptions(["Ketiga (Persatuan)", "Kelima (Keadilan Sosial)", "Kedua (Kemanusiaan)", "Semua jawaban benar"]),
                answer: "Semua jawaban benar"
            },
            {
                question: "Menghadiri rapat RT/RW untuk membahas masalah bersama adalah penerapan sila ke-...",
                options: shuffleOptions(["4", "5", "3", "1"]),
                answer: "4"
            },
            {
                question: "Menjenguk tetangga yang sakit tanpa memandang agamanya adalah cerminan sila...",
                options: shuffleOptions(["Kedua (Kemanusiaan)", "Pertama (Ketuhanan)", "Keempat (Kerakyatan)", "Kelima (Keadilan)"]),
                answer: "Kedua (Kemanusiaan)"
            },
            {
                question: "Menggunakan fasilitas umum dengan baik dan tidak merusaknya adalah pengamalan sila...",
                options: shuffleOptions(["Kelima", "Pertama", "Keempat", "Ketiga"]),
                answer: "Kelima"
            },
            {
                question: "Tidak mengganggu tetangga yang sedang melaksanakan ibadah adalah wujud sila...",
                options: shuffleOptions(["Pertama", "Kedua", "Ketiga", "Keempat"]),
                answer: "Pertama"
            }
        ]
    },
    {
        id: "paket16",
        title: "Hari Lahir Pancasila",
        description: "Soal-soal seputar peringatan Hari Lahir Pancasila.",
        soal: [
            {
                question: "Hari Lahir Pancasila diperingati setiap tanggal...",
                options: shuffleOptions(["1 Juni", "17 Agustus", "18 Agustus", "22 Juni"]),
                answer: "1 Juni"
            },
            {
                question: "Penetapan 1 Juni sebagai Hari Lahir Pancasila berdasarkan pidato...",
                options: shuffleOptions(["Soekarno", "Mohammad Hatta", "Soepomo", "Mohammad Yamin"]),
                answer: "Soekarno"
            },
            {
                question: "Peringatan Hari Lahir Pancasila 1 Juni secara resmi ditetapkan sebagai Hari Libur Nasional oleh Presiden...",
                options: shuffleOptions(["Joko Widodo", "Susilo Bambang Yudhoyono", "Megawati Soekarnoputri", "Soeharto"]),
                answer: "Joko Widodo"
            },
            {
                question: "Apa judul pidato Soekarno pada 1 Juni 1945?",
                options: shuffleOptions(["Lahirnya Pancasila", "Indonesia Menggugat", "Membangun Dunia Kembali", "Dasar Negara Indonesia"]),
                answer: "Lahirnya Pancasila"
            },
            {
                question: "Tujuan peringatan Hari Lahir Pancasila adalah untuk...",
                options: shuffleOptions(["Menguatkan kembali nilai-nilai Pancasila", "Sekadar libur nasional", "Mengenang penjajahan", "Mengganti UUD 1945"]),
                answer: "Menguatkan kembali nilai-nilai Pancasila"
            }
        ]
    },
    {
        id: "paket17",
        title: "Hari Kesaktian Pancasila",
        description: "Membedakan Hari Lahir Pancasila dengan Hari Kesaktian Pancasila.",
        soal: [
            {
                question: "Hari Kesaktian Pancasila diperingati setiap tanggal...",
                options: shuffleOptions(["1 Oktober", "1 Juni", "30 September", "17 Agustus"]),
                answer: "1 Oktober"
            },
            {
                question: "Peringatan Hari Kesaktian Pancasila erat kaitannya dengan peristiwa...",
                options: shuffleOptions(["G30S/PKI", "Proklamasi Kemerdekaan", "Sidang BPUPKI", "Dekrit Presiden"]),
                answer: "G30S/PKI"
            },
            {
                question: "Peristiwa G30S/PKI terjadi pada tahun...",
                options: shuffleOptions(["1965", "1945", "1998", "1955"]),
                answer: "1965"
            },
            {
                question: "Tujuan peringatan Hari Kesaktian Pancasila adalah...",
                options: shuffleOptions(["Meneguhkan tekad bahwa Pancasila tidak tergantikan", "Mengenang pidato Soekarno", "Mengesahkan UUD 1945", "Merayakan Pemilu"]),
                answer: "Meneguhkan tekad bahwa Pancasila tidak tergantikan"
            },
            {
                question: "Monumen untuk mengenang para pahlawan revolusi korban G30S/PKI adalah...",
                options: shuffleOptions(["Monumen Pancasila Sakti", "Monumen Nasional (Monas)", "Tugu Proklamasi", "Monumen Jogja Kembali"]),
                answer: "Monumen Pancasila Sakti"
            }
        ]
    },
    {
        id: "paket18",
        title: "Tantangan Ideologi",
        description: "Memahami tantangan terhadap Pancasila di era modern.",
        soal: [
            {
                question: "Penyebaran berita bohong (hoaks) yang memecah belah bangsa bertentangan dengan sila...",
                options: shuffleOptions(["Ketiga (Persatuan)", "Pertama (Ketuhanan)", "Kelima (Keadilan)", "Keempat (Kerakyatan)"]),
                answer: "Ketiga (Persatuan)"
            },
            {
                question: "Sikap intoleransi dan radikalisme adalah tantangan serius terutama bagi sila...",
                options: shuffleOptions(["Pertama dan Ketiga", "Kedua dan Kelima", "Keempat saja", "Kedua saja"]),
                answer: "Pertama dan Ketiga"
            },
            {
                question: "Gaya hidup individualistis dan materialistis (mementingkan kekayaan) bertentangan dengan nilai-nilai sila...",
                options: shuffleOptions(["Kelima dan Kedua", "Pertama dan Ketiga", "Keempat", "Pertama"]),
                answer: "Kelima dan Kedua"
            },
            {
                question: "Masuknya budaya asing yang tidak sesuai dengan kepribadian bangsa dapat menggerus nilai Pancasila. Sikap kita seharusnya...",
                options: shuffleOptions(["Menyaring budaya asing sesuai nilai Pancasila", "Menolak semua budaya asing", "Menerima semua budaya asing", "Mengabaikan budaya sendiri"]),
                answer: "Menyaring budaya asing sesuai nilai Pancasila"
            },
            {
                question: "Korupsi adalah perilaku yang sangat bertentangan dengan sila...",
                options: shuffleOptions(["Kelima (Keadilan Sosial)", "Pertama (Ketuhanan)", "Kedua (Kemanusiaan)", "Semua jawaban benar"]),
                answer: "Semua jawaban benar"
            }
        ]
    },
    {
        id: "paket19",
        title: "Soal Campuran (Mudah)",
        description: "Kumpulan soal mudah dari berbagai kategori untuk pemula.",
        soal: [
            {
                question: "Ada berapa jumlah sila dalam Pancasila?",
                options: shuffleOptions(["5", "3", "7", "10"]),
                answer: "5"
            },
            {
                question: "Apa bunyi sila pertama?",
                options: shuffleOptions(["Ketuhanan Yang Maha Esa", "Persatuan Indonesia", "Kemanusiaan yang Adil dan Beradab", "Keadilan Sosial bagi Seluruh Rakyat Indonesia"]),
                answer: "Ketuhanan Yang Maha Esa"
            },
            {
                question: "Lambang negara Indonesia adalah...",
                options: shuffleOptions(["Burung Garuda", "Banteng", "Pohon Beringin", "Komodo"]),
                answer: "Burung Garuda"
            },
            {
                question: "Apa warna latar belakang lambang Bintang?",
                options: shuffleOptions(["Hitam", "Merah", "Putih", "Kuning"]),
                answer: "Hitam"
            },
            {
                question: "Gotong royong adalah cerminan sila ke-...",
                options: shuffleOptions(["Tiga", "Satu", "Dua", "Empat"]),
                answer: "Tiga"
            }
        ]
    },
    {
        id: "paket20",
        title: "Soal Campuran (Menengah)",
        description: "Kumpulan soal acak dengan tingkat kesulitan menengah.",
        soal: [
            {
                question: "Pancasila disahkan sebagai dasar negara oleh...",
                options: shuffleOptions(["PPKI", "BPUPKI", "Panitia Sembilan", "Ir. Soekarno"]),
                answer: "PPKI"
            },
            {
                question: "Mata rantai persegi pada lambang sila kedua melambangkan...",
                options: shuffleOptions(["Laki-laki", "Perempuan", "Persatuan", "Keadilan"]),
                answer: "Laki-laki"
            },
            {
                question: "Akar gantung pada Pohon Beringin melambangkan...",
                options: shuffleOptions(["Keberagaman suku bangsa yang bersatu", "Kekuatan Tuhan", "Keadilan sosial", "Musyawarah"]),
                answer: "Keberagaman suku bangsa yang bersatu"
            },
            {
                question: "Banteng digunakan sebagai lambang sila keempat karena...",
                options: shuffleOptions(["Hewan sosial yang suka berkumpul (musyawarah)", "Hewan terkuat di Indonesia", "Melambangkan kekayaan alam", "Hewan yang suci"]),
                answer: "Hewan sosial yang suka berkumpul (musyawarah)"
            },
            {
                question: "Padi dan Kapas melambangkan kebutuhan dasar manusia, yaitu...",
                options: shuffleOptions(["Pangan dan Sandang", "Rumah dan Makanan", "Kekayaan dan Kekuasaan", "Agama dan Budaya"]),
                answer: "Pangan dan Sandang"
            }
        ]
    },
    // --- Paket Soal Baru ---
    {
        id: "paket21",
        title: "Pancasila sebagai Dasar Hukum",
        description: "Memahami kedudukan Pancasila dalam tata urutan perundang-undangan.",
        soal: [
            {
                question: "Pancasila disebut sebagai 'sumber dari segala sumber hukum' di Indonesia. Apa artinya?",
                options: shuffleOptions(["Semua hukum tidak boleh bertentangan dengan Pancasila", "Pancasila adalah satu-satunya hukum", "Hukum adat lebih tinggi dari Pancasila", "Pancasila dapat diubah oleh UU"]),
                answer: "Semua hukum tidak boleh bertentangan dengan Pancasila"
            },
            {
                question: "Dalam hierarki perundang-undangan, yang kedudukannya paling tinggi adalah...",
                options: shuffleOptions(["UUD 1945", "Undang-Undang (UU)", "Peraturan Presiden (Perpres)", "Ketetapan MPR (TAP MPR)"]),
                answer: "UUD 1945"
            },
            {
                question: "Nilai-nilai Pancasila dijabarkan secara hukum dalam...",
                options: shuffleOptions(["Batang Tubuh UUD 1945", "Pembukaan UUD 1945", "Teks Proklamasi", "Peraturan Daerah (Perda)"]),
                answer: "Batang Tubuh UUD 1945"
            },
            {
                question: "Jika sebuah Undang-Undang (UU) bertentangan dengan nilai Pancasila, lembaga yang berwenang mengujinya adalah...",
                options: shuffleOptions(["Mahkamah Konstitusi (MK)", "Mahkamah Agung (MA)", "Komisi Yudisial (KY)", "Dewan Perwakilan Rakyat (DPR)"]),
                answer: "Mahkamah Konstitusi (MK)"
            },
            {
                question: "Sila manakah yang menjadi dasar hukum bagi kebebasan beragama di Indonesia?",
                options: shuffleOptions(["Sila Pertama", "Sila Kedua", "Sila Ketiga", "Sila Kelima"]),
                answer: "Sila Pertama"
            }
        ]
    },
    {
        id: "paket22",
        title: "Penerapan Era Orde Lama",
        description: "Tantangan dan dinamika penerapan Pancasila pada masa 1945-1966.",
        soal: [
            {
                question: "Pada periode 1950-1959, Indonesia menerapkan sistem demokrasi...",
                options: shuffleOptions(["Demokrasi Liberal", "Demokrasi Terpimpin", "Demokrasi Pancasila", "Monarki Konstitusional"]),
                answer: "Demokrasi Liberal"
            },
            {
                question: "Konsep NASAKOM (Nasionalis, Agama, Komunis) digagas oleh Soekarno pada masa...",
                options: shuffleOptions(["Demokrasi Terpimpin", "Demokrasi Liberal", "Orde Baru", "Reformasi"]),
                answer: "Demokrasi Terpimpin"
            },
            {
                question: "Dekrit Presiden 5 Juli 1959 dikeluarkan untuk...",
                options: shuffleOptions(["Kembali ke UUD 1945", "Membubarkan BPUPKI", "Melaksanakan Pemilu pertama", "Menyatakan perang"]),
                answer: "Kembali ke UUD 1945"
            },
            {
                question: "Pemberontakan DI/TII Kartosuwiryo bertujuan mengganti Pancasila dengan dasar negara...",
                options: shuffleOptions(["Islam (Negara Islam Indonesia)", "Komunis", "Liberal", "Sosialis"]),
                answer: "Islam (Negara Islam Indonesia)"
            },
            {
                question: "Pada masa Demokrasi Terpimpin, terjadi penyimpangan terhadap Pancasila berupa pengangkatan Soekarno sebagai...",
                options: shuffleOptions(["Presiden Seumur Hidup", "Ketua MPR", "Raja Indonesia", "Panglima Tertinggi ABRI"]),
                answer: "Presiden Seumur Hidup"
            }
        ]
    },
    {
        id: "paket23",
        title: "Penerapan Era Orde Baru",
        description: "Soal mengenai penerapan dan penafsiran Pancasila di era Soeharto (1966-1998).",
        soal: [
            {
                question: "Visi utama pemerintah Orde Baru adalah melaksanakan Pancasila dan UUD 1945 secara...",
                options: shuffleOptions(["Murni dan Konsekuen", "Liberal dan Terbuka", "Sosialis dan Komunis", "Sesuai kehendak presiden"]),
                answer: "Murni dan Konsekuen"
            },
            {
                question: "Pedoman untuk menghayati dan mengamalkan Pancasila di era Orde Baru dikenal sebagai...",
                options: shuffleOptions(["P4 (Eka Prasetya Pancakarsa)", "NASAKOM", "Trisakti", "Nawacita"]),
                answer: "P4 (Eka Prasetya Pancakarsa)"
            },
            {
                question: "Salah satu kritik terhadap Orde Baru adalah Pancasila digunakan sebagai alat...",
                options: shuffleOptions(["Legitimasi kekuasaan", "Menarik investor asing", "Melawan penjajah", "Menghapus kemiskinan"]),
                answer: "Legitimasi kekuasaan"
            },
            {
                question: "Pada masa Orde Baru, kebebasan berpendapat dan pers cenderung...",
                options: shuffleOptions(["Dibatasi (dikekang)", "Sangat bebas", "Didukung penuh", "Tidak diatur"]),
                answer: "Dibatasi (dikekang)"
            },
            {
                question: "Runtuhnya rezim Orde Baru pada tahun 1998 ditandai dengan dimulainya era...",
                options: shuffleOptions(["Reformasi", "Orde Lama", "Demokrasi Liberal", "Kerajaan"]),
                answer: "Reformasi"
            }
        ]
    },
    {
        id: "paket24",
        title: "Pancasila Era Reformasi",
        description: "Tantangan Pancasila setelah 1998 hingga kini, seperti globalisasi dan liberalisme.",
        soal: [
            {
                question: "Salah satu tantangan terbesar Pancasila di era reformasi adalah...",
                options: shuffleOptions(["Globalisasi dan ideologi asing", "Pemberontakan bersenjata", "Perang dingin", "Kekuatan penjajah"]),
                answer: "Globalisasi dan ideologi asing"
            },
            {
                question: "Sikap mementingkan diri sendiri dan kebebasan tanpa batas (liberalisme) bertentangan terutama dengan sila...",
                options: shuffleOptions(["Sila ke-4 dan ke-5", "Sila ke-1", "Sila ke-2", "Sila ke-3"]),
                answer: "Sila ke-4 dan ke-5"
            },
            {
                question: "Menguatnya sentimen kedaerahan (primordialisme) yang berlebihan dapat mengancam sila...",
                options: shuffleOptions(["Ketiga (Persatuan Indonesia)", "Pertama (Ketuhanan)", "Kelima (Keadilan)", "Kedua (Kemanusiaan)"]),
                answer: "Ketiga (Persatuan Indonesia)"
            },
            {
                question: "Di era reformasi, Pancasila diharapkan berfungsi sebagai...",
                options: shuffleOptions(["Filter (penyaring) budaya asing", "Pengganti budaya lokal", "Ideologi tertutup", "Alat kekuasaan pemerintah"]),
                answer: "Filter (penyaring) budaya asing"
            },
            {
                question: "Gerakan untuk mengembalikan Pancasila sebagai wacana utama bangsa di era reformasi sering disebut...",
                options: shuffleOptions(["Reaktualisasi Pancasila", "De-Pancasilaisasi", "P4", "Indoktrinasi"]),
                answer: "Reaktualisasi Pancasila"
            }
        ]
    },
    {
        id: "paket25",
        title: "Studi Kasus Pengamalan Sila",
        description: "Soal berbasis skenario untuk menentukan penerapan sila dalam kehidupan nyata.",
        soal: [
            {
                question: "Andi terpilih sebagai ketua OSIS melalui voting. Teman-temannya menerima hasil itu dengan lapang dada. Sikap ini mencerminkan sila...",
                options: shuffleOptions(["Keempat", "Pertama", "Kedua", "Kelima"]),
                answer: "Keempat"
            },
            {
                question: "Warga Desa Sukamaju bekerja bakti membangun jembatan tanpa memandang perbedaan suku atau agama. Ini adalah penerapan sila...",
                options: shuffleOptions(["Ketiga", "Pertama", "Keempat", "Kelima"]),
                answer: "Ketiga"
            },
            {
                question: "Seorang hakim memvonis koruptor dengan hukuman setimpal tanpa pandang bulu. Tindakan hakim mencerminkan sila...",
                options: shuffleOptions(["Kelima", "Pertama", "Kedua", "Ketiga"]),
                answer: "Kelima"
            },
            {
                question: "Siska memberi sumbangan pakaian layak pakai kepada panti asuhan yang membutuhkan, sebagai bentuk kepedulian. Sikap Siska sesuai sila...",
                options: shuffleOptions(["Kedua", "Pertama", "Keempat", "Ketiga"]),
                answer: "Kedua"
            },
            {
                question: "Keluarga Pak Budi tetap menghormati tetangganya yang sedang merayakan Hari Raya Nyepi, meskipun berbeda keyakinan. Sikap ini sesuai sila...",
                options: shuffleOptions(["Pertama", "Kedua", "Ketiga", "Keempat"]),
                answer: "Pertama"
            }
        ]
    }
];

// --- Ekspor data yang sudah diacak opsinya ---
const quizPackages = quizPackagesData;