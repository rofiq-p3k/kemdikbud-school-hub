
import React from 'react';
import { BookOpen, Monitor, FlaskConical, Users, Trophy, Wifi } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: BookOpen,
      title: 'Perpustakaan Digital',
      description: 'Koleksi buku lengkap dengan sistem digital modern'
    },
    {
      icon: Monitor,
      title: 'Lab Komputer',
      description: '3 laboratorium komputer dengan 120 unit PC terbaru'
    },
    {
      icon: FlaskConical,
      title: 'Lab IPA',
      description: 'Laboratorium Fisika, Kimia, dan Biologi lengkap'
    },
    {
      icon: Users,
      title: 'Ruang Kelas',
      description: '36 ruang kelas ber-AC dengan fasilitas multimedia'
    },
    {
      icon: Trophy,
      title: 'Aula Serbaguna',
      description: 'Kapasitas 500 orang untuk berbagai kegiatan'
    },
    {
      icon: Wifi,
      title: 'WiFi Gratis',
      description: 'Akses internet cepat di seluruh area sekolah'
    }
  ];

  return (
    <section id="fasilitas" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Fasilitas Sekolah</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fasilitas modern dan lengkap untuk mendukung proses pembelajaran yang optimal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-3 rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <facility.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
