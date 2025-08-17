import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="flex w-full items-center justify-center py-3">
        <Image
          src="/ssm-logo.png"
          alt="Logo"
          width={280}
          height={71}
          priority={true}
          className="object-contain brightness-0 invert"
        />
      </div>
    </header>
  );
}
