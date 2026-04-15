import { motion } from 'motion/react';
import { Star, Quote, MessageSquare } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export default function Testimonials() {
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
            Patient Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Real feedback from patients who have regained their mobility at Paras Physiocare.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={testimonial.name + idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-bg-light p-10 rounded-2xl border border-[#DFE1E6] relative flex flex-col h-full"
              >
                <Quote className="absolute top-6 right-6 text-primary/10" size={48} />
                
                <div className="flex text-accent mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-text-dark font-medium italic mb-8 text-[16px] leading-relaxed flex-grow">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-[#DFE1E6] flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {testimonial.name ? testimonial.name.charAt(0) : 'P'}
                  </div>
                  <div>
                    <p className="font-bold text-text-dark text-[16px]">
                      {testimonial.name || "Anonymous Patient"}
                    </p>
                    <p className="text-primary text-[12px] font-bold uppercase tracking-wider">
                      {testimonial.condition}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Experience */}
      <section className="py-24 bg-bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageSquare size={32} />
          </div>
          <h2 className="text-3xl font-bold text-text-dark mb-6 uppercase tracking-tight">Share Your Experience</h2>
          <p className="text-text-muted mb-10 leading-relaxed">
            Have you been treated at Paras Physiocare? We'd love to hear your feedback. 
            Your story can help others make the right choice for their health.
          </p>
          <a
            href="https://wa.me/919001666654"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200"
          >
            Send Feedback on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
