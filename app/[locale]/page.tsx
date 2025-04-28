import React from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BsPhone, BsSuitcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import ProjectItem from "@/components/project";
import { useTranslations } from "next-intl";
import { NumberFormatOptions } from "next-intl";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Home");

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold mb-2">{t("name")}</h1>
        <nav aria-label={t("contactInfo")}>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              {
                icon: <BsPhone aria-hidden="true" className="mr-1" />,
                text: "7982033205",
                href: "tel:+917982033205",
                ariaLabel: t("phoneNumber"),
              },
              {
                icon: <GitHubLogoIcon aria-hidden="true" className="mr-1" />,
                text: "GitHub",
                href: "https://github.com/HimanshuKumarDutt094",
                ariaLabel: t("githubProfile"),
              },
              {
                icon: <LinkedInLogoIcon aria-hidden="true" className="mr-1" />,
                text: "LinkedIn",
                href: "https://linkedin.com/in/himanshu-dutt-77",
                ariaLabel: t("linkedinProfile"),
              },
              {
                icon: <BsSuitcaseFill aria-hidden="true" className="mr-1" />,
                text: t("portfolio"),
                href: "https://himanshudutt.me",
                ariaLabel: t("portfolioWebsite"),
              },
              {
                icon: <MdEmail aria-hidden="true" className="mr-1" />,
                text: t("email"),
                href: "mailto:himanshu.dutt@himanshudutt.me",
                ariaLabel: t("emailAddress"),
              },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="flex items-center underline p-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="p-4">
        <Section title={t("education")}>
          <table
            className="w-full border-collapse"
            aria-label={t("educationHistory")}
          >
            <tbody>
              <EducationRow
                institution={t("university")}
                period={t("universityPeriod")}
                degree={t("universityDegree")}
                grade={t("universityCGPA", { cgpa: 9.1 })}
              />
              <EducationRow
                institution={t("highSchool")}
                period={t("highSchoolPeriod")}
                degree={t("highSchoolDegree")}
                grade={t("highSchoolGrade", { grade: 88.8 })}
              />
            </tbody>
          </table>
        </Section>

        <Section title={t("skills")}>
          <ul className="list-disc pl-5" aria-label={t("skillsList")}>
            <SkillItem title={t("languages")} skills={t("languageSkills")} />
            <SkillItem title={t("frameworks")} skills={t("frameworkSkills")} />
            <SkillItem title={t("libraries")} skills={t("librarySkills")} />
            <SkillItem title={t("databases")} skills={t("databaseSkills")} />
            <SkillItem title={t("tools")} skills={t("toolSkills")} />
          </ul>
        </Section>

        <Section title={t("projects")}>
          <ProjectItem
            title={t("project1Title")}
            tech={t("project1Tech")}
            liveLink="https://pdf-chat-bot-wine.vercel.app/"
            githubLink="https://github.com/HimanshuKumarDutt094/PDFChatBot/tree/main"
            description={t.raw("project1Description")}
          />
          <ProjectItem
            title={t("project2Title")}
            tech={t("project2Tech")}
            liveLink="https://watcher-mv.vercel.app/"
            githubLink="https://github.com/HimanshuKumarDutt094/watcher-mv/"
            description={t.raw("project2Description")}
          />
        </Section>

        <Section title={t("workExperience")}>
          <ExperienceItem
            company={t("company1")}
            position={t("position1")}
            period={t("period1")}
            responsibilities={t.raw("responsibilities1")}
          />
          <ExperienceItem
            company={t("company2")}
            position={t("position2")}
            period={t("period2")}
            responsibilities={t.raw("responsibilities2")}
          />
          <ExperienceItem
            company={t("company3")}
            position={t("position3")}
            period={t("period3")}
            responsibilities={t.raw("responsibilities3")}
          />
        </Section>
      </main>

      <footer className="p-4">
        <Section title={t("certificates")}>
          <div className="pl-4">
            <b>{t("certificatesList")}</b>
          </div>
        </Section>
      </footer>
    </div>
  );
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section
    className="mb-6"
    aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <h2
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="text-2xl font-bold mb-2"
    >
      {title}
    </h2>
    <hr className="border-black border-2 mb-4" aria-hidden="true" />
    {children}
  </section>
);

const EducationRow: React.FC<{
  institution: string;
  period: string;
  degree: string;
  grade: string;
}> = ({ institution, period, degree, grade }) => (
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

const SkillItem: React.FC<{ title: string; skills: string }> = ({
  title,
  skills,
}) => (
  <li className="mb-2">
    <span className="font-bold">{title}: </span>
    <span>{skills}</span>
  </li>
);

const ExperienceItem: React.FC<{
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}> = ({ company, position, period, responsibilities }) => (
  <article className="mb-6">
    <h2 className="font-bold mb-2 flex justify-between flex-wrap">
      <span>
        {company} | {position}
      </span>
      <span>{period}</span>
    </h2>
    <ul
      className="list-disc pl-5"
      aria-label={`Responsibilities at ${company}`}
    >
      {responsibilities.map((item, index) => (
        <li key={index} className="mb-2">
          {item}
        </li>
      ))}
    </ul>
  </article>
);
