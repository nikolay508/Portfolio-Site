import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

export default function AboutMe() {
  return (
    <div id="my-story" className="mx-auto max-w-[1000px] px-4">
      <SectionHeading
        heading="My Story"
        subheading="I build useful software and help others do the same."
      />
      <Letter />
    </div>
  );
}
