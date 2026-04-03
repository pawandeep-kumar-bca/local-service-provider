import Button from "../../components/common/Button";

const WelcomePage = () => {
  return (
    <div className="w-full h-full font-roboto  flex flex-col">
      {/* MOBILE IMAGE */}
      <div className="p-2 mt-10 md:hidden block">
        <img src="/assets/services.avif" alt="services" />
      </div>

      {/* DESKTOP HERO */}
      <div className="hidden md:block relative w-full h-full rounded-2xl overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/services.avif"
          alt="services"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay (light white for readability) */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-xs "></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-around items-center h-full p-3 gap-4 ">
          <div className="flex flex-col items-center justify-between gap-5 mt-7">
            <h1 className="font-light  text-5xl">
              Welcome to Our Services
            </h1>

            <h2 className="text-text font-extralight text-3xl">
              Book Trusted Local Services in Seconds
            </h2>

            <p className="text-xl w-2/3 text-text text-center font-light">
              Join as a user, explore services, and upgrade to provider anytime
              to start earning.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-center w-full ">
            <div className="flex gap-6 mt-6 w-2/5">
              <Button color="success" fullWidth>
                Login
              </Button>
              <Button color="white" fullWidth>
                Register
              </Button>
            </div>

            {/* Explore Button */}
            <Button color="blue" className="mt-6">
              Explore Services
            </Button>
          </div>
        </div>
      </div>

      {/* MOBILE CONTENT */}
      <div className="flex md:hidden flex-col items-center p-4 gap-4">
        <h1 className="font-bold text-2xl text-center">
          Welcome to Our Services
        </h1>

        <h2 className="text-base font-medium text-text-secondary text-center">
          Book Trusted Local Services in Seconds
        </h2>

        <p className="text-center text-sm text-muted">
          Join as a user, explore services, and upgrade to provider anytime to
          start earning.
        </p>

        <div className="flex gap-3 w-full mt-7 mb-7">
          <Button color="white" fullWidth>
            Login
          </Button>
          <Button color="success" fullWidth>
            Register
          </Button>
        </div>
        <div className="flex w-full items-center gap-2">
          <div className="flex-1 h-[2px] bg-border  rounded-full"></div>
          <span className="font-bold opacity-70 text-sm">Or</span>
          <div className="flex-1 h-[2px] bg-border rounded-full"></div>
        </div>
        <Button color="blue" fullWidth className="mt-6">
          Explore Services
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
