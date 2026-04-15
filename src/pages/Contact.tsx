import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Navigation } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Contact() {
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Have questions? We're here to help. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Our Location</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {CLINIC_INFO.address}
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-bold text-sm hover:underline"
                >
                  Get Directions <Navigation size={16} className="ml-2" />
                </a>
              </div>

              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Call or WhatsApp</h3>
                <div className="space-y-4">
                  <a href={`tel:${CLINIC_INFO.mobile}`} className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <span className="font-bold mr-2">Call:</span> {CLINIC_INFO.mobile}
                  </a>
                  <a href={CLINIC_INFO.whatsapp} className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <span className="font-bold mr-2">WhatsApp:</span> Chat Now
                  </a>
                </div>
              </div>

              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6">
                  <Mail size={24} />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Email Us</h3>
                <a href={`mailto:${CLINIC_INFO.email}`} className="text-gray-600 hover:text-blue-600 transition-colors break-all">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100">
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Send us a Message</h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900">Phone</label>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-blue-900">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold text-blue-900">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all resize-none"
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center"
                  >
                    Send Message <Send size={20} className="ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="h-[500px] w-full bg-gray-200 grayscale hover:grayscale-0 transition-all duration-700">
        <iframe
          src={CLINIC_INFO.googleMapsUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Clinic Location"
        ></iframe>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4 text-white">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-blue-100 text-xs font-bold uppercase tracking-wider">Working Hours</p>
              <p className="text-xl font-bold">{CLINIC_INFO.workingHours}</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href={`tel:${CLINIC_INFO.mobile}`}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all flex items-center"
            >
              <Phone size={20} className="mr-2" /> Call Now
            </a>
            <a
              href={CLINIC_INFO.whatsapp}
              className="bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all flex items-center"
            >
              <MessageCircle size={20} className="mr-2" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
