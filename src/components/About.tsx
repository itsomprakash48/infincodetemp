import React from 'react';
import { Target, Users, Globe2 } from 'lucide-react';

const stats = [
  { label: 'Global Clients', value: '500+' },
  { label: 'Team Members', value: '5000+' },
  { label: 'Countries', value: '40+' },
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'Pushing boundaries with cutting-edge solutions',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working together to achieve excellence',
  },
  {
    icon: Globe2,
    title: 'Global Impact',
    description: 'Creating positive change worldwide',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About TechCorp
          </h2>
          <p className="text-gray-600">
            We are a global technology leader committed to driving innovation and
            digital transformation across industries. Our mission is to empower
            businesses with cutting-edge solutions that create lasting value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-blue-50 rounded-xl"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <Icon size={32} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;