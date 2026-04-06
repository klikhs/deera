import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white dark:bg-slate-900 rounded-xl p-8 lg:p-12 overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Tingkatkan <span className="text-primary italic">Citarasa</span> Anda
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md">
            Nikmati premium kopi, matcha original, dan teh Thailand otentik yang diracik khusus untuk selera modern.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20produk%20d'eera" target="_blank" rel="noopener noreferrer" className="inline-block bg-primary text-background-dark font-bold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity text-center">
              Pesan Sekarang
            </a>
            <Link href="/harga" className="inline-block border border-slate-200 dark:border-slate-700 font-bold px-8 py-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-center">
              Daftar Menu
            </Link>
          </div>
        </div>
        <div className="relative aspect-square lg:aspect-video rounded-xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
          <img alt="Minuman d'eera dalam kemasan botol" className="absolute inset-0 w-full h-full object-cover" src="/deera-botolan.png" />
        </div>
      </section>
      {/* Brand Values Section */}
      <section className="space-y-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Keunggulan d'eera coffee</h2>
          <p className="text-slate-600 dark:text-slate-400">Kami menghadirkan bahan-bahan terbaik untuk kesempurnaan minuman modern.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Harga Murah</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Nikmati kualitas premium dengan harga yang bersahabat di kantong, tanpa mengorbankan standar bahan baku terbaik yang kami gunakan.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">sentiment_very_satisfied</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Rasa Enak</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Setiap minuman diracik dengan takaran presisi untuk menghasilkan perpaduan rasa yang autentik, konsisten, dan memanjakan lidah Anda.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined">inventory_2</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Kemasan Rapi</h3>
            <p className="text-sm text-slate-500 leading-relaxed">Produk dikemas secara higienis dan estetik, memastikan keamanan selama perjalanan serta memberikan kesan premium saat Anda menerimanya.</p>
          </div>
        </div>
      </section>
      {/* Featured Blends */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-bold mb-2">Pilihan Unggulan</h2>
            <p className="text-slate-600 dark:text-slate-400">Seleksi paling istimewa kami, dikurasi untuk kesempurnaan.</p>
          </div>
          <Link href="/harga" className="text-primary font-bold flex items-center gap-1 hover:underline">
            Lihat Semua <span className="material-symbols-outlined">arrow_right_alt</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Coffee Card 1 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
              <img alt="Coffee Palm Sugar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/coffee-palm-sugar.jpeg" />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900">Kopi Esensi</div>
            </div>
            <h3 className="text-xl font-bold">Coffee Palm Sugar</h3>
            <p className="text-slate-500 text-sm mb-4">Kopi susu dengan manisnya gula aren asli nusantara.</p>
            <a href="https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20Coffee%20Palm%20Sugar" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-colors">
              Pesan Sekarang — Rp 14.000
            </a>
          </div>
          {/* Coffee Card 2 */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
              <img alt="Coffee Latte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/coffee-latte.jpeg" />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900">Kopi Klasik</div>
            </div>
            <h3 className="text-xl font-bold">Coffee Latte</h3>
            <p className="text-slate-500 text-sm mb-4">Espresso dengan susu fresh yang lembut.</p>
            <a href="https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20Coffee%20Latte" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-colors">
              Pesan Sekarang — Rp 13.000
            </a>
          </div>
          {/* Matcha Card */}
          <div className="group cursor-pointer">
            <div className="aspect-[4/5] rounded-xl overflow-hidden mb-4 relative">
              <img alt="Matcha Latte" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/matcha-latte.jpeg" />
              <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider text-slate-900">Non-Coffee Favorit</div>
            </div>
            <h3 className="text-xl font-bold">Matcha Latte</h3>
            <p className="text-slate-500 text-sm mb-4">Matcha grade original dengan susu putih lembut.</p>
            <a href="https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20Matcha%20Latte" target="_blank" rel="noopener noreferrer" className="block text-center w-full py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold rounded hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-background-dark transition-colors">
              Pesan Sekarang — Rp 18.000
            </a>
          </div>
        </div>
      </section>
      {/* Locations Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-8 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Kunjungi & Order Offline </h2>
          <p className="text-slate-600 dark:text-slate-400">Order dapat dilakukan melalui offline dan online. Anda dapat order melalui kontak kami</p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <h4 className="font-bold">D'eera Coffee ( Jetis )</h4>
                <p className="text-sm text-slate-500">Barongan RT 06, Sumberagung, Jetis, Bantul, Yogyakarta</p>
                <p className="text-xs text-primary font-medium mt-1 uppercase">Buka Setiap Hari: 08.00 - 21.00</p>
              </div>
            </div>
          </div>
          <button className="mt-4 border-b-2 border-primary text-slate-900 dark:text-slate-100 font-bold pb-1 hover:text-primary transition-colors">
            Temukan lokasi di dekat Anda
          </button>
        </div>
        <div className="rounded-xl overflow-hidden min-h-[300px] border border-slate-100 dark:border-slate-800 shadow-inner relative">
          <img alt="Peta menunjukkan lokasi kafe" className="absolute inset-0 w-full h-full object-cover opacity-80" data-alt="Stylized map showing premium cafe locations" data-location="San Francisco" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlRrd7-5PHM7zQEGlgNkibYmLbnV7PGfsZYN9B0yRAvSW3jV7LQi-0IngEKTV7NCaMt4lTaIE-Mn-l9l3lCJoCQrRWQC12a3C3NQQFHoJWkCHSQCmh7TzWsfMMhX9Zp4zLorfOUyTKjgHY9gImMjPAErXClghyzhjGpeK--yLTIqavsbQTwMnGN-qCeke9ARZiJIa_Lvw_ojYEdAQbhPtN0fNrR3nHLENpvxWBqKt8DzeOuYA9E1RmnPDT8zRUaKXncIn2E91Gpg8" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </section>
      {/* Newsletter / Footer-lite */}
      <section className="py-12 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-xl mx-auto text-center space-y-6">
          <h3 className="text-2xl font-bold">Gabung Bersama d'eera</h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Jadilah yang pertama mengetahui tentang update terbaru kami</p>
          <div className="flex gap-2">
            <input className="flex-1 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-primary focus:border-primary" placeholder="Masukkan email Anda" type="email" />
            <button className="bg-primary text-background-dark font-bold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">Berlangganan</button>
          </div>
        </div>
      </section>
    </main>
  );
}
