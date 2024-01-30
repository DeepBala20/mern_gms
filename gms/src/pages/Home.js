import React from 'react'

export default function Home() {
  return (
    <div className='bg my-0'>
      <p className='text-center text-green-950 text-2xl font-serif pt-40 pl-10 pr-96'>
      A grocery store is another form of retailing, primarily focusing on selling food, along with non-food household products, such as bathroom or cleaning products, to their consumers. Generally, most grocery stores will carry canned items, fish, dairy products, raw and prepared meats, baked products, fresh and frozen fruits and vegetables, and many different snacks.1 Larger grocery stores, also known as supermarkets, can carry non-food products, such as clothing and household items due to the immense amount of space they occupy and their large profit allowing them to reach a more diverse consumer market, also allowing for consumers to find all their needs in one area.  Depending on their geographic concentration, grocery stores will vary in size and products they will carry to fit and satisfy their consumer’s needs.  Some examples of grocery stores or supermarket that excel in this category are Loblaw’s, Metro and Sobeys.
      </p>
      
        <div className='mt-40 text-center  w-full text-6xl font-bold text-teal-800 '>Food Store</div>
        <div className='flex mt-10 justify-evenly'>
          <div className='bg-slate-400 border w-1/5'><img style={{width:"100%",height:"100%"}} src='assets/masalamasti.jpeg' /></div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/breakfast.jpeg' />  </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/biscuits.jpeg' /> </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/juice.jpeg' /> </div>
        </div>

        <div className='mt-20 text-center  w-full text-6xl font-bold text-teal-800 '>Staples</div>
        <div className='flex mt-10  justify-evenly'>
          <div className='bg-slate-400 border w-1/5'><img style={{width:"100%",height:"100%"}} src='assets/rice.jpg' /></div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/dal.jpg'/>  </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/atta.jpg'/> </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/dryfruit.jpg'/> </div>
        </div>

        <div className='mt-20 text-center  w-full text-6xl font-bold text-teal-800 '>cleaning & household</div>
        <div className='flex mt-10 justify-evenly'>
          <div className='bg-slate-400 border w-1/5'><img style={{width:"100%",height:"100%"}} src='assets/floorcleaners.jpg' /></div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/kitchencleaners.jpg' />  </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/detergent.jpg' /> </div>
          <div className='bg-slate-400 border w-1/5' ><img style={{width:"100%",height:"100%"}} src='assets/fresheners.jpg' /></div>
        </div>

        <div className='mt-20 text-center  w-full text-6xl font-bold text-teal-800 '>Brands</div>
        <div className='flex mt-10 justify-evenly'>
          <div className='bg-slate-400 border w-1/6'><img style={{width:"100%",height:"100%"}} src='assets/amul.jpg' /><br/>AMUL</div>
          <div className='bg-slate-400 border w-1/6' ><img style={{width:"100%",height:"100%"}} src='assets/himalaya.jpg' /><br/>HIMALAYA</div>
          <div className='bg-slate-400 border w-1/6' ><img style={{width:"100%",height:"100%"}} src='assets/lux.jpg' /><br/>LUX </div>
          <div className='bg-slate-400 border w-1/6' ><img style={{width:"100%",height:"100%"}} src='assets/parle.jpg' /><br/>PARLE</div>
          <div className='bg-slate-400 border w-1/6' ><img style={{width:"100%",height:"100%"}} src='assets/nestle.jpg' /><br/>NESTLE</div>
        </div>

        <div className='mt-20 text-center text-6xl font-bold text-teal-800 '>Guarantees</div>
        <div className='flex mt-10 justify-evenly'>
          <div className=' w-1/8'><img  src='assets/quality.jpg' /><br/>QUALITY<br/>You Can Trust</div>
          <div className=' w-1/8' ><img  src='assets/dilivery.jpg' /><br/>FREE<br/>Delivery  </div>
          <div className=' w-1/8' ><img  src='assets/time.jpg' /><br/>ON TIME<br/>Guarantee </div>
          <div className=' w-1/8' ><img  src='assets/return.jpg' /><br/>NO QUESTIONS ASKED<br/>Return Policy</div>
        </div>

        <div>
          <div className='mt-20 text-center text-6xl font-bold text-teal-800 bg-slate-300'>
              Happy Shoping
          </div>
        </div>

    </div> 
  )
}
