import {useState} from 'react';import {useNavigate} from 'react-router-dom';import {ImagePlus,X,Check} from 'lucide-react';
import {useApp} from '../context/AppContext';import Field from './Field';import Modal from './Modal';
const empty={title:'',price:'',city:'',address:'',rooms:'',area:'',description:'',phone:''};
export default function AddPropertyForm(){
 const {addProperty,user}=useApp();const nav=useNavigate();
 const [f,setF]=useState(empty);const [imgs,setImgs]=useState([]);const [err,setErr]=useState({});const [done,setDone]=useState(false);
 const set=k=>e=>setF({...f,[k]:e.target.value});
 const upload=e=>{[...e.target.files].forEach(file=>{const r=new FileReader();r.onload=()=>setImgs(a=>[...a,r.result].slice(0,6));r.readAsDataURL(file)});e.target.value=''};
 const submit=e=>{e.preventDefault();const x={};
  if(f.title.trim().length<5)x.title='Кеминде 5 символ';
  if(!(+f.price>0))x.price='Баасын киргизиңиз';
  if(!f.city.trim())x.city='Шаарды жазыңыз';
  if(f.address.trim().length<5)x.address='Дарек толук эмес';
  if(!(+f.rooms>0))x.rooms='Бөлмө санын жазыңыз';
  if(!(+f.area>0))x.area='Аянтын жазыңыз';
  if(f.description.trim().length<20)x.description='Кеминде 20 символ жазыңыз';
  if(!imgs.length)x.images='Кеминде 1 сүрөт жүктөңүз';
  setErr(x);if(Object.keys(x).length)return;
  addProperty({title:f.title,city:f.city,address:f.address,description:f.description,price:+f.price,rooms:+f.rooms,area:+f.area,floor:1,images:imgs,features:['Жаңы жарыя'],seller:{name:user?.name||'Сатуучу',phone:f.phone||'+996 000 000 000'}});
  setDone(true)};
 const inp=(k,l,p={})=><Field label={l} error={err[k]}><input className="input" value={f[k]} onChange={set(k)} {...p}/></Field>;
 return <form onSubmit={submit} noValidate className="card space-y-5 p-6 md:p-8">
  {inp('title','Үйдүн аталышы')}
  <div className="grid gap-5 sm:grid-cols-2">{inp('price','Баасы ($)',{type:'number',min:0})}{inp('city','Шаар')}</div>
  {inp('address','Дареги')}
  <div className="grid gap-5 sm:grid-cols-3">{inp('rooms','Бөлмө саны',{type:'number',min:1})}{inp('area','Аянты (м²)',{type:'number',min:1})}{inp('phone','Телефон',{placeholder:'+996 ...'})}</div>
  <Field label="Сүрөттөмө" error={err.description}><textarea rows="4" className="input" value={f.description} onChange={set('description')}/></Field>
  <div><p className="mb-2 text-sm font-medium">Сүрөттөр (6га чейин)</p>
   <div className="flex flex-wrap gap-3">{imgs.map((s,i)=><div key={i} className="relative"><img src={s} alt="" className="h-24 w-24 rounded-xl object-cover"/><button type="button" onClick={()=>setImgs(imgs.filter((_,k)=>k!==i))} className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-slate-900 text-white"><X size={12}/></button></div>)}
    <label className="grid h-24 w-24 cursor-pointer place-items-center rounded-xl border-2 border-dashed border-slate-300 text-slate-400 transition hover:border-blue-600 hover:text-blue-600"><ImagePlus/><input type="file" accept="image/*" multiple hidden onChange={upload}/></label></div>
   {err.images&&<p className="mt-1 text-xs text-red-500">{err.images}</p>}</div>
  <button className="btn-primary w-full md:w-auto">Жарыяны жарыялоо</button>
  <Modal open={done} onClose={()=>nav('/catalog')} title="Жарыя кошулду"><div className="space-y-4 text-center"><Check className="mx-auto text-blue-600" size={40}/><p className="text-slate-600">Жарыяңыз каталогго чыкты.</p><button type="button" onClick={()=>nav('/catalog')} className="btn-primary w-full">Каталогго өтүү</button></div></Modal>
 </form>}
