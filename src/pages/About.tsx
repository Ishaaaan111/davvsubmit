import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Target, Eye, Award, Users, BookOpen, Building } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Students" },
  { icon: BookOpen, value: "200+", label: "Courses" },
  { icon: Award, value: "50+", label: "Years of Excellence" },
  { icon: Building, value: "30+", label: "Departments" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-primary relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/10 rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-foreground/20 rounded-2xl mb-6">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              About DAVV
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Devi Ahilya Vishwavidyalaya - Nurturing Excellence Since 1964
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent rounded-xl mb-3">
                  <stat.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Devi Ahilya Vishwavidyalaya (DAVV), formerly known as University of Indore, is a state university located in Indore, Madhya Pradesh, India. Named after the 18th-century Holkar Queen Ahilya Bai Holkar, the university has been a beacon of academic excellence for over five decades.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Established in 1964, DAVV has grown to become one of the premier institutions of higher education in Central India, offering a wide range of undergraduate, postgraduate, doctoral, and professional programs across various disciplines.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Vision */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To emerge as a globally recognized center of excellence in higher education, fostering innovation, research, and holistic development of students while preserving our rich cultural heritage and values.
                </p>
              </div>

              {/* Mission */}
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Target className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To provide quality education that empowers students with knowledge, skills, and values necessary to excel in their chosen fields and contribute meaningfully to society and nation-building.
                </p>
              </div>
            </div>

            {/* Academic Excellence */}
            <div className="bg-secondary/30 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                Commitment to Academic Excellence
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "NAAC Accreditation",
                    description: "Accredited with 'A' Grade by the National Assessment and Accreditation Council.",
                  },
                  {
                    title: "Research Focus",
                    description: "Active research programs with national and international collaborations.",
                  },
                  {
                    title: "Industry Connect",
                    description: "Strong industry partnerships ensuring placement and internship opportunities.",
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* About the Portal */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                About the Assignment Portal
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The DAVV Assignment Portal is an initiative to digitize and streamline the academic submission process. This platform enables students to submit their assignments and projects online, while professors can efficiently review and provide feedback.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Paperless, eco-friendly submission process
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  24/7 access from anywhere
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Automatic deadline tracking and reminders
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  Secure and organized record-keeping
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
