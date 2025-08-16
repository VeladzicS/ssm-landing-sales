"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { HiOutlineEnvelope, HiOutlineUser } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineSubtitles } from "react-icons/md";
import { GiPencil } from "react-icons/gi";
import { PiIdentificationBadgeLight } from "react-icons/pi";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FaPaperPlane } from "react-icons/fa6";
import { TContactFormSchema, contactFormSchema } from "@/lib/types";
import { cn } from "@/lib/utils";

type ProfileFormProps = {
  formTitle: string;
  className?: string;
};

export default function ProfileForm({
  formTitle,
  className,
}: ProfileFormProps) {
  const form = useForm<TContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const {
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (formData: TContactFormSchema) => {
    console.log(FormData);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn(
          "xs:px-14 xs:py-16 bg-white p-5 shadow-lg lg:px-20 lg:py-28",
          className,
        )}
      >
        <p className="text-clamp-md mb-5 font-semibold text-[#131c26]">
          {formTitle}
        </p>

        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.firstName ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <HiOutlineUser className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="Your First Name"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.firstName
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.lastName ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <PiIdentificationBadgeLight className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="Your Last Name"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.lastName
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.email ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <HiOutlineEnvelope className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="example@outlook.com"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.email
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.phone ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <FiPhoneCall className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="+1 (123) 456-7980"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.phone
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.subject ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <MdOutlineSubtitles className="size-6 font-thin text-black/30" />
                </FormLabel>
                <FormControl>
                  <Input
                    className="text-sm"
                    placeholder="Message Subject"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.subject
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="group flex min-h-[80px] flex-col">
              <div
                className={`relative flex items-center border-b ${
                  errors.message ? "border-rose-600" : "border-gray-300"
                }`}
              >
                <FormLabel>
                  <GiPencil className="size-6 font-thin text-black/40" />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="text-sm"
                    placeholder="How can we help you? Feel free to get in touch!"
                    {...field}
                  />
                </FormControl>
                <span
                  className={`${
                    errors.message
                      ? "hidden"
                      : "absolute bottom-[-0.5px] left-0 h-px w-0 bg-black transition-all duration-500 group-focus-within:w-full group-hover:w-full"
                  } `}
                ></span>
              </div>
              <FormMessage className="font-light text-rose-600" />
            </FormItem>
          )}
        />

        <Button
          disabled={isSubmitting}
          type="submit"
          className="group bg-main relative mt-10 flex min-h-14 items-center justify-center gap-2 rounded-none px-5 text-white uppercase transition-all"
        >
          <FaPaperPlane className="size-1/3 text-white" />
          Get in Touch
        </Button>
      </form>
    </Form>
  );
}
