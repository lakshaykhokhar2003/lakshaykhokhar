import {formFieldsProps, socialProps} from "./types";
import {AnimationClip} from "three";
import {ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export const renderInput = (field: formFieldsProps, register: any, errors:  any) => {
    switch (field.type) {
        case 'textarea':
            return (<label className="space-y-3">
                <span className="field-label">{field.name}</span>
                <textarea
                    {...register(field.register)}
                    rows={5}
                    className={`field-input ${errors[field.register] && 'border-red-500'}`}
                    placeholder={field.placeholder}
                />
            </label>)
        default:
            return (<label className="space-y-3">
                    <span className="field-label">{field.name}</span>
                    <input
                        type={field.type}
                        {...register(field.register)}
                        className={`field-input ${errors[field.register] && 'border-red-500'}`}
                        placeholder={field.placeholder}
                    />
                </label>
            )
    }
}

export const renameTracks = (animation: AnimationClip) => {
    animation.tracks.forEach((track) => {
        track.name = track.name.replace('mixamorig', '');
    });
};

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const slugs:string[] = [
    "react",
    "nextdotjs",
    "nodedotjs",
    "mongodb",
    "mysql",
    "postgresql",
    "express",
    "prisma",
    "twilio",
    "clerk",
    "cloudinary",
    "appwrite",
    "firebase",
    "reactquery",
    "amazonaws",
    "threedotjs",
    "tailwindcss",
    "framer",
    "zod",
    "reacthookform",
    "shadcnui",
    "mui",
    "bootstrap",
    "redux",
    "vercel",
    "git",
    "github",
    "webstorm",
    // "figma",
    "typescript",
    "javascript",
    "html5",
    "css3",
]

export const socials:socialProps[]= [
    {
        name: "Github",
        icon: "/assets/github.svg",
        link: "https://github.com/lakshaykhokhar2003",
    },{
        name: "LinkedIn",
        icon: "/assets/linkedin.svg",
        link: "https://www.linkedin.com/in/lakshay-khokhar-a5242212a",
    },{
        name: "Instagram",
        icon: "/assets/instagram.svg",
        link: "https://www.instagram.com/lakshay__khokhar/",
    }]
