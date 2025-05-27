
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Resume = () => {
  const downloadResume = () => {
    // In a real application, this would download an actual PDF file
    console.log('Downloading resume...');
    // window.open('/path-to-your-resume.pdf', '_blank');
  };

  const experience = [
    {
      title: "Frontend Development Intern",
      company: "Tech Startup Inc.",
      period: "Summer 2024",
      description: "Developed responsive web applications using React and TypeScript, collaborated with design team to implement user interfaces."
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 - Present",
      description: "Built websites for small businesses, focusing on responsive design and user experience optimization."
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Your University",
      period: "2022 - Present",
      details: "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems"
    }
  ];

  return (
    <section id="resume" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Resume</h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            My educational background and professional experience in software development.
          </p>
          <Button 
            onClick={downloadResume}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            Download PDF Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-8">Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-blue-700">{exp.title}</h4>
                      <span className="text-sm text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-blue-700 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-lg font-semibold text-blue-700">{edu.degree}</h4>
                      <span className="text-sm text-yellow-600 font-medium bg-yellow-100 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-600 font-medium mb-3">{edu.institution}</p>
                    <p className="text-gray-600 leading-relaxed">{edu.details}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-blue-700 mb-4">Certifications</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-600">JavaScript Algorithms and Data Structures - freeCodeCamp</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-600">React Developer Certification - Meta</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="text-gray-600">Git Version Control - Coursera</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
