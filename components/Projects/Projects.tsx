import React from 'react';
import ProjectCard from './ProjectCard';
import SectionHeading from '../SectionHeading';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  tags: string[];
  links: {
    title: string;
    url: string;
  }[];
  fullDescription: string;
  slug: string;
}

export const projectsData: Project[] = [
  {
    title: 'MJ Charter',
    description:
      'Official website for MJ Charter, a yacht rental company offering premium sailing experiences across Greece. Users can explore available yachts, browse destinations, and request bookings online.',
    date: 'August 2025',
    imageUrl: '/projects/mj-charter.png',
    tags: ['JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Web Development', 'Booking System'],
    slug: 'mj-charter-business-site',
    links: [
      { title: 'Live Site', url: 'https://mj-charter.vercel.app' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/MJ-Charter-Site' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'Yacht rental companies often struggle to present their offerings in a way that is both visually appealing and easy to navigate online. Potential customers may find it difficult to explore available options, learn about destinations, and make booking inquiries without a streamlined digital platform.\n\n' +
      'MJ Charter needed an official website that not only showcased its premium sailing experiences across Greece but also simplified the process of discovering yachts and initiating bookings.\n\n' +
      '## Action\n\n' +
      'Designed and developed a responsive, high-performance website using React, Next.js, and Tailwind CSS. The site features an intuitive yacht browsing system, detailed destination pages, and an integrated booking request form.\n\n' +
      'Optimized for fast loading times and smooth navigation, the platform incorporates high-quality imagery and a clean layout to enhance the luxury brand identity. Implemented SEO best practices to improve discoverability and integrated a CMS for easy content management.\n\n' +
      '## Results\n\n' +
      '- Significantly improved user engagement and session duration\n' +
      '- Streamlined booking request process, reducing manual inquiries\n' +
      '- Enhanced brand presence through a modern, mobile-friendly design\n' +
      '- Increased online inquiries within the first month of launch\n' +
      '- Positive feedback from customers praising ease of use and design'
  },
  {
    title: 'Interview Ninja',
    description:
      'AI-powered platform that helps users prepare for job interviews by providing personalized questions, detailed answers, concept explanations, and tools to organize preparation. Built with Next.js.',
    date: 'August 2025',
    imageUrl: '/projects/interview-ninja.png',
    tags: ['JavaScript', 'Next.js', 'AI', 'Machine Learning', 'Web Development'],
    slug: 'interview-ninja',
    links: [
      { title: 'Live Site', url: 'https://interview-ninja-five.vercel.app' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/Interview-Ninja' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'Job interview preparation can be overwhelming, with candidates struggling to predict relevant questions, recall key concepts, and structure their learning effectively. Generic preparation resources fail to address individual strengths, weaknesses, and the specific requirements of different job roles.\n\n' +
      'There was a need for a smart, adaptive platform that could tailor preparation content to each user’s goals and provide a structured, easy-to-follow plan.\n\n' +
      '## Action\n\n' +
      'Developed an AI-powered platform using Next.js that generates personalized interview questions and detailed model answers based on the user’s target role, experience, and industry. Integrated concept explanation modules to clarify technical and non-technical topics, and implemented progress tracking features to help users stay organized.\n\n' +
      'The backend AI models analyze user responses to adapt the difficulty and focus of subsequent questions, ensuring a dynamic and targeted preparation process. The user interface was designed for clarity, speed, and mobile accessibility.\n\n' +
      '## Results\n\n' +
      '- Increased candidate confidence and readiness for interviews\n' +
      '- Provided over 1,000+ unique, role-specific interview questions in testing\n' +
      '- Achieved high engagement rates with users completing full preparation plans\n' +
      '- Reduced preparation time by focusing on relevant skills and concepts\n' +
      '- Positive feedback highlighting the value of personalized practice'
  },
  {
    title: 'Bulgaria: A Hidden Gem of Europe',
    description:
      'An educational Spanish-language project highlighting Bulgaria’s history, culture, and natural beauty. Created for a Spanish class to improve language skills and promote cultural appreciation.',
    date: 'April 2025',
    imageUrl: '/projects/bulgaria-site.png',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'Spanish', 'Research', 'Education', 'Culture', 'History'],
    slug: 'bulgaria-hidden-gem',
    links: [
      { title: 'Live Site', url: 'https://guia-turistica-bulgaria.vercel.app/' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/Guia-turistica-Bulgaria' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'Bulgaria is often overlooked in international discussions about European travel, history, and culture. Many people know little about its rich heritage, unique traditions, and breathtaking landscapes. The lack of engaging educational resources, especially in other languages like Spanish, limits its visibility and appeal to broader audiences.\n\n' +
      '## Action\n\n' +
      'Developed a Spanish-language multimedia project as part of a Spanish class assignment to present Bulgaria’s unique identity. Conducted in-depth research on the country’s history, geography, cultural traditions, and modern lifestyle. Wrote original Spanish content supported by high-quality images, maps, and historical references.\n\n' +
      'The project was designed not only to fulfill academic requirements but also to inspire curiosity and appreciation for Bulgaria among Spanish-speaking audiences. It incorporated a clear structure, accessible language, and visually appealing formatting to maximize engagement.\n\n' +
      '## Results\n\n' +
      '- Strengthened Spanish writing and research skills through practical application\n' +
      '- Created a comprehensive cultural resource accessible to Spanish learners and native speakers\n' +
      '- Received positive feedback from classmates and teacher for both content depth and presentation\n' +
      '- Successfully increased interest in Bulgaria among Spanish-speaking peers\n' +
      '- Demonstrated the potential of language-learning projects to serve real-world cultural exchange purposes'
  },
  {
    title: 'Chat Application',
    description:
      'A full-stack chat platform built with Node.js, React, and MongoDB. Features real-time messaging, user authentication, customizable profiles, and light/dark themes.',
    date: 'April 2025',
    imageUrl: '/projects/chat-app.png',
    tags: ['JavaScript', 'Node.js', 'React', 'MongoDB', 'Full-Stack', 'WebSockets', 'Render Hosting'],
    slug: 'chat-application-nikolay-todorov',
    links: [
      { title: 'Live Demo', url: 'https://chat-application-by-nikolay.onrender.com' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/MERN-Real-Time-Chat-App' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'Traditional messaging platforms can be cluttered, slow, or lack personalization options. For an academic project, the goal was to create a lightweight, user-friendly chat application that supported real-time communication, personalization, and a modern UI — all while being simple to deploy and maintain.\n\n' +
      '## Action\n\n' +
      'Designed and implemented a full-stack chat application as part of a SoftUni exam project. The back-end was built with Node.js, Express, and MongoDB, leveraging WebSockets for real-time communication between clients. The front-end was developed using React, incorporating a responsive design with both light and dark themes.\n\n' +
      'Implemented secure user authentication, profile customization (including profile picture uploads), and message persistence in MongoDB. Deployed the application using Render for hosting and ensured smooth performance across devices.\n\n' +
      '## Results\n\n' +
      '- Fully functional messaging system supporting real-time chat between authenticated users\n' +
      '- Profile personalization features, including theme switching and profile image updates\n' +
      '- Stable deployment with Render, maintaining consistent uptime\n' +
      '- Positive peer and instructor feedback for clean design and functionality\n' +
      '- Solidified skills in full-stack development, real-time communication, and deployment'
  },
  {
    title: 'NoteQuote',
    description:
      'A social platform for sharing inspiring quotes and helpful notes with friends. Built with React, Tailwind CSS, Node.js, Express, and Supabase for a seamless full-stack experience.',
    date: 'June 2025',
    imageUrl: '/projects/notequote.png',
    tags: ['JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase', 'Full-Stack'],
    slug: 'notequote-social-media',
    links: [
      { title: 'Live Demo', url: 'https://note-quote.vercel.app' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/NoteQuote' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'While social media is full of short-lived posts and visual content, there are few platforms focused on meaningful written expression like quotes and notes. Existing solutions are often cluttered, lack focus, or fail to create a smooth experience for sharing and discovering thoughtful content.\n\n' +
      'There was a need for a platform dedicated to connecting people through words, offering a clean, distraction-free environment for both casual sharing and personal inspiration.\n\n' +
      '## Action\n\n' +
      'Co-developed NoteQuote with a friend’s concept, building a full-stack application with a responsive React front-end styled using Tailwind CSS, and a robust Node.js/Express back-end integrated with Supabase for authentication, data storage, and real-time capabilities.\n\n' +
      'Implemented features for creating, liking, and discovering quotes and notes, as well as following friends to see their posts. Focused on providing a minimalist yet engaging interface to encourage frequent interaction without overwhelming the user.\n\n' +
      '## Results\n\n' +
      '- Delivered a fully functional social platform tailored to text-based sharing\n' +
      '- Smooth, responsive UI with real-time updates via Supabase\n' +
      '- Positive feedback on the simplicity and clarity of the platform’s design\n' +
      '- Enabled user connections through a niche, interest-based network\n' +
      '- Strengthened collaborative development skills through joint project execution'
  },
  {
    title: 'LeBron AI-Chatbot',
    description:
      'An interactive chatbot experience that lets users chat with “LeBron James,” powered by the Gemini API. Built with Vanilla JavaScript, HTML, and CSS for a simple, efficient, and responsive experience.',
    date: 'December 2024',
    imageUrl: '/projects/lebron-ai.png',
    tags: ['JavaScript', 'HTML', 'CSS', 'Gemini API', 'AI', 'Chatbot', 'Web Development'],
    slug: 'ai-chatbot-gemini-api',
    links: [
      { title: 'Live Demo', url: 'https://ai-chatbot-by-nikolay.netlify.app/' },
      { title: 'GitHub', url: 'https://github.com/nikolay508/AI-Chatbot' }
    ],
    fullDescription:
      '## Problem\n\n' +
      'While conversational AI is becoming increasingly popular, many solutions require heavy frameworks or complex integrations. For developers seeking a lightweight, customizable chatbot, existing tools can feel overly complicated. There was an opportunity to create a clean, minimal, and fully responsive chatbot experience.\n\n' +
      '## Action\n\n' +
      'Developed a browser-based chatbot using Vanilla JavaScript, HTML, and CSS, integrated with the Gemini API to deliver advanced conversational abilities. Designed a clean, modular codebase for easy maintenance and customization, and implemented a responsive interface to work seamlessly on both desktop and mobile devices.\n\n' +
      'The chatbot sends user inputs to the Gemini API and displays AI-generated responses in a friendly, conversational format. Styling was kept minimal and easily modifiable so other developers could adapt the design.\n\n' +
      '## Results\n\n' +
      '- Delivered a fully functional AI chatbot without relying on any frameworks\n' +
      '- Smooth, responsive UI optimized for multiple devices\n' +
      '- Demonstrated Gemini API’s conversational capabilities in a fun, engaging way\n' +
      '- Code structured for easy customization and educational use\n' +
      '- Positive feedback on simplicity and ease of integration'
  }
];

export default function Projects() {
  return (
    <div id="projects" className="mx-auto mt-28 max-w-7xl px-4 py-12 sm:mt-40 sm:py-16">
      <SectionHeading
        heading="My Strongest Projects"
        subheading="The collection of my most impactful work - building solutions that help and make a difference"
      />
      <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            date={project.date}
            imageUrl={project.imageUrl}
            tags={project.tags}
            slug={project.slug}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
