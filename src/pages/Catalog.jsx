import {useEffect,useMemo,useState} from 'react';import {useSearchParams} from 'react-router-dom';import {SlidersHorizontal} from 'lucide-react';
import {useApp} from '../context/AppContext';import SearchBar from '../components/SearchBar';import FilterSidebar from '../components/FilterSidebar';import PropertyGrid from '../components/PropertyGrid';
const sorts={new:(a,b)=>new Date(b.date)-new Date(a.date),asc:(a,b)=>a.price-b.price,desc:(a,b)=>b.price-a.price};
const blank={q:'',city:'',minPrice:'',maxPrice:'',rooms:''};
export default function Catalog(){
 const {properties}=useApp();const [sp]=useSearchParams();
 const [f,setF]=useState({...blank,q:sp.get('q')||'',city:sp.get('city')||'',maxPrice:sp.get('maxPrice')||'',rooms:sp.get('rooms')||''});
 const [sort,setSort]=useState('new');const [show,setShow]=useState(false);const [st,setSt]=useState({loading:true,error:false});
 const load=()=>{setSt({loading:true,error:false});new Promise(r=>setTimeout(r,600)).then(()=>setSt({loading:false,error:false})).catch(()=>setSt({loading:false,error:true}))};
 useEffect(()=>{load()},[]);
 const items=useMemo(()=>{const q=f.q.toLowerCase();
  return properties.filter(p=>(!q||(p.title+p.address+p.city).toLowerCase().includes(q))&&(!f.city||p.city===f.city)&&(!f.minPrice||p.price>=+f.minPrice)&&(!f.maxPrice||p.price<=+f.maxPrice)&&(!f.rooms||(f.rooms==='5'?p.rooms>=5:p.rooms===+f.rooms))).sort(sorts[sort])},[properties,f,sort]);
 const patch=p=>setF(o=>({...o,...p}));
 return <div className="mx-auto max-w-7xl px-4 py-8"><h1 className="mb-6 text-3xl font-extrabold">Үйлөр каталогу</h1>
  <SearchBar values={f} onChange={patch}/>
  <div className="mt-6 flex items-center justify-between gap-3"><p className="text-sm text-slate-500">{st.loading?'Жүктөлүүдө...':`${items.length} жарыя табылды`}</p>
   <div className="flex gap-2"><button onClick={()=>setShow(!show)} className="btn-outline !py-2 lg:hidden"><SlidersHorizontal size={16}/>Фильтр</button>
    <select className="input !w-auto !py-2" value={sort} onChange={e=>setSort(e.target.value)}><option value="new">Жаңы жарыялар</option><option value="asc">Арзанынан кымбатына</option><option value="desc">Кымбатынан арзанына</option></select></div></div>
  <div className="mt-6 grid gap-6 lg:grid-cols-[280px_1fr]">
   <div className={show?'block':'hidden lg:block'}><FilterSidebar f={f} onChange={patch} onReset={()=>setF(blank)}/></div>
   <PropertyGrid items={items} loading={st.loading} error={st.error} onRetry={load}/></div></div>}
