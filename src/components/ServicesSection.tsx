import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Briefcase, Shield, Plane, FileCheck, UserCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Immigration",
    description: "Digital fingerprints for immigration applications and permanent residency.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: UserCheck,
    title: "Citizenship",
    description: "Fast and reliable fingerprinting for Canadian citizenship applications.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Plane,
    title: "Visa & Border Crossings",
    description: "Quick processing for visa applications and border crossing requirements.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Briefcase,
    title: "Employment",
    description: "Background checks and fingerprinting for employment verification.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Shield,
    title: "Security Clearance",
    description: "Government security clearance fingerprinting with RCMP certification.",
    color: "from-cyan-500 to-teal-500",
  },
  {
    icon: FileCheck,
    title: "Police Record Check",
    description: "Same-day police record checks and criminal background verification.",
    color: "from-teal-500 to-cyan-500",
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Our <span className="text-gradient-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fingerprinting and background check services for all your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group glass-card border-2 hover:border-primary/50 transition-all duration-500 h-full hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:-translate-y-2">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};