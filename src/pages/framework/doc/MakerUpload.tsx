export default function EpicAUploadExtraction() {
  return (
    <div className="flex-1 flex flex-col min-w-0 h-full">
      
      
      {/* Top Action Bar */}
      <header className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-danger/10 text-danger">
            <i data-lucide="file-text" className="w-4 h-4"></i>
          </div>
          <div>
            <h1 className="font-semibold text-slate-900 text-sm">BCT_ThanhTra_Q1_2024_BanChinh.pdf</h1>
            <p className="text-xs text-slate-500">Đã upload 2 phút trước • 4.2 MB</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-ai-purple-100 text-ai-purple-700 border border-ai-purple-200">
            <i data-lucide="sparkles" className="w-3 h-3"></i> AI Analysis Complete
          </span>
          <div className="w-px h-6 bg-slate-200"></div>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-slate-700 border border-slate-300 rounded-lg text-sm font-medium hover:bg-slate-50">
            Hủy bỏ
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 shadow-sm disabled:opacity-50">
            <i data-lucide="arrow-right" className="w-4 h-4"></i> Tiếp tục (Gán Checker)
          </button>
        </div>
      </header>

      {/* Split View Area */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT PANEL: FILE VIEWER */}
        <div className="w-[50%] h-full bg-slate-200 flex flex-col shadow-[inset_-4px_0_10px_rgba(0,0,0,0.02)] relative z-10">
          <div className="h-10 bg-slate-100 border-b border-slate-300 flex items-center justify-between px-4 shrink-0 text-slate-600 text-sm">
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-slate-200 rounded"><i data-lucide="zoom-out" className="w-4 h-4"></i></button>
              <span className="flex items-center text-xs font-medium w-12 justify-center">100%</span>
              <button className="p-1.5 hover:bg-slate-200 rounded"><i data-lucide="zoom-in" className="w-4 h-4"></i></button>
            </div>
            <span className="text-xs font-medium">Trang 1 / 15</span>
            <button className="p-1.5 hover:bg-slate-200 rounded"><i data-lucide="maximize" className="w-4 h-4"></i></button>
          </div>

          {/* Mock Document Render */}
          <div className="flex-1 overflow-y-auto p-8 flex justify-center">
            <div className="max-w-2xl w-full bg-white shadow-lg border border-slate-300 min-h-[1000px] p-12 relative">
              {/* OCR Highlight Box 1 */}
              <div className="absolute top-[120px] left-[10%] right-[10%] h-[40px] border-2 border-ai-purple-400 bg-ai-purple-400/10 cursor-pointer hover:bg-ai-purple-400/20 transition-colors ring-4 ring-ai-purple-100 z-10 rounded"></div>
              
              {/* OCR Highlight Box 2 */}
              <div className="absolute top-[280px] left-[15%] right-[50%] h-[24px] border border-blue-400 bg-blue-400/10 rounded"></div>

              {/* Mock Content */}
              <h1 className="text-center font-bold text-2xl font-serif mb-8 text-slate-800 uppercase">Báo Cáo Thanh Tra Dự Án ABC</h1>
              <p className="mb-4 text-justify font-serif text-slate-700 leading-relaxed">Trong quý 1 năm 2024, đoàn thanh tra đã thực hiện các nghiệp vụ kiểm tra đối ứng tại công ty XYZ nhằm xác nhận việc tuân thủ các điều khoản hợp đồng...</p>
              
              <table className="w-full mt-8 border-collapse border border-slate-400 font-sans text-sm">
                <thead><tr className="bg-slate-100"><th className="border border-slate-400 p-2 text-left">STT</th><th className="border border-slate-400 p-2 text-left">Hạng mục</th><th className="border border-slate-400 p-2 text-right">Chi phí (VNĐ)</th></tr></thead>
                <tbody>
                  <tr><td className="border border-slate-400 p-2 text-center">1</td><td className="border border-slate-400 p-2">Thiết bị ngoại vi</td><td className="border border-slate-400 p-2 text-right">450,000,000</td></tr>
                  <tr><td className="border border-slate-400 p-2 text-center">2</td><td className="border border-slate-400 p-2">Dịch vụ đám mây</td><td className="border border-slate-400 p-2 text-right">1,200,000,000</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL: METADATA & EXTRACTION */}
        <div className="w-[50%] h-full flex flex-col bg-white overflow-hidden relative">
          
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Phân loại AI Card */}
            <div className="bg-gradient-to-r from-ai-purple-50 to-white border border-ai-purple-100 rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <i data-lucide="brain" className="w-5 h-5 text-ai-purple-600"></i>
                <h3 className="font-bold text-ai-purple-900 text-sm">AI Classification</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Loại tài liệu dự đoán</p>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex bg-ai-purple-100 text-ai-purple-700 px-2 py-0.5 rounded text-sm font-semibold border border-ai-purple-200">
                      Báo cáo (Report)
                    </span>
                    <span className="text-xs text-ai-purple-500 font-mono">98%</span>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Xử lý nhiễu (Denoise)</p>
                  <div className="flex items-center gap-1 text-sm text-slate-700 font-medium">
                    <i data-lucide="check-circle-2" className="w-4 h-4 text-success"></i> Đã căn chỉnh trang 2, 4
                  </div>
                </div>
              </div>
            </div>

            {/* Form extraction */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-slate-900">Trích xuất Metadata</h2>
                <span className="text-xs text-slate-500">Bạn có thể chỉnh sửa kết quả</span>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1.5 focus-within:relative">
                    <label className="text-xs font-semibold text-slate-700 flex justify-between">
                      Tên định danh (Tiêu đề) <span className="text-danger">*</span>
                    </label>
                    <div className="relative group">
                      <input type="text" defaultValue="Báo Cáo Thanh Tra Dự Án ABC" className="w-full h-10 px-3 bg-white border-2 border-ai-purple-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-shadow" />
                      <button type="button" className="absolute right-2 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-ai-purple-600 hover:bg-ai-purple-50 p-1 rounded" title="Định vị nguồn">
                        <i data-lucide="crosshair" className="w-4 h-4"></i>
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Mã Số / Số hiệu</label>
                    <input type="text" defaultValue="342/TT-ABC" className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-shadow" />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Ngày phát hành</label>
                    <div className="relative group">
                      <input type="date" defaultValue="2024-03-15" className="w-full h-10 pl-3 pr-10 bg-white border-2 border-ai-purple-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-shadow text-slate-900" />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-ai-purple-400 pointer-events-none">
                        <i data-lucide="calendar" className="w-4 h-4"></i>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Giai đoạn kiểm tra</label>
                    <input type="text" defaultValue="Q1/2024" className="w-full h-10 px-3 bg-white border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-shadow" />
                  </div>

                  <div className="col-span-full space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700">Tóm tắt ngắn (AI Generated)</label>
                    <textarea defaultValue="Báo cáo tóm tắt quá trình thanh tra dự án ABC trong quý 1 năm 2024, ghi nhận tổng chi ngân sách 1,650,000,000 VNĐ cho công ty XYZ. Không có sai phạm lớn được phát hiện." className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-700 h-20 resize-none focus:bg-white focus:border-primary-500 focus:outline-none"></textarea>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-800 mb-3">Thông tin Hệ thống (Locked)</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-500">Phòng ban tạo</label>
                      <input type="text" disabled value="Ban Thanh tra Nội bộ" className="mt-1 w-full h-9 px-3 bg-slate-100 border border-slate-200 rounded text-sm text-slate-500 cursor-not-allowed" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-slate-500">Tài khoản Upload (Maker)</label>
                      <input type="text" disabled value="Trần Toàn (TT)" className="mt-1 w-full h-9 px-3 bg-slate-100 border border-slate-200 rounded text-sm text-slate-500 cursor-not-allowed" />
                    </div>
                  </div>
                </div>

              </form>
            </div>
          </div>
          
        </div>

      </div>

    
    </div>
  )
}
