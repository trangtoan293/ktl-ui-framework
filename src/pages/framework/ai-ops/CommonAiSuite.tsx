import React, { useState } from 'react'
import { Sparkles, FileText, CheckSquare, PenTool, LayoutTemplate, AlignLeft, Send, ArrowRight, Download, Bot, Copy, RefreshCcw } from 'lucide-react'

export default function CommonAiSuite() {
  const [activeTab, setActiveTab] = useState<'com-1' | 'com-2' | 'com-4'>('com-1')

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50 relative overflow-hidden">
      
      {/* Header */}
      <div className="h-20 bg-gradient-to-r from-slate-900 to-indigo-900 px-8 flex items-center justify-between shrink-0 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
        <div className="flex items-center gap-4 relative z-10">
           <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20">
             <Bot className="w-6 h-6 text-indigo-300" />
           </div>
           <div>
             <h1 className="text-xl font-bold text-white flex items-center gap-2">K-Portal AI Utilities</h1>
             <p className="text-xs font-medium text-indigo-200 mt-0.5">Tiện ích AI dùng chung (Tóm tắt, Khớp tiêu chí, Hỗ trợ viết)</p>
           </div>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Utility Selectors */}
        <div className="w-80 bg-white border-r border-slate-200 flex flex-col z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
           <div className="p-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Danh mục Tiện ích</h3>
              
              <div className="space-y-3">
                 <button 
                   onClick={() => setActiveTab('com-1')}
                   className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-2 ${activeTab === 'com-1' ? 'bg-indigo-50 border-2 border-indigo-500 shadow-sm' : 'bg-white border-2 border-slate-100 hover:border-slate-300'}`}
                 >
                    <div className="flex items-center gap-2 font-bold text-slate-800"><AlignLeft className={`w-5 h-5 ${activeTab === 'com-1' ? 'text-indigo-600' : 'text-slate-400'}`} /> COM-1: Tóm tắt & Trích xuất</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Auto-summarize tài liệu dài, trích xuất ý chính và keywords.</p>
                 </button>

                 <button 
                   onClick={() => setActiveTab('com-2')}
                   className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-2 ${activeTab === 'com-2' ? 'bg-primary-50 border-2 border-primary-500 shadow-sm' : 'bg-white border-2 border-slate-100 hover:border-slate-300'}`}
                 >
                    <div className="flex items-center gap-2 font-bold text-slate-800"><CheckSquare className={`w-5 h-5 ${activeTab === 'com-2' ? 'text-primary-600' : 'text-slate-400'}`} /> COM-2: Đánh giá theo Form</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Gợi ý mapping nội dung văn bản với một Checklist / Mẫu đánh giá cho trước.</p>
                 </button>

                 <button 
                   onClick={() => setActiveTab('com-4')}
                   className={`w-full text-left p-4 rounded-xl transition-all flex flex-col gap-2 ${activeTab === 'com-4' ? 'bg-purple-50 border-2 border-purple-500 shadow-sm' : 'bg-white border-2 border-slate-100 hover:border-slate-300'}`}
                 >
                    <div className="flex items-center gap-2 font-bold text-slate-800"><PenTool className={`w-5 h-5 ${activeTab === 'com-4' ? 'text-purple-600' : 'text-slate-400'}`} /> COM-4: Hỗ trợ Viết (Co-pilot)</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Sinh văn bản soạn thảo nhanh, điền biểu mẫu, tạo draft báo cáo.</p>
                 </button>
              </div>
           </div>
        </div>

        {/* RIGHT: Dynamic Workflow Config / Result */}
        <div className="flex-1 bg-slate-50 overflow-y-auto p-8 relative">
           
           {/* COM-1 View */}
           {activeTab === 'com-1' && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-indigo-50/50">
                       <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Sparkles className="w-5 h-5 text-indigo-500"/> Tóm tắt Document</h2>
                       <button className="px-4 py-2 bg-indigo-600 text-white font-bold text-sm rounded-lg hover:bg-indigo-700 transition">Trích xuất ngay</button>
                    </div>
                    <div className="flex p-6 gap-8 text-sm">
                       <div className="flex-1 space-y-4">
                          <label className="font-bold text-slate-700 block text-xs uppercase tracking-widest">Nguồn đầu vào</label>
                          <div className="h-64 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 flex flex-col items-center justify-center text-slate-400 hover:bg-slate-100 cursor-pointer transition">
                             <FileText className="w-10 h-10 mb-2 text-indigo-300" />
                             <p className="font-medium text-slate-600">Kéo thả PDF / DOCX hoặc dán nội dung</p>
                             <p className="text-xs mt-1">Hỗ trợ tối đa 50 trang</p>
                          </div>
                       </div>
                       <div className="flex-1 space-y-4">
                          <label className="font-bold text-slate-700 block text-xs uppercase tracking-widest text-indigo-600 flex items-center justify-between">
                            Kết quả AI 
                            <button className="text-slate-400 hover:text-slate-700"><Copy className="w-4 h-4"/></button>
                          </label>
                          <div className="h-64 border border-indigo-100 bg-indigo-50/30 rounded-xl p-5 overflow-y-auto shadow-inner text-slate-700 leading-relaxed relative">
                             <span className="font-bold border-b border-slate-300 block pb-2 mb-2">Executive Summary:</span>
                             <p className="mb-2">Tài liệu đề cập đến Kế hoạch thanh tra Dự án Hiện đại hóa Cổng thông tin giai đoạn 1.</p>
                             <ul className="list-disc pl-5 space-y-1 text-sm font-medium">
                               <li>Tổng ngân sách: 100 tỷ VNĐ.</li>
                               <li>Tiến độ giải ngân: 45% (Chậm so với kế hoạch mốc T4/2026).</li>
                               <li>Lỗi phát sinh: Hồ sơ thầu gói phần mềm thiếu chữ ký số của Giám đốc dự án.</li>
                             </ul>
                             <div className="absolute top-0 right-0 bg-gradient-to-l from-indigo-50 to-transparent w-8 h-full pointer-events-none"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           )}

           {/* COM-2 View */}
           {activeTab === 'com-2' && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-primary-50/50">
                       <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Sparkles className="w-5 h-5 text-primary-500"/> Đối chiếu Form / Checklist</h2>
                       <button className="px-4 py-2 bg-primary-600 text-white font-bold text-sm rounded-lg hover:bg-primary-700 transition">Bắt đầu Mapping</button>
                    </div>
                    <div className="p-6 space-y-8 text-sm">
                       {/* Config */}
                       <div className="flex gap-4">
                          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4">
                             <h4 className="font-bold mb-2 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400"/> 1. Chọn Tài Liệu</h4>
                             <select className="w-full bg-white border border-slate-300 rounded p-2 outline-none">
                               <option>Bien_Ban_Kiem_Tra_Hien_Truong_2026.pdf</option>
                             </select>
                          </div>
                          <div className="flex items-center justify-center w-8 text-slate-300"><ArrowRight className="w-5 h-5" /></div>
                          <div className="flex-1 bg-slate-50 border border-slate-200 rounded-lg p-4">
                             <h4 className="font-bold mb-2 flex items-center gap-2"><LayoutTemplate className="w-4 h-4 text-slate-400"/> 2. Mẫu Đánh giá (Checklist)</h4>
                             <select className="w-full bg-white border border-slate-300 rounded p-2 outline-none">
                               <option>ISO 9001 - Mục Thi công Nội thất</option>
                             </select>
                          </div>
                       </div>

                       {/* Output mapping */}
                       <div>
                          <label className="font-bold text-slate-700 block text-xs uppercase tracking-widest mb-3">Kết quả Mapping (Draft Review)</label>
                          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                             <table className="w-full text-left text-sm bg-white">
                                <thead className="bg-slate-50 text-slate-500">
                                   <tr>
                                     <th className="p-3 font-bold">Tiêu chí (Checklist)</th>
                                     <th className="p-3 font-bold">Trích xuất thực tế</th>
                                     <th className="p-3 font-bold text-center">AI Đánh giá</th>
                                   </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                   <tr>
                                      <td className="p-3">Có bản vẽ thi công được ký duyệt.</td>
                                      <td className="p-3 text-slate-600">Đính kèm Phụ lục 1A - Bản vẽ CAD có mộc son.</td>
                                      <td className="p-3 text-center"><span className="bg-success/10 text-success-dark px-2 py-1 rounded font-bold text-[10px]">PASS</span></td>
                                   </tr>
                                   <tr>
                                      <td className="p-3">Số lượng nhân công {">="} 10 người/ca.</td>
                                      <td className="p-3 text-slate-600">Ghi nhận tại trang 3: "Sĩ số ca 1 là 8 công nhân".</td>
                                      <td className="p-3 text-center"><span className="bg-danger/10 text-danger-dark px-2 py-1 rounded font-bold text-[10px]">FAIL</span></td>
                                   </tr>
                                </tbody>
                             </table>
                          </div>
                          <div className="mt-3 flex justify-end">
                            <button className="flex items-center gap-1 text-primary-600 font-bold text-xs hover:underline"><Download className="w-3.5 h-3.5"/> Export Kết quả ra Excel</button>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           )}

           {/* COM-4 View */}
           {activeTab === 'com-4' && (
              <div className="max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4">
                 <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-[600px]">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-purple-50/50 shrink-0">
                       <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Sparkles className="w-5 h-5 text-purple-500"/> Co-pilot Soạn thảo</h2>
                       <button className="p-2 text-slate-400 hover:bg-slate-100 rounded-lg transition"><RefreshCcw className="w-4 h-4"/></button>
                    </div>
                    
                    <div className="flex-1 flex flex-col bg-slate-50 relative">
                       {/* Chat/Drafting area */}
                       <div className="flex-1 overflow-y-auto p-6 space-y-6">
                          <div className="flex items-start gap-4 max-w-[80%]">
                             <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm"><Bot className="w-4 h-4"/></div>
                             <div className="bg-white border border-slate-200 p-4 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm leading-relaxed relative group">
                                Chào bạn! Tôi là AI Hỗ trợ viết. Bạn cần soạn thảo văn bản gì hôm nay? (Ví dụ: Thư mời họp, Thông báo nghỉ lễ, Biên bản giải trình lỗi thiết bị...)
                             </div>
                          </div>

                          <div className="flex items-start gap-4 max-w-[80%] ml-auto flex-row-reverse">
                             <div className="w-8 h-8 rounded-full bg-slate-300 text-slate-600 flex items-center justify-center shrink-0 font-bold text-xs shadow-sm">US</div>
                             <div className="bg-purple-600 text-white p-4 rounded-2xl rounded-tr-sm text-sm shadow-sm leading-relaxed">
                                Viết cho tôi một thông báo nhắc nhở các đơn vị nộp Báo cáo giải ngân trước ngày 20/04. Giọng điệu hành chính, nghiêm túc.
                             </div>
                          </div>

                          <div className="flex items-start gap-4 max-w-[85%]">
                             <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-sm"><Bot className="w-4 h-4"/></div>
                             <div className="bg-white border border-slate-200 p-5 rounded-2xl rounded-tl-sm text-sm text-slate-800 shadow-sm leading-relaxed relative flex flex-col font-serif">
                                <h4 className="font-bold text-center mb-4 uppercase">Thông Báo<br/><span className="text-xs font-normal lowercase">(V/v: Nộp Báo cáo giải ngân tháng 04/2026)</span></h4>
                                <p className="text-justify mb-2">Thực hiện Kế hoạch công tác năm 2026, để đảm bảo tiến độ tổng hợp số liệu báo cáo Ban điều hành, Phòng Kế hoạch yêu cầu các đơn vị trực thuộc thực hiện nghiêm túc nội dung sau:</p>
                                <p className="text-justify mb-2 font-bold">1. Hoàn thiện và nộp bản mềm Báo cáo giải ngân định kỳ tháng 04/2026 thông qua hệ thống K-Portal trước 17h00 ngày 20/04/2026.</p>
                                <p className="text-justify mb-4">2. Báo cáo phải có đầy đủ chữ ký số của Thủ trưởng đơn vị và Kế toán trưởng.</p>
                                <p className="text-justify italic">Đề nghị các đơn vị khẩn trương thực hiện. Mọi sự chậm trễ sẽ được ghi nhận vào kết quả đánh giá KPI quý.</p>
                                
                                <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end gap-2">
                                  <button className="px-3 py-1.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded border border-slate-200 flex items-center gap-1"><Copy className="w-3 h-3"/> Copy</button>
                                  <button className="px-3 py-1.5 text-xs font-bold text-white bg-purple-600 hover:bg-purple-700 rounded shadow-sm flex items-center gap-1"><Download className="w-3 h-3"/> Export DOCX</button>
                                </div>
                             </div>
                          </div>
                       </div>

                       {/* Input bar */}
                       <div className="p-4 bg-white border-t border-slate-200 shrink-0">
                          <div className="relative">
                             <textarea 
                               placeholder="Yêu cầu AI viết báo cáo hoặc điều chỉnh giọng điệu..." 
                               className="w-full pl-4 pr-12 pt-3 pb-3 bg-slate-50 border border-slate-300 rounded-xl outline-none focus:border-purple-500 focus:bg-white resize-none h-14 text-sm"
                             ></textarea>
                             <button className="absolute right-2 top-2 bottom-2 aspect-square flex items-center justify-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                                <Send className="w-4 h-4 ml-0.5" />
                             </button>
                          </div>
                          <div className="flex gap-2 mt-2">
                            <span className="bg-slate-100 px-2 py-1 text-[10px] text-slate-500 rounded-full font-bold cursor-pointer hover:bg-slate-200">Giọng nghiêm túc</span>
                            <span className="bg-slate-100 px-2 py-1 text-[10px] text-slate-500 rounded-full font-bold cursor-pointer hover:bg-slate-200">Viết dài hơn</span>
                            <span className="bg-slate-100 px-2 py-1 text-[10px] text-slate-500 rounded-full font-bold cursor-pointer hover:bg-slate-200">Chèn Sample Data</span>
                          </div>
                       </div>
                    </div>

                 </div>
              </div>
           )}

        </div>

      </div>
    </div>
  )
}
