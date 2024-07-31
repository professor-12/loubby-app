import React, { FC, PropsWithChildren } from "react";

const JobDetails: FC<{ params: { id: string } }> = ({ params }) => {
    console.log(params.id);
    return <div className="py-4">{params.id}</div>;
};

export default JobDetails;
