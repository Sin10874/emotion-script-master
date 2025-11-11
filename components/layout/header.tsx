"use client";

import * as React from "react";
import { Bell, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  title?: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  const [searchOpen, setSearchOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6">
      {/* 左侧：标题和描述 */}
      <div className="flex-1">
        {title && (
          <div>
            <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
            {description && (
              <p className="text-sm text-neutral-500">{description}</p>
            )}
          </div>
        )}
      </div>

      {/* 右侧：搜索、通知、操作 */}
      <div className="flex items-center space-x-4">
        {/* 搜索 */}
        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>
          {searchOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 animate-slide-up">
              <Input
                placeholder="搜索项目..."
                className="w-full"
                autoFocus
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
            </div>
          )}
        </div>

        {/* 通知 */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-1 top-1 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neutral-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neutral-900"></span>
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>通知</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">剧本生成完成</p>
                <p className="text-xs text-neutral-500">
                  项目"婆媳矛盾剧本"已完成生成
                </p>
                <p className="text-xs text-neutral-400">5分钟前</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium">需要审核</p>
                <p className="text-xs text-neutral-500">
                  项目"家庭剧本"的大纲需要您审核
                </p>
                <p className="text-xs text-neutral-400">1小时前</p>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center text-neutral-900 font-semibold">
              查看全部通知
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* 额度显示 */}
        <div className="flex items-center space-x-2 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5">
          <span className="text-sm text-neutral-600">剩余额度:</span>
          <Badge variant="warning">50</Badge>
        </div>

        {/* 创建按钮 */}
        <Button>创建项目</Button>
      </div>
    </header>
  );
}

