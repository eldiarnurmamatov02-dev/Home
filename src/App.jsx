import {useEffect} from 'react';import {Routes,Route,useLocation} from 'react-router-dom';
import Navbar from './components/Navbar';import Footer from './components/Footer';
import Home from './pages/Home';import Catalog from './pages/Catalog';import Details from './pages/Details';
import Favorites from './pages/Favorites';import Auth from './pages/Auth';import Sell from './pages/Sell';
export default function App(){
 const {pathname}=useLocation();useEffect(()=>window.scrollTo(0,0),[pathname]);
 return <div className="flex min-h-screen flex-col"><Navbar/>
  <main className="flex-1"><Routes>
   <Route path="/" element={<Home/>}/><Route path="/catalog" element={<Catalog/>}/>
   <Route path="/property/:id" element={<Details/>}/><Route path="/favorites" element={<Favorites/>}/>
   <Route path="/auth" element={<Auth/>}/><Route path="/sell" element={<Sell/>}/>
   <Route path="*" element={<Catalog/>}/>
  </Routes></main><Footer/></div>}
