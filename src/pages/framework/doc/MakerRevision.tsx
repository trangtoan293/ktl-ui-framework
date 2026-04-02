export default function MakerRevision() {
  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50">
      
      {/* Top Banner & Header */}
      <div className="bg-warning-light border-b border-warning text-warning-dark px-6 py-2.5 text-sm font-medium flex items-center justify-center gap-2">
        <i data-lucide="alert-triangle" className="w-4 h-4"></i>
        Tài liệu bị từ chối phê duyệt (Cấp 1) và cần chỉnh sửa. Bạn còn 1/2 lượt nộp lại.
      </div>
      
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 relative z-10 shadow-sm">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-danger/10 text-danger flex items-center justify-center">
              <i data-lucide="file-x" className="w-3.5 h-3.5"></i>
            </div>
            <h1 className="font-bold text-slate-800">BCT_ThanhTra_Q1_2024_BanChinh.pdf</h1>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 max-w-lg truncate">
            Người yêu cầu: Trần Thanh Tùng (Checker Cấp 1) • Hạn nộp lại: 15/04/2024 17:00
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
            Hủy thay đổi
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-info text-white rounded-lg text-sm font-medium hover:bg-info-dark shadow-sm transition-colors">
            <i data-lucide="send" className="w-4 h-4"></i> Nộp lại (Lần 1)
          </button>
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANEL: Metadata & File Replace */}
        <div className="w-[60%] flex flex-col bg-white border-r border-slate-200">
          <div className="h-12 bg-slate-50 border-b border-slate-200 flex items-center px-6 font-bold text-sm text-slate-800 tracking-wide uppercase">
            <i data-lucide="edit-3" className="w-4 h-4 mr-2 text-primary-600"></i> Cập nhật Thông tin
          </div>
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* File Replacement Dropzone */}
            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-800">1. Thay thế File (Tùy chọn)</label>
               <p className="text-xs text-slate-500">Nếu Checker yêu cầu cung cấp bản scan rõ nét hơn, bạn có thể tải lên tệp mới tại đây để thay thế file cũ.</p>
               
               <div className="mt-2 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 p-6 flex flex-col items-center justify-center hover:bg-slate-100 hover:border-primary-400 transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                    <i data-lucide="upload-cloud" className="w-5 h-5 text-primary-500"></i>
                  </div>
                  <span className="text-sm font-semibold text-slate-700">Kéo thả file mới vào đây hoặc nhấn để duyệt</span>
                  <span className="text-xs text-slate-400 mt-1">Hỗ trợ PDF, DOCX (Max 100MB)</span>
               </div>
               
               {/* Current File Readonly state */}
               <div className="mt-3 flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg shadow-sm">
                  <div className="flex items-center gap-3">
                    <i data-lucide="file-text" className="w-5 h-5 text-danger"></i>
                    <div>
                       <p className="text-sm font-semibold text-slate-800">BCT_ThanhTra_Q1_2024_BanChinh.pdf (Bản hiện tại)</p>
                       <p className="text-xs text-slate-500">Đã upload 01/04/2024 09:30 • 4.2 MB</p>
                    </div>
                  </div>
                  <button className="text-primary-600 hover:underline text-xs font-semibold">Xem bản gốc</button>
               </div>
            </div>

            <div className="h-px bg-slate-200 my-2"></div>

            {/* Metadata Form Edit */}
            <form className="space-y-4">
              <label className="text-sm font-bold text-slate-800 pb-1 block">2. Chỉnh sửa Metadata</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 focus-within:relative">
                  <label className="text-xs font-semibold text-slate-700 flex justify-between">
                    Tên định danh (Tiêu đề) <span className="text-danger">*</span>
                  </label>
                  <input type="text" defaultValue="Báo Cáo Thanh Tra Dự Án ABC" className="w-full h-10 px-3 bg-white border-2 border-warning-light focus:border-primary-500 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-shadow outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Mã Số / Số hiệu</label>
                  <input type="text" defaultValue="342/TT-ABC" className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-shadow outline-none" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">Ngày phát hành</label>
                  <input type="date" defaultValue="2024-03-15" className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-shadow text-slate-900 outline-none" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-danger">Giai đoạn kiểm tra (Checker yêu cầu sửa)</label>
                  <input type="text" defaultValue="Q1/2024" className="w-full h-10 px-3 bg-danger/5 border-2 border-danger focus:border-primary-500 rounded-lg text-sm focus:outline-none transition-shadow outline-none" />
                </div>
              </div>
            </form>
            
            <div className="h-px bg-slate-200 my-2"></div>
            
            <div className="space-y-2">
               <label className="text-sm font-bold text-slate-800">3. Phản hồi cho Checker <span className="text-danger">*</span></label>
               <p className="text-xs text-slate-500">Bắt buộc giải trình các thay đổi bạn vừa thực hiện.</p>
               <textarea placeholder="Nhập nội dung phản hồi dể Checker nắm chi tiết những điểm đã sửa..." className="w-full h-24 p-3 bg-white border-2 border-slate-200 focus:border-primary-500 rounded-lg text-sm text-slate-800 outline-none resize-none transition-shadow"></textarea>
            </div>
            
          </div>
        </div>

        {/* RIGHT PANEL: Timeline & Feedback */}
        <div className="w-[40%] flex flex-col bg-slate-50 relative">
          <div className="h-12 bg-white border-b border-slate-200 flex items-center px-6 font-bold text-sm text-slate-800 tracking-wide uppercase">
            <i data-lucide="history" className="w-4 h-4 mr-2 text-warning-dark"></i> Lịch sử Xét duyệt
          </div>
          
          <div className="flex-1 overflow-y-auto p-6">
             
             {/* Latest requirement from Checker */}
             <div className="mb-8 relative border-2 border-warning bg-white rounded-xl shadow-sm p-5">
               <div className="absolute -top-3 left-4 bg-warning text-white text-[10px] font-bold px-2 py-1 uppercase rounded-md shadow-sm">Current Request</div>
               <div className="flex items-center justify-between mb-3 mt-1">
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">TT</div>
                   <div>
                     <p className="text-sm font-bold text-slate-800">Trần Thanh Tùng (Checker)</p>
                     <p className="text-xs text-slate-500">Vừa xong</p>
                   </div>
                 </div>
                 <span className="px-2 py-0.5 bg-danger/10 text-danger-dark font-bold text-xs rounded border border-danger/20">Yêu cầu sửa (Lần 1)</span>
               </div>
               <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-sm text-slate-700 leading-relaxed font-serif">
                 <p>Tài liệu này không khớp với giai đoạn kiểm tra. Em xem lại metadata <strong>"Giai đoạn kiểm tra"</strong> nhé, nội dung files ghi là Q1/2023 chứ không phải Q1/2024.</p>
                 <p className="mt-2">Ngoài ra trang 4 chụp bị mờ không đọc được phụ lục 1, cần scan bổ sung trang này hoặc gộp lại vào file mới.</p>
               </div>
             </div>
             
             {/* Timeline Flow */}
             <div className="relative border-l-2 border-slate-200 ml-4 pl-6 pb-2 space-y-6">
                
                {/* Node 1 */}
                <div className="relative">
                  <div className="absolute -left-[31px] bg-slate-50 w-3 h-3 rounded-full border-2 border-slate-300"></div>
                  <p className="text-xs font-semibold text-slate-400">01/04/2024 10:15</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">Tài liệu được chuyển cho Checker</p>
                  <p className="text-sm text-slate-500 mt-1">Hệ thống auto-assign cho Trần Thanh Tùng do workload thấp.</p>
                </div>
                
                {/* Node 0 */}
                <div className="relative">
                  <div className="absolute -left-[31px] bg-slate-50 w-3 h-3 rounded-full border-2 border-slate-300"></div>
                  <p className="text-xs font-semibold text-slate-400">01/04/2024 09:30</p>
                  <p className="text-sm font-bold text-slate-700 mt-0.5">Maker upload lần đầu</p>
                  <p className="text-sm text-slate-500 mt-1">Upload thành công BCT_ThanhTra_Q1_2024_BanChinh.pdf (Bản gốc).</p>
                </div>
             </div>
             
          </div>
        </div>

      </div>

    </div>
  )
}
