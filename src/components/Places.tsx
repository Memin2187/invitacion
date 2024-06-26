import Image from "next/image";
import style from './Fondo.module.css'
import salon2 from "../images/salon2.jpeg";
import templo1 from "../images/templo1.jpeg";


const Places = () => {
  return (
    <>
      <div className={`${style.fondo_total} playfair_display min-h-screen w-full pt-12 p-4 text-white`}>
        <div className="grid gap-14 md:grid-cols-2 md:gap-5">
         
          <div
            id="misa"
            data-aos-delay="150"
            className="rounded-xl bg-transparent p-6 text-center shadow-2xl border border-gray-400"
          >
            <h1 className="text-center font-bold text-2xl">Misa</h1>
            <p className="text-2xl text-center">Hora: 4:00 PM</p>
            <h1 className="text-darken mb-3 text-2xl font-bold lg:px-14 ">
              Parroquia María Madre Y Reina de Nuestras Familias
            </h1>
            <p className="text-center font-bold text-xl">Direccion</p>
            <p className="pb-2">Hacienda La Congoja 58-B, Haciendas de Aguascalientes, 20196 Aguascalientes, Ags.</p>
            <Image src={templo1} alt="templo" width={400} height={100} className="sm:w-full" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3702.17941650698!2d-102.2486424!3d21.889165799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429f1e47a102f5f%3A0xdf8ce074938b043f!2sParroquia%20Mar%C3%ADa%20Madre%20Y%20Reina%20de%20Nuestras%20Familias!5e0!3m2!1ses-419!2smx!4v1714087870379!5m2!1ses-419!2smx"
              width="280"
              height="300"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:w-full sm:w-full"
            ></iframe>


          </div>
          <div
            id="salon"
            className="rounded-xl bg-transparent p-6 text-center shadow-2xl border border-gray-400"
          >
            <h1 className="text-center font-bold text-2xl">Recepción</h1>
            <p className="text-2xl text-center">Hora: 6:00 PM</p>
            <h1 className="text-darken mb-3 pt-3 text-2xl font-bold lg:h-14 lg:px-14">
              Salón Jardín El Mezquite
            </h1>
            <p className="text-center font-bold text-xl">Direccion</p>
              <p className="pb-2">Independencia 802, 20358 Puertecito de la Virgen, Ags.</p>
            <Image src={salon2} alt="salón" width={400} height={100} className="sm:w-full" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.386886843175!2d-102.2665523!3d21.958109699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8429effa78cbad8d%3A0xbefe26a4fe91a069!2sSal%C3%B3n%20Jard%C3%ADn%20El%20Mezquite!5e0!3m2!1ses-419!2smx!4v1714087056870!5m2!1ses-419!2smx"
              width="280"
              height="300"
              style={{ border: "2" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="lg:w-full sm:w-full"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Places;
