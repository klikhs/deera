import PromoPopup from '@/components/PromoPopup';

const coffeeMenu = [
  { name: 'Americano', desc: 'Espresso murni dengan air panas, profil rasa bersih dan kuat.', price: 'Rp 10.000', image: '/americano.jpg' },
  { name: 'Coffee Latte', desc: 'Espresso dengan susu fresh yang lembut dan foam tipis.', price: 'Rp 13.000', image: '/brown-sugar.jpg' },
  { name: 'Coffee Palm Sugar', desc: 'Kopi susu dengan manisnya gula aren asli nusantara.', price: 'Rp 14.000', image: '/palm-sugar.jpg' },
  { name: 'Coffee Brown Sugar', desc: 'Kopi susu dengan manisnya gula jawa asli .', price: 'Rp 14.000', image: '/brown-sugar.jpg' },
  { name: 'Butterscotch Coffee', desc: 'Paduan espresso dan saus butterscotch yang kaya rasa.', price: 'Rp 17.000', image: '/butterscooth-coffee.jpg' },
  { name: 'Salted Caramel Coffee', desc: 'Keseimbangan sempurna antara manis karamel dan gurih.', price: 'Rp 17.000', image: '/salted-caramel-coffee.jpg' },
  { name: 'Hazelnut Coffee', desc: 'Keseimbangan sempurna antara hazel dan kopi pilihan.', price: 'Rp 17.000', image: '/hazelnut-coffee.jpg' },
  { name: 'Caramel Coffee', desc: 'Kopi susu klasik dengan kelembutan sirup karamel.', price: 'Rp 17.000', image: '/caramel-coffee.jpg' },
  { name: 'Vanilla Coffee', desc: 'Rasa vanila yang manis berpadu dengan kopi pilihan.', price: 'Rp 17.000', image: '/vanila-coffee.jpg' },
  { name: 'Coffee Pandan Latte', desc: 'Kopi susu dengan aroma pandan yang khas dan menyegarkan.', price: 'Rp 17.000', image: '/coffee-pandan-latte.jpg' },
];

const nonCoffeeMenu = [
  { name: 'Matcha Latte', desc: 'Matcha grade original dengan susu putih lembut.', price: 'Rp 17.000', image: '/caramel-matcha-latte.jpg' },
  { name: 'Vanilla Matcha Latte', desc: 'Matcha latte khas kami dengan sentuhan manis vanila.', price: 'Rp 17.000', image: '/vanilla-matcha-latte.jpg' },
  { name: 'Thai Tea', desc: 'Teh Thailand otentik dengan rempah aromatik dan susu.', price: 'Rp 12.000', image: '/thai-tea.jpg' },
  { name: 'Chocolate', desc: 'Cokelat premium yang kental, manis, dan memanjakan lidah.', price: 'Rp 15.000', image: '/chocolatte.jpg' },
  { name: 'Red Velvet', desc: 'Minuman kekinian merah merona dengan tekstur creamy.', price: 'Rp 15.000', image: '/red-velvet.jpg' },
];

export default function HomePage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-16 md:pt-6 space-y-8 min-h-[80vh]">
      {/* Page Header */}
      <section className="text-center space-y-2 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Menu & <span className="text-primary italic">Harga</span>
        </h1>
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            Update Harga Terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        {/* Quick Nav */}
        <div className="flex justify-center gap-3 pt-1">
          <a href="#coffee" className="inline-flex items-center gap-2 bg-primary text-slate-900 font-bold px-5 py-2 rounded-full text-sm hover:opacity-90 transition-opacity shadow-sm">
            <span className="material-symbols-outlined text-[16px]">coffee</span>
            Coffee
          </a>
          <a href="#non-coffee" className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold px-5 py-2 rounded-full text-sm hover:border-primary hover:text-primary transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[16px]">local_cafe</span>
            Non Coffee
          </a>
        </div>
      </section>

      {/* Coffee Section */}
      <section id="coffee" className="space-y-4 scroll-mt-20">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">coffee</span>
            </div>
            <h2 className="text-3xl font-bold">Minuman Coffee</h2>
          </div>
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
            <span className="material-symbols-outlined text-[16px] text-amber-500">*</span>
            Extra Shot <span className="text-amber-600 font-bold">+ Rp 3.000</span>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {coffeeMenu.map((item, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors"></div>
              <div>
                {(item as any).image && (
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-3 sm:mb-4 bg-slate-100 dark:bg-slate-800 relative">
                    <img src={(item as any).image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex flex-col xl:flex-row justify-between items-start mb-2 sm:mb-4 gap-1 xl:gap-0">
                  <h3 className="text-sm sm:text-xl font-bold leading-tight">{item.name}</h3>
                  <span className="font-bold text-primary text-xs sm:text-base whitespace-nowrap xl:ml-4">{item.price}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </p>
              </div>
              <a href={`https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center mt-4 sm:mt-6 w-full py-2 sm:py-2.5 text-xs sm:text-base bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-lg group-hover:bg-primary group-hover:text-background-dark transition-colors">
                Pesan<span className="hidden sm:inline"> Sekarang</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Coffee Section */}
      <section id="non-coffee" className="space-y-8 scroll-mt-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">local_cafe</span>
          </div>
          <h2 className="text-3xl font-bold">Minuman Non Coffee</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {nonCoffeeMenu.map((item, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-3 sm:p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors"></div>
              <div>
                {(item as any).image && (
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-3 sm:mb-4 bg-slate-100 dark:bg-slate-800 relative">
                    <img src={(item as any).image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex flex-col xl:flex-row justify-between items-start mb-2 sm:mb-4 gap-1 xl:gap-0">
                  <h3 className="text-sm sm:text-xl font-bold leading-tight">{item.name}</h3>
                  <span className="font-bold text-primary text-xs sm:text-base whitespace-nowrap xl:ml-4">{item.price}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {item.desc}
                </p>
              </div>
              <a href={`https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center mt-4 sm:mt-6 w-full py-2 sm:py-2.5 text-xs sm:text-base bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-lg group-hover:bg-primary group-hover:text-background-dark transition-colors">
                Pesan<span className="hidden sm:inline"> Sekarang</span>
              </a>
            </div>
          ))}
        </div>
      </section>
      {/* Locations Section */}
      <section className="bg-white dark:bg-slate-900 rounded-2xl p-6 lg:p-12 border border-slate-100 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Mau Order Coffee Offline ? </h2>
          <p className="text-slate-600 dark:text-slate-400">Anda bisa datang ke lokasi kami ( No Dine-In )</p>
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
          <img alt="Peta menunjukkan lokasi kafe" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlRrd7-5PHM7zQEGlgNkibYmLbnV7PGfsZYN9B0yRAvSW3jV7LQi-0IngEKTV7NCaMt4lTaIE-Mn-l9l3lCJoCQrRWQC12a3C3NQQFHoJWkCHSQCmh7TzWsfMMhX9Zp4zLorfOUyTKjgHY9gImMjPAErXClghyzhjGpeK--yLTIqavsbQTwMnGN-qCeke9ARZiJIa_Lvw_ojYEdAQbhPtN0fNrR3nHLENpvxWBqKt8DzeOuYA9E1RmnPDT8zRUaKXncIn2E91Gpg8" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
        </div>
      </section>

      {/* Pop up promo */}
      <PromoPopup />
    </main>
  );
}
