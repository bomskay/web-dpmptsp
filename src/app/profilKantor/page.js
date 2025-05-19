import React from 'react'
import Sejarah from '@/components/profil-kantor/sejarah'
import StrukturOrganisasi from '@/components/profil-kantor/struktur'
import TugasFungsi from '@/components/profil-kantor/tugas'

function profilPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 text-gray-800">
      <Sejarah/>
      <StrukturOrganisasi/>
      <TugasFungsi/>
    </div>
  )
}

export default profilPage