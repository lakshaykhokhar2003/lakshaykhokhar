import {Animations, formFieldsProps, NavLinks, Projects, WorkExperiences} from "../../utils/types.ts";

export const navLinks: NavLinks[] = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];


export const myProjects: Projects[] = [
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project1.mp4',
        // logoStyle: {
        //     backgroundColor: '#60f5a1',
        //     background:
        //         'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        //     border: '0.2px solid rgba(208, 213, 221, 1)',
        //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        // },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/next.svg',
            },
            {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 3,
                name: 'Node.js',
                path: '/assets/node.svg',
            },
            {
                id: 4,
                name: 'Appwrite',
                path: '/assets/appwrite.png',
            },
            {
                id: 5,
                name: 'Twilio',
                path: '/assets/twilio.png',
            },
            {
                id: 6,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
            {
                id: 7,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 8,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },

        ],
    },
    {
        title: 'Social Media App',
        desc: 'An innovative social media platform designed to provide a seamless and engaging user experience. It simplifies user authentication, profile management, and real-time interactions such as post creation, likes, and comments, creating an Instagram-like environment for social connectivity.',
        subdesc: 'With a focus on user experience, it integrates React, Firebase, MongoDB, and Material UI for a responsive interface, and uses RESTful APIs for smooth interactions.',
        href: 'https://lakshay-khokhar-algobulls.vercel.app',
        texture: '/textures/project/project2.mp4',
        // logoStyle: {
        //     backgroundColor: '#2A1816',
        //     border: '0.2px solid #36201D',
        //     boxShadow: '0px 0px 60px 0px #AA3C304D',
        // },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'Firebase',
                path: '/assets/firebase.png',
            },
            {
                id: 3,
                name: 'Ant Design',
                path: '/assets/ant-design.png',
            }, {
                id: 4,
                name: 'Redux',
                path: '/assets/redux.png',
            }, {
                id: 5,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            }]
    },
    {
        title: 'YelpCamp',
        desc: 'An innovative platform designed to simplify the sharing and reviewing of campgrounds. It allows users to effortlessly explore, share, and review campgrounds while managing content with full CRUD functionality.',
        subdesc: 'It integrates Mapbox for location services and Cloudinary for image uploads, while ensuring secure user authentication with Node.js, Express.js, and MongoDB.',
        href: 'https://yelp-camp-frontend-phi.vercel.app',
        texture: '/textures/project/project3.mp4',
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            }, {
                id: 2,
                name: 'Node.js',
                path: '/assets/node.svg',
            }, {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongo.svg',
            }, {
                id: 4,
                name: 'Express.js',
                path: '/assets/express.svg',
            }, {
                id: 5,
                name: 'Mapbox',
                path: '/assets/mapbox.png',
            }, {
                id: 6,
                name: 'Cloudinary',
                path: '/assets/cloudinary.png',
            }, {
                id: 7,
                name: 'Bootstrap',
                path: '/assets/bootstrap.svg',
            }, {
                id: 8,
                name: 'Redux',
                path: '/assets/redux.png',
            }
        ]
    },
    {
        title:'Expense Tracker',
        desc:'An intuitive platform designed to help users track monthly bills and ensure timely payments.',
        subdesc:'With a focus on financial management, it integrates Razorpay for seamless payment processing, empowering users to manage their expenses effectively while providing a user-friendly experience built with modern web technologies.',
        github:'https://github.com/lakshaykhokhar2003/Expenses',
        texture:'/textures/project/project4.mp4',
        spotlight:'/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            }, {
                id: 2,
                name: 'Node.js',
                path: '/assets/node.svg',
            }, {
                id: 3,
                name: 'MongoDB',
                path: '/assets/mongo.svg',
            }, {
                id: 4,
                name: 'Express.js',
                path: '/assets/express.svg',
            }, {
                id: 5,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            }
        ]
    }
];

export const calculateSizes = (isSmall: boolean, isMobile: boolean, isTablet: boolean) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences: WorkExperiences[] = [
    {
        id: 1,
        name: 'Codenox',
        pos: 'Next.js Developer',
        duration: 'July - Present',
        description: 'At Codenox, I specialize in Next.js development, creating high-performance web applications for clients. I work closely with the design team to implement pixel-perfect designs, ensuring that the final product meets the client’s expectations.',
        tech: [
            {
                id: 1,
                name: 'Next.js',
                path: '/assets/next.svg',
            }, {
                id: 2,
                name: 'React.js',
                path: '/assets/react.svg',
            }, {
                id: 3,
                name: 'Google Maps',
                path: '/assets/googlemaps.png',
            }, {
                id: 4,
                name: 'Tailwind',
                path: '/assets/tailwindcss.png',
            }, {
                id: 5,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            }, {
                id: 6,
                name: 'Redux',
                path: '/assets/redux.png',
            }, {
                id: 7,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            }],
        icon: '/assets/codenox.jpg',
        animation: Animations.stand,
    },
    {
        id: 2,
        name: 'Digital Ipsum',
        pos: 'Full Stack Developer',
        duration: 'March - June 2024',
        description: 'Digital Ipsum was my first professional experience in full stack development. I worked on various projects, gaining hands-on experience with MySQL, Node.js, and React. I also collaborated with senior developers to build and deploy web applications.',
        tech: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            }, {
                id: 2,
                name: 'Node.js',
                path: '/assets/node.svg',
            }, {
                id: 3,
                name: 'MySQL',
                path: '/assets/mysql.svg',
            }, {
                id: 4,
                name: 'Express.js',
                path: '/assets/express.svg',
            }, {
                id: 5,
                name: 'Tailwind',
                path: '/assets/tailwindcss.png',
            }, {
                id: 6,
                name: 'Material UI',
                path: '/assets/mui.png',
            }, {
                id: 7,
                name: 'ShadCN-UI',
                path: '/assets/shadcn.png',
            }, {
                id: 8,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            }
        ],
        icon: '/assets/digitalipsum.jpg',
        animation: Animations.sitting,
    }
];

export const formFields: formFieldsProps[] = [
    {
        name: 'Full Name',
        register: 'name',
        type: 'text',
        placeholder: 'ex., John Doe',
    }, {
        name: 'Email address',
        register: 'email',
        type: 'email',
        placeholder: 'ex., johndoe@gmail.com',
    }, {
        name: 'Your message',
        register: 'message',
        type: 'textarea',
        placeholder: 'Share your thoughts or inquiries...',
    }]

export const privateKey = import.meta.env.VITE_APP_EMAILJS_USER_KEY;
export const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
export const receiverEmail = import.meta.env.VITE_APP_EMAILJS_RECEIVER_ID;
export const receiverName = import.meta.env.VITE_APP_EMAILJS_RECEIVER_NAME;
export const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;