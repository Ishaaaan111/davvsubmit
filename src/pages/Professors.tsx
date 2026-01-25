import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProfessorCard from "@/components/professors/ProfessorCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import drShaligramImg from "@/assets/dr-shaligram-prajapat.png";

const professors = [
  {
    name: "Dr. Shaligram Prajapat",
    department: "IIPS - Computer Science",
    subjects: ["Digital Computer Organization", "Algorithms", "Data Mining", "Cryptography"],
    officeHours: "Mon-Fri: 10:00 AM - 12:00 PM",
    email: "shaligram.prajapat@davv.ac.in",
    image: drShaligramImg,
    bio: "Associate Professor at IIPS, DAVV with 20+ years of experience. Ph.D. from MANIT Bhopal. Research areas include Information Security, Machine Learning, AI, and Cryptic Mining. Fellow of IETE, Senior Member of IEEE, and recipient of Young Investigator Award 2012.",
  },
  {
    name: "Ms. Akanksha Jain",
    department: "Computer Science",
    subjects: ["Mathematics-I (Calculus & Linear Algebra)", "Mathematics-II (Differential Calculus)"],
    officeHours: "Mon-Wed: 10:00 AM - 12:00 PM",
    email: "akanksha.jain@davv.ac.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Mathematics faculty specializing in Calculus, Linear Algebra, and Differential Calculus for engineering students.",
  },
  {
    name: "Ms. Archita Jain",
    department: "Physics",
    subjects: ["Physics-I (Semi-conductor Physics)"],
    officeHours: "Tue-Thu: 2:00 PM - 4:00 PM",
    email: "archita.jain@davv.ac.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Physics lecturer with expertise in semiconductor physics and electronics fundamentals.",
  },
  {
    name: "Dr. Shruti Verma",
    department: "Communication Studies",
    subjects: ["Communication Skills"],
    officeHours: "Mon-Fri: 11:00 AM - 1:00 PM",
    email: "shruti.verma@davv.ac.in",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
    bio: "Expert in communication and soft skills development for technical students.",
  },
  {
    name: "Mr. Geetesh Kwatra",
    department: "Electronics",
    subjects: ["Digital Electronics", "Digital Electronics Lab"],
    officeHours: "Mon-Wed: 3:00 PM - 5:00 PM",
    email: "geetesh.kwatra@davv.ac.in",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Digital electronics specialist handling both theory and lab sessions for CS students.",
  },
  {
    name: "Dr. Yasmin Shaikh",
    department: "Computer Science",
    subjects: ["Problem Solving using C", "C Programming Lab"],
    officeHours: "Tue-Thu: 10:00 AM - 12:00 PM",
    email: "yasmin.shaikh@davv.ac.in",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face",
    bio: "Programming fundamentals expert teaching C language and problem-solving techniques.",
  },
  {
    name: "Ms. Ragini Modi",
    department: "Computer Science",
    subjects: ["Object Oriented Programming using C++", "C Programming Lab"],
    officeHours: "Wed-Fri: 9:00 AM - 11:00 AM",
    email: "ragini.modi@davv.ac.in",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    bio: "OOP and C++ programming faculty with focus on practical coding skills.",
  },
  {
    name: "Ms. Deepti Joshi",
    department: "Chemistry",
    subjects: ["Chemistry and Environmental Sciences"],
    officeHours: "Mon-Wed: 10:00 AM - 12:00 PM",
    email: "deepti.joshi@davv.ac.in",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=face",
    bio: "Chemistry faculty specializing in environmental sciences and sustainable practices.",
  },
  {
    name: "Dr. Suresh Batni",
    department: "Engineering",
    subjects: ["Engineering Drawing", "Engineering Drawing Lab"],
    officeHours: "Tue-Thu: 2:00 PM - 4:00 PM",
    email: "suresh.batni@davv.ac.in",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Engineering drawing expert with years of experience in technical drafting and CAD.",
  },
  {
    name: "Mr. Anshul Satle",
    department: "Computer Science",
    subjects: ["C++ Programming Lab"],
    officeHours: "Mon-Fri: 11:00 AM - 1:00 PM",
    email: "anshul.satle@davv.ac.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Lab instructor specializing in C++ programming and hands-on coding sessions.",
  },
];

const Professors = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProfessors = professors.filter(
    (prof) =>
      prof.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prof.subjects.some((sub) => sub.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Faculty</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Distinguished Professors
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Meet the brilliant minds guiding your academic journey at DAVV. Find your professor and connect with them.
            </p>

            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name, department, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Professors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredProfessors.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProfessors.map((professor, index) => (
                <ProfessorCard key={index} {...professor} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No professors found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Professors;
