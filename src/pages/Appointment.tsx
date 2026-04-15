import { useState } from 'react';
import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, User, Phone, ClipboardList, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Appointment() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <div className="pt-32 pb-24 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-blue-50"
        >
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Request Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for booking an appointment. Our team will contact you shortly on your provided phone number to confirm the time.
          </p>
          <button
            onClick={() => setFormState('idle')}
            className="w-full bg-blue-600 text-white py-4 rounded-full font-bold hover:bg-blue-700 transition-colors"
          >
            Book Another Appointment
          </button>
        </motion.div>
      </div>
    );
  }

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
            Book Now
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-blue-100 max-w-2xl mx-auto"
          >
            Take the first step towards recovery. Fill out the form below.
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-blue-900">Why Book Online?</h2>
              <p className="text-gray-600 text-lg">
                Booking your appointment online is fast, easy, and ensures you get a priority slot. 
                Our team will review your request and call you back within 2 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Clock size={20} />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Save Time</h4>
                <p className="text-gray-500 text-sm">Skip the phone queue and book in seconds.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-blue-100">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-4">
                  <Calendar size={20} />
                </div>
                <h4 className="font-bold text-blue-900 mb-2">Flexible Slots</h4>
                <p className="text-gray-500 text-sm">Choose a date and time that works for you.</p>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Need Immediate Help?</h3>
              <div className="space-y-4">
                <a href={`tel:${CLINIC_INFO.mobile}`} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center group-hover:bg-blue-700 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">Call Us</p>
                    <p className="text-lg font-bold">{CLINIC_INFO.mobile}</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-blue-300 text-xs font-bold uppercase tracking-wider">Working Hours</p>
                    <p className="text-lg font-bold">9:00 AM – 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-blue-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900 flex items-center">
                  <User size={16} className="mr-2" /> Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900 flex items-center">
                  <Phone size={16} className="mr-2" /> Phone Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-blue-900 flex items-center">
                  <ClipboardList size={16} className="mr-2" /> Problem / Condition
                </label>
                <select
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all appearance-none"
                >
                  <option value="">Select a condition</option>
                  <option value="back-pain">Back Pain</option>
                  <option value="neck-pain">Neck Pain</option>
                  <option value="sports-injury">Sports Injury</option>
                  <option value="orthopedic">Orthopedic Issue</option>
                  <option value="paralysis">Paralysis</option>
                  <option value="post-surgery">Post Surgery Rehab</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900 flex items-center">
                    <Calendar size={16} className="mr-2" /> Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-blue-900 flex items-center">
                    <Clock size={16} className="mr-2" /> Preferred Time
                  </label>
                  <input
                    required
                    type="time"
                    className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="pt-4">
                <button
                  disabled={formState === 'submitting'}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 disabled:opacity-70 flex items-center justify-center"
                >
                  {formState === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Confirm Appointment Request'
                  )}
                </button>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-xl">
                <AlertCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-800 leading-relaxed">
                  By submitting this form, you agree to be contacted by Paras Physiocare for appointment confirmation.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
