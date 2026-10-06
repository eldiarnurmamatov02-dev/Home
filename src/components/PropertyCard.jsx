import {Link} from 'react-router-dom';import {Heart,Trash2,MapPin,BedDouble,Maximize} from 'lucide-react';
import {useApp} from '../context/AppContext';import {money} from '../data/properties';
export default function PropertyCard({p,removable}){
 const {favorites,toggleFav}=useApp();const fav=favorites.includes(p.id);
 return <article className="card group overflow-hidden hover:-translate-y-1 hover:shadow-xl">
  <div className="relative h-56 overflow-hidden"><img src={p.images[0]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110"/>
   <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold">{p.city}</span>
   <button aria-label={removable?'Өчүрүү':'Избранноеге кошуу'} onClick={()=>toggleFav(p.id)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 shadow transition hover:scale-110">
    {removable?<Trash2 size={17} className="text-red-500"/>:<Heart size={17} className={fav?'fill-red-500 text-red-500':'text-slate-700'}/>}</button></div>
  <div className="space-y-3 p-5"><p className="text-xl font-bold text-blue-600">{money(p.price)}</p><h3 className="font-semibold">{p.title}</h3>
   <p className="flex items-center gap-1 text-sm text-slate-500"><MapPin size={14}/>{p.address}, {p.city}</p>
   <div className="flex gap-4 border-t border-slate-100 pt-3 text-sm text-slate-600"><span className="flex items-center gap-1"><BedDouble size={15}/>{p.rooms} бөлмө</span><span className="flex items-center gap-1"><Maximize size={15}/>{p.area} м²</span></div>
   <Link to={`/property/${p.id}`} className="btn-dark w-full">Толук көрүү</Link></div></article>}
