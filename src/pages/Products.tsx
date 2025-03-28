import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import saadAsiaWMP from "@/assets/washingMachines/saad_asia_WM_P.webp";
import saadAsiaWMP2 from "@/assets/washingMachines/saad_asia_WM_P2.webp";
import saadAsiaWMM from "@/assets/washingMachines/saad_asia_WM_M.jpg";
import fanMagnum from "@/assets/cfans/cFanMagnum.jpg";
import fanClassicGold from "@/assets/cfans/cFanClassicGold.jpg";
import fanMarjan from "@/assets/cfans/cFanMarjan.jpg";
import fanPedestalBlack from "@/assets/pfans/pFanBlack.png";
import fanPedestalGrey from "@/assets/pfans/pFanGrey.png";
import fanPedestalBlackACDC from "@/assets/pfans/pFanBlackACDC.png";
import saadAsiaRoomCoolerP from "@/assets/roomCoolers/saad_asia_plastic_Room_Cooler.jpg";
import lahoriRoomCooler from "@/assets/roomCoolers/lahori_Room_Cooler.png";
import AcDcPlasticRoomCooler from "@/assets/roomCoolers/AC_DC_P_Room_Cooler.png";
import NationalIron from "@/assets/Irons/NationalIron.png";
import WestPointIron from "@/assets/Irons/WestPointIron.png";
import SamfordIron from "@/assets/Irons/SamfordIron.png";
import blender2x1 from "@/assets/foodProcessors/blender2x1.png";
import juicerBlender3x1 from "@/assets/foodProcessors/juicer&blender3x1.png";
import foodFactory from "@/assets/foodProcessors/foodFactory.png";

// Add type definition before the products array
interface Product {
  id: number;
  name: string;
  category: string;
  price: string | number;
  installmentMonths: string | number;
  monthlyPayment: string | number;
  imageUrl: string;
  features: string[];
}

