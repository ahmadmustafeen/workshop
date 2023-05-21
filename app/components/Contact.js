import SectionTitle from "./ui-components/sectionTitle";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function ContactInfo(props) {
  return (
    <a
      className="flex flex-row items-center my-2"
      href={props.href}
      target="_blank"
    >
      {props.children}
      <p className="pl-2">{props.info}</p>
    </a>
  );
}

export default function Contact() {
  return (
    <div className="w-full py-10 md:py-28 bg-[#343a40]">
      <SectionTitle title="Contact" />
      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="w-11/12 mx-auto md:w-1/3">
          <h3 className=" uppercase font-bold text-xl py-3">Address</h3>
          <p className=" md:mx-0 w-2/3 md:w-1/2 text-base pb-6 leading-7">
            4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
          </p>
          <ContactInfo info="(060) 444 434 444" href="tel: (060) 444 434 444">
            <BsFillTelephoneFill className="text-primary text-base" />
          </ContactInfo>
          <ContactInfo
            info="ahmad@geeksofkolachi.com"
            href="mailto: ahmad@geeksofkolachi.com"
          >
            <MdEmail className="text-primary text-base" />
          </ContactInfo>
          <ContactInfo
            info="linkedin.com/in/ahmadmustafeen"
            href="https://www.linkedin.com/in/ahmadmustafeen"
          >
            <AiFillLinkedin className="text-primary text-base" />
          </ContactInfo>
          <ContactInfo
            info="github.com/ahmadmustafeen"
            href="https://www.github.com/ahmadmustafeen"
          >
            <AiFillGithub className="text-primary text-base" />
          </ContactInfo>
        </div>
        <div className="w-11/12 mx-auto md:w-2/3 ">
          <h3 className="uppercase text-lg py-3 font-bold">Send us a note</h3>
          <div className="flex flex-col my-2 md:my-6 md:flex-row w-full items-center md:justify-between ">
            <input
              className="w-full md:w-[47%] my-2  h-12 rounded-lg bg-secondary outline-0 px-2 border-0"
              placeholder="Name"
            />
            <input
              className="w-full md:w-[47%] my-2 h-12 rounded-lg bg-secondary outline-0 px-2 border-0"
              placeholder="Email"
            />
          </div>
          <div className="w-full mx-auto">
            <textarea
              className="resize-none p-2 bg-secondary rounded-lg w-full h-40"
              placeholder="Message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
