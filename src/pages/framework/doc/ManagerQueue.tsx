export default function ManagerQueue() {
  return (
    <div className="flex-1 flex min-w-0 h-full bg-slate-50 overflow-hidden">
      
      {/* PANE 1: THE QUEUE (LIST) */}
      <div className="w-[320px] bg-slate-800 border-r border-slate-700 flex flex-col shrink-0 z-20 shadow-xl relative text-white">
        <div className="h-16 border-b border-slate-700 flex items-center justify-between px-4 shrink-0 bg-slate-900/50">
          <div>
            <h2 className="font-bold tracking-tight text-sm">Phê duyệt Cấp 2 (Manager)</h2>
            <p className="text-[11px] font-semibold text-slate-400 mt-0.5">2 tài liệu chờ phản hồi</p>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-700 text-slate-300 transition-colors">
            <i data-lucide="filter" className="w-4 h-4"></i>
          </button>
        </div>
        
        {/* Sort & Filter Bar */}
        <div className="px-4 py-2 bg-slate-800 border-b border-slate-700 flex items-center gap-2 text-xs">
          <span className="font-medium text-slate-400">View:</span>
          <select className="bg-transparent font-bold text-white outline-none cursor-pointer">
            <option>All Pending</option>
            <option>Escalated (Quá hạn C1)</option>
            <option>Priority High</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Item 1: Selected */}
          <div className="p-4 border-l-4 border-l-warning bg-slate-700 border-b border-slate-600 cursor-pointer relative shadow-inner">
            <p className="text-sm font-bold text-white pr-4 line-clamp-1">HS_VayVon_DuAnX_v2</p>
            <p className="text-xs font-semibold text-slate-300 mt-1">Checker: Trần Thanh Tùng</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-2 py-0.5 bg-slate-800 border border-slate-600 text-[10px] font-bold text-slate-300 rounded uppercase tracking-wider">Hồ sơ Tín dụng</span>
              <span className="text-[11px] font-semibold text-warning flex items-center gap-1"><i data-lucide="shield-check" className="w-3 h-3"></i> Đã duyệt C1</span>
            </div>
          </div>

          {/* Item 2: Escalated Item */}
          <div className="p-4 border-l-4 border-l-danger border-b border-slate-700 hover:bg-slate-700 cursor-pointer transition-colors opacity-80">
            <div className="absolute top-3 right-3 text-[10px] font-bold text-danger bg-danger/10 px-1.5 py-0.5 rounded border border-danger/20 uppercase flex items-center gap-1">
              <i data-lucide="bell-ring" className="w-3 h-3"></i> Escalate
            </div>
            <p className="text-sm font-bold text-slate-200 pr-16 line-clamp-1">QĐ_Bổ_Nhiệm_NS_2024</p>
            <p className="text-xs font-medium text-slate-400 mt-1">Checker: Lê Lan (Quá hạn 2 ngày)</p>
            <div className="flex items-center gap-2 mt-3">
              <button className="px-2 py-1 bg-primary-600 hover:bg-primary-500 text-white text-[10px] font-bold rounded uppercase tracking-wider transition-colors">Điều phối lại</button>
            </div>
          </div>
        </div>
      </div>

      {/* PANE 2: DOCUMENT VIEWER (Read-only + Annotations) */}
      <div className="flex-[5] flex flex-col min-w-0 bg-slate-200 relative z-10 shadow-[inset_4px_0_15px_rgba(0,0,0,0.03)] border-r border-slate-300">
        <div className="h-16 bg-slate-100 border-b border-slate-300 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 bg-white border border-slate-300 rounded shadow-sm p-1">
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600"><i data-lucide="zoom-out" className="w-4 h-4"></i></button>
               <span className="text-xs font-bold w-12 text-center text-slate-700">100%</span>
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600"><i data-lucide="zoom-in" className="w-4 h-4"></i></button>
             </div>
             <div className="w-px h-6 bg-slate-300"></div>
             <div className="flex items-center gap-2">
               <span className="px-3 py-1 bg-slate-200 text-slate-500 text-xs font-bold rounded-full uppercase tracking-wider border border-slate-300"><i data-lucide="eye" className="w-3 h-3 inline mr-1"></i> Read Only Mode</span>
             </div>
          </div>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-xs font-bold text-slate-600 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded border-slate-300 text-primary-600 focus:ring-primary-500" /> Show Checker Annotations
            </label>
            <div className="w-px h-6 bg-slate-300"></div>
            <div className="text-xs font-bold text-slate-500">Trang 2 / 4</div>
          </div>
        </div>

        {/* PDF Mock Document */}
        <div className="flex-1 overflow-y-auto p-12 flex justify-center perspective-[1000px]">
          <div className="w-full max-w-3xl bg-white min-h-[1100px] shadow-xl border border-slate-300 p-16 relative origin-top">
            {/* Checker Annotation Mockup (Locked) */}
            <div className="absolute top-[320px] left-[15%] right-[20%] h-[24px] bg-success/20 border-2 border-success border-dashed pointer-events-none z-20">
               <div className="absolute -right-40 top-1/2 -translate-y-1/2 bg-white border border-slate-200 shadow-lg rounded-lg p-3 w-48 point-left pointer-events-auto">
                  <div className="flex items-center gap-1.5 mb-1 text-xs font-bold text-success-dark">
                    <div className="w-4 h-4 rounded-full bg-success text-white flex items-center justify-center text-[8px]">TT</div>
                    Trần Thanh Tùng
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">Đã xác minh số liệu này khớp với file Excel phụ lục tải lên ở trang 3.</p>
               </div>
            </div>

            {/* Document Content */}
            <h2 className="text-center font-bold text-xl font-serif mb-8 text-slate-800 uppercase underline underline-offset-4">PHẦN II: CHI TIẾT KẾ HOẠCH VAY VỐN</h2>
            <p className="mb-4 text-justify font-serif text-slate-700 leading-loose">Căn cứ vào tiến độ thực tế của dự án X, tổng mức đầu tư dự kiến giải ngân trong giai đoạn 1 (từ tháng 6/2024 đến tháng 12/2024) là 120 Tỷ VNĐ. Trong đó vốn tự có chiếm 30% (36 Tỷ VNĐ), vốn vay ngân hàng thương mại là 70% (84 Tỷ VNĐ).</p>
            <table className="w-full mt-6 border-collapse border border-slate-800 font-sans text-sm">
                <thead><tr className="bg-slate-100"><th className="border border-slate-800 p-2 text-center w-12">STT</th><th className="border border-slate-800 p-2 text-left">Hạng mục Giải ngân</th><th className="border border-slate-800 p-2 text-right">Số tiền (Tỷ VNĐ)</th></tr></thead>
                <tbody>
                  <tr><td className="border border-slate-800 p-2 text-center">1</td><td className="border border-slate-800 p-2">Thiết bị lõi Data Center</td><td className="border border-slate-800 p-2 text-right">40.5</td></tr>
                  <tr><td className="border border-slate-800 p-2 text-center">2</td><td className="border border-slate-800 p-2">Dịch vụ Cloud dự phòng</td><td className="border border-slate-800 p-2 text-right">22.0</td></tr>
                  <tr><td className="border border-slate-800 p-2 text-center">3</td><td className="border border-slate-800 p-2">Chi phí nhân sự & Outsource</td><td className="border border-slate-800 p-2 text-right">21.5</td></tr>
                  <tr className="font-bold bg-slate-50"><td className="border border-slate-800 p-2 text-center" colSpan={2}>TỔNG CỘNG</td><td className="border border-slate-800 p-2 text-right">84.0</td></tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>

      {/* PANE 3: MANAGER DECISION PANEL */}
      <div className="w-[420px] bg-slate-50 flex flex-col shrink-0 relative z-20 border-l border-slate-200 shadow-[-4px_0_15px_rgba(0,0,0,0.02)]">
        
        {/* Header Pane 3 */}
        <div className="h-16 border-b border-slate-200 flex items-center px-6 bg-white shrink-0 shadow-sm z-10">
          <h2 className="font-bold text-slate-800 tracking-wide uppercase text-sm"><i data-lucide="shield-alert" className="w-4 h-4 inline-block mr-1.5 text-warning-dark -mt-0.5"></i> Vòng Duyệt Cuối (Cấp 2)</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          
          {/* Audit Trail / History */}
          <div className="p-6 border-b border-slate-200 bg-white">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Lịch sử Duyệt (Audit Trail)</h3>
             
             <div className="relative border-l-2 border-slate-200 ml-3 pl-5 pb-2 py-2 space-y-5">
                {/* Node 1: Maker */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-0 bg-white w-4 h-4 rounded-full border-2 border-slate-300 flex items-center justify-center">
                     <div className="w-1.5 h-1.5 rounded-full bg-slate-400"></div>
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Maker: Nguyễn Duy (ND)</p>
                  <p className="text-sm font-bold text-slate-700">Đã nộp hồ sơ (Bản Revision 2)</p>
                  <p className="text-xs text-slate-500 mt-0.5">02/04/2024 10:15</p>
                </div>

                {/* Node 2: Checker */}
                <div className="relative">
                  <div className="absolute -left-[27px] top-0 bg-white w-4 h-4 rounded-full border-2 border-success flex items-center justify-center shadow-sm">
                     <i data-lucide="check" className="w-2.5 h-2.5 text-success font-bold"></i>
                  </div>
                  <p className="text-[10px] font-bold text-success uppercase tracking-wider">Checker: Trần Thanh Tùng</p>
                  <p className="text-sm font-bold text-slate-800">Đã Phê Duyệt (Cấp 1)</p>
                  <p className="text-xs text-slate-500 mt-0.5">02/04/2024 14:30</p>
                  <div className="mt-2 p-2.5 bg-slate-50 border border-slate-200 rounded text-sm text-slate-700 italic">
                     "Hồ sơ đã được làm rõ thông tin giải ngân. Các tiêu chí checklist cơ bản đã đạt. Đề xuất Manager duyệt."
                  </div>
                </div>
             </div>
          </div>

          {/* Checker's Checklist Review (Readonly) */}
          <div className="p-6 border-b border-slate-200 bg-slate-50">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Kết quả đo lường từ Checker</h3>
            
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-white border border-slate-200 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 rounded-full bg-success/10 text-success flex items-center justify-center mb-1">
                     <i data-lucide="check-square" className="w-4 h-4"></i>
                  </div>
                  <span className="text-xl font-black text-slate-800">4/4</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tiêu chí Pass</span>
               </div>
               <div className="bg-white border border-slate-200 p-3 rounded-lg flex flex-col items-center justify-center text-center">
                  <div className="w-8 h-8 rounded-full bg-ai-purple-100 text-ai-purple-600 flex items-center justify-center mb-1">
                     <i data-lucide="brain" className="w-4 h-4"></i>
                  </div>
                  <span className="text-xl font-black text-slate-800">92%</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider text-center">AI Trust Score</span>
               </div>
            </div>
          </div>

          {/* Manager Action Form */}
          <div className="p-6 bg-white min-h-[300px]">
             <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5"><i data-lucide="pencil-line" className="w-4 h-4 text-warning-dark"></i> Ghi nhận của Manager</h3>
             <p className="text-[11px] text-slate-500 mb-3 leading-relaxed">Nội dung ghi chú này sẽ được đính kèm vào hồ sơ gốc sau khi ban hành hoặc trả lùi về Maker/Checker.</p>
             
             <textarea 
               placeholder="Nhập nhận xét phê duyệt / lý do từ chối vĩnh viễn / yêu cầu Maker sửa lại..."
               className="w-full h-24 p-3 bg-white border-2 border-slate-200 focus:border-slate-800 rounded-lg text-sm outline-none resize-none transition-shadow shadow-inner"
             />
             
             <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="col-span-2 py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 group">
                   <i data-lucide="shield-check" className="w-5 h-5 group-hover:scale-110 transition-transform"></i> APPROVE FINAL (BAN HÀNH)
                </button>
                <button className="py-2.5 bg-white border-2 border-warning text-warning-dark font-bold rounded-lg hover:bg-warning hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5 text-xs">
                   <i data-lucide="corner-up-left" className="w-4 h-4"></i> Bắt Maker Sửa Lại
                </button>
                <button className="py-2.5 bg-white border-2 border-danger text-danger font-bold rounded-lg hover:bg-danger hover:text-white transition-all shadow-sm flex items-center justify-center gap-1.5 text-xs">
                   <i data-lucide="ban" className="w-4 h-4"></i> REJECT FINAL
                </button>
             </div>
          </div>

        </div>
      </div>

    </div>
  )
}
