/**
 * 项目状态
 */
export const PROJECT_STATUS = {
  DRAFT: "draft",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  FAILED: "failed",
} as const;

export type ProjectStatus = (typeof PROJECT_STATUS)[keyof typeof PROJECT_STATUS];

/**
 * Agent 执行阶段
 */
export const AGENT_STAGES = {
  IDEA_EVALUATION: "agent_1_idea_evaluation",
  PARAMETER_CONFIG: "agent_2_parameter_config",
  STRUCTURE_DESIGN: "agent_3_structure_design",
  OUTLINE_CREATION: "agent_4_outline_creation",
  OUTLINE_REVIEW: "agent_5_outline_review",
  SCENE_CREATION: "agent_6_scene_creation",
  TRANSITION: "agent_7_transition",
  SCRIPT_ASSEMBLY: "agent_8_script_assembly",
  OVERALL_REVIEW: "agent_9_overall_review",
  OPTIMIZATION: "agent_10_optimization",
  ACTOR_ADAPTATION: "agent_11_actor_adaptation",
  VERSION_GENERATION: "agent_12_version_generation",
} as const;

export type AgentStage = (typeof AGENT_STAGES)[keyof typeof AGENT_STAGES];

/**
 * Agent 状态
 */
export const AGENT_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  FAILED: "failed",
  REVIEW_PENDING: "review_pending",
} as const;

export type AgentStatus = (typeof AGENT_STATUS)[keyof typeof AGENT_STATUS];

/**
 * 审核状态
 */
export const REVIEW_STATUS = {
  PENDING: "pending",
  APPROVED: "approved",
  REJECTED: "rejected",
  REVISION_NEEDED: "revision_needed",
} as const;

export type ReviewStatus = (typeof REVIEW_STATUS)[keyof typeof REVIEW_STATUS];

/**
 * 剧本类型
 */
export const SCRIPT_TYPES = {
  EMOTIONAL: "emotional",
  COMEDY: "comedy",
  SUSPENSE: "suspense",
  ROMANCE: "romance",
} as const;

export type ScriptType = (typeof SCRIPT_TYPES)[keyof typeof SCRIPT_TYPES];

/**
 * 用户订阅层级
 */
export const SUBSCRIPTION_TIERS = {
  FREE: "free",
  PRO: "pro",
  ENTERPRISE: "enterprise",
} as const;

export type SubscriptionTier = (typeof SUBSCRIPTION_TIERS)[keyof typeof SUBSCRIPTION_TIERS];

/**
 * 状态颜色映射（用于 Badge 和 Indicator）
 */
export const STATUS_COLORS = {
  pending: "neutral",
  ideas: "ideas",
  research: "info",
  outline: "outline",
  drafts: "warning",
  review: "review",
  in_progress: "review",
  done: "success",
  completed: "success",
  failed: "error",
  approved: "success",
  rejected: "error",
} as const;

/**
 * Agent 阶段显示名称
 */
export const AGENT_STAGE_NAMES: Record<AgentStage, string> = {
  [AGENT_STAGES.IDEA_EVALUATION]: "创意评估",
  [AGENT_STAGES.PARAMETER_CONFIG]: "参数配置",
  [AGENT_STAGES.STRUCTURE_DESIGN]: "结构设计",
  [AGENT_STAGES.OUTLINE_CREATION]: "大纲创作",
  [AGENT_STAGES.OUTLINE_REVIEW]: "大纲审核",
  [AGENT_STAGES.SCENE_CREATION]: "分麦创作",
  [AGENT_STAGES.TRANSITION]: "麦间过渡",
  [AGENT_STAGES.SCRIPT_ASSEMBLY]: "剧本拼接",
  [AGENT_STAGES.OVERALL_REVIEW]: "整体审核",
  [AGENT_STAGES.OPTIMIZATION]: "优化调整",
  [AGENT_STAGES.ACTOR_ADAPTATION]: "演员适配",
  [AGENT_STAGES.VERSION_GENERATION]: "版本生成",
};

/**
 * 项目状态显示名称
 */
