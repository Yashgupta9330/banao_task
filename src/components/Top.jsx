import Image from "next/image";
import SignupTab from "./SignupTab";

export default function Top(){
    return(
        <div className="flex flex-col lg:flex-row w-full items-center lg:items-start px-8 md:px-24 pt-12 gap-24 mt-32">
           <div className="flex flex-col items-start text-left w-full lg:w-1/2 gap-16">
            <div className="flex flex-col gap-12 text-[#000000]">
             <h1 className="text-4xl font-bold font-poppins leading-tight tracking-wide text-left">Explore Your <span className="text-[#0096C8]">Hobby</span> and <span className="text-[#8064A2]">Passion</span></h1>
             <div className="flex flex-col gap-2">
             <p className="text-sm font-light font-poppins leading-7 tracking-wide text-left">
             Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
             </p>
             <p className="text-sm font-light font-poppins leading-7 tracking-wide text-left">
               If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
             </p>
            </div>
           </div>
           <Image
              src="/banner.png"
              alt="Banner"
              width={400}
              height={300}
              layout="responsive"
            />
        </div>
        <SignupTab/>
        </div>
    )
}