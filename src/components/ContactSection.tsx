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
            Ready to stock up on premium flavoured ice? 
            Contact us for orders and bulk pricing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 items-center px-4 sm:px-0">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-4 sm:p-6 flex items-center justify-center space-x-3 sm:space-x-4 text-center">
                  <div className="bg-ice-gradient p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="min-w-0 text-center">
                    <h3 className="font-semibold text-base sm:text-lg">Phone/ Whatsapp Orders</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Call us for immediate assistance</p>
                    <p className="font-medium text-primary text-sm sm:text-base">+27 83 560 2720</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-4 sm:p-6 flex items-center justify-center space-x-3 sm:space-x-4 text-center">
                  <div className="bg-ice-gradient p-2 sm:p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-base sm:text-lg">Location</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Visit our production facility</p>
                    <p className="font-medium text-primary text-sm sm:text-base">Bluff, Durban, 4052</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-product hover:shadow-hover transition-smooth">
                <CardContent className="p-4 sm:p-6 flex items-center justify-center space-x-3 sm:space-x-4 text-center">
                  <div className="bg-ice-gradient p-2 sm:p-3 rounded-full flex-shrink-0">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-base sm:text-lg">Business Hours</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Monday - Saturday: 8AM - 6PM</p>
                    <p className="font-medium text-primary text-sm sm:text-base">Sunday: 10AM - 4PM</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;