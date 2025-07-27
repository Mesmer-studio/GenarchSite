import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertComplaintSchema, type InsertComplaint } from "@shared/schema";
import { Info, Send, RotateCcw, Upload } from "lucide-react";

export default function Complaints() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<InsertComplaint>({
    resolver: zodResolver(insertComplaintSchema),
    defaultValues: {
      name: "",
      email: "",
      category: "general" as const,
      priority: "medium" as const,
      description: "",
    },
  });

  const submitComplaint = useMutation({
    mutationFn: async (data: InsertComplaint) => {
      const response = await apiRequest("POST", "/api/complaints", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Complaint Submitted Successfully",
        description: `Thank you for your submission. We will get back to you within 24-48 hours. Reference ID: ${data.id}`,
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/complaints"] });
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "There was an error submitting your complaint. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = async (data: InsertComplaint) => {
    setIsSubmitting(true);
    try {
      await submitComplaint.mutateAsync(data);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    form.reset();
    toast({
      title: "Form Reset",
      description: "All form fields have been cleared.",
    });
  };

  const categories = [
    { value: "technical", label: "Technical Issue" },
    { value: "billing", label: "Billing & Payment" },
    { value: "service", label: "Service Quality" },
    { value: "account", label: "Account Management" },
    { value: "feature", label: "Feature Request" },
    { value: "general", label: "General Inquiry" },
    { value: "other", label: "Other" },
  ];

  const priorities = [
    { value: "low", label: "Low - General inquiry" },
    { value: "medium", label: "Medium - Standard issue" },
    { value: "high", label: "High - Urgent issue" },
    { value: "critical", label: "Critical - Service disruption" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6">Testing Support</h1>
          <p className="text-xl text-gray-600">
            Need help with our UX testing services? Report issues with your testing environment or get support for your testing projects. We'll get back to you as soon as possible.
          </p>
        </div>

        <Card className="shadow-xl">
          <CardContent className="p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-[hsl(var(--genarch-charcoal))]">Full Name *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter your full name" 
                            {...field}
                            className="focus:ring-2 focus:ring-[hsl(var(--genarch-primary))] focus:border-transparent transition-all duration-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-semibold text-[hsl(var(--genarch-charcoal))]">Email Address *</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter your email address" 
                            {...field}
                            className="focus:ring-2 focus:ring-[hsl(var(--genarch-primary))] focus:border-transparent transition-all duration-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(var(--genarch-charcoal))]">Issue Category *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-[hsl(var(--genarch-primary))] focus:border-transparent transition-all duration-200">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.value} value={category.value}>
                              {category.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(var(--genarch-charcoal))]">Priority Level</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="focus:ring-2 focus:ring-[hsl(var(--genarch-primary))] focus:border-transparent transition-all duration-200">
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {priorities.map((priority) => (
                            <SelectItem key={priority.value} value={priority.value}>
                              {priority.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-semibold text-[hsl(var(--genarch-charcoal))]">Issue Description *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6}
                          placeholder="Please provide a detailed description of your issue, including any error messages, steps to reproduce, and how it's affecting your work..."
                          className="resize-none focus:ring-2 focus:ring-[hsl(var(--genarch-primary))] focus:border-transparent transition-all duration-200"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                      <p className="text-gray-500 text-sm">Minimum 20 characters required</p>
                    </FormItem>
                  )}
                />

                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--genarch-charcoal))] mb-2">Attachments (Optional)</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[hsl(var(--genarch-primary))] transition-colors duration-200">
                    <Upload className="text-gray-400 w-8 h-8 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Drag and drop files here, or click to select</p>
                    <Button type="button" variant="ghost" className="text-[hsl(var(--genarch-primary))] hover:text-blue-800 font-medium">
                      Choose Files
                    </Button>
                    <p className="text-gray-500 text-xs mt-2">Supported formats: JPG, PNG, PDF, DOC, TXT (Max 10MB per file)</p>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <Info className="text-[hsl(var(--genarch-primary))] w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[hsl(var(--genarch-charcoal))] mb-1">Response Time</h4>
                      <p className="text-gray-600 text-sm">
                        We typically respond within 4-6 hours for high priority issues and 24-48 hours for standard inquiries. 
                        Critical issues are addressed immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    type="submit" 
                    className="flex-1 bg-[hsl(var(--genarch-primary))] text-white px-8 py-4 text-lg font-semibold hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    {isSubmitting ? "Submitting..." : "Submit Issue"}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={resetForm}
                    className="flex-1 sm:flex-none border-2 border-gray-300 text-[hsl(var(--genarch-charcoal))] px-8 py-4 text-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                  >
                    <RotateCcw className="mr-2 w-5 h-5" />
                    Reset Form
                  </Button>
                </div>

                <div className="text-center pt-4">
                  <p className="text-gray-600 text-sm">
                    Need immediate assistance? Call us at{" "}
                    <a href="tel:+1-800-GENARCH" className="text-[hsl(var(--genarch-primary))] hover:underline font-semibold">
                      +1-800-GENARCH
                    </a>{" "}
                    or email{" "}
                    <a href="mailto:support@genarch.com" className="text-[hsl(var(--genarch-primary))] hover:underline font-semibold">
                      support@genarch.com
                    </a>
                  </p>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
