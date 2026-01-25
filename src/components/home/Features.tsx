import { FileUp, Clock, CheckCircle, Users, BookOpen, Shield } from "lucide-react";

const features = [
  {
    icon: FileUp,
    title: "Easy Submission",
    description: "Drag and drop your assignments in PDF, DOC, or ZIP format. Simple and intuitive upload process.",
  },
  {
    icon: Clock,
    title: "Deadline Tracking",
    description: "Never miss a deadline with our automated reminders and submission timestamps.",
  },
  {
    icon: CheckCircle,
    title: "Status Updates",
    description: "Track your submission status in real-time. Know when your work is approved or needs revision.",
  },
  {
    icon: Users,
    title: "Professor Connect",
    description: "Find your professors easily and see their subjects, office hours, and contact information.",
  },
  {
    icon: BookOpen,
    title: "Organized by Subject",
    description: "All submissions organized by semester, subject, and professor for easy management.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Your submissions are encrypted and stored securely. Access your files anytime, anywhere.",
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Everything You Need for Academic Success
          </h2>
          <p className="text-muted-foreground text-lg">
            Our platform is designed to make assignment submission seamless and stress-free for DAVV students.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                <feature.icon className="w-7 h-7 text-accent-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
