import { NavList } from "@/lib/constant";
import Button from "@/app/onboarding/create-account/Button";
import { TabLink } from "./JobTabLink";

const HeaderJob: React.FC = () => {
    return (
        <div className="bg-white min-h-32 p-5 pt-4 pb-0 space-y-7 flex flex-col justify-between">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="md:text-lg xl:text-xl font-medium">
                        Job listings
                    </h1>
                    <p className="text-xs text-neutral-600">
                        View and manage your jobs
                    </p>
                </div>
                <Button
                    link="jobs/joblisting"
                    className="bg-[#1a73e8] px-3 text-white rounded-lg items-center cursor-pointer p-[0.3rem] space-x-1"
                >
                    <span className="ml-2">+</span>
                    <span className="text-xs text-center text-white">
                        Post a Job
                    </span>
                </Button>
            </div>
            <div>
                <div className="flex space-x-7 lg:text-sm text-xs">
                    {NavList.map((item) => (
                        <TabLink navLink={NavList} key={item.id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderJob;
