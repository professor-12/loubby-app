import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
    return (
        <div className="grid w-full xl:grid-cols-4 gap-12 justify-evenly lg:grid-cols-2 md:gird-cols-3 grid-cols-1">
            {new Array(10).fill(null).map((_, i) => {
                return (
                    <div key={i} className="space-y-1">
                        {" "}
                        <div>
                            <Skeleton
                                height={30}
                                width={"40%"}
                                borderRadius={8}
                            />
                        </div>
                        <div>
                            <Skeleton
                                height={30}
                                width={"70%"}
                                borderRadius={8}
                            />
                        </div>
                        <div>
                            <Skeleton
                                height={30}
                                width={"100%"}
                                borderRadius={8}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Loading;

const LoadingCard = () => {
    return (
        <>
            <Skeleton height={30} width={30} borderRadius={12} />
            <Skeleton height={30} width={38} borderRadius={12} />
            <Skeleton height={38} width={38} borderRadius={12} />
        </>
    );
};
