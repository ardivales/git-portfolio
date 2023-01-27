import {MapPinIcon} from "@heroicons/react/24/solid";
import {BuildingOfficeIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {DevIcon, GithubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "./components/utils";
import moment from "moment";

const config = {
    profile: {
        username: "ardivales",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Bénin"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.dmdsatis.com/",
                data: {
                    text: "Company",
                    value: "Label Trust"
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/ardivales",
                data: {
                    text: "GitHub",
                    value: "ardivales"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "https://twitter.com/ardivales",
                data: {
                    text: "Twitter",
                    value: "ardivales"
                },
                icon: (<TwitterIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.linkedin.com/in/herval-noumonvi-b4a844169/",
                data: {
                    text: "LinkedIn",
                    value: "Herval NOUMONVI"
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:herval80@gmail.com",
                data: {
                    text: "Email",
                    value: "herval80@gmail.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["PHP", "Phalcon", "Java", "Spring Boot", "Wordpress", "Woocommerce", "MySQL", "Postgres", "Git", "Dockers"],
        experience: [
            {
                period: "January 2022 - Today",
                position: "Full-stack Developer",
                institution: "Label Trust"
            },
            {
                period: "August 2022 - November 2022",
                position: "Backend Developer | Internship",
                institution: "Africa Stream"
            },
            {
                period: "January 2021 - Today",
                position: "Backend Developer | Freelance",
                institution: "Bloom Insurance"
            },
            {
                period: "January 2021 - Today",
                position: "Backend Developer | Freelance",
                institution: "Numesond"
            },
            {
                period: "January 2019 - Today",
                position: "Full-stack Developer | Freelance",
                institution: "Ophthalmologic clinic La compassion"
            },
            {
                period: "January 2019 - Today",
                position: "Backend Developer | Freelance",
                institution: "Eugenio Synergie"
            },
            {
                period: "November 2018 - October 2022",
                position: "Backend Developer",
                institution: "Orion Origin"
            },
        ],
        eduction: [
            {
                period: "2021 - Today",
                position: "Master's Degree 1 in Information Technology",
                institution: "Higher School of Computer Science and Management. Cotonou, Bénin"
            },
            {
                period: "2016 - 2019",
                position: "Bachelor in Information Technology",
                institution: "Higher School of Computer Science and Management. Cotonou, Bénin"
            }
        ],
        tryProjects: [
            {
                image: "bloom_insurance_logo.svg",
                link: "https://bloom.bj/",
                title: "Bloom Insurance App",
                description: "Pricing insurance products online and purchasing insurance online with the option of receiving insurance documents by email or express delivery.",
                date: "Still in development",
                techStack: ["HTML", "JavaScript", "PHP", "Phalcon", "MysQL"]
            },
            {
                image: "vf-logo.png",
                link: "https://viefacile.org/",
                title: "Mobile service network",
                description: "Offers several telephone services.",
                date: moment(new Date("2022-01-10"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "JavaScript", "PHP", "Phalcon", "MysQL"]
            },
            {
                image: "logo.svg",
                link: "http://frontend.lacompassion.drtoho.com/lacompassion-frontend/public/users.html",
                title: "La compassion",
                description: "Management of an ophthalmology clinic.",
                date: "Still in development",
                techStack: ["Spring Boot", "React", "HTML", "Dockers", "AWS", "Postgres"]
            },
            {
                image: "screenshot-2.png",
                link: "https://wordpress.org/plugins/allada-tshirt-designer-for-woocommerce/",
                title: "Custom Product Designer for T-shirt personalization and design",
                description: "Allada, our custom t-shirt designer plugin for woocommerce, was specifically designed for custom t-shirt businesses only. Nothing more, nothing less.",
                date: moment(new Date("2021-12-30"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "PHP", "HTML", "Wordpress", "Woocommerce"]
            },
        ]
    }
};

export default config