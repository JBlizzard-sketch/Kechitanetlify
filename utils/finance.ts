export function calcMonthly(amount:number, rate:number, term:number){
  const r = rate/100/12
  return Math.round((amount * r) / (1 - Math.pow(1+r, -term)))
}
