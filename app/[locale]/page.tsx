import ProjectItem from "@/components/project";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { useTranslations } from "next-intl";
import React from "react";
import { BsPhone, BsSuitcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("Home");

  return (
    <div className="w-full min-h-screen bg-white text-black print:block print:min-h-0 print:p-2">
      <main className="p-4 print:p-2 print:space-y-2">
        <header className="p-4 print:p-0 text-center">
          <h1 className="text-3xl font-bold mb-2 print:mb-0">{t("name")}</h1>
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
                  icon: (
                    <LinkedInLogoIcon aria-hidden="true" className="mr-1" />
                  ),
                  text: "LinkedIn",
                  href: "https://linkedin.com/in/himanshu-dutt-77",
                  ariaLabel: t("linkedinProfile"),
                },
                {
                  icon: <BsSuitcaseFill aria-hidden="true" className="mr-1" />,
                  text: t("portfolio"),
                  href: "https://v0-himanshu-portfolio-peach.vercel.app/",
                  ariaLabel: t("portfolioWebsite"),
                },
                {
                  icon: <MdEmail aria-hidden="true" className="mr-1" />,
                  text: t("email"),
                  href: "mailto:adasimobenio@gmail.com",
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
            liveLink="https://steelonmobile.com"
            description={t.raw("project1Description")}
          />
          <ProjectItem
            title={t("project2Title")}
            tech={t("project2Tech")}
            githubLink={[
              "https://github.com/HimanshuKumarDutt094/vite-starter",
              "https://github.com/HimanshuKumarDutt094/create-express-starter-ts",
            ]}
            description={t.raw("project2Description")}
            preview={false}
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

      <footer className="p-4 print:p-0">
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
    className="mb-6 print:mb-1 print:break-inside-avoid"
    aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
  >
    <h2
      id={`section-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="text-2xl font-bold mb-2 print:mb-0"
    >
      {title}
    </h2>
    <hr className="border-black border-2 mb-4 print:mb-0" aria-hidden="true" />
    {children}
  </section>
);

const EducationRow: React.FC<{
  institution: string;
  period: string;
  degree: string;
  grade: string;
}> = ({ institution, period, degree, grade }) => (
  <tr className="w-full">
    <td className="w-1/2 align-top pr-4">
      <div className="font-bold">{institution}</div>
      <div className="text-gray-500">{degree}</div>
    </td>
    <td className="w-1/2 align-top text-right pl-4">
      <div>{period}</div>
      {grade && <div className="text-gray-500">{grade}</div>}
    </td>
  </tr>
);

const SkillItem: React.FC<{ title: string; skills: string }> = ({
  title,
  skills,
}) => (
  <li className="mb-2 print:mb-0">
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
  <article className="mb-6 print:mb-0">
    <h2 className="font-bold mb-2 print:mb-0 flex justify-between flex-wrap">
      <span>
        {company} | {position}
      </span>
      <span>{period}</span>
    </h2>
    <ul
      className="list-disc pl-5"
      aria-label={`Responsibilities at ${company}`}
    >
      {Array.isArray(responsibilities) &&
        responsibilities.map((item, index) => (
          <li key={index} className="mb-2 print:mb-0">
            {item}
          </li>
        ))}
    </ul>
  </article>
);
