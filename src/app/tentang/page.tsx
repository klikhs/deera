import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tentang Kami - d'eera",
  description: "Pelajari lebih lanjut tentang perjalanan, komitmen, dan visi d'eera coffee dalam menyajikan minuman premium berkualitas tinggi.",
};

export default function TentangKamiPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 min-h-[80vh]">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Kopi Premium <span className="text-primary italic">Tanpa Harus Mahal</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Kami percaya bahwa setiap orang berhak menikmati secangkir kopi berkualitas tinggi tanpa harus merogoh kocek terlalu dalam. d'eera coffee hadir sebagai jawaban atas keresahan akan sulitnya menemukan perpaduan sempurna antara bahan premium dan harga yang jujur.
        </p>
      </section>

      {/* Story Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm">
        <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800">
          <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
          <img
            alt="Produk d'eera coffee premium terjangkau"
            className="absolute inset-0 w-full h-full object-cover"
            src="/deera-botolan.png"
          />
        </div>
        <div className="space-y-6">
          <div className="text-primary font-semibold tracking-wider uppercase text-sm">Misi Kami</div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight">Berawal dari sebuah keresahan sederhana.</h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              Seringkali kita dihadapkan pada dua pilihan: kopi enak yang harganya selangit, atau kopi murah dengan rasa yang ala kadarnya. Di d'eera coffee, kami menolak kompromi tersebut. Kami memulai perjalanan di Yogyakarta dengan satu misi—membuktikan bahwa bahan baku mewah seperti biji kopi pilihan dan matcha seremonial bisa dinikmati dengan harga yang membumi.
            </p>
            <p>
              Dengan memotong jalur distribusi yang tidak perlu dan berfokus pada efisiensi racikan, kami berhasil menyajikan kualitas yang biasanya hanya Anda temukan di kafe-kafe mahal. Nikmatnya kopi esensi d'eera adalah bukti bahwa kemewahan rasa bisa menjadi milik siapa saja.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Prinsip Ketulusan Kami</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Kami membangun d'eera atas dasar kejujuran rasa dan transparansi harga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "star",
              title: "Bahan Baku Mewah",
              desc: "Kami tetap menggunakan biji kopi grade terbaik dan bahan impor premium. Kualitas adalah janji yang tidak akan pernah kami khianati demi mengejar keuntungan."
            },
            {
              icon: "savings",
              title: "Harga yang Jujur",
              desc: "Tanpa label harga yang berlebihan. Kami merancang setiap menu agar dapat dinikmati setiap hari tanpa membebani dompet Anda, mulai dari pelajar hingga pekerja."
            },
            {
              icon: "verified",
              title: "Kesempurnaan Rasa",
              desc: "Murah bukan berarti murahan. Setiap resep d'eera melalui puluhan kali uji coba untuk memastikan rasa yang dihasilkan tetap konsisten dan 'nendang' di setiap seduhan."
            }
          ].map((value, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all duration-300 group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined text-2xl">{value.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Us CTA */}
      <section className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-3xl p-8 lg:p-16 text-center space-y-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">Nikmati Kopi Mewah Versi Hemat</h2>
          <p className="text-slate-300 dark:text-slate-700 text-lg">
            Jangan biarkan harga menghalangi kualitas hari Anda. Pesan racikan d'eera sekarang dan rasakan bedanya!
          </p>
          <div className="flex justify-center pt-4">
            <a href="https://wa.me/6282225321327" target="_blank" rel="noopener noreferrer" className="bg-primary text-background-dark font-bold px-8 py-3.5 rounded-lg hover:opacity-90 hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/30">
              <span className="material-symbols-outlined">shopping_cart</span>
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
