export default function EpicCReportBuilder() {
  return (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      
      
      {/* Top Action Bar */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-info-light border border-info-light/50 text-info font-bold">W</div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-slate-900 text-sm">Kết luận thanh tra Q1/2024</h1>
              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase">Nháp</span>
            </div>
            <p className="text-xs text-slate-500">Mẫu: Báo cáo Tiêu chuẩn 01 • Tự động lưu lúc 10:45 AM</p>
          </div>
        </div>

        {/* Toolbar Editor Controls */}
        <div className="flex items-center gap-1 bg-slate-100 p-1 rounded border border-slate-200 hidden md:flex">
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm"><i data-lucide="undo-2" className="w-4 h-4"></i></button>
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm"><i data-lucide="redo-2" className="w-4 h-4"></i></button>
          <div className="w-px h-4 bg-slate-300 mx-1"></div>
          <button className="p-1.5 rounded text-slate-900 bg-white shadow-sm font-bold">B</button>
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm italic">I</button>
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm underline">U</button>
          <div className="w-px h-4 bg-slate-300 mx-1"></div>
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm"><i data-lucide="list" className="w-4 h-4"></i></button>
          <button className="p-1.5 rounded text-slate-600 hover:bg-white hover:shadow-sm"><i data-lucide="list-ordered" className="w-4 h-4"></i></button>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 px-3 py-1.5 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50">
            <i data-lucide="printer" className="w-4 h-4"></i> Print
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 shadow-sm transition">
            <i data-lucide="send" className="w-4 h-4"></i> Nộp duyệt Manager
          </button>
        </div>
      </header>

      {/* PANELS CONTENT */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* RIGHT PANEL: AI REPORT EDITOR */}
        <div className="flex-[3] flex flex-col bg-slate-100 relative shadow-[inset_4px_0_10px_rgba(0,0,0,0.02)]">
          <div className="flex-1 overflow-y-auto px-8 py-10 flex justify-center">
            
            {/* A4 Document Wrapper */}
            <div className="w-full max-w-[800px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] min-h-[1100px] px-16 py-16 text-[15px] font-sans text-slate-800 leading-loose border border-slate-200">
              
              {/* Content */}
              <h2 className="text-center font-bold text-xl uppercase mb-12 tracking-wide font-serif">Kết luận Thanh tra Công ty XYZ (Quý 1/2024)</h2>

              <h3 className="font-bold text-lg mb-4 mt-8">1. Cơ sở thanh tra</h3>
              <p className="text-justify indent-8 mb-4">Căn cứ Quyết định số 123/QĐ-TT ngày 01/01/2024 của Giám đốc Trung tâm về việc tiến hành thanh tra hoạt động mua sắm thiết bị và dịch vụ đám mây tại Công ty XYZ trong quý 1 năm 2024.</p>

              <h3 className="font-bold text-lg mb-4 mt-8 flex items-center justify-between">
                2. Kết quả kiểm tra
                <button className="text-ai-purple-600 hover:text-ai-purple-700 text-[13px] font-semibold flex items-center gap-1 bg-ai-purple-50 px-2 py-0.5 rounded cursor-pointer leading-normal mb-1 border border-ai-purple-200">
                  <i data-lucide="sparkles" className="w-3.5 h-3.5"></i> Gen AI (Rewrite)
                </button>
              </h3>
              <p className="text-justify indent-8 mb-4">Đoàn đã tiến hành thu thập, đối chiếu chứng từ (hóa đơn, biên bản nghiệm thu) từ cả Tổ chức cung cấp và đơn vị trực tiếp nghiệm thu.</p>

              {/* AI Generated / Suggested Text Block */}
              <div className="relative group my-6">
                {/* Accept/Reject overlay tags */}
                <div className="absolute -top-3 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex bg-white shadow-lg border border-slate-200 rounded-md z-10 overflow-hidden text-sm">
                  <button className="px-3 py-1.5 text-success-dark bg-success-light hover:bg-success hover:text-white flex items-center gap-1 font-semibold leading-none"><i data-lucide="check" className="w-4 h-4"></i> Accept</button>
                  <button className="px-3 py-1.5 text-danger-dark bg-danger-light hover:bg-danger hover:text-white flex items-center gap-1 font-semibold leading-none border-l border-slate-200"><i data-lucide="x" className="w-4 h-4"></i> Reject</button>
                </div>
                
                <div className="bg-ai-purple-50/50 outline outline-2 outline-ai-purple-300 outline-dashed -mx-4 px-4 py-2 rounded">
                  <span className="absolute -left-3 top-2 bg-ai-purple-500 text-white p-0.5 rounded shadow">
                    <i data-lucide="sparkles" className="w-3.5 h-3.5"></i>
                  </span>
                  <p className="text-justify indent-8 text-slate-800">
                    <span className="bg-warning/20 font-medium">Theo kết quả tự động đối chiếu từ Workspace (WS-Q1-2024)</span>, ghi nhận tổng chi phí luỹ kế cho mảng dịch vụ đám mây AWS là <strong>1,400,000,000 VND</strong>, vượt 200,000,000 VND so với số liệu ghi nhận trên Báo cáo nội bộ do phòng Kế toán cung cấp. 
                  </p>
                  <p className="mt-2 text-justify indent-8">
                    Cụ thể hóa đơn số <span className="bg-warning/20">INV-10024</span> ghi nhận chi phí tháng 3 lên tới 650,000,000 VND thay vì 450,000,000 VND. <a href="#" className="text-ai-purple-600 underline font-medium">[Footnote Reference 1]</a>
                  </p>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-4 mt-8">3. Kiến nghị và Đề xuất</h3>
              <p className="text-justify indent-8 mb-4">Yêu cầu phòng Kế toán rà soát lại biến động chi phí phát sinh bổ sung ở tháng 3 và nộp giải trình chậm nhất ngày 15/04/2024.</p>
              
            </div>
          </div>
        </div>

        {/* LEFT PANEL: THÔNG TIN NGUỒN (AI ASSISTANT / FINDINGS LOGS) */}
        <div className="w-[30%] min-w-[320px] max-w-[400px] border-l border-slate-200 bg-white flex flex-col shrink-0 flex-shrink-0 z-20 shadow-[-4px_0_15px_rgba(0,0,0,0.03)]">
          <div className="h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 font-bold text-[13px] text-slate-700 uppercase tracking-wide gap-2">
            <i data-lucide="library" className="w-4 h-4 text-primary-500"></i> Nguồn tham chiếu (Findings)
          </div>

          {/* Pinned Data Sources */}
          <div className="p-4 border-b border-slate-200">
            <p className="text-xs font-semibold text-slate-500 mb-2">Workspace tham chiếu:</p>
            <div className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-md text-sm">
              <div className="flex items-center gap-2 text-slate-700 font-semibold truncate">
                <i data-lucide="combine" className="w-4 h-4 text-primary-600"></i> WS-Q1-2024
              </div>
              <button className="text-primary-600 hover:underline text-xs">Mở tab mới</button>
            </div>
          </div>

          {/* Finding Cards (Drag and drop into editor or click to insert) */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
             <div className="text-xs font-semibold text-slate-500 mb-1 flex justify-between">
                Các bất thường cần ghi chú (2 items)
             </div>

            {/* Finding Card 1 */}
            <div className="bg-white border border-danger/30 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-white bg-danger px-1.5 py-0.5 rounded leading-none uppercase">Lệch số liệu</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 mt-2 line-clamp-2">Lệch luỹ kế 200tr so với Hoá đơn AWS tháng 3 (INV-10024).</p>
              
              {/* Action: Translate to text format */}
               <div className="mt-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs bg-ai-purple-600 hover:bg-ai-purple-700 text-white px-2.5 py-1.5 rounded inline-flex items-center gap-1 font-semibold shadow-sm">
                   <i data-lucide="sparkles" className="w-3 h-3"></i> Tự động Sinh văn bản chèn
                </button>
               </div>
            </div>

             {/* Finding Card 2 */}
             <div className="bg-white border border-warning/50 rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow relative group">
              <div className="flex justify-between items-start mb-1">
                <span className="text-[10px] font-bold text-white bg-warning-dark px-1.5 py-0.5 rounded leading-none uppercase">Thiếu bằng chứng</span>
              </div>
              <p className="text-sm font-semibold text-slate-800 mt-2 line-clamp-2">Thiếu Biên bản nghiệm thu thiết bị ngoại vi.</p>
               <div className="mt-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-xs bg-slate-100 hover:bg-ai-purple-600 hover:text-white text-slate-700 px-2.5 py-1.5 rounded border border-slate-200 hover:border-ai-purple-600 inline-flex items-center gap-1 font-semibold transition-all">
                   <i data-lucide="sparkles" className="w-3 h-3"></i> Tự động Sinh
                </button>
               </div>
            </div>

          </div>
          
          {/* AI Prompt Bar (Fixed at bottom) */}
          <div className="p-4 bg-slate-50 border-t border-slate-200">
            <div className="relative">
              <input type="text" placeholder="Hỏi AI để viết lại đoạn..." className="w-full h-10 pl-3 pr-10 text-sm border-2 border-ai-purple-200 bg-white rounded-lg focus:outline-none focus:border-ai-purple-500 focus:ring-2 focus:ring-ai-purple-100 transition-all font-medium" />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 bg-ai-purple-600 hover:bg-ai-purple-700 rounded text-white flex items-center justify-center transition-colors">
                <i data-lucide="send" className="w-4 h-4"></i>
              </button>
            </div>
            <p className="text-[10px] text-center text-slate-400 mt-2 font-medium">✨ K-Portal GenAI Engine chạy tại local</p>
          </div>
        </div>

      </div>

    
    </div>
  )
}
