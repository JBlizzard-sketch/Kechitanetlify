import React from 'react'
export default function StructuredDataServer(){
  const org = { '@context':'https://schema.org', '@type':'Organization', 'name':'Kechita Capital', 'url': process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000', 'logo':'https://source.unsplash.com/1600x900/?nairobi,skyline' }
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />)
}
