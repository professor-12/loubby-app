export const BaseUrl = "https://api.loubby.ai/api/v1/";

export const error_message = {
    password:
        "Invalid Password! Should contain upper and lowercase letters and a number.",
    required: "Required field, Please fill",
    email: "Invalid email format, Please provide a valid email address",
    phone_no: "Phone number is not valid",
    confirm_password: "Please confirm your password",
};

const active = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="18"
        viewBox="0 0 19 18"
        fill="none"
    >
        <path
            d="M6.5 8.16667L9 10.6667L17.3333 2.33333M16.5 9V14.8333C16.5 15.2754 16.3244 15.6993 16.0118 16.0118C15.6993 16.3244 15.2754 16.5 14.8333 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V3.16667C1.5 2.72464 1.67559 2.30072 1.98816 1.98816C2.30072 1.67559 2.72464 1.5 3.16667 1.5H12.3333"
            stroke="#027A48"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
const inactive = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M10.0013 13.3327V9.99935M10.0013 6.66602H10.0096M18.3346 9.99935C18.3346 14.6017 14.6037 18.3327 10.0013 18.3327C5.39893 18.3327 1.66797 14.6017 1.66797 9.99935C1.66797 5.39698 5.39893 1.66602 10.0013 1.66602C14.6037 1.66602 18.3346 5.39698 18.3346 9.99935Z"
            stroke="#C01048"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

const draft = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
    >
        <path
            d="M9.16797 3.33417H3.33464C2.89261 3.33417 2.46868 3.50977 2.15612 3.82233C1.84356 4.13489 1.66797 4.55881 1.66797 5.00084V16.6675C1.66797 17.1095 1.84356 17.5335 2.15612 17.846C2.46868 18.1586 2.89261 18.3342 3.33464 18.3342H15.0013C15.4433 18.3342 15.8673 18.1586 16.1798 17.846C16.4924 17.5335 16.668 17.1095 16.668 16.6675V10.8342M15.418 2.08417C15.7495 1.75265 16.1991 1.56641 16.668 1.56641C17.1368 1.56641 17.5864 1.75265 17.918 2.08417C18.2495 2.41569 18.4357 2.86533 18.4357 3.33417C18.4357 3.80301 18.2495 4.25265 17.918 4.58417L10.0013 12.5008L6.66797 13.3342L7.5013 10.0008L15.418 2.08417Z"
            stroke="#C4320A"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
export const NavList = [
    { name: "Active", id: 0, Svg: active },
    { name: "Inactive", id: 1, Svg: inactive },
    { name: "Draft", id: 2, Svg: draft },
];

export const navLinks = [
    {
        name: "General",
        links: [
            {
                link: "/dashboard",
                img: "/dashboard.svg",
                color: "",
                name: "Dashboard",
            },
            {
                link: "/dashboard/jobs?tab=Active",
                img: "/job.svg",
                color: "",
                name: "Jobs",
            },
            {
                link: "/dashboard/conversations",
                img: "/conversations.svg",
                color: "",
                name: "Conversations",
            },
            {
                link: "/dashboard/onversations",
                img: "/search.svg",
                color: "",
                name: "Talent Marketplace",
            },
            {
                link: "/dashboard/nversations",
                img: "/pipe.svg",
                color: "",
                name: "Pipeline",
            },
            {
                link: "/dashboard/assessment",
                img: "/clock.svg",
                color: "",
                name: "Assesment",
            },
            {
                link: "/dashboard/schedule",
                img: "/schedule.svg",
                color: "",
                name: "Schedule",
            },
        ],
    },
    {
        name: "Support",
        links: [
            {
                link: "/dashboard/settings",
                img: "/settings.svg",
                color: "",
                name: "Settings",
            },
            {
                link: "/dashboard/feedback",
                img: "/feedback.svg",
                color: "",
                name: "Feedback",
            },
        ],
    },
] as const;
