
import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section id="profil" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Profil Sekolah</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Identitas Sekolah</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <School className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Nama Sekolah</p>
                  <p className="text-gray-600">SMA NEGERI 1 CIKAMPEK</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Alamat</p>
                  <p className="text-gray-600">Jl. Veteran No. 1, Cikampek, Karawang, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Telepon</p>
                  <p className="text-gray-600">(0267) 431234</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">info@sman1cikampek.sch.id</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Calendar className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">Didirikan</p>
                  <p className="text-gray-600">1985</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Kepala Sekolah</h4>
              <p className="text-gray-600">Drs. Ahmad Suherman, M.Pd</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">Status Sekolah</h4>
              <p className="text-gray-600">Negeri - Terakreditasi A</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-3">NPSN</h4>
              <p className="text-gray-600">20219855</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
