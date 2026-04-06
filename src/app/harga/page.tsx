import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Menu & Harga - d'eera",
  description: "Daftar menu premium d'eera untuk kopi dan non-kopi.",
};

const coffeeMenu = [
  { name: 'Americano', desc: 'Espresso murni dengan air panas, profil rasa bersih dan kuat.', price: 'Rp 10.000', image: '/americano.jpeg' },
  { name: 'Coffee Latte', desc: 'Espresso dengan susu fresh yang lembut dan foam tipis.', price: 'Rp 13.000', image: '/coffee-latte.jpeg' },
  { name: 'Coffee Palm Sugar', desc: 'Kopi susu dengan manisnya gula aren asli nusantara.', price: 'Rp 14.000', image: '/coffee-palm-sugar.jpeg' },
  { name: 'Butterscotch Coffee', desc: 'Paduan espresso dan saus butterscotch yang kaya rasa.', price: 'Rp 17.000', image: '/butterschot-coffee.jfif' },
  { name: 'Salted Caramel Coffee', desc: 'Keseimbangan sempurna antara manis karamel dan gurih.', price: 'Rp 17.000', image: '/salted-caramel-coffee.jfif' },
  { name: 'Hazelnut Coffee', desc: 'Keseimbangan sempurna antara hazel dan kopi pilihan.', price: 'Rp 17.000', image: '/hazelnut-coffee.jfif' },
  { name: 'Caramel Coffee', desc: 'Kopi susu klasik dengan kelembutan sirup karamel.', price: 'Rp 17.000', image: '/caramel-coffee.png' },
  { name: 'Vanilla Coffee', desc: 'Rasa vanila yang manis berpadu dengan kopi pilihan.', price: 'Rp 17.000', image: '/vanilla-coffee.png' },
];

const nonCoffeeMenu = [
  { name: 'Matcha Latte', desc: 'Matcha grade original dengan susu putih lembut.', price: 'Rp 18.000', image: '/matcha.jpeg' },
  { name: 'Vanilla Matcha Latte', desc: 'Matcha latte khas kami dengan sentuhan manis vanila.', price: 'Rp 19.000', image: '/vanilla-matcha-latte.jfif' },
  { name: 'Thai Tea', desc: 'Teh Thailand otentik dengan rempah aromatik dan susu.', price: 'Rp 12.000', image: '/thai-tea.jpeg' },
  { name: 'Chocolate', desc: 'Cokelat premium yang kental, manis, dan memanjakan lidah.', price: 'Rp 15.000', image: '/chocolatte.jpeg' },
  { name: 'Red Velvet', desc: 'Minuman kekinian merah merona dengan tekstur creamy.', price: 'Rp 15.000', image: '/red-velvet.jpg' },
];

export default function HargaPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 min-h-[80vh]">
      {/* Page Header */}
      <section className="text-center space-y-4 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
          Menu & <span className="text-primary italic">Harga</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Temukan minuman favorit Anda dari pilihan biji kopi terbaik dan bahan premium pilihan kami.
        </p>
        <div className="pt-2">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full">
            <span className="material-symbols-outlined text-[16px]">schedule</span>
            Update Terakhir: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Coffee Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">coffee</span>
          </div>
          <h2 className="text-3xl font-bold">Minuman Coffee</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeMenu.map((item, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors"></div>
              <div>
                {(item as any).image && (
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 relative">
                    <img src={(item as any).image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="font-bold text-primary whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a href={`https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center mt-6 w-full py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-lg group-hover:bg-primary group-hover:text-background-dark transition-colors">
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Non-Coffee Section */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">local_cafe</span>
          </div>
          <h2 className="text-3xl font-bold">Minuman Non Coffee</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nonCoffeeMenu.map((item, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between h-full">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary/0 group-hover:bg-primary transition-colors"></div>
              <div>
                {(item as any).image && (
                  <div className="aspect-[16/10] w-full rounded-lg overflow-hidden mb-4 bg-slate-100 dark:bg-slate-800 relative">
                    <img src={(item as any).image} alt={item.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <span className="font-bold text-primary whitespace-nowrap ml-4">{item.price}</span>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <a href={`https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(item.name)}`} target="_blank" rel="noopener noreferrer" className="block text-center mt-6 w-full py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-lg group-hover:bg-primary group-hover:text-background-dark transition-colors">
                Pesan Sekarang
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
