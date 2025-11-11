import type { ProjectStatus, AgentStage, AgentStatus } from "./constants";

/**
 * Mock 项目数据
 */
export interface MockProject {
  id: string;
  title: string;
  description: string;
  status: ProjectStatus;
  progress: number;
  createdAt: string;
  updatedAt: string;
  scriptType: string;
  duration: number;
  characterCount: number;
  sceneCount: number;
  currentStage?: AgentStage;
}

/**
 * Mock Agent 执行阶段数据
 */
export interface MockAgentStage {
  id: string;
  stage: AgentStage;
  status: AgentStatus;
  startTime?: string;
  endTime?: string;
  output?: string;
  error?: string;
}

/**
 * Mock 项目列表
 */
export const mockProjects: MockProject[] = [
  {
    id: "proj_001",
    title: "婆媳矛盾剧本",
    description: "一个关于现代家庭婆媳关系的情感剧本，探讨代际沟通与理解",
    status: "completed",
    progress: 100,
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:45:00Z",
    scriptType: "情感剧",
    duration: 45,
    characterCount: 3,
    sceneCount: 6,
  },
  {
    id: "proj_002",
    title: "职场励志故事",
    description: "讲述年轻人在职场中成长的励志故事",
    status: "in_progress",
    progress: 65,
    createdAt: "2024-01-16T09:00:00Z",
    updatedAt: "2024-01-16T11:30:00Z",
    scriptType: "励志剧",
    duration: 50,
    characterCount: 4,
    sceneCount: 7,
    currentStage: "agent_6_scene_creation",
  },
  {
    id: "proj_003",
    title: "校园青春回忆",
    description: "回忆青春校园时光的温馨故事",
    status: "draft",
    progress: 0,
    createdAt: "2024-01-17T08:00:00Z",
    updatedAt: "2024-01-17T08:00:00Z",
    scriptType: "青春剧",
    duration: 40,
    characterCount: 5,
    sceneCount: 6,
  },
  {
    id: "proj_004",
    title: "创业艰辛路",
    description: "展现创业者的奋斗历程和心路历程",
    status: "in_progress",
    progress: 35,
    createdAt: "2024-01-17T10:00:00Z",
    updatedAt: "2024-01-17T12:00:00Z",
    scriptType: "励志剧",
    duration: 55,
    characterCount: 4,
    sceneCount: 8,
    currentStage: "agent_4_outline_creation",
  },
  {
    id: "proj_005",
    title: "邻里温情故事",
    description: "讲述邻里之间互帮互助的温馨故事",
    status: "completed",
    progress: 100,
    createdAt: "2024-01-14T14:00:00Z",
    updatedAt: "2024-01-14T18:30:00Z",
    scriptType: "情感剧",
    duration: 35,
    characterCount: 3,
    sceneCount: 5,
  },
  {
    id: "proj_006",
    title: "医患情深",
    description: "医生与患者之间的感人故事",
    status: "failed",
    progress: 45,
    createdAt: "2024-01-13T09:00:00Z",
    updatedAt: "2024-01-13T11:00:00Z",
    scriptType: "情感剧",
    duration: 45,
    characterCount: 4,
    sceneCount: 6,
  },
];

/**
 * Mock Agent 执行阶段数据
 */
export const mockAgentStages: Record<string, MockAgentStage[]> = {
  proj_002: [
    {
      id: "stage_001",
      stage: "agent_1_idea_evaluation",
      status: "completed",
      startTime: "2024-01-16T09:00:00Z",
      endTime: "2024-01-16T09:05:00Z",
      output: "创意评估完成，主题明确，具有较强的观众吸引力",
    },
    {
      id: "stage_002",
      stage: "agent_2_parameter_config",
      status: "completed",
      startTime: "2024-01-16T09:05:00Z",
      endTime: "2024-01-16T09:10:00Z",
      output: "参数配置完成：时长50分钟，4个角色，7个场景",
    },
    {
      id: "stage_003",
      stage: "agent_3_structure_design",
      status: "completed",
      startTime: "2024-01-16T09:10:00Z",
      endTime: "2024-01-16T09:20:00Z",
      output: "剧本结构设计完成，采用三幕式结构",
    },
    {
      id: "stage_004",
      stage: "agent_4_outline_creation",
      status: "completed",
      startTime: "2024-01-16T09:20:00Z",
      endTime: "2024-01-16T09:35:00Z",
      output: "大纲创作完成，包含7个主要场景",
    },
    {
      id: "stage_005",
      stage: "agent_5_outline_review",
      status: "completed",
      startTime: "2024-01-16T09:35:00Z",
      endTime: "2024-01-16T09:40:00Z",
      output: "大纲审核通过，结构合理，情节连贯",
    },
    {
      id: "stage_006",
      stage: "agent_6_scene_creation",
      status: "in_progress",
      startTime: "2024-01-16T09:40:00Z",
      output: "正在创作第4个场景...",
    },
    {
      id: "stage_007",
      stage: "agent_7_transition",
      status: "pending",
    },
    {
      id: "stage_008",
      stage: "agent_8_script_assembly",
      status: "pending",
    },
    {
      id: "stage_009",
      stage: "agent_9_overall_review",
      status: "pending",
    },
    {
      id: "stage_010",
      stage: "agent_10_optimization",
      status: "pending",
    },
    {
      id: "stage_011",
      stage: "agent_11_actor_adaptation",
      status: "pending",
    },
    {
      id: "stage_012",
      stage: "agent_12_version_generation",
      status: "pending",
    },
  ],
};

/**
 * Mock 统计数据
 */
export interface MockStats {
  totalProjects: number;
  completedProjects: number;
  inProgressProjects: number;
  failedProjects: number;
  totalScripts: number;
  averageCompletionTime: number;
}

export const mockStats: MockStats = {
  totalProjects: 6,
  completedProjects: 2,
  inProgressProjects: 2,
  failedProjects: 1,
  totalScripts: 2,
  averageCompletionTime: 4.5,
};

/**
 * 根据 ID 获取项目
 */
export function getProjectById(id: string): MockProject | undefined {
  return mockProjects.find((p) => p.id === id);
}

/**
 * 根据项目 ID 获取 Agent 阶段
 */
export function getAgentStagesByProjectId(
  projectId: string
): MockAgentStage[] | undefined {
  return mockAgentStages[projectId];
}

/**
 * 获取最近的项目
 */
export function getRecentProjects(limit: number = 5): MockProject[] {
  return mockProjects
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    )
    .slice(0, limit);
}

/**
 * 根据状态筛选项目
 */
export function getProjectsByStatus(status: ProjectStatus): MockProject[] {
  return mockProjects.filter((p) => p.status === status);
}