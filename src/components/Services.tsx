import React from 'react';
import { Cloud, Database, Bot, Shield, Globe, Cpu } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Scalable cloud solutions for modern business needs',
  },
  {
    icon: Database,
    title: 'Data Analytics',
    description: 'Transform data into actionable insights',
  },
  {
    icon: Bot,
    title: 'AI Solutions',
    description: 'Intelligent automation and machine learning',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Advanced protection for digital assets',
  },
  {
    icon: Globe,
    title: 'Digital Consulting',
    description: 'Strategic guidance for digital transformation',
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connected devices for smarter operations',
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to drive your business forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="mb-4">
                  <Icon
                    size={40}
                    className="text-blue-600 group-hover:scale-110 transition-transform"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;