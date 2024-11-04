import {GroupProps, MeshProps} from "@react-three/fiber";
import {z} from "zod";

export interface NavLinks {
    id: number,
    name: string,
    href: string
}

export interface Projects {
    title: string,
    desc: string,
    subdesc: string,
    github?: string,
    href?: string,
    texture: string,
    logo?: string,
    logoStyle?: {
        background?: string, backgroundColor: string, border: string, boxShadow: string,
    },
    spotlight: string,
    tags: {
        id: number,
        name: string,
        path: string
    }[]
}

export enum Animations {
    victory = "victory",
    clapping = "clapping",
    salute = "salute",
    stand = "stand",
    sitting = "sitting",
}

export interface WorkExperiences {
    id: number,
    name: string,
    pos: string,
    duration: string,
    description: string,
    icon: string,
    tech: Projects['tags']
    animation: Animations
}

export interface ExtendedMesh extends MeshProps {
    position?: [number, number, number],
}

export interface propTxt extends GroupProps {
    texture?: string
}

export interface formFieldsProps {
    name: string,
    register: string
    type: string,
    placeholder: string,
}

export const formSchema = z.object({
    name: z.string().min(1, "Full Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});
export type FormData = z.infer<typeof formSchema>;

export interface socialProps {
    name: string;
    icon: string;
    link:string;
}