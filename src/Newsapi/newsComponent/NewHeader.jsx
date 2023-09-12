import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom'
import { BsPeopleFill, BsFillPlusSquareFill} from 'react-icons/bs'
import {FaBusinessTime , FaArrowRight} from 'react-icons/fa'
import {MdTheaterComedy } from 'react-icons/md'
import {GiMaterialsScience } from 'react-icons/gi'
import {FaRobot } from 'react-icons/fa'
import newsLogo from './newslpop.jpg'
import './NewsHeader.css'
const NewHeader = () => {
  
const [isOpen, setIsOpen] = useState(false)
 

   
const ctgOps2 = [
  {
    ct: "general",
    icon:<BsPeopleFill/>,
    toGo:"/"
  },
  {
    ct: "business",
    icon:<FaBusinessTime/>,
    toGo:"/business"
  },
  {
    ct: "entertainment",
    icon:<MdTheaterComedy/>,
    toGo:"/entertainment"
  },
  {
    ct: "health",
    icon:<BsFillPlusSquareFill/>,
    toGo:"/health"
  },
  {
    ct: "science",
    icon:<GiMaterialsScience/>,
    toGo:"/science"
  },
 
  {
    ct: "technology",
    icon:<FaRobot/>,
    toGo:"/technology"
  },
]
 



  return (
    <aside className={`h-screen  md:w-[240px] ${isOpen? "w-[150px]": "w-[65px]"} bg-blue-200/10 p-2 sticky top-0 -left-full transition duration-300 `}>
      <div className=' w-full h-full'>
       
      <div className="flex max-h-[200px] items-center relative justify-center">
        {/* <h1 className="md:text-2xl text-xl  font-semibold text-blue-950">LollyPop News</h1> */}
        <img src={newsLogo} className={ ` ${isOpen? "w-24  " :" w-12 lg:w-32" }`} alt="" />
         {/* button toggle  */}
         <div onClick={()=>setIsOpen(!isOpen)} className='text-indigo-500 shadow rounded-3xl p-2 shadow-purple-800  md:hidden text-xl  absolute -bottom-[20px] -right-4 cursor-pointer active:shadow-lg '> <FaArrowRight /> </div>
      </div>
      <nav className="pt-5 border-t-2 border-gray-400/30 ">
         
            <div className=" text-blue-950">
              <span className='text-xs font-bold tracking-wide'> Category </span>
              
            </div>
            <ul className="ps-2 text-sm text-gray-800">
              
              {
                ctgOps2.map(navOp => {
                  return <li key={navOp.toGo}  className=' relative group/list' >
                     <NavLink to={navOp.toGo}  className="flex vitems-center   hover:bg-[#673ab761]  px-2 py-2 rounded-md navac space-x-2 "  >

                        <span className=' text-2xl'>{navOp.icon}  </span> 
                        <span className={` ${isOpen? "" : " absolute invisible top-3 left-7  bg-blue-200/75 group-hover/list:visible md:visible  ml-4 py-1 px-2 rounded-md text-blue-500  md:m-0 md:p-0 md:text-gray-900   md:static ms:visible md:bg-transparent"} transition-all duration-100 `} >{navOp.ct}  </span> 

                      </NavLink>
                      </li>
                })
              }


           
          
        </ul>
      </nav>

      </div>
    </aside>

  )
}

export default NewHeader
