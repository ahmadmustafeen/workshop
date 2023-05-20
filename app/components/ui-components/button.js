export default function Button(props) {
  return (
    <div
      className={`px-6 md:px-10 text-sm md:text-base rounded-full py-1.5 md:py-3 border-2 border-primary duration-1000 ${
        props.isTransparent
          ? "bg-transparent hover:bg-primary hover:text-white text-primary"
          : "bg-primary text-white"
      }`}
    >
      Hire Me
    </div>
  );
}
