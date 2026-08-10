import { useEffect, useState } from 'react'
import Logo from './components/Logo.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import FormField from './components/FormField.jsx'

const team = [
  ['Andi Pratama', 'Chief Executive Officer', 'Leadership', 'team-andi.png'],
  ['Sari Wulandari', 'Head of Strategy', 'Business & Strategy', 'team-sari.png'],
  ['Reza Mahendra', 'Creative Director', 'Creative Studio', 'team-reza.png'],
  ['Maya Kurnia', 'Product Lead', 'Product & Technology', 'team-maya.png'],
  ['Budi Santoso', 'Engineering Lead', 'Product & Technology', 'team-budi.png'],
  ['Dina Aulia', 'People & Culture Lead', 'People Operations', 'team-dina.png'],
]

const services = [
  ['⌘', 'Strategi Digital', 'Menerjemahkan tujuan bisnis menjadi peta jalan digital yang terukur dan realistis.'],
  ['◈', 'Produk & Platform', 'Membangun website, aplikasi, dan sistem yang nyaman digunakan serta siap berkembang.'],
  ['↗', 'Pertumbuhan Brand', 'Menghidupkan komunikasi brand agar lebih relevan, kuat, dan mudah diingat.'],
]

function App() {
  const [open, setOpen] = useState(false)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); reveal.unobserve(entry.target) }
    }), { threshold: 0.14 })
    const stats = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target; const target = Number(el.dataset.target); const suffix = el.dataset.suffix || ''; const start = performance.now()
      const tick = now => { const progress = Math.min((now - start) / 1200, 1); el.textContent = Math.floor(progress * target).toLocaleString('id-ID') + suffix; if (progress < 1) requestAnimationFrame(tick) }
      requestAnimationFrame(tick); stats.unobserve(el)
    }), { threshold: 0.7 })
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el))
    document.querySelectorAll('.stat-number').forEach(el => stats.observe(el))
    const onScroll = () => document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll()
    return () => { reveal.disconnect(); stats.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const closeMenu = () => setOpen(false)
  const handleSubmit = event => { event.preventDefault(); setSent(true); event.currentTarget.reset() }

  return <>
    <header className="navbar" id="navbar"><div className="container">
      <Logo />
      <button className={`hamburger ${open ? 'active' : ''}`} onClick={() => setOpen(!open)} aria-label="Buka menu" aria-expanded={open}><span /><span /><span /></button>
      <nav className={`nav-menu ${open ? 'open' : ''}`}><a className="nav-link active" href="#beranda" onClick={closeMenu}>Beranda</a><a className="nav-link" href="#tentang" onClick={closeMenu}>Tentang</a><a className="nav-link" href="#visi-misi" onClick={closeMenu}>Visi & Misi</a><a className="nav-link" href="#layanan" onClick={closeMenu}>Layanan</a><a className="nav-link" href="#tim" onClick={closeMenu}>Tim</a><a className="nav-cta" href="#kontak" onClick={closeMenu}>Hubungi Kami</a></nav>
    </div></header>
    {open && <div className="menu-overlay active" onClick={closeMenu} />}
    <main>
      <section className="hero" id="beranda"><div className="hero-particles" aria-hidden="true">{[8, 22, 47, 69, 88].map((left, index) => <span className="particle" key={left} style={{ left: `${left}%`, animationDuration: `${12 + index * 2}s`, animationDelay: `${index}s` }} />)}</div><div className="container"><div className="hero-content"><div className="hero-badge"><span className="dot" /> Mitra digital untuk masa depan</div><h1>Mengubah ide menjadi <span className="highlight">dampak nyata.</span></h1><p className="hero-description">Kami membantu bisnis Indonesia tumbuh melalui strategi, teknologi, dan talenta yang bekerja dalam satu arah.</p><div className="hero-actions"><a className="btn-primary" href="#tentang">Jelajahi Perjalanan Kami <span>→</span></a><a className="btn-secondary" href="#kontak">Bicara dengan Kami <span>↗</span></a></div></div></div></section>
      <section className="about" id="tentang"><div className="container"><div className="about-grid"><div className="about-text reveal"><span className="section-label">Tentang kami</span><h3>Teknologi yang terasa dekat dengan manusia.</h3><p>PT Nusantara Digital adalah perusahaan teknologi yang tumbuh bersama ambisi para pelaku usaha di Indonesia. Kami percaya kemajuan terbaik lahir ketika inovasi dibuat sederhana, relevan, dan mudah diakses.</p><p>Dari strategi awal hingga produk siap pakai, tim lintas disiplin kami hadir sebagai partner yang bergerak bersama Anda.</p></div><div className="about-stats reveal reveal-delay-2">{[[8, '+', 'Tahun berkarya'], [120, '+', 'Proyek selesai'], [35, '+', 'Talenta hebat'], [18, '', 'Kota terjangkau']].map(([number, suffix, label]) => <div className="stat-card" key={label}><div className="stat-number" data-target={number} data-suffix={suffix}>0</div><div className="stat-label">{label}</div></div>)}</div></div></div></section>
      <section className="visi-misi" id="visi-misi"><div className="container"><SectionHeader label="Arah kami" title="Menata masa depan, bersama." text="Kami berjalan dengan tujuan yang jelas agar setiap solusi meninggalkan dampak yang berarti." /><div className="vm-grid"><article className="vm-card reveal"><div className="vm-icon">✦</div><h3>Visi</h3><p>Menjadi mitra transformasi digital terpercaya yang membuka peluang pertumbuhan bagi setiap bisnis di Indonesia.</p></article><article className="vm-card reveal reveal-delay-2"><div className="vm-icon">◎</div><h3>Misi</h3><ul><li>Menciptakan solusi digital yang sederhana dan berdampak.</li><li>Membangun kolaborasi yang transparan dengan setiap mitra.</li><li>Mengembangkan talenta yang berani belajar dan berbagi.</li></ul></article></div></div></section>
      <section className="services" id="layanan"><div className="container"><SectionHeader label="Yang kami lakukan" title="Dari gagasan sampai bertumbuh." text="Layanan yang saling terhubung untuk memberi langkah yang lebih pasti bagi bisnis Anda." /><div className="services-grid">{services.map(([icon, title, text], i) => <article className={`service-card reveal reveal-delay-${i}`} key={title}><div className="service-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
      <section className="team" id="tim"><div className="container"><SectionHeader label="Orang-orang kami" title="Bertemu dengan tim di balik karya." text="Beragam keahlian, satu semangat: menciptakan perubahan yang berarti." /><div className="team-grid">{team.map(([name, role, division, photo], i) => <article className={`team-card reveal reveal-delay-${i % 3}`} key={name}><div className="team-card-img"><img src={`/assets/images/${photo}`} alt={name} /></div><div className="team-card-info"><h3>{name}</h3><p className="role">{role}</p><p className="division">{division}</p></div></article>)}</div></div></section>
      <section className="contact" id="kontak"><div className="container"><SectionHeader label="Mari terhubung" title="Ada ide yang ingin diwujudkan?" text="Sampaikan kebutuhan Anda. Tim kami akan menghubungi dalam satu hari kerja." /><div className="contact-grid"><div className="contact-info reveal"><Contact icon="☎" title="Nomor Pelayanan" detail={<>+62 21 5550 1234<br />Senin–Jumat, 09.00–17.00 WITA</>} href="tel:+622155501234" /><Contact icon="✉" title="Email" detail={<>hello@nusantaradigital.id<br />Untuk pertanyaan dan kerja sama</>} href="mailto:hello@nusantaradigital.id" /><Contact icon="⌖" title="Kantor Kami" detail={<>Jl. Sunset Road No. 88, Kuta<br />Badung, Bali 80361</>} /></div><form className="contact-form reveal reveal-delay-2" onSubmit={handleSubmit}><div className="form-row"><FormField name="name" label="Nama" placeholder="Nama Anda" /><FormField name="email" label="Email" type="email" placeholder="nama@email.com" /></div><div className="form-group"><label htmlFor="message">Ceritakan kebutuhan Anda</label><textarea id="message" name="message" required placeholder="Saya ingin berdiskusi tentang..." /></div><button className="btn-submit" type="submit">Kirim Pesan <span>→</span></button><p className="form-status" role="status">{sent && 'Terima kasih! Pesan Anda telah kami terima.'}</p></form></div></div></section>
    </main>
    <footer className="footer"><div className="container"><div className="footer-bottom"><p>© 2026 PT Nusantara Digital. Seluruh hak dilindungi.</p><p>Dibuat dengan semangat untuk Indonesia.</p></div></div></footer>
  </>
}

function Contact({ icon, title, detail, href }) { const content = <><div className="contact-info-icon">{icon}</div><div className="contact-info-text"><h4>{title}</h4><p>{detail}</p></div></>; return href ? <a className="contact-info-card" href={href}>{content}</a> : <div className="contact-info-card">{content}</div> }

export default App
