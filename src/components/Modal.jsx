import React , {useState , useEffect} from 'react'
import { MdCancel } from "react-icons/md";

const Modal = ({setShowForm}) => {
    const [formData, setFormData] = useState({
        name: "",
        senderEmail: "",
        phoneNumber: "",
        message: "",
      });
    
     
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
      
      async function onSubmit(event) {
        event.preventDefault();
        //   const { data, error } = await sendEmail(formData);
      }
    
  return (
    <div className="fixed top-0 left-0 z-10   w-full h-full flex justify-center   items-center">
    <div className="p-3 bg-white text-black   z-[999]  border border-white  rounded-xl w-[500px] ">
      <button
        onClick={() => {
          setShowForm(false);
        }}
        className="w-full "
      >  
        <MdCancel size={32} className="text-[#F15A29] ml-auto " />
      </button>
     <div className="text-4xl font-[700] text-center mb-5">Reach to us!</div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col gap-2 p-2">
          <label className="font-[500]">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className="p-2 border rounded-xl border-gray-300"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
       
        <div className="flex flex-col gap-2 p-2">
        <label className="font-[500]" >Your Mobile No.</label>
          <input
            type="text"
            placeholder="Your phone number"
            name="phoneNumber"
            className="p-2 border rounded-xl border-gray-300"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col gap-2 p-2">
         <label className="font-[500]" >Message</label>
          <input
            type="text"
            placeholder="Message "
            name="message"
            className="p-2 border rounded-xl border-gray-300"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className=" flex justify-center">
          {/* <img src={phone} alt="" className="hid" /> */}
          <button  className="btn  text-white bg-gradient-to-r from-[#FBA154] to-[#F15A29]  px-8 py-2 rounded-full  " type="submit">
          Book Free Consultation Call
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Modal