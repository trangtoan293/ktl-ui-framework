import { MousePointer2, Tag, Brain, ChevronRight, Settings2, Plus } from "lucide-react"

// Shadcn Components
import { Button } from "@/components/ui/button"

// K-Portal Framework Components
import { StatusBadge } from "@/components/framework/StatusBadge"
import { AICard } from "@/components/framework/AICard"

export default function ComponentsPage() {
  return (
    <>
      {/* Top Content Header */}
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-0.5" aria-label="Breadcrumb">
                <a href="#" className="hover:text-primary-600 transition-colors">UI Framework</a>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-800">Components</span>
            </nav>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Shadcn Core Components</h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="shadow-sm">
            <Settings2 className="w-4 h-4 mr-2" /> Tùy chỉnh
          </Button>
          <Button className="shadow-sm">
            <Plus className="w-4 h-4 mr-2" /> Khởi tạo Component
          </Button>
        </div>
      </header>

      {/* Page Content */}
      <div className="p-8 max-w-7xl w-full mx-auto space-y-12 pb-24">
        
        {/* BUTTON SYSTEM */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <MousePointer2 className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Shadcn Button System</h2>
              <p className="text-sm text-slate-500">Rendered via imported React logic</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-8">
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">Shadcn Core Base</h3>
              <div className="flex gap-4 items-center flex-wrap">
                <Button variant="default">Default Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link Style</Button>
              </div>
            </div>
            {/* Added custom class extensions */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-4">AI Magic Variant (Custom Configured)</h3>
              <div className="flex gap-4 items-center">
                <Button className="bg-ai text-white hover:bg-ai-700">
                  <Brain className="w-4 h-4 mr-2" />
                  Ask AI to analyze
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* STATUS BADGE SYSTEM */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-success-100 rounded-lg flex items-center justify-center">
              <Tag className="w-5 h-5 text-success-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Status Badge System</h2>
              <p className="text-sm text-slate-500">Reusable Component Demo</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-3">
                <StatusBadge status="draft" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="pending" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="processing" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="revision" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="approved" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="rejected" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="published" />
              </div>
              <div className="space-y-3">
                <StatusBadge status="archived" />
              </div>
            </div>
          </div>
        </section>

        {/* AI SUGGESTION CARD */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-ai-200 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-ai-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">AI Suggestion Card</h2>
              <p className="text-sm text-slate-500">React Props powered Cards</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-ai-100/50 to-white rounded-xl border border-ai-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AICard 
                title="Gợi ý cải tiến quy trình"
                description="Phân tích dữ liệu cho thấy việc tự động hóa bước phê duyệt cấp 1 có thể giảm 40% thời gian xử lý."
                confidence="89%"
                type="suggestion"
              />
              <AICard 
                title="Phát hiện bất thường"
                description="Phát hiện 3 giao dịch có giá trị bất thường trong tháng 3/2024 cần được xem xét kỹ lưỡng."
                confidence="High"
                type="warning"
              />
              <AICard 
                title="Tự động phân loại hoàn tất"
                description="Đã phân loại tự động 156 tài liệu mới với độ chính xác 96.4%."
                confidence="96.4%"
                type="success"
              />
              <AICard 
                title="AI đang phân tích..."
                description="Ước tính còn 2 phút"
                type="processing"
              />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
