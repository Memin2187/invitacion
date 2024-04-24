'use client'


import { ImWhatsapp } from "react-icons/im"


const Asistencia = () => {
  return (
    <>
      <div className="lg:flex w-ful pt-12 p-4 bg-[url('../images/fondito.jpg')] lg:justify-center"
      
      >
    
      <div className="rounded-xl bg-white p-6 text-center shadow-2xl lg:w-1/4">
       
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Confirmar Asistencia</h1>
        <div className="flex items-center justify-center mb-2">
          
          <ImWhatsapp  size={50}/>

        </div>
          <p>por WhatsApp</p>

          <button className="bg-gray-400 text-white rounded-lg p-2 mr-6 mt-4">
            Sí asistiré
          </button>

          <button className="bg-gray-400 text-white rounded-lg p-2 mt-4">
            No asistiré
          </button>
      </div>

    
    
   
  </div>
    </>
  )
}

export default Asistencia