import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Phone, Users, Calendar, Target, CheckCircle } from "lucide-react";
import shopFrontImage from "@/assets/shopFront.png";
import MA_ourTeam_OM from "@/assets/MA_ourTeam_OM.png";

const AboutPage = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="About Shaheen Installment Corporation" 
              subtitle="Learn more about our business and our mission which is to provide affordable products on easy installments."
             />
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-shaheen-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-shaheen-900 mb-4">Our Story</h3>
                <p className="text-muted-foreground mb-4">
                  Shaheen Installment Corporation was established in 2009 with a vision to make quality products accessible to everyone through affordable installment plans. Located in Kamra, Attock, we started with a small inventory of household appliances and gradually expanded our product range and electronic items.
                </p>
                <p className="text-muted-foreground mb-4">
                  Over the years, we have built a reputation for providing genuine products, transparent installment plans, and exceptional customer service. Our commitment to integrity and customer satisfaction has made us a trusted name in the region.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve Thousands of customers every month, helping them fulfill their needs without financial strain through our flexible installment options.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative h-full rounded-2xl overflow-hidden">
                <img 
                  src={shopFrontImage}
                  alt="Shaheen Installment Store" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-8">
                    <h3 className="text-white text-xl font-semibold mb-2">Our Store</h3>
                    <p className="text-white/80">Near Askari Bank, Main G.T. Road, Kamra Cantt, Attock, Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Mission & Vision */}
        <div className="mb-16">
          <Card className="bg-white overflow-hidden p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 bg-shaheen-900 text-white"
              >
                <div className="bg-white/10 h-14 w-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed">
                  To make quality products accessible to everyone through transparent, flexible, and affordable installment plans, ensuring that financial constraints never limit our customers' access to the products they need and desire.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-8"
              >
                <div className="bg-shaheen-50 h-14 w-14 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-shaheen-600" />
                </div>
                <h3 className="text-2xl font-semibold text-shaheen-900 mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading installment-based retail business in the region, recognized for our integrity, customer-centric approach, and the positive impact we make on our community by enabling financial flexibility and access to quality products.
                </p>
              </motion.div>
            </div>
          </Card>
        </div>
        
        {/* Values */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="Our Core Values" 
              subtitle="These principles guide everything we do at Shaheen Installment Corporation."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                icon: <CheckCircle className="h-8 w-8 text-shaheen-500" />,
                title: "Integrity",
                description: "We conduct our business with honesty and transparency in all dealings with our customers."
              },
              {
                icon: <Users className="h-8 w-8 text-shaheen-500" />,
                title: "Customer Focus",
                description: "We prioritize our customers' needs and satisfaction in every decision we make."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-shaheen-500" />,
                title: "Quality",
                description: "We offer only genuine, high-quality products that provide real value to our customers."
              },
              {
                icon: <CheckCircle className="h-8 w-8 text-shaheen-500" />,
                title: "Accessibility",
                description: "We make quality products accessible to all through flexible installment plans."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-shaheen-100"
              >
                <div className="bg-shaheen-50 h-14 w-14 rounded-lg flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-shaheen-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Team */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeading 
              title="Our Team" 
              subtitle="Meet the dedicated people behind Shaheen Installment Corporation."
            />
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Muhammad Rafique",
                role: "Founder & CEO",
                // image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop",
                bio: "With over 15 years of experience in retail, Muhammad Rafique founded Shaheen Installment Corporation to make quality products accessible to everyone."
              },
              {
                name: "Muhammad Arsalan",
                role: "Operations Manager",
                image: MA_ourTeam_OM,
                bio: "Muhammad Arsalan ensures that our day-to-day operations run smoothly and that our customers receive the best possible service."
              },
              {
                name: "Tanveer Butt",
                role: "Customer Relations",
                // image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop",
                bio: "Tanveer Butt is dedicated to building strong relationships with our customers and addressing their needs efficiently."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-shaheen-900">{member.name}</h3>
                  <p className="text-shaheen-500 font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-shaheen-50 rounded-2xl p-8 md:p-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-shaheen-900 mb-4">
              Ready to explore our products?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Visit our store or browse our product range online to find what you need on easy installment plans.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-shaheen-500 hover:bg-shaheen-600 text-white rounded-lg px-8 transition-all duration-300"
              >
                <NavLink to="/products">
                  Browse Products
                </NavLink>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-shaheen-200 text-shaheen-800 hover:bg-shaheen-100 rounded-lg px-8"
              >
                <NavLink to="/contact" className="flex items-center">
                  Contact Us
                  <Phone className="ml-2 h-5 w-5" />
                </NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
