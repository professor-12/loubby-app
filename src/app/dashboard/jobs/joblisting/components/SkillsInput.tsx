"use client";
import React, { InputHTMLAttributes, useState } from "react";

import { motion } from "framer-motion";
interface ListOfSkills {
    skills: string;
}

const SkillsInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    ...props
}) => {
    const [input, setUserInput] = useState("");
    const [skills, setSkills] = useState<{ name: string; id: number }[]>([]);

    const handleAddSkills = () => {
        if (input.trim().length === 0) return;
        setSkills((prevState) => {
            return [...prevState, { name: input, id: prevState.length + 1 }];
        });
        setUserInput("");
        console.log("first");
    };

    const handleRemoveSkills = (idToDELETE: string | number) => {
        const skillsToRemove = skills.filter(({ id }) => idToDELETE !== id);
        setSkills(skillsToRemove);
    };
    return (
        <div className="space-y-1">
            <span className="text-xs block font-medium">
                Press enter to add Skill *
            </span>
            <div className="border rounded-lg">
                <div className="border px-2 rounded-lg bg-slate-300/20  w-full p-2 flex justify-between">
                    <input
                        value={input}
                        onChange={(e) => setUserInput(e.target.value)}
                        className={`${className} bg-transparent flex-1 focus:outline-none`}
                        {...props}
                    />
                    <span onClick={handleAddSkills}>
                        <svg
                            className="cursor-pointer"
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            color="#1A73E8"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                color: "rgb(26, 115, 232)",
                            }}
                        >
                            <path d="M160 136v104h153.37l-52.68-52.69a16 16 0 0122.62-22.62l80 80a16 16 0 010 22.62l-80 80a16 16 0 01-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0056 56h208a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56H216a56.06 56.06 0 00-56 56zM48 240a16 16 0 000 32h112v-32z"></path>
                        </svg>
                    </span>
                </div>

                {skills.length > 0 && (
                    <div className="py-1 flex space-x-2">
                        {skills.map(({ name, id }, i) => {
                            return (
                                <motion.span
                                    animate={{
                                        scale: [0, 1],
                                        transition: { duration: 0.4 },
                                    }}
                                    className="text-xs bg-[#f2f4f7] rounded-full text-center flex px-3 p-1"
                                    key={i}
                                >
                                    <span className="text-[#667085]">
                                        {name}
                                    </span>
                                    <svg
                                        className="cursor-pointer"
                                        onClick={() => handleRemoveSkills(id)}
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 24 24"
                                        color="#667085"
                                        height="18"
                                        width="18"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="none"
                                            d="M0 0h24v24H0z"
                                        ></path>
                                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                    </svg>
                                </motion.span>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsInput;
