import * as React from "react";

import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "ring-offset-background placeholder:text-muted-foreground flex min-h-[80px] w-full px-3 py-2 text-sm tracking-wider focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 lg:text-lg",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
