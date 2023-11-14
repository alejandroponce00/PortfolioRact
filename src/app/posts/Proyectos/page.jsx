import React from 'react'
import Link from 'next/link'
import Deletrea from '@/app/components/texto_animado/page'

function page() {
  return (
    <div className='principal'>
      <h1 className="text-info text-center "><Deletrea escribe="Proyectos" /></h1>
        <nav className='text-center'>
        <ul>
        <li><Link href="/posts/contador"><h6>Contador</h6></Link></li>
    <li><Link href="/posts/contador_automatico"><h6>Contador Automatico</h6>
    </Link></li>
        <li>
          <Link href="https://alejandroponce00.github.io/PORTFOLIO/#">Portfolio HTML</Link>
        </li>
        <li>
          <Link href="https://alejandroponce00.github.io/ArteSanaMosaicos/">ArteSana Mosaicos</Link>
        </li>
     
    
        </ul></nav>
    </div>
  )
}

export default page