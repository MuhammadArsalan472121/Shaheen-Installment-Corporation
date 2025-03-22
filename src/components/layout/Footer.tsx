
import { Link } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Youtube 
} from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-shaheen-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white flex items-center justify-center">
                <span className="text-shaheen-800 font-bold text-lg">SC</span>
              </div>
              <div className="font-semibold text-xl">
                <span>Shaheen</span>
                <span className="text-accent-yellow"> Installment</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing hassle-free installment plans for a wide range of household and electronic items in Kamra, Attock, Punjab, Pakistan.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'Products', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm flex items-center"
                  >
                    <span className="mr-2">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <Phone size={18} className="text-accent-yellow mt-0.5" />
                <span className="text-white/70">+92 300 1234567</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <Mail size={18} className="text-accent-yellow mt-0.5" />
                <span className="text-white/70">info@shaheeninstallment.com</span>
              </li>
              <li className="flex items-start space-x-3 text-sm">
                <MapPin size={18} className="text-accent-yellow mt-0.5" />
                <span className="text-white/70">Main Market, Kamra Cantt, Attock, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Working Hours</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent-yellow mt-0.5" />
                <div>
                  <p className="text-white/70">Monday - Saturday</p>
                  <p className="text-white font-medium">9:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent-yellow mt-0.5" />
                <div>
                  <p className="text-white/70">Friday</p>
                  <p className="text-white font-medium">
                    9:00 AM - 1:00 PM<br />
                    <span className="text-xs italic text-white/50">Closed during Jummah prayers</span><br />
                    3:00 PM - 9:00 PM
                  </p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent-yellow mt-0.5" />
                <div>
                  <p className="text-white/70">Sunday</p>
                  <p className="text-white font-medium">Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center text-white/50">
          <p>© {currentYear} Shaheen Installment Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
