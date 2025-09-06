/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, cloneElement, isValidElement } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium font-barlow transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brand-primary text-white hover:bg-seayeen-600 shadow-sm hover:shadow-md",
        primary: "bg-brand-primary text-white hover:bg-seayeen-600 shadow-sm hover:shadow-md",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border-2 border-brand-primary bg-transparent text-brand-primary hover:bg-brand-primary hover:text-white",
        secondary: "bg-brand-gray text-white hover:bg-seayeen-700",
        ghost: "hover:bg-seayeen-50 hover:text-brand-primary",
        link: "text-brand-primary underline-offset-4 hover:underline hover:text-seayeen-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-sm",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? "span" : "button";
    
    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<any>, {
        className: cn(buttonVariants({ variant, size, className }), (children as any).props.className),
        ref,
        ...props,
      });
    }
    
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props}>
        {children}
      </Comp>
    );
  }
);

Button.displayName = "Button";
