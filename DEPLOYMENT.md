# 部署指南

## 🚀 Vercel 部署（推荐）

### 前提条件
- GitHub/GitLab/Bitbucket 账号
- Vercel 账号（可以用 GitHub 登录）

### 步骤 1: 准备代码仓库

```bash
# 初始化 Git（如果还没有）
cd frontend
git init
git add .
git commit -m "Initial commit: AI Script Master Frontend"

# 推送到远程仓库
git remote add origin <your-repo-url>
git push -u origin main
```

### 步骤 2: 在 Vercel 部署

1. 访问 [Vercel](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 Git 仓库
4. Vercel 会自动检测到 Next.js 项目
5. 配置项目：
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (如果 frontend 在根目录)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

6. 点击 "Deploy"

### 步骤 3: 配置自定义域名（可选）

1. 在 Vercel 项目设置中
2. 进入 "Domains" 标签
3. 添加你的自定义域名
4. 按照提示配置 DNS

## 🔧 环境变量配置

当前项目使用 Mock 数据，无需配置环境变量。

未来接入后端 API 时，在 Vercel 项目设置中添加：

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_WS_URL=wss://your-websocket-url.com
```

## 📊 性能优化建议

### 1. 启用 Vercel Analytics
```bash
npm install @vercel/analytics
```

在 `app/layout.tsx` 中添加：
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### 2. 启用 Vercel Speed Insights
```bash
npm install @vercel/speed-insights
```

### 3. 图片优化
使用 Next.js Image 组件：
```tsx
import Image from 'next/image';

<Image 
  src="/image.png" 
  alt="Description"
  width={500}
  height={300}
  priority // 对于首屏图片
/>
```

## 🔄 CI/CD 自动部署

Vercel 会自动为每个 Git 推送创建预览部署：

- **Production**: `main` 分支推送 → 生产环境
- **Preview**: 其他分支推送 → 预览环境
- **Pull Request**: 自动创建预览链接

## 🐛 故障排查

### 构建失败

1. **检查依赖版本**
```bash
npm install
npm run build
```

2. **查看构建日志**
在 Vercel 控制台查看详细错误信息

3. **本地测试生产构建**
```bash
npm run build
npm start
```

### 运行时错误

1. **检查环境变量**
确保所有必需的环境变量都已配置

2. **查看 Vercel 日志**
在 Vercel 控制台的 "Logs" 标签查看

3. **启用错误追踪**
集成 Sentry 或其他错误追踪服务

## 📈 监控和分析

### Vercel Analytics
- 页面浏览量
- 独立访客
- 页面性能指标

### 自定义监控
可以集成：
- Google Analytics
- Mixpanel
- Amplitude
- PostHog

## 🔒 安全建议

1. **环境变量**: 敏感信息使用环境变量，不要提交到代码库
2. **API 密钥**: 使用 `NEXT_PUBLIC_` 前缀的变量会暴露给客户端，谨慎使用
3. **CORS**: 配置正确的 CORS 策略
4. **CSP**: 配置内容安全策略

## 📱 多环境部署

### 开发环境
```bash
vercel --prod=false
```

### 预发布环境
创建 `staging` 分支，Vercel 会自动部署

### 生产环境
推送到 `main` 分支

## 🔄 回滚

如果新版本有问题：

1. 在 Vercel 控制台找到之前的部署
2. 点击 "Promote to Production"
3. 或者回滚 Git 提交并重新推送

## 📞 技术支持

- Vercel 文档: https://vercel.com/docs
- Next.js 部署: https://nextjs.org/docs/deployment
- Vercel 社区: https://github.com/vercel/vercel/discussions