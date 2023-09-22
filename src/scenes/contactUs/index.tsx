import { useRef, useState } from "react";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Phone from "@/assets/Phone.png";
import Mail from "@/assets/Mail.png";
import Aim from "@/assets/Aim.png";
import emailjs from "@emailjs/browser";



type Props = {
    setSelectedPage: (value: SelectedPage) => void;
   
}


const ContactUs = ({setSelectedPage}: Props) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
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
          from_email: form.email,
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
            email: "",
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
    className="mx-auto mt-32  bg-gray-100 xs:bg-white "
    >
        <motion.div
        onViewportEnter={ () => setSelectedPage(SelectedPage.ContactUs) }
        >
            <div className=" mx-auto w-5/6  xs:flex gap-3 xs:bg-gray-100 h-full justify-between">
                <div className="xs:w-[492px] h-full xs:ml-12">
                    <p className="font-poppins font-semibold text-4xl mt-16 text-secondary-100 ">Contacts us</p>
                    <p
                    className="mx-auto xs:text-justify  font-poppins font-normal text-2xl leading-9 mt-5 text-secondary-100"
                    >Connect with QUANTAS Ltd to explore how we can empower your organization with top-notch 
                    IT solutions and maintenance services.
                    </p>

                    <div className="mx-auto mt-16">
                        <div className=" flex gap-2 w-full ">
                            <img alt="phone" src={Phone} className="w-[7.97] h-[7.97]"/>
                            <span className="font-spanoppins font-normal text-[20.68px] text-secondary-100  "> +250788521112</span>

                        </div>
                        <div className="flex  gap-2 mt-6 w-full">
                            <img alt="phone" src={Mail} className="w-[7.97] h-[7.97]" />
                            <p className="font-poppins font-normal text-xl text-[20.68px] text-secondary-100   "> quantaslimited@gmail.com</p>

                        </div>

                        <div className="flex  gap-2 mt-6 w-full">
                            <img alt="phone" src={Aim} className="w-[7.97] h-[7.97]"/>
                            <p className="font-poppins font-normal text-[20.68px] text-secondary-100  "> KN 1 Rd Opp. Okapi Hotel, Kigali-Rwanda</p>

                        </div>
                    </div>

                    

                </div>

                <div className="xs:w-2/3 py-12">

                <form
                ref={ formRef}
                onSubmit={handleSubmit}
                className='xs:mx-4 mt-12 flex flex-col gap-8 xs:bg-secondary-100 rounded-3xl xs:mr-6 xs:w-[678px] placeholder:font-poppins text-2xl  '
                >
                <input  
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className='h-[64px] xs:w-[546px] xs:mt-16 xs:mx-auto mt-12  bg-secondary-200 py-4 px-2 placeholder:text-primary-100 text-primary-100 rounded-lg outline-none border-none font-medium'
                required
                />
                        
                        
            
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='h-[64px] xs:w-[546px] xs:mt-6 xs:mx-auto bg-secondary-200 py-4 px-6 placeholder:text-primary-100 text-primary-100 rounded-lg outline-none border-none font-medium'
              required
            />
           
            
            
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='h-[132px] xs:w-[546px] xs:mt- xs:mx-auto bg-secondary-200 py-4 px-6 placeholder:text-primary-100 text-primary-100 rounded-lg outline-none border-none font-medium'
              required
            />
            

          <button
            type='submit'
            className='w-[226px] bg-gray-100  py-3 px-16 rounded-full h-[64px] text-secondary-100 xs:ml-96 mb-2 '
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