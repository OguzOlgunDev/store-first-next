import { Separator } from "../ui/separator";

function SectionTitle({ text }: { text: string }) {
  return (
    <div>
      <h2 className="font-medium text-3xl capitalize mb-8 tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
}

export default SectionTitle;
