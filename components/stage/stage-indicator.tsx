import * as React from "react";
import { Check, Clock, AlertCircle, Loader2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { AgentStatus } from "@/lib/constants";

interface StageIndicatorProps {
  stage: string;
  stageName: string;
  status: AgentStatus;
  completedAt?: Date | string;
  className?: string;
}

interface StatusConfig {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  animate?: boolean;
}

const STATUS_CONFIG: Record<AgentStatus, StatusConfig> = {
  pending: {
    icon: Clock,
    color: "text-neutral-400",
    bgColor: "bg-neutral-100",
  },
  in_progress: {
    icon: Loader2,
    color: "text-review-600",
    bgColor: "bg-review-100",
    animate: true,
  },
  completed: {
    icon: Check,
    color: "text-success-600",
    bgColor: "bg-success-100",
  },
  failed: {
    icon: AlertCircle,
    color: "text-error-600",
    bgColor: "bg-error-100",
  },
  review_pending: {
    icon: Clock,
    color: "text-warning-600",
    bgColor: "bg-warning-100",
  },
};

export function StageIndicator({
  stage,
  stageName,
  status,
  completedAt,
  className,
}: StageIndicatorProps) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG.pending;
  const Icon = config.icon;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      {/* 图标 */}
      <div
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full",
          config.bgColor
        )}
      >
        <Icon
          className={cn(
            "h-5 w-5",
            config.color,
            config.animate && "animate-spin"
          )}
        />
      </div>

      {/* 信息 */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-900 truncate">
          {stageName}
        </p>
        <p className="text-xs text-neutral-500">
          {status === "completed" && completedAt
            ? `完成于 ${new Date(completedAt).toLocaleString("zh-CN")}`
            : status === "in_progress"
            ? "正在执行..."
            : status === "failed"
            ? "执行失败"
            : status === "review_pending"
            ? "等待审核"
            : "等待执行"}
        </p>
      </div>
    </div>
  );
}

interface StageTimelineProps {
  stages: Array<{
    stage: string;
    stageName: string;
    status: AgentStatus;
    completedAt?: Date | string;
  }>;
  className?: string;
}

export function StageTimeline({ stages, className }: StageTimelineProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {stages.map((stageData, index) => (
        <div key={stageData.stage} className="relative">
          {/* 连接线 */}
          {index < stages.length - 1 && (
            <div
              className={cn(
                "absolute left-5 top-10 h-full w-0.5",
                stageData.status === "completed"
                  ? "bg-success-200"
                  : "bg-neutral-200"
              )}
            />
          )}

          {/* 阶段指示器 */}
          <StageIndicator {...stageData} />
        </div>
      ))}
    </div>
  );
}

