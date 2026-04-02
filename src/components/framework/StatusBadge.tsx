import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { RefreshCw, Globe, Archive } from "lucide-react"

export type StatusType = "draft" | "pending" | "processing" | "revision" | "approved" | "rejected" | "published" | "archived"
export type BadgeSize = "sm" | "default" | "lg"

export interface StatusBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  status: StatusType
  size?: BadgeSize
  label?: string
}

const statusConfig: Record<StatusType, { colorClass: string, icon: React.ReactNode, defaultLabel: string }> = {
  draft: { colorClass: "bg-slate-100 text-slate-700 hover:bg-slate-200", icon: <span className="w-2 h-2 rounded-full bg-slate-400" />, defaultLabel: "Draft" },
  pending: { colorClass: "bg-warning-50 text-warning-700 border-warning-200 hover:bg-warning-100", icon: <span className="w-2 h-2 rounded-full bg-warning" />, defaultLabel: "Pending" },
  processing: { 
    colorClass: "bg-info-50 text-info-700 border-info-200 hover:bg-info-100", 
    icon: (
      <span className="w-2 h-2 rounded-full bg-info relative">
        <span className="absolute inset-0 rounded-full bg-info animate-ping" />
      </span>
    ), 
    defaultLabel: "Processing" 
  },
  revision: { colorClass: "bg-warning-50 text-warning-700 hover:bg-warning-100", icon: <RefreshCw size={12} />, defaultLabel: "Revision" },
  approved: { colorClass: "bg-success-50 text-success-700 border-success-200 hover:bg-success-100", icon: <span className="w-2 h-2 rounded-full bg-success" />, defaultLabel: "Approved" },
  rejected: { colorClass: "bg-danger-50 text-danger-700 border-danger-200 hover:bg-danger-100", icon: <span className="w-2 h-2 rounded-full bg-danger" />, defaultLabel: "Rejected" },
  published: { colorClass: "bg-primary-100 text-primary-700 hover:bg-primary-200", icon: <Globe size={12} />, defaultLabel: "Published" },
  archived: { colorClass: "bg-slate-100 text-slate-600 hover:bg-slate-200", icon: <Archive size={12} />, defaultLabel: "Archived" },
}

export function StatusBadge({ status, size = "default", label, className, ...props }: StatusBadgeProps) {
  const config = statusConfig[status]
  
  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs gap-1",
    default: "px-2.5 py-0.5 text-sm gap-1.5",
    lg: "px-3 py-1 text-base gap-2"
  }

  return (
    <Badge 
      variant="outline" 
      className={cn(
        "rounded-full font-medium inline-flex items-center", 
        config.colorClass, 
        sizeClasses[size], 
        className
      )} 
      {...props}
    >
      {config.icon}
      {label || config.defaultLabel}
    </Badge>
  )
}
