import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BadgeCheck, Gem, ShieldCheck } from "lucide-react";

const AboutPage = async () => {
  return (
    <section>
      <h1 className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center text-4xl font-bold leading-none tracking-wide sm:text-6xl">
        We love
        <span className="bg-primary py-2 px-4 rounded-lg tracking-widest text-white">
          store
        </span>
      </h1>
      <p className="mt-6 text-lg tracking-wide leading-8 max-w-2xl mx-auto text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero hic
        distinctio ducimus temporibus nobis autem laboriosam repellat, magni
        fugiat minima excepturi neque, tenetur possimus nihil atque! Culpa nulla
        labore nam?
      </p>

      <Separator className="my-20" />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <Gem className="w-10 h-10 text-purple-600" />
              <div>
                <h3 className=" font-semibold text-3xl mb-7">
                  Premium Quality
                </h3>
                <p className=" text-lg text-muted-foreground">
                  Every product is carefully inspected to meet high quality
                  standards.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <ShieldCheck className="w-10 h-10 text-green-600" />
              <div>
                <h3 className=" font-semibold text-3xl mb-7">
                  Secure Shopping
                </h3>
                <p className=" text-lg text-muted-foreground">
                  All transactions are protected with SSL to ensure your data is
                  safe.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <BadgeCheck className="w-10 h-10 text-blue-600" />
              <div>
                <h3 className="text-3xl font-semibold mb-7">
                  Customer Satisfaction
                </h3>
                <p className="text-lg text-muted-foreground">
                  Our support team is always here to assist you—24/7.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-20" />

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold mb-7">Why Choose Us?</h2>
        <p className="text-muted-foreground  text-lg">
          We offer a seamless experience with competitive prices, fast shipping,
          and top-notch quality. Our customer-first approach and modern
          interface are designed to make your shopping smooth and enjoyable.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
