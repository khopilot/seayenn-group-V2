"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    content: "When I received the call that my brother had been seriously injured in Cambodia I was shocked and upon arrival in Phnom Penh I was overwhelmed by the circumstances. Seayeen Group executives Brett and Sinat promised me that everything would be ok. They arranged a ground ambulance transfer to Bangkok, oversaw my brothers medical procedures and had him safely repatriated to France. I will never forget what they did and would recommend them to anyone.",
    author: "Christel Louvel",
    role: "FAMILY MEMBER OF A PATIENT",
    image: "/images/testimonial-1.jpg",
  },
  {
    id: 2,
    content: "Seayeen Group's adept handling of our complex debt collection issue in Cambodia was nothing short of remarkable. Their local expertise and strategic approach turned a challenging situation into a successful resolution, safeguarding our investments and reinforcing our trust in their services. Their professionalism and results-oriented mindset are why we continue to rely on them for our business needs in Asia.",
    author: "Sokha Lim",
    role: "CHIEF FINANCIAL OFFICER",
    company: "ASIA PACIFIC INVESTMENTS",
    image: "/images/testimonial-2.jpg",
  },
  {
    id: 3,
    content: "What sets this company apart is the personality and intelligence of its founder who possesses the ability to confidently, even forcefully navigate through difficult circumstances. I witnessed this a number of times with my early investments and have since watched this become a cultural trait within the company.",
    author: "Adam Sinclair",
    role: "DOCTOR",
    image: "/images/testimonial-3.jpg",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="min-h-[70vh] py-32 bg-gray-50 relative overflow-hidden flex items-center">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2" />
      
      <Container className="relative">
        <div className="text-center mb-20">
          <span className="text-brand-primary font-barlow font-semibold text-sm uppercase tracking-wider">
            Testimonial
          </span>
          <h2 className="mt-4 text-3xl font-karnchang uppercase font-bold text-brand-dark">Clients Feedback</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16">
            <div className="flex items-center justify-between mb-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? "w-8 bg-blue-600" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-blue-100" />
              
              <div className="relative z-10">
                <p className="text-brand-gray text-base font-barlow leading-relaxed mb-6 italic">
                  {testimonials[currentIndex].content}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentIndex].author[0]}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-barlow font-semibold text-brand-dark">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-sm font-barlow text-brand-gray">
                      {testimonials[currentIndex].role}
                    </p>
                    {testimonials[currentIndex].company && (
                      <p className="text-sm font-barlow text-brand-gray">
                        {testimonials[currentIndex].company}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}