import { currentSalesperson } from "@/lib/data";
import ProfileForm from "@/components/common/profile-form";

export default function ContactSection() {
  const person = currentSalesperson;
  return (
    <section className="container mx-auto bg-white py-15">
      <div className="flex w-full flex-col justify-between gap-8 px-4 md:flex-row md:gap-20">
        <div className="flex flex-1 flex-col gap-3 leading-7">
          <h2 className="text-clamp-md text-main mb-4 text-2xl">
            Interested in working with {person.firstName}
          </h2>
          <p className="font-body tracking-wider">
            We are always excited to explore new opportunities and collaborate
            with innovative partners. {person.firstName} is dedicated to
            fostering mutually beneficial relationships that drive growth and
            success for all parties involved.
          </p>
        </div>
        <ProfileForm
          className="xs:p-0 flex-1 p-0 shadow-none md:p-0 lg:p-0"
          formTitle="LET'S TALK"
        />
      </div>
    </section>
  );
}
