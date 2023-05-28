import React from 'react'
const FooterContact = () => {
  return (
    <div className='grid grid-cols-2 mt-4 p-4'>
        <div className='text-center'>
            <p className='text-4xl'>Zainteresowany naszą oferta?</p>
            <p className='text-2xl mt-2'>Zadzwoń i poznaj indywidualną oferta dla Ciebie.</p>
            <p className='text-2xl mt-2'>Pon-Pt 9:00-17:00   tel:   731185100</p>
        </div>
        <div className='text-center'>
            <p className='text-4xl'>Lub napisz do nas adres:</p>
            <p className='text-2xl mt-2'>biuro@md1.pl</p>
            <p className='text-2xl mt-2'>Odpowiemy najszybciej jak to możliwe!</p>
        </div>
    </div>
  )
}

export default FooterContact