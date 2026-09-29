"use client"
import { useState } from "react"
export default function Page(){
const M=[
{id:1,n:"iPhone 18 Pro Max 512GB",b:"Apple",s:18,m:"Pro Max",c:"Black Titanium",bt:100,st:512,p:545000},
{id:2,n:"iPhone 17 Pro Max",b:"Apple",s:17,m:"Pro Max",c:"Black Titanium",bt:98,st:256,p:485000},
{id:3,n:"iPhone 16 Pro Max",b:"Apple",s:16,m:"Pro Max",c:"Deep Purple",bt:96,st:256,p:445000},
{id:4,n:"iPhone 16 Pro",b:"Apple",s:16,m:"Pro",c:"White",bt:95,st:128,p:395000},
{id:5,n:"iPhone 15 Air 256GB",b:"Apple",s:15,m:"Air",c:"Blue",bt:93,st:256,p:285000},
{id:6,n:"iPhone 15 Pro Max",b:"Apple",s:15,m:"Pro Max",c:"Black",bt:94,st:256,p:385000},
{id:7,n:"iPhone 14 Pro Max",b:"Apple",s:14,m:"Pro Max",c:"Deep Purple",bt:92,st:128,p:295000},
{id:8,n:"iPhone 13 Mini",b:"Apple",s:13,m:"Mini",c:"White",bt:85,st:128,p:125000},
{id:9,n:"iPhone 11 Pro Max",b:"Apple",s:11,m:"Pro Max",c:"Black",bt:80,st:64,p:95000},
{id:10,n:"Samsung S24 Ultra Duo 512GB",b:"Samsung",s:24,m:"Ultra Duo",c:"Gray",bt:100,st:512,p:375000},
{id:11,n:"Vivo V30 Pro",b:"Vivo",s:30,m:"Pro",c:"Black",bt:100,st:256,p:115000},
{id:12,n:"Infinix Hot 40 Pro",b:"Infinix",s:40,m:"Pro",c:"Blue",bt:100,st:128,p:48000},
]
const[br,setBr]=useState("All");const[md,setMd]=useState("All");const[sr,setSr]=useState("All");const[ps,setPs]=useState("Default");
let F=M.filter(x=>{if(br!="All"&&x.b!=br)return false;if(md!="All"&&x.m!=md)return false;if(sr!="All"&&x.s!=parseInt(sr))return false;return true;});
if(ps=="Low to High")F=[...F].sort((a,b)=>a.p-b.p);if(ps=="High to Low")F=[...F].sort((a,b)=>b.p-a.p);
return(<div className="min-h-screen bg-black text-white"><div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 sticky top-0 z-50"><h1 className="font-black text-[22px]">APNAMOBILE.PK - USMAN BHAI 🇵🇰</h1><p className="text-black font-black text-[11px] mt-1 leading-tight">✨ AB MOBILE LENA AUR BHI ASAN! MARKET JANE KI ZARURAT NAHI ✨</p><p className="text-white font-bold text-[10px] mt-1">✅ Checking Warranty Bhi • 🏠 Ghar Bethy Checking • 💰 JazzCash 1000 Token</p></div>
<div className="p-3"><div className="bg-zinc-900 border-2 border-green-500 rounded-2xl p-3 grid grid-cols-2 gap-2">
<select value={br} onChange={e=>setBr(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-3 text-xs font-bold"><option value="All">📱 Brand - Apple/Samsung/Vivo/Infinix</option><option>Apple</option><option>Samsung</option><option>Vivo</option><option>Infinix</option></select>
<select value={sr} onChange={e=>setSr(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-3 text-xs font-bold"><option value="All">🔢 Series 11-18</option><option value="11">11</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="24">S24</option></select>
<select value={md} onChange={e=>setMd(e.target.value)} className="bg-black border border-zinc-700 rounded-full px-3 py-3 text-xs font-bold"><option value="All">⭐ Pro / Max / Mini / Air / Duo</option><option>Pro Max</option><option>Pro</option><option>Air</option><option>Mini</option><option>Ultra Duo</option></select>
<select value={ps} onChange={e=>setPs(e.target.value)} className="bg-green-500 text-black rounded-full px-3 py-3 text-xs font-black"><option value="Default">↕️ Low to High / High to Low</option><option value="Low to High">Low to High ↑ Sasta</option><option value="High to Low">High to Low ↓ Mehenga</option></select>
</div><p className="text-center text-[11px] text-green-400 mt-3 font-bold">{F.length} Mobiles - iPhone 11 se 18 Pro Max Tak • Colour/Battery/GB/Price Filter</p>
<div className="mt-4 space-y-3">{F.map((m:any)=>(<div key={m.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-3 flex gap-3"><div className="w-16 h-16 bg-zinc-800 rounded-xl flex items-center justify-center text-xl">📱</div><div className="flex-1"><h3 className="font-black text-[13px]">{m.n}</h3><p className="text-[10px] text-green-400 font-bold mt-0.5">{m.c} • {m.st}GB • Batt {m.bt}% • {m.m} • Series {m.s}</p><p className="text-[9px] text-zinc-400 mt-1">Usman Bhai Ka Bharosa • 5 Saal Se • Checking Warranty</p><p className="text-green-500 font-black mt-1">Rs. {m.p.toLocaleString()}</p></div></div>))}</div>
<div className="mt-6 bg-black border border-green-500 rounded-2xl p-4 text-center"><p className="font-black text-green-400 text-sm">💚 USMAN BHAI KA WADA 💚</p><p className="text-[11px] mt-2 font-bold">Ab Mobile Lena Aur Bhi Asan Ho Gaya! Market Jane Ki Zarurat Nahi, Ghar Bethy Mobile Lo, Checking Warranty Ke Saath!</p></div></div></div>)}
