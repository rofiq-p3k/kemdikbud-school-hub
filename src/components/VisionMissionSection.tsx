
import React from 'react';
import { Target, Eye, Star } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section id="visi-misi" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Visi */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-full">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Visi</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              "Mewujudkan siswa yang unggul dalam prestasi, berkarakter mulia, 
              berbudaya lingkungan, dan berwawasan global"
            </p>
          </div>

          {/* Misi */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-green-600 to-blue-500 p-3 rounded-full">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 ml-4">Misi</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span>Menyelenggarakan pembelajaran yang berkualitas dan inovatif</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span>Mengembangkan potensi siswa melalui kegiatan akademik dan non-akademik</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span>Menanamkan nilai-nilai karakter dan budi pekerti</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span>Menciptakan lingkungan sekolah yang kondusif dan ramah lingkungan</span>
              </li>
              <li className="flex items-start">
                <Star className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <span>Mempersiapkan siswa menghadapi tantangan era globalisasi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
