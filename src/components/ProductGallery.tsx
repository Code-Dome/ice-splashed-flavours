import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Product {
  id: string;
  name: string;
  flavor: string;
  color: string;
  image: string;
  description: string;
  gradient: string;
}

const products: Product[] = [
  {
    id: "cherry",
    name: "Cherry Ice",
    flavor: "Sweet Cherry",
    color: "text-cherry",
    image: "/lovable-uploads/9bcc763c-e56d-4b1e-b081-7ad358cd8348.png",
    description: "Bold cherry flavor with natural sweetness",
    gradient: "bg-cherry-gradient"
  },
  {
    id: "strawberry", 
    name: "Strawberry Ice",
    flavor: "Fresh Strawberry",
    color: "text-strawberry",
    image: "/lovable-uploads/a26cd35e-6161-48ad-af42-c459a2d623ae.png",
    description: "Refreshing strawberry taste from real fruit",
    gradient: "bg-strawberry-gradient"
  },
  {
    id: "lemon",
    name: "Lemon Ice", 
    flavor: "Zesty Lemon",
    color: "text-lemon",
    image: "/lovable-uploads/c30e9522-7210-4240-8097-c8b77370c450.png",
    description: "Tangy citrus burst with natural lemon essence",
    gradient: "bg-lemon-gradient"
  },
  {
    id: "watermelon",
    name: "Watermelon Ice",
    flavor: "Juicy Watermelon", 
    color: "text-watermelon",
    image: "/lovable-uploads/a3390dcd-ea6e-4f2a-8565-42a053f07c9a.png",
    description: "Cool watermelon flavor perfect for hot days",
    gradient: "bg-watermelon-gradient"
  },
  {
    id: "plain",
    name: "Plain Ice",
    flavor: "Pure & Natural",
    color: "text-ice-blue",
    image: "",
    description: "Crystal clear ice, pure and refreshing", 
    gradient: "bg-ice-gradient"
  }
];

const ProductGallery = () => {
  const [selectedSize, setSelectedSize] = useState<"2kg" | "5kg">("2kg");
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const getSizePrice = (size: "2kg" | "5kg") => {
    return size === "2kg" ? "$12.99" : "$24.99";
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Premium Flavors
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our range of natural, refreshing flavored ice. 
            Each batch is carefully crafted for the perfect taste experience.
          </p>
        </div>

        {/* Size Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-secondary rounded-lg p-2 shadow-product">
            <Button
              variant={selectedSize === "2kg" ? "default" : "ghost"}
              className={`px-8 py-3 transition-smooth ${
                selectedSize === "2kg" ? "bg-primary text-primary-foreground shadow-ice" : ""
              }`}
              onClick={() => setSelectedSize("2kg")}
            >
              2KG Package
              <Badge variant="secondary" className="ml-2">
                {getSizePrice("2kg")}
              </Badge>
            </Button>
            <Button
              variant={selectedSize === "5kg" ? "default" : "ghost"}
              className={`px-8 py-3 transition-smooth ${
                selectedSize === "5kg" ? "bg-primary text-primary-foreground shadow-ice" : ""
              }`}
              onClick={() => setSelectedSize("5kg")}
            >
              5KG Package
              <Badge variant="secondary" className="ml-2">
                {getSizePrice("5kg")}
              </Badge>
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {products.map((product) => (
            <Card 
              key={product.id}
              className={`group cursor-pointer transition-smooth hover:shadow-hover hover:scale-105 ${
                selectedProduct === product.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedProduct(selectedProduct === product.id ? null : product.id)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="aspect-[4/5] relative overflow-hidden rounded-t-lg">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full ${product.gradient} flex items-center justify-center`}>
                      <div className="text-white text-6xl font-bold opacity-50">ICE</div>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${product.gradient} opacity-0 group-hover:opacity-20 transition-smooth`} />
                </div>
                
                {/* Product Info */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${product.color}`}>
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-xs">
                      {product.flavor}
                    </Badge>
                    <span className="font-bold text-lg text-primary">
                      {getSizePrice(selectedSize)}
                    </span>
                  </div>
                  
                  {selectedProduct === product.id && (
                    <Button 
                      className={`w-full mt-4 ${product.gradient} text-white hover:opacity-90 transition-smooth`}
                    >
                      Order {selectedSize.toUpperCase()}
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Ready to place an order? Contact us for bulk pricing and custom flavors.
          </p>
          <Button size="lg" className="bg-ice-gradient text-white shadow-ice hover:opacity-90 transition-smooth">
            Contact Us Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;