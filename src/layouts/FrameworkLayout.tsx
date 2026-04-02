import React, { useState } from "react"
import { Outlet, Link, NavLink } from "react-router-dom"
import { 
  ShieldCheck, 
  Search, 
  Bell, 
  ChevronDown, 
  FolderLock, 
  Combine, 
  FileText, 
  Sparkles, 
  Settings,
  ChevronLeft,
  ChevronRight,
  Database,
  FileSearch,
  UserCheck,
  CheckSquare,
  LayoutGrid
} from "lucide-react"

import { cn } from "@/lib/utils"

export default function FrameworkLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isOcrMenuOpen, setIsOcrMenuOpen] = useState(true)

  return (
    <div className="bg-slate-50 flex flex-col h-screen text-slate-800 font-sans mx-auto overflow-hidden">
      {/* ==================== TOP NAV WORKSPACE SWITCHER ==================== */}
      <header className="bg-primary-900 text-white h-16 shrink-0 flex items-center justify-between px-6 border-b border-primary-800 shadow-sm z-50">
        <div className="flex items-center gap-6 h-full">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 select-none hover:opacity-90 transition-opacity">
            <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-inner">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">K-Portal</span> 
            <span className="text-primary-300 text-xs font-medium ml-1 bg-primary-800 px-1.5 py-0.5 rounded">v2.1</span>
          </Link>

          {/* Workspace Switcher Pills */}
          {/* Workspace Switcher Pills */}
          <nav className="hidden md:flex items-center gap-1.5 bg-primary-800/50 p-1 rounded-lg border border-primary-700/50 ml-4">
            <NavLink 
              to="/app/doc" 
              className={({ isActive }) => cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-400",
                isActive ? "font-semibold bg-primary-600 text-white shadow-sm" : "font-medium text-primary-200 hover:text-white hover:bg-primary-700/80"
              )}
            >
              <FolderLock className={cn("w-4 h-4", "text-inherit")} />
              Tài liệu
            </NavLink>
            
            <NavLink 
              to="/app/compare" 
              className={({ isActive }) => cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-400",
                isActive ? "font-semibold bg-primary-600 text-white shadow-sm" : "font-medium text-primary-200 hover:text-white hover:bg-primary-700/80"
              )}
            >
              <Combine className="w-4 h-4" />
              Đối chiếu
            </NavLink>
            
            <NavLink 
              to="/app/report" 
              className={({ isActive }) => cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-400",
                isActive ? "font-semibold bg-primary-600 text-white shadow-sm" : "font-medium text-primary-200 hover:text-white hover:bg-primary-700/80"
              )}
            >
              <FileText className="w-4 h-4" />
              Sinh Báo cáo
            </NavLink>

            <NavLink 
              to="/app/ai-ops" 
              className={({ isActive }) => cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-primary-400",
                isActive ? "font-semibold bg-primary-600 text-white shadow-sm" : "font-medium text-primary-200 hover:text-white hover:bg-primary-700/80"
              )}
            >
              <Sparkles className="w-4 h-4 text-ai-400" />
              Vận hành AI
            </NavLink>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 text-primary-200 hover:text-white hover:bg-primary-700/80 focus-visible:ring-2 focus-visible:ring-primary-400">
              <Settings className="w-4 h-4" />
              Quản trị
            </button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center bg-primary-800 hover:bg-primary-700 rounded-lg px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary-400 focus-within:bg-primary-800 transition-all duration-200 border border-transparent shadow-sm">
            <Search className="w-4 h-4 text-primary-300 mr-2" />
            <input type="text" placeholder="Tìm kiếm hệ thống..." className="bg-transparent border-none outline-none text-sm w-48 text-white placeholder:text-primary-300" aria-label="Tìm kiếm" />
            <kbd className="ml-2 px-1.5 py-0.5 bg-primary-900 border border-primary-700 text-[10px] font-mono text-primary-300 rounded">⌘K</kbd>
          </div>

          <button className="relative p-2 text-primary-200 hover:text-white hover:bg-primary-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-400">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-danger-500 rounded-full border-2 border-primary-900 animate-pulse"></span>
          </button>

          <div className="flex items-center gap-2 cursor-pointer hover:bg-primary-800 p-1.5 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-primary-400" tabIndex={0}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center font-medium shadow-sm text-white">TT</div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium leading-none text-white">Trần Toàn</p>
              <p className="text-xs text-primary-300 mt-1">Lead Auditor</p>
            </div>
            <ChevronDown className="w-4 h-4 text-primary-400 ml-1" />
          </div>
        </div>
      </header>

      {/* ==================== MAIN CHILDS LAYOUT ==================== */}
      <div className="flex flex-1 overflow-hidden">
        {/* Child domain layouts (DocLayout, AiOpsLayout, etc.) will inject their own sidebars via Outlet */}
        <Outlet />
      </div>
    </div>
  )
}
