"use client";

import * as React from "react";
import { Check, ChevronsUpDown, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface Workspace {
  id: string;
  name: string;
  description?: string;
}

interface WorkspaceSelectorProps {
  workspaces: Workspace[];
  currentWorkspace?: Workspace;
  onSelect?: (workspace: Workspace) => void;
  onCreateNew?: () => void;
  className?: string;
}

export function WorkspaceSelector({
  workspaces,
  currentWorkspace,
  onSelect,
  onCreateNew,
  className,
}: WorkspaceSelectorProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn("justify-between", className)}
        >
          <span className="truncate">
            {currentWorkspace?.name || "选择工作区"}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-[240px]">
        <DropdownMenuLabel>工作区</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {workspaces.map((workspace) => (
          <DropdownMenuItem
            key={workspace.id}
            onSelect={() => onSelect?.(workspace)}
            className="flex items-center justify-between"
          >
            <div className="flex flex-col">
              <span className="font-medium">{workspace.name}</span>
              {workspace.description && (
                <span className="text-xs text-neutral-500">
                  {workspace.description}
                </span>
              )}
            </div>
            {currentWorkspace?.id === workspace.id && (
              <Check className="h-4 w-4 text-primary-600" />
            )}
          </DropdownMenuItem>
        ))}
        {onCreateNew && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onCreateNew}>
              <Plus className="mr-2 h-4 w-4" />
              <span>创建新工作区</span>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

