/* eslint-disable react/prop-types */
import { companyRelated, features } from "../data";
import DropDown from "./DropDown";
import MenuButton from "./MenuButton";

function Navbar({
  isMenuOpen,
  onMenuOpen,
  isFeatureMenuOpen,
  onFeatureMenuOpen,
  isCompanyMenuOpen,
  onCompanyMenuOpen,
}) {
  return (
    <>
      <MenuButton isMenuOpen={isMenuOpen} onMenuOpen={onMenuOpen} />
      <nav
        id="navbar-menu"
        className={`sm:flex-1 inset-x-0 inset-y-0 fixed sm:static transition-backdrop ${
          isMenuOpen ? "backdrop-brightness-50" : "backdrop-brightness-100"
        }`}
      >
        <ul
          className={`flex sm:gap-[clamp(2rem,1.8261rem+0.8696vi,2.5rem)] sm:transition-none transition-transform sm:translate-x-0 max-sm:overflow-scroll sm:bg-white sm:items-center fixed sm:static sm:w-auto z-20 inset-y-0 right-0 bg-customNeutral-100 w-[64vw] sm:py-0 sm:px-0 py-20 px-6 sm:flex-row flex-col gap-4 leading-[1.6rem] ${
            isMenuOpen ? "-translate-x-0" : "translate-x-full"
          }`}
        >
          <li className="relative ">
            <button
              className={`transition-all hover:text-customNeutral-300 ${
                isFeatureMenuOpen
                  ? "after:content-[url('/images/icon-arrow-up.svg')] after:ml-2"
                  : "after:content-[url('/images/icon-arrow-down.svg')] after:ml-2"
              }`}
              onClick={onFeatureMenuOpen}
              aria-expanded={isFeatureMenuOpen}
              aria-controls="features-menu"
            >
              Features
            </button>
            <DropDown
              id="features-menu"
              items={features}
              isMenuOpen={isFeatureMenuOpen}
              customStyle="-left-20 top-10 px-6 py-6"
            />
          </li>
          <li className="relative">
            <button
              className={`transition-all hover:text-customNeutral-300 ${
                isCompanyMenuOpen
                  ? "after:content-[url('/images/icon-arrow-up.svg')] after:ml-2"
                  : "after:content-[url('/images/icon-arrow-down.svg')] after:ml-2"
              } `}
              onClick={onCompanyMenuOpen}
              aria-expanded={isCompanyMenuOpen}
              aria-controls="company-name"
            >
              Company
            </button>
            <DropDown
              id="company-menu"
              items={companyRelated}
              customStyle="-left-1 top-10 py-6 px-7"
              isMenuOpen={isCompanyMenuOpen}
            />
          </li>
          <li>
            <button className="transition-all hover:text-customNeutral-300">
              Careers
            </button>
          </li>
          <li className="">
            <button className="transition-all hover:text-customNeutral-300">
              About
            </button>
          </li>
          <li className="mx-auto mt-3 sm:ml-auto sm:mr-0 sm:mt-0">
            <button className="transition-all hover:text-customNeutral-300">
              Login
            </button>
          </li>
          <li className="mx-auto sm:mx-0">
            <button className="px-16 py-2 transition-all border-2 sm:px-5 hover:text-customNeutral-300 sm:py-3 border-customNeutral-300 rounded-2xl">
              Register
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
