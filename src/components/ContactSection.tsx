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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-0">
            {/* Phone */}
            <Card
                className="group border border-white/10 bg-white/10 backdrop-blur-md shadow-product hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5">
              <CardContent
                  className="p-6 sm:p-8 h-full flex items-center lg:items-start gap-4 lg:gap-5 text-center lg:text-left">
                <div className="bg-ice-gradient p-3 rounded-2xl flex-shrink-0 shadow-md">
                  <Phone className="h-6 w-6 text-white"/>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg md:text-xl text-foreground">Phone / WhatsApp Orders</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Call us for immediate assistance</p>
                  <p className="font-medium text-primary text-sm sm:text-base mt-1">
                    <a href="tel:+27835602720" className="hover:underline">+27 83 388 5172</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card
                className="group border border-white/10 bg-white/10 backdrop-blur-md shadow-product hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5">
              <CardContent
                  className="p-6 sm:p-8 h-full flex items-center lg:items-start gap-4 lg:gap-5 text-center lg:text-left">
                <div className="bg-ice-gradient p-3 rounded-2xl flex-shrink-0 shadow-md">
                  <MapPin className="h-6 w-6 text-white"/>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg md:text-xl text-foreground">Location</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Visit our production facility</p>
                  <p className="font-medium text-primary text-sm sm:text-base mt-1">
                    Bluff, Durban, 4052
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card
                className="group border border-white/10 bg-white/10 backdrop-blur-md shadow-product hover:shadow-hover transition-all duration-300 hover:-translate-y-0.5">
              <CardContent
                  className="p-6 sm:p-8 h-full flex items-center lg:items-start gap-4 lg:gap-5 text-center lg:text-left">
                <div className="bg-ice-gradient p-3 rounded-2xl flex-shrink-0 shadow-md">
                  <Clock className="h-6 w-6 text-white"/>
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-lg md:text-xl text-foreground">Business Hours</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Monday – Saturday: 8AM – 6PM</p>
                  <p className="font-medium text-primary text-sm sm:text-base mt-1">Sunday: 10AM – 4PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;