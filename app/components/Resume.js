import SectionTitle from "./ui-components/sectionTitle";

function ResumeInfo(props) {
  return (
    <div className="bg-black w-11/12 py-10 px-4 rounded-lg my-10">
      <div className="bg-primary w-fit mb-3 px-2 py-0.5 rounded">
        {props.duration}
      </div>
      <div className="text-2xl font-600 mb-3">{props.title}</div>
      <div className="text-lg text-primary font-600 mb-3">
        {props.organization}
      </div>
      <div className="text-textSecondary text-lg">{props.description}</div>
    </div>
  );
}

const EducationInfo = [
  {
    duration: "2000-2004",
    title: "Computer System",
    organization: "Dawood University",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    duration: "1996-2000",
    title: "Intermediate",
    organization: "Dawood College",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

const EmploymentInfo = [
  {
    duration: "2008-Current",
    title: "Computer Engineer",
    organization: "XYZ company",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
  {
    duration: "2004-2008",
    title: "Junior Computer Engineer",
    organization: "XYZ company",
    description:
      "Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
  },
];

export default function Resume() {
  return (
    <div className="w-full pb-10 md:pb-24 bg-secondary">
      <SectionTitle title="Resume" />
      <div className="flex flex-col md:flex-row w-11/12 mx-auto">
        <div className="w-11/12 mx-auto md:w-1/2">
          <h2 className="text-2xl font-bold my-6">My Education</h2>
          {EducationInfo.map((info) => {
            return (
              <ResumeInfo
                duration={info.duration}
                title={info.title}
                organization={info.organization}
                description={info.description}
              />
            );
          })}
        </div>
        <div className="w-11/12 mx-auto md:w-1/2">
          <h2 className="text-2xl font-bold my-6">My Experience</h2>
          {EmploymentInfo.map((info) => {
            return (
              <ResumeInfo
                duration={info.duration}
                title={info.title}
                organization={info.organization}
                description={info.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
