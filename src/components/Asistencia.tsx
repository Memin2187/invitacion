'use client'
import style from './Fondo.module.css'

import Link from "next/link"
import { ImWhatsapp } from "react-icons/im"


const Asistencia = () => {
  return (
    <>
      <div id="asistencia" className={`${style.fondo_total} lg:flex w-full pt-12 p-4 lg:justify-center`}
      
      >
    
      <div className="rounded-xl bg-white p-6 text-center shadow-2xl lg:w-1/4">
       
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Confirmar Asistencia</h1>
        <div className="flex items-center justify-center mb-2">
          
          <ImWhatsapp  size={50}/>

        </div>
          <p>por WhatsApp</p>

          <button  className="bg-gray-400 text-white rounded-lg p-2 mr-6 mt-4">
            <Link href={"https://api.whatsapp.com/send?phone=+4492104553&text=Hola,%20quiero%20confirmar%20mi%20asistencia%20a%20los%20XV%20de%20Dafne"} >Sí asistiré </Link>
          </button>

          <button className="bg-gray-400 text-white rounded-lg p-2 mt-4">
            <Link href={"https://api.whatsapp.com/send?phone=+4492104553&text=Hola,%20no%20podre%20asistir%20a%20los%20XV%20de%20Dafne"} >No asistiré </Link>
          </button>
      </div>

    
      
   
  </div>
    </>
  )
}

export default Asistencia