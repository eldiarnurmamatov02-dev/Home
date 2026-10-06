import {SlidersHorizontal} from 'lucide-react';import {cities} from '../data/properties';
export default function FilterSidebar({f,onChange,onReset}){
 return <aside className="card space-y-5 p-5 lg:sticky lg:top-24">
  <div className="flex items-center justify-between"><h3 className="flex items-center gap-2 font-bold"><SlidersHorizontal size={18}/>Фильтр</h3><button onClick={onReset} className="text-sm text-blue-600 hover:underline">Тазалоо</button></div>
  <label className="block text-sm font-medium">Шаар<select className="input mt-1" value={f.city} onChange={e=>onChange({city:e.target.value})}><option value="">Бардыгы</option>{cities.map(c=><option key={c}>{c}</option>)}</select></label>
  <div><p className="mb-1 text-sm font-medium">Баасы ($)</p><div className="grid grid-cols-2 gap-2">
   <input type="number" min="0" className="input" placeholder="Мин" value={f.minPrice} onChange={e=>onChange({minPrice:e.target.value})}/>
   <input type="number" min="0" className="input" placeholder="Макс" value={f.maxPrice} onChange={e=>onChange({maxPrice:e.target.value})}/></div></div>
  <div><p className="mb-2 text-sm font-medium">Бөлмө саны</p><div className="flex flex-wrap gap-2">
   {['','1','2','3','4','5'].map(r=><button key={r} onClick={()=>onChange({rooms:r})} className={`rounded-xl border px-3 py-2 text-sm transition ${f.rooms===r?'border-blue-600 bg-blue-600 text-white':'border-slate-200 hover:border-blue-600'}`}>{r===''?'Баары':r==='5'?'5+':r}</button>)}</div></div>
 </aside>}
