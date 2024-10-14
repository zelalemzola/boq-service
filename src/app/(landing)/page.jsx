import BlurFade from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { FadeText } from "@/components/ui/fade-text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="px-4">
        <BlurFade  inView >
      <div className="hero relative w-[95%] rounded-2xl shadow-2xl flex items-end p-10 mx-auto">
         
         <div className="hero-content flex flex-col gap-5 text-white z-40">
             <FadeText
        className="text-2xl md:text-4xl font-bold"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.25 } },
        }}
        text="Calculate your Bill Of Quantities with confidence."
      />
             <FadeText
        className="text-md"
        direction="left"
        framerProps={{
          show: { transition: { delay: 0.35 } },
        }}
        text="Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ"
      />
            {/* <h1 className="text-2xl md:text-4xl font-bold">Calculate your Bill Of Quantities with confidence.</h1> */}
            {/* <p className="text-md "> Spend less time on spreadsheets and more time on the things that matter. Get a quicker, more accurate BOQ.</p> */}
            <Button className='px-3 py-3 rounded-full shadow-md hover:shadow-2xl bg-primary  w-fit text-lg hover:bg-[#73b7c2]'>Get Started</Button>
         </div>
         
         
      </div>
      </BlurFade>
    </div>
  );
}
