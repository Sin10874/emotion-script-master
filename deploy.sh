#!/bin/bash

# AI Script Master - Vercel 快速部署脚本

echo "🚀 AI Script Master - Vercel 部署脚本"
echo "======================================"
echo ""

# 检查是否在 frontend 目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：请在 frontend 目录下运行此脚本"
    exit 1
fi

# 检查 Git 状态
echo "📋 检查 Git 状态..."
if [ ! -d ".git" ]; then
    echo "❌ 错误：Git 仓库未初始化"
    echo "请先运行: git init"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    echo "请输入提交信息（默认：Update frontend）:"
    read commit_message
    commit_message=${commit_message:-"Update frontend"}
    git commit -m "$commit_message"
    echo "✅ 更改已提交"
else
    echo "✅ 没有未提交的更改"
fi

# 检查远程仓库
echo ""
echo "🔗 检查远程仓库..."
if ! git remote | grep -q "origin"; then
    echo "⚠️  未配置远程仓库"
    echo "请输入您的 GitHub 仓库 URL（例如：https://github.com/username/repo.git）:"
    read repo_url
    if [ -n "$repo_url" ]; then
        git remote add origin "$repo_url"
        echo "✅ 远程仓库已添加"
    else
        echo "❌ 未提供仓库 URL，跳过推送"
    fi
fi

# 推送到远程仓库
if git remote | grep -q "origin"; then
    echo ""
    echo "📤 推送到远程仓库..."
    git push -u origin main 2>/dev/null || git push -u origin master
    if [ $? -eq 0 ]; then
        echo "✅ 代码已推送到远程仓库"
    else
        echo "⚠️  推送失败，请检查远程仓库配置"
    fi
fi

# 检查 Vercel CLI
echo ""
echo "🔍 检查 Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "⚠️  Vercel CLI 未安装"
    echo "是否安装 Vercel CLI？(y/n)"
    read install_vercel
    if [ "$install_vercel" = "y" ]; then
        echo "📦 安装 Vercel CLI..."
        npm install -g vercel
        echo "✅ Vercel CLI 已安装"
    else
        echo "跳过 Vercel CLI 安装"
        echo ""
        echo "📖 手动部署步骤："
        echo "1. 访问 https://vercel.com/sins-projects-1cd81196/ai-script-master"
        echo "2. 连接您的 Git 仓库"
        echo "3. 点击 Deploy"
        exit 0
    fi
fi

# 部署到 Vercel
echo ""
echo "🚀 部署到 Vercel..."
echo "选择部署方式："
echo "1) 部署到预览环境（推荐用于测试）"
echo "2) 部署到生产环境"
echo "3) 跳过部署"
read -p "请选择 (1/2/3): " deploy_choice

case $deploy_choice in
    1)
        echo "📦 部署到预览环境..."
        vercel
        ;;
    2)
        echo "🚀 部署到生产环境..."
        vercel --prod
        ;;
    3)
        echo "⏭️  跳过部署"
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "✅ 部署流程完成！"
echo ""
echo "📊 查看部署状态："
echo "https://vercel.com/sins-projects-1cd81196/ai-script-master/deployments"
echo ""
echo "📚 更多帮助："
echo "- 快速启动: cat QUICK_START.md"
echo "- 部署指南: cat VERCEL_DEPLOY_GUIDE.md"
echo "- 项目文档: cat README.md"