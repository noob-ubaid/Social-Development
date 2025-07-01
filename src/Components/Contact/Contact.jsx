import React, { useRef } from "react";
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { toast } from "react-toastify";
const Contact = () => {
  const contact = [
    {
      id: 1,
      icon: <IoIosCall size={30} />,
      name: "Phone",
      call: "+880 1735-166610",
    },
    {
      id: 2,
      icon: <FaWhatsapp size={30} />,
      name: "Whatsapp",
      call: "+880 1735-166610",
    },
    {
      id: 3,
      icon: <MdOutlineMailOutline size={30} />,
      name: "Email",
      call: "jovent661@gmail.com",
    },
  ];
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSend = (e) => {
    e.preventDefault();

    const firstName = firstNameRef.current.value.trim();
    const lastName = lastNameRef.current.value.trim();
    const phone = phoneRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    if (!firstName || !lastName || !phone || !email || !message) {
      toast.error("Please fill out all fields!");
      return;
    }

    toast.success("Form submitted successfully!");
  };
  return (
    <div className="my-12 md:my-20 flex items-start gap-8 md:gap-12 justify-between flex-col md:flex-row">
      <div className="flex-1 dark:text-gray-200">
        <h1 className="md:text-4xl text-3xl text-center md:text-left font-bold text-[#AD49E1] mb-4">
          Get in touch with Jovent
        </h1>
        <div className="mb-6">
          <p className="text-base text-center md:text-left leading-relaxed">
            If you have an event idea to share or a question about Jovent that
            hasn’t been answered on our website, please reach out using the
            contact details below or fill out the form on the right.
          </p>
        </div>
        <div className="mb-6">
          <div className="flex flex-col w-full gap-6 md:gap-8 mt-4">
            {contact.map((call) => (
              <div className="flex items-center gap-6" key={call.id}>
                <div className="dark:bg-gray-800 bg-gray-400/10 shadow-[0px_0px_15px_var(--color-main)] animate-wiggle p-3 rounded-md text-main">
                  {call.icon}
                </div>
                <div>
                  <p className="text-xl font-semibold text-main dark:text-gray-300">
                    {call.name}
                  </p>
                  <p className="dark:text-white text-black mt-1 text-lg">{call.call}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 w-full">
        <h1 className="md:text-4xl text-3xl text-center font-bold text-[#AD49E1] mb-6">
          Send us message
        </h1>
        <form>
          <div className="grid grid-cols-1 mb-4 gap-4 dark:text-gray-200 md:grid-cols-2">
            <label className="flex flex-col">
              First Name :
              <input
                type="text"
                ref={firstNameRef}
                className="py-2 px-4 dark:text-black rounded-md mt-2 outline-none bg-gray-100"
                placeholder="First Name"
              />
            </label>
            <label className="flex flex-col">
              Last Name :
              <input
                type="text"
                ref={lastNameRef}
                className="py-2 px-4 dark:text-black rounded-md mt-2 outline-none bg-gray-100"
                placeholder="Last Name"
              />
            </label>
            <label className="flex flex-col">
              Phone Number :
              <input
                type="number"
                ref={phoneRef}
                className="py-2 px-4 rounded-md dark:text-black mt-2 outline-none bg-gray-100"
                placeholder="Phone Number"
              />
            </label>
            <label className="flex flex-col">
              Email :
              <input
                type="email"
                ref={emailRef}
                className="py-2 px-4 rounded-md dark:text-black mt-2 outline-none bg-gray-100"
                placeholder="Enter your email"
              />
            </label>
          </div>
          <label className="mt-4 dark:text-white">Message :</label>
          <textarea
            ref={messageRef}
            className="py-2 px-4 mt-2 h-40 rounded-md outline-none bg-gray-100 w-full"
            placeholder="Message"
          ></textarea>

          <button
            onClick={handleSend}
            className="bg-[#AD49E1] mt-4 w-full text-white font-medium px-4 py-2 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
