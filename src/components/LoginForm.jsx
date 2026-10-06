import {useState} from 'react';import {useApp} from '../context/AppContext';import Field from './Field';
export default function LoginForm({onSuccess}){
 const {setUser}=useApp();const [mode,setMode]=useState('login');const [f,setF]=useState({name:'',email:'',password:''});const [err,setErr]=useState({});
 const reg=mode==='register';const set=k=>e=>setF({...f,[k]:e.target.value});
 const submit=e=>{e.preventDefault();const x={};
  if(reg&&f.name.trim().length<2)x.name='Атыңызды жазыңыз';
  if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Email туура эмес';
  if(f.password.length<6)x.password='Кеминде 6 символ';
  setErr(x);if(Object.keys(x).length)return;
  setUser({name:f.name.trim()||f.email.split('@')[0],email:f.email});onSuccess?.()};
 return <div className="card w-full max-w-md p-8">
  <div className="mb-6 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
   {[['login','Кирүү'],['register','Катталуу']].map(([k,l])=><button key={k} type="button" onClick={()=>{setMode(k);setErr({})}} className={`rounded-lg py-2 transition ${mode===k?'bg-white shadow':'text-slate-500'}`}>{l}</button>)}</div>
  <form onSubmit={submit} className="space-y-4" noValidate>
   {reg&&<Field label="Аты-жөнү" error={err.name}><input className="input" value={f.name} onChange={set('name')}/></Field>}
   <Field label="Email" error={err.email}><input type="email" className="input" placeholder="name@mail.com" value={f.email} onChange={set('email')}/></Field>
   <Field label="Сырсөз" error={err.password}><input type="password" className="input" value={f.password} onChange={set('password')}/></Field>
   <button className="btn-primary w-full">{reg?'Катталуу':'Кирүү'}</button></form></div>}
