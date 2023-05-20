import Button from "./ui-components/button";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-heroBG flex flex-col justify-center items-center relative">
      <h2 className="text-lg md:text-3xl z-10">Welcome</h2>
      <h1 className="text-4xl md:text-6xl py-5 z-10">I am Ahmad M.</h1>
      <h2 className="text-lg md:text-3xl z-10">
        Based in Los Angeles, California.
      </h2>
      <div className="my-6 z-10">
        <Button isTransparent label="Hire me" />
      </div>
      <div className="bg-black opacity-60 top-0 left-0 w-screen h-screen absolute"></div>
    </div>
  );
}
