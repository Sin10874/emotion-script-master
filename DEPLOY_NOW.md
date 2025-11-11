# 🚀 立即部署到 Vercel

## 您的 Vercel 项目
**https://vercel.com/sins-projects-1cd81196/ai-script-master**

---

## ⚡ 最快部署方式（3步）

### 方式 A：使用自动化脚本（推荐）

```bash
cd frontend
./deploy.sh
```

脚本会自动：
1. ✅ 检查并提交代码
2. ✅ 推送到 Git 仓库
3. ✅ 部署到 Vercel

---

### 方式 B：手动部署

#### 步骤 1：创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名：`ai-script-master-frontend`
3. 设为 Public 或 Private
4. **不要**初始化 README

#### 步骤 2：推送代码

```bash
cd frontend

# 添加远程仓库（替换为您的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/ai-script-master-frontend.git

# 推送代码
git push -u origin main
```

#### 步骤 3：在 Vercel 连接仓库

1. 访问：https://vercel.com/sins-projects-1cd81196/ai-script-master
2. 进入 Settings → Git
3. 点击 "Connect Git Repository"
4. 选择您的 GitHub 仓库
5. 点击 "Deploy"

✅ 完成！等待 2-3 分钟构建完成

---

## 🔧 使用 Vercel CLI

### 安装 CLI

```bash
npm install -g vercel
```

### 登录

```bash
vercel login
```

### 部署

```bash
cd frontend

# 部署到预览环境
vercel

# 部署到生产环境
vercel --prod
```

---

## 📊 部署后检查

### 1. 查看部署状态
https://vercel.com/sins-projects-1cd81196/ai-script-master/deployments

### 2. 访问应用
部署成功后会得到一个 URL，例如：
- `https://ai-script-master-xxx.vercel.app`

### 3. 测试页面

访问以下页面确认：
- ✅ `/dashboard` - 仪表盘
- ✅ `/projects` - 项目列表
- ✅ `/projects/proj_001` - 项目详情

---

## 🎯 预期结果

部署成功后，您将看到：

### 仪表盘页面
- 4个统计卡片（总项目、已完成、进行中、失败）
- 快速操作按钮
- 最近4个项目展示
- 使用提示卡片

### 项目列表页面
- 6个示例项目
- 标签页筛选（全部/进行中/已完成/草稿）
- 项目卡片展示

### 项目详情页面
- 项目完整信息
- 进度条（进行中项目）
- Agent 执行阶段（12个阶段）
- 操作按钮

---

## 🐛 遇到问题？

### 构建失败

**原因**：依赖安装问题

**解决**：
```bash
cd frontend
rm -rf node_modules package-lock.json
npm install
git add package-lock.json
git commit -m "Fix: Update dependencies"
git push
```

### 页面空白

**原因**：路由配置问题

**解决**：
1. 检查 Vercel 日志
2. 确认 `app/` 目录结构正确
3. 查看浏览器控制台错误

### 样式丢失

**原因**：Tailwind CSS 配置问题

**解决**：
1. 确认 `app/styles/globals.css` 存在
2. 检查 `app/layout.tsx` 导入样式
3. 重新构建部署

---

## 📞 获取帮助

- **详细部署指南**：查看 `VERCEL_DEPLOY_GUIDE.md`
- **快速启动**：查看 `QUICK_START.md`
- **项目文档**：查看 `README.md`
- **Vercel 支持**：https://vercel.com/support

---

## ✅ 部署检查清单

部署前：
- [x] Git 仓库已初始化
- [x] 代码已提交
- [ ] GitHub 仓库已创建
- [ ] 远程仓库已配置

部署后：
- [ ] 构建成功
- [ ] 所有页面可访问
- [ ] Mock 数据正常显示
- [ ] 无控制台错误
- [ ] 响应式布局正常

---

## 🎉 下一步

部署成功后：

1. **分享应用**
   - 复制 Vercel 提供的 URL
   - 分享给团队成员测试

2. **配置域名**（可选）
   - 在 Vercel 添加自定义域名
   - 配置 DNS 记录

3. **监控性能**
   - 启用 Vercel Analytics
   - 查看访问统计

4. **准备后端集成**
   - 替换 Mock 数据
   - 配置 API 端点
   - 添加用户认证

---

**准备好了吗？开始部署吧！** 🚀

```bash
cd frontend
./deploy.sh