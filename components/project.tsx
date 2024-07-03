"use client"
import React from 'react';
import dynamic from 'next/dynamic';

const Dialog = dynamic(() => import('./dialog'), { ssr: false });

interface ProjectItemProps {
    title: string;
    tech: string;
    liveLink: string;
    githubLink: string;
    description: string[];
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, tech, liveLink, githubLink, description }) => {
    const [showPreview, setShowPreview] = React.useState(false);

    return (
        <div className="mb-6">
            <h4 className="font-bold mb-2">
                {title} | {tech} |
                <a className="underline mx-1" href={liveLink} target="_blank" rel="noopener noreferrer">Live</a> |
                <a className="underline mx-1" href={githubLink} target="_blank" rel="noopener noreferrer">Github</a> |
                <button
                    className="underline mx-1 text-blue-600 hover:text-blue-700"
                    onClick={() => setShowPreview(true)}
                >
                    Preview
                </button>
            </h4>
            <ul className="list-disc pl-5">
                {description.map((item, index) => (
                    <li key={index} className="mb-2">{item}</li>
                ))}
            </ul>
            {showPreview && (
                <Dialog url={liveLink} onClose={() => setShowPreview(false)} />
            )}
        </div>
    );
};

export default ProjectItem;