'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import Link from 'next/link';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            {project.projectLink ? (
              <Link href={project.projectLink} target='_blank' key={index}>
                <Project {...project} />
              </Link>
            ) : (
              <Project {...project} />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
