import {AiOutlineArrowLeft} from 'react-icons/ai'


const Card = ()=>{
    return(
        <div className="flex flex-row justify-between text-white" style={{height:"620px"}}>
            <div id="left" className="hidden sm:flex sm:w-1/12 items-center justify-start"></div>
            <div id='center' className="w-full cardBackground1">
                <div className="h-3/4 sm:h-3/5"></div>
                <div className="h-1/4 sm:h-2/5 sm:w-1/2 sm:ml-12 lg:w-1/3 lg:ml-20 bg-zinc-800 opacity-80">
                 <div className="text-center flex-col justify-between">
                    <div className="text-2xl pt-2 mb-3 h-2/5">
                        Profesjonalna obsługa
                    </div>
                    <div className="mb-2 px-2 h-2/5 ">
                        <p>Potrzebna szybka i precyzyjna działalność?
                        Oferujemy najwyższej jakości usługi na rynku!
                        </p>
                    </div>
                  </div>
                    <div className="text-2xl bg-orange-800 h-1/5 flex items-center justify-center">
                        Skontaktuj się z nami!
                    </div>
                </div>
            </div>
            <div id="right" className=" sm:w-1/12 flex items-center justify-center ">

            </div>
        </div>
    )
}

export default Card