import React, { useState } from "react"
import { Outlet, Link } from "react-router-dom"
import { 
  Combine, 
  History,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"

export default function CompareLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <>
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
            <div className="w-8 h-8 rounded bg-primary-100 flex items-center justify-center text-primary-700 shrink-0">
              <Combine className="w-4 h-4" />
            </div>
            {!isCollapsed && (
              <div className="whitespace-nowrap overflow-hidden transition-opacity duration-300">
                <h3 className="text-sm font-bold text-slate-800">Trạm Đối Chiếu</h3>
                <p className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Workspace</p>
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          <Link to="/app/compare" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-primary-700 bg-primary-50 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3">
              <Combine className="w-4 h-4 text-primary-600 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap font-semibold">Tạo Đối chiếu chéo</span>}
            </div>
          </Link>

          <Link to="/app/compare/history" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3">
              <History className="w-4 h-4 text-slate-400 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap">Lịch sử Đối chiếu</span>}
            </div>
          </Link>
          
          <Link to="/app/compare/results" className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg font-medium text-slate-600 hover:bg-slate-50 hover:text-primary-700 transition-colors focus-visible:ring-2 focus-visible:ring-primary-500">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-4 h-4 text-success-500 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap">Kết quả đã xác nhận</span>}
            </div>
          </Link>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 bg-slate-50 overflow-y-auto w-full">
          <Outlet />
      </main>
    </>
  )
}
