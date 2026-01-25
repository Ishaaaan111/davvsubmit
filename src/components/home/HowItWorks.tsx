import { LogIn, FileUp, Send, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: LogIn,
    step: "01",
    title: "Login with Your Details",
    description: "Sign in using your enrollment number and DAVV email ID to access the portal.",
  },
  {
    icon: FileUp,
    step: "02",
    title: "Upload Your Assignment",
    description: "Select your subject, professor, and semester. Drag and drop your file to upload.",
  },
  {
    icon: Send,
    step: "03",
    title: "Submit Before Deadline",
    description: "Review your submission details and click submit. You'll receive a confirmation.",
  },
  {
    icon: CheckCircle,
    step: "04",
    title: "Track Your Status",
    description: "Monitor your submission status. Get notified when your work is reviewed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Submit in 4 Simple Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Our streamlined process makes submitting assignments quick and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-10 h-10 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground text-sm font-bold rounded-full flex items-center justify-center shadow-md">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
