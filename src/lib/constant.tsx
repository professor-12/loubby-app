export const BaseUrl = "https://api.loubby.ai/api/v1/";

export const error_message = {
    password:
        "Invalid Password! Should contain upper and lowercase letters and a number.",
    required: "Required field, Please fill",
    email: "Invalid email format, Please provide a valid email address",
    phone_no: "Phone number is not valid",
    confirm_password: "Please confirm your password",
};

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
