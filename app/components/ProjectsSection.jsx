'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Use Skills : Next.js, Tailwindcss, Framer-motion',
    image: '/1.png', // Ensure these paths are correct
    tag: ['All', 'Web'], //when you add your project in mobile section just change web to mobile  "like,( tag: ['All', 'Web'],-> tag: ['All', 'Mobile'],)"
    gitUrl: 'https://github.com/joydipdewasi/portfoliowebsite',
    previewUrl: 'https://portfoliowebsite-zeta-olive.vercel.app/',
  },
  {
    id: 2,
    title: 'Luxury-Interior-Design Website',
    description: 'Use Skills : React.js, Tailwindcss, Framer-motion',
    image: '/2.png', // Ensure these paths are correct
    tag: ['All', 'Web'], //when you add your project in mobile section just change web to mobile  "like,( tag: ['All', 'Web'],-> tag: ['All', 'Mobile'],)"
    gitUrl: 'https://github.com/joydipdewasi/Use-Full-Tools',
    previewUrl: 'https://use-full-tools.vercel.app/',
  },
  {
    id: 3,
    title: 'Use-Full-Tools Website',
    description: 'Use Skills : React.js, Tailwindcss, Weather API',
    image: '/3.png', // Ensure these paths are correct
    tag: ['All', 'Web'], //when you add your project in mobile section just change web to mobile  "like,( tag: ['All', 'Web'],-> tag: ['All', 'Mobile'],)"
    gitUrl: 'https://github.com/joydipdewasi/coffee-shop',
    previewUrl: 'https://coffee-shop-red-theta.vercel.app/',
  },
  {
    id: 4,
    title: 'coffee-shop Website',
    description: 'Use Skills : Html, Css ,Javascript',
    image: '/4.png', // Ensure these paths are correct
    tag: ['All', 'Web'], //when you add your project in mobile section just change web to mobile  "like,( tag: ['All', 'Web'],-> tag: ['All', 'Mobile'],)"
    gitUrl: 'https://github.com/joydipdewasi/img-slider-2--3d-',
    previewUrl: 'https://img-slider-2-3d.vercel.app/',
  },
  {
    id: 5,
    title: 'img-3d-slider Website',
    description: 'Use Skills : Html, Css',
    image: '/5.png', // Ensure these paths are correct
    tag: ['All', 'Web'], //when you add your project in mobile section just change web to mobile  "like,( tag: ['All', 'Web'],-> tag: ['All', 'Mobile'],)"
    gitUrl: 'https://github.com/joydipdewasi/img-slider-2--3d-',
    previewUrl: 'https://img-slider-2-3d.vercel.app/',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image || '/images/project/default.png'} // Fallback image if empty
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
