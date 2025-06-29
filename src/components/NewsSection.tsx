
import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const news = [
    {
      title: 'Penerimaan Peserta Didik Baru (PPDB) 2024',
      excerpt: 'Pendaftaran PPDB tahun ajaran 2024/2025 telah dibuka. Daftarkan segera putra-putri terbaik Anda.',
      date: '15 Juni 2024',
      time: '10:00',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Prestasi Siswa SMA Negeri 1 Cikampek di Olimpiade Sains',
      excerpt: 'Tim Olimpiade Sains berhasil meraih medali emas dalam kompetisi tingkat provinsi.',
      date: '10 Juni 2024',
      time: '14:30',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Program Magang Siswa di Industri Teknologi',
      excerpt: 'Kerjasama dengan perusahaan teknologi untuk memberikan pengalaman kerja nyata kepada siswa.',
      date: '5 Juni 2024',
      time: '09:15',
      image: '/api/placeholder/400/250'
    }
  ];

  return (
    <section id="berita" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Berita & Pengumuman</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">
            Informasi terkini seputar kegiatan dan prestasi sekolah
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-blue-400 to-green-400 h-48 flex items-center justify-center">
                  <div className="text-white text-6xl opacity-20">📰</div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center text-sm text-gray-700">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {item.time}
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-green-600 transition-colors duration-200">
            Lihat Semua Berita
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
