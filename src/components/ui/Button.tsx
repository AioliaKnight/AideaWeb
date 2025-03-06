import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        primary: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
        secondary: 'bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-gray-500',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        white: 'bg-white text-gray-900 hover:bg-gray-50 focus-visible:ring-gray-500',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, variant, size, ...props }, ref) => {
  const buttonClassName = cn(buttonVariants({ variant, size, className }));

  if (props.href) {
    return (
      <Link
        href={props.href}
        className={buttonClassName}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={buttonClassName}
      ref={ref}
      {...props}
    >
      {props.children}
    </button>
  );
});

Button.displayName = 'Button';

export { buttonVariants };
export default Button; 