import Button from "./ui-components/button";
import SectionTitle from "./ui-components/sectionTitle";

function Liner() {
  return <div className="bg-textSecondary h-[1px] my-2 w-4/5" />;
}

function IntroSection(props) {
  return (
    <div className="flex flex-row">
      <h4 className="mr-3 font-bold">{props.heading}</h4>
      <p>{props.value}</p>
    </div>
  );
}

export default function About() {
  return (
    <div className="bg-secondary w-full pb-10 md:pb-32">
      <SectionTitle title="Know Me More" />
      <div className="flex flex-col md:flex-row px-10">
        <div className="w-11/12 mx-auto md:w-3/4 px-3">
          <h2 className="text-3xl mb-5 font-bold">
            I'm <span className="text-primary">Ahmad M</span>, a Web Developer
          </h2>
          <p className="text-textSecondary mb-5 text-lg leading-7 tracking-wide">
            I help you build brand for your business at an affordable price.
            Thousands of clients have procured exceptional results while working
            with our dedicated team. when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </p>
          <p className="text-textSecondary  mb-5  text-lg leading-7 tracking-wide">
            Delivering work within time and budget which meets client’s
            requirements is our moto. Lorem Ipsum has been the industry's
            standard dummy text ever when an unknown printer took a galley.
          </p>
        </div>
        <div className="w-11/12 mx-auto md:w-1/4 py-2 ">
          <IntroSection heading="Name:" value="Ahmad" />
          <Liner />
          <IntroSection heading="Email:" value="ahmad@gmail.com" />
          <Liner />
          <IntroSection heading="City:" value="Karachi" />
          <Liner />
          <div className="my-5">
            <Button label="Download CV" />
          </div>
        </div>
      </div>
    </div>
  );
}
