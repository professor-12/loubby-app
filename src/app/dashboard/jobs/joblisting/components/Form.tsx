"use client";
import { Input, InputWrapper } from "@/components/ui/Input/Input";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DragndDropInput from "./DragndDropInput";
const Form = () => {
    const onDrop = useCallback((acceptedFiles: any) => {
        console.log(acceptedFiles);
    }, []);

    return (
        <form className="my-3 py-4 md:p-2">
            <div className="space-y-2">
                <h1 className="text-[0.85rem] text-small-p-mute">
                    This is optional, you can choose to manually fill your job
                    info
                </h1>
                <DragndDropInput onDrop={onDrop as any} />
                <div className="py-1">
                    <InputWrapper
                        className="space-y-2"
                        htmlFor="first_name"
                        label="Job title *"
                    >
                        <div className="border border-muted-boder rounded-xl">
                            <Input
                                placeholder="Senior UI/UX Designer"
                                type="text"
                            />
                        </div>
                    </InputWrapper>
                </div>
            </div>
        </form>
    );
};

export default Form;
