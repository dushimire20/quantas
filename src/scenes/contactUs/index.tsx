import { useRef, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Phone from "@/assets/Phone.png";
import Mail from "@/assets/Mail.png";
import Aim from "@/assets/Aim.png";
import emailjs from "@emailjs/browser";
import { useCountries } from "use-react-countries";
import { Select, Option } from "@material-tailwind/react";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
   
}


const ContactUs = ({setSelectedPage}: Props) => {
//
const { countries } = useCountries();

//

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    companyEmail: "",
    personalEmail: "",
    country: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_s5gx0qc',
        'template_almrr5c',
        {
          from_name: form.name,
          to_name: "Quantas Limited",
          from_email: form.personalEmail,
          to_email: "quantaslimited@gmail.com",
          message: form.message,
        },
        'pzxNec63jxSxzIu6Z'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            companyEmail: "",
            personalEmail: "",
            country: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

 

  return (
    <section
    id="contactus"
    className="mx-auto mt-32   "
    >
        <motion.div
        onViewportEnter={ () => setSelectedPage(SelectedPage.ContactUs) }
        >
            <div className=" mx-auto w-5/6  xs:flex gap-3 bg-gray-100 h-full justify-between rounded-xl px-2 py-5">
                <div className="xs:w-[492px] h-full xs:ml-12 text-center xs:text-left ">
                    <p className="font-poppins font-semibold xs:text-4xl text-[24px] mt-16 text-secondary-100 ">Contacts us</p>
                    <p
                    className="mx-auto xs:text-justify  font-poppins font-normal xs:text-2xl text-[16px] xs:leading-9 leading-[22px] mt-5 text-secondary-100 "
                    >Connect with QUANTAS Ltd to explore how we can empower your organization with top-notch 
                    IT solutions and maintenance services.
                    </p>

                    <div className="mx-auto mt-16 ml-6">
                        <div className=" flex gap-2 w-full ">
                            <img alt="phone" src={Phone} className="w-[34px] h-[34px]"/>
                            <span className="font-spanoppins font-normal text-secondary-100 text-[16px]  "> +250788521112</span>

                        </div>
                        <div className="flex  gap-2 mt-6 w-full">
                            <img alt="phone" src={Mail} className="w-[34px] h-[34px]" />
                            <p className="font-poppins font-normal text-secondary-100 text-[16px]  "> quantaslimited@gmail.com</p>

                        </div>

                        <div className="flex  gap-2 mt-6 w-full">
                            <img alt="phone" src={Aim} className="w-[34px] h-[34px]"/>
                            <p className="font-poppins font-normal text-secondary-100 text-[16px] "> KN 1 Rd Opp. Okapi Hotel, Kigali-Rwanda</p>

                        </div>
                    </div>

                    

                </div>

                <div className="xs:w-2/3 py-12">

                <form
                ref={ formRef}
                onSubmit={handleSubmit}
                className='xs:mx-4 mt-12 flex flex-col gap-8 xs:bg-secondary-100 rounded-3xl xs:mr-6 xs:w-[678px] placeholder:font-poppins   '
                >
                <input  
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className='h-[64px] xs:w-[546px] xs:mt-16 xs:mx-auto mt-12  bg-secondary-200 py-4 px-2 placeholder:text-primary-200 text-primary-200 rounded-lg outline-none border-none font-medium xs:placeholder:text-[20px] xs:text-[20px]'
                required
                />

              <div className="xs:flex mx-auto xs:w-[546px] gap-8 w-full">
              <input  
                type='email'
                name='companyEmail'
                value={form.companyEmail}
                onChange={handleChange}
                placeholder="Company Email"
                className='h-[64px] xs:w-[253px] w-full  xs:mx-auto  bg-secondary-200 py-4 px-2 placeholder:text-primary-200 text-primary-200 rounded-lg outline-none border-none font-medium xs:placeholder:text-[20px] xs:text-[20px]'
                required
                />
                
                <input  
                type='email'
                name='personalEmail'
                value={form.personalEmail}
                onChange={handleChange}
                placeholder="Personal Email"
                className='h-[64px] xs:w-[253px] w-full mt-8 xs:mt-0 xs:mx-auto  bg-secondary-200 py-4 px-2 placeholder:text-primary-200 text-primary-200 rounded-lg outline-none border-none font-medium xs:placeholder:text-[20px] xs:text-[20px]'
                required
                />

              </div>
                        
                        
            


            <div className=" xs:flex mx-auto xs:w-[546px] gap-8 w-full">

            <Select
            name="country"
            value={form.country}
            onChange={handleChange}
            className="h-[64px] flex items-center opacity-100 px-0 gap-2 w-full bg-white"
            label="Select Country"
             aria-required>
               {countries.map(({ name, flags }) => (
               <Option key={name} value={name} className="flex items-center gap-2 mt-6">
            
            <img
              src={flags.svg}
              alt={name}
              className="h-5 w-5 rounded-full object-cover"
            />
          
            {name}
             
            </Option>
             ))}

             </Select>

              <input  
                type='phone'
                name='phone'
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                className='h-[64px] xs:w-[253px] w-full mt-8 xs:mt-0  xs:mx-auto   bg-secondary-200 py-4 px-2 placeholder:text-primary-300 text-primary-100 rounded-lg outline-none border-none font-medium xs:placeholder:text-[20px] xs:text-[20px]'
                required
                />
            </div>
           
            
            
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Describe your request...'
              className='h-[132px] xs:w-[546px] xs:mt- xs:mx-auto bg-secondary-200 py-4 px-6 placeholder:text-primary-200 text-primary-200 rounded-lg outline-none border-none font-medium xs:placeholder:text-[20px] xs:text-[20px]'
              required
            />
            

          <button
            type='submit'
            className='w-[226px] xs:bg-gray-100 bg-secondary-100  py-3 px-16 rounded-full h-[64px] xs:text-secondary-100 xs:ml-96 mb-2 ml-8 '
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

                </div>

            </div>

        </motion.div>


    </section>
  )
}

export default ContactUs