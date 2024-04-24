

const Places = () => {
  return (
    <>
      <div className="h-full min-h-screen w-full bg-[url('../images/fondito.jpg')] pt-12 p-4">
    <div className="grid gap-14 md:grid-cols-3 md:gap-5">
      <div className="rounded-xl bg-white p-6 text-center shadow-xl">
        
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">Te espero el día</h1>
        <h2>dia Julio 2024</h2>
      </div>
      <div data-aos-delay="150" className="rounded-xl bg-white p-6 text-center shadow-xl">
        
        <h1 className="text-darken mb-3 text-xl font-medium lg:px-14 ">templo</h1>
       
      </div>
      <div data-aos-delay="300" className="rounded-xl bg-white p-6 text-center shadow-xl">
       
        <h1 className="text-darken mb-3 pt-3 text-xl font-medium lg:h-14 lg:px-14">Salón</h1>
        
      </div>
    </div>
  </div>
    </>
  
  
  )
}

export default Places