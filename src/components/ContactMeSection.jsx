import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactMeSection() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hbuw4zv', 'template_yadkt2j', e.target, 'mGt3Ryv9vMDdz5Tkf')
      .then((result) => {
        alert('Message Sent Successfully!');
        setFormData({
          user_name: '',
          user_email: '',
          user_message: '',
        });
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  return (
    <div id='Contact' className="w-full h-[80vh] justify-center flex flex-col items-center mt-[6%]">
      <div className="w-[90%] h-full rounded-[25px] flex flex-col">
        <div className="w-full h-fit rounded-[25px]">
          <h1 className="text-[4em] text-white relative after:content-[''] after:absolute after:left-[1px] after:-bottom-2 after:h-[7px] after:w-[5.7em] after:bg-[#CBACF9] max-sm:text-[2.5em] max-sm:flex max-sm:justify-center max-sm:after:left-0 max-sm:after:right-0 max-sm:after:mx-auto">
            Contact Me
          </h1>
          <form onSubmit={handleSubmit} className="mt-5 flex max-sm:flex-col">
            <div className="w-[35%] flex flex-col max-sm:w-full max-sm:items-center">
              <div className="mb-2.5 w-4/5">
                <label className="block mb-[5px] text-[1.8em] text-[#CBACF9] font-semibold max-sm:text-[1.4em]">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 text-[1.2em] rounded-[15px] border border-[#ccc] bg-[#D9D9D9] text-[#1a1446] focus:outline-none focus:border-[#6a0dad] max-sm:text-[1em]"
                  placeholder='How can I address you?'
                />
              </div>
              <div className="mb-2.5 w-4/5">
                <label className="block mb-[5px] text-[1.8em] text-[#CBACF9] font-semibold max-sm:text-[1.4em]">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 text-[1.2em] rounded-[15px] border border-[#ccc] bg-[#D9D9D9] text-[#1a1446] focus:outline-none focus:border-[#6a0dad] max-sm:text-[1em]"
                  placeholder='Where can I reach you?'
                />
              </div>
              <button type="submit" className="bg-[#6a0dad] text-white py-2.5 px-5 border-none rounded-[15px] text-[1.4em] cursor-pointer transition-all duration-500 w-[85%] font-semibold mt-[4vh] hover:bg-[#5b0c9b] hover:scale-110 max-sm:hidden">
                Send
              </button>
            </div>
            <div className="w-[65%] flex flex-col items-center max-sm:w-full">
              <div className="mb-2.5 w-4/5">
                <label className="block mb-[5px] text-[1.8em] text-[#CBACF9] font-semibold max-sm:text-[1.4em]">Message</label>
                <textarea
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                  required
                  className="w-full p-2.5 text-[1.3em] rounded-[15px] border border-[#ccc] bg-[#D9D9D9] text-[#1a1446] h-[150px] resize-none focus:outline-none focus:border-[#6a0dad] max-sm:text-[1.2em]"
                  placeholder='What would you like to tell me?'
                />
                <button type="submit" className="hidden max-sm:block max-sm:bg-[#6a0dad] max-sm:text-white max-sm:py-2.5 max-sm:px-5 max-sm:border-none max-sm:rounded-[15px] max-sm:text-[1.4em] max-sm:cursor-pointer max-sm:transition-all max-sm:duration-500 max-sm:w-[105%] max-sm:font-semibold max-sm:mt-[4vh] max-sm:hover:bg-[#5b0c9b] max-sm:hover:scale-110">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
