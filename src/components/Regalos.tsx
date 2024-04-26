import { BsFillEnvelopeOpenHeartFill } from "react-icons/bs";
import { FaGift } from "react-icons/fa";
import style from './Fondo.module.css'

const Regalos = () => {
  return (
    <>
      <div className={`${style.fondo_total} dancing lg:flex w-full lg:justify-center p-4`}>
        <div className="py-4 rounded-xl lg:w-1/4 bg-transparent text-center shadow-2xl border border-gray-400">
            <div className="border-double border-4 border-gray-600">
            <div className="flex items-center justify-center">
        <FaGift size={100}/>

        </div>
          <p className="text-center mb-3 text-xl font-medium p-4">
            Mi mejor regalo es tu presencia, pero si tu deseo es hacerme un
            obsequio este puede ser un regalo a tu elección o lluvia de sobres.
           
          </p>
          <div className="flex items-center justify-center">

          <BsFillEnvelopeOpenHeartFill size={100} />
          </div>
          <p className="text-xl p-4"> La lluvia de sobres es regalar dinero en efectivo a la quinceañera
            Habrá un buzón en el salón para depositar tu sobre.</p>
            </div>
     
        </div>
      </div>
    </>
  );
};

export default Regalos;
