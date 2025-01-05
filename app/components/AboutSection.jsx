'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className=" pl-2 flex flex-wrap gap-4 text-white">
        <li>C++ ,</li>
        <li>C ,</li>
        <li>Javascript ,</li>
        <li>Html ,</li>
        <li>Css ,</li>
        <li>React.js ,</li>
        <li>Next.js ,</li>
        <li>Tailwindcss ,</li>
        <li>ReactNative ,</li>
        <li>Firebase ,</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'Education',
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>Jadavpur University, Kolkata</li>
        <li>Civil Engineering</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'Certifications',
    content: (
      <ul className="list-disc pl-2 text-white">
        {/* <li>Full Stack Web Development</li>
        <li>Udemy</li>
        <li>2020</li> */}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, settab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      settab(id);
    });
  };

  return (
    // ---------id="about"add hoba akhana---------
    <section className="text-gray-600 body-font">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about.png" alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full justify-center">
          <h2 className="text-4xl font-bold mb-4 text-white">About Us</h2>
          <p className="lg:text-lg text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === 'skills'}
              selectTab={() => handleTabChange('skills')}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === 'Education'}
              selectTab={() => handleTabChange('Education')}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === 'Certifications'}
              selectTab={() => handleTabChange('Certifications')}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content || (
              <p className="text-red-500">Content not found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
