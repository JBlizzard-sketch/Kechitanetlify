'use client'
import { useRouter } from 'next/navigation'
export default function LocaleSwitcher(){
  const router = useRouter()
  const setLocale = (l:string)=>{ localStorage.setItem('kechita_locale', l); router.refresh() }
  return (<div className="flex gap-2"><button onClick={()=>setLocale('en')} className="px-2 py-1 border rounded">EN</button><button onClick={()=>setLocale('sw')} className="px-2 py-1 border rounded">SW</button></div>)
}
