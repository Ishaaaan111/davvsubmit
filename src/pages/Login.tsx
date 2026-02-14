import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Mail, Lock, User, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("student");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back!",
    });
    navigate("/dashboard");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Signup functionality",
      description: "Backend integration required for registration. Connect Lovable Cloud to enable this feature.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-24 pb-16 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Logo */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-4">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Welcome Back</h1>
              <p className="text-muted-foreground">Sign in to your DAVV account</p>
            </div>

            {/* Login/Signup Card */}
            <Card className="border-border shadow-lg">
              <CardHeader className="pb-4">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="student">Student</TabsTrigger>
                    <TabsTrigger value="professor">Professor</TabsTrigger>
                  </TabsList>
                </Tabs>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab}>
                  {/* Student Tab */}
                  <TabsContent value="student">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          Enrollment Number
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter your enrollment number"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          Email
                        </Label>
                        <Input
                          type="email"
                          placeholder="your.email@davv.ac.in"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                          Password
                        </Label>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="bg-background"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <a href="#" className="text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground text-sm">
                        Don't have an account?{" "}
                        <button
                          onClick={() => { }}
                          className="text-primary font-medium hover:underline"
                        >
                          Register here
                        </button>
                      </p>
                    </div>
                  </TabsContent>

                  {/* Professor Tab */}
                  <TabsContent value="professor">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <User className="w-4 h-4 text-muted-foreground" />
                          Employee ID
                        </Label>
                        <Input
                          type="text"
                          placeholder="Enter your employee ID"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          Email
                        </Label>
                        <Input
                          type="email"
                          placeholder="your.email@davv.ac.in"
                          className="bg-background"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="flex items-center gap-2">
                          <Lock className="w-4 h-4 text-muted-foreground" />
                          Password
                        </Label>
                        <Input
                          type="password"
                          placeholder="Enter your password"
                          className="bg-background"
                        />
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" className="rounded border-border" />
                          <span className="text-muted-foreground">Remember me</span>
                        </label>
                        <a href="#" className="text-primary hover:underline">
                          Forgot password?
                        </a>
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Sign In
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </form>
                    <div className="mt-6 text-center">
                      <p className="text-muted-foreground text-sm">
                        Having trouble?{" "}
                        <a href="#" className="text-primary font-medium hover:underline">
                          Contact IT Support
                        </a>
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Back to Home */}
            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
