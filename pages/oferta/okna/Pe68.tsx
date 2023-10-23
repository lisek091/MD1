import Footer from '@/components/mainpage/Footer'
import Nav from '@/components/noweWersje/nav/Nav'
import React,{useState} from 'react'
const Pe68 = () => {

  const [select,setSelect] = useState(true)
  const handleClick = () =>{
    setSelect(!select)
  }
  const backgroundImagePE78 = "/PE68.png"
  const [window,setWindow] = useState(backgroundImagePE78)
  const cardStyle = {
    backgroundImage: `url(${window})`,
  };
  const handlechange = ()=>{
    if(window==="/PE68.png"){
      setWindow("/PE68H.png")
    }
    else 
    {setWindow("/PE68.png")}
  }
  return (
    <div className='bg-slate-100 min-h-screen flex flex-col'>
      <Nav/>
        <div className='text-slate-100'>.</div> 
        <div className='text-white mt-10'>.</div>
      <p className='text-4xl justify-center flex'>Okna PE68 / PE68HI</p>
      <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 p-2'>
            <div style={cardStyle} className='w-full bg-contain bg-center bg-no-repeat h-96 sm:h-[32rem] mt-8'>
              <button className='border-2 border-slate-400 p-1 w-16 ' onClick={handlechange}>{window==="/PE68.png" ? "PE68" :"PE68HI"}</button>
            </div>
          <div>
            <div className='flex justify-center'>
              <button onClick={handleClick} className={`mx-8 my-2 ${select ? "underline font-semibold":""}`}>CHARAKTERYSTYKA</button>
              <button onClick={handleClick} className={`mx-8 my-2  ${select ? "":"underline font-semibold"}`}>PARAMETRY TECHNICZNE</button>
            </div>
            {select ? (<div className='text-lg px-4'>
                <p className='border-y-2 border-orange-700'>System o trzykomorowej konstrukcji profili z rowkiem okuciowym w standardzie Euro oraz rowkiem okuciowym stosowanym w oknach i drzwiach balkonowych z profili PVC lub drewnianych o bardzo dobrych właściwościach izolacyjnych.</p>
                <ul className='list-disc'>
                  <li className='my-2'>wysoka izolacyjność termiczna - dzięki zoptymalizowanej przekładce termicznej 32 mm oraz dwu lub jednokomponentowej uszczelce centralnej</li>
                  <li className='border-y-2 border-orange-700 my-2'>łatwy montaż szerokiej gamy okuć</li>
                  <li className='border-b-2 border-orange-700 my-2'>trzykomorowa konstrukcja zapewnia wysoką wytrzymałość profili, umożliwiając wykonywanie konstrukcji o dużych gabarytach</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość zlicowania skrzydeł okien z ościeżnicą (jedna płaszczyzna po stronie zewnętrznej)</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość gięcia profili</li>
                  <li className='border-b-2 border-orange-700 my-2'>wiele sposobów połączeń narożnych</li>
                  <li className='border-b-2 border-orange-700 my-2'>możliwość tworzenia wielu wariantów okien np. rozwierano-uchylne, otwierane na zewnątrz, ukryte skrzydło, obrotowe itp.</li>
                  <li className='my-2'>różne warianty izolacyjności termicznej, w zależności od zastosowanych wkładów izolacyjnych: PE68+, PE68HI</li>
                </ul>
                <div className='mt-28'></div>
            </div>) :  (<div className='px-4'>
                <ul className='list-disc text-lg font-semibold '>
                  <li className='border-y-2 border-orange-700'>Kształtowniki aluminiowe
                  <p className="font-light">wykonane ze stopu aluminium EN AW-6060 PN-EN 573-3 stan T66 wg PN-EN 515 i spełniają wymaganie PN-EN 12020-1</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Uszczelki
                  <p className="font-light">z kauczuku syntetycznego EPDM wg normy PN-EN 12365-1 oraz z TPE wg DIN 16941R3</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość ościeżnicy
                  <p className="font-light">68mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Głębokość skrzydła
                  <p className="font-light">76 mm</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalne wymiary skrzydła
                  <p className="font-light">L 1550 x H 2200 mm, L 1200 x H 2400 mm, L 1100 x H 2700 mm - ukryte skrzydło</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Maksymalna waga skrzydła
                  <p className="font-light">200 kg</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wypełnienia
                  <p className="font-light">Szyby pojedyncze, zespolone lub panele nieprzezierne o grubość: ościeżnica: 13 - 51 mm, skrzydło: 13 - 59 mm.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Przepuszczalność powietrza
                  <p className="font-light">klasa 4</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Wodoszczelność
                  <p className="font-light">klasa E1500</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na obciążenie wiatrem
                  <p className="font-light">klasa C5</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Izolacyjność termiczna
                  <p className="font-light">dla PE68: Uf od 1,8 W/m2K, Uw = 0,93 W/m2K (obliczono dla okna: L 1480 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa)<br/>dla PE68HI: Uf od 1,4 W/m2K, Uw = 0,84 W/m2K (obliczono dla okna: L 1480 x H 2180 mm, Ug = 0,5 W/m2K, szyba dwukomorowa).</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Sposoby wykończenia powierzchni
                  <p className="font-light">Malowanie proszkowe farbami poliestrowymi spełniające wymogi Qualicoat, do wyboru kolory z palety RAL; anodowanie naturalne i w kolorach - spełniające wymogi Qualanod; lakierowanie na „kolor” drewna - wykończenie powierzchni spełnia wysokie wymagania antykorozyjne.</p>
                  </li>
                  <li className='border-b-2 border-orange-700'>Odporność na włamanie
                  <p className="font-light">Klasa RC2, RC3 wg PN-EN 1627</p>
                  </li>
                  <li className=''>Dopuszczenia i świadectwa jakości
                  <p className="font-light">Wstępne badania typu wg PN-EN 14351-1 + A1</p>
                  </li>
                </ul>
            </div>)}
          </div>
      </div>
      <div className='mt-auto w-full'>
          <Footer/>
      </div>
    </div>
  )
}

export default Pe68