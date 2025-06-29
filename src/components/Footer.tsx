
import React from 'react';
import { School, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo dan Info Sekolah */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-full">
                <School className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">SMA NEGERI 1 CIKAMPEK</h3>
                <p className="text-gray-400">Unggul dalam Prestasi, Berkarakter Mulia</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Mewujudkan generasi yang unggul dalam prestasi akademik dan non-akademik, 
              berkarakter mulia, serta siap menghadapi tantangan global.
            </p>
            <div className="text-sm text-gray-400">
              <p>Jl. Veteran No. 1, Cikampek, Karawang, Jawa Barat</p>
              <p>Telepon: (0267) 431234</p>
              <p>Email: info@sman1cikampek.sch.id</p>
            </div>
          </div>

          {/* Menu Cepat */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#beranda" className="hover:text-white transition-colors duration-200">Beranda</a></li>
              <li><a href="#profil" className="hover:text-white transition-colors duration-200">Profil</a></li>
              <li><a href="#visi-misi" className="hover:text-white transition-colors duration-200">Visi & Misi</a></li>
              <li><a href="#fasilitas" className="hover:text-white transition-colors duration-200">Fasilitas</a></li>
              <li><a href="#berita" className="hover:text-white transition-colors duration-200">Berita</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors duration-200">Kontak</a></li>
            </ul>
          </div>

          {/* Info Tambahan */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">PPDB</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">E-Learning</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Perpustakaan</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Prestasi</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Alumni</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Download</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 SMA Negeri 1 Cikampek. Semua hak dilindungi undang-undang.
            </p>
            <p className="text-gray-400 text-sm flex items-center mt-2 md:mt-0">
              Dibuat dengan <Heart className="h-4 w-4 text-red-500 mx-1" /> untuk pendidikan Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
