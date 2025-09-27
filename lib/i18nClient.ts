export async function t(key:string){
  const locale = (typeof window !== 'undefined' && localStorage.getItem('kechita_locale')) || 'en'
  try{
    const data = await fetch('/locales/'+locale+'.json').then(r=>r.json())
    return data[key] || key
  }catch(e){ return key }
}
