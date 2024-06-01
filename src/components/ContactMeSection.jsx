import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from '@/styles/ContactMeSection.module.css';

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
    <div id='Contact' className={styles.Container}>
      <div className={styles.blackContainer}>
        <div className={styles.ContactContainer}>
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit} className={styles.form}>

            <div className={styles.leftForm}>
            <div className={styles.formGroup}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder='How can I address you?'
              />
            </div>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className={styles.input}
                placeholder='Where can I reach you?'
              />
            </div>
            <button type="submit" className={styles.button}>Send</button>
            </div>
            <div className={styles.rightForm}>
                <div className={styles.formGroup}>
                <label>Message</label>
                <textarea
                    name="user_message"
                    value={formData.user_message}
                    onChange={handleChange}
                    required
                    className={styles.textarea}
                    placeholder='What would you like to tell me?'
                />
                <button type="submit" className={styles.button2}>Send</button>
                </div>

            </div>
       
         
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMeSection;
