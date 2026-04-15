import { motion } from 'motion/react';
import { CheckCircle2, Target, Eye, Heart, Award } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function About() {
  return (
    <div className="pt-12">
      {/* Header */}
      <section className="bg-text-dark text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[900] mb-6 tracking-tighter uppercase"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Leading the way in physiotherapy excellence in Nagaur, Rajasthan.
          </motion.p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-blue-50">
              <img
                src="https://picsum.photos/seed/doctor_profile/800/1000"
                alt={CLINIC_INFO.doctor}
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm font-medium uppercase tracking-wider">Years of Experience</p>
            </div>
          </motion.div>

          <div className="space-y-8">
            <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
              Meet Our Expert
            </div>
            <h2 className="text-4xl font-bold text-blue-900">{CLINIC_INFO.doctor}</h2>
            <p className="text-blue-600 font-semibold text-lg">{CLINIC_INFO.role}</p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Dr. Shweta Rathore is a highly skilled and compassionate physiotherapist dedicated to 
              restoring patient health and mobility. With extensive experience in treating complex 
              musculoskeletal and neurological conditions, she brings a wealth of knowledge to 
              Paras Physiocare.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                'BPT (Bachelor of Physiotherapy)',
                'Certified Manual Therapist',
                'Sports Injury Specialist',
                'Neuro-Rehab Expert'
              ].map((item) => (
                <div key={item} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <Award className="text-blue-600" size={20} />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 leading-relaxed">
              Her approach combines advanced clinical techniques with a deep understanding of 
              human anatomy, ensuring that every patient receives a personalized treatment plan 
              tailored to their specific needs and goals.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality physiotherapy services that empower our patients 
                to achieve their physical potential and improve their quality of life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted name in physiotherapy in Nagaur, recognized for clinical 
                excellence, patient-centered care, and innovative rehabilitation techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-blue-100 text-center space-y-6"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Heart size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Integrity, compassion, and continuous learning are at the heart of everything we do. 
                We treat every patient with the respect and care they deserve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-blue-900">Why Choose Paras Physiocare?</h2>
            <div className="space-y-6">
              {[
                {
                  title: 'Expert Guidance',
                  desc: 'Treatment from highly qualified professionals with years of clinical experience.'
                },
                {
                  title: 'Personalized Care',
                  desc: 'Every treatment plan is unique, designed specifically for your condition and lifestyle.'
                },
                {
                  title: 'Modern Techniques',
                  desc: 'We use the latest evidence-based methods and equipment for faster recovery.'
                },
                {
                  title: 'Patient Education',
                  desc: 'We empower you with knowledge and exercises to prevent future injuries.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/clinic1/400/500" alt="Clinic" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/clinic2/400/300" alt="Clinic" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4 pt-8">
              <img src="https://picsum.photos/seed/clinic3/400/300" alt="Clinic" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/clinic4/400/500" alt="Clinic" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
