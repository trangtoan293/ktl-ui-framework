import * as React from "react"
import { cn } from "@/lib/utils"
import { Sparkles, Brain, Lightbulb, AlertTriangle, CheckCircle } from "lucide-react"

export interface AICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  confidence?: number | string
  type?: "suggestion" | "warning" | "success" | "processing"
  actionText?: string
  onAction?: () => void
}

export function AICard({ 
  title, 
  description, 
  confidence, 
  type = "suggestion", 
  actionText = "Xem chi tiết →", 
  onAction,
  className, 
  ...props 
}: AICardProps) {
  
  if (type === "processing") {
    return (
      <div className={cn("bg-ai-100/50 rounded-xl border border-ai-200 p-5 flex items-center justify-center", className)} {...props}>
        <div className="text-center">
          <div className="w-12 h-12 bg-ai-100 rounded-full flex items-center justify-center mx-auto mb-3 animate-pulse">
            <Sparkles className="w-6 h-6 text-ai-600" />
          </div>
          <p className="text-sm text-ai-700 font-medium">{title}</p>
          <p className="text-xs text-ai-600 mt-1">{description}</p>
          <div className="w-48 h-2 bg-ai-200 rounded-full mt-3 overflow-hidden">
            <div className="h-full bg-ai-600 rounded-full w-[65%]" />
          </div>
        </div>
      </div>
    )
  }

  const typeConfig = {
    suggestion: {
      icon: <Lightbulb className="w-5 h-5 text-ai-600" />,
      iconBg: "bg-ai-100",
      metaLabel: "Confidence:",
      metaValue: confidence,
      metaClass: "text-ai-600",
      actionClass: "text-primary hover:text-primary-700"
    },
    warning: {
      icon: <AlertTriangle className="w-5 h-5 text-warning-600" />,
      iconBg: "bg-warning-50",
      metaLabel: "Risk Level:",
      metaValue: confidence || "High",
      metaClass: "text-danger",
      actionClass: "text-primary hover:text-primary-700"
    },
    success: {
      icon: <CheckCircle className="w-5 h-5 text-success-600" />,
      iconBg: "bg-success-50",
      metaLabel: "Accuracy:",
      metaValue: confidence,
      metaClass: "text-success-600",
      actionClass: "text-primary hover:text-primary-700"
    }
  }

  const config = typeConfig[type]

  return (
    <div className={cn("bg-white rounded-xl border border-ai-200 p-5 shadow-sm", className)} {...props}>
      <div className="flex items-start gap-4">
        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0", config.iconBg)}>
          {config.icon}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-slate-900 mb-1">{title}</h4>
          <p className="text-sm text-slate-600 mb-3">{description}</p>
          <div className="flex items-center gap-3">
            {config.metaValue && (
              <span className={cn("text-sm font-medium", config.metaClass)}>
                {config.metaLabel} {config.metaValue}
              </span>
            )}
            {onAction && (
              <button onClick={onAction} className={cn("text-sm font-medium", config.actionClass)}>
                {actionText}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
