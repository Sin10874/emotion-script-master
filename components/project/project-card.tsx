import * as React from "react";
import Link from "next/link";
import { MoreVertical, FileText, Calendar, TrendingUp } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { formatRelativeTime } from "@/lib/utils";
import type { ProjectStatus } from "@/lib/constants";

interface ProjectCardProps {
  id: string;
  title: string;
  description?: string;
  status: ProjectStatus;
  progress: number;
  createdAt: Date | string;
  updatedAt?: Date | string;
  scriptType?: string;
  className?: string;
  onDelete?: (id: string) => void;
  onDuplicate?: (id: string) => void;
  onExport?: (id: string) => void;
}

const STATUS_CONFIG = {
  draft: { label: "草稿", variant: "default" as const },
  in_progress: { label: "生成中", variant: "review" as const },
  completed: { label: "已完成", variant: "success" as const },
  failed: { label: "失败", variant: "error" as const },
};

export function ProjectCard({
  id,
  title,
  description,
  status,
  progress,
  createdAt,
  updatedAt,
  scriptType,
  className,
  onDelete,
  onDuplicate,
  onExport,
}: ProjectCardProps) {
  const statusConfig = STATUS_CONFIG[status] || STATUS_CONFIG.draft;

  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 space-y-2">
            <Link
              href={`/projects/${id}`}
              className="hover:text-neutral-700 transition-colors"
            >
              <CardTitle className="line-clamp-1 text-lg font-bold">{title}</CardTitle>
            </Link>
            {description && (
              <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                {description}
              </p>
            )}
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="h-auto w-auto p-2 -mr-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <MoreVertical className="h-5 w-5" strokeWidth={2} />
                <span className="sr-only">更多操作</span>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href={`/projects/${id}`}>查看详情</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href={`/projects/${id}/edit`}>编辑</Link>
              </DropdownMenuItem>
              {onDuplicate && (
                <DropdownMenuItem onClick={() => onDuplicate(id)}>
                  复制项目
                </DropdownMenuItem>
              )}
              {onExport && status === "completed" && (
                <DropdownMenuItem onClick={() => onExport(id)}>
                  导出剧本
                </DropdownMenuItem>
              )}
              {onDelete && (
                <DropdownMenuItem
                  onClick={() => onDelete(id)}
                  className="text-error-600"
                >
                  删除
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 进度条区域 - 保持固定高度 */}
        <div className="min-h-[44px]">
          {status === "in_progress" && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-neutral-500 font-medium">生成进度</span>
                <span className="font-semibold text-neutral-700">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
          )}
        </div>

        {/* 元数据 */}
        <div className="flex items-center gap-4 text-xs text-neutral-500">
          {scriptType && (
            <div className="flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" strokeWidth={2} />
              <span className="font-medium">{scriptType}</span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" strokeWidth={2} />
            <span className="font-medium">{formatRelativeTime(createdAt)}</span>
          </div>
          {status === "in_progress" && (
            <div className="flex items-center gap-1.5 text-neutral-700">
              <TrendingUp className="h-3.5 w-3.5" strokeWidth={2} />
              <span className="font-medium">进行中</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <Badge variant={statusConfig.variant} size="md">{statusConfig.label}</Badge>
        <Button variant="ghost" size="sm" className="text-neutral-700 hover:text-neutral-900" asChild>
          <Link href={`/projects/${id}`}>查看详情</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