// Sample product data
export const allProducts: Product[] = [
  {
    id: 1,
    name: "Saad Asia Plastic Body Washing Machine",
    category: "Washing Machines",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMP,
    features: ["8.5 KG Capacity", "Energy Efficient", "Tub Clean Function", "Analog Control","2-Year Warranty"]
  },
  {
    id: 2,
    name: "Saad Asia Plastic Body Washing Machine",
    category: "Washing Machines",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMP2,
    features: ["8.5 KG Capacity", "Direct Motion Motor", "Smart Wash", "Multiple Programs","2-Year Warranty"]
  },
  {
    id: 3,
    name: "Saad Asia Metal Body Washing Machine",
    category: "Washing Machines",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMM,
    features: ["8 KG Capacity", "Turbo Wash", "Child Lock", "Multiple Wash Programs","2-Year Warranty"]
  },
  {
    id: 4,  
    name: "Saad Asia Plastic Body Dryer",
    category: "Dryers",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMP,
    features: ["8.5 KG Capacity", "Energy Efficient", "Tub Clean Function", "Analog Control","2-Year Warranty"]
  },
  {
    id: 5,
    name: "Saad Asia Plastic Body Dryer",
    category: "Dryers",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMP2,
    features: ["8.5 KG Capacity", "Direct Motion Motor", "Smart Wash", "Multiple Programs","2-Year Warranty"]
  },
  {
    id: 6,
    name: "Saad Asia Metal Body Dryer",
    category: "Dryers",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaWMM,
    features: ["8 KG Capacity", "Turbo Wash", "Child Lock", "Multiple Wash Programs","2-Year Warranty"]
  },
  {
    id: 7,
    name: "Alsheikh / Climax Magnum Ceiling Fan",
    category: "Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanMagnum,
    features: ["56-inch Sweep", "Copper Winding", "High Air Delivery", "2-Year Warranty"]
  },
  {
    id: 8,
    name: "Alsheikh / Climax Classic Gold Ceiling Fan",
    category: "Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanClassicGold,
    features: ["56-inch Sweep", "Copper Winding", "High Air Delivery", "2-Year Warranty"]
  },
  {
    id: 9,
    name: "Alsheikh / Climax Marjan Ceiling Fan",
    category: "Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanMarjan,
    features: ["56-inch Size", "Double Ball Bearing", "Anti-Rust Coating", "2-Year Warranty"]
  },
  {
    id: 10,
    name: "Alsheikh / Climax Fancy Black Pedestal Fan",
    category: "Pedestal Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanPedestalBlack,
    features: ["24-inch Size", "3-Speed Control", "Oscillation Function", "Adjustable Height","2-Year Warranty"]
  },
  {
    id: 11,
    name: "Alsheikh / Climax Fancy Grey Pedestal Fan",
    category: "Pedestal Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanPedestalGrey,
    features: ["24-inch Size", "3-Speed Control", "Oscillation Function", "Adjustable Height","2-Year Warranty"]
  },
  {
    id: 12,
    name: "Alsheikh / Climax Fancy Black AC/DC Pedestal Fan",
    category: "Pedestal Fans",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: fanPedestalBlackACDC,
    features: ["20-inch Size", "3-Speed Control", "Oscillation Function", "Adjustable Height","2-Year Warranty"]
  },
  {
    id: 13,
    name: "Saad Asia Plastic Room Cooler",
    category: "Room Coolers",
    price: "Prices may vary",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: saadAsiaRoomCoolerP,
    features: ["Shock & rust proof Plastic Body", "Large water tank", "Copper Motor & 25W water pump", "High Air Flow & Honeycomb Cooling pad","2-Year Warranty"]
  },
  {
    id: 14,
    name: "Lahori Metal Body Room Cooler",
    category: "Room Coolers",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: lahoriRoomCooler,
    features: ["Metal Body", "Large Water Tank", "Copper Motor & 25W water pump", "High Air Flow & Honeycomb Cooling pad","2-Year Warranty"]
  },
  {
    id: 15,
    name: "AC/DC Both Bodies Room Cooler",
    category: "Room Coolers",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 2000 - Rs 5000",
    imageUrl: AcDcPlasticRoomCooler,
    features: ["Dual Power (AC/DC)", "12V Water Pump & Motor", "Solar Panel Optional", "High Air Flow & Honeycomb Cooling pad","2-Year Warranty"]
  },
  {
    id: 16,
    name: "National Iron",
    category: "Electric Irons",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: NationalIron,
    features: ["Non-stick Coating", "Temperature Control", "Stylish Grip", "1000W Power","2-Year Warranty"]
  },
  {
    id: 17,
    name: "West Point Iron",
    category: "Electric Irons",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: WestPointIron,
    features: ["Temperature Control", "Stylish Grip", "Anti-drip", "1000W Power","2-Year Warranty"]
  },
  {
    id: 18,
    name: "Samford Iron",
    category: "Electric Irons",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1000 - Rs 2500",
    imageUrl: SamfordIron,
    features: ["Ceramic Soleplate", "Stylish Grip", "Anti-calc", "1000W Power","2-Year Warranty"]
  },
  {
    id: 19,
    name: "2-in-1 Blender & Chopper",
    category: "Food Processors",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1500 - Rs 3000",
    imageUrl: blender2x1,
    features: ["Blender & Chopper", "Child Safty Lock", "Over Heating Protection", "350 Watts | 220V - 240V | 50/60Hz Motor", "2 Years Official Brand Warranty"]
  },
  {
    id: 20,
    name: "3-in-1 Juicer Blender",
    category: "Food Processors",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1500 - Rs 3000",
    imageUrl: juicerBlender3x1,
    features: ["Chopper, Grinder & Blender", "Child Safty Lock", "Stainless steel spinner", "500 Watts | 220V - 240V | 50/60Hz  Motor", "2 Years Official Brand Warranty"]
  },
  {
    id: 21,
    name: "All-in-One Food Factory",
    category: "Food Processors",
    price: "Prices may vary |",
    installmentMonths: "3-10",
    monthlyPayment: "Rs 1500 - Rs 3000",
    imageUrl: foodFactory,
    features: ["Multi-Functionality– 7 Functions","Child Safty Lock", "Advanced Speed Control ", "700 Watts | 220V - 240V | 50/60Hz Motor", "2 Years Official Brand Warranty"]
  }
];

// Extract unique categories
const categories = ["All", ...new Set(allProducts.map(p => p.category))];

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Apply filters when categories or search query changes
  useEffect(() => {
    let result = allProducts;
    
    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.category.toLowerCase().includes(query)
      );
    }
    
    setFilteredProducts(result);
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeading 
            title="Our Products" 
            subtitle="Explore our wide range of products available on easy installment plans."
            centered
          />
        </motion.div>

        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-auto flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 focus-visible:ring-shaheen-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Alert Message */}
            <div className="text-shaheen-600 text-sm font-medium bg-shaheen-50 px-4 py-2 rounded-lg border border-shaheen-200">
              ⚠️ Real product may vary from the product displayed in picture
            </div>

            <div className="w-full md:w-auto flex">
              <Button
                variant="outline"
                className="md:hidden w-full flex items-center justify-center gap-2"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <Filter className="h-4 w-4" />
                {isFilterOpen ? "Hide Categories" : "Show Categories"}
              </Button>
            </div>
          </div>

          {/* Categories - Desktop */}
          <div className="hidden md:flex mt-6 gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                className={cn(
                  "rounded-full border-shaheen-200 hover:bg-shaheen-50 px-5",
                  activeCategory === category && "bg-shaheen-500 text-white hover:bg-shaheen-600 border-transparent"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Categories - Mobile */}
          {isFilterOpen && (
            <div className="md:hidden mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className={cn(
                    "rounded-full border-shaheen-200 hover:bg-shaheen-50 px-5",
                    activeCategory === category && "bg-shaheen-500 text-white hover:bg-shaheen-600 border-transparent"
                  )}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No products found matching your criteria.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="border-shaheen-200 text-shaheen-800 hover:bg-shaheen-50"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
