import { currentSalesperson } from "@/lib/data";

export default function About() {
  const person = currentSalesperson;
  return (
    <section className="container mx-auto">
      <div className="px-4 py-[30px] lg:py-[60px]">
        <div className="relative z-20 mx-auto flex w-full flex-col-reverse gap-5 md:block">
          <div className="bg-mainAlt h-max rounded-tr-3xl rounded-bl-3xl p-5 md:float-right md:mt-[-150px] md:ml-10">
            <h2 className="text-clamp-md relative mb-5 text-xl text-white">
              Specialties
              <span className="absolute -bottom-2 left-0 h-1 w-20 rounded-md bg-white" />
            </h2>
            <ul className="flex list-disc flex-col gap-3 p-4">
              {person.specialties.map((specialty, index) => (
                <li key={index} className="text-white md:whitespace-nowrap">
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-clamp-md text-main mb-5 text-3xl">
              About {person.firstName}
            </h2>
            <div className="text-clamp-xs font-body leading-7 tracking-wider">
              {person.bio_long}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
