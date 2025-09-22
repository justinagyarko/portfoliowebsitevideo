import React, { useState } from 'react';
import { Play, ExternalLink, Filter } from 'lucide-react';

const categories = ['All', 'VFX', 'YouTube', 'Instagram Reels', 'Commercials'];

const projects = [
  {
    id: 1,
    title: 'Marvel-Style VFX Sequence',
    category: 'VFX',
    thumbnail: 'https://images.pexels.com/photos/3973799/pexels-photo-3973799.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2:34',
    client: 'Marvel Studios',
    description: 'Epic superhero transformation sequence with advanced particle systems and dynamic lighting.',
  },
  {
    id: 2,
    title: 'Tech Product Launch',
    category: 'YouTube',
    thumbnail: 'https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3:12',
    client: 'Apple',
    description: 'Premium product showcase with sleek motion graphics and cinematic reveals.',
  },
  {
    id: 3,
    title: 'Fashion Brand Reel',
    category: 'Instagram Reels',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:30',
    client: 'Nike',
    description: 'Dynamic fashion showcase with trending transitions and color grading.',
  },
  {
    id: 4,
    title: 'Car Commercial VFX',
    category: 'Commercials',
    thumbnail: 'https://images.pexels.com/photos/3846134/pexels-photo-3846134.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:45',
    client: 'BMW',
    description: 'Luxury car commercial with environment replacement and speed effects.',
  },
  {
    id: 5,
    title: 'Explosion Simulation',
    category: 'VFX',
    thumbnail: 'https://images.pexels.com/photos/3838937/pexels-photo-3838937.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '1:20',
    client: 'Netflix',
    description: 'Realistic explosion and debris simulation for action sequence.',
  },
  {
    id: 6,
    title: 'Cooking Show Intro',
    category: 'YouTube',
    thumbnail: 'https://images.pexels.com/photos/3769999/pexels-photo-3769999.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '0:45',
    client: 'Gordon Ramsay',
    description: 'Food-focused intro with appetizing visuals and smooth transitions.',
  },
];

export default function ProjectGallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  return (
    <section id="work" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my latest work in visual effects, motion graphics, and video production. 
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Filter className="w-5 h-5 text-gray-400 mt-2" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-500 hover:shadow-2xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-90' : 'opacity-60'
                }`} />
                
                {/* Play Button */}
                <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  hoveredProject === project.id ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                }`}>
                  <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center hover:bg-yellow-500 transition-colors group/btn">
                    <Play className="w-6 h-6 text-gray-900 ml-1 group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>

                {/* Duration Badge */}
                <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-2 py-1 rounded text-sm font-medium">
                  {project.duration}
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-400/90 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                </div>
                
                <p className="text-gray-400 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-yellow-400 font-medium text-sm">
                    {project.client}
                  </span>
                  <button className="text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors">
            Load More Projects
          </button>
        </div>
      </div>
    </section>
  );
}