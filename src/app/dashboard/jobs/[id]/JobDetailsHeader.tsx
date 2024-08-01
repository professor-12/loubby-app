import Image from "next/image";
import Link from "next/link";
import DetailButtons from "./DetailButtons";
import TabNav from "./TabNav";

const JobDetailsHeader = () => {
    return (
        <div className="bg-white flex relative flex-col w-full pb-0 p-[1rem]">
            <div className="pb-3">
                <Link className="bg-red-300 pb-4" href={"/dashboard/jobs"}>
                    <p className="text-sm flex items-center space-x-2">
                        <svg
                            stroke="currentColor"
                            fill="#667085"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="14"
                            width="14"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"></path>
                        </svg>{" "}
                        <span className="text-[#667085] text-sm">
                            Back to Jobs
                        </span>
                    </p>
                </Link>
            </div>
            <div>
                <h1 className="text-lg font-medium">
                    Registrar and Secretary to Council
                </h1>
                <div className="w-full flex justify-between">
                    <div className="space-x-3 flex gap-1">
                        <span className="flex items-center">
                            <Image
                                src={"/db.svg"}
                                width={55}
                                height={55}
                                alt="db"
                                className="h-5 w-5"
                            />
                            <span className="text-xs text-[#667085]">
                                Salary not specified
                            </span>
                        </span>
                        <span className="flex items-center gap-1">
                            <Image
                                src={"/case.svg"}
                                width={55}
                                height={55}
                                alt="db"
                                className="h-5 w-5"
                            />
                            <span className="text-xs text-[#667085]">
                                Full time
                            </span>
                        </span>
                        <span className="flex items-center gap-1">
                            <Image
                                src={"/location.svg"}
                                width={55}
                                height={55}
                                alt="db"
                                className="h-5 w-5"
                            />
                            <span className="text-xs text-[#667085]">
                                In Office
                            </span>
                        </span>
                    </div>
                    <DetailButtons />
                </div>
            </div>
            <TabNav />
        </div>
    );
};

export default JobDetailsHeader;
