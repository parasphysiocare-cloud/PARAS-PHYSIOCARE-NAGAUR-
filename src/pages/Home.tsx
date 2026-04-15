import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronRight, Star, CheckCircle2, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO, SERVICES, TESTIMONIALS } from '../constants';
import * as Icons from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-block bg-primary text-white px-3 py-1 rounded-sm text-[12px] font-bold uppercase tracking-wider">
              Specialist Clinic in Nagaur
            </div>
            <h1 className="massive-h1 text-primary">
              NAGAUR'S<br />TRUSTED<br />CARE.
            </h1>
            <p className="text-[20px] text-text-muted max-w-lg leading-tight">
              Expert physiotherapy solutions by {CLINIC_INFO.doctor}. Dedicated to restoring your mobility and improving your quality of life.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/appointment"
                className="bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center"
              >
                Book Appointment
              </Link>
              <a
                href={CLINIC_INFO.whatsapp}
                className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center"
              >
                Chat on WhatsApp
              </a>
            </div>
            
            <div className="flex items-center space-x-4 pt-8 border-t border-[#EBECF0]">
              <div className="w-12 h-12 bg-accent rounded-full flex-shrink-0" />
              <div className="flex flex-col">
                <h4 className="text-[16px] font-bold text-text-dark">{CLINIC_INFO.doctor}</h4>
                <p className="text-[13px] text-text-muted">BPT, Expert Physiotherapist</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img
                src="https://picsum.photos/seed/physio_bold/800/1000"
                alt="Physiotherapy Treatment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 border-l-[3px] border-primary pl-4">
            <h2 className="text-[12px] font-bold uppercase tracking-[2px] text-text-muted">Specialized Treatments</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((service, idx) => {
              const Icon = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white p-8 rounded-xl border border-[#DFE1E6] flex flex-col justify-center hover:border-primary transition-colors group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-[15px] font-bold text-primary mb-1 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-text-muted text-[13px] leading-snug">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-12 border-l-[3px] border-primary pl-4 flex justify-between items-end">
            <div>
              <h2 className="text-[12px] font-bold uppercase tracking-[2px] text-text-muted">Patient Stories</h2>
              <h3 className="text-3xl font-[900] text-text-dark mt-2 tracking-tight uppercase">What Our Patients Say</h3>
            </div>
            <Link to="/testimonials" className="text-primary font-bold text-sm uppercase tracking-wider hover:underline hidden sm:block">
              View All Stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 3).map((testimonial, idx) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-bg-light p-8 rounded-xl border border-[#DFE1E6] flex flex-col h-full"
              >
                <div className="flex text-accent mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-text-dark font-medium italic mb-6 text-[14px] flex-grow">"{testimonial.text}"</p>
                <div className="flex items-center space-x-3 pt-6 border-t border-[#DFE1E6]/50">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-[12px]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-[14px]">{testimonial.name}</p>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-widest">{testimonial.condition}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link to="/testimonials" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wider">
              View All Stories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

