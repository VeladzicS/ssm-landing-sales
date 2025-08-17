import Image from "next/image";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { currentSalesperson } from "@/lib/data";

export default function Hero() {
  const person = currentSalesperson;

  return (
    <div className="bg-main relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="bg-main pointer-events-none absolute inset-0 z-20 h-full w-full [mask-image:radial-gradient(transparent,white)]" />
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-6 px-4 pt-[120px] pb-[60px] lg:flex-row lg:pb-[120px]">
          <div className="border-mainAlt relative z-20 h-[200px] w-[200px] min-w-[200px] overflow-hidden rounded-full border-4">
            <Image
              src={person.profileImage}
              alt={`${person.fullName} profile image`}
              fill={true}
              fetchPriority="high"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <h1 className="text-clamp-md relative z-20 mb-3 text-3xl text-white lg:text-5xl">
                {person.firstName}
                <span className="bg-mainAlt absolute -bottom-4 left-0 h-1 w-40 rounded-md" />
                <span className="pl-2 text-white">{person.lastName}</span>
              </h1>
              <h2 className="text-mainAlt relative z-20 font-semibold lg:text-xl">
                {person.title}
              </h2>
            </div>

            <p className="relative z-20 leading-relaxed text-white lg:text-lg">
              {person.bio}
            </p>
            <div className="flex flex-col items-start">
              {person.phone && (
                <a
                  href={person.phoneLink}
                  className="group relative z-20 flex items-center gap-2 pb-2"
                  rel="noopener noreferrer"
                >
                  <FaPhone className="hover:text-accent size-4 cursor-pointer text-white transition-colors" />
                  <span className="group-hover:text-mainAlt text-white underline transition-colors">
                    {person.phone}
                  </span>
                </a>
              )}

              {person.email && (
                <a
                  href={person.mailLink}
                  className="group relative z-20 flex items-center gap-2"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="hover:text-mainAlt size-4 cursor-pointer text-white transition-colors" />
                  <span className="group-hover:text-mainAlt text-white underline transition-colors">
                    {person.email}
                  </span>
                </a>
              )}
            </div>

            <div className="flex gap-5">
              {person.socialLinks.linkedin && (
                <a
                  href={person.socialLinks.linkedin}
                  className="relative z-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="hover:text-mainAlt size-8 cursor-pointer text-white transition-colors" />
                </a>
              )}
              {person.socialLinks.facebook && (
                <a
                  href={person.socialLinks.facebook}
                  className="relative z-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="hover:text-mainAlt size-8 cursor-pointer text-white transition-colors" />
                </a>
              )}
              {person.socialLinks.instagram && (
                <a
                  href={person.socialLinks.instagram}
                  className="relative z-20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-mainAlt size-8 cursor-pointer text-white transition-colors" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
