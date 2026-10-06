import {Link,useParams} from 'react-router-dom';import {SearchX} from 'lucide-react';
import {useApp} from '../context/AppContext';import PropertyDetails from '../components/PropertyDetails';
export default function Details(){
 const {id}=useParams();const {properties}=useApp();const p=properties.find(x=>String(x.id)===id);
 return p?<PropertyDetails property={p}/>:<div className="mx-auto max-w-md px-4 py-24 text-center"><SearchX className="mx-auto mb-3 text-blue-600" size={44}/><h2 className="text-xl font-bold">Үй табылган жок</h2><p className="mt-1 text-slate-500">Жарыя өчүрүлгөн же шилтеме туура эмес.</p><Link to="/catalog" className="btn-primary mt-6">Каталогго кайтуу</Link></div>}
