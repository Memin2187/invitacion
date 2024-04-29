import { GiCrown } from "react-icons/gi";
import style from "./Fondo.module.css";
import TextGenerateEffect from "./TextGenerateEffect";

const Card = () => {


  const words = `Hoy hace quince años mis padres daban gracias a dios por mí.
  Hoy yo doy gracias a dios por ellos, por cuidarme tenerme
  paciencia y aconsejarme. Doy gracias también a toda mi
  familia por hacer más especial este día. A todos mis amigos
  por enseñarme el valor de una verdadera amistad. Deléitate
  en el señor y te concederá las peticiones de tu corazón`

  return (
    <>
      <section
        className={`${style.fondo_total} playfair_display  py-12 text-white sm:py-12 lg:py-16`}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-6xl font-bold leading-tight text-center text-white sm:text-4xl xl:text-5xl mb-6">
              Mis XV
            </h2>
            <h2 className="text-8xl font-bold leading-tight text-center text-white sm:text-4xl xl:text-5xl mb-6">
            Dafne
              
            </h2>
            <h2 className="text-4xl font-bold leading-tight text-center text-white sm:text-4xl xl:text-5xl mb-6">
              
              Yeilin Lemus Limon
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-1 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="relative overflow-hidden bg-transparent shadow-2xl rounded-xl h-full">
                <div className="flex items-center justify-center">
                  <GiCrown size={150} color="white" />
                </div>
                <div className="p-9">
                  <h3 className=" text-2xl text-center  text-white sm:mt-2">
                  <TextGenerateEffect words={words}/>
                    
                  </h3>
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-transparent shadow-2xl rounded-xl border-double border-4 border-violet-950">
              <div className="p-6">
                <h3 className="mt-2 text-center text-4xl  text-white sm:mt-6">
                  Con la bendición de Mis Padres
                </h3>
                <p className="text-center text-white text-2xl mt-6">
                  Mario Alberto Lemus Gallegos
                </p>
                <p className="text-center text-white text-2xl">
                  y 
                </p>
                <p className="text-center text-white text-2xl">
                  Nidia Limón Durón
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden bg-transparent shadow-2xl rounded-xl h-full border-double border-4 border-violet-950">
                <div className="p-9">
                  <h3 className="mt-2 text-center text-4xl  text-white sm:mt-10">
                    Mis Padrinos
                  </h3>
                  <p className="text-center text-white text-2xl mt-6">
                    {" "}
                    Jessica y Omar Barrendey
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Publish webpage online
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Effortlessly publish your webpages online and make it
                  available to the world with a click of a button
                </p>
              </div>
            </div> */}
            {/* <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    Forms and Data Collection
                  </h3>
                  <p className="mt-6 text-base text-gray-600">
                    Collect data and information from users with forms built on
                    windframe and sort through them in a nice interface
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  Custom Domains
                </h3>
                <p className="mt-6 text-base text-gray-600">
                  Attach your own custom domain to your published projects or
                  website on windframe
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
