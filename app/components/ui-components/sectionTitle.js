export default function SectionTitle(props) {
  return (
    <div className="py-20 text-center">
      <h3 className="text-4xl font-bold">{props.title}</h3>
      <div className="w-24 h-1 my-1 bg-primary mx-auto" />
    </div>
  );
}
