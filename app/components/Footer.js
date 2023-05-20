export default function Footer() {
  return (
    <div className="w-full py-16 bg-secondary flex flex-col px-2 md:px-16 md:flex-row">
      <div className="w-full md:w-2/3 flex justify-center md:justify-start items-center ">
        Copyright © 2023
        <span className="text-primary mx-0.5 md:mx-2 my-4 md:my-0">
          Simone.
        </span>
        All Rights Reserved.
      </div>
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
        <p className="mx-5">Terms & Policy</p>
        <p>Disclaimer</p>
      </div>
    </div>
  );
}
