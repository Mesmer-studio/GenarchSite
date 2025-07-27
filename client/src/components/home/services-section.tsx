import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Smartphone, Brain, Shield, Code, ServerCog, Check } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "UX Testing Environment",
    description: "Comprehensive testing environments designed to simulate real-world user interactions and behaviors.",
    price: "Starting at $299/month",
    features: ["Real User Simulation", "Behavior Analytics", "Heatmap Analysis"],
    gradient: "from-[hsl(var(--genarch-primary))] to-[hsl(var(--genarch-accent))]"
  },
  {
    icon: Smartphone,
    title: "Mobile App Testing",
    description: "Specialized testing for mobile applications across different devices, OS versions, and user scenarios.",
    price: "Starting at $399/month",
    features: ["Cross-Device Testing", "Performance Monitoring", "User Journey Mapping"],
    gradient: "from-[hsl(var(--genarch-accent))] to-blue-500"
  },
  {
    icon: Shield,
    title: "Pre-Launch Analysis",
    description: "Identify potential issues and optimization opportunities before your app goes live.",
    price: "Starting at $599/month",
    features: ["Usability Assessment", "Performance Analysis", "Accessibility Testing"],
    gradient: "from-green-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Post-Launch Optimization",
    description: "Continuous monitoring and smart upgrade recommendations to enhance user experience.",
    price: "Starting at $499/month",
    features: ["Real-time Monitoring", "A/B Testing", "User Feedback Analysis"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Cloud,
    title: "Scalability Testing",
    description: "Test your application's limits and capabilities under various load conditions.",
    price: "Starting at $799/month",
    features: ["Load Testing", "Stress Testing", "Capacity Planning"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: ServerCog,
    title: "Integration Testing",
    description: "Ensure seamless integration between different components and third-party services.",
    price: "Starting at $449/month",
    features: ["API Testing", "Database Testing", "Third-party Integration"],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6">Our Testing Services & Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive UX testing solutions designed to help startups and solo developers create exceptional user experiences and optimize their applications for success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="service-card bg-white p-8 shadow-lg hover:shadow-2xl cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative mb-6">
                    <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 flex items-center justify-center">
                      <IconComponent className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className={`absolute -bottom-2 -right-2 bg-gradient-to-br ${service.gradient} p-3 rounded-xl shadow-lg`}>
                      <IconComponent className="text-white w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-[hsl(var(--genarch-charcoal))] mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-[hsl(var(--genarch-primary))] font-semibold text-lg mb-4">{service.price}</div>
                  <ul className="text-gray-600 space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="text-green-500 mr-2 w-4 h-4" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[hsl(var(--genarch-primary))] text-white py-3 font-semibold hover:bg-blue-800 transition-colors duration-200">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
