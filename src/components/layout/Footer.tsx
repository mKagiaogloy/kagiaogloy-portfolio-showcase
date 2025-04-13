
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Michael Kagiaogloy. All rights reserved.
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-4 w-4 mx-1 text-accent" /> and modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
