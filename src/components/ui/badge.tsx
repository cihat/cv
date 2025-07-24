import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-nowrap shadow-sm hover:shadow-md print:shadow-none print:bg-gray-100 print:border-gray-300 print:text-gray-700",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-blue-500/25 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
        secondary:
          "border-transparent bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300 shadow-gray-500/10 dark:from-gray-700 dark:to-gray-800 dark:text-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-700 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
        destructive:
          "border-transparent bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-red-500/25 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
        outline: 
          "border-gray-300 bg-transparent text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 print:bg-gray-100 print:border-gray-300 print:text-gray-700",
        success:
          "border-transparent bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-green-500/25 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
        warning:
          "border-transparent bg-gradient-to-r from-yellow-500 to-yellow-600 text-white hover:from-yellow-600 hover:to-yellow-700 shadow-yellow-500/25 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
        info:
          "border-transparent bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-600 hover:to-cyan-700 shadow-cyan-500/25 print:bg-gray-100 print:border-gray-300 print:text-gray-700 print:from-gray-100 print:to-gray-100",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
