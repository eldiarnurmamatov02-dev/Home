import {useState} from 'react';import {Heart,MapPin,BedDouble,Maximize,Layers,Phone,MessageCircle,Check} from 'lucide-react';
import {useApp} from '../context/AppContext';import {money} from '../data/properties';import Modal from './Modal';import Field from './Field';
const Stat=({i:I,l,v})=><div className="rounded-2xl bg-slate-50 p-4 text-center"><I className="mx-auto mb-1 text-blue-600" size={20}/><p className="font-bold">{v}</p><p className="text-xs text-slate-500">{l}</p></div>;
export default function PropertyDetails({property:p}){
 const {favorites,toggleFav}=useApp();const [img,setImg]=useState(0);const [open,setOpen]=useState(false);const [sent,setSent]=useState(false);
 const [f,setF]=useState({name:'',phone:'',msg:''});const [err,setErr]=useState({});const fav=favorites.includes(p.id);
 const send=e=>{e.preventDefault();const x={};
  if(f.name.trim().length<2)x.name='Атыңызды жазыңыз';
  if(!/^\+?[\d\s-]{9,}$/.test(f.phone))x.phone='Телефон номери туура эмес';
  if(f.msg.trim().length<5)x.msg='Билдирүү өтө кыска';
  setErr(x);if(!Object.keys(x).length)setSent(true)};
 const close=()=>{setOpen(false);setSent(false)};
 return <div className="mx-auto max-w-7xl px-4 py-8"><div className="grid gap-8 lg:grid-cols-3">
  <div className="space-y-8 lg:col-span-2">
   <div><img src={p.images[img]} alt={p.title} className="h-72 w-full rounded-3xl object-cover shadow-md md:h-[460px]"/>
    <div className="mt-3 grid grid-cols-4 gap-3">{p.images.map((s,i)=><button key={i} onClick={()=>setImg(i)} className={`overflow-hidden rounded-xl border-2 transition ${i===img?'border-blue-600':'border-transparent opacity-70 hover:opacity-100'}`}><img src={s} alt="" className="h-20 w-full object-cover md:h-24"/></button>)}</div></div>
   <div><h1 className="text-3xl font-extrabold">{p.title}</h1><p className="mt-2 flex items-center gap-1 text-slate-500"><MapPin size={16}/>{p.address}, {p.city}</p></div>
   <div className="grid grid-cols-3 gap-3"><Stat i={BedDouble} l="Бөлмө" v={p.rooms}/><Stat i={Maximize} l="Аянты" v={`${p.area} м²`}/><Stat i={Layers} l="Кабат" v={p.floor}/></div>
   <section><h2 className="mb-2 text-xl font-bold">Сүрөттөмө</h2><p className="leading-relaxed text-slate-600">{p.description}</p></section>
   <section><h2 className="mb-3 text-xl font-bold">Өзгөчөлүктөрү</h2><ul className="grid gap-2 sm:grid-cols-2">{p.features.map(x=><li key={x} className="flex items-center gap-2 text-slate-700"><Check size={16} className="text-blue-600"/>{x}</li>)}</ul></section>
   <section><h2 className="mb-3 text-xl font-bold">Картада</h2><iframe title="Карта" loading="lazy" className="h-72 w-full rounded-2xl border-0 shadow" src={`https://www.google.com/maps?q=${encodeURIComponent(p.address+', '+p.city+', Кыргызстан')}&output=embed`}/></section>
  </div>
  <aside className="card h-fit space-y-5 p-6 lg:sticky lg:top-24">
   <p className="text-3xl font-extrabold text-blue-600">{money(p.price)}</p>
   <div className="flex items-center gap-3 border-y border-slate-100 py-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-blue-600 font-bold text-white">{p.seller.name[0]}</span><div><p className="font-semibold">{p.seller.name}</p><p className="text-sm text-slate-500">{p.seller.phone}</p></div></div>
   <a href={`tel:${p.seller.phone.replace(/\s/g,'')}`} className="btn-primary w-full"><Phone size={16}/>Телефон чалуу</a>
   <button onClick={()=>setOpen(true)} className="btn-dark w-full"><MessageCircle size={16}/>Байланышуу</button>
   <button onClick={()=>toggleFav(p.id)} className="btn-outline w-full"><Heart size={16} className={fav?'fill-red-500 text-red-500':''}/>{fav?'Избранноеден өчүрүү':'Избранноеге кошуу'}</button>
  </aside></div>
  <Modal open={open} onClose={close} title={sent?'Жөнөтүлдү':'Сатуучуга жазуу'}>
   {sent?<div className="space-y-4 text-center"><Check className="mx-auto text-blue-600" size={40}/><p className="text-slate-600">Билдирүүңүз жөнөтүлдү. Сатуучу жакында байланышат.</p><button onClick={close} className="btn-primary w-full">Жабуу</button></div>
   :<form onSubmit={send} className="space-y-4" noValidate>
    <Field label="Атыңыз" error={err.name}><input className="input" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/></Field>
    <Field label="Телефон" error={err.phone}><input className="input" placeholder="+996 ..." value={f.phone} onChange={e=>setF({...f,phone:e.target.value})}/></Field>
    <Field label="Билдирүү" error={err.msg}><textarea rows="3" className="input" value={f.msg} onChange={e=>setF({...f,msg:e.target.value})}/></Field>
    <button className="btn-primary w-full">Жөнөтүү</button></form>}</Modal></div>}
