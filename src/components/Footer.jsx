import {Link} from 'react-router-dom';import {Home,Phone,Mail,MapPin} from 'lucide-react';
export default function Footer(){
 return <footer className="mt-20 bg-slate-900 text-slate-300"><div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3">
  <div><p className="flex items-center gap-2 text-xl font-bold text-white"><Home size={20}/>HomeMarket</p><p className="mt-3 text-sm">Үй сатуу жана сатып алуу үчүн ишенимдүү платформа.</p></div>
  <div className="space-y-2 text-sm"><p className="font-semibold text-white">Баракчалар</p>{[['/catalog','Үйлөр'],['/sell','Үй сатуу'],['/favorites','Избранное']].map(([t,l])=><Link key={t} to={t} className="block hover:text-white">{l}</Link>)}</div>
  <div className="space-y-2 text-sm"><p className="font-semibold text-white">Байланыш</p><p className="flex items-center gap-2"><Phone size={14}/>+996 555 000 111</p><p className="flex items-center gap-2"><Mail size={14}/>info@homemarket.kg</p><p className="flex items-center gap-2"><MapPin size={14}/>Бишкек, Кыргызстан</p></div>
 </div><p className="border-t border-slate-800 py-4 text-center text-xs">© 2026 HomeMarket. Бардык укуктар корголгон.</p></footer>}
