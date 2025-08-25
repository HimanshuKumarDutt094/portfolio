"use client";
import dynamic from "next/dynamic";
import React from "react";

const Dialog = dynamic(() => import("./dialog"), { ssr: false });

interface ProjectItemProps {
  title: string;
  tech: string;
  liveLink?: string;
  githubLink?: string[];
  description: string[];
  preview?: boolean;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  tech,
  liveLink,
  githubLink,
  description,
  preview = true,
}) => {
  const [showPreview, setShowPreview] = React.useState(false);

  return (
    <div className="mb-6 print:mb-0">
      <div className="font-bold mb-2 print:mb-0">
        {title} | {tech} {liveLink && ` | `}
        {liveLink && (
          <a
            className="underline mx-1"
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Live
          </a>
        )}
        {githubLink &&
          githubLink.length > 0 &&
          githubLink?.map((l) => (
            <span key={l}>
              |{" "}
              <a
                className="underline mx-1"
                href={l}
                key={l}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </span>
          ))}
        {liveLink && ` | `}
        {preview && (
          <button
            className="underline mx-1 text-blue-600 hover:text-blue-700"
            onClick={() => setShowPreview(true)}
          >
            Preview
          </button>
        )}
      </div>
      <ul className="list-disc pl-5 print:pl-5">
        {description.map((item, index) => (
          <li key={index} className="mb-2 print:mb-0">
            {item}
          </li>
        ))}
      </ul>
      {showPreview && liveLink && (
        <Dialog url={liveLink} onClose={() => setShowPreview(false)} />
      )}
    </div>
  );
};

export default ProjectItem;
