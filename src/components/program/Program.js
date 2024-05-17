import React from 'react'
// import scroll  from '../images/scroll.png'
import mathone  from '../images/math1.png'
import mathtwo  from '../images/math2.png'
import robo  from '../images/robo.png'
import { PiCalculatorDuotone } from "react-icons/pi";
// import { FaBrain } from "react-icons/fa6";
// import { RiRobot3Line } from "react-icons/ri";
import mind from '../images/mind.png'
import rob from '../images/rob.png'
import '../program/program.css'
const Program = () => {
  return (
   <>
    <div className='program_main'> 
     <div className="txts_hidden ">
     <h3 className='text-center cusfontfamily bolder'>
        Our Program
      </h3>
     </div>
      <div className="program_contents">
       <div className="programone text-center">
      <div className="twoimg">
      <img src={mathone} alt="large" className='programimg' />
        <i className='iconwrap'>
        <PiCalculatorDuotone className='colorchange'/>
        </i>
      </div>
        <h5>MIND MATH JUNIOR</h5>
        <p>foundational skills for young learners</p>

       </div>
       <div className="programtwo  text-center">
     <div className="twoimg">
     <img src={mathtwo} alt="large" className='programimg'/>
       <i className='iconwrap'>
       <img src={mind} className='colorchange' height={22} />
       </i>
     </div>
        <h5>MIND MATH SENIOR</h5>
        <p>Complex challenges for advanced students</p>

       </div>
       <div className="programthree  text-center">
     <div className="twoimg">
     <img src={robo} alt="large" className='programimg'/>
        <i className='iconwrap'><img src={rob} className='colorchange' height={25}/></i>
     </div>
        <h5>ROBOTICS FUNDAMENTALS</h5>
        <p>Learning with real-world applications.</p>

       </div>
      </div>
      
    </div>

    <div className="number_value_cont">
        <div className="wrap_number">
        <h2>BY THE <span className="violet">NUMBERS</span></h2>
        <div className="numbers">
           <div className="left">
           <i className='cusnumber'>1.5k +</i>
            <p className='fw'>students enrolled</p>
           </div>
           <div className="separator"></div>
           <div className="right">
           <i className='cusnumber'>98%</i>
            <p className='fw'>parent satisfaction rate</p>
           </div>
        </div>
        </div>

    </div>
   </>
  )
}

export default Program
