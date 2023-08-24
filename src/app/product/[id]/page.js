import ProductDetails from '@/components/UI/ProductDetails'
import React from 'react'

export default async function ProductDetailPage({ params }) {
    
    console.log(params.id)
    
    const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
        cache:"no-store"
    })
    const data = await res.json()
    
    console.log(data)
  return (
      <div>
          {/* <h1>this is detaild page and id is { params.id}</h1> */}
          <ProductDetails product={ data} />
      </div>
  )
}
