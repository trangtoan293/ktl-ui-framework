import React, { useState } from 'react'
import { Plus, Search, GitMerge, Settings, Calendar, Play, FileJson, CheckCircle2, PlayCircle, Eye, Trash2, Box, ArrowRight, AlignLeft } from 'lucide-react'

export default function FlowLibrary() {
  const [view, setView] = useState<'library' | 'create'>('library')
  const [builderStep, setBuilderStep] = useState<1 | 2 | 3>(1)

  return (
    <div className="flex-1 flex w-full h-full bg-slate-50 relative overflow-hidden">
      
      {/* -------------------------------------------------------------------------------- */}
      {/* VIEW: MAIN LIBRARY */}
      {/* -------------------------------------------------------------------------------- */}
      <div className={`flex-1 flex flex-col min-w-0 transition-opacity duration-300 ${view === 'library' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
        
        {/* Header Bar */}
        <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-sm">
          <div>
             <h1 className="text-lg font-bold text-slate-800 flex items-center gap-2"><GitMerge className="w-5 h-5 text-indigo-600" /> Pipeline Flow Management</h1>
             <p className="text-[11px] font-medium text-slate-500 mt-0.5">Quản lý các luồng xử lý và đối chiếu tài liệu theo ngữ cảnh nghiệp vụ.</p>
          </div>
          <button 
            onClick={() => setView('create')}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> Tạo Flow mới
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
           
           {/* Filters */}
           <div className="flex items-center justify-between mb-6">
              <div className="relative w-72">
                 <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                 <input type="text" placeholder="Tìm kiếm flow..." className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-indigo-500 transition-colors shadow-sm" />
              </div>
              <div className="flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm">
                 <button className="px-3 py-1 text-xs font-bold bg-slate-100 text-slate-700 rounded transition-colors">Tất cả</button>
                 <button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded transition-colors">Đang chạy</button>
                 <button className="px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50 rounded transition-colors">Bị lỗi</button>
              </div>
           </div>

           {/* Flow List Grid */}
           <div className="space-y-4">
              
              {/* Flow Item 1 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 group flex flex-col gap-4">
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                         <GitMerge className="w-5 h-5" />
                       </div>
                       <div>
                         <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-800 text-base">Flow_ThanhTra_DuAn_HopDong</h3>
                            <span className="px-2 py-0.5 bg-success/10 text-success-dark text-[10px] font-bold rounded uppercase">Active</span>
                         </div>
                         <p className="text-xs text-slate-500 mt-0.5">Kiểm tra tính hợp lệ của Hồ sơ Thanh tra dự án. Kết nối tự động với SFTP.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <button className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 border border-transparent hover:border-indigo-200 rounded"><PlayCircle className="w-4 h-4" /></button>
                       <button className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 border border-transparent hover:border-slate-200 rounded"><Eye className="w-4 h-4" /></button>
                       <button className="p-1.5 text-slate-400 hover:text-danger hover:bg-danger/10 border border-transparent hover:border-danger/20 rounded"><Trash2 className="w-4 h-4" /></button>
                    </div>
                 </div>
                 
                 {/* Run Status Grid */}
                 <div className="bg-slate-50 rounded-lg border border-slate-100 p-3 pt-2">
                    <div className="flex justify-between items-center mb-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Run History (Last 14 days)</span>
                       <span className="text-[10px] text-slate-500">Lịch chạy: Daily (02:00 AM)</span>
                    </div>
                    <div className="flex gap-1.5">
                       {/* Mock 14 days run */}
                       {[...Array(11)].map((_, i) => (
                         <div key={i} className="w-5 h-5 rounded bg-success-light/30 border border-success/30 cursor-pointer hover:border-success-dark" title="Thành công"></div>
                       ))}
                       <div className="w-5 h-5 rounded bg-danger/20 border border-danger/40 cursor-pointer relative" title="Failed: Missing Input">
                          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-danger rounded-full transform translate-x-0.5 -translate-y-0.5"></div>
                       </div>
                       <div className="w-5 h-5 rounded bg-success-light/30 border border-success/30 cursor-pointer" title="Thành công"></div>
                       <div className="w-5 h-5 rounded bg-indigo-100 border border-indigo-400 cursor-pointer animate-pulse" title="Running (In Progress)"></div>
                    </div>
                 </div>
              </div>

              {/* Flow Item 2 */}
              <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 group flex flex-col gap-4">
                 <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-500 flex items-center justify-center">
                         <GitMerge className="w-5 h-5" />
                       </div>
                       <div>
                         <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-800 text-base">Flow_DoiChieu_SaoKe_KhachHang</h3>
                            <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">Draft</span>
                         </div>
                         <p className="text-xs text-slate-500 mt-0.5">Trích xuất bảng sao kê và đối chiếu với dữ liệu CRM.</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button className="px-3 py-1 bg-white border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 rounded">Chỉnh sửa</button>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------- */}
      {/* VIEW: CREATE FLOW BUILDER */}
      {/* -------------------------------------------------------------------------------- */}
      <div className={`flex-1 flex flex-col min-w-0 bg-slate-50 transition-transform duration-300 ease-in-out ${view === 'create' ? 'translate-x-0 z-20 absolute inset-0' : 'translate-x-full pointer-events-none absolute inset-0'}`}>
        
        {/* Builder Header */}
        <div className="h-16 bg-slate-900 border-b border-slate-800 px-6 flex items-center justify-between shrink-0 shadow-sm relative overflow-hidden text-white">
          <div className="absolute left-0 top-0 bottom-0 w-64 bg-gradient-to-r from-indigo-600/30 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-4 relative z-10">
             <button onClick={() => setView('library')} className="p-2 hover:bg-white/10 rounded-lg transition-colors mr-2">
               <ArrowRight className="w-5 h-5 rotate-180" />
             </button>
             <div>
                <h1 className="text-lg font-bold flex items-center gap-2"><Box className="w-5 h-5 text-indigo-400" /> Cấu hình Flow</h1>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">Xây dựng pipeline logic liên kết các rules lại với nhau.</p>
             </div>
          </div>

          <div className="flex items-center gap-2 relative z-10">
             <div className="flex bg-slate-800 p-1 rounded-lg">
               <button onClick={() => setBuilderStep(1)} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${builderStep === 1 ? 'bg-indigo-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}>1. Cấu hình</button>
               <button onClick={() => setBuilderStep(2)} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${builderStep === 2 ? 'bg-indigo-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}>2. Chọn Rules</button>
               <button onClick={() => setBuilderStep(3)} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-colors ${builderStep === 3 ? 'bg-indigo-500 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'}`}>3. Vận hành</button>
             </div>
          </div>

          <div className="relative z-10">
            <button className="px-4 py-2 bg-white text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-bold shadow-md transition-colors">
              Hoàn tất & Lưu Flow
            </button>
          </div>
        </div>

        {/* Builder Content Area */}
        <div className="flex-1 overflow-y-auto p-12">
           <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Step 1: General Info */}
              {builderStep === 1 && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                   <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Thông tin Cơ bản</h2>
                   
                   <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Tên Flow <span className="text-danger">*</span></label>
                        <input type="text" placeholder="VD: Pipeline Đối chiếu Hồ sơ Vay" className="w-full text-base px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-shadow" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Mô tả mục đích</label>
                        <textarea placeholder="Mô tả chức năng của flow này để nhóm dễ dàng tra cứu..." className="w-full h-24 p-3 bg-white border border-slate-300 focus:border-indigo-500 rounded-xl text-sm outline-none resize-none transition-shadow"></textarea>
                      </div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 pt-2 block">Dữ liệu Đầu vào (Mặc định)</label>
                        <div className="flex gap-4">
                           <label className="flex-1 border-2 border-indigo-500 bg-indigo-50 p-4 rounded-xl cursor-pointer">
                              <FileJson className="w-6 h-6 text-indigo-600 mb-2" />
                              <h4 className="font-bold text-indigo-900 text-sm">JSON Có cấu trúc</h4>
                              <p className="text-xs text-indigo-700 mt-1">Sử dụng form chuẩn hoặc API.</p>
                           </label>
                           <label className="flex-1 border-2 border-slate-200 bg-white hover:border-slate-300 p-4 rounded-xl cursor-pointer">
                              <AlignLeft className="w-6 h-6 text-slate-400 mb-2" />
                              <h4 className="font-bold text-slate-700 text-sm">Văn bản tự do (Raw Text)</h4>
                              <p className="text-xs text-slate-500 mt-1">Chữ ký OCR, văn bản dạng chuỗi.</p>
                           </label>
                        </div>
                      </div>
                   </div>
                   
                   <div className="mt-8 flex justify-end">
                     <button onClick={() => setBuilderStep(2)} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold transition-colors hover:bg-indigo-700">Tiếp tục bước 2</button>
                   </div>
                </div>
              )}

              {/* Step 2: Rules Pipeline (Mock UI) */}
              {builderStep === 2 && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                   <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                     <h2 className="text-lg font-bold text-slate-800">Cấu trúc Pipeline Rules</h2>
                     <button className="text-sm text-indigo-600 font-bold hover:underline">+ Thêm Rule từ thư viện</button>
                   </div>
                   
                   <div className="relative border-l-2 border-indigo-200 ml-4 pl-8 py-4 space-y-6">
                      
                      <div className="relative bg-slate-50 border border-slate-200 p-4 rounded-lg shadow-sm group">
                         <div className="absolute top-1/2 -left-[45px] w-8 h-8 -translate-y-1/2 rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center font-bold text-indigo-600 text-xs shadow-sm z-10">1</div>
                         <div className="flex justify-between items-start">
                           <div>
                             <h4 className="font-bold text-slate-800">Rule_Check_Quy_Dinh_Bo_TTC</h4>
                             <p className="text-xs text-slate-500 mt-0.5">Kiểm tra thông số kỹ thuật tối thiểu theo quy định 14/BTTTT.</p>
                           </div>
                           <button className="text-xs text-danger font-bold opacity-0 group-hover:opacity-100 transition-opacity">Gỡ bỏ</button>
                         </div>
                      </div>

                      <div className="relative bg-slate-50 border border-slate-200 p-4 rounded-lg shadow-sm group">
                         <div className="absolute top-1/2 -left-[45px] w-8 h-8 -translate-y-1/2 rounded-full bg-white border-2 border-indigo-300 flex items-center justify-center font-bold text-indigo-600 text-xs shadow-sm z-10">2</div>
                         <div className="flex justify-between items-start">
                           <div>
                             <h4 className="font-bold text-slate-800">Rule_Match_Don_Gia</h4>
                             <p className="text-xs text-slate-500 mt-0.5">Đối chiếu đơn giá phần cứng với bảng giá thị trường nội bộ.</p>
                           </div>
                           <button className="text-xs text-danger font-bold opacity-0 group-hover:opacity-100 transition-opacity">Gỡ bỏ</button>
                         </div>
                      </div>

                      <button className="w-full py-4 border-2 border-dashed border-slate-300 rounded-lg text-sm font-bold text-slate-400 hover:text-indigo-600 hover:border-indigo-300 hover:bg-indigo-50 transition-colors flex items-center justify-center gap-2">
                        <Plus className="w-4 h-4"/> Nối tiếp Rule
                      </button>

                   </div>

                   <div className="mt-8 flex justify-between">
                     <button onClick={() => setBuilderStep(1)} className="text-slate-500 font-bold hover:text-slate-800">Quay lại</button>
                     <button onClick={() => setBuilderStep(3)} className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold transition-colors hover:bg-indigo-700">Tiếp tục bước 3</button>
                   </div>
                </div>
              )}

              {/* Step 3: Trigger Config */}
              {builderStep === 3 && (
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 animate-in fade-in slide-in-from-bottom-4 duration-300">
                   <h2 className="text-lg font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Cấu hình Vận hành Flow</h2>
                   
                   <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-8">
                         <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Play className="w-4 h-4 text-slate-400" /> Cơ chế kích hoạt (Trigger)</label>
                           <select className="w-full text-sm px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-indigo-500">
                             <option>Thủ công (Manual Click)</option>
                             <option>Theo lịch (Cronjob)</option>
                             <option>Webhook API (Webhook)</option>
                           </select>
                         </div>
                         <div className="space-y-3">
                           <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Calendar className="w-4 h-4 text-slate-400" /> Tần suất (Nếu chọn lịch)</label>
                           <select className="w-full text-sm px-4 py-2 border border-slate-300 rounded-lg outline-none focus:border-indigo-500 bg-slate-50" disabled>
                             <option>Hàng ngày vào 00:00 (Daily)</option>
                           </select>
                         </div>
                      </div>

                      <div className="h-px bg-slate-100 my-4"></div>

                      <div className="space-y-3">
                        <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Settings className="w-4 h-4 text-slate-400" /> Tùy chọn Hệ thống nâng cao</label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" defaultChecked className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                            <span className="text-sm text-slate-600 group-hover:text-slate-900">Gửi Email thông báo khi chạy lỗi liên tiếp 3 lần.</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500" />
                            <span className="text-sm text-slate-600 group-hover:text-slate-900">Bật chế độ Debug Mode (Lưu log toàn bộ params đầu vào).</span>
                          </label>
                        </div>
                      </div>

                   </div>

                   <div className="mt-8 flex justify-between">
                     <button onClick={() => setBuilderStep(2)} className="text-slate-500 font-bold hover:text-slate-800">Quay lại</button>
                   </div>
                </div>
              )}

           </div>
        </div>

      </div>

    </div>
  )
}
