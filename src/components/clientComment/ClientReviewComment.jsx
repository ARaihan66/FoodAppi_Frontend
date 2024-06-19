
import React, {useState} from "react";
import Lottie from "react-lottie";
import SendMessage from "../../assets/lottiefile/comment.json";

const ClientReviewComment = () => {
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        comment:""
    })

    const {name, email, comment} = formData;

    const handleOnChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const defaultSendMessage = {
        loop: true,
        autoplay: true,
        animationData: SendMessage,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      };
  return (
    <div>
        <h3 className='font-bold text-2xl my-5'>Express Your Opinion</h3>
        <div className='flex justify-center items-center bg-orange-200 rounded-lg'>
            <div className='flex-1'>
            <form className='flex flex-col justify-center items-center gap-5'>
            <input type="text" value={name} placeholder='Enter Your Name' required onChange={handleOnChange} className='outline-none px-5 py-2 w-[350px] rounded'/>
            <input type="email" value={email} placeholder='Enter Your Email' required onChange={handleOnChange} className='outline-none px-5 py-2 w-[350px] rounded'/>
            <textarea placeholder='Comment Here' value={comment} required onChange={handleOnChange} className='outline-none px-5 py-2 w-[350px] rounded'/>
            <button className='uppercase bg-yellow-900 px-5 py-2 rounded-md'>Submit</button>
        </form>
            </div>
            <div className='flex-1'>
            <Lottie options={defaultSendMessage} className="h-[500px]"/>
            </div>
        </div>
    </div>
  )
}

export default ClientReviewComment
