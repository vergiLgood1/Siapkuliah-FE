import Image from "next/image";
import { Inter } from "next/font/google";
import { cn } from "@/lib/cn";

const font = Inter({
    subsets: ["latin"],
    weight: ["400", "600"],
});

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("flex items-center gap-x-2", className)}>
            <Image
                src="/icons/logo-white.svg"
                width="30"
                height="30"
                alt="Logo"
                className="dark:hidden"
            />
            <Image
                src="/icons/logo-white.svg"
                width="30"
                height="30"
                alt="Logo"
                className="hidden dark:block"
            />
            <p className={cn("font-semibold", font.className)}>
                Siapkuliah
            </p>
        </div>
    );
};
