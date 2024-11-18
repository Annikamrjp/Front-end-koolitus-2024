import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Rating from '@mui/material/Rating';

export const ContactUs = () => {
  const form = useRef();
  const [value, setValue] = React.useState(2);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gmbrqfb', 'template_hdu06hj', form.current, {
        publicKey: 'W3Ckt0-o_cT5L5TX6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br></br>
      <input type="text" name="from_name" /> <br></br>
      <label>Email</label> <br></br>
      <input type="email" name="from_email" /> <br></br>
      <label>Message</label> <br></br>
      <textarea name="message" /> <br></br>
      {/* <input type="range" name="rating" min={1} max={5}></input> <br></br> */}
      <Rating
        name="rating"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <input type="submit" value="Send" /> <br></br>
    </form>
  );
};