import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Homecard } from './home.card';
import { FaApple, FaGooglePlay, FaInstagramSquare, FaTelegram, FaFacebook, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div className='min-h-screen bg-white font-sans text-gray-800 overflow-x-hidden'>
      
   
      <div className='bg-gray-100 py-2 text-sm text-gray-600'>
        <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center'>
          <div className='flex gap-5'>
            <p className='font-bold cursor-pointer'>Topshirish punktlari</p>
            <p className='text-purple-600 cursor-pointer hover:underline'>Sotuvchi bo'lish</p>
            <p className='text-purple-600 cursor-pointer hover:underline'>Topshirish punktini ochish</p>
          </div>
          <div className='flex gap-6'>
            <p className='cursor-pointer hover:text-black'>Savol-javob</p>
            <p className='cursor-pointer hover:text-black'>Buyurtmalarim</p>
            <p className='cursor-pointer hover:text-black font-medium'>O'zbekiston</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto px-4 py-5 flex items-center justify-between gap-6">

        <div className="text-2xl font-bold text-purple-700 cursor-pointer tracking-tight whitespace-nowrap">
          uzum market
        </div>

    
        <button className="bg-purple-100 text-purple-700 font-semibold px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-purple-200 transition-colors whitespace-nowrap">
          <span>☰</span> Katalog
        </button>

     
        <div className="flex-1 flex border border-gray-300 rounded-lg overflow-hidden max-w-2xl focus-within:border-purple-500 transition-colors">
          <input 
            type="text" 
            placeholder="Mahsulotlar va turkumlar izlash" 
            className="w-full px-4 py-2 outline-none text-base"
          />
          <button className="bg-gray-100 px-5 text-xl text-gray-500 hover:bg-gray-200 transition-colors">
            <CiSearch />
          </button>
        </div>

        <div className="flex items-center gap-6 text-gray-700 font-medium whitespace-nowrap">
          <div className="cursor-pointer hover:text-purple-700">Kirish</div>
          <div className="cursor-pointer hover:text-purple-700">Saralangan</div>
          <div className="cursor-pointer hover:text-purple-700">Savat</div>
        </div>
      </div>

   
      <div className='max-w-[1240px] mx-auto px-4 py-2 border-b border-gray-100 flex items-center justify-between gap-4 text-sm text-gray-600 overflow-x-auto whitespace-nowrap scrollbar-none'>
        <p className='font-bold text-black border-b-2 border-black pb-1 cursor-pointer'>Arzon narxlar kafolati</p>
        <p className='cursor-pointer hover:text-black'>Mebel</p>
        <p className='cursor-pointer hover:text-black'>Turizm, baliq ovi</p>
        <p className='cursor-pointer hover:text-black'>Elektronika</p>
        <p className='cursor-pointer hover:text-black'>Maishiy texnika</p>
        <p className='cursor-pointer hover:text-black'>Kiyim</p>
        <p className='cursor-pointer hover:text-black'>Poyabzallar</p>
        <p className='cursor-pointer hover:text-black'>Aksessuarlar</p>
        <p className='cursor-pointer hover:text-black'>Go'zallik va parvarish</p>
        <p className='cursor-pointer hover:text-black'>Salomatlik</p>
        <p className='cursor-pointer hover:text-black'>Yana</p>
      </div>


      <div className='max-w-[1240px] mx-auto px-4 mt-8'>
        <div className='grid grid-cols-5 gap-4'>
          {Homecard.map((item, index) => (
            <div key={item.id || index} className='bg-white rounded-xl overflow-hidden hover:shadow-md transition-shadow border border-gray-100 p-2 flex flex-col justify-between cursor-pointer group'>
              <div>
     
                <div className='w-full h-[220px] rounded-lg overflow-hidden bg-gray-50'>
                  <img src={item.img} alt={item.malumot} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                </div>
            
                <p className='text-sm text-gray-800 line-clamp-2 mt-3 h-10 leading-tight'>
                  <p className='font-bold text-base text-gray-900'>{item.narxi} so'm</p>
                  <span className='font-semibold'>{item.malumot}</span> {item.malumot2}
                </p>
                <p className='text-xs text-gray-400 mt-1'>{item.sharh}</p>
                <p className='bg-yellow-300 text-xs font-semibold px-2 py-0.5 rounded mt-2 inline-block'>
                  {item.oyiga}
                </p>
              </div>
              
             
              <div className='mt-4 flex items-center justify-between'>
                
                <button className='bg-purple-600 hover:bg-purple-700 w-full text-white text-xs px-3 py-2 rounded-lg transition-colors'>
                  {item.buton}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

   
      <div className='max-w-[900px] mx-auto px-4 mt-8'>
  
        <button className='w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-3 rounded-xl font-medium transition-colors text-center'>
          Yana ko'rsatish 10
        </button>
      </div>


      
      <footer className='bg-gray-50 border-t border-gray-200 mt-20 py-12 text-sm text-gray-600'>
        <div className='max-w-[1240px] mx-auto px-4 grid grid-cols-4 gap-8'>
          
  
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-gray-900 text-base'>Biz haqimizda</h3>
            <p className='hover:text-black cursor-pointer'>Topshirish punktlari</p>
            <p className='hover:text-black cursor-pointer'>Vakansiyalar</p>
          </div>

   
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-gray-900 text-base'>Foydalanuvchilar</h3>
            <p className='hover:text-black cursor-pointer'>Biz bilan bog'lanish</p>
            <p className='hover:text-black cursor-pointer'>Savol-javob</p>
          </div>

      
          <div className='flex flex-col gap-3'>
            <h3 className='font-bold text-gray-900 text-base'>Tadbirkorlar</h3>
            <p className='hover:text-black cursor-pointer'>Uzumda soting</p>
            <p className='hover:text-black cursor-pointer'>Sotuvchi kabinetiga kirish</p>
            <p className='hover:text-black cursor-pointer'>Topshirish punktini ochish</p>
          </div>

       
          <div className='flex flex-col gap-4'>
            <div>
              <h3 className='font-bold text-gray-900 text-base mb-3'>Ilovani yuklab olish</h3>
              <div className='flex gap-3'>
                <button className='flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:shadow-sm transition-shadow text-xs font-medium'>
                  <FaApple className='text-lg' /> App Store
                </button>
                <button className='flex items-center gap-2 bg-white border border-gray-300 px-3 py-1.5 rounded-lg hover:shadow-sm transition-shadow text-xs font-medium'>
                  <FaGooglePlay className='text-base' /> Google Play
                </button>
              </div>
            </div>

            <div>
              <h3 className='font-bold text-gray-900 text-sm mb-2'>Uzum ijtimoiy tarmoqlarda</h3>
              <div className='flex gap-3 text-gray-500'>
                <FaInstagramSquare className='w-8 h-8 hover:text-pink-600 cursor-pointer transition-colors' />
                <FaTelegram className='w-8 h-8 hover:text-blue-500 cursor-pointer transition-colors' />
                <FaFacebook className='w-8 h-8 hover:text-blue-700 cursor-pointer transition-colors' />
                <FaYoutube className='w-8 h-8 hover:text-red-600 cursor-pointer transition-colors' />
              </div>
            </div>
          </div>

        </div>
      </footer>

    </div>
  )
}

export default App;