import {useState} from 'react';import {Link,NavLink} from 'react-router-dom';import {Home,Heart,Menu,X,LogIn,LogOut} from 'lucide-react';import {useApp} from '../context/AppContext';
const links=[['/','Башкы бет'],['/catalog','Үйлөр'],['/sell','Үй сатуу']];
export default function Navbar(){
 const [open,setOpen]=useState(false);const {favorites,user,setUser}=useApp();const n=favorites.length;
 const cls=({isActive})=>`text-sm font-medium transition hover:text-blue-600 ${isActive?'text-blue-600':'text-slate-700'}`;
 return <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
   <Link to="/" className="flex items-center gap-2 text-xl font-bold"><span className="grid h-9 w-9 place-items-center rounded-xl bg-blue-600 text-white"><Home size={18}/></span>HomeMarket</Link>
   <nav className="hidden items-center gap-8 md:flex">{links.map(([t,l])=><NavLink key={t} to={t} end className={cls}>{l}</NavLink>)}</nav>
   <div className="hidden items-center gap-3 md:flex">
    <Link to="/favorites" aria-label="Избранное" className="relative p-2 hover:text-blue-600"><Heart size={20}/>{n>0&&<span className="absolute -right-1 -top-1 grid h-4 min-w-4 place-items-center rounded-full bg-blue-600 px-1 text-[10px] text-white">{n}</span>}</Link>
    {user?<button onClick={()=>setUser(null)} className="btn-outline !py-2"><LogOut size={16}/>Чыгуу</button>:<Link to="/auth" className="btn-dark !py-2"><LogIn size={16}/>Кирүү</Link>}
   </div>
   <button className="md:hidden" aria-label="Меню" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div>
  {open&&<div className="space-y-1 border-t border-slate-100 bg-white px-4 py-3 md:hidden" onClick={()=>setOpen(false)}>
   {[...links,['/favorites',`Избранное (${n})`]].map(([t,l])=><NavLink key={t} to={t} end className={({isActive})=>`block rounded-xl px-3 py-3 font-medium ${isActive?'bg-blue-50 text-blue-600':''}`}>{l}</NavLink>)}
   {user?<button onClick={()=>setUser(null)} className="block w-full rounded-xl px-3 py-3 text-left font-medium">Чыгуу</button>:<Link to="/auth" className="btn-dark mt-2 w-full">Кирүү</Link>}
  </div>}</header>}
