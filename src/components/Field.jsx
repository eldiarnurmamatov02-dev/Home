export default function Field({label,error,children}){
 return <label className="block text-sm font-medium">{label}<div className="mt-1">{children}</div>{error&&<p className="mt-1 text-xs text-red-500">{error}</p>}</label>}
