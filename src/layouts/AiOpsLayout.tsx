import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { 
  Sparkles, 
  ChevronDown, 
  Library,
  PlayCircle,
  FileBadge,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"

export default function AiOpsLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isRuleMenuOpen, setIsRuleMenuOpen] = useState(true)
  const [isFlowMenuOpen, setIsFlowMenuOpen] = useState(true)

  return (
    <>
      {/* CONTEXTUAL SIDEBAR: AI OPS */}
      <aside className={cn(
        "bg-white border-r border-slate-200 flex flex-col shrink-0 flex-shrink-0 relative transition-all duration-300 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]",
        isCollapsed ? "w-[72px]" : "w-64"
      )}>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white border border-slate-200 shadow-sm text-slate-400 hover:text-primary-600 rounded-full p-1 z-30 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        <div className="px-4 py-4 border-b border-slate-100 bg-slate-50/50 h-[72px] flex items-center overflow-hidden">
          <div className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded bg-ai-100 flex items-center justify-center text-ai-700 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            {!isCollapsed && (
              <div className="whitespace-nowrap overflow-hidden transition-opacity duration-300">
                <h3 className="text-sm font-bold text-slate-800">Trung tâm AI Ops</h3>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Quản lý Rules & Flows</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          
          {/* Rules Menu Group */}
          <div className="pt-1 pb-1 w-full relative">
            <button 
              onClick={() => !isCollapsed && setIsRuleMenuOpen(!isRuleMenuOpen)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary-500",
                "text-ai-900 bg-ai-50"
              )}
            >
              <div className="flex items-center gap-3">
                <Library className="w-4 h-4 text-ai-600 shrink-0" />
                {!isCollapsed && <span className="whitespace-nowrap">Quản lý Rules (G1)</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown className={cn("w-4 h-4 text-ai-400 transition-transform duration-200", isRuleMenuOpen ? "rotate-180" : "")} />
              )}
            </button>
            
            {!isCollapsed && (
              <div className={cn("pl-10 pr-2 mt-1 space-y-1 relative overflow-hidden transition-all duration-300", isRuleMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="absolute left-5 top-0 bottom-2 w-px bg-slate-200"></div>
                <Link to="/app/ai-ops/rule-library" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-ai-700 hover:bg-slate-50 transition-colors">
                  Rule Library (G1.A1, A4)
                </Link>
                <Link to="/app/ai-ops/rule-test" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-ai-700 hover:bg-slate-50 transition-colors">
                  Test Rule (G1.A2)
                </Link>
              </div>
            )}
          </div>

          {/* Flows Menu Group */}
          <div className="pt-1 pb-1 w-full relative">
            <button 
              onClick={() => !isCollapsed && setIsFlowMenuOpen(!isFlowMenuOpen)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary-500",
                "text-ai-900 bg-ai-50"
              )}
            >
              <div className="flex items-center gap-3">
                <PlayCircle className="w-4 h-4 text-ai-600 shrink-0" />
                {!isCollapsed && <span className="whitespace-nowrap">Quản lý Flows (G2)</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown className={cn("w-4 h-4 text-ai-400 transition-transform duration-200", isFlowMenuOpen ? "rotate-180" : "")} />
              )}
            </button>
            
            {!isCollapsed && (
              <div className={cn("pl-10 pr-2 mt-1 space-y-1 relative overflow-hidden transition-all duration-300", isFlowMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="absolute left-5 top-0 bottom-2 w-px bg-slate-200"></div>
                <Link to="/app/ai-ops/flow-library" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-ai-700 hover:bg-slate-50 transition-colors">
                  Flow Library (G2.A1, A4)
                </Link>
                <Link to="/app/ai-ops/flow-test" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-ai-700 hover:bg-slate-50 transition-colors">
                  Test Flow (G2.A2)
                </Link>
              </div>
            )}
          </div>

          {/* MN-RULE Approval */}
          <Link to="/app/ai-ops/approval" className="w-full flex items-center justify-between px-3 py-2 mt-4 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-ai-700 transition-colors focus-visible:ring-2 focus-visible:ring-ai-500 border border-slate-100">
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
              <FileBadge className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap text-left truncate">Duyệt Rule/Flow (MN-RULE)</span>}
            </div>
            {!isCollapsed && <span className="flex items-center justify-center bg-danger-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0">2</span>}
          </Link>

        </div>
      </aside>

      {/* PROCESSING MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto w-full">
          <Outlet />
      </main>
    </>
  )
}
