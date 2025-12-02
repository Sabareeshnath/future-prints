import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RefreshCw, DollarSign, MapPin, Calendar } from "lucide-react";
import patternBg from "@/assets/pattern-bg.jpg";

const benefits = [
  {
    icon: RefreshCw,
    title: "Free Repeat Service",
    description: "One year free repeat fingerprinting after your first paid service. Government fees still apply.",
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    icon: Calendar,
    title: "Flexible Hours",
    description: "Open late into evening and weekends so you don't have to take time off work.",
    gradient: "from-blue-500/10 to-purple-500/10",
  },
  {
    icon: MapPin,
    title: "Free Parking",
    description: "All our branches offer free parking for your convenience.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Some of the lowest prices in the country with full service fee refund guarantee.",
    gradient: "from-pink-500/10 to-cyan-500/10",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: `url(${patternBg})`, backgroundSize: 'cover' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-gradient-holo">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the Fingerprints Plus difference with our exclusive benefits
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={`glass-card p-6 h-full hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br ${benefit.gradient} hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]`}>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional info cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <Card className="glass-card p-8 border-2 border-primary/30">
            <h3 className="text-2xl font-display font-bold mb-3 text-gradient-primary">
              Record Suspension & USA Entry Waiver
            </h3>
            <p className="text-muted-foreground">
              Full service fee refund guarantee. We handle all the work including court 
              documents and local police reports. Check our prices - among the lowest in the country.
            </p>
          </Card>
          
          <Card className="glass-card p-8 border-2 border-secondary/30">
            <h3 className="text-2xl font-display font-bold mb-3 text-gradient-holo">
              FBI Fingerprint Services
            </h3>
            <p className="text-muted-foreground">
              Special packages including the most affordable courier services for sending 
              your fingerprints to FBI for Summary Checks.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};