import {Link} from 'react-router-dom';import {Lock} from 'lucide-react';import {useApp} from '../context/AppContext';import AddPropertyForm from '../components/AddPropertyForm';
export default function Sell(){
 const {user}=useApp();
 return <div className="mx-auto max-w-3xl px-4 py-8"><h1 className="mb-6 text-3xl font-extrabold">Үй сатуу</h1>
  {user?<AddPropertyForm/>:<div className="card p-10 text-center"><Lock className="mx-auto mb-3 text-blue-600" size={40}/><h3 className="text-lg font-bold">Жарыя берүү үчүн кириңиз</h3><p className="mt-1 text-sm text-slate-500">Аккаунтуңуз жок болсо, катталыңыз.</p><Link to="/auth" className="btn-primary mt-5">Кирүү / Катталуу</Link></div>}</div>}
