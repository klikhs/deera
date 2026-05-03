import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "d'eera",
  description: "Koleksi premium kopi artisan, matcha seremonial, dan teh Thailand otentik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 antialiased">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-2">
                  <div className="text-primary">
                    <span className="material-symbols-outlined text-3xl">coffee</span>
                  </div>
                  <h2 className="text-xl font-bold tracking-tight">d'eera coffee</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                  <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Beranda</Link>
                  <Link href="/tentang" className="text-sm font-medium hover:text-primary transition-colors">Tentang Kami</Link>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
                  <input className="pl-10 pr-4 py-1.5 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-48 lg:w-64" placeholder="Cari produk..." type="text" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-white dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="text-primary/50">
                <span className="material-symbols-outlined text-2xl">coffee</span>
              </div>
              <h2 className="text-lg font-bold tracking-tight opacity-50">d'eera coffee</h2>
            </div>
            <div className="flex gap-8 text-sm text-slate-500 font-medium">
              <a className="hover:text-primary" href="#">Kebijakan Privasi</a>
              <a className="hover:text-primary" href="#">Ketentuan Layanan</a>
            </div>
            <p className="text-xs text-slate-400">© 2026 d'eera coffee. Hak cipta dilindungi undang-undang.</p>
          </div>
        </footer>

        {/* Floating WhatsApp Livechat */}
        <a
          href="https://wa.me/6282225321327?text=Halo,%20saya%20ingin%20bertanya%20tentang%20d'eera"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-bounce group"
          aria-label="Chat via WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="absolute -top-10 opacity-0 group-hover:opacity-100 bg-slate-900 text-white text-xs font-bold py-1 px-3 rounded shadow-lg transition-opacity duration-300 right-0 whitespace-nowrap">
            Chat dengan kami
          </span>
        </a>
      </body>
    </html>
  );
}
