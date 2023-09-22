import {motion} from "framer-motion";
import Service1 from "@/assets/Service1.png";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import Space1 from "@/assets/Space1.png";
import Service2 from "@/assets/Service2.png";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const OurServices = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const isBelowMediumScreens = useMediaQuery(" (max-width:480px)");
  return (
    <>   
    <section
    id="ourservices" className="mx-auto w-5/6 pt-6 "
    >
        <motion.div
        onViewportEnter={ () => setSelectedPage(SelectedPage.OurServices) }
        >
            {isAboveMediumScreens && (

        <div className="mt-20 mx-auto w-full container xs:flex justify-between gap-5 h-96 ">
            <div className=" w-full h-full xl:w-2/4">
             <p className=" font-poppins font-semibold text-2xl leading-8 text-gray-100">Our expertise</p>
             <p className="font-poppins font-semibold text-4xl mt-2">IT Solutions</p>
             <p
             className="font-poppins font-normal text-2xl leading-9 mt-5"
            >We specialize in sourcing and delivering cutting-edge IT hardware,
            software, and networking products from around the world. 
            Our IT Department is equipped to cater to the specific needs of your organization,
            ensuring you stay ahead in today's fast-paced technological landscape.
            </p>

            </div>
            <div className="mt-6 xs:mt-0 w-full h-full px-10 justify-center bg xl:w-2/4 bg-gradient-to-t from-gray-200 to-secondary-200">
             <div className=" ">
                <img alt="service 1" src={Service1} className="mx-auto xs:mt-16 mt-44  justify-center" />
             </div>
    

            </div>



        </div>

            )}

            {isBelowMediumScreens && (
                <div className="mt-20 mx-auto w-full container justify-between h-fit text-center ">
                    <p className=" font-poppins font-semibold text-2xl leading-[33.34px] text-gray-100">Our expertise</p>
                    <p className="font-poppins font-semibold text-2xl leading-[33.34px] mt-16">IT Solutions</p>

                    <div className=" mt-6 px-10 justify-center bg xl:w-2/4 bg-gradient-to-t from-gray-200 to-secondary-200">
                        <div className=" ">
                        <img alt="service 1" src={Service1} className="mx-auto justify-center" />
                    </div>
                    

                   </div>
                <div className="mt-6 w-full ">
                    
                    <p
                    className="font-poppins font-normal text-[20px] leading-9 mt-5"
                    >We specialize in sourcing and delivering cutting-edge IT hardware,
                         software, and networking products from around the world. 
                         Our IT Department is equipped to cater to the specific needs of your organization,
                        ensuring you stay ahead in today's fast-paced technological landscape.
                    </p>

                </div>

            </div>
            )}
            

            {isAboveMediumScreens && (
                <div>
                    <img  alt="lines" src={Space1} className=" mx-auto justify-center " />
                </div>

            )}
            
            

            
            
        </motion.div>
        
    </section> 
    <section className=" xs:py-16 w-full h-fit xs:bg-gradient-to-b from-gray-200 to-secondary-100 bg-cover mt-0">
        {isAboveMediumScreens && (
                <div className=" w-5/6 mx-auto container flex justify-between gap-5 h-full ">
                
                <div className=" h-full w-full px-10 justify-center bg xl:w-2/4 ">
                    <div className=" mt-64 xs:mt-0">
                    <img alt="service 1" src={Service2} className="mx-auto w-full mt-16  justify-center" />
                    </div>
                    

                </div>
                <div className=" w-full xl:w-2/4 xs:mt-28 h-full ">
                    
                    <p className="font-poppins font-semibold text-4xl">Maintenance Department</p>
                    <p
                    className="font-poppins font-normal text-2xl leading-9 mt-8 "
                    >Our Maintenance Department is built on the pillars of cost-effectiveness, 
                    reliability, and efficiency. From installation to service, repair, 
                    and ongoing maintenance of electrical, plumbing equipment, and machinery,
                     our team ensures your operations run smoothly and seamlessly.
                    </p>

                </div>             



            </div>

        )}

        {isBelowMediumScreens && (
            <div className="py-6 bg-gradient-to-b from-gray-200 to-secondary-100 w-5/6 mx-auto container justify-between gap-5 h-full text-center  ">

                <p className=" mt-4 font-poppins font-semibold text-2xl">Maintenance Department</p>
                
                <div className=" h-full w-full justify-center ">
                    <div className=" ">
                    <img alt="service 1" src={Service2} className="mx-auto w-full mt-16  justify-center" />
                    </div>
                    

                </div>
                <div className=" w-full xl:w-2/4 xs:mt-28 h-full">
                    
                    
                    <p
                    className="mx-2 font-poppins font-normal text-[20px] leading-9 mt-8 "
                    >Our Maintenance Department is built on the pillars of cost-effectiveness, 
                    reliability, and efficiency. From installation to service, repair, 
                    and ongoing maintenance of electrical, plumbing equipment, and machinery,
                     our team ensures your operations run smoothly and seamlessly.
                    </p>

                </div>             



            </div>
            
        )}

        
    </section>
    </> 
  )
}

export default OurServices;