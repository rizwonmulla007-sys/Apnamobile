"use client"
import { useState } from "react"
const MOBILES=[
{id:1,name:"iPhone 18 Pro Max",brand:"Apple",series:18,model:"Pro Max",price:545000,color:"Black Titanium",battery:100,storage:512,rating:5,seller:"Usman Bhai",loc:"DHA",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"PTA Approved"},
{id:2,name:"iPhone 17 Pro Max",brand:"Apple",series:17,model:"Pro Max",price:485000,color:"Black Titanium",battery:98,storage:256,rating:5,seller:"Usman Bhai",loc:"DHA",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"10/10 Dabba Pack"},
{id:3,name:"iPhone 16 Pro Max",brand:"Apple",series:16,model:"Pro Max",price:445000,color:"Deep Purple",battery:96,storage:256,rating:5,seller:"Usman Bhai",loc:"Clifton",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Lush"},
{id:4,name:"iPhone 16 Pro",brand:"Apple",series:16,model:"Pro",price:395000,color:"White",battery:95,storage:128,rating:4.9,seller:"Usman Bhai",loc:"Clifton",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"White Beauty"},
{id:5,name:"iPhone 16",brand:"Apple",series:16,model:"Base",price:295000,color:"Blue",battery:92,storage:128,rating:4.8,seller:"Usman Bhai",loc:"Gulshan",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Blue"},
{id:6,name:"iPhone 15 Pro Max",brand:"Apple",series:15,model:"Pro Max",price:385000,color:"Black Titanium",battery:94,storage:256,rating:5,seller:"Usman Bhai",loc:"DHA",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"PTA"},
{id:7,name:"iPhone 15 Pro",brand:"Apple",series:15,model:"Pro",price:325000,color:"Natural",battery:91,storage:128,rating:4.9,seller:"Usman Bhai",loc:"DHA",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"Natural Titanium"},
{id:8,name:"iPhone 15",brand:"Apple",series:15,model:"Base",price:245000,color:"Pink",battery:90,storage:128,rating:4.8,seller:"Bilal Bhai",loc:"Gulshan",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Pink"},
{id:9,name:"iPhone 15 Air",brand:"Apple",series:15,model:"Air",price:285000,color:"Blue",battery:93,storage:256,rating:4.7,seller:"Usman Bhai",loc:"North",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Air Slim Model"},
{id:10,name:"iPhone 14 Pro Max",brand:"Apple",series:14,model:"Pro Max",price:295000,color:"Deep Purple",battery:92,storage:128,rating:4.9,seller:"Usman Bhai",loc:"Clifton",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Deep Purple"},
{id:11,name:"iPhone 14 Pro",brand:"Apple",series:14,model:"Pro",price:255000,color:"Black",battery:90,storage:128,rating:4.8,seller:"Usman Bhai",loc:"Saddar",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"Black"},
{id:12,name:"iPhone 13 Pro Max",brand:"Apple",series:13,model:"Pro Max",price:195000,color:"Blue",battery:88,storage:128,rating:4.8,seller:"Usman Bhai",loc:"North",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"Sierra Blue"},
{id:13,name:"iPhone 13 Mini",brand:"Apple",series:13,model:"Mini",price:125000,color:"White",battery:85,storage:128,rating:4.6,seller:"Khan Mobile",loc:"Saddar",img:"https://images.unsplash.com/photo-1592899677977-9bb10ba128a5?w=400",desi:"Mini Chota Pack"},
{id:14,name:"iPhone 12 Pro",brand:"Apple",series:12,model:"Pro",price:145000,color:"Gold",battery:82,storage:128,rating:4.7,seller:"Usman Bhai",loc:"Gulshan",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"Gold"},
{id:15,name:"iPhone 11 Pro Max",brand:"Apple",series:11,model:"Pro Max",price:95000,color:"Black",battery:80,storage:64,rating:4.5,seller:"Usman Bhai",loc:"North",img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",desi:"64GB Old is Gold"},
{id:16,name:"Samsung S24 Ultra Duo",brand:"Samsung",series:24,model:"Ultra Duo",price:375000,color:"Titanium Gray",battery:100,storage:512,rating:5,seller:"Usman Bhai",loc:"Gulshan",img:"https://images.unsplash.com/photo-1610945265064-0e34e03294be?w=400",desi:"S24 Ultra Duo 512GB"},
{id:17,name:"Samsung S23 Ultra",brand:"Samsung",series:23,model:"Ultra Duo",price:245000,color:"Black",battery:95,storage:256,rating:4.9,seller:"Usman Bhai",loc:"DHA",img:"https://images.unsplash.com/photo-1610945265064-0e34e03294be?w=400",desi:"256GB"},
{id:18,name:"Samsung A54",brand:"Samsung",series:54,model:"Base",price:85000,color:"Blue",battery:100,storage:128,rating:4.7,seller:"Bilal Bhai",loc:"Clifton",img:"https://images.unsplash.com/photo-1610945265064-0e34e03294be?w=400",desi:"A54 5G"},
{id:19,name:"Vivo V30 Pro",brand:"Vivo",series:30,model:"Pro",price:115000,color:"Black",battery:100,storage:256,rating:4.8,seller:"Usman Bhai",loc:"Saddar",img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",desi:"Vivo Camera King"},
{id:20,name:"Vivo Y100",brand:"Vivo",series:100,model:"Base",price:65000,color:"Purple",battery:100,storage:128,rating:4.6,seller:"Khan Mobile",loc:"North",img:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400",desi:"Y100"},
{id:21,name:"Infinix Hot 40 Pro",brand:"Infinix",series:40,model:"Pro",price:48000,color:"Blue",battery:100,storage:128,rating:4.7,seller:"Khan Mobile",loc:"Saddar",img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",desi:"Gaming"},
{id:22,name:"Infinix Note 30 Pro",brand:"Infinix",series:30,model:"Pro",price:55000,color:"Black",battery:100,storage:256,rating:4.6,seller:"Usman Bhai",loc:"Gulshan",img:"https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=400",desi:"Note 30 Pro 256GB"},
]

export default function Page(){
const [brand,setBrand]=useState("All");const [series,setSeries]=useState("All");const [model,setModel]=useState("All");const [color,setColor]=useState("All");const [storage,setStorage]=useState("All");const [battery,setBattery]=useState("All");const [priceSort,setPriceSort]=useState("Default");const [priceRange,setPriceRange]=useState("All");
let filtered=MOBILES.filter((m:any)=>{
if(brand!=="All"&&m.brand!==brand)return false;
if(series!=="All"&&m.series!==parseInt(series))return false;
if(model!=="All"&&m.model!==model)return false;
if(color!=="All"&&m.color!==color)return false;
if(storage!=="All"&&m.storage!==parseInt(storage))return false;
if(battery==="90+"&&m.battery<90)return false;
if(priceRange==="0-20k"&&m.price>20000)return false;
if(priceRange==="20-50k"&&(m.price<20000||m.price>50000))return false;
if(priceRange==="50-100k"&&(m.price<50000||m.price>100000))return false;
if(priceRange==="100k+"&&m.price<100000)return false;
return true;
});
if(priceSort==="Low to High")filtered=[...filtered].sort((a:any,b:any)=>a.price-b.price);
if(priceSort==="High to Low")filtered=[...filtered].sort((a:any,b:any)=>b.price-a.price);

return(
<div className="min-h-screen bg-black text-white">
<header className="sticky top-0 z-50 bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-4">
<div className="flex justify-between items-center"><h1 className="text-2xl font-black">APNA<span className="text-black">MOBILE</span>.PK</h1><span className="bg-black text-green-400 px-3 py-1 rounded-full text-[10px] font-black">USMAN BHAI 🇵🇰</span></div>
<p className="text-[11px] font-black text-black mt-1">✨ AB MOBILE LENA AUR BHI ASAN HO GAYA! MARKET JANE KI ZARURAT NAHI ✨</p>
</header>
<div className="bg-black border-y-2 border-green-500 px-3 py-2"><p className="text-center font-bold text-green-400 text-[11px]">✅ Checking Warranty • 🏠 Ghar Bethy • 💰 JazzCash 1000 Token • ⭐ 5.0 Rating</p></div>

<div className="p-3">
<div className="bg-zinc-900 border-2 border-green-500/50 rounded-[20px] p-4">
<p className="font-black text-green-400 text-[13px] mb-3 text-center">🔍 FULL FILTER - BRAND / MODEL / SERIES / VARIANT</p>
<div className="grid grid-cols-3 gap-2">
<select value={brand} onChange={e=>setBrand(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">📱 Brand</option><option>Apple</option><option>Samsung</option><option>Vivo</option><option>Infinix</option></select>
<select value={series} onChange={e=>setSeries(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">🔢 Series</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="24">S24</option><option value="30">V30/Note30</option></select>
<select value={model} onChange={e=>setModel(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">⭐ Model</option><option>Base</option><option>Mini</option><option>Air</option><option>Pro</option><option>Pro Max</option><option>Ultra Duo</option></select>
<select value={color} onChange={e=>setColor(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">🎨 Colour</option><option>Black Titanium</option><option>Deep Purple</option><option>White</option><option>Blue</option><option>Black</option><option>Titanium Gray</option></select>
<select value={storage} onChange={e=>setStorage(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">💾 GB</option><option value="64">64GB</option><option value="128">128GB</option><option value="256">256GB</option><option value="512">512GB</option></select>
<select value={battery} onChange={e=>setBattery(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">🔋 Batt</option><option value="90+">90%+ Best</option></select>
<select value={priceRange} onChange={e=>setPriceRange(e.target.value)} className="bg-black border border-green-500/40 rounded-full px-2 py-3 text-[11px] font-bold"><option value="All">💰 Range</option><option value="0-20k">0-20k</option><option value="20-50k">20-50k</option><option value="50-100k">50k-1L</option><option value="100k+">1Lakh+</option></select>
<select value={priceSort} onChange={e=>setPriceSort(e.target.value)} className="bg-green-500 text-black rounded-full px-2 py-3 text-[11px] font-black col-span-2"><option value="Default">↕️ Price Low to High / High to Low</option><option value="Low to High">Low to High ↑ Sasta</option><option value="High to Low">High to Low ↓ Mehenga</option></select>
</div>
<p className="text-center text-[10px] text-green-400 mt-3 font-bold">{filtered.length} Mobiles - iPhone 11 se 18 Pro Max Tak • Vivo • Samsung • Infinix • Pro / Pro Max / Mini / Air / Duo</p>
</div>

<div className="grid grid-cols-1 gap-3 mt-4">
{filtered.length===0?(
<div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center"><p className="text-6xl">📱</p><h2 className="font-black text-xl mt-4">No Phones Available Right Now</h2><p className="text-xs text-zinc-400 mt-2">Is filter me koi phone nahi - dusra filter try karo</p></div>
):filtered.map((m:any)=>(
<div key={m.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2.5 flex gap-3">
<img src={m.img} className="w-24 h-24 rounded-xl object-cover border border-green-500/20"/>
<div className="flex-1"><h3 className="font-black text-[13px]">{m.name}</h3><p className="text-[10px] text-green-400 font-bold">{m.series} Series • {m.model} • {m.color} • {m.storage}GB • Batt {m.battery}%</p><p className="text-[10px] mt-1">⭐{m.rating} {m.seller} • 📍{m.loc} • {m.desi}</p><p className="text-green-500 font-black mt-1">Rs. {m.price.toLocaleString()}</p><div className="flex gap-2 mt-2"><button className="flex-1 bg-zinc-800 border border-yellow-500/30 text-yellow-500 py-1.5 rounded-full text-[10px] font-black">💰 Bargain</button><button className="flex-1 bg-green-500 text-black py-1.5 rounded-full text-[10px] font-black">📲 Buy JazzCash</button></div></div>
</div>
))}
</div>
</div>
</div>
)
}