export const PROJECT_STATUS_NAMES: Record<ProjectStatus, string> = {
  [PROJECT_STATUS.DRAFT]: "草稿",
  [PROJECT_STATUS.IN_PROGRESS]: "生成中",
  [PROJECT_STATUS.COMPLETED]: "已完成",
  [PROJECT_STATUS.FAILED]: "失败",
};

/**
 * 剧本类型显示名称
 */
export const SCRIPT_TYPE_NAMES: Record<ScriptType, string> = {
  [SCRIPT_TYPES.EMOTIONAL]: "情感剧",
  [SCRIPT_TYPES.COMEDY]: "喜剧",
  [SCRIPT_TYPES.SUSPENSE]: "悬疑剧",
  [SCRIPT_TYPES.ROMANCE]: "爱情剧",
};

/**
 * 订阅层级显示名称
 */
export const SUBSCRIPTION_TIER_NAMES: Record<SubscriptionTier, string> = {
  [SUBSCRIPTION_TIERS.FREE]: "免费版",
  [SUBSCRIPTION_TIERS.PRO]: "专业版",
  [SUBSCRIPTION_TIERS.ENTERPRISE]: "企业版",
};

/**
 * 导航菜单项
 */
export const NAV_ITEMS = [
  {
    id: "dashboard",
    label: "仪表盘",
    href: "/dashboard",
    icon: "LayoutDashboard",
  },
  {
    id: "projects",
    label: "我的项目",
    href: "/projects",
    icon: "FolderOpen",
  },
  {
    id: "templates",
    label: "模板库",
    href: "/templates",
    icon: "BookTemplate",
  },
  {
    id: "settings",
    label: "设置",
    href: "/settings",
    icon: "Settings",
  },
] as const;

/**
 * 时长选项（分钟）
 */
export const DURATION_OPTIONS = [30, 35, 40, 45, 50, 55, 60];

/**
 * 角色数量选项
 */
export const CHARACTER_COUNT_OPTIONS = [2, 3, 4, 5];

/**
 * 分麦数量选项
 */
export const SCENE_COUNT_OPTIONS = [5, 6, 7, 8];

/**
 * 每页显示数量
 */
export const PAGE_SIZES = [10, 20, 50, 100];

/**
 * 默认每页显示数量
 */
export const DEFAULT_PAGE_SIZE = 10;

/**
 * API 端点
 */
export const API_ENDPOINTS = {
  PROJECTS: "/api/projects",
  TEMPLATES: "/api/templates",
  REVIEWS: "/api/reviews",
  EXPORT: "/api/export",
  USER: "/api/user",
  AUTH: "/api/auth",
} as const;

/**
 * 本地存储键
 */
export const STORAGE_KEYS = {
  THEME: "theme",
  SIDEBAR_COLLAPSED: "sidebar-collapsed",
  RECENT_PROJECTS: "recent-projects",
  USER_PREFERENCES: "user-preferences",
} as const;

/**
 * 错误消息
 */
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "网络连接失败，请检查您的网络设置",
  UNAUTHORIZED: "您没有权限执行此操作",
  NOT_FOUND: "请求的资源不存在",
  SERVER_ERROR: "服务器错误，请稍后重试",
  VALIDATION_ERROR: "输入数据验证失败",
  UNKNOWN_ERROR: "发生未知错误",
} as const;

/**
 * 成功消息
 */
export const SUCCESS_MESSAGES = {
  PROJECT_CREATED: "项目创建成功",
  PROJECT_UPDATED: "项目更新成功",
  PROJECT_DELETED: "项目删除成功",
  GENERATION_STARTED: "剧本生成已开始",
  REVIEW_SUBMITTED: "审核意见已提交",
  EXPORT_SUCCESS: "导出成功",
  SETTINGS_SAVED: "设置已保存",
} as const;

/**
 * 动画持续时间（毫秒）
 */
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 200,
  SLOW: 300,
} as const;

/**
 * 最大文件大小（字节）
 */
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

/**
 * 支持的文件类型
 */
export const SUPPORTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
] as const;

