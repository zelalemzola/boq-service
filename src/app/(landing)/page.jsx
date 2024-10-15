import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="md:px-4">

      <div className="hero relative h-[60vh] md:h-[75vh] rounded-2xl shadow-2xl flex items-end p-6 md:p-10 ">
         
         <div className="hero-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-2xl md:text-4xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.8 } },
        }}
        text="Calculate your Bill Of Quantities with confidence."
      />
             <FadeText
        className="text-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
        }}
        text="Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ"
      />
            {/* <h1 className="text-2xl md:text-4xl font-bold">Calculate your Bill Of Quantities with confidence.</h1> */}
            {/* <p className="text-md "> Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ.</p> */}
            <Button className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Button>
         </div>
         
         
      </div>
       
       <div className="flex flex-col gap-5 my-[4%]">
        <h1 className="text-2xl md:text-4xl text-primary font-bold">Why choose Quantify?</h1>
            <FadeText
            
        className="text-md md:text-lg w-[95%] md:w-[80%] text-gray-500"
        direction="left"
        framerProps={{
          show: { transition: { delay: 1 } },
          
        }}
        text="BOQ Pro is an online platform that helps you get professional Bill of Quantities (BOQ) calculation. Whether you are a builder, developer or contractor, you can easily upload your construction plan,/ and get a detailed and accurate BOQ report in minutes"
      />
        {/* <p className="text-md md:text-lg w-[95%] md:w-[80%] text-gray-500">BOQ Pro is an online platform that helps you get professional Bill of Quantities (BOQ) calculation. Whether you are a builder, developer or contractor, you can easily upload your construction plan,/ and get a detailed and accurate BOQ report in minutes.</p> */}
        <Link href='' className='p-2  text-white rounded-xl shadow-md hover:shadow-2xl bg-primary  w-fit  hover:bg-[#73b7c2]'>Get Started</Link>
       </div>
    </div>
  );
}
