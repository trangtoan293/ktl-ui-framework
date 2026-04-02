import React, { useState } from 'react'
import { Play, FileJson, CheckCircle2, XCircle, AlertTriangle, Workflow, ChevronRight } from 'lucide-react'

export default function FlowTest() {
  const [runStatus, setRunStatus] = useState<'idle' | 'running' | 'completed'>('idle')

  const handleRunTest = () => {
    setRunStatus('running')
    setTimeout(() => {
      setRunStatus('completed')
    }, 2000)
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50">
      
      {/* Header */}
      <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div>
           <div className="flex items-center gap-2 mb-0.5">
             <span className="px-1.5 py-0.5 bg-indigo-50 text-indigo-600 rounded text-[10px] font-bold uppercase tracking-wider border border-indigo-200">Flow Test</span>
             <h1 className="text-lg font-bold text-slate-800">Flow_ThanhTra_DuAn_HopDong</h1>
           </div>
           <p className="text-xs font-semibold text-slate-500">Pipeline kiểm thử kết nối tự động 3 rules đối chiếu liên tiếp.</p>
        </div>
        <div className="flex items-center gap-4">
           {/* Environment Selector */}
           <select className="bg-slate-100 border border-slate-200 rounded-lg px-3 py-1.5 text-sm font-bold text-slate-700 outline-none">
             <option>Development</option>
             <option>Staging</option>
           </select>
           
           <button 
             onClick={handleRunTest}
             disabled={runStatus === 'running'}
             className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-all disabled:opacity-50"
           >
             {runStatus === 'running' ? (
               <><div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div> Đang Execute...</>
             ) : (
               <><Play className="w-4 h-4 fill-white" /> Khởi chạy Flow</>
             )}
           </button>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Input Data Config */}
        <div className="flex-[4] flex flex-col bg-white border-r border-slate-200 relative">
           
           <div className="flex px-4 pt-4 border-b border-slate-200 bg-slate-50 gap-2 shrink-0">
             <button className="flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 border-indigo-600 text-indigo-600">
               <FileJson className="w-4 h-4" /> JSON Input Payload
             </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
             <div className="h-full flex flex-col space-y-3">
                <div className="flex justify-between items-end">
                   <label className="text-sm font-bold text-slate-700 flex items-center gap-2">Dữ liệu Context chung đẩy vào toàn bộ luồng Pipeline</label>
                   <button className="text-xs font-bold text-indigo-600 hover:underline">Auto Generate Test Data</button>
                </div>
                
                <div className="relative flex-1 opacity-90 hover:opacity-100 transition-opacity focus-within:opacity-100">
                   <div className="absolute top-0 right-0 left-8 bottom-0 bg-slate-900 rounded-lg font-mono text-sm shadow-inner p-4 text-emerald-400 overflow-y-auto whitespace-pre outline-none" contentEditable>
{`{
  "project_id": "PRJ-9992",
  "document": {
    "title": "Hồ sơ vay vốn X",
    "pages": 12,
    "attachments": ["phu_luc_1.pdf"]
  },
  "financials": {
    "total_budget": 5000000000,
    "hardware_cost": 3000000000,
    "software_cost": 1500000000,
    "contingency": 500000000
  }
}`}
                   </div>
                   <div className="absolute top-0 bottom-0 left-0 w-8 bg-slate-800 rounded-l-lg border-r border-slate-700 flex flex-col items-center py-4 font-mono text-sm text-slate-500 overflow-hidden select-none">
                      <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span>
                   </div>
                </div>
             </div>
           </div>
        </div>

        {/* RIGHT: Test Results Console */}
        <div className="flex-[4] flex flex-col bg-white relative">
           
           <div className="h-12 border-b border-slate-200 bg-slate-50 flex items-center px-4 font-bold text-xs uppercase tracking-wider text-slate-500 gap-2 shrink-0 justify-between">
             <div className="flex items-center gap-2"><Workflow className="w-4 h-4 text-indigo-500" /> Pipeline Execution Checklist</div>
             {runStatus === 'completed' && <span className="text-danger font-bold">1 FAILED / 2 PASSED</span>}
           </div>

           <div className="flex-1 overflow-y-auto bg-slate-100 p-6">
             
             {runStatus === 'idle' && (
                <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
                   <Workflow className="w-16 h-16 text-slate-300" />
                   <p className="font-medium">Chưa có dữ liệu Run. Trạng thái Flow đang Idle.</p>
                </div>
             )}

             {(runStatus === 'running' || runStatus === 'completed') && (
                <div className="space-y-6">
                   
                   {/* Step 1 */}
                   <div className="bg-white border text-sm border-success/30 rounded-lg shadow-sm overflow-hidden">
                      <div className="flex items-center justify-between p-3 bg-success/5 border-b border-success/20">
                         <div className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-success" />
                           <span className="font-bold text-slate-800">Rule 1: Kiểm tra Tính toàn vẹn của File (Required)</span>
                         </div>
                         <span className="text-[10px] font-bold text-slate-400">12 ms</span>
                      </div>
                      <div className="p-3 font-mono text-xs text-slate-600 bg-slate-50 flex flex-col gap-1">
                         <p>{`> Extracted $.document.pages = 12 (Đáp ứng > 0)`}</p>
                         <p>{`> Extracted $.document.attachments length = 1 (Đáp ứng)`}</p>
                         <p className="text-success font-bold mt-1">Status: PASSED</p>
                      </div>
                   </div>

                   {/* Connector */}
                   <div className="flex justify-center -my-4 relative z-10 w-full"><div className="w-0.5 h-6 bg-slate-300"></div></div>

                   {/* Step 2 (Evaluating directly via state or just showing completed as failed) */}
                   <div className={`bg-white border text-sm ${runStatus === 'running' ? 'border-indigo-300/50 shadow-md ring-1 ring-indigo-500' : 'border-danger/30'} rounded-lg overflow-hidden`}>
                      <div className={`flex items-center justify-between p-3 ${runStatus === 'running' ? 'bg-indigo-50 border-indigo-200' : 'bg-danger/5 border-danger/20'} border-b`}>
                         <div className="flex items-center gap-3">
                           {runStatus === 'running' ? (
                             <div className="w-5 h-5 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin"></div>
                           ) : (
                             <XCircle className="w-5 h-5 text-danger" />
                           )}
                           <span className="font-bold text-slate-800">Rule 2: Ngân sách Phần cứng (Limit)</span>
                         </div>
                         {runStatus === 'completed' && <span className="text-[10px] font-bold text-slate-400">45 ms</span>}
                      </div>

                      <div className="p-3 font-mono text-xs text-slate-600 bg-slate-50 flex flex-col gap-1">
                         <p>{`> Evaluating $.financials.hardware_cost <= $.financials.total_budget * 0.5`}</p>
                         {runStatus === 'completed' && (
                           <>
                           <p className="text-danger-light mt-1 bg-danger/10 p-2 rounded">
                             Eval value: 3,000,000,000 <span className="text-danger font-bold ml-1">{`>`}</span> (5,000,000,000 * 0.5 = 2,500,000,000)
                           </p>
                           <p className="text-danger font-bold mt-1">Status: FAILED</p>
                           </>
                         )}
                      </div>
                   </div>

                   {runStatus === 'completed' && (
                     <>
                     {/* Connector */}
                     <div className="flex justify-center -my-4 relative z-10 w-full"><div className="w-0.5 h-6 bg-slate-300"></div></div>

                     {/* Step 3 */}
                     <div className="bg-white border text-sm border-slate-200 rounded-lg shadow-sm overflow-hidden opacity-50">
                        <div className="flex items-center justify-between p-3 bg-slate-50 border-b border-slate-200">
                           <div className="flex items-center gap-3">
                             <AlertTriangle className="w-5 h-5 text-slate-400" />
                             <span className="font-bold text-slate-600">Rule 3: Đối chiếu với HĐ Kinh tế</span>
                           </div>
                           <span className="text-[10px] font-bold text-slate-400">SKIPPED</span>
                        </div>
                        <div className="p-3 font-mono text-xs text-slate-500 bg-slate-50">
                           <p>Pipeline đã ngắt do Rule 2 (Required) xảy ra lỗi Exception / Failed.</p>
                        </div>
                     </div>

                     {/* Final Assessment */}
                     <div className="mt-8 p-4 bg-danger text-white rounded-lg shadow-md flex items-start gap-4 animate-in slide-in-from-bottom-4">
                        <XCircle className="w-8 h-8 mt-1 opacity-80" />
                        <div>
                          <h3 className="font-bold text-lg">Xác nhận Flow Configuration FAILED</h3>
                          <p className="text-sm text-danger-50 mt-1">Pipeline dừng ở Bước 2. Hãy sửa dữ liệu Input hoặc chỉnh lại Logic của Rule 2 để khắc phục.</p>
                        </div>
                     </div>
                     </>
                   )}
                </div>
             )}

           </div>

        </div>

      </div>
    </div>
  )
}
