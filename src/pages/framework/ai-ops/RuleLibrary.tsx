import React, { useState } from 'react'
import { Plus, Search, Filter, Play, CheckCircle2, ShieldAlert, Cpu, Import, Code2, Sparkles, X, Activity } from 'lucide-react'

export default function RuleLibrary() {
  const [view, setView] = useState<'library' | 'create'>('library')
  const [createMethod, setCreateMethod] = useState<'natural' | 'code' | 'import'>('natural')

  return (
    <div className="flex-1 flex w-full h-full bg-slate-50 relative overflow-hidden">
      
      {/* -------------------------------------------------------------------------------- */}
      {/* VIEW: MAIN LIBRARY */}
      {/* -------------------------------------------------------------------------------- */}
      <div className={`flex-1 flex flex-col min-w-0 transition-opacity duration-300 ${view === 'library' ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
        
        {/* Header Bar */}
        <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-sm">
          <div>
             <h1 className="text-lg font-bold text-slate-800 flex items-center gap-2"><Cpu className="w-5 h-5 text-ai-purple-600" /> Thư viện Luật Kiểm tra (Rule Library)</h1>
             <p className="text-[11px] font-medium text-slate-500 mt-0.5">Quản lý và Khởi tạo các rules đối chiếu động cho hệ AI Agent.</p>
          </div>
          <button 
            onClick={() => setView('create')}
            className="flex items-center gap-2 bg-ai-purple-600 hover:bg-ai-purple-700 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm transition-colors"
          >
            <Plus className="w-4 h-4" /> Tạo Rule mới
          </button>
        </div>

        <div className="flex-1 flex overflow-hidden">
          {/* Sidebar / Filters */}
          <div className="w-[240px] bg-white border-r border-slate-200 flex flex-col shrink-0">
             <div className="p-4 border-b border-slate-100">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input type="text" placeholder="Tìm kiếm rule..." className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-ai-purple-500 transition-colors" />
                </div>
             </div>
             
             <div className="flex-1 overflow-y-auto p-4 space-y-6">
                <div>
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Môi trường</h3>
                   <div className="space-y-1">
                      <button className="w-full flex items-center justify-between px-3 py-2 bg-ai-purple-50 text-ai-purple-700 rounded-lg text-sm font-bold border border-ai-purple-200">
                         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-ai-purple-600"></div> Development</div>
                         <span className="text-xs bg-white text-ai-purple-700 px-2 rounded-full font-bold">12</span>
                      </button>
                      <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">
                         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-warning"></div> Staging / Test</div>
                         <span className="text-xs text-slate-400">4</span>
                      </button>
                      <button className="w-full flex items-center justify-between px-3 py-2 hover:bg-slate-50 text-slate-600 rounded-lg text-sm font-medium transition-colors">
                         <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-success"></div> Production</div>
                         <span className="text-xs text-slate-400">105</span>
                      </button>
                   </div>
                </div>

                <div>
                   <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Loại Rule</h3>
                   <div className="space-y-1">
                      <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="rounded border-slate-300 text-ai-purple-600 focus:ring-ai-purple-500" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">Semantic Match (Ngữ nghĩa)</span>
                      </label>
                      <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="rounded border-slate-300 text-ai-purple-600 focus:ring-ai-purple-500" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">Logic & Tính toán</span>
                      </label>
                      <label className="flex items-center gap-2 px-2 py-1.5 cursor-pointer group">
                        <input type="checkbox" defaultChecked className="rounded border-slate-300 text-ai-purple-600 focus:ring-ai-purple-500" />
                        <span className="text-sm text-slate-600 group-hover:text-slate-900">Kiểm tra Form (Regex)</span>
                      </label>
                   </div>
                </div>
             </div>
          </div>

          {/* Data Table */}
          <div className="flex-1 bg-slate-50 p-6 overflow-y-auto">
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-left border-collapse">
                   <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
                         <th className="p-4 w-10 text-center">#</th>
                         <th className="p-4">Tên Rule (Mô tả)</th>
                         <th className="p-4 w-40">Loại tham chiếu</th>
                         <th className="p-4 w-28 text-center">Trạng thái</th>
                         <th className="p-4 w-48 text-right">Hành động</th>
                      </tr>
                   </thead>
                   <tbody className="text-sm divide-y divide-slate-100">
                      
                      {/* Row 1 */}
                      <tr className="hover:bg-slate-50 transition-colors group">
                         <td className="p-4 text-center font-medium text-slate-400">1</td>
                         <td className="p-4">
                            <div className="flex items-center gap-2">
                               <p className="font-bold text-slate-800">Rule_Check_GD1_Cost</p>
                               <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">v1.2</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1 flex items-center gap-1"><Cpu className="w-3 h-3"/> "Tổng chi phí GĐ1 không vượt quá 30% HĐ"</p>
                         </td>
                         <td className="p-4 text-slate-600"><span className="px-2 py-1 bg-slate-100 rounded text-xs font-medium">Calculation</span></td>
                         <td className="p-4 text-center"><span className="inline-flex items-center gap-1 px-2 py-1 bg-success/10 text-success-dark text-xs font-bold rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-success"></div> Active</span></td>
                         <td className="p-4 text-right">
                            <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="p-1.5 text-slate-400 hover:text-ai-purple-600 hover:bg-ai-purple-50 rounded" title="Chạy Test"><Play className="w-4 h-4" /></button>
                               <button className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 rounded whitespace-nowrap">Edit</button>
                            </div>
                         </td>
                      </tr>

                      {/* Row 2 */}
                      <tr className="hover:bg-slate-50 transition-colors group">
                         <td className="p-4 text-center font-medium text-slate-400">2</td>
                         <td className="p-4">
                            <div className="flex items-center gap-2">
                               <p className="font-bold text-slate-800">Rule_Match_Chu_Ky_So</p>
                               <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-500 border border-slate-200">v1.0</span>
                            </div>
                            <p className="text-xs text-slate-500 mt-1 line-clamp-1 flex items-center gap-1"><Cpu className="w-3 h-3"/> Xác minh tài liệu có chứa block chữ ký số VNPT</p>
                         </td>
                         <td className="p-4 text-slate-600"><span className="px-2 py-1 bg-slate-100 rounded text-xs font-medium">Regex Pattern</span></td>
                         <td className="p-4 text-center"><span className="inline-flex items-center gap-1 px-2 py-1 bg-warning/10 text-warning-dark text-xs font-bold rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-warning"></div> Draft</span></td>
                         <td className="p-4 text-right">
                            <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                               <button className="px-3 py-1 bg-ai-purple-50 text-ai-purple-700 border border-ai-purple-200 text-xs font-bold hover:bg-ai-purple-100 rounded whitespace-nowrap">Submit Duyệt</button>
                            </div>
                         </td>
                      </tr>

                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------------------------- */}
      {/* VIEW: CREATE RULE (Slide-over / Full View) */}
      {/* -------------------------------------------------------------------------------- */}
      <div className={`flex-1 flex flex-col bg-white transition-opacity duration-300 ${view === 'create' ? 'opacity-100 z-20 absolute inset-0' : 'opacity-0 pointer-events-none absolute inset-0'}`}>
        
        {/* Header Bar */}
        <div className="h-16 bg-slate-900 text-white px-6 flex items-center justify-between shrink-0 shadow-sm relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-64 bg-gradient-to-l from-ai-purple-600/30 to-transparent pointer-events-none"></div>
          
          <div className="flex items-center gap-4 relative z-10">
             <button onClick={() => setView('library')} className="p-2 hover:bg-white/10 rounded-lg transition-colors mr-2">
               <X className="w-5 h-5" />
             </button>
             <div>
                <h1 className="text-lg font-bold flex items-center gap-2"><Sparkles className="w-5 h-5 text-ai-purple-400" /> Khởi tạo Rule Mới</h1>
                <p className="text-[11px] font-medium text-slate-400 mt-0.5">Môi trường: <span className="text-white">Development</span></p>
             </div>
          </div>
          <div className="relative z-10 flex gap-3">
             <button className="px-4 py-2 border border-slate-600 text-slate-300 hover:bg-slate-800 rounded-lg text-sm font-bold transition-colors">Lưu Nháp (Draft)</button>
             <button className="px-4 py-2 bg-ai-purple-500 hover:bg-ai-purple-600 text-white rounded-lg text-sm font-bold shadow-md transition-colors flex items-center gap-2">
               <CheckCircle2 className="w-4 h-4"/> Lưu & Chuyển Test
             </button>
          </div>
        </div>

        <div className="flex-1 flex overflow-hidden">
           
           {/* Form Area */}
           <div className="flex-1 overflow-y-auto p-10">
              <div className="max-w-3xl mx-auto space-y-8">
                 
                 <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-800 tracking-wide uppercase">1. Thông tin Định danh</label>
                    <input type="text" placeholder="Nhập tên Rule (VD: Rule_Check_Date_Expiry)" className="w-full text-lg font-bold px-4 py-3 bg-white border border-slate-300 rounded-xl focus:border-ai-purple-500 focus:ring-1 focus:ring-ai-purple-500 outline-none transition-shadow placeholder:font-normal placeholder:text-slate-400" />
                 </div>

                 <div className="space-y-4">
                    <label className="text-sm font-bold text-slate-800 tracking-wide uppercase block">2. Phương thức Xây dựng</label>
                    <div className="grid grid-cols-3 gap-4">
                       <div 
                         onClick={() => setCreateMethod('natural')}
                         className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${createMethod === 'natural' ? 'border-ai-purple-500 bg-ai-purple-50/50' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                       >
                          <Sparkles className={`w-6 h-6 mb-2 ${createMethod === 'natural' ? 'text-ai-purple-600' : 'text-slate-400'}`} />
                          <h3 className="font-bold text-slate-800 mb-1">Ngôn ngữ tự nhiên</h3>
                          <p className="text-xs text-slate-500 leading-relaxed">Mô tả quy tắc bằng Text, AI sẽ tự build functions thực thi.</p>
                       </div>
                       
                       <div 
                         onClick={() => setCreateMethod('code')}
                         className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${createMethod === 'code' ? 'border-slate-800 bg-slate-50' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                       >
                          <Code2 className={`w-6 h-6 mb-2 ${createMethod === 'code' ? 'text-slate-800' : 'text-slate-400'}`} />
                          <h3 className="font-bold text-slate-800 mb-1">Lập trình Code</h3>
                          <p className="text-xs text-slate-500 leading-relaxed">Viết trực tiếp Logic Functions (Python/JSON Schema).</p>
                       </div>

                       <div 
                         onClick={() => setCreateMethod('import')}
                         className={`p-4 border-2 rounded-xl cursor-pointer transition-all ${createMethod === 'import' ? 'border-primary-500 bg-primary-50' : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'}`}
                       >
                          <Import className={`w-6 h-6 mb-2 ${createMethod === 'import' ? 'text-primary-600' : 'text-slate-400'}`} />
                          <h3 className="font-bold text-slate-800 mb-1">Import Văn bản</h3>
                          <p className="text-xs text-slate-500 leading-relaxed">AI bóc tách quy định bắt buộc từ 1 văn bản thành rules.</p>
                       </div>
                    </div>
                 </div>

                 {/* Rendering based on Create Method */}
                 <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px]">
                    {createMethod === 'natural' && (
                       <div className="space-y-4">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Sparkles className="w-4 h-4 text-ai-purple-500"/> Prompt Định nghĩa Rule</label>
                          <textarea 
                             className="w-full h-32 p-4 rounded-lg border border-slate-300 focus:border-ai-purple-500 focus:ring-1 focus:ring-ai-purple-500 outline-none resize-none font-serif text-slate-800"
                             placeholder="Mô tả rule của bạn... VD: Kiểm tra ngày cấp trên biểu mẫu không được vượt quá 30 ngày so với ngày hiện tại."
                          ></textarea>
                          <div className="flex justify-end">
                             <button className="px-4 py-2 bg-slate-800 text-white font-bold text-sm rounded-lg hover:bg-black transition-colors flex items-center gap-2"><Cpu className="w-4 h-4"/> Generate Executable Rule</button>
                          </div>
                          
                          {/* Generated Result Mock */}
                          <div className="mt-6 p-4 bg-slate-800 text-green-400 font-mono text-xs rounded-lg overflow-x-auto shadow-inner">
                             <code>{`{ "type": "temporal_check", "field": "ngay_cap", "operator": "<=", "value": "now() + 30d", "confidence_threshold": 0.95 }`}</code>
                          </div>
                       </div>
                    )}
                    
                    {createMethod === 'code' && (
                       <div className="space-y-4 h-full">
                          <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><Code2 className="w-4 h-4 text-slate-500"/> Executable Logic Editor</label>
                          <div className="w-full h-64 bg-slate-900 rounded-lg p-4 font-mono text-xs text-slate-300 relative">
                             <div className="absolute top-2 right-2 text-[10px] text-slate-500">Python 3.10</div>
                             <p className="text-keyword text-blue-400">def <span className="text-function text-yellow-300">validate_rule</span>(context: dict) -{`>`} bool:</p>
                             <p className="pl-4">field_value = context.get(<span className="text-string text-green-300">"amount"</span>)</p>
                             <p className="pl-4 text-orange-300">return <span className="text-slate-300">field_value {`>`} 1000000</span></p>
                          </div>
                       </div>
                    )}

                    {createMethod === 'import' && (
                       <div className="space-y-4 flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-300 rounded-lg bg-white h-64">
                          <Import className="w-10 h-10 text-slate-300 mb-2" />
                          <p className="text-sm font-bold text-slate-700">Tải lên văn bản pháp lý / Quyết định</p>
                          <p className="text-xs text-slate-500 text-center max-w-sm mb-4">Hệ thống sẽ dùng AI phân tích ngữ nghĩa và trích xuất các điều khoản "Bắt buộc" thành dạng Rule chuẩn.</p>
                          <button className="px-4 py-2 bg-primary-100 text-primary-700 font-bold text-sm rounded-lg hover:bg-primary-200 transition-colors">Browse Files</button>
                       </div>
                    )}

                 </div>

              </div>
           </div>

           {/* Preview Panel right side */}
           <div className="w-[320px] bg-slate-50 border-l border-slate-200 p-6 flex flex-col">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4"><Activity className="w-4 h-4 inline mr-1 text-slate-400"/> Test Console</h3>
              <div className="flex-1 border border-slate-200 bg-white rounded-lg p-4">
                 <p className="text-center text-sm font-bold text-slate-400 mt-10">Lưu Rule thành công để kích hoạt Text Box kiểm thử.</p>
              </div>
           </div>

        </div>
      </div>

    </div>
  )
}
