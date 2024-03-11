function Hero() {
  return (
    <div className="flex flex-col-reverse justify-center lg:flex-row lg:gap-[4.8rem] sm:justify-end max-w-[74rem] mx-auto sm:pt-10">
      <div className="sm:pt-[3.5rem] sm:basis-1/2 text-center lg:text-left">
        <h1 className="font-bold text-[clamp(2rem,0.9565rem+5.2174vi,5rem)] leading-none pt-12 xl:pr-16">
          Make remote work
        </h1>
        <p className="px-4 pt-6 text-base pb-7 sm:pb-12 sm:pt-12 lg:px-0 lg:text-lg text-customNeutral-200 lg:pr-28">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="px-6 py-4 font-bold transition-all border-2 sm:px-7 sm:text-lg rounded-2xl bg-customNeutral-300 border-customNeutral-300 hover:bg-customNeutral-100 hover:text-customNeutral-300 text-customNeutral-100">
          Learn more
        </button>
        <div className="flex justify-around h-6 sm:h-[6rem] sm:items-center lg:max-xl:mt-6 max-lg:mt-12 lg:justify-start lg:gap-10 xl:mt-20">
          <img
            src="/images/client-databiz.svg"
            className="h-4 sm:h-5 sm:w-[7.2rem]"
            width={80}
            height={50}
            alt=""
          />
          <img
            src="/images/client-audiophile.svg"
            className="sm:h-[2.5rem] sm:w-[4.5rem]"
            width={50}
            height={50}
            alt=""
          />
          <img
            src="/images/client-meet.svg"
            className="h-4 sm:w-[6rem] sm:h-[1.3rem]"
            width={65}
            height={50}
            alt=""
          />
          <img
            src="/images/client-maker.svg"
            className="h-4 sm:h-[1.5rem] sm:w-[5rem]"
            width={60}
            height={50}
            alt=""
          />
        </div>
      </div>
      <picture className="mx-auto lg:mx-0">
        <source
          media="(min-width: 64rem)"
          srcSet="/images/image-hero-desktop.png"
          type="image/png"
          width={480}
        />
        <img
          src="/images/image-hero-mobile.png"
          alt=""
          aria-hidden="true"
          width={375}
          height={640}
          className=""
        />
      </picture>
    </div>
  );
}

export default Hero;
