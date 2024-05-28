"use client";
import React, { useState } from "react";
import FroalaEditor from "react-froala-wysiwyg";
const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState("Hey");

    const handleChange = (value: any) => {
        setMarkdown(value);
    };

    return (
        <div className="text-sm">
            <FroalaEditor config={{
                toolbarButtons: {
                    button: ["bold"]
                }
            }} />
        </div>
    );
};

export default MarkdownEditor;
