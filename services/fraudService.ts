export function basicFraudCheck({ phone, amount }){
  const issues = []
  if(phone && phone.includes('000')) issues.push('suspicious-phone')
  if(amount > 1000000) issues.push('large-amount')
  return { flagged: issues.length>0, issues }
}
