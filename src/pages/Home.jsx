import {Link} from 'react-router-dom';import {ShieldCheck,Zap,BadgeDollarSign,Headphones} from 'lucide-react';
import Hero from '../components/Hero';import PropertyGrid from '../components/PropertyGrid';import {useApp} from '../context/AppContext';
const Section=({title,to,children})=><section className="mx-auto mt-16 max-w-7xl px-4"><div className="mb-6 flex items-end justify-between"><h2 className="text-2xl font-extrabold md:text-3xl">{title}</h2>{to&&<Link to={to} className="text-sm font-semibold text-blue-600 hover:underline">Баары</Link>}</div>{children}</section>;
const perks=[[ShieldCheck,'Текшерилген жарыялар','Ар бир жарыя жарыялангандан мурун каралат.'],[Zap,'Тез издөө','Шаар, баа жана бөлмө боюнча секундада табыңыз.'],[BadgeDollarSign,'Комиссиясыз','Сатуучу менен түздөн-түз сүйлөшүңүз.'],[Headphones,'Колдоо кызматы','Суроолоруңузга күн сайын жооп беребиз.']];
export default function Home(){
 const {properties}=useApp();
 const popular=properties.slice(0,3);const latest=[...properties].sort((a,b)=>new Date(b.date)-new Date(a.date)).slice(0,3);
 return <><Hero/>
  <Section title="Популярдуу үйлөр" to="/catalog"><PropertyGrid items={popular}/></Section>
  <Section title="Жаңы жарыялар" to="/catalog"><PropertyGrid items={latest}/></Section>
  <Section title="Эмне үчүн HomeMarket?"><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{perks.map(([I,t,d])=><div key={t} className="card p-6 hover:-translate-y-1 hover:shadow-xl"><span className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-600"><I/></span><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-slate-500">{d}</p></div>)}</div></Section></>}
