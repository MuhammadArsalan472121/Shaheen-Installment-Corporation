
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/section-heading";
import ProductCard from "@/components/ui/product-card";
import { Button } from "@/components/ui/button";
import { Search, Filter, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

// Sample product data
const allProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    category: "Mobile Phones",
    price: 325000,
    installmentMonths: 12,
    monthlyPayment: 27083,
    imageUrl: "https://images.unsplash.com/photo-1695048133142-1a20484426d8?q=80&w=3570&auto=format&fit=crop",
    features: ["Latest A17 Pro chip", "48MP camera system", "Action button", "Titanium design"]
  },
  {
    id: 2,
    name: "Audionic Signature Series",
    category: "Audio Systems",
    price: 45000,
    installmentMonths: 6,
    monthlyPayment: 7500,
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=3540&auto=format&fit=crop",
    features: ["Powerful bass", "Bluetooth connectivity", "LED lights", "Remote control"]
  },
  {
    id: 3,
    name: "Dawlance Electric Oven",
    category: "Kitchen Appliances",
    price: 28000,
    installmentMonths: 4,
    monthlyPayment: 7000,
    imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=3380&auto=format&fit=crop",
    features: ["60L capacity", "Multiple heating modes", "Timer function", "Energy efficient"]
  },
  {
    id: 4,
    name: "Samsung Galaxy S23",
    category: "Mobile Phones",
    price: 280000,
    installmentMonths: 12,
    monthlyPayment: 23333,
    imageUrl: "https://images.unsplash.com/photo-1678911820864-e5cdf5646e35?q=80&w=3464&auto=format&fit=crop",
    features: ["Powerful processor", "Pro-grade camera", "All-day battery", "Dynamic AMOLED display"]
  },
  {
    id: 5,
    name: "Audionic Headphones",
    category: "Audio Systems",
    price: 12000,
    installmentMonths: 3,
    monthlyPayment: 4000,
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3270&auto=format&fit=crop",
    features: ["Noise cancellation", "Wireless", "Long battery life", "Comfortable fit"]
  },
  {
    id: 6,
    name: "Dawlance Refrigerator",
    category: "Home Appliances",
    price: 75000,
    installmentMonths: 12,
    monthlyPayment: 6250,
    imageUrl: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=3387&auto=format&fit=crop",
    features: ["Energy efficient", "Large capacity", "Convertible modes", "Digital display"]
  },
  {
    id: 7,
    name: "Gree Air Conditioner",
    category: "Home Appliances",
    price: 95000,
    installmentMonths: 12,
    monthlyPayment: 7917,
    imageUrl: "https://images.unsplash.com/photo-1635405074683-96d6921a2a68?q=80&w=3164&auto=format&fit=crop",
    features: ["Inverter technology", "Energy saving", "Remote control", "Air purification"]
  },
  {
    id: 8,
    name: "Electric Iron",
    category: "Small Appliances",
    price: 5000,
    installmentMonths: 3,
    monthlyPayment: 1667,
    imageUrl: "https://images.unsplash.com/photo-1585314300256-40505c341f21?q=80&w=3387&auto=format&fit=crop",
    features: ["Steam function", "Anti-drip", "Non-stick soleplate", "Auto shut-off"]
  },
  {
    id: 9,
    name: "Food Processor",
    category: "Kitchen Appliances",
    price: 18000,
    installmentMonths: 6,
    monthlyPayment: 3000,
    imageUrl: "https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed5?q=80&w=3387&auto=format&fit=crop",
    features: ["Multiple attachments", "Powerful motor", "Large capacity", "Easy to clean"]
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
