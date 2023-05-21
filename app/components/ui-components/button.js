export default function Button(props) {
  const { isTransparent, label } = props;

  // object destructoring ES6

  return (
    <div
      className={`px-4 w-fit md:px-8 cursor-pointer text-center text-sm md:text-base rounded-full py-1.5 md:py-3 border-2 border-primary duration-1000 ${
        isTransparent
          ? "bg-transparent hover:bg-primary hover:text-white text-primary"
          : "bg-primary text-white hover:bg-[#169670] hover:border-[#169670]"
      }`}
    >
      <h5> {label} </h5>
    </div>
  );
}
