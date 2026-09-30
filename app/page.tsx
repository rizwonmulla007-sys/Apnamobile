"use client";
import { useState, useEffect } from "react";

const brands = ["All","iPhone","Samsung","Vivo","Realme","Redmi","Infinix","Tecno","Pixel","QMobile","Nokia"];

const data = [
  {id:1, brand:"iPhone", model:"iPhone 14 Pro Max", colour:"Gold", gb:"256GB", health:100, price:225000, pta:"PTA Approved", range:"Excellent", img:"https://images.unsplash.com/photo-1592899677977?w=400", type:"Pro Max", warranty:"1 Year"},
  {id:2, brand:"iPhone", model:"iPhone 13", colour:"White", gb:"128GB", health:90, price:95000, pta:"Non PTA", range:"Good", img:"https://images.unsplash.com/photo-1591337676887?w=400", type:"Mini", warranty:"7 Days Check"},
  {id:3, brand:"Samsung", model:"S23 Ultra", colour:"Black", gb:"256GB", health:95, price:185000, pta:"PTA Approved", range:"Excellent", img:"https://images.unsplash.com/photo-1610945265064?w=400", type:"Duo", warranty:"1 Year"},
  {id:4, brand:"Vivo", model:"Vivo V25", colour:"Gold", gb:"128GB", health:94, price:65000, pta:"PTA", range:"Excellent", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", type:"V", warranty:"1 Year"},
  {id:5, brand:"Realme", model:"Realme C35", colour:"Blue", gb:"64GB", health:88, price:32000, pta:"PTA", range:"Good", img:"https://images.unsplash.com/photo-1598327105666?w=400", type:"C", warranty:"7 Days"},
  {id:6, brand:"Redmi", model:"Redmi Note 12", colour:"Blue", gb:"128GB", health:92, price:42000, pta:"PTA", range:"Excellent", img:"https://images.unsplash.com/photo-1592899677977?w=400", type:"Note", warranty:"6 Month"},
  {id:7, brand:"Infinix", model:"Infinix Hot 30", colour:"Black", gb:"128GB", health:90, price:35000, pta:"PTA", range:"Good", img:"https://images.unsplash.com/photo-1610945265064?w=400", type:"Hot", warranty:"1 Year"},
  {id:8, brand:"Tecno", model:"Tecno Camon 20", colour:"Gold", gb:"256GB", health:96, price:52000, pta:"PTA", range:"Excellent", img:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400", type:"Camon", warranty:"1 Year"},
  {id:9, brand:"Pixel", model:"Pixel 7 Pro", colour:"White", gb:"128GB", health:97, price:115000, pta:"Non PTA", range:"Excellent", img:"https://images.unsplash.com/photo-1592899677977?w=400", type:"Pro", warranty:"Service"},
  {id:10, brand:"Nokia", model:"Nokia G21", colour:"Blue", gb:"64GB", health:85, price:22000, pta:"PTA", range:"Good", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400", type:"G", warranty:"1 Year"},
];

export default function Page(){
  const [brand,setBrand]=useState("All");
  const [gb,setGb]=useState("All");
  const [colour,setColour]=useState("All");
  const [pta,setPta]=useState("All");
  const [sort,setSort]=useState("latest");
  const [view,setView]=useState("customer");
  const [chat,setChat]=useState(false);
  const [sel,setSel]=useState<any>(null);
  const [showRating,setShowRating]=useState(false);
  const [showFilters,setShowFilters]=useState(false);
  const [agree,setAgree]=useState(false);
  const [notifyOn,setNotifyOn]=useState(false);
  const [jazzStep,setJazzStep]=useState(0);
  const [ssExample,setSsExample]=useState(false);

  let f = data.filter(m=>{
    if(brand!=="All" && m.brand!==brand) return false;
    if(gb!=="All" && m.gb!==gb) return false;
    if(colour!=="All" && m.colour!==colour) return false;
    if(pta!=="All" && m.pta!==pta) return false;
    return true;
  });
  if(sort==="lowest") f=[...f].sort((a,b)=>a.price-b.price);
  if(sort==="highest") f=[...f].sort((a,b)=>b.price-a.price);
  if(sort==="health") f=[...f].sort((a,b)=>b.health-a.health);

  return(
    <div className="min-h-screen bg-[#fffbf0] font-sans">
      {/* LOGO - GOLD WHITE DESI */}
      <header className="bg-black p-4 sticky top-0 z-50 border-b-4 border-yellow-400">
        <div className="flex justify-between items-center">
          <div><h1 className="text-2xl font-black text-white"><span className="text-yellow-400">Apna</span>Mobile</h1><p className="text-[9px] text-yellow-100 tracking-widest">KARACHI SE HAR CONNECTION - GOLD WHITE</p></div>
          <button onClick={()=>setShowRating(true)} className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-black animate-pulse">⭐ 4.9/5 Usman Bhai</button>
        </div>
        <div className="mt-3 flex gap-2">
          <button onClick={()=>setView("customer")} className={`px-4 py-1.5 rounded-full text-xs font-bold ${view==="customer"?"bg-white text-black":"bg-zinc-800 text-white"}`}>Customer View</button>
          <button onClick={()=>setView("seller")} className={`px-4 py-1.5 rounded-full text-xs font-bold ${view==="seller"?"bg-yellow-400 text-black":"bg-zinc-800 text-white"}`}>Seller View</button>
          <button onClick={()=>setNotifyOn(!notifyOn)} className="ml-auto text-xl">🔔</button>
        </div>
      </header>

      {notifyOn && <div className="bg-green-600 text-white text-xs p-2 text-center font-bold">🔔 Notification ON - Naye Mobile Ki Khabar Milegi! - I Agree Karo</div>}

      {/* BANNER - DESI NO TOILET JOKE */}
      <div className="m-3 bg-gradient-to-r from-yellow-300 to-amber-500 rounded-2xl p-4 border-2 border-black shadow-lg">
        <h2 className="font-black text-black text-[16px]">🔥 KARACHI KI MEHNGAI ME TENSION KYU?</h2>
        <p className="text-black text-xs font-bold mt-1">Ghar Baithe Apna Mobile Lo - 100% Checked, Warranty Ke Sath</p>
        <div className="mt-2 bg-black text-white rounded-lg p-2 text-[10px] flex gap-2"><span>🛡️ Warranty</span><span>•</span><span>💳 JazzCash 1000 Advance</span><span>•</span><span>🏠 Ghar Baithe Checking</span></div>
      </div>

      {/* FILTER BUTTON BAR */}
      <div className="bg-white p-2 sticky top-[84px] z-40 shadow border-b">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 overflow-x-auto">
            {brands.map(b=><button key={b} onClick={()=>setBrand(b)} className={`px-3 py-1.5 rounded-full text-xs font-black whitespace-nowrap border ${brand===b?"bg-black text-yellow-400":"bg-white text-black"}`}>{b}</button>)}
          </div>
          <button onClick={()=>setShowFilters(true)} className="ml-2 bg-black text-white px-4 py-1.5 rounded-full text-xs font-bold">Filters ⚙️</button>
        </div>
      </div>

      {/* PRODUCT LIST - REAL NOT DUMMY */}
      <div className="p-3 space-y-3">
        {f.map(m=>(
          <div key={m.id} className="bg-white border-2 border-yellow-300 rounded-2xl p-3 flex gap-3 shadow-sm">
            <img src={m.img} className="w-20 h-24 object-cover rounded-xl bg-gray-100 border"/>
            <div className="flex-1">
              <div className="flex justify-between"><h3 className="font-bold text-[13px]">{m.model}</h3><span className="bg-black text-white text-[9px] px-2 py-1 rounded-full">{m.type}</span></div>
              <p className="text-[10px] mt-1">🎨 {m.colour} | 💾 {m.gb} | 🔋 Health {m.health}% | 📶 {m.pta} | Range: {m.range}</p>
              <div className="flex gap-1 mt-1"><span className="bg-green-100 text-green-800 text-[8px] px-2 py-1 rounded-full">✅ {m.warranty}</span><span className="bg-yellow-100 text-black text-[8px] px-2 py-1 rounded-full">⭐ Usman Verified</span></div>
              <div className="flex justify-between items-center mt-2"><p className="text-green-700 font-black text-sm">Rs. {m.price.toLocaleString()}</p><button onClick={()=>{setSel(m); setChat(true)}} className="bg-black text-white px-3 py-1.5 rounded-full text-[11px] font-bold">Bargain Karo 💬</button></div>
              {view==="seller" && <p className="text-[8px] text-gray-400 mt-1">Seller Panel - Add/Edit Phone</p>}
            </div>
          </div>
        ))}
      </div>

      {/* SCROLL POSTERS - WARRANTY ETC */}
      <div className="p-3 space-y-3">
        <div className="bg-black text-yellow-400 p-4 rounded-2xl border-2 border-yellow-400"><h4 className="font-black text-sm">🛡️ WARRANTY POSTER</h4><p className="text-white text-xs mt-1">7 Din Ki Checking Warranty + 1 Saal Service Warranty - Koi Tension Nahi!</p></div>
        <div className="bg-yellow-400 text-black p-4 rounded-2xl border-2 border-black"><h4 className="font-black text-sm">🏠 GHAR BAITHE CHECKING</h4><p className="text-xs mt-1 font-bold">Video Call Par Mobile Dikhao, Pasand Aaye To JazzCash Karo, Delivery Karachi Me Same Day!</p></div>
        <div className="bg-white p-4 rounded-2xl border-2 border-black"><h4 className="font-black text-sm">💳 JAZZCASH 1000 GUARANTEE</h4><p className="text-xs mt-1">Sirf Rs. 1000 Advance Se Booking - Service Fee - Baki Cash On Delivery - I Agree Par Click Karo</p></div>
        <div className="bg-green-50 p-3 rounded-xl border flex items-center gap-2"><input type="checkbox" checked={agree} onChange={e=>setAgree(e.target.checked)} className="w-5 h-5"/><p className="text-xs font-bold">I Agree - JazzCash, Warranty, Location Terms - Karachi Saddar Theme</p></div>
      </div>

      {/* FILTER DRAWER */}
      {showFilters && (
        <div className="fixed inset-0 bg-black/60 z-[90] flex justify-end"><div className="bg-white w-4/5 h-full p-5 overflow-auto">
          <div className="flex justify-between"><h3 className="font-black">All Filters</h3><button onClick={()=>setShowFilters(false)}>✕</button></div>
          <div className="mt-4 space-y-4">
            <div><p className="font-bold text-sm">Battery Health Range</p><select value={sort} onChange={e=>setSort(e.target.value)} className="w-full border-2 p-2 rounded-full mt-1"><option value="latest">Latest</option><option value="health">Best Health 90%+</option><option value="lowest">Lowest Price</option><option value="highest">Highest Price</option></select></div>
            <div><p className="font-bold text-sm">PTA Status</p><select value={pta} onChange={e=>setPta(e.target.value)} className="w-full border-2 p-2 rounded-full mt-1"><option value="All">All PTA / Non PTA</option><option>PTA Approved</option><option>Non PTA</option><option>PTA</option></select></div>
            <div><p className="font-bold text-sm">GB</p><select value={gb} onChange={e=>setGb(e.target.value)} className="w-full border-2 p-2 rounded-full mt-1"><option value="All">All GB</option><option>4GB</option><option>32GB</option><option>64GB</option><option>128GB</option><option>256GB</option></select></div>
            <div><p className="font-bold text-sm">Colour</p><select value={colour} onChange={e=>setColour(e.target.value)} className="w-full border-2 p-2 rounded-full mt-1"><option value="All">All Colour</option><option>Gold</option><option>White</option><option>Black</option><option>Blue</option></select></div>
            <button onClick={()=>setShowFilters(false)} className="w-full bg-black text-white py-3 rounded-full font-bold">Apply Filters</button>
          </div>
        </div></div>
      )}

      {/* RATING BUTTON POPUP */}
      {showRating && (
        <div className="fixed inset-0 bg-black/60 z-[90] flex items-end"><div className="bg-white w-full rounded-t-3xl p-5">
          <div className="flex justify-between"><h3 className="font-black">⭐ 4.9/5 Usman Bhai Rating</h3><button onClick={()=>setShowRating(false)}>✕</button></div>
          <div className="mt-3 space-y-2 text-sm"><p>⭐⭐⭐⭐⭐ Ali - "Ghar baithe mobile mila, best!"</p><p>⭐⭐⭐⭐⭐ Hamza - "JazzCash 1000 pe booking, genuine!"</p><p>⭐⭐⭐⭐⭐ Fatima - "Warranty mili, Usman Bhai trusted!"</p></div>
          <button onClick={()=>setShowRating(false)} className="w-full bg-yellow-400 text-black mt-4 py-3 rounded-full font-black">Thank You Bhai! 🙏</button>
        </div></div>
      )}

      {/* MESSENGER - USMAN BHAI FINAL KIA LOGY + SS EXAMPLE */}
      {chat && (
        <div className="fixed inset-0 bg-black/70 z-[100] flex items-end"><div className="bg-white w-full rounded-t-3xl p-5 max-h-[85vh] overflow-auto">
          <div className="flex justify-between"><h3 className="font-black text-sm">Usman Bhai Messenger - {sel?.model}</h3><button onClick={()=>setChat(false)} className="font-bold">✕</button></div>
          <div className="bg-gray-100 p-3 rounded-xl mt-3 text-sm space-y-2">
            <p><b>Usman Bhai:</b> Ji bhai, Final Kya Logy? 😊</p>
            <button onClick={()=>setSsExample(!ssExample)} className="text-xs bg-black text-white px-2 py-1 rounded-full">📸 SS Example Dekho</button>
            {ssExample && <img src={sel?.img} className="w-full h-40 object-contain bg-white rounded-lg border mt-2"/>}
            <p className="text-[11px] text-gray-600">✅ {sel?.warranty} | 🔋 {sel?.health}% | {sel?.pta} | Colour: {sel?.colour} | {sel?.gb}</p>
            {!agree && <p className="text-red-600 text-xs font-bold">⚠️ Pehle neeche I Agree karo!</p>}
          </div>
          <div className="mt-4">
            <p className="font-bold text-xs">JazzCash Auto Transfer - Service Fee 1000</p>
            <div className="flex gap-2 mt-2">
              <button onClick={()=>setJazzStep(1)} className="flex-1 border-2 border-black rounded-full py-2 text-xs font-bold">💳 1000 Bhejo</button>
              <button onClick={()=>setJazzStep(2)} className="flex-1 bg-green-600 text-white rounded-full py-2 text-xs font-bold">Offer Bhejo</button>
            </div>
            {jazzStep===1 && <div className="mt-3 bg-yellow-100 p-3 rounded-xl text-xs"><p className="font-bold">JazzCash Number: 03XX-XXXXXXX</p><p>Rs. 1000 Service Fee - Booking Guarantee - Baqi COD</p><p className="text-green-700 font-bold mt-1">✓ Transfer Ho Gaya (Example)</p></div>}
            {jazzStep===2 && <div className="mt-3 bg-green-100 p-3 rounded-xl text-xs"><p className="font-bold">Apki Offer Usman Bhai Ko Chali Gayi!</p><p>Reply Ka Notification Ayega 🔔</p></div>}
          </div>
          <a href="https://wa.me/923190853408" className={`block text-center w-full mt-4 py-3 rounded-full font-bold text-sm ${agree?"bg-black text-white":"bg-gray-300 text-gray-500"}`}>{agree?"WhatsApp Par Jao - Final Deal":"Pehle I Agree Karo"}</a>
        </div></div>
      )}

      <div className="bg-black text-white p-5 text-center"><p className="text-yellow-400 font-black text-sm">APNA MOBILE - KARACHI SE HAR CONNECTION</p><p className="text-[10px] text-gray-400 mt-1">Gold White Theme | Desi Bazaar | No Fake Phones | Customer / Seller View | 100% Trusted</p></div>
    </div>
  );
                                                                                                                        }
