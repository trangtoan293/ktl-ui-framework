import { LayoutTemplate, SplitSquareHorizontal, ShieldCheck, Sparkles } from "lucide-react"
import { AIFindingAccordion } from "@/components/framework/AIFindingAccordion"
import { AIClassificationCard } from "@/components/framework/AIClassificationCard"
import { SearchableSelectDrop } from "@/components/framework/SearchableSelect"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"

export default function WorkspacePatternsPage() {
  const mockFindings = [
    {
      id: "f1",
      title: "Chênh lệch giá trị quyết toán (VAT)",
      status: "mismatch" as const,
      statusLabel: "Sai lệch 5%",
      confidence: 94,
      items: [
        { label: "Báo cáo nội bộ", document: "BC_Tài_chính_Q1.pdf", value: "450,000,000" },
        { label: "Hoá đơn điện tử", document: "VAT_001234.pdf", value: "425,000,000", isError: true }
      ],
      suggestedFix: "Hệ thống phát hiện thiếu hóa đơn phụ trợ tháng 2. Bạn nên bổ sung hóa đơn GTGT để khớp số liệu."
    },
    {
      id: "f2",
      title: "Thiếu chữ ký phê duyệt",
      status: "missing" as const,
      statusLabel: "Khuyết thiếu",
      items: [
        { label: "Tờ trình", document: "ToTrinh_01.pdf", value: "Có chữ ký Ban Giám Đốc" },
        { label: "Báo cáo thực hiện", document: "BC_ThucHien.pdf", value: "", isError: true }
      ]
    },
    {
      id: "f3",
      title: "Khớp mã số dự án",
      status: "match" as const,
      statusLabel: "Tương đồng",
      confidence: 99,
      items: [
        { label: "Hợp đồng", document: "HD_1234.pdf", value: "DA-2024-ABC" },
        { label: "Biên bản", document: "BB_NghiemThu.pdf", value: "DA-2024-ABC" }
      ]
    }
  ]

  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Advanced Workspace Patterns</h1>
            <p className="text-xs text-slate-500">Complex components tailored for enterprise Epics</p>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-16 pb-24">

        {/* SEARCHABLE COMBOBOX */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Enterprise Form Controls</h2>
              <p className="text-sm text-slate-500">Combobox, Datepickers built with Command + Popover</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="text-xs font-semibold text-slate-700 mb-2 block">Tra cứu danh mục văn bản, điều luật</label>
              <SearchableSelectDrop 
                placeholder="Tìm Nghị định, Thông tư..."
                items={[
                  { label: "Nghị định 15/2020/NĐ-CP", value: "nd15" },
                  { label: "Luật Giao dịch điện tử 2023", value: "luatgd" },
                  { label: "Thông tư 01/2021/TT-BTTTT", value: "tt01" },
                  { label: "Quản lý dữ liệu quốc gia (AI)", value: "qldg" },
                ]} 
              />
              <p className="text-xs text-slate-500 mt-2">Dùng Component Command + Popover để filter qua hàng trăm kết quả.</p>
            </div>
          </div>
        </section>

        {/* AI FINDING ACCORDION */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">AI Finding Accordion</h2>
              <p className="text-sm text-slate-500">Display cross-comparison mismatch results (Epic B)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="max-w-3xl">
              <AIFindingAccordion findings={mockFindings} />
            </div>
          </div>
        </section>

        {/* AI CLASSIFICATION CARD */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <LayoutTemplate className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">AI Classification Metadata</h2>
              <p className="text-sm text-slate-500">Document analysis summary (Epic A)</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="max-w-md">
              <AIClassificationCard 
                label="Báo cáo (Report)"
                confidence={98}
                processes={["Đã căn chỉnh trang 2, 4", "Nhận diện 3 bảng biểu"]}
              />
            </div>
          </div>
        </section>

        {/* SPLIT PANE WORKSPACE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <SplitSquareHorizontal className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Workspace Resizable Panes</h2>
              <p className="text-sm text-slate-500">Split view standard for Document Validation/Extraction</p>
            </div>
          </div>
          
          <div className="rounded-xl shadow-sm border border-slate-200 h-[600px] overflow-hidden bg-white">
            <ResizablePanelGroup direction="horizontal">
              {/* LEFT: File Viewer Mock */}
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full bg-slate-200 flex flex-col p-4">
                  <div className="bg-slate-800 text-white text-xs px-3 py-2 rounded-t-lg font-mono">DocumentViewer.pdf</div>
                  <div className="flex-1 bg-white border border-slate-300 rounded-b-lg shadow-sm flex items-center justify-center">
                    <p className="text-slate-400">PDF Reader / Document Render</p>
                  </div>
                </div>
              </ResizablePanel>
              
              <ResizableHandle withHandle />
              
              {/* RIGHT: Extraction Form Mock */}
              <ResizablePanel defaultSize={50} minSize={30}>
                <div className="h-full bg-slate-50 flex flex-col p-8 overflow-y-auto">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Metadata Extraction</h3>
                  
                  <div className="space-y-4">
                    <AIClassificationCard label="Hợp đồng" confidence={99} processes={["Denoise completed"]} />
                    {/* Mock inputs */}
                    <div className="pt-4 space-y-4">
                      <div className="space-y-1.5 focus-within:relative">
                        <label className="text-xs font-semibold text-slate-700">Người đại diện</label>
                        <input type="text" value="Nguyễn Văn A" className="w-full h-10 px-3 border border-slate-300 rounded-md text-sm outline-none focus:border-primary-500" readOnly/>
                      </div>
                      <div className="space-y-1.5 focus-within:relative">
                        <label className="text-xs font-semibold text-slate-700">Giá trị hợp đồng</label>
                        <input type="text" value="1,000,000,000 VNĐ" className="w-full h-10 px-3 border-2 border-ai-300 bg-ai-50 rounded-md text-sm outline-none focus:border-ai-500" readOnly/>
                        <p className="text-[10px] text-ai-600">AI trích xuất tự động</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </section>

      </div>
    </>
  )
}
