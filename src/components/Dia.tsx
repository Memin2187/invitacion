import style from './Fondo.module.css'
const Dia = () => {
  return (
    <div className={`${style.fondo_total} playfair_display w-full pt-4 p-4`}>
      <div className="rounded-xl bg-transparent p-6 text-center shadow-2xl border border-gray-400">
        <h1 className="text-darken mb-3 text-2xl font-bold lg:px-14">
          Te espero el día
        </h1>
        <h2 className="text-8xl pb-4">19</h2>
        <h5 className="text-6xl pb-4">Julio</h5>
        <h4 className="text-4xl">2024</h4>
      </div>
    </div>
  );
};

export default Dia;
