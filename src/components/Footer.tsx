import { Snowflake } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Snowflake className="h-8 w-8 mr-3 text-ice-light" />
              <h3 className="text-2xl font-bold">Flavoured Ice Co</h3>
            </div>
            <p className="text-ice-light max-w-md">
              Premium quality flavored ice made with natural ingredients. 
              Refreshing taste in every crystal, delivered fresh to your door.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Products</h4>
            <ul className="space-y-2 text-ice-light">
              <li>Cherry Ice</li>
              <li>Strawberry Ice</li>
              <li>Lemon Ice</li>
              <li>Watermelon Ice</li>
              <li>Plain Ice</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-ice-light">
              <li>+1 (555) ICE-COOL</li>
              <li>orders@flavouredice.co</li>
              <li>123 Cool Street</li>
              <li>Freeze City, FC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ice-blue/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ice-light text-sm">
            © 2024 Flavoured Ice Co. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-ice-light hover:text-white transition-smooth">Privacy Policy</a>
            <a href="#" className="text-ice-light hover:text-white transition-smooth">Terms of Service</a>
            <a href="#" className="text-ice-light hover:text-white transition-smooth">Bulk Orders</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;