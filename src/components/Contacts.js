import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { motion, AnimatePresence } from 'framer-motion';

const validationSchema = Yup.object({
  user_name: Yup.string().required('Le nom est obligatoire'),
  user_email: Yup.string().email('Email invalide').required('L’email est obligatoire'),
  vehicle_type: Yup.string().required('Veuillez choisir un type de véhicule'),
  message: Yup.string().min(5, 'Le message est trop court').required('Le message est obligatoire'),
});

function Contact() {

  const [showPopup, setShowPopup] = useState(false);
  const sendEmail = (values, { resetForm, setSubmitting }) => {
    emailjs
      .send('service_hxtl8i2', 'template_m6eyvye', values, 'XYgcmANRUQSkUL4ft')
      .then(() => {
        setShowPopup(true);
        resetForm();
        setTimeout(() => setShowPopup(false), 4000);
      })
      .catch((error) => {
        alert('Erreur lors de l’envoi : ' + error.text);
      })
      .finally(() => setSubmitting(false));
  };


  return (
    <section id="contact" className="p-8 bg-gray-100 text-center" data-aos="fade-up">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Contact / Réservation</h2>

      <Formik
        initialValues={{ user_name: '', user_email: '', vehicle_type: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={sendEmail}
      >
        {({ isSubmitting }) => (
          <Form className="max-w-md mx-auto space-y-4 text-left">
            <div>
              <Field
                type="text"
                name="user_name"
                placeholder="Votre nom"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="user_name" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                type="email"
                name="user_email"
                placeholder="Votre email"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="user_email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field as="select" name="vehicle_type" className="w-full p-3 border rounded">
                <option value="">Type de véhicule</option>
                <option value="voiture">Voiture</option>
                <option value="moto">Moto</option>
                <option value="utilitaire">Utilitaire</option>
              </Field>
              <ErrorMessage name="vehicle_type" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <Field
                as="textarea"
                name="message"
                placeholder="Votre message"
                rows="4"
                className="w-full p-3 border rounded"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
            >
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </Form>
        )}
      </Formik>
        {/* 🎉 POPUP D’ANIMATION */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded shadow-lg z-50"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            🎉 Message envoyé avec succès !
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}

export default Contact;
