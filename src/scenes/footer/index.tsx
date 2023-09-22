import { motion } from "framer-motion";
import LinkedIn from "@/assets/Linkedin.png";
import Twiter from "@/assets/Twiter.png";
import Instagram from "@/assets/Instagram.png";
import Footer_Image from "@/assets/Footer_Image.png";
import Footer_Menu_image from "@/assets/Footer_menu_button.png";
import Footer_button from "@/assets/Footer_button.png";




type Props = {}

const Footer = (props: Props) => {
  return (
    <section 
    className="mt-36 py-10 xs:pb-0  items-center justify-center  xs:h-fit bg-primary-300"
    >
      <motion.div
      className="mx-auto w-5/6"
      >
        <div className=" xs:flex  mt-10">
          <div className="xs:w-3/6 w-full mx-auto">
            <p className=" font-poppins font-semibold text-2xl text-secondary-100">Quantas LTD</p>
            <p className=" font-poppins font-normal text-xl mt-2 text-secondary-300">Follow us on our social media pages</p>
            <div className="flex gap-6 mt-3  h-[31.71px]">
              <img alt="LinkedIn" src={LinkedIn}  />
              <img alt="LinkedIn" src={Twiter}  />
              <img alt="LinkedIn" src={Instagram} />

            </div>
            <img alt="footer-image" src={Footer_Image} className="mt-8" />
          </div>

          <div className="xs:w-2/6 w-full justify-center mx-auto flex-col">
          <p className=" font-poppins font-semibold text-2xl text-secondary-100">Important links</p>
          <div className="mt-16 ">
            <div className=" flex gap-2 mt-">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Home</p>
            </div> 
            <div className=" flex gap-2 mt-8">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Careers</p>
            </div>
            <div className=" flex gap-2 mt-8">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Partners</p>
            </div> 
            <div className=" flex gap-2 mt-8">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Sponsorship</p>
            </div> 
            <div className=" flex gap-2 mt-8">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Our staff</p>
            </div>  
            <div className=" flex gap-2 mt-8">
            <img src={Footer_Menu_image} /> <p className="text-secondary-100 font-poppins font-normal text-xl"> Visit us</p>
            </div>  


          </div> 
          
           

            


          </div>

          <a
          href="#home"

          >
            <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            >
            
            <img src={Footer_button} className=" xs:mt-60  " />
            

            </motion.div>
          

          </a>
                

          


        </div>

      </motion.div>
      
        
    </section>
  )
}

export default Footer;