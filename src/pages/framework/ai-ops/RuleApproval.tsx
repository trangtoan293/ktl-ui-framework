import React, { useState } from 'react'
import { CheckCircle2, XCircle, ChevronLeft, GitMerge, Cpu, Play, Undo2, Ban } from 'lucide-react'

export default function RuleApproval() {
  const [activeTab, setActiveTab] = useState<'details' | 'test' | 'history'>('details')

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50">
      
      {/* Header */}
      <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-sm z-10 w-full">
        <div className="flex items-center gap-4">
           <button className="flex items-center justify-center w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-500 transition-colors">
             <ChevronLeft className="w-5 h-5" />
           </button>
           <div className="w-px h-6 bg-slate-200"></div>
           <div>
             <div className="flex items-center gap-2 mb-0.5">
               <span className="px-1.5 py-0.5 bg-warning/10 text-warning-dark border border-warning/20 rounded text-[10px] font-bold uppercase tracking-wider">Pending Approval</span>
               <h1 className="text-lg font-bold text-slate-800">Rule_Match_Chu_Ky_So</h1>
             </div>
             <p className="text-xs font-semibold text-slate-500">Loại: Check OCR Regex Pattern • Nộp bởi: Analyst Toàn T.</p>
           </div>
        </div>
        
        <div className="flex items-center gap-3">
           <button className="px-4 py-2 border-2 border-danger text-danger hover:bg-danger hover:text-white transition-all font-bold text-sm rounded-lg flex items-center gap-2 shadow-sm">
              <Ban className="w-4 h-4" /> REJECT
           </button>
           <button className="px-4 py-2 border-2 border-warning text-warning-dark hover:bg-warning hover:text-white transition-all font-bold text-sm rounded-lg flex items-center gap-2 shadow-sm">
              <Undo2 className="w-4 h-4" /> YÊU CẦU DUYỆT LẠI
           </button>
           <button className="px-6 py-2 bg-slate-900 border-2 border-slate-900 hover:bg-black text-white transition-all font-bold text-sm rounded-lg flex items-center gap-2 shadow-sm">
              <CheckCircle2 className="w-4 h-4" /> APPROVE & DEPLOY
           </button>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Information / Test Config */}
        <div className="flex-[5] flex flex-col bg-white border-r border-slate-200 relative">
           
           {/* Tab selector */}
           <div className="flex px-8 pt-4 border-b border-slate-200 bg-slate-50 gap-4 shrink-0">
             <button 
               onClick={() => setActiveTab('details')}
               className={`flex items-center gap-2 px-2 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'details' ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               <Cpu className="w-4 h-4" /> Chi tiết Configuration
             </button>
             <button 
               onClick={() => setActiveTab('test')}
               className={`flex items-center gap-2 px-2 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'test' ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               <Play className="w-4 h-4" /> Demo Test Sandbox
             </button>
             <button 
               onClick={() => setActiveTab('history')}
               className={`flex items-center gap-2 px-2 py-3 text-sm font-bold border-b-2 transition-colors ${activeTab === 'history' ? 'border-warning-dark text-warning-dark' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               <GitMerge className="w-4 h-4" /> Track Changes (v1.0 {`->`} v1.1)
             </button>
           </div>
           
           <div className="flex-1 overflow-y-auto bg-white p-8">
             
             {activeTab === 'details' && (
                <div className="max-w-3xl space-y-8">
                   <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                         <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Thông tin Cơ bản</h3>
                         <div className="space-y-3 text-sm">
                           <div>
                              <span className="block text-xs font-semibold text-slate-400 mb-0.5">Tên Rule (ID)</span>
                              <span className="font-bold text-slate-700">Rule_Match_Chu_Ky_So</span>
                           </div>
                           <div>
                              <span className="block text-xs font-semibold text-slate-400 mb-0.5">Mô tả logic</span>
                              <span className="text-slate-700">Xác minh tài liệu OCR có chứa khối chữ ký số điện tử của Tổng Giám Đốc hoặc Phó TGĐ.</span>
                           </div>
                           <div>
                              <span className="block text-xs font-semibold text-slate-400 mb-0.5">Loại Engine xử lý</span>
                              <span className="inline-flex px-2 py-1 bg-slate-100 border border-slate-200 rounded font-bold text-slate-600 text-xs">Regex + NLP Fallback</span>
                           </div>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Môi trường Áp dụng</h3>
                         <div className="space-y-3 text-sm">
                           <div>
                              <span className="block text-xs font-semibold text-slate-400 mb-0.5">Targets</span>
                              <span className="text-slate-700 font-bold flex gap-2 mt-1">
                                <span className="bg-success/10 text-success-dark px-2 py-0.5 rounded border border-success/20">Production</span>
                                <span className="bg-warning/10 text-warning-dark px-2 py-0.5 rounded border border-warning/20">Staging</span>
                              </span>
                           </div>
                           <div className="mt-4">
                              <span className="block text-xs font-semibold text-danger mb-0.5">Action Request</span>
                              <span className="font-bold text-danger bg-danger/5 p-2 rounded block border border-danger/10">Bật kích hoạt Rule trên Production.</span>
                           </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <h3 className="text-sm font-bold text-slate-800 border-b border-slate-100 pb-2">Prompt / Code Executable</h3>
                      <div className="bg-slate-900 rounded-xl p-5 font-mono text-[13px] text-slate-300 leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
{`{
  "trigger": "OCR_DOC_PARSE",
  "match_logic": {
    "type": "hybrid",
    "regex": "(Ký bởi|Digitally signed by):\\\\s*(Trần Toàn|Lê Lan)",
    "semantic_prompt": "Kiểm tra xem ở cuối tài liệu có con dấu điện tử được cấp bởi hệ thống D-Sign của công ty hay không."
  },
  "confidence_threshold": 0.90,
  "action_on_fail": "WARN_AND_CONTINUE"
}`}
                      </div>
                   </div>
                </div>
             )}

             {activeTab === 'test' && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                   <Play className="w-16 h-16 text-slate-300" />
                   <div className="text-center">
                     <p className="font-bold text-slate-600">Test Console Integration</p>
                     <p className="text-sm mt-1">Component kế thừa trực tiếp từ RuleTest.tsx để Manager thử nghiệm lại logic của rule.</p>
                   </div>
                </div>
             )}

             {activeTab === 'history' && (
                <div className="max-w-3xl space-y-6">
                   <div className="flex items-center justify-between bg-warning/10 border-l-4 border-warning p-4 rounded-r-lg">
                      <div>
                        <p className="text-sm font-bold text-warning-dark">Thay đổi cập nhật Confidence Threshold</p>
                        <p className="text-xs text-warning-dark/80 mt-0.5">Analyst đã giảm độ chặt chẽ từ 0.95 xuống 0.90 do model OCR thường bị nhiễu ở con dấu đóng đè.</p>
                      </div>
                   </div>
                   
                   <div className="font-mono text-xs shadow-sm border border-slate-200 rounded-lg overflow-hidden">
                      <div className="bg-slate-100 px-4 py-2 text-slate-500 font-bold border-b border-slate-200">Diff Config.json</div>
                      <div className="bg-white p-4 leading-loose">
                         <div className="flex"><span className="w-8 text-slate-300 select-none">10</span><span className="text-slate-600">    "semantic_prompt": "Kiểm tra xem ở..."</span></div>
                         <div className="flex"><span className="w-8 text-slate-300 select-none">11</span><span className="text-slate-600">  {"},"}</span></div>
                         <div className="flex bg-danger/10 text-danger-dark font-medium"><span className="w-8 text-danger select-none">12</span><span className="">- "confidence_threshold": 0.95,</span></div>
                         <div className="flex bg-success/10 text-success-dark font-medium"><span className="w-8 text-success select-none">12</span><span className="">+ "confidence_threshold": 0.90,</span></div>
                         <div className="flex"><span className="w-8 text-slate-300 select-none">13</span><span className="text-slate-600">  "action_on_fail": "WARN_AND_CONTINUE"</span></div>
                      </div>
                   </div>
                </div>
             )}

           </div>
        </div>

        {/* RIGHT: Manager Comments & Checklist */}
        <div className="flex-[3] flex flex-col bg-slate-50 relative border-l border-slate-200">
           
           <div className="h-12 border-b border-slate-200 bg-white flex items-center px-6 font-bold text-xs uppercase tracking-wider text-slate-500 gap-2 shrink-0">
             Audit Checklist & Notes
           </div>

           <div className="flex-1 overflow-y-auto p-6 space-y-6">
             
             {/* Auto Checklist */}
             <div className="bg-white border text-sm border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="p-3 bg-slate-100 font-bold text-slate-700 border-b border-slate-200">Kiểm tra tự động (AI CI/CD)</div>
                <div className="p-4 space-y-3">
                   <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-slate-700">JSON Syntax Validity</span>
                     <span className="flex items-center gap-1 text-success font-bold"><CheckCircle2 className="w-4 h-4"/> PASS</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-slate-700">Unit Tests (2/2 Cases)</span>
                     <span className="flex items-center gap-1 text-success font-bold"><CheckCircle2 className="w-4 h-4"/> PASS</span>
                   </div>
                   <div className="flex justify-between items-center text-sm font-medium">
                     <span className="text-slate-700">Performance Check ({`<`} 50ms)</span>
                     <span className="flex items-center gap-1 text-success font-bold"><CheckCircle2 className="w-4 h-4"/> PASS</span>
                   </div>
                </div>
             </div>

             {/* Manager Note */}
             <div className="space-y-3">
                <label className="text-sm font-bold text-slate-800">Ý kiến phản hồi của Manager</label>
                <textarea 
                  placeholder="Ghi chú lý do nếu Reject hoặc Yêu cầu duyệt lại..." 
                  className="w-full h-32 p-3 bg-white border border-slate-300 focus:border-indigo-500 rounded-xl text-sm outline-none resize-none shadow-inner"
                ></textarea>
                <p className="text-[11px] text-slate-500">Các action Approve/Reject có thể thực hiện thông qua các nút lệnh trên góc phải Header.</p>
             </div>

           </div>

        </div>

      </div>
    </div>
  )
}
