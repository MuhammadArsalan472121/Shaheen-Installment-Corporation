import { useState, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import AcDcPlasticRoomCooler from "@/assets/roomCoolers/AC_DC_P_Room_Cooler.png";
import AcDcMetalRoomCooler from "@/assets/roomCoolers/AC_DC_M_Room_Cooler.png";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    category: string;
    price: string | number;
    installmentMonths: string | number;
    monthlyPayment: string | number;
    imageUrl: string;
    features?: string[];
  };
  className?: string;
}

const ProductCard = ({ product, className }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImage, setCurrentImage] = useState(product.imageUrl);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (product.name.includes("AC/DC Both")) {
      interval = setInterval(() => {
        setCurrentImage(prev => 
          prev === AcDcPlasticRoomCooler 
            ? AcDcMetalRoomCooler 
            : AcDcPlasticRoomCooler
        );
      }, 5000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [product.name]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative group bg-white rounded-2xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300",
        className
      )}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="bg-shaheen-100 text-shaheen-800 text-xs font-medium px-2.5 py-1 rounded-full">
          {product.category}
        </span>
      </div>

      {/* Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-cover bg-center transform transition-all duration-1000",
            isHovered ? "scale-110" : "scale-100"
          )}
          style={{ backgroundImage: `url(${currentImage})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-shaheen-900">{product.name}</h3>
        
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-muted-foreground text-sm">
              Price
            </p>
            <p className="font-bold text-lg">
              {typeof product.price === 'number' ? `Rs. ${product.price.toLocaleString()}` : product.price}
            </p>
          </div>
          
          <div className="text-right">
            <p className="text-muted-foreground text-sm">
              Monthly Plan
            </p>
            <p className="font-bold text-lg text-shaheen-600">
              {typeof product.monthlyPayment === 'number' ? `Rs. ${product.monthlyPayment.toLocaleString()}` : product.monthlyPayment}
            </p>
          </div>
        </div>

        {/* Features */}
        {product.features && (
          <ul className="mb-6 space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <Check size={16} className="mr-2 text-shaheen-500 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="pt-4 border-t border-border">
          <p className="text-sm text-center font-medium mb-4">
            {typeof product.installmentMonths === 'number' 
              ? `Get it on easy installments of ${product.installmentMonths} months`
              : `Easy installments available for ${product.installmentMonths} months`}
          </p>
          {/* Add details page link here
           <Button className="w-full group bg-shaheen-500 hover:bg-shaheen-600 transition-all duration-300">
            <span>View Details</span>
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
          </Button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
