import { AppLayout } from "@/components/layout/app-layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { 
  FolderOpen, 
  CheckCircle2, 
  Clock, 
  XCircle,
  TrendingUp,
  Plus
} from "lucide-react";
import { mockStats, getRecentProjects } from "@/lib/mock-data";
import Link from "next/link";

export default function DashboardPage() {
  const recentProjects = getRecentProjects(4);

  const stats = [
    {
      title: "总项目数",
      value: mockStats.totalProjects,
      icon: FolderOpen,
      color: "text-neutral-700",
      bgColor: "bg-neutral-100",
    },
    {
      title: "已完成",
      value: mockStats.completedProjects,
      icon: CheckCircle2,
      color: "text-success-600",
      bgColor: "bg-success-50",
    },
    {
      title: "进行中",
      value: mockStats.inProgressProjects,
      icon: Clock,
      color: "text-info-600",
      bgColor: "bg-info-50",
    },
    {
      title: "失败",
      value: mockStats.failedProjects,
      icon: XCircle,
      color: "text-error-600",
      bgColor: "bg-error-50",
    },
  ];

  return (
    <AppLayout title="仪表盘" description="查看您的项目概览和统计信息">
      <div className="space-y-8">
        {/* 统计卡片 */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-neutral-600">
                    {stat.title}
                  </CardTitle>
                  <div className={`rounded-lg p-2 ${stat.bgColor}`}>
                    <Icon className={`h-4 w-4 ${stat.color}`} strokeWidth={2} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-neutral-900">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 快速操作 */}
        <Card>
          <CardHeader>
            <CardTitle>快速开始</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/projects/new">
                  <Plus className="mr-2 h-5 w-5" />
                  创建新项目
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/templates">
                  <FolderOpen className="mr-2 h-5 w-5" />
                  浏览模板
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* 最近项目 */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900">最近项目</h2>
              <p className="text-sm text-neutral-500 mt-1">
                查看您最近更新的项目
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/projects">
                查看全部
                <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {recentProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
                progress={project.progress}
                createdAt={project.createdAt}
                updatedAt={project.updatedAt}
                scriptType={project.scriptType}
              />
            ))}
          </div>

          {recentProjects.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <FolderOpen className="h-12 w-12 text-neutral-400 mb-4" />
                <p className="text-neutral-600 mb-4">还没有项目</p>
                <Button asChild>
                  <Link href="/projects/new">创建第一个项目</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* 使用提示 */}
        <Card className="border-neutral-900 bg-neutral-900">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="rounded-lg bg-white/10 p-3">
              <TrendingUp className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">
                提升效率小贴士
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                使用模板可以快速开始创作，系统会根据您选择的模板自动配置参数和结构。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}