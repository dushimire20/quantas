import {motion} from "framer-motion";
import { SelectedPage } from "@/shared/types";
import About1 from "@/assets/About1.png";
import About2 from "@/assets/About2.png";
import About3 from "@/assets/About3.png";
import About4 from "@/assets/About4.png";
import useMediaQuery from "@/hooks/useMediaQuery";
type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const AboutUs = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const isBelowMediumScreens = useMediaQuery(" (max-width:480px)");

  return (
    
    <section
    id="aboutus" className="mx-auto  mb-6 mt-11"
    >
        <motion.div
        onViewportEnter={ () => setSelectedPage(SelectedPage.AboutUs) }
        >
        
        {isAboveMediumScreens && (
            <div className="w-5/6 mt-20 mx-auto container xs:flex justify-between gap-32 xs:gap-8 h-full  ">
            <div className=" xl:w-2/4 w-full h-full">
            <p className=" font-poppins font-semibold text-2xl leading-8 text-gray-100">Why Choose QUANTAS?</p>
            <img alt="service 1" src={About1} className="mx-auto mt-16 justify-center" />   

            </div>
            <div className=" xl:w-2/4 w-full h-full ">
                
            
                <p className="font-poppins font-semibold text-4xl mt-32 text-center xs:text-justify ">Expertise</p>
                <p
                className="mx-auto  xs:text-left  font-poppins font-normal text-2xl leading-9 mt-5 text-center "
                >Our teams consist of experts with extensive knowledge in both IT and maintenance services.
                </p>
                
                

            </div>



        </div>

        )}

        {isBelowMediumScreens && (
            <div className="w-5/6 mt-20 mx-auto container  justify-between  h-full text-center  ">
            <div className=" xl:w-2/4 w-full h-full">
            <p className=" font-poppins font-semibold text-[24px] leading-[33px] text-gray-100">Why Choose QUANTAS?</p>
            <p className="font-poppins font-semibold text-[23px] text-center mt-4  ">Expertise</p>
            <img alt="service 1" src={About1} className="mx-auto mt-16 justify-center" />   

            </div>
            <div className="w-full h-full ">
                
            
                
                <p
                className="mx-auto   font-poppins font-normal text-[21px] leading-[29.17px] mt-5 text-center "
                >Our teams consist of experts with extensive knowledge in both IT and maintenance services.
                </p>
                
                

            </div>



        </div>

        )}

        {isAboveMediumScreens && (
            <div className="py-6  bg-gradient-to-t from-gray-200 to-secondary-100 bg-cover">
            <div className="mt-20 mx-auto w-5/6 container xs:flex justify-between gap-32 xs:gap-8 h-full  ">
                <div className=" xl:w-2/4 w-full h-full">
                 
                <p className="font-poppins font-semibold text-4xl mt-32 xs:text-justify text-center ">Reliability</p>
                <p
                className="mx-auto  font-poppins font-normal text-2xl leading-9 mt-5 xs:text-justify text-center "
                >Count on us to deliver on our promises, providing reliable products and services you can trust.
                </p> 

                </div>
                <div className=" px-10 justify-center bg xl:w-2/4 w-full h-full ">
                    <div className="">

                    <img alt="service 1" src={About2} className="mx-auto mt-16 justify-center" />                 
                   
                    </div>
                    

                </div>



            </div>
            </div> 
        )}

        {isBelowMediumScreens && (
            <div className="py-5 px-2 bg-gray-100 w-5/6 rounded-2xl mx-auto mt-4">
            <div className=" mx-auto justify-between h-full  ">
                <div className=" w-full h-full">
                 
                <p className="font-poppins font-semibold text-[24px] text-secondary-100  text-center ">Reliability</p>
                <img alt="service 1" src={About2} className="mx-auto mt-16 justify-center" /> 
                

                </div>
                <div className="w-full h-full ">
                                    
                <p className="mx-auto  font-poppins font-normal text-[20px] leading-[27.78px] mt-5 text-center text-secondary-100 "
                >Count on us to deliver on our promises, providing reliable products and services you can trust.
                </p>           
                </div>



            </div>
            </div> 
        )}

        {isAboveMediumScreens && (
            <div className="">
            <div className=" mx-auto w-5/6 container xs:flex justify-between gap-32 xs:gap-8 h-full  ">
                <div className=" xl:w-2/4 w-full h-full">                
               
                <img alt="service 1" src={About3} className="mx-auto mt-16 justify-center" /> 

                </div>
                <div className=" xl:w-2/4 w-full h-full ">
                    
                    <p className="font-poppins font-semibold text-4xl mt-32 xs:text-justify text-center ">Efficiency</p>
                 <p
                className="mx-auto xs:text-justify   font-poppins font-normal text-2xl leading-9 mt-5 text-center "
                >In a rapidly evolving world, we understand the importance of timely service delivery without 
                compromising quality.
                </p> 
                    

                </div>



            </div>
            </div>  
        )}

        {isBelowMediumScreens && (
        <div className="mt-6 py-4 text-center">
        <div className=" mx-auto w-5/6 h-full  ">
            <div className=" w-full h-full"> 
            <p className="font-poppins font-semibold text-[24px] text-center ">Efficiency</p>               
           
            <img alt="service 1" src={About3} className="mx-auto mt-16 justify-center" /> 

            </div>
            <div className=" w-full h-full ">               
                
            <p
            className="mx-auto font-poppins font-normal text-[20px] leading-[27.78px] mt-5 "
            >In a rapidly evolving world, we understand the importance of timely service delivery without 
            compromising quality.
            </p>                

            </div>
        </div>
        </div>  
        )}



 

            

        {isAboveMediumScreens && (
            <div className="bg-gradient-to-b from-gray-200 to-secondary-100 bg-cover">
            <div className=" mx-auto w-5/6 container xs:flex justify-between gap-32 xs:gap-8 h-full  ">
                <div className=" xl:w-2/4 w-full h-full">                
               
                <img alt="service 1" src={About4} className="mx-auto mt-16 justify-center" /> 

                </div>
                <div className=" xl:w-2/4 w-full h-full ">
                    
                    <p className="font-poppins font-semibold text-4xl mt-32 xs:text-justify text-center ">Customer-Centric</p>
                 <p
                className="mx-auto xs:text-justify text-center  font-poppins font-normal text-2xl leading-9 mt-5 "
                >We tailor our solutions to match your unique needs, ensuring your 
                satisfaction remains at the core of our services.
                </p> 
                    

                </div>



            </div>
            </div>  
        )}

        {isBelowMediumScreens && (
            <div className="mt-6">
            <div className=" mx-auto w-5/6 h-full text-center  ">
                <div className="  w-full h-full"> 
                <p className="font-poppins font-semibold text-[24px] mt-8 text-center ">Customer-Centric</p>               
               
                <img alt="service 1" src={About4} className="mx-auto mt-16 justify-center" /> 

                </div>
                <div className=" xl:w-2/4 w-full h-full ">
                    
                    
                 <p
                className="mx-auto text-center  font-poppins font-normal text-[20px] leading-[27.78px] mt-5 "
                >We tailor our solutions to match your unique needs, ensuring your 
                satisfaction remains at the core of our services.
                </p> 
                    

                </div>



            </div>
            </div>  
        )}



   
               
        </motion.div>
        
    </section> 
  )
}

export default AboutUs;