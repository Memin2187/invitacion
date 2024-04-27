import Asistencia from "@/components/Asistencia";
import Banner from "@/components/Banner";
import Card from "@/components/Card";
import CountDown from "@/components/CountDown";
import Gallery from "@/components/Gallery";
import Places from "@/components/Places";
import Regalos from "@/components/Regalos";
import Rola from "@/components/Rola";

import TimeLine from "@/components/TimeLine";


export default function Home() {
  return (
   <>
   <Banner/>
   <Rola/>
   <Card/>
   <CountDown/>
   <Places/>
  {/* <TimeLine/> */}
  <Gallery/>
  <Regalos/>
   <Asistencia/> 
   </>
  );
}
