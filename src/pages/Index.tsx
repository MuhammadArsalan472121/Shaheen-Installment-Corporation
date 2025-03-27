import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingBag, Clock, CreditCard, Check, ArrowRight, Truck } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/ui/product-card";
import homeAppliancesImage from "@/assets/Home_Appliances.png";
import { allProducts } from "@/pages/Products";

// Update the featured products selection
const featuredProducts = allProducts.filter(product =>
  [3, 13, 21].includes(product.id)
);

// Sample categories
const categories = [
  {
    id: 1,
    name: "Washing Machines",
    description: "High-quality washing machines with 2 years warranty",
    icon: "washing-machine",
    count: 3
  },
  {
    id: 2,
    name: "Ceiling Fans",
    description: "Premium ceiling fans with 2 years warranty",
    icon: "fan",
    count: 3
  },
  {
    id: 3,
    name: "Pedestal Fans",
    description: "Premium pedestal fans with 2 years warranty",
    icon: "fan",
    count: 3
  },
  {
    id: 4,
    name: "Room Coolers",
    description: "Efficient cooling solutions for your home with 2 years warranty",
    icon: "fan",
    count: 3
  },
  {
    id: 5,
    name: "Electric Irons",
    description: "Quality irons for perfect pressing with 2 years warranty",
    icon: "iron",
    count: 3
  },
  {
    id: 6,
    name: "Food Processors",
    description: "Multi-functional kitchen appliances with 1 year warranty",
    icon: "blender",
    count: 3
  }
];

const HomePage = () => {
  const animationRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    animationRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      animationRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-shaheen-50 to-white z-[-1]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center space-x-2 bg-shaheen-50 border border-shaheen-100 rounded-full px-4 py-2">
                <span className="bg-accent-yellow h-2 w-2 rounded-full animate-pulse"></span>
                <span className="text-shaheen-800 text-sm font-medium">Easy Installment Plans Available</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-shaheen-900">
                Get Your Dream Products on <span className="text-gradient">Easy Installments</span>
              </h1>

              <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
                Shaheen Installment Corporation offers a wide range of products on convenient installment plans in Kamra, Attock.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-shaheen-500 hover:bg-shaheen-600 text-white rounded-lg px-8 transition-all duration-300 hover:shadow-lg"
                >
                  <NavLink to="/products">
                    Explore Products
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-shaheen-200 text-shaheen-800 hover:bg-shaheen-50 rounded-lg px-8"
                >
                  <NavLink to="/contact">
                    Contact Us
                    <Phone className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center">
                  <div className="bg-shaheen-100 rounded-full p-2 mr-3">
                    <Clock className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-shaheen-900">Flexible Terms</p>
                    <p className="text-xs text-muted-foreground">3-12 month plans</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-shaheen-100 rounded-full p-2 mr-3">
                    <CreditCard className="h-5 w-5 text-shaheen-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-shaheen-900">Easy Payments</p>
                    <p className="text-xs text-muted-foreground">Affordable installments</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={homeAppliancesImage}
                  alt="Products on display"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold mb-2">
                    Quality Products
                  </p>
                  <p className="text-white/80 text-sm">
                    Wide selection of authentic products
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 h-24 w-24 bg-accent-yellow rounded-full opacity-30 blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 h-40 w-40 bg-shaheen-500 rounded-full opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-shaheen-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={el => animationRefs.current[0] = el}
            className="animate-on-scroll fade-up"
          >
            <SectionHeading
              title="Browse By Category"
              subtitle="Explore our wide range of products available on easy installments."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300 border border-shaheen-100 group hover:border-shaheen-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="bg-shaheen-50 h-12 w-12 rounded-full flex items-center justify-center mb-3 group-hover:bg-shaheen-100 transition-colors duration-300">
                    <ShoppingBag className="h-6 w-6 text-shaheen-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-shaheen-900 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-xs mb-2 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="text-shaheen-600 font-medium text-sm mb-3">
                    {category.count} Variants
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-shaheen-200 text-shaheen-800 hover:bg-shaheen-50 group-hover:border-shaheen-400 group-hover:bg-shaheen-50"
                  >
                    <NavLink to="/products" className="flex items-center justify-center">
                      View
                      <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </NavLink>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={el => animationRefs.current[1] = el}
            className="animate-on-scroll fade-up"
          >
            <SectionHeading
              title="Featured Products"
              subtitle="Check out our most popular products available on easy installment plans."
              centered
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              variant="default"
              size="lg"
              className="bg-shaheen-500 hover:bg-shaheen-600 text-white rounded-lg px-8 transition-all duration-300"
            >
              <NavLink to="/products" className="flex items-center">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white to-shaheen-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            ref={el => animationRefs.current[2] = el}
            className="animate-on-scroll fade-up"
          >
            <SectionHeading
              title="Why Choose Us?"
              subtitle="Discover the benefits of shopping with Shaheen Installment Corporation."
              centered
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: <CreditCard className="h-8 w-8 text-shaheen-500" />,
                title: "Flexible Installment Plans",
                description: "Choose from 3 to 12 month installment plans that fit your budget perfectly."
              },
              {
                icon: <Check className="h-8 w-8 text-shaheen-500" />,
                title: "Genuine Products",
                description: "All our products are authentic and come with proper warranty coverage."
              },
              {
                icon: <Truck className="h-8 w-8 text-shaheen-500" />,
                title: "Free Delivery",
                description: "Enjoy free delivery for all products within Kamra and surrounding areas."
              },
              {
                icon: <Clock className="h-8 w-8 text-shaheen-500" />,
                title: "Quick Processing",
                description: "Simple documentation and quick approval process to get your products faster."
              },
              {
                icon: <ShoppingBag className="h-8 w-8 text-shaheen-500" />,
                title: "Wide Product Range",
                description: "From mobile phones to home appliances, we have everything you need."
              },
              {
                icon: <Phone className="h-8 w-8 text-shaheen-500" />,
                title: "Customer Support",
                description: "Our friendly team is always ready to help you with any queries."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-shaheen-100"
              >
                <div className="bg-shaheen-50 h-16 w-16 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-shaheen-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-shaheen-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-shaheen-600 to-shaheen-900/90 z-[1]"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Ready to Get Your Dream Products?
              </h2>
              <p className="text-white/80 text-lg">
                Visit our store today or contact us to learn more about our easy installment plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-shaheen-900 hover:bg-shaheen-50 rounded-lg px-8"
                >
                  <NavLink to="/products">
                    Browse Products
                    <ShoppingBag className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-shaheen-200 text-shaheen-800 hover:bg-shaheen-50 rounded-lg px-8"
                >
                  <NavLink to="/contact">
                    Contact Us
                    <Phone className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
