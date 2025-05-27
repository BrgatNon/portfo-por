
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "HTML/CSS", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Python", "Java", "SQL"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Docker"] },
    { category: "Learning", items: ["Next.js", "GraphQL", "AWS", "MongoDB"] }
  ];

  const interests = [
    "Re-coding existing code",
    "Experementing with AI tools",
    "Listneing to music",
    "Gaming",
    "Reading other people's project",
    "Copying others skills"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
               I'm a Bachelor of Science in Information Technology (BSIT) student with a strong passion for developing practical and impactful IT solutions. 
               I'm currently pursuing my degree while working on real-world projects that address real-life challenges.
              </p>
              <p>
                I believe in writing clean, efficient code and am always eager to learn new technologies. 
                My journey in programming started with curiosity and has evolved into a genuine love for 
                building applications that make people's lives easier.
              </p>
              <p>
                When I'm not coding, you'll find me playing games and doing something goofy.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">Personal Interests</h4>
              <div className="grid grid-cols-2 gap-2">
                {interests.map((interest, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                    <span className="text-gray-600">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-blue-700 mb-3 text-lg">{skillGroup.category}</h4>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                          <span className="text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
