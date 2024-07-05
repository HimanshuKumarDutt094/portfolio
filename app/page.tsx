import React from 'react';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BsPhone, BsSuitcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Button } from '../components/ui/button';
import ProjectItem from '../components/project';

export default function Home () {
  return (
    <div className="w-full min-h-screen bg-white text-black">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-2">Himanshu Kumar Dutt</h1>
        <nav aria-label="Contact information">
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { icon: <BsPhone aria-hidden="true" className="mr-1" />, text: "7982033205", href: "tel:+917982033205", ariaLabel: "Phone number" },
              { icon: <GitHubLogoIcon aria-hidden="true" className="mr-1" />, text: "GitHub", href: "https://github.com/HimanshuKumarDutt094", ariaLabel: "GitHub profile" },
              { icon: <LinkedInLogoIcon aria-hidden="true" className="mr-1" />, text: "LinkedIn", href: "https://linkedin.com/in/himanshu-dutt-77", ariaLabel: "LinkedIn profile" },
              { icon: <BsSuitcaseFill aria-hidden="true" className="mr-1" />, text: "Portfolio", href: "https://himanshudutt.me", ariaLabel: "Portfolio website" },
              { icon: <MdEmail aria-hidden="true" className="mr-1" />, text: "Email", href: "mailto:himanshu.dutt@himanshudutt.me", ariaLabel: "Email address" },
            ].map((item, index) => (
              <li key={index}>
                <a href={item.href} className="flex items-center underline p-2" target="_blank" rel="noopener noreferrer" aria-label={item.ariaLabel}>
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Section title="About Me">
          <p>
            Hello there, welcome to my generic portfolio, I'm Himanshu, started taking intrest in computer back in middleschool, but actually did my first code in highschool with python. I've always been obsessed with tech and find it really facinating, i love to dabble into random areas to se what's going on, currenly split between choosing ML (i hate maths but love internal working) and webdev (got 0 design sense but love to create random stuff). <br /> my techstack is weak as my adhd leads me to choose anything i find cool on youtube (golang and SvelteKit and currently trying out expo) </p>
        </Section>


      </main>
      <main className="p-4">
        <Section title="Education">
          <table className="w-full border-collapse" aria-label="Education history">
            <tbody>
              <EducationRow
                institution="Guru Gobing Singh Indraprastha University"
                period="Aug 2021-June 2024"
                degree="BCA with minor Specialization in ML and AI"
                grade="Current CGPA: 8.8"
              />
              <EducationRow
                institution="Kamal Public School Vikaspuri"
                period="2019 - 2021"
                degree="12th CBSE Boards (PCM-CS)"
                grade="88.8%"
              />
            </tbody>
          </table>
        </Section>

        <Section title="Skills">
          <ul className="list-disc pl-5" aria-label="List of skills">
            <SkillItem title="Languages" skills="JavaScript, TypeScript, Python, Golang, HTML/CSS" />
            <SkillItem title="Frameworks" skills="NextJS, SvelteKit" />
            <SkillItem title="Libraries" skills="ReactJS, ExpressJS, Socket.io, Clerk Auth, Shadcn, NextUI" />
            <SkillItem title="Databases" skills="MongoDB, SQL (SQLite, Postgres)" />
            <SkillItem title="Tools" skills="Git/GitHub, VS Code, Vercel, AWS EC2, Neovim (basics)" />
          </ul>
        </Section>

        <Section title="Projects">
          <ProjectItem
            title="PdfChatBot"
            tech="Python, RapidAPI, LangChain, Google Generative AI, TypeScript, ReactJS, ShadCnUI, Tailwind"
            liveLink="https://pdf-chat-bot-wine.vercel.app/"
            githubLink="https://github.com/HimanshuKumarDutt094/PDFChatBot/tree/main"
            description={[
              "PdfChatBot is modern solution to chat with any pdf file with AI capabilities. Built with Python and RapidAPI as backbone with LangChain and Google Generative AI library.",
              "Frontend built with Vite+React for fastest reaction and sleek components. Uses ShadCn made dynamic components to adapt to any screen.",
              "Uses FAISS CPU for vector embeddings and quick compilation of files."
            ]}
          />
          <ProjectItem
            title="WatchrMV"
            tech="SvelteKit, NodeJS, ExpressJS, Axios, WebTorrent, Webtor, TMDB"
            liveLink="https://watcher-mv.vercel.app/"
            githubLink="https://github.com/HimanshuKumarDutt094/watcher-mv/"
            description={[
              "WatcherMV is one place to find a movie you want to browse, it's experimented with Webtor to display all possible watch options from aggregated sites on the internet.",
              "Frontend built with SvelteKit, one of the fastest JavaScript frameworks on par with SolidJS with sleek UI, search bar capabilities, popular and trending sections. Use of Tailwind enhances the styling experience and ease to prototype.",
              "Uses WebTorrent for searching all streaming options over the internet, and display all resolutions to watch from."
            ]}
          />
        </Section>

        <Section title="Work Experience">
          <ExperienceItem
            company="SAP Labs India"
            position="Developer Intern"
            period="July 2023 - September 2023"
            responsibilities={[
              "Feasibility study on whether live data can have currency conversion for team use case.",
              "Used Java and Selenium to rewrite & improve previously written automation testing scripts.",
              "Migration from Java 11 to Java 22 as well as Maven. Created custom reusable scripts to handle different use cases while testing. Reduced testing time to 5min for 3 different websites from 20min+."
            ]}
          />
          <ExperienceItem
            company="RankFlys"
            position="MERN Stack Developer"
            period="May 2024 - July 2024"
            responsibilities={[
              "Worked as freelance developer to create and integrate AI-based NEET and JEE question doubt engine.",
              "Used NodeJS, ExpressJS, NextJS, and Google Gemini 1.5 to create optimized solution with rate limits & authorizations.",
              "Created file upload, camera upload, crop mechanism alongside sharp package to reduce file size for optimal performance."
            ]}
          />
        </Section>
      </main>

      <footer className="p-4">
        <Section title="Certificates">
          <div className="pl-4">
            <b>Generative AI | ML | Python | Golang</b>
          </div>
        </Section>
      </footer>
    </div >
  );
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-6" aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
    <h2 id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`} className="text-2xl font-bold mb-2">{title}</h2>
    <hr className="border-black border-2 mb-4" aria-hidden="true" />
    {children}
  </section>
);

const EducationRow: React.FC<{ institution: string; period: string; degree: string; grade: string }> = ({ institution, period, degree, grade }) => (
  <tr className="mb-4 block">
    <td className="block">
      <div className="font-bold">{institution}</div>
      <div className="text-gray-500">{degree}</div>
    </td>
    <td className="block text-right">
      <div>{period}</div>
      {grade && <div className="text-gray-500">{grade}</div>}
    </td>
  </tr>
);

const SkillItem: React.FC<{ title: string; skills: string }> = ({ title, skills }) => (
  <li className="mb-2">
    <span className="font-bold">{title}: </span>
    <span>{skills}</span>
  </li>
);

const ExperienceItem: React.FC<{ company: string; position: string; period: string; responsibilities: string[] }> = ({ company, position, period, responsibilities }) => (
  <article className="mb-6">
    <h2 className="font-bold mb-2 flex justify-between flex-wrap">
      <span>{company} | {position}</span>
      <span>{period}</span>
    </h2>
    <ul className="list-disc pl-5" aria-label={`Responsibilities at ${company}`}>
      {responsibilities.map((item, index) => (
        <li key={index} className="mb-2">{item}</li>
      ))}
    </ul>
  </article>
);

const DialogProject = () => (
  <dialog open aria-labelledby="dialog-title" aria-describedby="dialog-description">
    <iframe src="https://watcher-mv.vercel.app/" className='w-full' title="WatchrMV Project Preview"></iframe>
    <form method="dialog">
      <Button aria-label="Close dialog">Ok</Button>
    </form>
  </dialog>
);
