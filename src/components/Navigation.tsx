import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav className=" playfair_display bg-pink-600 text-white py-3 px-4 flex items-center justify-between">
      
        <div className="flex items-center gap-4">
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#"
          >
            Misa
          </Link>
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#"
          >
            Asistencia
          </Link>
          <Link
            className="text-xl px-4 py-2 leading-none rounded-full hover:bg-gray-700"
            href="#"
          >
            Salón
          </Link>
        
        </div>
      </nav>
    </>
  );
};

export default Navigation;
