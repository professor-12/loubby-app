"use client";
import React, {
    PropsWithChildren,
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState,
} from "react";

const initialStore = {
    route: {
        isNavOpen: false,
        isMobileSidebarOpen: false,
        isSecondSideBarOpen: true,
        isSecondSideBarOpenMobile: true,
        userAuthenticated: true,
    },
};

const Store = createContext({});

const StoreReducer = (state: {}, action: any) => {
    switch (action) {
        case "":
            break;
    }
};

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
    const [store, dispatch] = useReducer<any>(StoreReducer, initialStore);
    const [deviceWidth, setDeviceWidth] = useState(0);

    useEffect(() => {
        const loubby = localStorage.getItem("loubby");
        if (!loubby) return;
    }, []);


    
    addEventListener("resize", () => {
        setDeviceWidth(window.innerWidth);
    });

    useEffect(() => {
        // console.log(deviceWidth);

        return () => {
            removeEventListener("resize", () => {
                setDeviceWidth(window.innerWidth);
            });
        };
    }, [deviceWidth]);

    return <Store.Provider value={{ store }}>{children}</Store.Provider>;
};

export default StoreProvider;

// {

//     "test_in_progress": {
//         "responses": [],
//         "questions": [],
//         "time": "",
//         "reminder": 1
//     },
//     "fair": {
//         "position": 0,
//         "attendee": []
//     },
//     "preference": {
//         "preference": {
//             "_id": "66295d711c6aec537c13b906",
//             "user": "661e9a5084f434d5613d5380",
//             "componentView": "cardView",
//             "paginationNumber": 120,
//             "createdAt": "2024-04-24T19:28:49.840Z",
//             "updatedAt": "2024-04-26T17:09:45.894Z",
//             "__v": 0,
//             "id": "66295d711c6aec537c13b906"
//         }
//     }
// }
