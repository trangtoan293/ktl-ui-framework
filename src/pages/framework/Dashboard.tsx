import { ChevronRight, Settings2, Plus, LayoutGrid, FileText, AlertTriangle, Sparkles, UserCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-0.5">
                <a href="#" className="hover:text-primary-600 transition-colors">Workspace</a>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-800">Dashboard</span>
            </nav>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Kho tài liệu Dashboard</h1>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="shadow-sm">
            <Settings2 className="w-4 h-4 mr-2" /> Cấu hình
          </Button>
          <Button className="shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Thêm tài liệu
          </Button>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-8 pb-24">
        <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-sm text-primary-800">
            <div className="flex gap-3">
                <UserCheck className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                <div>
                    <h4 className="font-bold text-primary-900 mb-1">Chào mừng quay lại, Trần Toàn</h4>
                    <p className="leading-relaxed">Bạn có 3 tài liệu cần duyệt gấp và 12 cảnh báo bất thường trong báo cáo tháng 3.</p>
                </div>
            </div>
        </div>

        <section>
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-slate-400" />
            Data Cards & System State
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Success Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-info-50 text-info-600 flex items-center justify-center group-hover:bg-info-600 group-hover:text-white transition-colors">
                        <FileText className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-700 border border-success-200">Hoàn thành</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Báo cáo Mảng B</h3>
                <p className="text-sm text-slate-500 line-clamp-2">Kiểm toán hoàn thành bóc tách 240 metadata.</p>
            </div>

            {/* Warning Card */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-lg bg-warning-50 text-warning-600 flex items-center justify-center group-hover:bg-warning-600 group-hover:text-white transition-colors">
                        <AlertTriangle className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-warning-50 text-warning-700 border border-warning-200">Cần review</span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Hợp đồng vay #882</h3>
                <p className="text-sm text-slate-500 line-clamp-2">Phát hiện mâu thuẫn 3 số liệu lãi suất.</p>
            </div>

            {/* AI Card */}
            <div className="bg-white border border-ai-200 rounded-xl p-5 shadow-sm hover:shadow-[0_4px_24px_rgba(124,58,237,0.15)] transition-all cursor-pointer group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-ai-600/10 to-indigo-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none transition-transform group-hover:scale-110"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-ai-50 text-ai-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-ai-600 group-hover:to-indigo-500 group-hover:text-white transition-colors border border-ai-200 group-hover:border-transparent">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-ai-50 text-ai-700 border border-ai-200 uppercase tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-ai-600 animate-pulse"></span> Processing
                    </span>
                </div>
                <h3 className="font-semibold text-slate-900 mb-1 relative z-10">Phân tích chéo Rule Set</h3>
                <p className="text-sm text-slate-500 line-clamp-2 relative z-10">AI đang quét đối chiếu 150 quy định với hợp đồng thanh lý...</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
