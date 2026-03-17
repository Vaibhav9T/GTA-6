import React from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

function App() {

  let [showContent, setShowContent] = useState(false)

  // GSAP landing page animation
  useGSAP(()=>{
    const tl=gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate: 10,
      duration : 2,
      ease : "Power4.easeInOut",
      transformOrigin : "50% 50%"
    })

    .to(".vi-mask-group",{
      scale: 10,
      duration : 2,
      delay : -1.8,
      ease : 'Expo.easeInOut',
      transformOrigin : "50% 50%",
      opacity : 0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })

  })

  //Selfie effect
  useGSAP(()=>{
    const main=document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      // console.log(e.clientX, e.clientY);
      const xMove= (e.clientX / window.innerWidth-.5)*40;
      console.log(xMove);
      // const yMove= (e.clientY / window.innerHeight-.5)*40;

      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
        x: xMove,
      });

      gsap.to(".bcg", {
        x: xMove * 1.4,
      });
    })
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id='viMask'>
              <rect width='100%' height='100%' fill='black' />
              <g className='vi-mask-group'>
                <text x="50%"
                y="50%"
                fontSize="250"
                textAnchor='middle'
                fill='white'
                dominantBaseline='middle'
                fontFamily='Arial Black'
                >VI</text>
              </g>
            </mask>
          </defs>
          <image 
          href='./bg.png'
          width="100%"
          height="100%"
          preserveAspectRatio='xMidYMid slice'
          mask='url(#viMask)'
          />
        </svg>
      </div>

      {showContent && 

      <div className='main w-full '>
        {/* Landing page start*/}
        <div className='landing w-full h-screen bg-black'>

          {/*Navbar*/}
          <div className="navbar pl-10 absolute top-0 left-0 z-[10] w-full py-10 px-1">
            <div className='logo flex gap-7'>
              <div className="lines flex flex-col gap-[5px]">
              <div className="line w-15 h-2 bg-white"></div>
              <div className="line w-8 h-2 bg-white"></div>
              <div className="line w-5 h-2 bg-white"></div>
            </div>
              <h3 className='text-4xl mt-[-9px] leading-none bold text-white'>Rockstar</h3>
            </div>
          </div>

          {/*Images8*/}
          <div className='relative overflow-hidden imageDiv w-full h-screen'>
            <img className="sky scale-[1.3] absolute top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
            <img className="bcg scale-[1.1] absolute top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
            <div className="text text-white flex flex-col gap-10 absolute top-10 left-1/2 -translate-x-1/2">
              <h1  className='text-[12rem] leading-none -ml-40'>grand</h1>
              <h1 className='text-[12rem] leading-none -ml-20'>theft</h1>
              <h1 className='text-[12rem] leading-none -ml-40'>auto</h1>
            </div>
            <img className="girl absolute bottom-[-55%] left-1/2 -translate-x-1/2 scale[1.4]" src="./girlbg.png" alt="" />
          </div>

          {/*Bottom*/}
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className=' items-center flex gap-4'>
              <i className="text-4xl ri-arrow-down-long-line"></i>
              <h3 className="text-xxl font-[Helvitica_Now_Display]">Scroll Down</h3>
            </div>
            <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]" src="./ps5.png" alt="" />
          </div>
          
        </div>
          {/* Landing page end*/}

          <div className='w-full flex items-center justify-center overflow-hidden  bg-black h-screen'>
              <div className="contr w-full h-[80%] text-white flex">
              <div className='relative limg w-1/2 h-full'>
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="./imag.png" alt="" />
                </div>
              <div className="rimg w-[35%]">
                <h1 className='text-8xl'>Still Coming</h1>
                <h1 className='text-8xl'>Not Hunting</h1>

                <p className='mt-10 text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas nisi, officia iusto modi, distinctio necessitatibus, quae tenetur dolorum nemo odit a alias totam!</p>
                <p className='mt-3  text-xl font-[Helvetica_Now_Display]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quia delectus cum laboriosam!</p>
              <button className='bg-yellow-500 px-8 py-6 mt-10  text-2xl  text-black'>Download Now</button>
              </div>
              </div>
          </div>
      </div>
      }
    </>
  )
}

export default App