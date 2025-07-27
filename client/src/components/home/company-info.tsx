import { Award, Globe, Handshake, TrendingUp } from "lucide-react";

export default function CompanyInfo() {
  const stats = [
    { value: "500+", label: "Projects Completed", bgColor: "bg-blue-50" },
    { value: "200+", label: "Happy Clients", bgColor: "bg-gray-50" },
    { value: "8+", label: "Years Experience", bgColor: "bg-green-50" },
    { value: "50+", label: "Team Members", bgColor: "bg-purple-50" }
  ];

  const achievements = [
    { icon: Award, text: "ISO 27001 certified for information security" },
    { icon: Globe, text: "Serving clients in 25+ countries worldwide" },
    { icon: Handshake, text: "99.9% client satisfaction rate" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6">About Genarch Technologies</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Founded in 2015, Genarch Technologies has been at the forefront of digital innovation, helping businesses across industries leverage technology for sustainable growth and competitive advantage.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className={`text-center p-6 ${stat.bgColor} rounded-xl`}>
                  <div className="text-3xl font-bold text-[hsl(var(--genarch-primary))] mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {achievements.map((achievement) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={achievement.text} className="flex items-center">
                    <IconComponent className="text-[hsl(var(--genarch-primary))] w-5 h-5 mr-4" />
                    <span className="text-gray-600">{achievement.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional team meeting" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="flex items-center">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <TrendingUp className="text-green-600 w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-[hsl(var(--genarch-charcoal))]">98%</div>
                  <div className="text-gray-600 text-sm">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
