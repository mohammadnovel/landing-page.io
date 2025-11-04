'use client'
import { useState, useEffect, useRef } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [guestName, setGuestName] = useState('Tamu Undangan')
  const audioRef = useRef(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    // Get guest name from URL parameter if available
    const params = new URLSearchParams(window.location.search)
    const name = params.get('to')
    if (name) setGuestName(name)
  }, [])

  // Auto-play music when opening
  useEffect(() => {
    if (isOpen && !isPlaying) {
      const playAudio = async () => {
        try {
          if (audioRef.current) {
            await audioRef.current.play()
            setIsPlaying(true)
          }
        } catch (err) {
          console.log('Autoplay prevented')
        }
      }
      playAudio()
    }
  }, [isOpen])

  // Control music
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(() => {})
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setShowMenu(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#E8DED0] font-serif">
      
      {/* Audio */}
      <audio ref={audioRef} loop preload="auto">
        <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
      </audio>

      {/* Fixed Controls - Bottom Right */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* Menu Button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-12 h-12 rounded-full bg-[#6B4E3D] text-white flex items-center justify-center shadow-lg hover:bg-[#5A3E2D] transition"
          >
            <span className="text-xl">☰</span>
          </button>
          
          {/* Music Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-12 h-12 rounded-full bg-[#6B4E3D] text-white flex items-center justify-center shadow-lg hover:bg-[#5A3E2D] transition"
          >
            <span className="text-xl">{isPlaying ? '🔊' : '🔇'}</span>
          </button>
        </div>
      )}

      {/* Menu Popup */}
      {showMenu && (
        <div className="fixed inset-0 z-40 bg-black/50 flex items-center justify-center" onClick={() => setShowMenu(false)}>
          <div className="bg-[#F5EDE3] rounded-lg p-8 max-w-sm w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-2xl text-[#6B4E3D] mb-6 text-center">Menu</h3>
            <div className="space-y-3">
              {['home', 'couple', 'event', 'gallery', 'rsvp', 'gift'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="w-full text-left px-4 py-3 text-[#6B4E3D] hover:bg-[#E8DED0] rounded transition capitalize"
                >
                  {item === 'home' ? 'Beranda' : 
                   item === 'couple' ? 'Mempelai' :
                   item === 'event' ? 'Acara' :
                   item === 'gallery' ? 'Galeri' :
                   item === 'rsvp' ? 'RSVP' : 'Hadiah'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Opening Cover - Full Screen */}
      {!isOpen && (
        <div className="fixed inset-0 z-50 bg-[#E8DED0] flex items-center justify-center overflow-hidden">
          <div className="max-w-2xl w-full px-6 text-center">
            
            {/* Title */}
            <h1 className="text-[#8B9DAF] text-2xl mb-8 tracking-[0.3em] font-light">
              THE WEDDING OF
            </h1>

            {/* Main Illustration */}
            <div className="mb-8 relative">
              {/* Venue Line Art */}
              <svg viewBox="0 0 500 300" className="w-full max-w-lg mx-auto">
                {/* Tree Left */}
                <path d="M100,80 Q90,70 85,60 Q80,50 75,45 Q70,50 65,60 Q60,70 50,80 Q55,85 60,90 Q65,95 70,100 Q75,95 80,90 Q85,85 90,80 L85,90 L95,85 L90,95 L100,90 L95,100 L105,95 L100,105 L110,100 L105,110 Z" 
                      fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                
                {/* Chapel Main Structure */}
                <path d="M150,250 L150,150 L200,100 L250,150 L250,250 Z" 
                      fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                <path d="M200,100 L200,250" stroke="#9B7E6B" strokeWidth="1.5"/>
                <rect x="170" y="180" width="25" height="40" fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                <rect x="205" y="180" width="25" height="40" fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                
                {/* Roof Details */}
                <path d="M145,150 L200,95 L255,150" stroke="#9B7E6B" strokeWidth="1.5" fill="none"/>
                <path d="M150,155 L250,155" stroke="#9B7E6B" strokeWidth="1"/>
                
                {/* Windows */}
                <rect x="165" y="130" width="15" height="20" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                <rect x="220" y="130" width="15" height="20" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                
                {/* Tree Right */}
                <path d="M350,80 Q360,70 365,60 Q370,50 375,45 Q380,50 385,60 Q390,70 400,80 Q395,85 390,90 Q385,95 380,100 Q375,95 370,90 Q365,85 360,80 L365,90 L355,85 L360,95 L350,90 L355,100 L345,95 L350,105 L340,100 L345,110 Z" 
                      fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                
                {/* Ground Line */}
                <path d="M50,250 Q150,255 250,250 Q350,255 450,250" 
                      stroke="#9B7E6B" strokeWidth="1.5" fill="none"/>
                
                {/* Bushes */}
                <ellipse cx="130" cy="240" rx="20" ry="15" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                <ellipse cx="270" cy="240" rx="20" ry="15" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
              </svg>
            </div>

            {/* Names */}
            <div className="mb-8">
              <h2 className="text-[#8B9DAF] text-5xl md:text-6xl mb-2">Nadda</h2>
              <p className="text-[#8B9DAF] text-3xl mb-2">&</p>
              <h2 className="text-[#8B9DAF] text-5xl md:text-6xl">Naufal</h2>
            </div>

            {/* Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#6B4E3D] text-white px-8 py-3 rounded-full hover:bg-[#5A3E2D] transition text-sm tracking-wider"
            >
              Buka Undangan
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      {isOpen && (
        <div className="animate-fadeIn">
          
          {/* Greeting Section */}
          <section id="home" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full">
              {/* Decorative Frame Top */}
              <div className="mb-8">
                <svg viewBox="0 0 400 80" className="w-full max-w-md mx-auto">
                  <path d="M50,40 Q100,20 200,40 Q300,20 350,40" 
                        stroke="#9B7E6B" strokeWidth="1.5" fill="none"/>
                  <path d="M50,45 L50,60 M350,45 L350,60" 
                        stroke="#9B7E6B" strokeWidth="1.5"/>
                </svg>
              </div>

              <div className="text-center space-y-6 text-[#6B4E3D]">
                <h2 className="text-3xl">Hi, {guestName}</h2>
                <p className="text-sm tracking-wider">VIP</p>
                <p className="text-base leading-relaxed">
                  We're overjoyed to invite you to our wedding!
                </p>
                <p className="text-sm leading-relaxed italic border-b border-t border-[#9B7E6B] py-4 max-w-md mx-auto">
                  As we're planning an intimate celebration,<br/>
                  surrounded only by those dearest to us.
                </p>
                <p className="text-sm leading-relaxed">
                  This invitation is extended<br/>
                  just to the person(s) named, and<br/>
                  we kindly ask that no additional guests be brought.
                </p>
              </div>

              {/* Birds Illustration */}
              <div className="flex justify-center gap-20 my-8">
                <svg viewBox="0 0 60 60" className="w-16 h-16">
                  <path d="M20,30 Q15,25 10,20 L15,25 Q20,28 25,30 L30,35 Q28,38 25,40 Q22,38 20,35 Z" 
                        fill="none" stroke="#8B9DAF" strokeWidth="1.5"/>
                  <circle cx="18" cy="28" r="2" fill="#8B9DAF"/>
                  <path d="M25,32 L30,28" stroke="#8B9DAF" strokeWidth="1"/>
                </svg>
                <svg viewBox="0 0 60 60" className="w-16 h-16 scale-x-[-1]">
                  <path d="M20,30 Q15,25 10,20 L15,25 Q20,28 25,30 L30,35 Q28,38 25,40 Q22,38 20,35 Z" 
                        fill="none" stroke="#8B9DAF" strokeWidth="1.5"/>
                  <circle cx="18" cy="28" r="2" fill="#8B9DAF"/>
                  <path d="M25,32 L30,28" stroke="#8B9DAF" strokeWidth="1"/>
                </svg>
              </div>

              <div className="text-center space-y-4 text-[#6B4E3D] text-sm leading-relaxed">
                <p>Thank you for understanding,</p>
                <p>and for being such a special part of our story.</p>
                <p>We can't wait to celebrate this beautiful moment<br/>with you!</p>
              </div>

              {/* Decorative Flowers Bottom */}
              <div className="mt-8 flex justify-center gap-8">
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                  <path d="M20,10 Q15,15 10,20 Q12,25 15,28 Q18,25 20,20 Q22,25 25,28 Q28,25 30,20 Q25,15 20,10 Z" 
                        fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                  <path d="M20,20 L20,50 M15,30 Q17,28 20,30 Q23,28 25,30" 
                        stroke="#9B7E6B" strokeWidth="1" fill="none"/>
                </svg>
                <svg viewBox="0 0 40 60" className="w-12 h-16">
                  <circle cx="20" cy="15" r="5" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                  <path d="M15,18 L10,22 M25,18 L30,22 M20,20 L20,50 M18,28 L22,28" 
                        stroke="#9B7E6B" strokeWidth="1"/>
                </svg>
              </div>

              {/* Decorative Frame Bottom */}
              <div className="mt-8">
                <svg viewBox="0 0 400 80" className="w-full max-w-md mx-auto">
                  <path d="M50,40 Q100,60 200,40 Q300,60 350,40" 
                        stroke="#9B7E6B" strokeWidth="1.5" fill="none"/>
                  <circle cx="200" cy="50" r="8" fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                  <text x="200" y="55" fontSize="12" fill="#6B4E3D" textAnchor="middle">N♡N</text>
                </svg>
              </div>
            </div>
          </section>

          {/* Couple Section */}
          <section id="couple" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#F5EDE3]">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl text-center text-[#6B4E3D] mb-16">Mempelai</h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                {/* Bride */}
                <div className="text-center">
                  <div className="mb-6">
                    <svg viewBox="0 0 200 250" className="w-40 h-48 mx-auto">
                      <ellipse cx="100" cy="70" rx="40" ry="50" fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                      <path d="M70,90 Q100,100 130,90" fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                      <circle cx="85" cy="65" r="3" fill="#9B7E6B"/>
                      <circle cx="115" cy="65" r="3" fill="#9B7E6B"/>
                      <path d="M90,75 Q100,78 110,75" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                      <path d="M60,65 Q65,50 100,45 Q135,50 140,65" fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                      <path d="M100,110 L100,180" stroke="#9B7E6B" strokeWidth="2"/>
                      <ellipse cx="100" cy="180" rx="45" ry="60" fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl text-[#6B4E3D] mb-2">Nadda Wijaya</h3>
                  <p className="text-sm text-[#9B7E6B] mb-2">Putri dari</p>
                  <p className="text-sm text-[#6B4E3D]">
                    Bapak Ahmad Wijaya<br/>
                    & Ibu Siti Rahayu
                  </p>
                </div>

                {/* Groom */}
                <div className="text-center">
                  <div className="mb-6">
                    <svg viewBox="0 0 200 250" className="w-40 h-48 mx-auto">
                      <ellipse cx="100" cy="70" rx="40" ry="50" fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                      <path d="M70,90 Q100,95 130,90" fill="none" stroke="#9B7E6B" strokeWidth="1.5"/>
                      <circle cx="85" cy="65" r="3" fill="#9B7E6B"/>
                      <circle cx="115" cy="65" r="3" fill="#9B7E6B"/>
                      <path d="M90,75 Q100,77 110,75" fill="none" stroke="#9B7E6B" strokeWidth="1"/>
                      <path d="M70,55 L80,60 M120,60 L130,55" stroke="#9B7E6B" strokeWidth="1.5"/>
                      <path d="M100,110 L100,180" stroke="#9B7E6B" strokeWidth="2"/>
                      <rect x="65" y="120" width="70" height="100" rx="5" fill="none" stroke="#9B7E6B" strokeWidth="2"/>
                      <path d="M100,120 L100,220" stroke="#9B7E6B" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl text-[#6B4E3D] mb-2">Naufal Pratama</h3>
                  <p className="text-sm text-[#9B7E6B] mb-2">Putra dari</p>
                  <p className="text-sm text-[#6B4E3D]">
                    Bapak Hadi Pratama<br/>
                    & Ibu Dewi Lestari
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Event Section */}
          <section id="event" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-4xl w-full">
              <h2 className="text-4xl text-center text-[#6B4E3D] mb-16">Waktu & Tempat</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#F5EDE3] p-8 rounded-lg text-center border border-[#9B7E6B]">
                  <div className="text-5xl mb-4">🕌</div>
                  <h3 className="text-2xl text-[#6B4E3D] mb-4">Akad Nikah</h3>
                  <div className="space-y-2 text-[#6B4E3D] text-sm">
                    <p>Kamis, 25 Desember 2025</p>
                    <p>08:00 - 10:00 WIB</p>
                    <p>Masjid Agung Semarang</p>
                  </div>
                  <button className="mt-6 border border-[#6B4E3D] text-[#6B4E3D] px-6 py-2 rounded-full hover:bg-[#6B4E3D] hover:text-white transition">
                    Lihat Lokasi
                  </button>
                </div>

                <div className="bg-[#F5EDE3] p-8 rounded-lg text-center border border-[#9B7E6B]">
                  <div className="text-5xl mb-4">🎊</div>
                  <h3 className="text-2xl text-[#6B4E3D] mb-4">Resepsi</h3>
                  <div className="space-y-2 text-[#6B4E3D] text-sm">
                    <p>Kamis, 25 Desember 2025</p>
                    <p>18:00 - 21:00 WIB</p>
                    <p>Grand Ballroom Hotel Santika</p>
                  </div>
                  <button className="mt-6 border border-[#6B4E3D] text-[#6B4E3D] px-6 py-2 rounded-full hover:bg-[#6B4E3D] hover:text-white transition">
                    Lihat Lokasi
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section id="gallery" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#F5EDE3]">
            <div className="max-w-6xl w-full">
              <h2 className="text-4xl text-center text-[#6B4E3D] mb-16">Gallery</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-gradient-to-br from-[#E8DED0] to-[#D4C4B0] rounded-lg flex items-center justify-center border border-[#9B7E6B]"
                  >
                    <span className="text-6xl text-[#9B7E6B] opacity-30">📷</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* RSVP */}
          <section id="rsvp" className="min-h-screen flex items-center justify-center px-6 py-20">
            <div className="max-w-2xl w-full">
              <h2 className="text-4xl text-center text-[#6B4E3D] mb-4">Konfirmasi Kehadiran</h2>
              <p className="text-center text-[#9B7E6B] text-sm mb-12">
                Mohon konfirmasi sebelum 15 Desember 2025
              </p>

              <form className="bg-[#F5EDE3] p-8 rounded-lg border border-[#9B7E6B] space-y-6">
                <div>
                  <label className="block text-[#6B4E3D] text-sm mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-[#9B7E6B] rounded bg-white focus:outline-none focus:border-[#6B4E3D]"
                    placeholder="Nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-[#6B4E3D] text-sm mb-2">Kehadiran</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button type="button" className="border-2 border-[#9B7E6B] rounded-lg p-4 hover:border-[#6B4E3D] hover:bg-white transition">
                      <div className="text-2xl mb-2">✅</div>
                      <div className="text-sm text-[#6B4E3D]">Hadir</div>
                    </button>
                    <button type="button" className="border-2 border-[#9B7E6B] rounded-lg p-4 hover:border-[#6B4E3D] hover:bg-white transition">
                      <div className="text-2xl mb-2">❌</div>
                      <div className="text-sm text-[#6B4E3D]">Tidak Hadir</div>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-[#6B4E3D] text-sm mb-2">Ucapan & Doa</label>
                  <textarea
                    rows="4"
                    className="w-full px-4 py-3 border border-[#9B7E6B] rounded bg-white focus:outline-none focus:border-[#6B4E3D] resize-none"
                    placeholder="Tuliskan ucapan Anda..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#6B4E3D] text-white py-3 rounded-lg hover:bg-[#5A3E2D] transition"
                >
                  Kirim Konfirmasi
                </button>
              </form>
            </div>
          </section>

          {/* Gift */}
          <section id="gift" className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#F5EDE3]">
            <div className="max-w-3xl w-full text-center">
              <h2 className="text-4xl text-[#6B4E3D] mb-4">Wedding Gift</h2>
              <p className="text-[#9B7E6B] text-sm mb-12 leading-relaxed">
                Doa restu Anda merupakan karunia yang sangat berarti.<br/>
                Namun jika memberi adalah ungkapan kasih, Anda dapat mengirimkan hadiah.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-[#9B7E6B]">
                  <div className="text-3xl mb-3">🏦</div>
                  <h4 className="text-[#6B4E3D] font-medium mb-2">Bank BCA</h4>
                  <div className="bg-[#E8DED0] border border-[#9B7E6B] rounded p-3 font-mono text-[#6B4E3D] mb-2">
                    1234567890
                  </div>
                  <p className="text-xs text-[#9B7E6B]">a.n. Nadda Wijaya</p>
                  <button className="mt-4 border border-[#6B4E3D] text-[#6B4E3D] px-4 py-2 rounded-full hover:bg-[#6B4E3D] hover:text-white transition text-sm">
                    Salin Nomor
                  </button>
                </div>

                <div className="bg-white p-6 rounded-lg border border-[#9B7E6B]">
                  <div className="text-3xl mb-3">💳</div>
                  <h4 className="text-[#6B4E3D] font-medium mb-2">GoPay / OVO</h4>
                  <div className="bg-[#E8DED0] border border-[#9B7E6B] rounded p-3 font-mono text-[#6B4E3D] mb-2">
                    0812-3456-7890
                  </div>
                  <p className="text-xs text-[#9B7E6B]">a.n. Nadda Wijaya</p>
                  <button className="mt-4 border border-[#6B4E3D] text-[#6B4E3D] px-4 py-2 rounded-full hover:bg-[#6B4E3D] hover:text-white transition text-sm">
                    Salin Nomor
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-[#6B4E3D] text-[#E8DED0] py-12 px-6 text-center">
            <h3 className="text-2xl mb-2">Nadda & Naufal</h3>
            <p className="text-sm mb-6">Terima kasih atas doa dan kehadiran Anda</p>
            <p className="text-xs opacity-70">© 2025 Wedding Invitation</p>
          </footer>

        </div>
      )}
      
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  )
}