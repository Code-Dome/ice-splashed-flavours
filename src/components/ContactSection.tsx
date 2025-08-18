import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-ice-cool">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to stock up on premium flavored ice? 
            Contact us for orders, bulk pricing, or custom flavor requests.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-4 sm:p-6 flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-ice-gradient p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-base sm:text-lg">Phone Orders</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Call us for immediate assistance</p>
                    <p className="font-medium text-primary text-sm sm:text-base">+1 (555) ICE-COOL</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-ice-gradient p-3 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Orders</h3>
                    <p className="text-muted-foreground">Send us your requirements</p>
                    <p className="font-medium text-primary">orders@flavouredice.co</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-ice-gradient p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-muted-foreground">Visit our production facility</p>
                    <p className="font-medium text-primary">123 Cool Street, Freeze City</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-6 flex items-center space-x-4">
                  <div className="bg-ice-gradient p-3 rounded-full">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-muted-foreground">Monday - Saturday: 8AM - 6PM</p>
                    <p className="font-medium text-primary">Sunday: 10AM - 4PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Order Form */}
          <Card className="shadow-product border-0">
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Quick Order Form</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 sm:p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Your contact number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Preferred Flavors</label>
                  <select className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth">
                    <option>Select your favorites</option>
                    <option>Cherry Ice</option>
                    <option>Strawberry Ice</option>
                    <option>Lemon Ice</option>
                    <option>Watermelon Ice</option>
                    <option>Plain Ice</option>
                    <option>Mixed Selection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Package Size</label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="size" value="2kg" className="mr-2" />
                      2KG Package
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="size" value="5kg" className="mr-2" />
                      5KG Package
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Special Requests</label>
                  <textarea 
                    rows={3}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Any special requirements or bulk order details..."
                  />
                </div>

                <Button className="w-full bg-ice-gradient text-white hover:opacity-90 transition-smooth py-4 sm:py-6 text-base sm:text-lg shadow-ice">
                  Send Order Request
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;