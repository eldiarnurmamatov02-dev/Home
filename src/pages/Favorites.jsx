import {Link} from 'react-router-dom';import {Heart} from 'lucide-react';import {useApp} from '../context/AppContext';import PropertyGrid from '../components/PropertyGrid';
export default function Favorites(){
 const {properties,favorites}=useApp();const items=properties.filter(p=>favorites.includes(p.id));
 return <div className="mx-auto max-w-7xl px-4 py-8"><h1 className="mb-6 text-3xl font-extrabold">Избранное</h1>
  {items.length?<PropertyGrid items={items} removable/>:<div className="card mx-auto max-w-lg p-10 text-center"><Heart className="mx-auto mb-3 text-blue-600" size={40}/><h3 className="text-lg font-bold">Сакталган үй жок</h3><p className="mt-1 text-sm text-slate-500">Жактырган үйлөрдү жүрөкчөнү басып сактаңыз.</p><Link to="/catalog" className="btn-primary mt-5">Үйлөрдү көрүү</Link></div>}</div>}
