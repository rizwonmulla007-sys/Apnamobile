"use client"
import { useState } from "react"

const POSTERS = ["🔥 Karachi #1 Mobile Market - 0% Fee!", "📍 Ghar Bethy Checking - 7 Din Warranty!", "💸 JazzCash Secure - Seller ko 19k / Apna 1k!", "⭐ 5 Star Verified - Usman Bhai Trusted!"]

const MOBILES = [
  { id:1, name:"iPhone 15 Pro Max", brand:"Apple", model:"Pro Max", price:445000, color:"Black Titanium", battery:98, storage:256, rating:5, seller:"Usman Bhai", loc:"DHA Karachi", cond:"10/10", warranty:"1 Month", pta:true, img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400", verified:true },
  { id:2, name:"iPhone 14 Pro", brand:"Apple", model:"Pro", price:295000, color:"Deep Purple", battery:92, storage:128, rating:4.9, seller:"Usman Bhai", loc:"Clifton", cond:"9.5/10", warranty:"15 Days", pta:true, img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", verified:true },
  { id:3, name:"Samsung S24 Ultra Duo", brand:"Samsung", model:"Ultra Duo", price:375000, color:"Titanium Gray", battery:100, storage:512, rating:5, seller:"Bilal Mobile", loc:"Gulshan", cond:"10/10", warranty:"1 Month", pta:true, img:"https://images.unsplash.com/photo-1610945265064-0e34e03294be?w=400", verified:true },
  { id:4, name:"Infinix Hot 40 Pro", brand:"Infinix", model:"Pro", price:48000, color:"Blue", battery:100, storage:128, rating:4.7, seller:"Khan Mobile", loc:"Saddar", cond:"10/10", pta:true, warranty:"7 Days", img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400", verified:false },
  { id:5, name:"iPhone 13", brand:"Apple", model:"Base", price:185000, color:"White", battery:88, storage:128, rating:4.8, seller:"Usman Bhai", loc:"North", cond:"9/10", pta:true, warranty:"1 Month", img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400", verified:true },
  { id:6, name:"Redmi Note 13 Pro+", brand:"Xiaomi", model:"Pro+", price:85000, color:"Black", battery:95, storage:256, rating:4.8, seller:"Usman Bhai", loc:"North Nazimabad", cond:"9/10", pta:true, warranty:"1 Month", img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400", verified:true },
]

export default function Page(){
  const [brand,setBrand]=useState("All")
  const [color,setColor]=useState("All")
  const [storage,setStorage]=useState("All")
  const [battery,setBattery]=useState("All")
  const [priceRange,setPriceRange]=useState("All")
  const [priceSort,setPriceSort]=useState("Default")
  const [view,setView]=useState("customer")
  const [selected,setSelected]=useState<any>(null)
  const [showAgree,setShowAgree]=useState(false)
  const [showBargain,setShowBargain]=useState<any>(null)
  const [chat,setChat]=useState(false)

  let filtered = MOBILES.filter(m=>{
    if(brand!=="All" && m.brand!==brand) return false
    if(color!=="All" && m.color!==color) return false
    if(storage!=="All" && m.storage!==parseInt(storage)) return false
    if(battery==="90+" && m.battery<90) return false
    if(battery==="80-90" && (m.battery<80 || m.battery>90)) return false
    if(battery==="Below 80" && m.battery>=80) return false
    if(priceRange==="0-20k" && m.price>20000) return false
    if(priceRange==="20-50k" && (m.price<20000 || m.price>50000)) return false
    if(priceRange==="50-100k" && (m.price<50000 || m.price>100000)) return false
    if(priceRange==="100k+" && m.price<100000) return false
    return true
  })

  if(priceSort==="Low to High") filtered=[...filtered].sort((a,b)=>a.price-b.price)
  if(priceSort==="High to Low") filtered=[...filtered].sort((a,b)=>b.price-a.price)

  return(
    <div className="min-h-screen bg-[#060606] text-white">
      <header className="sticky top-0 z-50 bg-black border-b-2 border-green-500 px-4 py-3 flex justify-between items-center">
        <h1 className="text-[30px] font-black"><span className="text-green-500">APNA</span>MOBILE<span className="text-[10px] bg-green-500 text-black px-1 ml-1">.PK</span></h1>
        <div className="flex bg-[#1A1A1A] rounded-full p-1">
          <button onClick={()=>setView("customer")} className={`px-4 py-1.5 rounded-full text-xs font-black ${view==="customer"?"bg-green-500 text-black":"text-zinc-400"}`}>CUSTOMER</button>
          <button onClick={()=>setView("seller")} className={`px-4 py-1.5 rounded-full text-xs font-black ${view==="seller"?"bg-green-500 text-black":"text-zinc-400"}`}>SELLER</button>
        </div>
      </header>

      <div className="bg-green-500 text-black overflow-hidden whitespace-nowrap py-1.5 font-black text-xs">
        <div className="animate-[marquee_20s_linear_infinite] flex gap-10">{POSTERS.concat(POSTERS).map((p,i)=><span key={i}>{p} • </span>)}</div>
      </div>

      {view==="customer"? (
      <main className="p-3 max-w-6xl mx-auto">
        <div className="relative rounded-2xl h-28 mt-3 border border-green-500/30 bg-gradient-to-r from-green-900 to-black flex items-center px-5 overflow-hidden">
          <div><p className="text-green-400 font-black">Sasta Mobile Mela 🇵🇰</p><p className="text-[11px]">Ghar Bethy Checking • Warranty • JazzCash Secure</p></div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mt-4">
          <p className="font-black text-green-500 mb-3 text-sm">🔍 Filters - Colour / Battery / GB / Price</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <select value={brand} onChange={e=>setBrand(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-2.5 text-xs"><option value="All">All Brands</option><option>Apple</option><option>Samsung</option><option>Infinix</option><option>Xiaomi</option></select>
            <select value={color} onChange={e=>setColor(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-2.5 text-xs"><option value="All">All Colours</option><option>Black Titanium</option><option>Deep Purple</option><option>White</option><option>Blue</option><option>Black</option><option>Titanium Gray</option></select>
            <select value={storage} onChange={e=>setStorage(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-2.5 text-xs"><option value="All">All GB</option><option value="64">64GB</option><option value="128">128GB</option><option value="256">256GB</option><option value="512">512GB</option></select>
            <select value={battery} onChange={e=>setBattery(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-2.5 text-xs"><option value="All">Battery Health</option><option value="90+">90%+ Best</option><option value="80-90">80-90%</option><option value="Below 80">Below 80%</option></select>
            <select value={priceRange} onChange={e=>setPriceRange(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-2.5 text-xs"><option value="All">Price Range</option><option value="0-20k">0-20k Sasta</option><option value="20-50k">20k-50k</option><option value="50-100k">50k-1 Lakh</option><option value="100k+">1 Lakh+ </option></select>
            <select value={priceSort} onChange={e=>setPriceSort(e.target.value)} className="bg-white text-black rounded-full px-3 py-2.5 text-xs font-bold"><option value="Default">Sort By</option><option value="Low to High">Lowest to Highest ↑</option><option value="High to Low">Highest to Lowest ↓</option></select>
          </div>
          <div className="flex gap-2 mt-3"><button onClick={()=>{setBrand("All");setColor("All");setStorage("All");setBattery("All");setPriceRange("All");setPriceSort("Default")}} className="flex-1 bg-zinc-800 py-2 rounded-full text-xs">Reset</button><div className="flex-1 bg-green-500/20 border border-green-500/30 text-green-400 py-2 rounded-full text-xs font-black text-center">{filtered.length} Mobiles Found</div></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
          {filtered.map(m=>(
            <div key={m.id} className="bg-[#1A1A1A] border border-zinc-800 rounded-[20px] overflow-hidden relative">
              {m.verified && <span className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] px-2 py-0.5 rounded-full font-black z-10">✓ Usman Bhai Trusted</span>}
              <div className="flex">
                <img src={m.img} className="w-28 h-32 object-cover m-2 rounded-xl" alt="" />
                <div className="p-2 flex-1">
                  <h3 className="font-black text-sm">{m.name} <span className="text-[10px] bg-zinc-800 px-1.5 rounded">{m.storage}GB</span></h3>
                  <p className="text-[11px] text-zinc-400">{m.color} • Battery {m.battery}% • {m.model}</p>
                  <p className="text-[11px]">⭐ {m.rating} • {m.seller}</p>
                  <p className="text-[10px] text-zinc-400 mt-1">📍 {m.loc} | 🛡️ {m.warranty} | 🏠 Ghar Checking</p>
                  <p className="text-green-500 font-black text-lg mt-1">Rs. {m.price.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex gap-2 p-2 pt-0">
                <button onClick={()=>setShowBargain(m)} className="flex-1 bg-yellow-500 text-black py-2.5 rounded-full font-black text-xs">💰 Bargain</button>
                <button onClick={()=>setSelected(m)} className="flex-1 bg-green-500 text-black py-2.5 rounded-full font-black text-xs">Buy - JazzCash</button>
              </div>
            </div>
          ))}
        </div>
      </main>
      ) : (
        <div className="p-6">
          <h1 className="text-3xl font-black">Seller Panel - Usman Bhai Style</h1>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mt-6 text-center">
            <p className="text-sm">Mobile upload se pehle agreement lazmi hai</p>
            <button onClick={()=>setShowAgree(true)} className="w-full mt-4 bg-green-500 text-black py-4 rounded-full font-black">+ Add Mobile - Agreement Padho</button>
          </div>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-end justify-center p-0">
          <div className="bg-zinc-900 w-full max-w-md rounded-t-[30px] border-t-2 border-green-500 overflow-hidden">
            <img src={selected.img} className="w-full h-72 object-cover" alt="" />
            <div className="p-5">
              <h2 className="text-xl font-black">{selected.name} - {selected.color}</h2>
              <p className="text-xs text-zinc-400">{selected.storage}GB | Battery {selected.battery}% | {selected.cond} | {selected.warranty}</p>
              <p className="text-green-500 font-black text-2xl mt-3">Rs. {selected.price.toLocaleString()}</p>
              <p className="text-[10px] text-zinc-500">JazzCash: Seller ko Rs. {(selected.price-1000).toLocaleString()} • Tumhara Rs. 1000 commission • Customer ko 20k hi dikhega</p>
              <div className="flex gap-2 mt-4"><button onClick={()=>setChat(true)} className="flex-1 bg-zinc-800 py-3 rounded-full font-bold text-sm">💬 Messenger</button><button className="flex-1 bg-green-500 text-black py-3 rounded-full font-black">JazzCash Pay</button></div>
              <button onClick={()=>setSelected(null)} className="w-full mt-3 text-zinc-500 text-sm">Close</button>
            </div>
          </div>
        </div>
      )}

      {showBargain && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-yellow-500 rounded-3xl p-6 w-full max-w-sm">
            <h3 className="font-black">💰 Bargain Karo - {showBargain.name}</h3>
            <p className="text-xs text-zinc-400">{showBargain.color} • {showBargain.storage}GB • Battery {showBargain.battery}%</p>
            <input placeholder="Offer likho e.g. 180000" className="w-full mt-4 bg-black border border-zinc-700 rounded-xl px-4 py-3 text-sm" />
            <div className="flex gap-2 mt-4"><button onClick={()=>setShowBargain(null)} className="flex-1 bg-zinc-800 py-3 rounded-full">Cancel</button><button onClick={()=>{alert("Offer bhej di!");setShowBargain(null)}} className="flex-1 bg-yellow-500 text-black py-3 rounded-full font-black">Send</button></div>
          </div>
        </div>
      )}

      {showAgree && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-white text-black rounded-3xl p-6 w-full max-w-md">
            <h3 className="font-black">📜 Seller Agreement - JazzCash</h3>
            <div className="text-xs mt-3 bg-zinc-100 p-4 rounded-xl space-y-2 h-40 overflow-y-auto">
              <p><b>1. JazzCash Hidden:</b> Mobile 20k ka bike to seller ke acc me 19k jayega, 1000 mera commission. Customer ko sirf 20k dikhega, pata nahi chalega.</p>
              <p><b>2. Ghar Checking:</b> 7 din warranty + ghar pe checking dena hoga.</p>
              <p><b>3. Models:</b> Pro, Pro Max, Duo sahi likhna hai.</p>
              <p><b>4. 5 Star:</b> Ghalat kaam pe rating down.</p>
            </div>
            <button onClick={()=>setShowAgree(false)} className="w-full mt-4 bg-green-600 text-white py-3 rounded-full font-black">I Agree - Samajh Gaya</button>
          </div>
        </div>
      )}

      {chat && (
        <div className="fixed bottom-4 right-4 w-80 bg-zinc-900 border border-zinc-700 rounded-2xl z-50 overflow-hidden">
          <div className="bg-green-500 text-black p-3 font-black flex justify-between text-sm"><span>💬 Usman Bhai Messenger ⭐5.0</span><button onClick={()=>setChat(false)}>X</button></div>
          <div className="p-3 h-40 text-xs space-y-2"><p className="bg-zinc-800 p-2 rounded-xl">Salam bhai! Mobile ka colour konsa chahiye?</p><p className="bg-green-500 text-black p-2 rounded-xl ml-8">Battery health kitni hai?</p></div>
          <div className="p-2 flex gap-2"><input placeholder="Message..." className="flex-1 bg-black border border-zinc-800 rounded-full px-3 py-2 text-xs" /><button className="bg-green-500 text-black px-4 rounded-full font-bold text-xs">Send</button></div>
        </div>
      )}

      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
    </div>
  )
    }
