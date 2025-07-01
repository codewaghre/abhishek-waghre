
import React, { useState } from 'react'
import '../css/contact.css'

import Heading from '../components/Heading'
import Button from '../components/Button';
import CodeBlockEditor from '../components/CodeBlockEditor';
import Socials from '../components/Socials';

import toast from 'react-hot-toast'

import { motion } from "motion/react"

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        const payload = {
            ...formData,
            access_key: import.meta.env.VITE_EMAIL_ACCESS_KEY
        };


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Form Submitted Successfully")
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            } else {
                toast.error("Smothing Went Wrong")

            }
        } catch (error) {
            toast.error(error.message)
        }

        setFormData({ name: "", email: "", message: "" });
    };


    return (
        <section id='contact' className='contact'>
            <Heading text={`printl("Connect with me")`} />

            <main className='contact-me'>

                <motion.div className='contact-container'
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 30 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                >

                    <div className='connect-social'>
                        <Socials />
                    </div>

                    <motion.p className='contact-des'
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                    >Connect with me if you're looking for a results-driven, forward-thinking developer who can turn complex ideas into elegant mobile solutions. I’m excited to bring my energy and experience to your next big project!

                    </motion.p>

                    <div className='contact-form-container'>

                        <motion.form
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 24 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            onSubmit={handleSubmit}>
                            <div className='form-value'>
                                <label>Name</label>
                                <input
                                    type='text'
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-value'>
                                <label>Email</label>
                                <input
                                    type='email'
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='form-value'>
                                <label>Message</label>
                                <textarea
                                    type='text'
                                    className='msg-area'
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="10"
                                    required
                                />
                            </div>

                            <div className='contact-submit-btn'>
                                <Button text={"Submit"} />
                            </div>
                        </motion.form>
                    </div>
                </motion.div>

                <div className='codeblock-container'>
                    <p className='code-p'>
                    // Trying to connect with cool people on the internet
                        <br /> // Change the values  name, email and message
                    </p>

                    <div className='editor'>
                        <CodeBlockEditor />
                    </div>

                </div>

            </main>
        </section>
    )
}

export default Contact