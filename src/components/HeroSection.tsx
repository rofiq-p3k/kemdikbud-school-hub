
import React from 'react';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="beranda" className="bg-gradient-to-br from-blue-600 via-blue-500 to-green-500 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Selamat Datang di
              <span className="block text-yellow-300">SMA NEGERI 1 CIKAMPEK</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Mewujudkan generasi yang unggul dalam prestasi akademik dan non-akademik, 
              berkarakter mulia, serta siap menghadapi tantangan global.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center group">
                Profil Sekolah
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Info PPDB
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Award className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Akreditasi A</h3>
              <p className="text-blue-100">Terakreditasi dengan nilai terbaik</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">1200+ Siswa</h3>
              <p className="text-blue-100">Siswa aktif berprestasi</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <BookOpen className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">75+ Guru</h3>
              <p className="text-blue-100">Tenaga pendidik berkualitas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <School className="h-12 w-12 text-yellow-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Sejak 1985</h3>
              <p className="text-blue-100">Pengalaman mendidik</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
