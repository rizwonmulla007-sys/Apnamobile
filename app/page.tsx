"use client";
import { useState } from "react";

export default function Page() {
  const [view, setView] = useState("customer");
  const [brandFilter, setBrandFilter] = useState("");
  const [selected, setSelected] = useState<any>(null);
  const [showFee, setShowFee] = useState(false);

  const mobiles = [
    { id: 1, name: "iPhone 15 Pro", brand: "Apple", price: "450,000" },
    { id: 2, name: "Samsung S24 Ultra", brand: "Samsung", price: "380,000" },
    { id: 3, name: "Infinix Hot 40", brand: "Infinix", price: "45,000" },
  ];

  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <header className="sticky top-0 z-50 bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 py-3 flex justify-between items-center">
          <div><h1 className="text-[30px] font-black leading-none text-[#00A651]">APNA<span className="text-white">MOBILE</span></h1></div>
          <div className="flex bg-[#1A1A1A] p-1 rounded-full">
            <button onClick={() => setView('customer')} className={`px-4 py-1.5 rounded-full text-sm font-bold ${view === 'customer'? 'bg-[#00A651] text-black' : 'text-white/60'}`}>Customer</button>
            <button onClick={() => setView('seller')} className={`px-4 py-1.5 rounded-full text-sm font-bold ${view === 'seller'? 'bg-[#00A651] text-black' : 'text-white/60'}`}>Seller</button>
          </div>
        </div>
        <div className="bg-[#00A651] text-black overflow-hidden py-1 text-xs font-bold text-center">🔥 0% Fee - Sell Your Phone Free! 🔥</div>
      </header>

      {view === 'customer'? (
        <div className="max-w-7xl mx-auto lg:flex">
          <aside className="lg:w-[320px] p-4 bg-[#0F0F0F] border-r border-white/5">
            <h2 className="font-black text-[#00A651] text-xl mb-4">Filters</h2>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2">
              <button onClick={() => setBrandFilter("")} className="bg-white text-black p-3 rounded-xl font-bold">All Brands</button>
              <button onClick={() => setBrandFilter("Apple")} className="bg-zinc-800 p-3 rounded-xl">Apple</button>
              <button onClick={() => setBrandFilter("Samsung")} className="bg-zinc-800 p-3 rounded-xl">Samsung</button>
            </div>
            {brandFilter && <div className="mt-6 bg-black border border-white/10 p-3 rounded-xl">Filter: {brandFilter} <button onClick={() => setBrandFilter("")} className="text-[#00A651] ml-2">Clear</button></div>}
          </aside>

          <main className="flex-1 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mobiles.filter(m =>!brandFilter || m.brand === brandFilter).map((m) => (
                <div key={m.id} onClick={() => setSelected(m)} className="bg-[#151515] border border-white/10 p-5 rounded-2xl cursor-pointer">
                  <h3 className="font-black text-lg">{m.name}</h3>
                  <p className="text-white/50 text-sm">{m.brand}</p>
                  <p className="text-[#00A651] font-black mt-2">Rs. {m.price}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="font-black text-3xl text-center mb-6">Why ApnaMobile?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#111] p-6 rounded-2xl text-center">✅ No Fees</div>
                <div className="bg-[#111] p-6 rounded-2xl text-center">✅ Verified Sellers</div>
                <div className="bg-[#111] p-6 rounded-2xl text-center">✅ Karachi Delivery</div>
              </div>
            </div>

          </main>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-6">
          <h2 className="text-3xl font-black mb-4">Seller Panel</h2>
          <div className="bg-[#151515] p-6 rounded-2xl border border-white/10">
            <p>Yahan se apna mobile add kar sakte ho!</p>
            <button className="mt-4 bg-[#00A651] text-black px-6 py-3 rounded-full font-bold">+ Add Mobile</button>
          </div>
        </div>
      )}
    </div>
  );
}
