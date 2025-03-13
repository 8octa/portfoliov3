import Button from "./Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col justify-center items-center text-center h-[50vh] mt-20 p-20 z-0"
    >
      <p className="text-zinc-400 text-md uppercase font-bold tracking-widest">
        <p className="text-2xl animate-wiggle-more animate-infinite inline-block z-0">
          👋
        </p>{" "}
        Hello, I am Octavian{" "}
      </p>
      <h1 className="text-7xl lg:text-9xl font-black mt-1 mb-10 tracking-wide animate-fade-left animate-duration-[1111ms] animate-delay-[1111ms]">
        Front End Developer
      </h1>
      <p className="text-zinc-500">
        ~ designing, coding, and modifying{" "}
        <span className="text-white"> websites</span>, from layout to function,
        according to a client's specifications ~
      </p>
      <Button className="mt-5" text="Show my work" />
    </section>
  );
};

export default Hero;
