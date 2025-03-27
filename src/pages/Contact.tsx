import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import ContactForm from "@/components/ui/contact-form";

const ContactPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Contact Us" 
            subtitle="Have questions or need assistance? Reach out to us using any of the methods below."
            centered
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-shaheen-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-shaheen-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Phone className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium text-shaheen-900">+92 310 9205439</p>
                    <p className="font-medium text-shaheen-900">+92 312 1578099</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Mail className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-shaheen-900">shaheen.installment.corporation@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MapPin className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p className="font-medium text-shaheen-900">
                      Near Askari Bank, Main G.T. Road, Kamra Cantt,<br />
                      Attock, Punjab, Pakistan
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-shaheen-200">
                <p className="font-medium text-shaheen-900 mb-4">Follow Us</p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-shaheen-100 transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="text-shaheen-600" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-shaheen-100 transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="text-shaheen-600" />
                  </a>
                  <a 
                    href="#" 
                    className="h-10 w-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-shaheen-100 transition-colors duration-300"
                    aria-label="Youtube"
                  >
                    <Youtube size={18} className="text-shaheen-600" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-shaheen-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-shaheen-900 mb-6">Business Hours</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Monday - Saturday</p>
                    <p className="font-medium text-shaheen-900">9:00 AM - 9:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Friday</p>
                    <p className="font-medium text-shaheen-900">
                      9:00 AM - 1:00 PM<br />
                      <span className="text-xs italic text-muted-foreground">Closed during Jummah prayers</span><br />
                      3:00 PM - 9:00 PM
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                    <Clock className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Sunday</p>
                    <p className="font-medium text-shaheen-900">Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-shaheen-900 mb-6">Send us a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
        
        {/* Map */}
        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold text-shaheen-900 mb-6">Our Location</h3>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-shaheen-100 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.1754600707387!2d72.43526521744384!3d33.86696549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df1c1985abf7fb%3A0x56979e3384205c95!2sShaheen%20Installment%20Corporation!5e0!3m2!1sen!2s!4v1710849445099!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
