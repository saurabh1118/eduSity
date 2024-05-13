import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "1ef9f5dd-b418-4155-ab72-605ea5d0dc10");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };





  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message <img src={msg_icon} alt=''/></h3>
            <p>Feel free to reach out through contact from or find our contact information below.
            Ypour feedback , questions , and suggestions are important to us as we strive to provide exceptional service to our univesity community.</p>
            <ul>
                <li><img src={mail_icon} />saurabh5566kmr@gmail.com</li>
                <li><img src={phone_icon}/>+91 8126422356</li>
                <li><img src={location_icon}/>39,Bisawar , Hathras<br/>
                UP 281302</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter Your Mobile Number' required/>
                <label>Write your message here</label>
                <textarea name='message' rows='10' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow}/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact