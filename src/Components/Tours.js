import React from 'react'

const Tours = () => {
  return (
    <div>
         <div id='tours' className=' pt-2'>
          <h1 className='text-center'>Tours</h1>
          <div className='container-fluid w-75 '>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>JUL16</div>
                    <div className='location col-4'>DETROIT,MI</div>
                    <div className='venue col-4'>DTE ENERGY MUSIC THEATER</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>JUL19</div>
                    <div className='location col-4'>TORONTO,ON</div>
                    <div className='venue col-4'>BUDWEISER STAGE</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>JUL22</div>
                    <div className='location col-4'>BRISTOW,VA</div>
                    <div className='venue col-4'>JILLY LUBE LIVE</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>JUL29</div>
                    <div className='location col-4'>PHONIX,OZ</div>
                    <div className='venue col-4'>AK-CHIN PAVILION</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>AUG02</div>
                    <div className='location col-4'>LAS VEGAS,NV</div>
                    <div className='venue col-4'>T-MOBILE ARENA</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
               <div className='tour row border-bottom-1 border-dark p-2' style={{borderBottom:"black 2px solid"}}>
                    <div className='date col-2'>AUG-7</div>
                    <div className='location col-4'>CONCARD,CA</div>
                    <div className='venue col-4'>CONCARD PAVILION</div>
                    <button className='btn btn-primary col-2 '>BUY TICKETS</button>
               </div>
          </div>
    </div>
    </div>
  )
}

export default Tours