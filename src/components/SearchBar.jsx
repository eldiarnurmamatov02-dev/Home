import {Search} from 'lucide-react';import {cities} from '../data/properties';
export default function SearchBar({values:v,onChange,onSubmit,full}){
 return <form onSubmit={e=>{e.preventDefault();onSubmit?.()}} className="card flex flex-col gap-3 p-3 md:flex-row">
  <div className="relative flex-1"><Search size={18} className="absolute left-4 top-3.5 text-slate-400"/>
   <input className="input !pl-11" placeholder="Аты, дареги же шаар..." value={v.q} onChange={e=>onChange({q:e.target.value})}/></div>
  {full&&<>
   <select className="input md:w-40" value={v.city} onChange={e=>onChange({city:e.target.value})}><option value="">Бардык шаар</option>{cities.map(c=><option key={c}>{c}</option>)}</select>
   <select className="input md:w-44" value={v.maxPrice} onChange={e=>onChange({maxPrice:e.target.value})}><option value="">Баасы (чейин)</option>{[60000,100000,200000,400000].map(n=><option key={n} value={n}>${n.toLocaleString()} чейин</option>)}</select>
   <select className="input md:w-36" value={v.rooms} onChange={e=>onChange({rooms:e.target.value})}><option value="">Бөлмө</option>{[1,2,3,4,5].map(n=><option key={n} value={n}>{n===5?'5+':n} бөлмө</option>)}</select></>}
  <button className="btn-primary md:px-8"><Search size={16}/>Издөө</button></form>}
