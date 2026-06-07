export interface NavLink { label: string; href: string; }
export interface Stat { value: string; label: string; }
export interface FeaturePoint { icon: string; title: string; desc: string; }
export interface Service { icon: string; name: string; desc: string; price?: string; }
export interface Plan { name: string; price: string; unit?: string; desc: string; features: string[]; featured?: boolean; cta?: string; }
export interface GalleryImage { url: string; alt: string; }
export interface Testimonial { name: string; role: string; quote: string; rating: number; avatar?: string; }
export interface SiteData {
  brand: string; logoMark: string; tagline: string; whatsapp: string; phone: string; email: string; address: string; hours: string;
  social: { instagram?: string; facebook?: string; tiktok?: string };
  nav: NavLink[];
  hero: { eyebrow: string; title: string; highlight: string; subtitle: string; ctaPrimary: string; ctaSecondary: string; image: string; stats: Stat[] };
  about: { eyebrow: string; title: string; paragraphs: string[]; points: FeaturePoint[]; image: string };
  services: { eyebrow: string; title: string; subtitle: string; items: Service[] };
  pricing: { eyebrow: string; title: string; subtitle: string; plans: Plan[] };
  gallery: { eyebrow: string; title: string; subtitle: string; images: GalleryImage[] };
  testimonials: { eyebrow: string; title: string; subtitle: string; items: Testimonial[] };
  contact: { eyebrow: string; title: string; subtitle: string };
}

