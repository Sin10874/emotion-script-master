# 🚀 快速启动指南

## 前提条件

- Node.js 18+ 
- npm 或 yarn

## 5分钟快速启动

### 1️⃣ 安装依赖（首次运行）

```bash
cd frontend
npm install
```

⏱️ 预计时间：2-3分钟

### 2️⃣ 启动开发服务器

```bash
npm run dev
```

### 3️⃣ 打开浏览器

访问 [http://localhost:3000](http://localhost:3000)

🎉 完成！你应该能看到仪表盘页面

## 📱 可用页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 仪表盘 | `/dashboard` | 项目统计和最近项目 |
| 项目列表 | `/projects` | 所有项目列表 |
| 项目详情 | `/projects/proj_001` | 查看具体项目 |

## 🎯 测试 Mock 数据

当前使用 6 个示例项目：

1. **婆媳矛盾剧本** (已完成)
2. **职场励志故事** (进行中 65%)
3. **校园青春回忆** (草稿)
4. **创业艰辛路** (进行中 35%)
5. **邻里温情故事** (已完成)
6. **医患情深** (失败)

## 🔧 常用命令

```bash
# 开发模式
npm run dev

# 生产构建
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🐛 遇到问题？

### 端口被占用
```bash
# 使用其他端口
PORT=3001 npm run dev
```

### 依赖安装失败
```bash
# 清理缓存重新安装
rm -rf node_modules package-lock.json
npm install
```

### TypeScript 错误
```bash
# 重新生成类型
npm run build
```

## 📚 下一步

1. 查看 [README.md](./README.md) 了解项目详情
2. 查看 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解部署流程
3. 查看 [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md) 了解项目总结

## 💡 开发提示

- 修改代码后会自动热重载
- 使用 `@/` 别名导入组件
- Mock 数据在 `lib/mock-data.ts`
- 组件在 `components/` 目录

## 🎨 设计系统

- 配色：黑白灰系统
- 圆角：24px (容器), 16px (按钮)
- 间距：基于 8px 网格
- 图标：Lucide Icons

详细规范见 `design-system-handover/docs/DESIGN_SYSTEM.md`

---

**需要帮助？** 查看完整文档或提交 Issue