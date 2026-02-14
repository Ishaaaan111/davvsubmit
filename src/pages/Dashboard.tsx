import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    User,
    Clock,
    Calendar,
    FileText,
    History,
    LogOut,
    ArrowRight,
    TrendingUp,
    Award,
    Bell
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const [greeting, setGreeting] = useState("");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const updateGreeting = () => {
            const hours = new Date().getHours();
            if (hours < 12) setGreeting("Good Morning");
            else if (hours < 18) setGreeting("Good Afternoon");
            else setGreeting("Good Evening");
        };

        updateGreeting();
        const timer = setInterval(() => {
            setCurrentTime(new Date());
            updateGreeting();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Mock user data - In a real app, this would come from a context or API
    const user = {
        name: "Ishan Trivedi",
        email: "trivediishan003@gmail.com", // Example based on context
        role: "Student",
        enrollment: "DE-2k21-101"
    };

    const recentActivities = [
        {
            id: 1,
            action: "Assignment Submitted",
            subject: "CS-105: Problem Solving using C",
            date: "2 hours ago",
            status: "Pending Review",
            icon: FileText,
            color: "text-blue-500",
            bg: "bg-blue-100 dark:bg-blue-900/20"
        },
        {
            id: 2,
            action: "Grade Received",
            subject: "CS-101: Mathematics-I",
            date: "Yesterday",
            status: "A+ (95%)",
            icon: Award,
            color: "text-green-500",
            bg: "bg-green-100 dark:bg-green-900/20"
        },
        {
            id: 3,
            action: "New Announcement",
            subject: "Exam Schedule Released",
            date: "2 days ago",
            status: "Info",
            icon: Bell,
            color: "text-yellow-500",
            bg: "bg-yellow-100 dark:bg-yellow-900/20"
        }
    ];

    const handleLogout = () => {
        // Clear any auth tokens here
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-background isolate">
            <Navbar />

            {/* Hero Section with Glassmorphism */}
            <section className="pt-28 pb-12 relative overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl -z-10" />

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Welcome Card */}
                        <div className="lg:col-span-2">
                            <Card className="border-none shadow-xl bg-white/50 dark:bg-black/20 backdrop-blur-md h-full transition-all hover:shadow-2xl">
                                <CardContent className="p-8 flex flex-col justify-center h-full">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-blue-400 dark:to-white">
                                                {greeting}, Ishan 👋
                                            </h1>
                                            <p className="text-muted-foreground mt-2 text-lg">
                                                Ready to achieve your goals today?
                                            </p>
                                        </div>
                                        <div className="hidden sm:block text-right">
                                            <div className="text-3xl font-mono font-bold text-foreground/80">
                                                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                            <div className="text-sm text-muted-foreground">
                                                {currentTime.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mt-auto">
                                        <Link to="/submit">
                                            <Button size="lg" className="shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                                                Submit Assignment <ArrowRight className="ml-2 w-4 h-4" />
                                            </Button>
                                        </Link>
                                        <Link to="/professors">
                                            <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                                                Find Professor
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Profile Summary Card */}
                        <Card className="border-none shadow-lg bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle>Profile Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-[2px]">
                                        <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                                            <User className="w-8 h-8 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">{user.name}</h3>
                                        <p className="text-sm text-muted-foreground">{user.role}</p>
                                        <p className="text-xs text-muted-foreground/80">{user.email}</p>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                                        <span className="text-sm font-medium">Enrollment</span>
                                        <span className="text-sm font-mono">{user.enrollment}</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 rounded-lg bg-secondary/50">
                                        <span className="text-sm font-medium">Semester</span>
                                        <span className="text-sm">4th</span>
                                    </div>
                                    <Button variant="ghost" className="w-full text-destructive hover:text-destructive hover:bg-destructive/10 mt-2" onClick={handleLogout}>
                                        <LogOut className="w-4 h-4 mr-2" /> Logout
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Activity Section */}
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {/* Quick Stats */}
                        <Card className="md:col-span-1 border-none shadow-lg bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-primary" />
                                    Performance
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Attendance</span>
                                            <span className="text-sm font-bold text-primary">85%</span>
                                        </div>
                                        <div className="w-full bg-secondary rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full w-[85%] transition-all duration-1000 ease-out" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between mb-2">
                                            <span className="text-sm font-medium">Assignments</span>
                                            <span className="text-sm font-bold text-primary">12/15</span>
                                        </div>
                                        <div className="w-full bg-secondary rounded-full h-2">
                                            <div className="bg-primary h-2 rounded-full w-[80%] transition-all duration-1000 ease-out delay-100" />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Recent Activity */}
                        <Card className="md:col-span-2 border-none shadow-lg bg-card/80 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <History className="w-5 h-5 text-primary" />
                                    Recent Activity
                                </CardTitle>
                                <CardDescription>Your latest interactions and updates</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {recentActivities.map((activity) => (
                                        <div key={activity.id} className="flex items-center p-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all hover:shadow-md group">
                                            <div className={`p-3 rounded-full ${activity.bg} mr-4 group-hover:scale-110 transition-transform`}>
                                                <activity.icon className={`w-5 h-5 ${activity.color}`} />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-sm md:text-base">{activity.action}</h4>
                                                <p className="text-xs md:text-sm text-muted-foreground">{activity.subject}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="block text-xs font-medium px-2 py-1 rounded-full bg-secondary text-secondary-foreground mb-1">
                                                    {activity.status}
                                                </span>
                                                <span className="text-xs text-muted-foreground">{activity.date}</span>
                                            </div>
                                        </div>
                                    ))}
                                    <Button variant="ghost" className="w-full text-sm text-muted-foreground hover:text-primary mt-2">
                                        View All History <ArrowRight className="w-3 h-3 ml-1" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Dashboard;
