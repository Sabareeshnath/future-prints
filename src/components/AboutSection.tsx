import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Zap, Lock, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "RCMP Accredited",
    description: "Officially accredited to submit fingerprints for civilian purposes",
  },
  {
    icon: Zap,
    title: "Digital Submission",
    description: "Electronic submission to RTID servers for faster processing",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your biometric data is handled with the highest security standards",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Police record checks and fingerprinting completed the same day",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold">
              About <span className="text-gradient-holo">Fingerprints Plus</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Welcome to Fingerprints Plus, accredited by the RCMP to submit fingerprints 
                for civilian purposes such as Immigration, Citizenship, Visa/Border Crossings, 
                Employment, Government Security Clearance and similar other needs of individuals.
              </p>
              <p>
                We submit digital fingerprints to RTID servers electronically. RCMP verifies 
                the submitted fingerprints and other biometric information with its National 
                Repository of Criminal Records and issues the certification.
              </p>
              <p>
                We also offer special packages that include affordable courier services for 
                sending your fingerprints to FBI for Summary Checks. Apart from fingerprinting, 
                we also process Police Record Checks with same-day results.
              </p>
            </div>
          </motion.div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="glass-card border-2 hover:border-primary/50 transition-all duration-300 h-full hover:glow-effect">
                  <CardContent className="p-6 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};