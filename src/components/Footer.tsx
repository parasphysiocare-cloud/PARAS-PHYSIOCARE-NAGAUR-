import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Location */}
          <div className="flex flex-col space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Location</span>
            <span className="text-[14px] opacity-90">{CLINIC_INFO.address}</span>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col space-y-1 md:text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Working Hours</span>
            <span className="text-[14px] opacity-90">{CLINIC_INFO.workingHours}</span>
          </div>

          {/* Contact */}
          <div className="flex flex-col space-y-1 md:text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Quick Contact</span>
            <span className="text-[14px] opacity-90">{CLINIC_INFO.mobile} | {CLINIC_INFO.email}</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] uppercase tracking-widest opacity-50">
            © {currentYear} Paras Physiocare Nagaur. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

