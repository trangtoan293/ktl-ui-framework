import React, { useState } from 'react'
import { FileText, Cpu, Crosshair, BarChart3, Settings, AlertTriangle, CheckCircle2, XCircle, ArrowRight, BookOpen, Clock, Activity, FileCheck2, Scale, ListChecks, Filter, ChevronLeft } from 'lucide-react'

export default function CompareWorkspace() {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1) // Step 1: Config, 2: Running, 3: Review Results
  const [trustScore, setTrustScore] = useState<number>(0)
  const [activeFinding, setActiveFinding] = useState<number | null>(null)

  const handleRunExecution = () => {
    setStep(2)
    let score = 0
    const interval = setInterval(() => {
      score += 5
      setTrustScore(Math.min(score, 82)) // Target score 82%
      if (score >= 100) {
        clearInterval(interval)
        setTimeout(() => setStep(3), 500)
      }
    }, 100)
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50 overflow-hidden relative">
      
      {/* Universal Header */}
      <div className="h-14 bg-white border-b border-slate-200 px-6 flex items-center justify-between shadow-sm z-20 shrink-0">
        <div className="flex items-center gap-3">
           <div className="w-8 h-8 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center">
             <Scale className="w-4 h-4 text-indigo-600" />
           </div>
           <div>
             <h1 className="font-bold text-slate-800 text-sm">Cross-Reference Engine (A-COMP)</h1>
           </div>
        </div>
        
        {step === 3 && (
           <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Reliability Score:</span>
              <div className={`px-3 py-1 flex items-center gap-2 rounded-full font-bold text-sm border ${trustScore > 80 ? 'bg-success/10 text-success-dark border-success/20' : 'bg-warning/10 text-warning-dark border-warning/20'}`}>
                 <Activity className="w-4 h-4" /> {trustScore}%
              </div>
              <div className="w-px h-5 bg-slate-200 mx-1"></div>
              <button className="bg-slate-900 hover:bg-black text-white px-4 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center gap-2">
                 <FileCheck2 className="w-3.5 h-3.5"/> Lưu Kết quả & Tạo Finding 
              </button>
           </div>
        )}
      </div>

      <div className="flex-1 flex overflow-hidden">

        {/* -----------------------------------------------------
            STEP 1: CONFIGURATION WIZARD
            ----------------------------------------------------- */}
        {step === 1 && (
           <div className="w-full flex justify-center items-start pt-12 overflow-y-auto pb-20">
              <div className="max-w-4xl w-full bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                 <div className="bg-slate-900 p-8 text-white">
                    <h2 className="text-2xl font-bold mb-2">Thiết lập Bộ máy So khớp (A-COMP)</h2>
                    <p className="text-slate-400 text-sm">Khởi tạo quy trình kiểm tra chéo tự động giữa Báo cáo đầu cuối và các tập Reference Rules đã được phê duyệt.</p>
                 </div>
                 
                 <div className="p-8 space-y-8">
                    {/* Báo cáo đích */}
                    <div>
                       <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2"><FileText className="w-4 h-4 text-slate-400"/> Báo cáo đích cần kiểm tra</h3>
                       <select className="w-full bg-slate-50 border border-slate-300 p-3 rounded-xl font-medium outline-none focus:border-indigo-500">
                          <option>Báo cáo_Giai_Doan_1_Khoan_Vay_ABC.pdf</option>
                       </select>
                    </div>

                    <div className="h-px bg-slate-100"></div>

                    {/* Tập tham chiếu */}
                    <div>
                       <div className="flex justify-between items-end mb-4">
                          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400"/> Chọn Tập Tham Chiếu (Reference Rulesets)</h3>
                          <button className="text-xs font-bold text-indigo-600 hover:underline">+ Mở Rule Library</button>
                       </div>
                       <div className="grid grid-cols-2 gap-4">
                          <label className="border border-indigo-500 bg-indigo-50 p-4 rounded-xl flex gap-3 cursor-pointer relative overflow-hidden">
                             <input type="checkbox" defaultChecked className="mt-1" />
                             <div>
                                <h4 className="font-bold text-indigo-900 text-sm">Bộ quy định 14/BTTTT</h4>
                                <p className="text-xs text-indigo-700/80 mt-1 leading-relaxed">Đề cương chuẩn cho loại biên bản nghiệm thu P/M.</p>
                             </div>
                             <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">APPROVED</div>
                          </label>
                          <label className="border border-indigo-500 bg-indigo-50 p-4 rounded-xl flex gap-3 cursor-pointer relative overflow-hidden">
                             <input type="checkbox" defaultChecked className="mt-1" />
                             <div>
                                <h4 className="font-bold text-indigo-900 text-sm">Mapping Data Log Hệ thống (SFTP)</h4>
                                <p className="text-xs text-indigo-700/80 mt-1 leading-relaxed">Đối chiếu số liệu log thực tế với nội dung ghi chép.</p>
                             </div>
                             <div className="absolute top-0 right-0 bg-indigo-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-bl">APPROVED</div>
                          </label>
                          <label className="border border-slate-200 hover:border-slate-300 bg-white p-4 rounded-xl flex gap-3 cursor-pointer relative">
                             <input type="checkbox" className="mt-1" />
                             <div>
                                <h4 className="font-bold text-slate-700 text-sm">Hợp đồng Nguyên tắc (HĐ-33/2026)</h4>
                                <p className="text-xs text-slate-500 mt-1 leading-relaxed">Khớp nối tiến độ thời gian và hạn mức thanh toán.</p>
                             </div>
                          </label>
                       </div>
                    </div>

                    <div className="h-px bg-slate-100"></div>

                    {/* Engine Plugins */}
                    <div>
                       <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4 flex items-center gap-2"><Cpu className="w-4 h-4 text-slate-400"/> Các Module Phân tích (Engine Config)</h3>
                       <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                             <div>
                                <div className="font-bold text-slate-700 text-sm flex items-center gap-2"><Crosshair className="w-4 h-4 text-indigo-500"/> Semantic Matching (NLP)</div>
                                <p className="text-xs text-slate-500 mt-0.5">Phát hiện mâu thuẫn về mặt ngữ nghĩa văn bản so với quy chế mẫu.</p>
                             </div>
                             <div className="flex items-center gap-3">
                               <input type="range" className="w-24 accent-indigo-600" title="Độ nhạy AI" />
                               <span className="text-xs font-bold text-slate-400 w-8">High</span>
                               <input type="checkbox" defaultChecked className="w-4 h-4" />
                             </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                             <div>
                                <div className="font-bold text-slate-700 text-sm flex items-center gap-2"><BarChart3 className="w-4 h-4 text-success-dark"/> Consistency Checking (Số liệu)</div>
                                <p className="text-xs text-slate-500 mt-0.5">Đối chiếu độ lệch giá trị tài chính, khối lượng nghiệm thu.</p>
                             </div>
                             <div className="flex items-center gap-3">
                               <span className="text-[10px] font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded">Tolerance 5%</span>
                               <input type="checkbox" defaultChecked className="w-4 h-4" />
                             </div>
                          </div>
                          <div className="flex items-center justify-between p-4 bg-slate-50 border border-slate-200 rounded-lg">
                             <div>
                                <div className="font-bold text-slate-700 text-sm flex items-center gap-2"><Clock className="w-4 h-4 text-warning-dark"/> Logical Flow (Timestamps)</div>
                                <p className="text-xs text-slate-500 mt-0.5">Kiểm tra mốc thời gian sự kiện tránh paradox/ngụy tạo log.</p>
                             </div>
                             <div className="flex items-center gap-3">
                               <input type="checkbox" defaultChecked className="w-4 h-4" />
                             </div>
                          </div>
                       </div>
                    </div>

                 </div>

                 <div className="bg-slate-50 p-6 border-t border-slate-200 flex justify-end">
                    <button 
                       onClick={handleRunExecution}
                       className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 shadow-sm hover:bg-indigo-700 transition-all hover:scale-[1.02]"
                    >
                       Khởi chạy Engine Phân Tích <ArrowRight className="w-4 h-4" />
                    </button>
                 </div>
              </div>
           </div>
        )}

        {/* -----------------------------------------------------
            STEP 2: RUNNING PROGRESS
            ----------------------------------------------------- */}
        {step === 2 && (
           <div className="w-full flex-1 flex flex-col items-center justify-center bg-slate-50">
              <div className="w-96 text-center space-y-6 animate-pulse">
                 <div className="w-24 h-24 rounded-full border-4 border-slate-200 border-t-indigo-600 animate-spin mx-auto"></div>
                 <div>
                   <h2 className="text-xl font-bold text-slate-800">Đang quét So khớp Báo Cáo...</h2>
                   <p className="text-sm text-slate-500 mt-2">Connecting to Vector DB & Rule Engine. {trustScore}% completed</p>
                 </div>
                 <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-600" style={{ width: `${trustScore}%` }}></div>
                 </div>
              </div>
           </div>
        )}

        {/* -----------------------------------------------------
            STEP 3: REVIEW / ANALYSIS WORKSPACE
            ----------------------------------------------------- */}
        {step === 3 && (
           <div className="flex-1 flex overflow-hidden">
              
              {/* PANES CONTAINER */}
              <div className="flex-1 flex w-full">
                 
                 {/* LEFT PANE: Báo cáo */}
                 <div className="flex-1 border-r border-slate-200 flex flex-col bg-white overflow-hidden shadow-[4px_0_24px_rgba(0,0,0,0.02)] z-10">
                    <div className="h-10 bg-slate-100/50 border-b border-slate-200 flex items-center px-4 justify-between shrink-0">
                       <span className="font-bold text-xs uppercase tracking-widest text-slate-600 flex items-center gap-2"><FileText className="w-4 h-4"/> Target: Báo Cáo Đơn Vị Nộp</span>
                       <span className="text-[10px] text-slate-400">Trang 1/12</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-8 bg-slate-200/50 flex flex-col items-center">
                       <div className="w-full max-w-2xl bg-white shadow-sm p-12 min-h-[1000px] font-serif text-slate-800 text-[15px] leading-relaxed">
                          <h1 className="text-xl font-bold mb-6 text-center uppercase tracking-wide">Phần 2: Năng lực Khảo sát Tuyến Cáp</h1>
                          <p className="mb-4 text-justify">Trong cuộc hợp giao ban ngày 15/03/2026, phía đối tác thi công (Công ty Cổ phần A) báo cáo đã tiến hành thực địa tuyến số 1 tại Quảng Nam với khối lượng 15km.</p>
                          
                          <div 
                            className={`p-1 -m-1 rounded transition-colors cursor-pointer ${activeFinding === 1 ? 'bg-danger/20 ring-2 ring-danger shadow-[0_0_0_2px_rgba(239,68,68,0.2)]' : 'hover:bg-slate-100'}`}
                            onClick={() => setActiveFinding(1)}
                          >
                            <span className="bg-danger/10 text-danger-dark font-bold">Việc triển khai cắt đường thi công cáp ngầm này đã nhận được văn bản chấp thuận thủ tục từ Sở GTVT tỉnh theo Tờ trình số 14/TT-SGT và đã rải đủ 15km cáp trục chính.</span>
                          </div>

                          <p className="mt-4 text-justify">Các đội kỹ thuật đã lập biên bản xác nhận với sự chứng kiến của chính quyền địa phương...</p>

                          <div 
                            className={`p-1 -m-1 mt-4 rounded transition-colors cursor-pointer ${activeFinding === 2 ? 'bg-warning/20 ring-2 ring-warning shadow-[0_0_0_2px_rgba(245,158,11,0.2)]' : 'hover:bg-slate-100'}`}
                            onClick={() => setActiveFinding(2)}
                          >
                            <span className="bg-warning/10 text-warning-dark font-bold border-b border-warning-dark border-dashed">Về chi phí bồi thường giải phóng mặt bằng dọc tuyến là 500,000,000 VNĐ, đã giải ngân được 100%.</span>
                          </div>
                          
                       </div>
                    </div>
                 </div>

                 {/* RIGHT PANE: References / Tools */}
                 <div className="flex-1 flex flex-col bg-slate-50 overflow-hidden">
                    <div className="h-10 bg-slate-100/50 border-b border-slate-200 flex items-center px-4 justify-between shrink-0">
                       <span className="font-bold text-xs uppercase tracking-widest text-slate-600 flex items-center gap-2"><Crosshair className="w-4 h-4"/> Nguồn đối chiếu & Actions</span>
                       <button className="flex items-center gap-1 text-[10px] bg-white border border-slate-300 px-2 rounded hover:bg-slate-50 font-bold"><ListChecks className="w-3 h-3"/> Xem List Finding (2)</button>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                       
                       {/* AI Findings Prompt/Panel */}
                       {!activeFinding ? (
                          <div className="h-full flex flex-col items-center justify-center text-slate-400 p-8 space-y-4">
                             <Scale className="w-16 h-16 text-slate-300 opacity-50" />
                             <div className="text-center">
                               <p className="font-bold text-slate-600">Chọn một đoạn được Highlight ở Báo Cáo.</p>
                               <p className="text-sm mt-1">Hệ thống sẽ hiển thị Reference Rule tương ứng để bạn kiểm chứng.</p>
                             </div>
                             <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm w-full mt-8">
                                <h4 className="font-bold text-sm text-slate-700 flex items-center gap-2 mb-3"><AlertTriangle className="w-4 h-4 text-warning" /> Tổng hợp Discrepancies</h4>
                                <ul className="space-y-2 text-sm text-slate-600">
                                   <li className="flex justify-between hover:bg-slate-50 p-2 rounded cursor-pointer" onClick={() => setActiveFinding(1)}>
                                     <span className="truncate w-3/4">#1 Mâu thuẫn logic: Tiến độ rải cáp vs Cấp phép...</span>
                                     <span className="bg-danger/10 text-danger-dark font-bold text-[10px] px-2 py-0.5 rounded">High Severity</span>
                                   </li>
                                   <li className="flex justify-between hover:bg-slate-50 p-2 rounded cursor-pointer" onClick={() => setActiveFinding(2)}>
                                     <span className="truncate w-3/4">#2 Vượt quá định mức ngân sách giải phóng...</span>
                                     <span className="bg-warning/10 text-warning-dark font-bold text-[10px] px-2 py-0.5 rounded">Medium</span>
                                   </li>
                                </ul>
                             </div>
                          </div>
                       ) : (
                          <div className="animate-in slide-in-from-right-4 duration-300">
                             {/* Finding Details */}
                             <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm shadow-slate-200">
                                <div className="bg-danger/5 border-b border-danger/10 p-4">
                                   <div className="flex justify-between items-start mb-2">
                                      <h3 className="font-bold text-danger-dark uppercase tracking-widest text-xs flex items-center gap-1"><AlertTriangle className="w-4 h-4"/> Discrepancy #{activeFinding}</h3>
                                      <span className="bg-white text-danger border border-danger/20 font-bold px-2 py-0.5 rounded text-[10px]">Logical Flaw</span>
                                   </div>
                                   <p className="text-sm font-medium text-slate-800">
                                      {activeFinding === 1 ? 'Mâu thuẫn về Trình tự Thời gian (Logical Time Sequence)' : 'Vượt Quá Định Mức Số liệu (Numerical Inconsistency)'}
                                   </p>
                                </div>
                                
                                <div className="p-5 space-y-5">
                                   {/* Reference Evidence */}
                                   <div>
                                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Bằng chứng / Target Reference</label>
                                      {activeFinding === 1 ? (
                                         <div className="bg-slate-50 border border-slate-200 rounded p-4 text-sm font-mono text-slate-600 leading-relaxed relative">
                                            <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 font-bold text-[9px] px-2 rounded-bl">Rule_TTC_Logic</div>
                                            <p className="mb-2"><strong>Dữ liệu Mapping:</strong> Văn bản thụ lý Tờ trình 14/TT-SGT được cấp bởi Sở GTVT có timestamp ký số vào <span className="text-danger font-bold">18/03/2026</span>.</p>
                                            <p><strong>So khớp Logic:</strong> Không thể hoàn thành rải 15km cáp trong báo cáo chốt khối lượng ngày <span className="text-danger font-bold">15/03/2026</span> trước khi có giấy phép.</p>
                                         </div>
                                      ) : (
                                         <div className="bg-slate-50 border border-slate-200 rounded p-4 text-sm font-mono text-slate-600 leading-relaxed relative">
                                            <div className="absolute top-0 right-0 bg-slate-200 text-slate-500 font-bold text-[9px] px-2 rounded-bl">Rule_Budget_CAPEX</div>
                                            <p className="mb-2"><strong>Tham chiếu:</strong> Hợp đồng nguyên tắc HĐ-33/2026 quy định bồi thường.</p>
                                            <p><strong>So khớp:</strong> Value trong báo cáo (500,000,000) lớn hơn ngân sách tối đa được duyệt tại khoản 1B hợp đồng (Limit = 350,000,000).</p>
                                         </div>
                                      )}
                                   </div>
                                   
                                   <div className="h-px bg-slate-100"></div>

                                   {/* Action Review (Human-in-the-loop) */}
                                   <div className="space-y-4">
                                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block">Analyst Decision</label>
                                      <textarea 
                                        className="w-full text-sm bg-slate-50 border border-slate-300 rounded-lg p-3 outline-none focus:border-indigo-500 resize-none h-20 shadow-inner"
                                        placeholder="Nhập ghi chú hoặc yêu cầu đơn vị giải trình lỗi này..."
                                      ></textarea>
                                      
                                      <div className="flex gap-2">
                                         <button className="flex-1 bg-white border border-danger text-danger hover:bg-danger/5 hover:border-danger font-bold text-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm">
                                            <XCircle className="w-4 h-4"/> Confirm Finding (Lỗi)
                                         </button>
                                         <button className="flex-1 bg-white border border-slate-300 text-slate-600 hover:bg-slate-100 font-bold text-sm py-2 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm">
                                            <CheckCircle2 className="w-4 h-4"/> False Positive (Bỏ qua)
                                         </button>
                                      </div>
                                   </div>
                                </div>
                             </div>

                             <button 
                               onClick={() => setActiveFinding(null)}
                               className="mt-4 text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1"
                             >
                               <ChevronLeft className="w-4 h-4" /> Đóng Detail View
                             </button>
                          </div>
                       )}

                    </div>
                 </div>

              </div>
           </div>
        )}

      </div>
    </div>
  )
}
