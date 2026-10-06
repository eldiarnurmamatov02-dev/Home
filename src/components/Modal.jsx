import {useEffect} from 'react';import {X} from 'lucide-react';
export default function Modal({open,onClose,title,children}){
 useEffect(()=>{if(!open)return;const h=e=>e.key==='Escape'&&onClose();window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h)},[open,onClose]);
 if(!open)return null;
 return <div className="fixed inset-0 z-50 grid place-items-center bg-slate-900/50 p-4 backdrop-blur-sm" onClick={onClose}>
  <div className="card w-full max-w-md animate-[pop_.2s_ease] p-6" onClick={e=>e.stopPropagation()}>
   <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-bold">{title}</h3><button aria-label="Жабуу" onClick={onClose}><X size={20}/></button></div>{children}</div></div>}
