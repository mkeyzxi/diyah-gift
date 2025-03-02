import {useState} from 'react'
import HeaderNavLayout from "../components/Layouts/HeaderNavLayout";
import CardProductLayout from "../components/Layouts/CardProductLayout";
const GaleriPage = () => {
  const [titleHeaderState,setTitleHeaderState] = useState('Semua');
  return (
	<div className="container mx-auto justify-center items-center space-y-16 md:space-y-10 px-2 md:px-20 mt-20">
    
    <HeaderNavLayout headerTitle={`Menampilkan ${titleHeaderState}`}> 
      <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('Semua')}>Semua</span>
      <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('Selempang')}>Selempang</span>
      <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('Buket')}>Buket</span>
      <span className="text-[var(--pinkSecondary)] cursor-pointer" onClick={() => setTitleHeaderState('Lainnya')}>Lainnya</span>
    </HeaderNavLayout>
    <div className="flex flex-wrap gap-5 justify-center items-center">
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    <CardProductLayout path='../public/image/buket/ImageBuket10.webp' judul='Buket Doraemon' price='100.000'/>
    </div>
  </div>
  )
}

export default GaleriPage