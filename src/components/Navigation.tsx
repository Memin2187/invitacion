import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className=" playfair_display bg-pink-600 text-white py-3 px-4 flex items-center justify-between">
      
        <div className="flex items-center gap-4">
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#misa"
          >
            Misa
          </Link>
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#asistencia"
          >
            Asistencia
          </Link>
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#salon"
          >
            Salón
          </Link>
        
        </div>
      </nav>
    </>
  );
};

export default Navigation;
