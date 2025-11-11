import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium transition-colors border",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-700 border-neutral-200",
        success: "bg-success-50 text-success-700 border-success-200",
        warning: "bg-warning-50 text-warning-700 border-warning-200",
        error: "bg-error-50 text-error-700 border-error-200",
        info: "bg-info-50 text-info-700 border-info-200",
        ideas: "bg-ideas-50 text-ideas-700 border-ideas-200",
        outline: "bg-outline-50 text-outline-700 border-outline-200",
        review: "bg-review-50 text-review-700 border-review-200",
      },
      size: {
        sm: "text-xs px-2.5 py-1",
        md: "text-sm px-3 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

