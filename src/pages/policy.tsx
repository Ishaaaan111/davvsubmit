import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, FileText, UserCheck, AlertTriangle } from "lucide-react";

const Policy = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Navbar />

            <main className="flex-grow pt-24 pb-12">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground text-lg">
                            Transparency, Security, and Trust.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {/* Introduction */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Shield className="w-6 h-6 text-primary" />
                                    Introduction
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>
                                    Welcome to the Devi Ahilya Vishwavidyalaya (DAVV) Assignment Portal. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines our practices regarding the collection, use, and disclosure of your information in compliance with the <strong>Information Technology Act, 2000 (IT Act)</strong> and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
                                </p>
                                <p>
                                    By using this portal, you agree to the terms of this Privacy Policy.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Information We Collect */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <FileText className="w-6 h-6 text-primary" />
                                    Information We Collect
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>We collect the following types of information to provide our services:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Personal Information:</strong> Name, Semester, Subject details, and Professor selection.</li>
                                    <li><strong>Assignment Data:</strong> Files and documents uploaded for assignment submission (PDFs, DOCs, etc.).</li>
                                    <li><strong>Technical Data:</strong> IP address, browser type, and device information collected automatically for security and analytical purposes.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Purpose of Collection */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <UserCheck className="w-6 h-6 text-primary" />
                                    How We Use Your Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>Your information is used strictly for academic and administrative purposes:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>To facilitate the submission of assignments to the respective professors.</li>
                                    <li>To maintain academic records of submissions.</li>
                                    <li>To communicate successful submission receipts via email (where applicable).</li>
                                    <li>To ensure the security and integrity of the portal.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Data Sharing & Disclosure */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <Lock className="w-6 h-6 text-primary" />
                                    Data Security & Sharing
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>
                                    We implement reasonable security practices and procedures as mandated by the IT Act, 2000, to protect your data from unauthorized access, loss, or misuse.
                                </p>
                                <p>
                                    <strong>Data Sharing:</strong> We do not sell or trade your personal information. Your data is shared only with:
                                </p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Faculty Members:</strong> Your selected professor receives your assignment and details.</li>
                                    <li><strong>Service Providers:</strong> Third-party services (e.g., email notification systems, cloud storage) bound by confidentiality agreements.</li>
                                    <li><strong>Legal Compliance:</strong> If required by law enforcement or judicial authorities.</li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Grievance Officer */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-xl">
                                    <AlertTriangle className="w-6 h-6 text-primary" />
                                    Grievance Redressal
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-muted-foreground space-y-4">
                                <p>
                                    In accordance with the IT Act, 2000 and Rules made thereunder, if you have any grievances or concerns regarding your data or this policy, you may contact our Grievance Officer/Contact Personnel:
                                </p>
                                <div className="bg-secondary/20 p-4 rounded-md">
                                    <p><strong>Email:</strong> ha4sh1290@gmail.com</p>
                                    <p><strong>Phone:</strong> +91 9981016072</p>
                                    <p><strong>Address:</strong> Takshashila Campus, Khandwa Road, Indore, Madhya Pradesh 452001</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Policy;
