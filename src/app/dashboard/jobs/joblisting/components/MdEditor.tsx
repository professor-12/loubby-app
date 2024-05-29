"use client";
// src/Tiptap.jsx
import {
    useEditor,
    EditorContent,
    FloatingMenu,
    BubbleMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ToolBar from "./ToolBar";
import { useEffect } from "react";

// define your extension array

const extensions = [StarterKit];

const content = "<p>Hello World!</p>";

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: "flex flex-col px-4 py-3 justify-start border-b border-r border-1 border-gray-300",
            },
        },
    });

    const d = () => {
        const selection = getSelection() as any;
        const highlightedText = selection?.toString();

        if (highlightedText) {
            console.log("Highlighted Text:", highlightedText);

            // Retrieve current highlights from localStorage
        } else {
            console.log("No text highlighted.");
        }
    };

    return (
        <>
            <ToolBar />
            <div className="id" onClick={d}>Hey booman</div>
        </>
    );
};

export default Tiptap;
