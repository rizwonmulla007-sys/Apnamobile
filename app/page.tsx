"use client"
import { useState } from "react"

export default function Page(){
const phones = [
{n:"iPhone 18 Pro Max 512GB", b:"Apple", s:18, m:"Pro Max", p:545000},
{n:"iPhone 17 Pro Max", b:"Apple", s:17, m:"Pro Max", p:485000},
{n:"iPhone 16 Pro Max", b:"Apple", s:16, m:"Pro Max", p:445000},
{n:"iPhone 16 Pro", b:"Apple", s:16, m:"Pro", p:395000},
{n:"iPhone 15 Air 256GB", b:"Apple", s:15, m:"Air", p:285000},
{n:"iPhone 15 Pro Max", b:"Apple", s:15, m:"Pro Max", p:385000},
{n:"iPhone 14 Pro Max", b:"Apple", s:14, m:"Pro Max", p:295000},
{n:"iPhone 13 Mini", b:"Apple", s:13, m:"Mini", p:125000},
{n:"iPhone 11 Pro Max", b:"Apple", s:11, m:"Pro Max", p:95000},
{n:"Samsung S24 Ultra Duo 512GB", b:"Samsung", s:24, m:"Ultra Duo", p:375000},
{n:"Vivo V30 Pro 256GB", b:"Vivo", s:30, m:"Pro", p:115000},
{n:"Infinix Hot 40 Pro", b:"Infinix", s:40, m:"Pro", p:48000},
]

const [brand, setBrand] = useState("All")
const [model, setModel] = useState("All")
const [series, setSeries] = useState("All")
const [sort, setSort] = useState("Default")

let list = phones.filter((x:any) => {
if(brand!== "All" && x.b!== brand) return false
if(model!== "All" && x.m!== model) return false
if(series!== "All" && x.s!== parseInt(series)) return false
return true
})

if(sort === "Low to High"){
list = [...list].sort((a:any,b:any) => a.p - b.p)
}
if(sort === "High to Low"){
list = [...list].sort((a:any,b:any) => b.p - a.p)
}

return(
<div className="min-h-screen bg-black text-white">
<div className="bg-green-600 p-4 sticky top-0">
<h1 className="font-black text-xl">APNAMOBILE.PK - USMAN BHAI</h1>
<p className="text-black font-bold text-xs mt-1">AB MOBILE LENA AUR BHI ASAN - MARKET JANE KI ZARURAT NAHI</p>
<p className="text-white font-bold text-[10px] mt-1">Checking Warranty - Ghar Bethy Checking - 5 Saal Ka Bharosa</p>
</div>

<div className="p-3 grid grid-cols-2 gap-2">
<select value={brand} onChange={(e)=>setBrand(e.target.value)} className="bg-zinc-900 border border-zinc-700 rounded-full p-3 text-xs">
<option value="All">All Brands</option>
<option>Apple</option>
<option>Samsung</option>
<option>Vivo</option>
<option>Infinix</option>
</select>

<select value={series} onChange={(e)=>setSeries(e.target.value)} className="bg-zinc-900 border border-zinc-700 rounded-full p-3 text-xs">
<option value="All">Series 11 to 18</option>
<option value="11">11</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
</select>

<select value={model} onChange={(e)=>setModel(e.target.value)} className="bg-zinc-900 border border-zinc-700 rounded-full p-3 text-xs">
<option value="All">Pro / Max / Mini / Air / Duo</option>
<option>Pro Max</option>
<option>Pro</option>
<option>Air</option>
<option>Mini</option>
<option>Ultra Duo</option>
</select>

<select value={sort} onChange={(e)=>setSort(e.target.value)} className="bg-green-500 text-black rounded-full p-3 text-xs font-black">
<option value="Default">Low to High / High to Low</option>
<option value="Low to High">Low to High</option>
<option value="High to Low">High to Low</option>
</select>
</div>

<div className="p-3 space-y-3">
{list.map((x:any)=>(
<div key={x.n} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
<p className="font-black text-sm">{x.n}</p>
<p className="text-xs text-green-400 mt-1">{x.b} - Series {x.s} - {x.m} - Checking Warranty</p>
<p className="font-black text-green-500 mt-2">Rs. {x.p.toLocaleString()}</p>
</div>
))}
</div>

</div>
)
  }
