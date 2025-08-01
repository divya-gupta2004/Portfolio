import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3d06lvu",   
        "template_pzeu1rh",  
        form.current,
        "Qsk6ZgL2iR8wT18pc"  
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
          Contact Me
        </h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2 px-4 rounded shadow-md transition block mx-auto"
          >
            Send Message
          </button>        

          {done && (
            <p className="text-green-500 font-medium text-center mt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
