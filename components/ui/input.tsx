import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "bg-background placeholder:text-muted-foreground font-body flex h-10 min-h-[50px] w-full px-3 py-3 text-sm tracking-wider outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium autofill:!bg-white disabled:cursor-not-allowed disabled:opacity-50 lg:text-lg",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
