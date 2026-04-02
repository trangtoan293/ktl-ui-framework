export default function CheckerQueue() {
  return (
    <div className="flex-1 flex min-w-0 h-full bg-slate-50 overflow-hidden">
      
      {/* PANE 1: THE QUEUE (LIST) */}
      <div className="w-[320px] bg-white border-r border-slate-200 flex flex-col shrink-0 z-20 shadow-sm relative">
        <div className="h-16 border-b border-slate-200 flex items-center justify-between px-4 shrink-0 bg-slate-50/50">
          <div>
            <h2 className="font-bold text-slate-800 tracking-tight">Hàng chờ duyệt (3)</h2>
            <p className="text-[11px] font-semibold text-danger mt-0.5">1 tài liệu quá hạn SLA</p>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-slate-200 text-slate-500 transition-colors">
            <i data-lucide="filter" className="w-4 h-4"></i>
          </button>
        </div>
        
        {/* Sort & Filter Bar */}
        <div className="px-4 py-2 bg-slate-100 border-b border-slate-200 flex items-center gap-2 text-xs">
          <span className="font-medium text-slate-500">Sắp xếp:</span>
          <select className="bg-transparent font-bold text-slate-700 outline-none cursor-pointer">
            <option>Deadline gần nhất</option>
            <option>Mới nhất</option>
            <option>Độ ưu tiên</option>
          </select>
        </div>

        <div className="flex-1 overflow-y-auto">
          {/* Item 1: Selected & Overdue */}
          <div className="p-4 border-l-4 border-l-primary-500 bg-primary-50 border-b border-slate-200 cursor-pointer relative">
            <div className="absolute top-3 right-3 text-[10px] font-bold text-white bg-danger px-1.5 py-0.5 rounded uppercase">Quá hạn</div>
            <p className="text-sm font-bold text-primary-900 pr-12 line-clamp-1">BCT_ThanhTra_Q1_2024</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">Maker: Trần Toàn (TT)</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-2 py-0.5 bg-white border border-slate-200 text-[10px] font-bold text-slate-500 rounded uppercase tracking-wider">Báo cáo</span>
              <span className="text-[11px] font-semibold text-danger flex items-center gap-1"><i data-lucide="clock" className="w-3 h-3"></i> Quá 2 giờ</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-4 border-l-4 border-l-transparent border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors">
            <p className="text-sm font-bold text-slate-800 pr-12 line-clamp-1">Danh_sach_KH_Vip_T4</p>
            <p className="text-xs font-medium text-slate-500 mt-1">Maker: Lê Lan (LL)</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 rounded uppercase tracking-wider">DS Khách Hàng</span>
              <span className="text-[11px] font-semibold text-warning-dark flex items-center gap-1"><i data-lucide="clock" className="w-3 h-3"></i> Còn 4 giờ</span>
            </div>
          </div>
          
          {/* Item 3 */}
          <div className="p-4 border-l-4 border-l-transparent border-b border-slate-100 hover:bg-slate-50 cursor-pointer transition-colors opacity-60">
            <p className="text-sm font-bold text-slate-800 pr-12 line-clamp-1">QĐ_GiaoViec_So321</p>
            <p className="text-xs font-medium text-slate-500 mt-1">Maker: Nguyễn Duy (ND)</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 rounded uppercase tracking-wider">Quyết định</span>
              <span className="text-[11px] font-medium text-slate-400">Còn 2 ngày</span>
            </div>
          </div>
        </div>
      </div>

      {/* PANE 2: DOCUMENT VIEWER */}
      <div className="flex-[5] flex flex-col min-w-0 bg-slate-200 relative z-10 shadow-[inset_4px_0_15px_rgba(0,0,0,0.03)] border-r border-slate-300">
        <div className="h-16 bg-slate-100 border-b border-slate-300 flex items-center justify-between px-6 shrink-0 z-10">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-1 bg-white border border-slate-300 rounded shadow-sm p-1">
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600"><i data-lucide="zoom-out" className="w-4 h-4"></i></button>
               <span className="text-xs font-bold w-12 text-center text-slate-700">100%</span>
               <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 rounded text-slate-600"><i data-lucide="zoom-in" className="w-4 h-4"></i></button>
             </div>
             <div className="w-px h-6 bg-slate-300"></div>
             <div className="flex items-center gap-2 bg-white border border-slate-300 rounded shadow-sm p-1">
               <button className="px-2 py-1 flex items-center gap-1 hover:bg-warning-light text-warning-dark text-xs font-bold rounded transition-colors"><i data-lucide="highlighter" className="w-3.5 h-3.5"></i> Highlight</button>
               <button className="px-2 py-1 flex items-center gap-1 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded transition-colors"><i data-lucide="message-square-plus" className="w-3.5 h-3.5"></i> Comment</button>
             </div>
          </div>
          <div className="text-xs font-bold text-slate-500">Trang 1 / 15</div>
        </div>

        {/* PDF Mock Document */}
        <div className="flex-1 overflow-y-auto p-12 flex justify-center perspective-[1000px]">
          <div className="w-full max-w-3xl bg-white min-h-[1100px] shadow-xl border border-slate-300 p-16 relative origin-top">
            {/* Checker Annotation Mockup */}
            <div className="absolute top-[260px] left-[15%] right-[10%] h-[32px] bg-warning/20 border-2 border-warning border-dashed cursor-pointer hover:bg-warning/30 transition-colors z-20 group">
               <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-8 h-8 bg-warning text-white rounded-full flex items-center justify-center shadow-lg opacity-80 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all">
                 <i data-lucide="message-circle" className="w-4 h-4"></i>
               </div>
            </div>

            {/* Document Content */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Coat_of_arms_of_Vietnam.svg/100px-Coat_of_arms_of_Vietnam.svg.png" alt="Quốc huy" className="w-16 h-16 opacity-10 mx-auto mb-6" />
            <h1 className="text-center font-bold text-2xl font-serif mb-8 text-slate-800 uppercase">Báo Cáo Thanh Tra Dự Án ABC</h1>
            <p className="mb-4 text-justify font-serif text-slate-700 leading-loose">Trong quý 1 năm 2024, đoàn thanh tra đã thực hiện các nghiệp vụ kiểm tra đối ứng tại công ty XYZ nhằm xác nhận việc tuân thủ các điều khoản hợp đồng. Theo số liệu phòng Kế toán cung cấp, chi phí lũy kế mảng dịch vụ đám mây AWS phát sinh trong Quý 1/2024 là 1,400 triệu đồng...</p>
            <p className="mb-4 text-justify font-serif text-slate-700 leading-loose">Các hạng mục đều tuân thủ quy trình nội bộ số 123/QĐ-XD, ngoại trừ một số rủi ro trễ hẹn báo cáo 2 ngày do đối tác chậm cung cấp số liệu đối chiếu.</p>
          </div>
        </div>
      </div>

      {/* PANE 3: REVIEW ACTIONS & CHAT */}
      <div className="w-[420px] bg-white flex flex-col shrink-0 relative z-20">
        
        {/* Header Pane 3 */}
        <div className="h-16 border-b border-slate-200 flex items-center px-6 bg-slate-50 shrink-0">
          <h2 className="font-bold text-slate-800 tracking-wide uppercase text-sm"><i data-lucide="clipboard-check" className="w-4 h-4 inline-block mr-1.5 text-primary-600 -mt-0.5"></i> Bảng Phê duyệt Cấp 1</h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          
          {/* Metadata Compact Block */}
          <div className="p-6 border-b border-slate-100 bg-white">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Thông tin Metadata</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-sm">
              <div><span className="block text-xs text-slate-500 mb-0.5">Tiêu đề:</span> <span className="font-semibold text-slate-800">BCT_ThanhTra_Q1</span></div>
              <div><span className="block text-xs text-slate-500 mb-0.5">Mã số:</span> <span className="font-semibold text-slate-800">342/TT-ABC</span></div>
              <div><span className="block text-xs text-slate-500 mb-0.5">Giai đoạn:</span> <span className="font-semibold text-danger">Q1/2023 ⚠️</span></div>
              <div><span className="block text-xs text-slate-500 mb-0.5">AI Check:</span> <span className="font-semibold text-success inline-flex items-center"><i data-lucide="check-circle" className="w-3 h-3 mr-1"></i> Pass 98%</span></div>
            </div>
            
            <div className="mt-4 p-3 bg-info-light/30 border border-info-light rounded-lg text-sm">
               <span className="font-bold text-info-dark block mb-1">Ghi chú từ Maker (TT):</span>
               <p className="text-slate-700 italic">"Gửi anh/chị xem xét duyệt báo cáo thanh tra. Bản scan em đã crop lại chỗ chữ ký cho nét."</p>
            </div>
          </div>

          {/* Checklist Block */}
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Checklist Chất lượng M-1 <span className="text-danger">*</span></h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500 cursor-pointer" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Tính hợp lệ của Biểu mẫu / Định dạng</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500 cursor-pointer" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Sự nhất quán giữa Metadata và Nội dung</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500 cursor-pointer" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Tính toàn vẹn của Dữ liệu (Không mờ, mất chữ)</span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group hover:bg-danger/5 -ml-2 p-2 rounded transition-colors">
                <input type="checkbox" className="mt-0.5 w-4 h-4 text-primary-600 rounded border-slate-300 focus:ring-primary-500 cursor-pointer" />
                <span className="text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors">Đính kèm đủ Phụ lục liên quan</span>
              </label>
            </div>
          </div>

          {/* Decision Notes */}
          <div className="p-6">
             <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex justify-between items-center">
                Lời phê (Dành cho Maker) <span className="text-slate-400 font-medium normal-case">Tối thiểu 20 ký tự</span>
             </h3>
             <textarea 
               className="w-full h-28 p-3 bg-white border-2 border-slate-200 focus:border-warning rounded-lg text-sm outline-none resize-none transition-shadow shadow-inner"
               defaultValue="Tài liệu bị mờ đoạn chữ ký phụ lục 2. Đề nghị em TT scan lại file này. Đồng thời check lại metadata Giai đoạn."
             />
             
             {/* Approval Actions Array */}
             <div className="mt-6 space-y-3">
               <button className="w-full flex items-center justify-center gap-2 py-3 bg-warning text-white font-bold rounded-xl hover:bg-warning-dark transition-colors shadow-sm disabled:opacity-50">
                 <i data-lucide="rotate-ccw" className="w-5 h-5"></i> Yêu cầu Maker Sửa (Trở lại M-2)
               </button>
               
               <div className="flex gap-3">
                 <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white border-2 border-danger text-danger font-bold rounded-lg hover:bg-danger hover:text-white transition-all shadow-sm">
                   <i data-lucide="x" className="w-4 h-4"></i> Từ chối (Lỗi nặng)
                 </button>
                 <button className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-success text-white font-bold rounded-lg hover:bg-success-dark transition-all shadow-sm" disabled>
                   <i data-lucide="check-check" className="w-5 h-5"></i> Phê Duyệt Cấp 1
                 </button>
               </div>
               <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">Cần check đủ tiêu chí để duyệt</p>
             </div>
          </div>

        </div>
      </div>

    </div>
  )
}
