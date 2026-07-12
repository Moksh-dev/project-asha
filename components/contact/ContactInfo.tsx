import Card from "@/components/ui/Card";

export default function ContactInfo() {
  return (
    <div className="space-y-6">

      <Card
        title="Email"
        padding="lg"
      >
        <p className="text-slate-300">
          contact@projectasha.org
        </p>
      </Card>

      <Card
        title="Phone"
        padding="lg"
      >
        <p className="text-slate-300">
          +91 98765 43210
        </p>
      </Card>

      <Card
        title="Address"
        padding="lg"
      >
        <p className="leading-7 text-slate-300">
          Project A.S.H.A.
          <br />
          India
        </p>
      </Card>

      <Card
        title="Working Hours"
        padding="lg"
      >
        <p className="leading-7 text-slate-300">
          Monday – Friday
          <br />
          9:00 AM – 6:00 PM (IST)
        </p>
      </Card>

    </div>
  );
}