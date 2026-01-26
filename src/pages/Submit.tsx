import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Upload, FileText, Calendar, User, BookOpen, AlertCircle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const professors = [
  "Dr. Shaligram Prajapat",
  "Ms. Akanksha Jain",
  "Ms. Archita Jain",
  "Dr. Shruti Verma",
  "Mr. Geetesh Kwatra",
  "Dr. Yasmin Shaikh",
  "Ms. Ragini Modi",
  "Ms. Deepti Joshi",
  "Dr. Suresh Batni",
  "Mr. Anshul Satle",
];

const subjects = [
  "CS-101: Mathematics-I (Calculus & Linear Algebra)",
  "CS-102: Physics-I (Semi-conductor Physics)",
  "CS-103: Communication Skills",
  "CS-104: Digital Electronics",
  "CS-105: Problem Solving using C",
  "CS-106: Digital Electronics Lab",
  "CS-107: C Programming Lab",
  "CS-201: Mathematics-II (Differential Calculus)",
  "CS-202: Chemistry and Environmental Sciences",
  "CS-203: Engineering Drawing",
  "CS-204: Digital Computer Organization",
  "CS-205: Object Oriented Programming using C++",
  "CS-206: Engineering Drawing Lab",
  "CS-207: C++ Programming Lab",
];

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const Submit = () => {
  const { toast } = useToast();
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isTestingWebhook, setIsTestingWebhook] = useState(false);
  const [formData, setFormData] = useState({
    subject: "",
    professor: "",
    semester: "",
    deadline: "",
  });

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const testWebhook = async () => {
    setIsTestingWebhook(true);
    const WEBHOOK_URL = 'https://ishantrivedi.app.n8n.cloud/webhook/assignment';
    
    try {
      // Send a simple test payload
      const testPayload = {
        test: true,
        message: "Webhook connection test",
        timestamp: new Date().toISOString(),
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout for test
      
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testPayload),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);

      if (response.ok) {
        toast({
          title: "Webhook Test Successful! ✅",
          description: `Webhook is accessible and responding correctly (Status: ${response.status}).`,
        });
      } else {
        toast({
          title: "Webhook Test Warning",
          description: `Webhook responded with status ${response.status}. Please check the webhook configuration.`,
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error('Webhook test error:', error);
      let errorMessage = "Unknown error";
      
      if (error.name === 'AbortError') {
        errorMessage = 'Request timed out. The webhook may be slow or unreachable.';
      } else if (error.message?.includes('Failed to fetch') || error.message?.includes('NetworkError')) {
        errorMessage = 'Network error: Unable to reach the webhook. Please check your internet connection and the webhook URL.';
      } else if (error.message?.includes('CORS')) {
        errorMessage = 'CORS error: The webhook server is not allowing requests from this origin.';
      } else {
        errorMessage = `Connection failed: ${error.message || 'Unknown error'}`;
      }
      
      toast({
        title: "Webhook Test Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsTestingWebhook(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "No file selected",
        description: "Please upload your assignment file before submitting.",
        variant: "destructive",
      });
      return;
    }

    if (!formData.subject || !formData.professor || !formData.semester || !formData.deadline) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Validate file size (25MB limit)
    const maxSize = 25 * 1024 * 1024; // 25MB in bytes
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "File size exceeds 25MB limit. Please upload a smaller file.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert file to base64
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const result = reader.result as string;
          // Remove data URL prefix (e.g., "data:application/pdf;base64,")
          const base64 = result.split(',')[1];
          resolve(base64);
        };
        reader.onerror = () => reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
      });

      // Prepare webhook payload
      const payload = {
        subject: formData.subject,
        professor: formData.professor,
        semester: formData.semester,
        deadline: formData.deadline,
        file: {
          name: file.name,
          size: file.size,
          type: file.type,
          content: fileBase64,
        },
        submittedAt: new Date().toISOString(),
      };

      // Send to webhook with timeout
      const WEBHOOK_URL = 'https://ishantrivedi.app.n8n.cloud/webhook/assignment';
      
      // Create AbortController for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 60000); // 60 second timeout
      
      let response;
      try {
        response = await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (fetchError: any) {
        clearTimeout(timeoutId);
        
        // Handle specific error types
        if (fetchError.name === 'AbortError') {
          throw new Error('Request timed out. Please check your internet connection and try again.');
        } else if (fetchError.message?.includes('Failed to fetch') || fetchError.message?.includes('NetworkError')) {
          throw new Error('Network error: Unable to reach the server. Please check your internet connection and ensure the webhook URL is correct.');
        } else if (fetchError.message?.includes('CORS')) {
          throw new Error('CORS error: The server is not allowing requests from this origin. Please contact the administrator.');
        } else {
          throw new Error(`Connection failed: ${fetchError.message || 'Unknown error'}. Please try again.`);
        }
      }

      if (!response.ok) {
        let errorText = 'Unknown error';
        try {
          errorText = await response.text();
        } catch {
          // If we can't read the error text, use status
        }
        throw new Error(`Server error (${response.status}): ${response.statusText}. ${errorText}`);
      }

      // Try to parse response if available
      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        // Response might not be JSON, that's okay
      }

      // Success
      toast({
        title: "Assignment Submitted Successfully! 🎉",
        description: `Your ${formData.subject} assignment has been submitted to ${formData.professor}.`,
      });

      // Reset form
      setFile(null);
      setFormData({ subject: "", professor: "", semester: "", deadline: "" });
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error 
        ? error.message 
        : "An error occurred while submitting your assignment. Please try again.";
      
      toast({
        title: "Submission Failed",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Submission</span>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Submit Your Assignment
            </h1>
            <p className="text-muted-foreground text-lg">
              Upload your assignment, select the details, and submit before the deadline.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-border shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Assignment Details
                </CardTitle>
                <CardDescription>
                  Fill in the details below and upload your assignment file
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Upload File *</Label>
                    <div
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
                        dragActive
                          ? "border-primary bg-primary/5"
                          : file
                          ? "border-primary/50 bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.zip"
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {file ? (
                        <div className="flex flex-col items-center gap-2">
                          <CheckCircle className="w-10 h-10 text-primary" />
                          <p className="font-medium text-foreground">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              setFile(null);
                            }}
                          >
                            Remove File
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center gap-2">
                          <Upload className="w-10 h-10 text-muted-foreground" />
                          <p className="font-medium text-foreground">
                            Drag & drop your file here
                          </p>
                          <p className="text-sm text-muted-foreground">
                            or click to browse (PDF, DOC, ZIP)
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-muted-foreground" />
                      Subject *
                    </Label>
                    <Select
                      value={formData.subject}
                      onValueChange={(value) => setFormData({ ...formData, subject: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select subject" />
                      </SelectTrigger>
                      <SelectContent>
                        {subjects.map((subject) => (
                          <SelectItem key={subject} value={subject}>
                            {subject}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Professor */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <User className="w-4 h-4 text-muted-foreground" />
                      Professor *
                    </Label>
                    <Select
                      value={formData.professor}
                      onValueChange={(value) => setFormData({ ...formData, professor: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select professor" />
                      </SelectTrigger>
                      <SelectContent>
                        {professors.map((professor) => (
                          <SelectItem key={professor} value={professor}>
                            {professor}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Semester */}
                  <div className="space-y-2">
                    <Label>Semester *</Label>
                    <Select
                      value={formData.semester}
                      onValueChange={(value) => setFormData({ ...formData, semester: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {semesters.map((semester) => (
                          <SelectItem key={semester} value={semester}>
                            {semester} Semester
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Deadline */}
                  <div className="space-y-2">
                    <Label className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      Assignment Deadline *
                    </Label>
                    <Input
                      type="date"
                      value={formData.deadline}
                      onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                      className="bg-card"
                    />
                  </div>

                  {/* Notice */}
                  <div className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                    <AlertCircle className="w-5 h-5 text-accent-foreground shrink-0 mt-0.5" />
                    <div className="text-sm text-accent-foreground">
                      <p className="font-medium mb-1">Please Note:</p>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Make sure your file is in the correct format (PDF, DOC, ZIP)</li>
                        <li>Maximum file size is 25MB</li>
                        <li>You will receive a confirmation email after submission</li>
                        <li>Late submissions may not be accepted</li>
                      </ul>
                    </div>
                  </div>

                  {/* Test Webhook Button */}
                  <Button 
                    type="button" 
                    variant="outline" 
                    size="lg" 
                    className="w-full" 
                    disabled={isTestingWebhook || isSubmitting}
                    onClick={testWebhook}
                  >
                    {isTestingWebhook ? "Testing Webhook..." : "Test Webhook Connection"}
                  </Button>

                  {/* Submit Button */}
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting || isTestingWebhook}>
                    {isSubmitting ? "Submitting..." : "Submit Assignment"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Submit;
