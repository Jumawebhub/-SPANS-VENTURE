import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const contactInfo = [
  {
    icon: <FaPhoneAlt className="text-primary text-xl" />, 
    title: 'Phone', 
    details: ['+254 - 02 - 2525113/4', '+254-713801302']
  },
  {
    icon: <FaEnvelope className="text-primary text-xl" />, 
    title: 'Email', 
    details: ['info@spansventures.com', 'support@SPANS VENTURE Limited.com']
  },
  {
    icon: <FaMapMarkerAlt className="text-primary text-xl" />, 
    title: 'Address', 
    details: ['P.O. Box 11931 - 00100, Nairobi,', 'Kenya']
  }
];

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required').min(10, 'Message is too short')
});

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    emailjs.send('service_niwavxs', 'template_y86v2w8', values, '1cyCeWfETWWg1_2lH')
      .then(() => {
        setIsSubmitted(true);
        resetForm();
        setTimeout(() => setIsSubmitted(false), 5000);
      })
      .catch(error => console.error('EmailJS Error:', error));
  };

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Get in Touch with Our Team</p>
          <p className="max-w-3xl mx-auto text-gray-600">
            Have questions about our services or want to discuss your technology needs? Reach out to us using the form below or contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{info.title}</h4>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <motion.div 
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              {isSubmitted && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! We'll get back to you shortly.</p>
                </div>
              )}
              <Formik
                initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <Field name="name" type="text" className="form-input" placeholder="John Doe" />
                        <ErrorMessage name="name" component="div" className="form-error" />
                      </div>
                      <div>
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <Field name="email" type="email" className="form-input" placeholder="john@example.com" />
                        <ErrorMessage name="email" component="div" className="form-error" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="form-label">Phone Number</label>
                        <Field name="phone" type="text" className="form-input" placeholder="+1 (555) 123-4567" />
                        <ErrorMessage name="phone" component="div" className="form-error" />
                      </div>
                      <div>
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <Field name="subject" type="text" className="form-input" placeholder="How can we help you?" />
                        <ErrorMessage name="subject" component="div" className="form-error" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="message" className="form-label">Message</label>
                      <Field name="message" as="textarea" rows="5" className="form-input" placeholder="Your message here..." />
                      <ErrorMessage name="message" component="div" className="form-error" />
                    </div>
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full md:w-auto">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;