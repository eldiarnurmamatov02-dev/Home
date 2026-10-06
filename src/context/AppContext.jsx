import {createContext,useContext,useEffect,useState} from 'react';
import {properties as seed} from '../data/properties';
const Ctx=createContext();
export const useApp=()=>useContext(Ctx);
const load=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
export function AppProvider({children}){
 const [favorites,setFav]=useState(()=>load('hm_fav',[]));
 const [user,setUser]=useState(()=>load('hm_user',null));
 const [properties,setProps]=useState(seed);
 useEffect(()=>{localStorage.setItem('hm_fav',JSON.stringify(favorites))},[favorites]);
 useEffect(()=>{localStorage.setItem('hm_user',JSON.stringify(user))},[user]);
 const toggleFav=id=>setFav(f=>f.includes(id)?f.filter(i=>i!==id):[...f,id]);
 const addProperty=p=>setProps(l=>[{...p,id:Date.now(),date:new Date().toISOString()},...l]);
 return <Ctx.Provider value={{favorites,toggleFav,user,setUser,properties,addProperty}}>{children}</Ctx.Provider>}
