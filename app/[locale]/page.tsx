import ProjectItem from "@/components/project";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { getTranslations } from "next-intl/server";
import React from "react";
import { BsPhone, BsSuitcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// Generate static params for all locales at build time
export const generateStaticParams = () => {
    const locales = ["en", "id", "es", "fr"];
    return locales.map((locale) => ({ locale }));
};

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations("Home");

    return (
        <div className="w-full min-h-screen bg-white text-black print:block print:min-h-0 print:p-4">
            <main className="p-4 print:p-2 print:space-y-2">
                <header className="p-4 print:p-0 text-center">
                    <h1 className="text-3xl font-bold mb-2 print:mb-2">{t("name")}</h1>
                    <nav aria-label={t("contactInfo")}>
                        <ul className="flex flex-wrap justify-center gap-4 text-sm">
                            {[
                            
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
                                    href: "https://himanshu-portfolio-new.vercel.app/",
                                    ariaLabel: t("portfolioWebsite"),
                                },
                                {
                                    icon: <MdEmail aria-hidden="true" className="mr-1" />,
                                    text: "adasimobenio@gmail.com",
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

                <Section title={t("workExperience")}>
                    <ExperienceItem
                        company={t("company3")}
                        position={t("position3")}
                        period={t("period3")}
                        responsibilities={t.raw("responsibilities3")}
                    />
                    <ExperienceItem
                        company={t("company2")}
                        position={t("position2")}
                        period={t("period2")}
                        responsibilities={t.raw("responsibilities2")}
                    />
                    <ExperienceItem
                        company={t("company1")}
                        position={t("position1")}
                        period={t("period1")}
                        responsibilities={t.raw("responsibilities1")}
                    />
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
                        githubLink={[
                            "https://github.com/HimanshuKumarDutt094/tanstack-dexie-db-collection",
                        ]}
                        liveLink="https://tanstack.com/db/latest/docs/community/resources"
                        description={t.raw("project1Description")}
                    />
                    <ProjectItem
                        title={t("project2Title")}
                        tech={t("project2Tech")}
                        githubLink={["https://github.com/HimanshuKumarDutt094/cutfast"]}
                        liveLink="https://cutfast-extension.vercel.app/"
                        description={t.raw("project2Description")}
                    />
                </Section>


                <Section title={t("education")}>
                    <div className="space-y-4 print:space-y-2" aria-label={t("educationHistory")}>
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
                    </div>
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
            className="text-2xl font-bold mb-2 print:mb-2"
        >
            {title}
        </h2>
        <hr className="border-black border-2 mb-4 print:mb-2" aria-hidden="true" />
        {children}
    </section>
);

const EducationRow: React.FC<{
    institution: string;
    period: string;
    degree: string;
    grade: string;
}> = ({ institution, period, degree, grade }) => (
    <div className="flex justify-between items-start gap-4 print:gap-2">
        <div className="flex-1">
            <div className="font-bold text-base print:text-base">{institution}</div>
            <div className="text-gray-500 text-sm print:text-sm">{degree}</div>
        </div>
        <div className="text-right flex-shrink-0">
            <div className="text-sm print:text-sm">{period}</div>
            {grade && <div className="text-gray-500 text-sm print:text-sm">{grade}</div>}
        </div>
    </div>
);

const SkillItem: React.FC<{ title: string; skills: string }> = ({
    title,
    skills,
}) => (
    <li className="mb-2 print:mb-2">
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
    <article className="mb-6 print:mb-4">
        <h2 className="font-bold mb-2 print:mb-2 flex justify-between flex-wrap">
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
                    <li key={index} className="mb-2 print:mb-2">
                        {item}
                    </li>
                ))}
        </ul>
    </article>
);
