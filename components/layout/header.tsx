import Image from "next/image";

export default function Header() {
    return(
        <header className="fixed left-0 top-0 w-full  z-50">
            <div className="w-full flex justify-center items-center py-3">
                <Image src="/ssm-logo.png" alt="Logo" width={280} height={71} priority={true} className="object-contain"/>
            </div>
        </header>
    )
}