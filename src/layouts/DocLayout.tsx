import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { 
  FolderLock, 
  ChevronDown, 
  Database,
  FileSearch,
  UserCheck,
  CheckSquare,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"

export default function DocLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isOcrMenuOpen, setIsOcrMenuOpen] = useState(true)

  return (
    <>
      {/* CONTEXTUAL SIDEBAR: DOCS */}
      <aside className={cn(
        "bg-white border-r border-slate-200 flex flex-col shrink-0 flex-shrink-0 relative transition-all duration-300 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]",
        isCollapsed ? "w-[72px]" : "w-64"
      )}>
        
        {/* Collapse Toggle Button */}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-6 bg-white border border-slate-200 shadow-sm text-slate-400 hover:text-primary-600 rounded-full p-1 z-30 transition-colors"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Context Header */}
        <div className="px-4 py-4 border-b border-slate-100 bg-slate-50/50 h-[72px] flex items-center overflow-hidden">
          <div className="flex items-center gap-3 w-full">
            <div className="w-8 h-8 rounded bg-primary-100 flex items-center justify-center text-primary-700 shrink-0">
              <FolderLock className="w-4 h-4" />
            </div>
            {!isCollapsed && (
              <div className="whitespace-nowrap overflow-hidden transition-opacity duration-300">
                <h3 className="text-sm font-bold text-slate-800">Trung tâm Tài liệu</h3>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Workspace</p>
              </div>
            )}
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <Link to="/app/doc" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3">
              <Database className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap">Dashboard (Kho)</span>}
            </div>
          </Link>

          {/* Contextual Submenu Group */}
          <div className="pt-1 pb-1 w-full relative">
            <button 
              onClick={() => !isCollapsed && setIsOcrMenuOpen(!isOcrMenuOpen)}
              className={cn(
                "w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary-500",
                "text-primary-900 bg-primary-50"
              )}
            >
              <div className="flex items-center gap-3">
                <FileSearch className="w-4 h-4 text-primary-600 shrink-0" />
                {!isCollapsed && <span className="whitespace-nowrap">Trạm xử lý OCR (Maker)</span>}
              </div>
              {!isCollapsed && (
                <ChevronDown className={cn("w-4 h-4 text-primary-400 transition-transform duration-200", isOcrMenuOpen ? "rotate-180" : "")} />
              )}
            </button>
            
            {/* Sub Items */}
            {!isCollapsed && (
              <div className={cn("pl-10 pr-2 mt-1 space-y-1 relative overflow-hidden transition-all duration-300", isOcrMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
                <div className="absolute left-5 top-0 bottom-2 w-px bg-slate-200"></div>
                <Link to="/app/doc/upload" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-primary-700 hover:bg-slate-50 transition-colors">
                  Luồng Upload (M-1)
                </Link>
                <Link to="/app/doc/revision" className="block px-3 py-1.5 text-sm rounded-md text-slate-600 hover:text-primary-700 hover:bg-slate-50 transition-colors">
                  Xử lý Yêu cầu Sửa (M-2)
                </Link>
              </div>
            )}
          </div>

          <button className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3">
              <UserCheck className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap">Tài liệu của tôi</span>}
            </div>
          </button>
          
          <Link to="/app/doc/checker" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
              <CheckSquare className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap text-left truncate">Duyệt Cấp 1 (C-1)</span>}
            </div>
            {!isCollapsed && <span className="flex items-center justify-center bg-danger-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0">3</span>}
          </Link>

          <Link to="/app/doc/manager" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3 flex-1 overflow-hidden">
              <CheckSquare className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap text-left truncate">Duyệt Cấp 2 (MN-DOC)</span>}
            </div>
            {!isCollapsed && <span className="flex items-center justify-center bg-danger-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0">1</span>}
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
