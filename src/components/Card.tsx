const Card = () => {
  return (
    <>
      <section className="py-12 bg-[url('../images/fondito.jpg')] text-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl xl:text-5xl mb-6">
              frase principal
            </h2>
          </div>
          <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                    papas
                  </h3>
                 
                </div>
              </div>
            </div>
            <div className="overflow-hidden bg-white shadow-md rounded-xl">
              <div className="p-9">
                <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                  padrinos
                </h3>
                
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                <div className="p-9">
                  <h3 className="mt-6 text-2xl font-bold text-gray-900 sm:mt-10">
                 frase 2
                  </h3>
                 
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