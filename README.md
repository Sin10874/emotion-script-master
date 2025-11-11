# AI Script Master - 前端项目

基于 Next.js 14 的 AI 直播剧本生成平台前端应用。

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS v4
- **组件库**: Radix UI
- **图标**: Lucide React
- **设计系统**: 高级黑白灰 Airbnb 风格

## 📦 项目结构

```
frontend/
├── app/                      # Next.js App Router 页面
│   ├── dashboard/           # 仪表盘页面
│   ├── projects/            # 项目管理页面
│   │   └── [id]/           # 项目详情页面
│   ├── layout.tsx          # 根布局
│   ├── page.tsx            # 首页（重定向到仪表盘）
│   └── styles/             # 全局样式
│       └── globals.css     # Tailwind CSS 配置
├── components/              # React 组件
│   ├── ui/                 # 基础 UI 组件
│   ├── layout/             # 布局组件
│   ├── project/            # 项目相关组件
│   └── ...
├── lib/                     # 工具函数和常量
│   ├── utils.ts            # 工具函数
│   ├── constants.ts        # 常量定义
│   └── mock-data.ts        # Mock 数据
└── public/                  # 静态资源
```

## 🛠️ 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📄 页面说明

### 仪表盘 (`/dashboard`)
- 显示项目统计信息
- 展示最近更新的项目
- 快速操作入口

### 项目列表 (`/projects`)
- 查看所有项目
- 按状态筛选（全部/进行中/已完成/草稿）
- 创建新项目

### 项目详情 (`/projects/[id]`)
- 查看项目详细信息
- 显示 Agent 执行阶段
- 实时进度跟踪
- 导出剧本（已完成项目）

## 🎨 设计系统

项目采用高级黑白灰 Airbnb 风格设计系统：

- **主色调**: 黑白灰系统
- **圆角**: 容器 24px, 按钮 16px, 输入框 12px
- **间距**: 基于 8px 网格系统
- **字体**: 系统默认字体栈
- **图标**: Lucide Icons (线性风格)

详细设计规范请参考 `design-system-handover/docs/DESIGN_SYSTEM.md`

## 📊 Mock 数据

当前使用 Mock 数据进行前端测试，数据定义在 `lib/mock-data.ts`：

- 6 个示例项目
- 不同状态的项目（草稿/进行中/已完成/失败）
- Agent 执行阶段数据
- 统计数据

## 🚀 部署到 Vercel

### 方式 1: 通过 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 方式 2: 通过 Git 集成

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 Vercel 控制台导入项目
3. Vercel 会自动检测 Next.js 并配置构建设置
4. 点击部署

### 环境变量

目前项目使用 Mock 数据，无需配置环境变量。

未来接入后端 API 时，需要配置：

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## 📝 开发注意事项

1. **组件导入**: 使用 `@/` 别名导入组件和工具
2. **样式**: 优先使用 Tailwind CSS 类名
3. **类型安全**: 充分利用 TypeScript 类型检查
4. **代码规范**: 遵循 ESLint 和 Prettier 配置

## 🔄 后续集成

- [ ] 接入后端 API
- [ ] 添加用户认证
- [ ] 实现实时 WebSocket 连接
- [ ] 添加错误边界和加载状态
- [ ] 优化 SEO
- [ ] 添加单元测试

## 📞 技术支持

如有问题，请参考：
- Next.js 文档: https://nextjs.org/docs
- Tailwind CSS 文档: https://tailwindcss.com/docs
- Radix UI 文档: https://www.radix-ui.com/docs

## 📄 许可证

MIT