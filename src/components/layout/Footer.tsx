import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-card pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-card text-lg leading-tight">DAVV</span>
                <span className="text-xs text-card/60 leading-tight">Assignment Portal</span>
              </div>
            </div>
            <p className="text-card/70 text-sm leading-relaxed">
              Devi Ahilya Vishwavidyalaya's official assignment submission portal. Simplifying academic submissions for students and professors.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-card/10 flex items-center justify-center hover:bg-primary transition-colors group"
                >
                  <Icon className="w-4 h-4 text-card/60 group-hover:text-primary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-card mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "Submit Assignment", path: "/submit" },
                { name: "Professors", path: "/professors" },
                { name: "About DAVV", path: "/about" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h4 className="font-semibold text-card mb-4">For Students</h4>
            <ul className="space-y-3">
              {[
                "Student Login",
                "View Submissions",
                "Download Guidelines",
                "Academic Calendar",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-card/70 hover:text-primary text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-card mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-card/70 text-sm">
                  Takshashila Campus, Khandwa Road, Indore, Madhya Pradesh 452001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-card/70 text-sm">+91 9981016072</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-card/70 text-sm">ha4sh1290@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-card/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-card/50 text-sm">
            © {new Date().getFullYear()} Devi Ahilya Vishwavidyalaya. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/policy" className="text-card/50 hover:text-card text-sm transition-colors">
              Privacy Policy
            </Link>
            <a href="#" className="text-card/50 hover:text-card text-sm transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-card/50 hover:text-card text-sm transition-colors">
              Help Center
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
