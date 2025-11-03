export default function Home() {
  // Data berita dummy
  const mainNews = {
    title: "Breaking News: Teknologi AI Terbaru Mengubah Industri Digital",
    category: "Teknologi",
    date: "3 November 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    excerpt: "Perkembangan kecerdasan buatan mencapai milestone baru yang akan mengubah cara kita bekerja dan berinteraksi dengan teknologi."
  };

  const latestNews = [
    {
      id: 1,
      title: "Ekonomi Indonesia Tumbuh 5.2% di Kuartal Ketiga",
      category: "Ekonomi",
      date: "3 Nov 2025",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
      excerpt: "Bank Indonesia mencatat pertumbuhan ekonomi yang stabil..."
    },
    {
      id: 2,
      title: "Timnas Indonesia Lolos ke Putaran Final Piala Asia",
      category: "Olahraga",
      date: "2 Nov 2025",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80",
      excerpt: "Kemenangan dramatis membawa Indonesia ke babak selanjutnya..."
    },
    {
      id: 3,
      title: "Peluncuran Satelit Komunikasi Generasi Baru",
      category: "Teknologi",
      date: "2 Nov 2025",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&q=80",
      excerpt: "Satelit terbaru akan meningkatkan konektivitas internet di seluruh nusantara..."
    },
    {
      id: 4,
      title: "Festival Budaya Nusantara Digelar di Jakarta",
      category: "Budaya",
      date: "1 Nov 2025",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80",
      excerpt: "Ratusan seniman dari berbagai daerah turut berpartisipasi..."
    },
    {
      id: 5,
      title: "Harga Minyak Dunia Turun 3% Minggu Ini",
      category: "Ekonomi",
      date: "1 Nov 2025",
      image: "https://images.unsplash.com/photo-1611244419377-b0a760c19719?w=400&q=80",
      excerpt: "Penurunan harga minyak dipengaruhi oleh produksi yang meningkat..."
    },
    {
      id: 6,
      title: "Startup Indonesia Raih Pendanaan $50 Juta",
      category: "Bisnis",
      date: "31 Okt 2025",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&q=80",
      excerpt: "Pendanaan Seri B ini akan digunakan untuk ekspansi regional..."
    }
  ];

  const categories = [
    { name: "Teknologi", icon: "💻" },
    { name: "Ekonomi", icon: "💰" },
    { name: "Olahraga", icon: "⚽" },
    { name: "Politik", icon: "🏛️" },
    { name: "Budaya", icon: "🎭" },
    { name: "Kesehatan", icon: "🏥" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">📰 BeritaKini</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Beranda</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Terkini</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Populer</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Video</a>
            </nav>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Langganan
            </button>
          </div>
        </div>
      </header>

      {/* Breaking News Banner */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <span className="bg-white text-red-600 px-3 py-1 rounded font-bold text-sm mr-3">
              BREAKING
            </span>
            <p className="text-sm font-medium animate-pulse">
              Update Terbaru: Pemerintah Umumkan Kebijakan Ekonomi Baru 2025
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section - Main News */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-auto">
              <img 
                src={mainNews.image}
                alt={mainNews.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {mainNews.category}
              </span>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-sm text-gray-500 mb-2">{mainNews.date}</p>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {mainNews.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {mainNews.excerpt}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-fit">
                Baca Selengkapnya →
              </button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Kategori Berita</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition text-center"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="font-semibold text-gray-700">{category.name}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Latest News Grid */}
        <section>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Berita Terkini</h3>
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">
              Lihat Semua →
            </a>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
              >
                <div className="relative h-48">
                  <img 
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {news.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-500 mb-2">{news.date}</p>
                  <h4 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {news.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">
              📧 Dapatkan Berita Terbaru
            </h3>
            <p className="mb-6 text-blue-100">
              Berlangganan newsletter kami dan dapatkan update berita langsung ke email Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Langganan
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">📰 BeritaKini</h4>
              <p className="text-gray-400 text-sm">
                Portal berita terpercaya dengan informasi terkini dan akurat dari berbagai kategori.
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kategori</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Teknologi</a></li>
                <li><a href="#" className="hover:text-white">Ekonomi</a></li>
                <li><a href="#" className="hover:text-white">Olahraga</a></li>
                <li><a href="#" className="hover:text-white">Politik</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Perusahaan</h5>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white">Kontak</a></li>
                <li><a href="#" className="hover:text-white">Karir</a></li>
                <li><a href="#" className="hover:text-white">Iklan</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Ikuti Kami</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-blue-400">📘</a>
                <a href="#" className="text-2xl hover:text-blue-400">🐦</a>
                <a href="#" className="text-2xl hover:text-blue-400">📸</a>
                <a href="#" className="text-2xl hover:text-blue-400">▶️</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 BeritaKini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}