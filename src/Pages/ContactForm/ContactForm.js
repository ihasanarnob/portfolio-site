import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('ihasanarnob','template_m5d5sph', e.target,'user_a2On5AqmBmm27Uo1MbPR0')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    return (
        <div className="container border" style={{marginTop:"50px",width:"50%",backgroundColor:"#94908F"}}>
            <h2 className="mt-3">Contact form</h2>
            <form onSubmit={sendEmail} className="row p-2" style={{margin:"25px 50px 75px 50px"}}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter Name" className="form-control" required/>

            <label>Email</label>
            <input type="email" name="email" placeholder="Enter Email Address" className="form-control" required/>

            <label>Message</label>
            <textarea name="" rows="4" className="form-control" placeholder="Enter Message" />

            <input type="submit" value='send' className="mt-3" />

            </form>
        </div>
    );
};

export default ContactForm;