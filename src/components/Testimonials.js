// src/components/Testimonials.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import StarRating from "./StarRating";


const testimonials = [
  {
    name: "Jean Dupont",
    message: "Service exceptionnel ! Voiture propre, livraison rapide. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Amina Traoré",
    message: "Le chauffeur était très professionnel et ponctuel. Expérience parfaite.",
    rating: 4,
  },
  {
    name: "Carlos Mendes",
    message: "Un excellent rapport qualité-prix pour un long séjour à Abidjan.",
    rating: 5,
  },
  {
    name: "Fatou Diallo",
    message: "Super expérience avec IMPERIAL RENT, je relouerai sans hésiter.",
    rating: 5,
  },
  {
    name: "Michel Kouamé",
    message: "Accueil chaleureux et voitures très bien entretenues.",
    rating: 4,
  },
  {
    name: "Sarah B.",
    message: "Facilité de réservation et service client au top !",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-black text-white px-6"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#ffa500]">
          Ce que disent nos clients
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#111] rounded-xl p-8 shadow-md max-w-3xl mx-auto">
              <StarRating rating={testimonial.rating} />
                <p className="text-lg italic mb-6">“{testimonial.message}”</p>
                <h3 className="text-[#ffa500] font-semibold">{testimonial.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
