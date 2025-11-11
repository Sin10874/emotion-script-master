# 🚀 Vercel 部署完整指南

## 📋 部署到您的 Vercel 项目

您的 Vercel 项目地址：
**https://vercel.com/sins-projects-1cd81196/ai-script-master**

## 🔗 方式 1：通过 Git 推送（推荐）

### 步骤 1：创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/new)
2. 创建新仓库，例如：`ai-script-master-frontend`
3. **不要**初始化 README、.gitignore 或 license

### 步骤 2：推送代码到 GitHub

```bash
cd frontend

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/ai-script-master-frontend.git

# 推送代码
git branch -M main
git push -u origin main
```

### 步骤 3：在 Vercel 连接仓库

1. 访问您的 Vercel 项目：
   https://vercel.com/sins-projects-1cd81196/ai-script-master

2. 进入项目设置 → Settings → Git

3. 点击 "Connect Git Repository"

4. 选择您刚创建的 GitHub 仓库

5. Vercel 会自动检测 Next.js 并配置构建设置

6. 点击 "Deploy"

## 🔧 方式 2：通过 Vercel CLI

### 安装 Vercel CLI

```bash
npm i -g vercel
```

### 登录 Vercel

```bash
vercel login
```

### 部署项目

```bash
cd frontend

# 首次部署
vercel

# 部署到生产环境
vercel --prod
```

### 链接到现有项目

```bash
# 链接到您的 Vercel 项目
vercel link

# 按提示选择：
# - Scope: sins-projects-1cd81196
# - Link to existing project: Yes
# - Project name: ai-script-master
```

## ⚙️ Vercel 项目配置

### 构建设置

在 Vercel 项目设置中确认以下配置：

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
Development Command: npm run dev
Root Directory: ./
```

### 环境变量（可选）

当前使用 Mock 数据，无需配置。未来接入后端时添加：

```
NEXT_PUBLIC_API_URL=https://your-api-url.com
NEXT_PUBLIC_WS_URL=wss://your-websocket-url.com
```

## 📊 部署后验证

### 1. 检查部署状态

访问：https://vercel.com/sins-projects-1cd81196/ai-script-master/deployments

### 2. 访问生产环境

部署成功后，Vercel 会提供一个 URL，例如：
- `https://ai-script-master.vercel.app`
- 或您的自定义域名

### 3. 测试页面

访问以下页面确认功能正常：

- ✅ 仪表盘：`/dashboard`
- ✅ 项目列表：`/projects`
- ✅ 项目详情：`/projects/proj_001`

## 🔄 自动部署

配置 Git 集成后，每次推送代码都会自动触发部署：

```bash
# 修改代码后
git add .
git commit -m "Update: 描述您的更改"
git push

# Vercel 会自动：
# 1. 检测到推送
# 2. 开始构建
# 3. 运行测试
# 4. 部署到生产环境
```

## 🌐 自定义域名

### 添加域名

1. 进入项目设置 → Domains
2. 点击 "Add Domain"
3. 输入您的域名（例如：`script.yourdomain.com`）
4. 按照提示配置 DNS

### DNS 配置

在您的域名提供商处添加：

**A 记录**：
```
Type: A
Name: @ (或子域名)
Value: 76.76.21.21
```

**CNAME 记录**（推荐用于子域名）：
```
Type: CNAME
Name: script (子域名)
Value: cname.vercel-dns.com
```

## 📈 监控和分析

### Vercel Analytics

1. 进入项目设置 → Analytics
2. 启用 Analytics
3. 查看：
   - 页面浏览量
   - 独立访客
   - 页面性能
   - Web Vitals

### 部署日志

查看构建和运行时日志：
1. 进入 Deployments
2. 选择特定部署
3. 查看 "Build Logs" 和 "Function Logs"

## 🐛 故障排查

### 构建失败

**问题**：依赖安装失败
```bash
# 解决方案：清理并重新安装
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Fix: Update dependencies"
git push
```

**问题**：TypeScript 错误
```bash
# 解决方案：本地测试构建
npm run build

# 修复错误后推送
git add .
git commit -m "Fix: TypeScript errors"
git push
```

### 运行时错误

1. 检查 Vercel 函数日志
2. 确认环境变量配置
3. 查看浏览器控制台错误

### 性能问题

1. 启用 Vercel Speed Insights
2. 检查 Web Vitals 指标
3. 优化图片和资源加载

## 🔒 安全最佳实践

1. **环境变量**
   - 敏感信息使用环境变量
   - 不要提交到代码库
   - 使用 `NEXT_PUBLIC_` 前缀暴露给客户端

2. **API 密钥**
   - 后端 API 密钥存储在服务器端
   - 使用 API Routes 代理敏感请求

3. **CORS 配置**
   - 配置正确的 CORS 策略
   - 限制允许的域名

## 📞 获取帮助

- **Vercel 文档**：https://vercel.com/docs
- **Next.js 部署**：https://nextjs.org/docs/deployment
- **Vercel 支持**：https://vercel.com/support
- **社区论坛**：https://github.com/vercel/vercel/discussions

## ✅ 部署检查清单

部署前确认：

- [ ] 代码已提交到 Git
- [ ] package.json 依赖完整
- [ ] 本地构建成功（`npm run build`）
- [ ] 环境变量已配置（如需要）
- [ ] .gitignore 包含 node_modules 和 .next
- [ ] vercel.json 配置正确

部署后验证：

- [ ] 所有页面可访问
- [ ] Mock 数据正常显示
- [ ] 响应式布局正常
- [ ] 无控制台错误
- [ ] 性能指标良好

## 🎉 部署成功！

恭喜！您的 AI Script Master 前端应用已成功部署到 Vercel。

**下一步**：
1. 分享您的应用 URL
2. 监控性能和使用情况
3. 根据反馈持续改进
4. 准备接入后端 API

---

**需要帮助？** 查看完整文档或联系技术支持