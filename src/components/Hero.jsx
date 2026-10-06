import {useState} from 'react';import {useNavigate} from 'react-router-dom';import SearchBar from './SearchBar';
export default function Hero(){
 const nav=useNavigate();const [v,setV]=useState({q:'',city:'',maxPrice:'',rooms:''});
 const go=()=>nav('/catalog?'+new URLSearchParams(Object.entries(v).filter(([,x])=>x)));
 return <section className="bg-gradient-to-b from-blue-50 to-white"><div className="mx-auto max-w-7xl px-4 py-20 text-center md:py-28">
  <h1 className="mx-auto max-w-3xl text-4xl font-extrabold tracking-tight md:text-6xl">Кыялыңыздагы үйдү табыңыз</h1>
  <p className="mx-auto mt-5 max-w-xl text-slate-500">Текшерилген жарыялар, ыңгайлуу издөө жана ишенимдүү сатуучулар бир жерде.</p>
  <div className="mx-auto mt-10 max-w-5xl"><SearchBar full values={v} onChange={p=>setV({...v,...p})} onSubmit={go}/></div>
 </div></section>}
