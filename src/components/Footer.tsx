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
              <li>+27 83 560 2720</li>
              <li>Bluff, Durban</li>
              <li>4052</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ice-blue/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-ice-light text-sm">
            © 2025 Flavoured Ice Co. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;