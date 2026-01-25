import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileUp, Users, ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-campus.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="DAVV Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-card">Welcome to DAVV Assignment Portal</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
            One Platform for All Your{" "}
            <span className="text-primary">DAVV Assignments</span> & Projects
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-card/80 mb-8 leading-relaxed max-w-xl">
            Submit your assignments with ease, track your submissions, and connect with professors—all in one place. Designed for students of Devi Ahilya Vishwavidyalaya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/submit">
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <FileUp className="w-5 h-5" />
                Submit Assignment
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/professors">
              <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                <Users className="w-5 h-5" />
                View Professors
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-card/20">
            {[
              { value: "50+", label: "Professors" },
              { value: "5000+", label: "Students" },
              { value: "10K+", label: "Submissions" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-card/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-card/60 text-xs">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-card/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-card/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
