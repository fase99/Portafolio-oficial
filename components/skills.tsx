"use client"

import React from "react";
import Header from "./Header";

type SkillsProps = {
    tittle?: string;
    skills?: string[];
};

const defaultSkills = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "Tailwind",
    "GraphQL",
    "Burpsuite",
    "Kali Linux",
    "Metasploit",
    "Docker",
    "Pentesting"
];

export default function Skills({ skills = defaultSkills }: SkillsProps) {
    return (
        <section className="skills">
            
            {skills.map((skill) => (

                
                <div key={skill} className="skill-card">
                    {skill}
                </div>
            ))}

            
        </section>
    );
}