import { Mail, Clock, BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProfessorCardProps {
  name: string;
  department: string;
  subjects: string[];
  officeHours: string;
  email: string;
  image: string;
  bio: string;
}

const ProfessorCard = ({
  name,
  department,
  subjects,
  officeHours,
  email,
  image,
  bio,
}: ProfessorCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/30 overflow-hidden">
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-48 bg-accent overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-xl font-bold text-card">{name}</h3>
            <p className="text-card/80 text-sm">{department}</p>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4">
          {/* Bio */}
          <p className="text-muted-foreground text-sm line-clamp-2">{bio}</p>

          {/* Subjects */}
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div className="flex flex-wrap gap-1.5">
              {subjects.map((subject, index) => (
                <Badge key={index} variant="secondary" className="text-xs font-medium">
                  {subject}
                </Badge>
              ))}
            </div>
          </div>

          {/* Office Hours */}
          <div className="flex items-center gap-2 text-sm">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{officeHours}</span>
          </div>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Mail className="w-4 h-4 shrink-0" />
            {email}
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfessorCard;
