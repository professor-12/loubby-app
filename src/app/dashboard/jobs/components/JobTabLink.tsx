"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import { useStoreContext } from "./JobContextapi/store";

interface TabLinkProps {
    id: number;
    name: string;
    Svg: React.ReactNode;
    navLink: any[];
}

export const TabLink: React.FC<TabLinkProps> = ({ id, name, Svg, navLink }) => {
    const { setX } = useStoreContext() as any;
    const params = useSearchParams();
    const router = useRouter();
    const tab = params.get("tab");
    const id_ = navLink.find(({ name }) => name === (tab ?? "Active"))?.id ?? 0;
    const active = (tab ?? "Active") === name;

    const handleChangeTab = useCallback(() => {
        router.push(`?tab=${name}`);
    }, [name, router]);

    useEffect(() => {
        setX(id_ * -100);
    }, [id_, setX]);

    return (
        <div
            onClick={handleChangeTab}
            className="text-[#667085] cursor-pointer space-y-3 md:space-y-2"
            key={id}
        >
            <button className="flex items-center space-x-4">
                <span>{Svg}</span> <span>{name}</span>
            </button>
            <AnimatePresence>
                {active && (
                    <motion.div
                        animate={{
                            width: ["0%", "100%"],
                            transition: { duration: 0.4 },
                        }}
                        exit={{ width: ["100%", "0%"] }}
                        className="bg-blue-500 float-left rounded-md h-[0.1rem]"
                    />
                )}
            </AnimatePresence>
        </div>
    );
};
