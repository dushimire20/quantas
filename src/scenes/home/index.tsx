import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import Partener1 from "@/assets/Partener1.png";
import Partener2 from "@/assets/Partener2.png";
import Partener3 from "@/assets/Partener3.png";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const isBelowMediumScreens = useMediaQuery(" (max-width:480px)");
   
  return (
    <>
  <section 
  id="home"
  className=" px-10 py-10  md:pb-0  items-center justify-center h-fit xs:h-full   w-full bg-[url('@/assets/HeroImage.png')] bg-cover">
    
    <motion.div
    onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
    className="mx-auto  items-center justify-center   "

    >
        {isAboveMediumScreens && (
          <div className=" text-center mt-16 md:mt-[195px]">
            
          <p className=" font-poppins text-[64px] text-secondary-100 leading-[69px] font-semibold ">Welcome to </p>
          <p className="font-poppins text-[64px] text-gray-100 leading-[69px] font-semibold">Quantas LTD</p>

      </div>
        )}
        {isBelowMediumScreens && (
          <div className=" mt-[175px] items-center justify-center text-center">
          <p className=" font-poppins text-[38.11px]  text-secondary-100 leading-[41.54px] font-semibold ">Welcome to </p>
           <p className="font-poppins text-[38.11px]  text-gray-100 leading-[41.54px] font-semibold">Quantas LTD</p>
         </div>

        )}

        

        {isAboveMediumScreens && (
          <div className="mx-auto  mt-4 justify-normal md:text-center md:w-[861px]">
          <p className="text-secondary-100 font-poppins text-2xl leading-[33px] font-normal">
          At QUANTAS Ltd, we're not just a company; we're your strategically in innovation and service excellence.
          Since 2017, we've been delivering cutting-edge solutions that redefine industry standards.
          </p>         
      </div>  
        )}

        {isBelowMediumScreens && (
          <div className="mx-auto  mt-4 justify-center text-center h-[72px] w-full">
          <p className="text-secondary-100 font-poppins text-[14px] leading-[18.06px] font-normal">
          At QUANTAS Ltd, we're not just a company; we're your strategically in innovation and service excellence.
          Since 2017, we've been delivering cutting-edge solutions that redefine industry standards.
          </p>
          </div>  

        )}     



        <div className=" flex-row xs:flex-col items-center justify-center mt-16 text-center gap-16 xs:mr-5 ">
        <ActionButton  setSelectedPage={setSelectedPage} >
            <button className=" font-poppins font-normal text-2xl text-secondary-100 w-[280px] xs:w-[310px] h-16 rounded-full border-2 hover:bg-gray-100">
                Explore our services  
            </button>
            
        </ActionButton> 
            

        <ActionButton  setSelectedPage={setSelectedPage} >
            <button 
            className=" mt-5 xs:mt-0 font-poppins font-normal text-2xl text-secondary-100 w-[280px] xs:w-[310px] h-16 rounded-full hover:border-2  bg-gray-100 xs:ml-5 hover:bg-black">
            Get in touch 
            </button>
            
        </ActionButton>     
        
        </div>      
           

    </motion.div>


</section>
         {/* SPONSORS */}
         {isAboveMediumScreens && (
        <div className=" py-5 mx-auto   md:pb-0 bg-secondary-100 mt-0 border-b-2 border-b-primary-200 w-5/6">
          <div className="mx-auto">
            <div className="text-center h-[154px] flex w-full items-center justify-between gap-4 ">
            <p className=" font-poppins font-semibold text-gray-100 text-2xl leading-9">Trusted by</p>
            <img alt="redbull-sponsor" src={Partener1} />
            <img alt="forbes-sponsor" src={Partener2} />
            <img alt="fortune-sponsor" src={Partener3} />
            </div>
          </div>
        </div>
      )}

      {
        isBelowMediumScreens && (
          <div className=" py-5 mx-auto   md:pb-0 bg-secondary-100 mt-0 border-b-2 border-b-primary-200 w-5/6">
          <div className="mx-auto">
            <div className="text-center h-[40x] flex  items-center justify-between gap-4 ">
            <p className=" font-poppins font-semibold text-gray-100 text-[16px] leading-9">Trusted by</p>
            <img alt="redbull-sponsor" className="w-[37px] " src={Partener1} />
            <img alt="forbes-sponsor"className="w-[37px]" src={Partener2} />
            <img alt="fortune-sponsor" className="w-[37px]" src={Partener3} />
            </div>
          </div>
        </div>
        )
      }




</>

  )
}

export default Home;