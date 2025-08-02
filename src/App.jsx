import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'

const App = () => {

  // useGSAP(()=> {
  //   gsap.to(".box",{
  //     x:1000,
  //     duration:2,
  //     delay:1
  //   })
  // })

  // const gsapRef = useRef()
  // useGSAP(()=>{
  //   gsap.to(gsapRef.current,{
  //     x:1500,
  //     duration:2,
  //     delay:1,
  //     rotate:720
  //   })
  // })
  return (


 <main>

  <div className="container">
    <div className="circle">
      <div className="box">
        
      </div>
    </div>
  </div>
 </main>

  


  )
}

export default App


// eg1
{/* <main>
  <div ref={gsapRef} className="box">

  </div>
</main> */}
