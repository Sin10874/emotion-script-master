import { AppLayout } from "@/components/layout/app-layout";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Filter } from "lucide-react";
import { mockProjects, getProjectsByStatus } from "@/lib/mock-data";
import Link from "next/link";

export default function ProjectsPage() {
  const allProjects = mockProjects;
  const inProgressProjects = getProjectsByStatus("in_progress");
  const completedProjects = getProjectsByStatus("completed");
  const draftProjects = getProjectsByStatus("draft");

  return (
    <AppLayout 
      title="我的项目" 
      description="管理和查看您的所有剧本项目"
    >
      <div className="space-y-6">
        {/* 操作栏 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="mr-2 h-4 w-4" />
              筛选
            </Button>
          </div>
          <Button asChild>
            <Link href="/projects/new">
              <Plus className="mr-2 h-5 w-5" />
              创建项目
            </Link>
          </Button>
        </div>

        {/* 项目标签页 */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList>
            <TabsTrigger value="all">
              全部 ({allProjects.length})
            </TabsTrigger>
            <TabsTrigger value="in_progress">
              进行中 ({inProgressProjects.length})
            </TabsTrigger>
            <TabsTrigger value="completed">
              已完成 ({completedProjects.length})
            </TabsTrigger>
            <TabsTrigger value="draft">
              草稿 ({draftProjects.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {allProjects.map((project) => (
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
          </TabsContent>

          <TabsContent value="in_progress" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {inProgressProjects.map((project) => (
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
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {completedProjects.map((project) => (
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
          </TabsContent>

          <TabsContent value="draft" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {draftProjects.map((project) => (
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
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}