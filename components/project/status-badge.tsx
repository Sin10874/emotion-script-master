import * as React from "react";
import { Badge, type BadgeProps } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AgentStatus, ProjectStatus } from "@/lib/constants";

interface StatusBadgeProps extends Omit<BadgeProps, "variant"> {
  status: AgentStatus | ProjectStatus | string;
  showDot?: boolean;
}

const STATUS_VARIANT_MAP: Record<string, BadgeProps["variant"]> = {
  // Agent 状态
  pending: "default",
  in_progress: "review",
  completed: "success",
  failed: "error",
  review_pending: "warning",
  // 项目状态
  draft: "default",
  // 其他状态
  ideas: "ideas",
  research: "info",
  outline: "outline",
  drafts: "warning",
  review: "review",
  done: "success",
  approved: "success",
  rejected: "error",
};

const STATUS_LABEL_MAP: Record<string, string> = {
  // Agent 状态
  pending: "待处理",
  in_progress: "进行中",
  completed: "已完成",
  failed: "失败",
  review_pending: "待审核",
  // 项目状态
  draft: "草稿",
  // 其他状态
  ideas: "创意",
  research: "调研",
  outline: "大纲",
  drafts: "草稿",
  review: "审核中",
  done: "完成",
  approved: "已批准",
  rejected: "已拒绝",
};

const DOT_COLOR_MAP: Record<string, string> = {
  pending: "bg-neutral-400",
  in_progress: "bg-review-500",
  completed: "bg-success-500",
  failed: "bg-error-500",
  review_pending: "bg-warning-500",
  draft: "bg-neutral-400",
  ideas: "bg-ideas-500",
  research: "bg-info-500",
  outline: "bg-outline-500",
  drafts: "bg-warning-500",
  review: "bg-review-500",
  done: "bg-success-500",
  approved: "bg-success-500",
  rejected: "bg-error-500",
};

export function StatusBadge({
  status,
  showDot = false,
  className,
  children,
  ...props
}: StatusBadgeProps) {
  const variant = STATUS_VARIANT_MAP[status] || "default";
  const label = children || STATUS_LABEL_MAP[status] || status;
  const dotColor = DOT_COLOR_MAP[status] || "bg-neutral-400";

  return (
    <Badge variant={variant} className={cn("gap-1.5", className)} {...props}>
      {showDot && (
        <span className={cn("h-1.5 w-1.5 rounded-full", dotColor)} />
      )}
      {label}
    </Badge>
  );
}

