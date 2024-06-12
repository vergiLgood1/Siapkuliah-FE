import Image from "next/image";
import { Inter, Manrope } from "next/font/google";
import { cn } from "@/lib/cn";

const font = Manrope({
    subsets: ["latin"],
    weight: ["400", "600"],
});

interface LogoProps {
    className?: string;
}

export const IconBrandItb: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/itb.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/itb.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandPolije: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/polije.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/polije.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandPolinema: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/polinema.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/polinema.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUgm: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/ugm.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/ugm.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUm: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/um.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/um.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUnair: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/unair.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/unair.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUnhas: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/unhas.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/unhas.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUnm: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/unm.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/unm.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUntad: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/untad.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/untad.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUpi: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/upi.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/upi.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};

export const IconBrandUpn: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/upn.svg"
                width="40"
                height="40"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/upn.svg"
                width="40"
                height="40"
                alt="Logo"
                className="hidden dark:block"
            />
        </div>
    );
};
