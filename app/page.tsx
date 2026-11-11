'use client';

import React, { useState } from 'react';
import {
  Search,
  Mic,
  Home as HomeIcon,
  Briefcase,
  Utensils,
  Layers,
  Crosshair,
  MapPin,
  ChevronRight,
  ChevronLeft,
  Bookmark,
  Clock,
  User,
  Car,
  Bike,
  Footprints,
  ArrowUpRight,
  Volume2,
  Navigation as NavIcon,
  RotateCcw
} from 'lucide-react';

export default function Home() {
  // สเตตควบคุมหน้าปัจจุบัน: 1 = Welcome, 2 = Map Search, 3 = Route Planning, 4 = Turn-by-Turn Navigation
  const [screen, setScreen] = useState<number>(1);
  const [selectedRoute, setSelectedRoute] = useState<number>(0);
  const [transportMode, setTransportMode] = useState<'car' | 'bike' | 'walk'>('car');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 p-4 font-sans text-gray-800">
      
      {/* แถบสลับหน้าสำหรับทดสอบ (Control Bar) */}
      <div className="mb-4 flex flex-wrap gap-2 justify-center bg-gray-800 p-2 rounded-xl text-xs md:text-sm shadow-lg">
        <button
          onClick={() => setScreen(1)}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${screen === 1 ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          1. หน้าต้อนรับ
        </button>
        <button
          onClick={() => setScreen(2)}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${screen === 2 ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          2. ค้นหาบนแผนที่
        </button>
        <button
          onClick={() => setScreen(3)}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${screen === 3 ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          3. เลือกเส้นทาง
        </button>
        <button
          onClick={() => setScreen(4)}
          className={`px-3 py-1.5 rounded-lg font-medium transition ${screen === 4 ? 'bg-emerald-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
        >
          4. โหมดนำทางจริง
        </button>
      </div>

      {/* กรอบมือถือ (Mobile Frame) */}
      <div className="relative w-full max-w-[380px] h-[780px] bg-white rounded-[40px] shadow-2xl border-[8px] border-gray-950 overflow-hidden flex flex-col">
        
        {/* Status Bar */}
        <div className="flex justify-between items-center px-6 pt-3 pb-2 text-xs font-semibold z-50 select-none bg-transparent">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px]">5G</span>
            <div className="w-5 h-2.5 border border-current rounded-sm p-[1px] flex items-center">
              <div className="w-full h-full bg-current rounded-px"></div>
            </div>
          </div>
        </div>

        {/* ------------------- SCREEN 1: WELCOME SCREEN ------------------- */}
        {screen === 1 && (
          <div className="flex-1 flex flex-col justify-between relative bg-gradient-to-b from-sky-100 via-emerald-50 to-emerald-100 p-6 text-center">
            <div className="relative z-10 pt-12 flex flex-col items-center">
              <div className="relative mb-4 flex items-center justify-center">
                <div className="w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-emerald-600/30">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <NavIcon className="w-10 h-10 text-emerald-600 fill-emerald-600 transform rotate-45" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                Go<span className="text-emerald-600">Navigate</span>
              </h1>
              <p className="text-xs text-gray-600 mt-2 font-medium">
                นำทางได้ทุกที่ ไปได้ทุกเส้นทาง
              </p>
            </div>

            <div 
              className="relative z-10 w-full h-44 rounded-2xl overflow-hidden shadow-sm my-auto bg-cover bg-center"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent"></div>
            </div>

            <div className="relative z-10 pb-4 space-y-3">
              <button
                onClick={() => setScreen(2)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition active:scale-95"
              >
                เริ่มต้นใช้งาน
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => setScreen(2)}
                className="text-xs font-semibold text-gray-600 hover:text-emerald-700 block mx-auto underline decoration-gray-400"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        )}

        {/* ------------------- SCREEN 2: MAP SEARCH ------------------- */}
        {screen === 2 && (
          <div className="flex-1 flex flex-col relative bg-slate-200">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80')` }}
            >
              <svg className="absolute inset-0 w-full h-full stroke-blue-500 fill-none" strokeWidth="6" strokeLinecap="round">
                <path d="M 120 380 Q 180 300 240 200" />
              </svg>
              
              <div className="absolute top-[190px] right-[130px] flex flex-col items-center animate-bounce">
                <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center text-white shadow-md">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
              </div>

              <div className="absolute top-[370px] left-[110px] w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center animate-pulse">
                <div className="w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-md"></div>
              </div>
            </div>

            <div className="relative z-10 p-4 space-y-3">
              <div className="flex items-center bg-white rounded-2xl shadow-md px-3 py-2.5 gap-2 border border-gray-100">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ค้นหาสถานที่..."
                  className="w-full text-sm outline-none text-gray-700 bg-transparent placeholder-gray-400"
                  defaultValue="สุโขทัย"
                />
                <Mic className="w-5 h-5 text-gray-400 cursor-pointer" />
              </div>

              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm text-gray-700 whitespace-nowrap">
                  <HomeIcon className="w-3.5 h-3.5 text-emerald-600" /> บ้าน
                </button>
                <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm text-gray-700 whitespace-nowrap">
                  <Briefcase className="w-3.5 h-3.5 text-emerald-600" /> ที่ทำงาน
                </button>
                <button className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm text-gray-700 whitespace-nowrap">
                  <Utensils className="w-3.5 h-3.5 text-emerald-600" /> ร้านอาหาร
                </button>
              </div>
            </div>

            <div className="absolute right-4 top-40 z-10 flex flex-col gap-2">
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600">
                <Layers className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600">
                <Crosshair className="w-5 h-5 text-blue-600" />
              </button>
            </div>

            <div className="mt-auto relative z-10 bg-white rounded-t-3xl p-4 shadow-xl border-t border-gray-100">
              <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-3"></div>
              
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setScreen(3)}>
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden bg-emerald-100 flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=200&q=80"
                      alt="วัดมหาธาตุ"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-xs text-emerald-600 font-medium">
                      <MapPin className="w-3.5 h-3.5 fill-emerald-600" /> ใกล้คุณ
                    </div>
                    <h3 className="text-sm font-bold text-gray-800">วัดมหาธาตุ</h3>
                    <p className="text-xs text-gray-500">800 ม.</p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-1 pt-4 mt-3 border-t border-gray-100 text-center text-xs">
                <button className="flex flex-col items-center gap-1 text-emerald-600 font-semibold">
                  <NavIcon className="w-5 h-5" />
                  หน้าหลัก
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <Bookmark className="w-5 h-5" />
                  รายการโปรด
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <Clock className="w-5 h-5" />
                  ประวัติ
                </button>
                <button className="flex flex-col items-center gap-1 text-gray-400">
                  <User className="w-5 h-5" />
                  โปรไฟล์
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ------------------- SCREEN 3: ROUTE SELECTION ------------------- */}
        {screen === 3 && (
          <div className="flex-1 flex flex-col bg-gray-50 relative p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200">
              <button onClick={() => setScreen(2)} className="p-1 rounded-full hover:bg-gray-200">
                <ChevronLeft className="w-6 h-6 text-gray-700" />
              </button>
              <h2 className="text-base font-bold text-gray-800">เส้นทางการนำทาง</h2>
              <button className="p-1">
                <Bookmark className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 mt-3 relative">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                  <div className="w-0.5 h-6 bg-gray-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs text-gray-700 font-medium">
                    ตำแหน่งปัจจุบัน
                  </div>
                  <div className="bg-gray-50 px-3 py-1.5 rounded-lg text-xs text-gray-800 font-semibold">
                    เซ็นทรัล สุโขทัย
                  </div>
                </div>
                <button className="p-2 text-gray-400">
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4">
              <button
                onClick={() => setTransportMode('car')}
                className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition ${
                  transportMode === 'car' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <Car className="w-4 h-4" /> รถยนต์
              </button>
              <button
                onClick={() => setTransportMode('bike')}
                className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition ${
                  transportMode === 'bike' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <Bike className="w-4 h-4" /> มอเตอร์ไซค์
              </button>
              <button
                onClick={() => setTransportMode('walk')}
                className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition ${
                  transportMode === 'walk' ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-gray-600 border border-gray-200'
                }`}
              >
                <Footprints className="w-4 h-4" /> เดินเท้า
              </button>
            </div>

            <div className="mt-4 space-y-3 flex-1 overflow-y-auto">
              {[
                { time: '12 นาที', dist: '5.8 กม.', tag: 'แนะนำ' },
                { time: '14 นาที', dist: '6.2 กม.', tag: 'เลี่ยงเมือง' },
                { time: '16 นาที', dist: '7.1 กม.', tag: 'สายหลัก' },
              ].map((route, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedRoute(idx)}
                  className={`p-4 rounded-2xl border transition cursor-pointer flex items-center justify-between ${
                    selectedRoute === idx
                      ? 'bg-emerald-50/60 border-emerald-500 shadow-sm'
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Car className={`w-5 h-5 ${selectedRoute === idx ? 'text-emerald-600' : 'text-gray-400'}`} />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-base font-bold text-gray-800">{route.time}</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                          {route.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">{route.dist}</p>
                    </div>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                    selectedRoute === idx ? 'border-emerald-600 bg-emerald-600' : 'border-gray-300'
                  }`}>
                    {selectedRoute === idx && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setScreen(4)}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold shadow-lg shadow-emerald-600/30 transition active:scale-95"
              >
                เริ่มนำทาง
              </button>
            </div>
          </div>
        )}

        {/* ------------------- SCREEN 4: LIVE NAVIGATION ------------------- */}
        {screen === 4 && (
          <div className="flex-1 flex flex-col relative bg-slate-900 overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center filter contrast-105"
              style={{ backgroundImage: `url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=800&q=80')` }}
            >
              <svg className="absolute inset-0 w-full h-full stroke-blue-500/90 fill-none" strokeWidth="12" strokeLinecap="round">
                <path d="M 190 700 L 190 450 C 190 400 240 380 270 350 L 330 300" />
              </svg>

              <div className="absolute bottom-[240px] left-[170px] transform -rotate-12 flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white border-4 border-white shadow-2xl animate-pulse">
                  <NavIcon className="w-5 h-5 fill-white" />
                </div>
              </div>
            </div>

            <div className="relative z-10 m-4 bg-emerald-700 text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-emerald-600/50">
              <div className="bg-white/20 p-2.5 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="w-8 h-8 text-white transform -scale-x-100" />
              </div>
              <div>
                <div className="text-xl font-black tracking-wide">300 เมตร</div>
                <div className="text-xs font-medium text-emerald-100">เลี้ยวขวา เข้าถนนหลัก</div>
              </div>
            </div>

            <div className="absolute right-4 top-36 z-10 flex flex-col gap-3">
              <button className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-700">
                <Volume2 className="w-5 h-5" />
              </button>
              <button className="w-11 h-11 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center text-gray-700">
                <NavIcon className="w-5 h-5 text-blue-600 transform rotate-45" />
              </button>
            </div>

            <div className="mt-auto relative z-10 bg-white p-5 rounded-t-3xl shadow-2xl flex items-center justify-between">
              <div>
                <div className="text-xl font-extrabold text-gray-800">12 นาที</div>
                <div className="text-xs text-gray-500 font-medium">
                  5.8 กม. • ถึง 09:53 น.
                </div>
              </div>

              <button
                onClick={() => setScreen(3)}
                className="px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-red-600 rounded-full text-xs font-bold transition border border-gray-200"
              >
                หยุดนำทาง
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}