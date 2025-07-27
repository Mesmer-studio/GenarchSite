import { Lightbulb, Users } from "lucide-react";

export default function VisionSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[hsl(var(--genarch-charcoal))] mb-6">Our Vision</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To be the leading technology partner that transforms businesses through innovative solutions and strategic digital transformation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-[hsl(var(--genarch-primary))] p-3 rounded-lg mr-4">
                  <Lightbulb className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[hsl(var(--genarch-charcoal))]">Innovation First</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We believe in pushing boundaries and creating solutions that don't just meet today's needs, but anticipate tomorrow's challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="bg-[hsl(var(--genarch-accent))] p-3 rounded-lg mr-4">
                  <Users className="text-white w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-[hsl(var(--genarch-charcoal))]">Client-Centric</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Every solution we develop is tailored to our clients' unique needs, ensuring maximum value and sustainable growth.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(var(--genarch-primary))]/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
