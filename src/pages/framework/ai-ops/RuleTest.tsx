import React, { useState } from 'react'
import { Play, FileJson, AlignLeft, CheckCircle2, XCircle, AlertTriangle, BugPlay, Hash } from 'lucide-react'

export default function RuleTest() {
  const [testType, setTestType] = useState<'structured' | 'unstructured'>('unstructured')
  const [runStatus, setRunStatus] = useState<'idle' | 'running' | 'success' | 'fail'>('idle')

  const handleRunTest = () => {
    setRunStatus('running')
    setTimeout(() => {
      setRunStatus('fail')
    }, 1500)
  }

  return (
    <div className="flex-1 flex flex-col min-w-0 h-full bg-slate-50">
      
      {/* Header */}
      <div className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between shrink-0 shadow-sm z-10">
        <div>
           <div className="flex items-center gap-2 mb-0.5">
             <span className="px-1.5 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200">Test Environment</span>
             <h1 className="text-lg font-bold text-slate-800">Rule_Check_GD1_Cost</h1>
           </div>
           <p className="text-xs font-semibold text-slate-500">Mô tả: Tổng chi phí GĐ1 không vượt quá 30% HĐ</p>
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
             className="flex items-center gap-2 bg-success hover:bg-success-dark text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-all disabled:opacity-50"
           >
             {runStatus === 'running' ? (
               <><div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></div> Running...</>
             ) : (
               <><Play className="w-4 h-4 fill-white" /> Run Test</>
             )}
           </button>
        </div>
      </div>

      {/* Main Split Body */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* LEFT: Input Data Config */}
        <div className="flex-[4] flex flex-col bg-white border-r border-slate-200 relative">
           
           {/* Tab selector */}
           <div className="flex px-4 pt-4 border-b border-slate-200 bg-slate-50 gap-2 shrink-0">
             <button 
               onClick={() => setTestType('unstructured')}
               className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-colors ${testType === 'unstructured' ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               <AlignLeft className="w-4 h-4" /> Phi cấu trúc (Raw Text)
             </button>
             <button 
               onClick={() => setTestType('structured')}
               className={`flex items-center gap-2 px-4 py-2 text-sm font-bold border-b-2 transition-colors ${testType === 'structured' ? 'border-primary-600 text-primary-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}
             >
               <FileJson className="w-4 h-4" /> Có cấu trúc (JSON / Form)
             </button>
           </div>
           
           <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
             
             {testType === 'unstructured' && (
                <div className="h-full flex flex-col space-y-3">
                   <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><AlignLeft className="w-4 h-4 text-slate-400" /> Nhập đoạn văn bản để test Rule Semantic / Regex</label>
                      <button className="text-xs font-bold text-primary-600 hover:underline">Tải lên file TXT</button>
                   </div>
                   <textarea 
                     className="flex-1 w-full p-4 rounded-lg border border-slate-300 focus:border-primary-500 outline-none resize-none font-serif text-slate-800 shadow-inner"
                     defaultValue="Căn cứ theo hợp đồng số 33/HĐ-XD, định mức giải ngân cho giai đoạn 1 (từ T1 đến T6) là 45% tổng giá trị (tương đương 45 tỷ VNĐ). Chi phí vật tư chiếm phần lớn."
                   />
                </div>
             )}

             {testType === 'structured' && (
                <div className="h-full flex flex-col space-y-3">
                   <div className="flex justify-between items-end">
                      <label className="text-sm font-bold text-slate-700 flex items-center gap-2"><FileJson className="w-4 h-4 text-slate-400" /> JSON Input Payload</label>
                      <button className="text-xs font-bold text-primary-600 hover:underline">Format JSON</button>
                   </div>
                   
                   <div className="relative flex-1">
                      <div className="absolute top-0 right-0 left-8 bottom-0 bg-slate-900 rounded-lg font-mono text-sm shadow-inner p-4 text-green-400 overflow-y-auto whitespace-pre">
{`{
  "contract_id": "33/HĐ-XD",
  "total_value": 100000000000,
  "phases": [
    {
      "phase_name": "GĐ1",
      "cost": 45000000000,
      "status": "APPROVED"
    }
  ]
}`}
                      </div>
                      <div className="absolute top-0 bottom-0 left-0 w-8 bg-slate-800 rounded-l-lg border-r border-slate-700 flex flex-col items-center py-4 font-mono text-sm text-slate-500 overflow-hidden">
                         <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
                      </div>
                   </div>
                </div>
             )}

           </div>
        </div>

        {/* RIGHT: Test Results Console */}
        <div className="flex-[3] flex flex-col bg-slate-900 text-slate-300 relative">
           
           <div className="h-12 border-b border-slate-800 bg-slate-950 flex items-center px-4 font-bold text-xs uppercase tracking-wider text-slate-500 gap-2 shrink-0">
             <BugPlay className="w-4 h-4" /> Execution Console
           </div>

           <div className="flex-1 overflow-y-auto p-4 font-mono text-xs leading-relaxed">
             {runStatus === 'idle' && (
                <div className="h-full flex flex-col items-center justify-center text-slate-600 opacity-50 space-y-2">
                   <BugPlay className="w-12 h-12 mb-2" />
                   <p>Sẵn sàng chạy Test.</p>
                   <p>Nhấn "Run Test" để xem kết quả đánh giá vòng đời của Rule.</p>
                </div>
             )}

             {runStatus === 'running' && (
                <div className="space-y-1">
                   <p className="text-slate-400">{`> Khởi tạo Docker Container (Isolated env)... OK`}</p>
                   <p className="text-slate-400">{`> Load logic rule: Rule_Check_GD1_Cost... OK`}</p>
                   <p className="text-ai-purple-400 animate-pulse">{`> Evaluating data stream...`}</p>
                </div>
             )}

             {runStatus === 'fail' && (
                <div className="space-y-4">
                   <div className="space-y-1">
                     <p className="text-slate-400">{`> Khởi tạo Docker Container (Isolated env)... OK`}</p>
                     <p className="text-slate-400">{`> Load logic rule: Rule_Check_GD1_Cost... OK`}</p>
                     <p className="text-slate-400">{`> Evaluating data stream... DONE (142ms)`}</p>
                   </div>
                   
                   <div className="bg-danger/10 border border-danger p-3 rounded-lg">
                      <div className="flex items-center gap-2 text-danger font-bold text-sm mb-2 uppercase">
                        <XCircle className="w-4 h-4" /> Result: FAILED
                      </div>
                      <p className="text-danger-light leading-normal">
                         Rule yêu cầu: <span className="font-bold text-white">cost {"<="} 0.3 * total_value</span> (Tương đương 30%)
                      </p>
                      <p className="text-danger-light leading-normal mt-1">
                         Input object: <span className="text-yellow-300">$.phases[0].cost</span> = 45,000,000,000 
                         <br/>(Tương đương 45% của Total Value = 100,000,000,000)
                      </p>
                      <div className="mt-3 text-white font-bold bg-danger/30 inline-block px-2 py-1 rounded text-[10px] uppercase">
                        Condition Failed: 45,000,000,000 {">"} 30,000,000,000
                      </div>
                   </div>

                   <p className="text-slate-500 italic mt-4">{`— Quá trình kiểm tra kết thúc. Bạn có thể sửa input bên trái hoặc chỉnh sửa Rule logic.`}</p>
                </div>
             )}

           </div>

        </div>

      </div>
    </div>
  )
}
