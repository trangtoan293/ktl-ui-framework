import React, { useState } from 'react'
import { FileText, CheckCircle2, XCircle, ChevronLeft, MessageSquare, AlertCircle, FileSignature, Download, Printer, ExternalLink, PenLine } from 'lucide-react'

export default function ReportApproval() {
  const [activeComment, setActiveComment] = useState<string | null>('comment-1')

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
               <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 border border-indigo-200 rounded text-[10px] font-bold uppercase tracking-wider">Reviewing</span>
               <h1 className="text-lg font-bold text-slate-800">Báo_Cáo_Thanh_Tra_Quy_1_2026.pdf</h1>
             </div>
             <p className="text-xs font-semibold text-slate-500">Người nộp: Analyst Lê Trang • Cập nhật: 10 phút trước</p>
           </div>
        </div>
        
        <div className="flex items-center gap-2">
           <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors border border-transparent"><Download className="w-4 h-4" /></button>
           <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors border border-transparent mr-2"><Printer className="w-4 h-4" /></button>
           
           <div className="w-px h-6 bg-slate-200 mx-2"></div>

           <button className="px-4 py-2 bg-white border border-danger text-danger hover:bg-danger/5 transition-all font-bold text-[13px] rounded-lg flex items-center gap-2 shadow-sm">
              <XCircle className="w-4 h-4" /> YÊU CẦU SỬA (REVISION)
           </button>
           <button className="px-6 py-2 bg-slate-900 border border-slate-900 hover:bg-black text-white transition-all font-bold text-[13px] rounded-lg flex items-center gap-2 shadow-sm">
              <FileSignature className="w-4 h-4" /> DUYỆT & PHÁT HÀNH
           </button>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Document / Report Viewer */}
        <div className="flex-[6] flex flex-col bg-slate-200 relative overflow-y-auto items-center p-8">
           
           {/* Mock A4 Paper */}
           <div className="w-[800px] min-h-[1100px] bg-white shadow-xl flex flex-col p-16 font-serif text-slate-800 relative">
              <div className="flex justify-between items-start mb-12 border-b-2 border-slate-800 pb-4">
                 <div>
                    <h3 className="font-bold text-xl uppercase tracking-widest">Bộ XYZ</h3>
                    <p className="text-sm font-semibold mt-1">Sở Ban Ngành liên quan</p>
                 </div>
                 <div className="text-right">
                    <h3 className="font-bold text-xl uppercase">Cộng hòa Xã hội Chủ nghĩa Việt Nam</h3>
                    <p className="text-sm font-bold border-b border-slate-800 inline-block mt-1">Độc lập - Tự do - Hạnh phúc</p>
                    <p className="text-sm italic mt-4">Hà Nội, ngày 10 tháng 04 năm 2026</p>
                 </div>
              </div>

              <h1 className="text-2xl font-bold text-center uppercase my-8 tracking-wide">Báo Cáo Kết Quả Thanh Tra</h1>
              <h2 className="text-center font-bold text-lg mb-12">"Về việc triển khai Dự án Hiện đại hóa Cổng thông tin"</h2>

              <div className="space-y-6 leading-relaxed text-[15px] text-justify flex-1">
                 <p>
                   Thực hiện Quyết định số 123/QĐ-TTr ngày 01/01/2026 của Chánh Thanh tra Bộ, Đoàn thanh tra đã tiến hành thanh tra tại Ban Quản lý dự án A. Về cấu trúc dự án và quy trình thực hiện, Đoàn tập trung vào đánh giá sự tuân thủ các quy định hiện hành về đấu thầu và giải ngân.
                 </p>
                 <p className={`relative ${activeComment === 'comment-1' ? 'bg-warning/20 isolate shadow-[0_0_0_4px_rgba(251,191,36,0.2)] rounded' : 'hover:bg-slate-100'} cursor-pointer`} onClick={() => setActiveComment('comment-1')}>
                   <span className="font-bold">1. Về tiến độ giải ngân:</span> Qua kiểm tra 10 hồ sơ năng lực và chứng từ liên quan, nhận thấy giải ngân giai đoạn 1 đạt tỷ lệ 45%. 
                   <span className="bg-danger/20 text-danger-dark font-bold line-through mx-1">Điều này vi phạm nghiêm trọng hạn mức 30% quy định tại Hợp đồng nguyên tắc.</span>
                   <span className="bg-success/20 text-success-dark font-bold mx-1 border-b-2 border-success">Tuy nhiên, sự sai lệch này đã được giải trình bổ sung tại Phụ lục 02/PL-HĐ và được phê duyệt ngoại lệ nên vẫn được coi là hợp lệ.</span>
                 </p>
                 <p className={`relative ${activeComment === 'comment-2' ? 'bg-primary-100 isolate shadow-[0_0_0_4px_rgba(224,231,255,1)] rounded' : 'hover:bg-slate-100'} cursor-pointer`} onClick={() => setActiveComment('comment-2')}>
                   <span className="font-bold">2. Về tính hợp pháp của Hồ sơ:</span> Toàn bộ các bằng chứng lưu trữ dưới dạng điện tử đều đã kiểm tra và đáp ứng các tiêu chuẩn OCR ban đầu. Không có dấu hiệu giả mạo chữ ký số trong file PDF gốc.
                 </p>
              </div>

              <div className="flex justify-between mt-20 pt-8 border-t border-slate-300">
                 <div className="text-center">
                    <p className="font-bold uppercase tracking-wider">Nơi nhận</p>
                    <p className="italic text-sm">- Như trên;</p>
                    <p className="italic text-sm">- Lưu VT, TT.</p>
                 </div>
                 <div className="text-center">
                    <p className="font-bold uppercase tracking-wider">Chữ ký Người Lập</p>
                    <div className="w-40 h-24 mt-2 bg-indigo-50/50 border border-indigo-100 rounded-lg flex items-center justify-center flex-col relative overflow-hidden">
                       <span className="absolute -rotate-12 inset-0 flex items-center justify-center text-indigo-400/20 font-bold text-3xl">D-SIGN</span>
                       <span className="text-xs text-indigo-700 font-bold mb-1">Toàn T.</span>
                       <span className="text-[10px] text-indigo-500">10/04/2026 14:00</span>
                    </div>
                 </div>
              </div>
           </div>

        </div>

        {/* RIGHT: Collaboration & Suggestions */}
        <div className="flex-[3] flex flex-col bg-white overflow-hidden border-l border-slate-200">
           
           <div className="flex border-b border-slate-200 bg-slate-50 shrink-0">
             <button className="flex-1 py-3 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600">
                Track Changes
             </button>
             <button className="flex-1 py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                Thảo luận (2)
             </button>
             <button className="flex-1 py-3 text-sm font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors">
                Findings Gốc
             </button>
           </div>

           <div className="flex-1 overflow-y-auto bg-slate-50 p-4 space-y-4">
              
              {/* Comment 1 */}
              <div 
                className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all ${activeComment === 'comment-1' ? 'border-primary-500 ring-1 ring-primary-500' : 'border-slate-200 hover:border-slate-300'}`}
                onClick={() => setActiveComment('comment-1')}
              >
                  <div className="p-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1"><PenLine className="w-3.5 h-3.5"/> Sửa đổi bởi AI (Approved by Analyst)</span>
                  </div>
                  <div className="p-4 text-sm">
                     <p className="text-slate-700 font-medium mb-3">Về phần kết luận sai phạm tài chính, hệ thống phát hiện có ngoại lệ (Phụ lục 02). AI đã tự động thay thế cụm từ vi phạm thành giải trình hợp lệ.</p>
                     <div className="bg-danger/10 p-2 rounded text-danger-dark line-through mb-2 opacity-80 text-xs">
                        "Điều này vi phạm nghiêm trọng hạn mức 30%..."
                     </div>
                     <div className="bg-success/10 p-2 rounded text-success-dark text-xs border border-success/20">
                        "Tuy nhiên, sự sai lệch này đã được giải trình bổ sung tại Phụ lục 02..."
                     </div>

                     <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <button className="text-xs font-bold text-primary-600 hover:underline flex items-center gap-1"><ExternalLink className="w-3 h-3"/> Xem Bằng chứng gốc</button>
                     </div>
                  </div>
              </div>

              {/* Comment 2 */}
              <div 
                className={`bg-white border rounded-xl overflow-hidden shadow-sm transition-all ${activeComment === 'comment-2' ? 'border-primary-500 ring-1 ring-primary-500' : 'border-slate-200 hover:border-slate-300'}`}
                onClick={() => setActiveComment('comment-2')}
              >
                  <div className="p-3 border-b border-slate-100 bg-slate-50 flex items-center justify-between text-xs font-bold text-slate-600">
                    <span className="flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5 text-warning-dark"/> Ghi chú thủ công (Checker)</span>
                  </div>
                  <div className="p-4 text-sm">
                     <p className="text-slate-700 italic border-l-2 border-warning pl-3 bg-warning/5 py-1 mb-2">
                       "Nên cân nhắc ngôn từ đoạn này nhẹ nhàng hơn, 'Không có dấu hiệu giả mạo' nghe hơi cảm tính. Đề xuất đổi thành 'Hồ sơ có chữ ký số hợp lệ'."
                     </p>
                     
                     <div className="mt-4 pt-3 border-t border-slate-100 flex gap-2">
                        <button className="flex-1 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded transition-colors">Bỏ qua</button>
                        <button className="flex-1 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded transition-colors">Edit Text Tự động</button>
                     </div>
                  </div>
              </div>

              {/* Add Feedback Input */}
              <div className="mt-6 bg-white border border-slate-200 rounded-xl p-3 shadow-sm">
                 <textarea 
                   placeholder="Thêm nhận xét chung cho báo cáo này..."
                   className="w-full text-sm outline-none resize-none h-16 text-slate-700" 
                 ></textarea>
                 <div className="flex justify-end mt-2">
                    <button className="flex items-center gap-1 bg-slate-900 text-white px-3 py-1.5 rounded font-bold text-xs hover:bg-black transition-colors"><MessageSquare className="w-3 h-3"/> Bình luận</button>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  )
}
