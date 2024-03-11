import { useState } from "react";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      <Header isMenuOpen={isMenuOpen} onMenuOpen={handleMenuOpen} />
      <Main />
    </>
  );
}

export default Home;
