import {useNavigate} from 'react-router-dom';import LoginForm from '../components/LoginForm';
export default function Auth(){
 const nav=useNavigate();
 return <div className="grid place-items-center bg-slate-50 px-4 py-16"><div className="w-full max-w-md"><h1 className="mb-6 text-center text-3xl font-extrabold">HomeMarket'ке кош келиңиз</h1><LoginForm onSuccess={()=>nav('/')}/></div></div>}
