import React from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const skills = [
  { name: 'After Effects', level: 95 },
  { name: 'Cinema 4D', level: 90 },
  { name: 'Blender', level: 85 },
  { name: 'DaVinci Resolve', level: 92 },
  { name: 'Nuke', level: 88 },
  { name: 'Houdini', level: 75 },
];

const achievements = [
  {
    icon: Award,
    title: 'VFX Excellence Award',
    description: 'Winner at the International VFX Awards 2023'
  },
  {
    icon: Users,
    title: 'Industry Recognition',
    description: 'Featured in Top 30 VFX Artists by Creative Magazine'
  },
  {
    icon: Zap,
    title: 'Innovation Leader',
    description: 'Pioneer in real-time VFX and virtual production'
  },
  {
    icon: Target,
    title: 'Client Success',
    description: '100% project delivery rate with 98% client satisfaction'
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Text */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              About
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                With over 8 years of experience in visual effects and motion graphics, I specialize in creating 
                stunning visuals that bring impossible stories to life. My passion lies in pushing the boundaries 
                of what's possible through cutting-edge technology and creative innovation.
              </p>
              
              <p>
                I've had the privilege of working with major brands like Marvel, Apple, Nike, and Netflix, 
                creating everything from blockbuster movie sequences to viral social media content. Each 
                project is an opportunity to solve unique challenges and exceed client expectations.
              </p>
              
              <p>
                My expertise spans the entire post-production pipeline, from pre-visualization and concept 
                development to final delivery. I believe in collaboration, innovation, and delivering results 
                that not only meet technical requirements but also tell compelling stories.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-gray-700/50 rounded-lg">
                    <Icon className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Technical Expertise</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="relative">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-white">{skill.name}</span>
                    <span className="text-yellow-400 font-semibold">{skill.level}%</span>
                  </div>
                  
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools & Software */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-white">Tools & Software</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  'After Effects', 'Premiere Pro', 'Cinema 4D', 'Blender', 'Nuke', 'Houdini',
                  'DaVinci Resolve', 'Photoshop', 'Illustrator', 'Unreal Engine', 'Unity', 'Maya'
                ].map((tool, index) => (
                  <div 
                    key={index}
                    className="bg-gray-700 text-center py-3 px-4 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-600 hover:text-white transition-colors"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 p-6 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl border border-yellow-400/20">
              <h4 className="text-xl font-bold mb-3 text-white">Ready to Collaborate?</h4>
              <p className="text-gray-300 mb-4">
                Let's discuss your next project and bring your vision to life with stunning visuals.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}