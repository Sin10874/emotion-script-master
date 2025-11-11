import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  CheckCircle2,
  Clock,
  XCircle,
  Circle,
  Download,
  Edit,
  Trash2,
  Calendar,
  FileText,
  Users,
  Timer,
} from "lucide-react";
import {
  getProjectById,
  getAgentStagesByProjectId,
} from "@/lib/mock-data";
import { AGENT_STAGE_NAMES } from "@/lib/constants";
import { formatRelativeTime } from "@/lib/utils";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const project = getProjectById(params.id);
  const agentStages = getAgentStagesByProjectId(params.id);

  if (!project) {
    notFound();
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-success-600" />;
      case "in_progress":
        return <Clock className="h-5 w-5 text-info-600" />;
      case "failed":
        return <XCircle className="h-5 w-5 text-error-600" />;
      default:
        return <Circle className="h-5 w-5 text-neutral-400" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge variant="success">已完成</Badge>;
      case "in_progress":
        return <Badge variant="review">进行中</Badge>;
      case "failed":
        return <Badge variant="error">失败</Badge>;
      case "pending":
        return <Badge variant="default">待处理</Badge>;
      default:
        return <Badge variant="default">{status}</Badge>;
    }
  };

  return (
    <AppLayout title={project.title} description={project.description}>
      <div className="space-y-6">
        {/* 项目信息卡片 */}
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                  {getStatusBadge(project.status)}
                </div>
                <p className="text-neutral-600">{project.description}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/projects/${project.id}/edit`}>
                    <Edit className="mr-2 h-4 w-4" />
                    编辑
                  </Link>
                </Button>
                {project.status === "completed" && (
                  <Button size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    导出
                  </Button>
                )}
                <Button variant="outline" size="sm" className="text-error-600">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 进度条 */}
            {project.status === "in_progress" && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600 font-medium">生成进度</span>
                  <span className="font-semibold text-neutral-900">
                    {project.progress}%
                  </span>
                </div>
                <Progress value={project.progress} />
              </div>
            )}

            <Separator />

            {/* 项目元数据 */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2">
                  <FileText className="h-5 w-5 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">剧本类型</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {project.scriptType}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2">
                  <Timer className="h-5 w-5 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">时长</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {project.duration} 分钟
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2">
                  <Users className="h-5 w-5 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">角色数</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {project.characterCount} 个
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-neutral-100 p-2">
                  <Calendar className="h-5 w-5 text-neutral-700" />
                </div>
                <div>
                  <p className="text-xs text-neutral-500">创建时间</p>
                  <p className="text-sm font-semibold text-neutral-900">
                    {formatRelativeTime(project.createdAt)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Agent 执行阶段 */}
        {agentStages && agentStages.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>执行阶段</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {agentStages.map((stage, index) => (
                  <div key={stage.id}>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(stage.status)}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-neutral-900">
                              {AGENT_STAGE_NAMES[stage.stage]}
                            </h4>
                            {getStatusBadge(stage.status)}
                          </div>
                          {stage.startTime && (
                            <span className="text-xs text-neutral-500">
                              {formatRelativeTime(stage.startTime)}
                            </span>
                          )}
                        </div>
                        {stage.output && (
                          <p className="text-sm text-neutral-600 leading-relaxed">
                            {stage.output}
                          </p>
                        )}
                        {stage.error && (
                          <p className="text-sm text-error-600 leading-relaxed">
                            错误: {stage.error}
                          </p>
                        )}
                      </div>
                    </div>
                    {index < agentStages.length - 1 && (
                      <Separator className="my-4" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </AppLayout>
  );
}