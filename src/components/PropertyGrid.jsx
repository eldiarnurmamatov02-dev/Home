import {Link} from 'react-router-dom';import {AlertTriangle,SearchX} from 'lucide-react';import PropertyCard from './PropertyCard';
const Msg=({icon:I,title,text,children})=><div className="card col-span-full mx-auto w-full max-w-lg p-10 text-center"><I className="mx-auto mb-3 text-blue-600" size={40}/><h3 className="text-lg font-bold">{title}</h3><p className="mt-1 text-sm text-slate-500">{text}</p><div className="mt-5">{children}</div></div>;
export default function PropertyGrid({items,loading,error,onRetry,removable}){
 const wrap="grid gap-6 sm:grid-cols-2 xl:grid-cols-3";
 if(loading)return <div className={wrap}>{Array.from({length:6}).map((_,i)=><div key={i} className="card animate-pulse overflow-hidden"><div className="h-56 bg-slate-100"/><div className="space-y-3 p-5"><div className="h-5 w-1/3 rounded bg-slate-100"/><div className="h-4 w-2/3 rounded bg-slate-100"/><div className="h-10 rounded bg-slate-100"/></div></div>)}</div>;
 if(error)return <div className={wrap}><Msg icon={AlertTriangle} title="Жүктөөдө ката кетти" text="Маалыматты алуу мүмкүн болгон жок. Кайра аракет кылыңыз."><button onClick={onRetry} className="btn-primary">Кайра жүктөө</button></Msg></div>;
 if(!items.length)return <div className={wrap}><Msg icon={SearchX} title="Эч нерсе табылган жок" text="Фильтрди өзгөртүп же издөө сөзүн тазалап көрүңүз."><Link to="/catalog" className="btn-outline">Бардык үйлөр</Link></Msg></div>;
 return <div className={wrap}>{items.map(p=><PropertyCard key={p.id} p={p} removable={removable}/>)}</div>}
