/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header({ isMenuOpen, onMenuOpen }) {
  const [isFeatureMenuOpen, setIsFeatureMenuOpen] = useState(false);
  const [isCompanyMenuOpen, setIsCompanyMenuOpen] = useState(false);

  const handleFeatureMenuOpen = () => {
    setIsFeatureMenuOpen((featureMenu) => {
      return !featureMenu;
    });
  };

  const handleCompanyMenuOpen = () => {
    setIsCompanyMenuOpen((companyMenu) => {
      return !companyMenu;
    });
  };

  return (
    <header className="flex text-customNeutral-200 sm:gap-[clamp(1.25rem,0.2935rem+4.7826vi,4rem)] sm:text-sm items-center max-w-[86.8rem] mx-auto px-4 py-6">
      <Logo />
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpen={onMenuOpen}
        isFeatureMenuOpen={isFeatureMenuOpen}
        onFeatureMenuOpen={handleFeatureMenuOpen}
        isCompanyMenuOpen={isCompanyMenuOpen}
        onCompanyMenuOpen={handleCompanyMenuOpen}
      />
    </header>
  );
}

export default Header;
