import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt={"Flavoured Ice Logo"} height={"164px"} width={"164px"}/>
            </div>
            <p className="text-ice-light max-w-md">
              Premium quality flavoured ice with a refreshing taste in every crystal. Made with zero sugar and no
              preservatives, our cubes are infused with natural-tasting flavours.
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
              <li>+27 83 388 5172</li>
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

        <p className="text-ice-light text-sm mt-4 md:mt-0">
          Designed with ❤️ by <a href={"https://www.shogunn.dev"} className={"text-[#323232]/80"}>Shogun Dot Dev</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;