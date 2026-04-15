import { motion } from 'motion/react';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Expert physiotherapy solutions tailored to your specific needs.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {SERVICES.map((service, idx) => {
              const Icon = (Icons as any)[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    <Icon size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-gray-50">
                    <Link
                      to="/appointment"
                      className="text-blue-600 font-bold flex items-center group-hover:translate-x-2 transition-transform"
                    >
                      Book Treatment <Icons.ChevronRight size={18} className="ml-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Our Process</h2>
            <h3 className="text-4xl font-bold text-blue-900">How We Help You Recover</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0" />
            
            {[
              { step: '01', title: 'Consultation', desc: 'Detailed assessment of your condition and medical history.' },
              { step: '02', title: 'Diagnosis', desc: 'Identifying the root cause of your pain or mobility issue.' },
              { step: '03', title: 'Treatment', desc: 'Personalized therapy sessions using advanced techniques.' },
              { step: '04', title: 'Recovery', desc: 'Progress monitoring and home exercise programs.' }
            ].map((item, idx) => (
              <div key={item.step} className="relative z-10 bg-white p-8 rounded-3xl shadow-sm border border-blue-100 text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-6 shadow-lg shadow-blue-200">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Common Questions</h2>
            <h3 className="text-4xl font-bold text-blue-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            {[
              { q: 'How many sessions will I need?', a: 'The number of sessions depends on the severity and nature of your condition. After the initial assessment, Dr. Shweta will provide a recommended treatment plan.' },
              { q: 'Do I need a doctor\'s referral?', a: 'No, you can book an appointment directly with us. However, if you have a referral or medical reports, please bring them along.' },
              { q: 'What should I wear for my appointment?', a: 'Wear comfortable, loose-fitting clothing that allows easy access to the area being treated.' },
              { q: 'Is home visit available in Nagaur?', a: 'Yes, we provide home visit services for patients who are unable to visit the clinic due to mobility issues.' }
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 bg-gray-50 rounded-2xl border border-gray-100"
              >
                <h4 className="text-lg font-bold text-blue-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
