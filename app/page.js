'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    guests: '1',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Countdown ke hari pernikahan
  const weddingDate = new Date('2025-12-25')
  const today = new Date()
  const daysLeft = Math.ceil((weddingDate - today) / (1000 * 60 * 60 * 24))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // Di sini nanti bisa kirim data ke backend/database
    console.log('RSVP Data:', formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-50">
      
      {/* Hero Section with Ornament */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Ornament Top */}
          <div className="text-6xl mb-4">🌸</div>
          
          <p className="text-pink-600 font-serif text-lg mb-4 tracking-widest">
            THE WEDDING OF
          </p>
          
          <h1 className="font-serif text-6xl md:text-8xl text-gray-800 mb-2">
            Sarah & David
          </h1>
          
          <div className="flex items-center justify-center gap-4 my-8">
            <div className="h-px w-20 bg-pink-300"></div>
            <p className="text-2xl">💕</p>
            <div className="h-px w-20 bg-pink-300"></div>
          </div>
          
          <p className="text-xl text-gray-600 font-light mb-8">
            25 Desember 2025
          </p>
          
          {/* Countdown */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 inline-block">
            <p className="text-sm text-gray-500 mb-2">Hari yang dinanti</p>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-600">{daysLeft}</div>
                <div className="text-xs text-gray-500">Hari</div>
              </div>
            </div>
          </div>
          
          {/* Scroll Down Indicator */}
          <div className="mt-12 animate-bounce">
            <p className="text-sm text-gray-400">Scroll untuk detail</p>
            <div className="text-2xl">⬇️</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-6">✨</div>
          <blockquote className="text-2xl md:text-3xl font-serif text-gray-700 italic leading-relaxed">
            "Cinta adalah persahabatan yang telah terbakar. Seperti abu-abu yang bercahaya, 
            cinta memiliki kehangatan yang lembut namun abadi."
          </blockquote>
          <p className="mt-6 text-gray-500">— Ann Landers</p>
        </div>
      </section>

      {/* Couple Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Mempelai
          </h2>
          <div className="text-center text-2xl mb-12">💐</div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            {/* Bride */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center text-6xl">
                👰
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">Sarah Anderson</h3>
              <p className="text-gray-600 mb-4">Putri dari Bapak John & Ibu Mary Anderson</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-pink-600 hover:text-pink-700 text-xl">📷</a>
                <a href="#" className="text-pink-600 hover:text-pink-700 text-xl">🐦</a>
              </div>
            </div>
            
            {/* Groom */}
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-200 to-indigo-200 flex items-center justify-center text-6xl">
                🤵
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">David Wilson</h3>
              <p className="text-gray-600 mb-4">Putra dari Bapak Robert & Ibu Linda Wilson</p>
              <div className="flex justify-center gap-3">
                <a href="#" className="text-blue-600 hover:text-blue-700 text-xl">📷</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 text-xl">🐦</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Waktu & Tempat
          </h2>
          <div className="text-center text-2xl mb-12">📍</div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Akad */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-pink-100">
              <div className="text-4xl mb-4">💒</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Akad Nikah</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <span>📅</span>
                  <span>Kamis, 25 Desember 2025</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>⏰</span>
                  <span>08:00 - 10:00 WIB</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>Grand Ballroom Hotel Mulia</span>
                </p>
              </div>
              <button className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
                📍 Buka Maps
              </button>
            </div>
            
            {/* Resepsi */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center border-2 border-purple-100">
              <div className="text-4xl mb-4">🎊</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Resepsi</h3>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-center justify-center gap-2">
                  <span>📅</span>
                  <span>Kamis, 25 Desember 2025</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>⏰</span>
                  <span>18:00 - 22:00 WIB</span>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span>📍</span>
                  <span>Grand Ballroom Hotel Mulia</span>
                </p>
              </div>
              <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition">
                📍 Buka Maps
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Form */}
      <section className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Mohon konfirmasi kehadiran Anda sebelum 15 Desember 2025
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              {/* Name */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Nama Lengkap <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition"
                />
              </div>
              
              {/* Attendance */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Kehadiran <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <label className={`border-2 rounded-lg p-4 cursor-pointer text-center transition ${
                    formData.attendance === 'hadir' 
                      ? 'border-pink-500 bg-pink-50' 
                      : 'border-gray-200 hover:border-pink-300'
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="hadir"
                      checked={formData.attendance === 'hadir'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="text-2xl mb-2">✅</div>
                    <div className="font-medium">Hadir</div>
                  </label>
                  
                  <label className={`border-2 rounded-lg p-4 cursor-pointer text-center transition ${
                    formData.attendance === 'tidak-hadir' 
                      ? 'border-gray-500 bg-gray-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="tidak-hadir"
                      checked={formData.attendance === 'tidak-hadir'}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <div className="text-2xl mb-2">❌</div>
                    <div className="font-medium">Tidak Hadir</div>
                  </label>
                </div>
              </div>
              
              {/* Number of Guests */}
              {formData.attendance === 'hadir' && (
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Jumlah Tamu
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition"
                  >
                    <option value="1">1 Orang</option>
                    <option value="2">2 Orang</option>
                    <option value="3">3 Orang</option>
                    <option value="4">4 Orang</option>
                    <option value="5">5+ Orang</option>
                  </select>
                </div>
              )}
              
              {/* Message */}
              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Ucapan & Doa
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tuliskan ucapan dan doa untuk kami..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-pink-500 focus:outline-none transition resize-none"
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-pink-700 hover:to-purple-700 transition shadow-lg"
              >
                💌 Kirim Konfirmasi
              </button>
            </form>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-serif text-gray-800 mb-4">
                Terima Kasih!
              </h3>
              <p className="text-gray-600 mb-6">
                Konfirmasi kehadiran Anda telah kami terima. 
                <br />Kami sangat menantikan kehadiran Anda!
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-pink-600 hover:text-pink-700 font-medium"
              >
                ← Kirim konfirmasi lagi
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-serif text-center text-gray-800 mb-4">
            Gallery
          </h2>
          <div className="text-center text-2xl mb-12">📸</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-lg flex items-center justify-center text-4xl hover:scale-105 transition cursor-pointer"
              >
                {i % 2 === 0 ? '💑' : '💕'}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-4">
            Wedding Gift
          </h2>
          <div className="text-2xl mb-6">🎁</div>
          <p className="text-gray-600 mb-8">
            Doa restu Anda merupakan karunia yang sangat berarti bagi kami. 
            Namun jika memberi adalah ungkapan kasih, Anda dapat memberikan kado secara cashless.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">🏦</div>
              <h4 className="font-semibold text-gray-800 mb-2">Transfer Bank</h4>
              <p className="text-sm text-gray-600 mb-3">Bank BCA</p>
              <div className="bg-gray-50 rounded-lg p-3 font-mono text-lg">
                1234567890
              </div>
              <p className="text-sm text-gray-600 mt-2">a.n. Sarah Anderson</p>
              <button className="mt-4 text-pink-600 hover:text-pink-700 font-medium text-sm">
                📋 Copy Nomor Rekening
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="text-3xl mb-3">💳</div>
              <h4 className="font-semibold text-gray-800 mb-2">E-Wallet</h4>
              <p className="text-sm text-gray-600 mb-3">GoPay / OVO</p>
              <div className="bg-gray-50 rounded-lg p-3 font-mono text-lg">
                0812-3456-7890
              </div>
              <p className="text-sm text-gray-600 mt-2">a.n. Sarah Anderson</p>
              <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium text-sm">
                📋 Copy Nomor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-4xl mb-4">💝</div>
          <h3 className="text-3xl font-serif mb-4">Sarah & David</h3>
          <p className="text-pink-100 mb-6">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila 
            Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
          <div className="h-px w-32 bg-white/30 mx-auto mb-6"></div>
          <p className="text-sm text-pink-100">
            Terima kasih atas doa dan ucapan yang telah diberikan
          </p>
          <p className="text-xs text-pink-200 mt-6">
            © 2025 Wedding Invitation. Made with 💕
          </p>
        </div>
      </footer>
      
    </div>
  )
}