export const site: SiteData = {
  brand: 'FitZone',
  logoMark: 'FZ',
  tagline: 'Gym & fitness studio — wujudkan versi terbaikmu',
  whatsapp: '6281234567808',
  phone: '0812-3456-7808',
  email: 'join@fitzone.id',
  address: 'Jl. Pemuda No. 45, Bogor, Jawa Barat',
  hours: 'Setiap hari 06.00 – 22.00',
  social: { instagram: '@fitzone.id', tiktok: '@fitzone', facebook: 'FitZone Gym' },
  nav: [
    { label: 'Tentang', href: '#about' },
    { label: 'Kelas', href: '#services' },
    { label: 'Membership', href: '#pricing' },
    { label: 'Galeri', href: '#gallery' },
    { label: 'Testimoni', href: '#testimonials' },
    { label: 'Gabung', href: '#contact' },
  ],
  hero: {
    eyebrow: 'Alat lengkap · PT bersertifikat · Kelas grup',
    title: 'Bangun tubuh kuat,',
    highlight: 'mental lebih tangguh',
    subtitle:
      'FitZone bukan sekadar gym — ini komunitas yang mendorongmu jadi lebih baik tiap hari. Alat lengkap, personal trainer berpengalaman, dan kelas seru untuk semua level.',
    ctaPrimary: 'Mulai Sekarang',
    ctaSecondary: 'Lihat Kelas',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop',
    stats: [
      { value: '2.000+', label: 'Member aktif' },
      { value: '30+', label: 'Kelas/minggu' },
      { value: '4.9/5', label: 'Rating member' },
    ],
  },
  about: {
    eyebrow: 'Tentang FitZone',
    title: 'Tempatmu bertumbuh, bukan sekadar berkeringat',
    paragraphs: [
      'FitZone hadir untuk siapa saja — dari pemula yang baru mulai sampai atlet yang serius. Kami percaya kebugaran adalah perjalanan, dan kamu tak perlu menempuhnya sendirian.',
      'Dengan alat modern, trainer bersertifikat, dan komunitas yang suportif, kami bantu kamu mencapai target dengan cara yang aman dan menyenangkan.',
    ],
    points: [
      { icon: 'dumbbell', title: 'Alat Lengkap', desc: 'Free weight & machine terbaru.' },
      { icon: 'flame', title: 'Personal Trainer', desc: 'Program latihan personal sesuai target.' },
      { icon: 'heart', title: 'Kelas Grup', desc: 'Yoga, HIIT, Muay Thai, Zumba, & lainnya.' },
      { icon: 'clock', title: 'Buka Panjang', desc: 'Latihan pagi atau malam, sesuka kamu.' },
    ],
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1200&auto=format&fit=crop',
  },
  services: {
    eyebrow: 'Kelas & Program',
    title: 'Pilih caramu jadi bugar',
    subtitle: 'Beragam kelas untuk semua tujuan dan level.',
    items: [
      { icon: 'dumbbell', name: 'Strength Training', desc: 'Bangun massa otot & kekuatan terukur.', price: 'incl. membership' },
      { icon: 'flame', name: 'HIIT & Cardio', desc: 'Bakar kalori maksimal dalam waktu singkat.', price: 'incl. membership' },
      { icon: 'heart', name: 'Yoga & Pilates', desc: 'Fleksibilitas, postur, dan ketenangan.', price: 'incl. membership' },
      { icon: 'star', name: 'Muay Thai', desc: 'Bela diri sekaligus kardio intens.', price: 'incl. membership' },
      { icon: 'flame', name: 'Personal Training', desc: 'Sesi 1-on-1 dengan coach pribadi.', price: 'mulai Rp150.000/sesi' },
      { icon: 'leaf', name: 'Konsultasi Nutrisi', desc: 'Rencana makan untuk dukung latihanmu.', price: 'mulai Rp100.000' },
    ],
  },
  pricing: {
    eyebrow: 'Membership',
    title: 'Pilih paket, mulai bergerak',
    subtitle: 'Tanpa biaya tersembunyi. Bebas berhenti kapan saja.',
    plans: [
      { name: 'Daily Pass', price: 'Rp50rb', unit: '/hari', desc: 'Coba dulu', features: ['Akses gym 1 hari', 'Semua alat', 'Loker & shower', '1 kelas grup'], cta: 'Coba Sekarang' },
      { name: 'Monthly', price: 'Rp350rb', unit: '/bln', desc: 'Paling populer', features: ['Akses gym tanpa batas', 'Semua kelas grup', 'Loker pribadi', '1x konsultasi PT'], featured: true, cta: 'Gabung' },
      { name: 'Annual', price: 'Rp3jt', unit: '/thn', desc: 'Hemat 2 bulan', features: ['Semua benefit bulanan', '4 sesi PT gratis', 'Free merchandise', 'Bawa teman 4x/bulan'], cta: 'Pilih Tahunan' },
    ],
  },
  gallery: {
    eyebrow: 'Galeri',
    title: 'Suasana latihan di FitZone',
    subtitle: 'Energi, fokus, dan komunitas yang saling mendukung.',
    images: [
      { url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop', alt: 'Area gym dengan alat lengkap' },
      { url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop', alt: 'Member latihan angkat beban' },
      { url: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=800&auto=format&fit=crop', alt: 'Sesi latihan kardio' },
      { url: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=800&auto=format&fit=crop', alt: 'Kelas grup fitness' },
      { url: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop', alt: 'Personal trainer mendampingi member' },
      { url: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop', alt: 'Latihan dengan dumbbell' },
    ],
  },
  testimonials: {
    eyebrow: 'Testimoni',
    title: 'Cerita transformasi member',
    subtitle: 'Hasil nyata dari kerja keras dan dukungan komunitas.',
    items: [
      { name: 'Fajar Ramadhan', role: 'Member 1 tahun', rating: 5, quote: 'Turun 15 kg dalam 6 bulan! Trainer-nya ngerti banget cara motivasi tanpa bikin nyerah.' },
      { name: 'Citra Ayu', role: 'Member kelas yoga', rating: 5, quote: 'Kelasnya seru dan instruktur sabar. Badan jadi lebih fleksibel dan tidur lebih nyenyak.' },
      { name: 'Bima Sakti', role: 'Pemula', rating: 5, quote: 'Awalnya minder karena pemula, tapi komunitasnya ramah banget. Sekarang malah nagih latihan.' },
    ],
  },
  contact: {
    eyebrow: 'Gabung & Kontak',
    title: 'Mulai perjalanan bugarmu',
    subtitle: 'Tanya jadwal kelas, paket membership, atau jadwalkan tur gym lewat WhatsApp.',
  },
};
