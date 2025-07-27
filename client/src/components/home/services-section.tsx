import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cloud, Smartphone, Brain, Shield, Code, ServerCog, Check } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services that ensure your business stays agile and secure.",
    price: "Starting at $999/month",
    features: ["24/7 Monitoring", "Auto Scaling", "Security Compliance"],
    gradient: "from-[hsl(var(--genarch-primary))] to-[hsl(var(--genarch-accent))]"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    price: "Starting at $1,499/month",
    features: ["iOS & Android", "Cross-platform", "App Store Support"],
    gradient: "from-[hsl(var(--genarch-accent))] to-blue-500"
  },
  {
    icon: Brain,
    title: "AI & Analytics",
    description: "Intelligent data analytics and AI solutions that transform your data into actionable insights.",
    price: "Starting at $2,499/month",
    features: ["Machine Learning", "Predictive Analytics", "Custom Dashboards"],
    gradient: "from-blue-500 to-purple-600"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and maintain compliance.",
    price: "Starting at $799/month",
    features: ["Threat Detection", "Vulnerability Assessment", "Incident Response"],
    gradient: "from-green-500 to-blue-500"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, responsive web applications built with the latest technologies and best practices.",
    price: "Starting at $1,299/month",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning"],
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: ServerCog,
    title: "DevOps & Automation",
    description: "Streamlined development workflows and automated deployment pipelines for faster delivery.",
    price: "Starting at $1,199/month",
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Alerts"],
    gradient: "from-orange-500 to-red-500"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6">Our Services & Plans</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.title} className="service-card bg-white p-8 shadow-lg hover:shadow-2xl cursor-pointer">
                <CardContent className="p-0">
                  <div className={`bg-gradient-to-br ${service.gradient} p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6`}>
                    <IconComponent className="text-white w-8 h-8" />
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
