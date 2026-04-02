import { Brain, CheckCircle2 } from "lucide-react"

interface AIClassificationProps {
  label: string
  confidence: number
  processes: string[]
}

export function AIClassificationCard({ label, confidence, processes }: AIClassificationProps) {
  return (
    <div className="bg-gradient-to-r from-ai-50 to-white border border-ai-100 rounded-xl p-5 shadow-sm">
      <div className="flex items-center gap-2 mb-3">
        <Brain className="w-5 h-5 text-ai-600" />
        <h3 className="font-bold text-ai-900 text-sm">AI Classification</h3>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-slate-500 mb-1">Loại tài liệu nhận diện</p>
          <div className="flex items-center gap-2">
            <span className="inline-flex bg-ai-100 text-ai-700 px-2 py-0.5 rounded text-sm font-semibold border border-ai-200">
              {label}
            </span>
            <span className="text-xs text-ai-500 font-mono">{confidence}%</span>
          </div>
        </div>
        <div>
          <p className="text-xs text-slate-500 mb-1">Xử lý tự động</p>
          <div className="space-y-1">
            {processes.map((proc, idx) => (
              <div key={idx} className="flex items-center gap-1.5 text-sm text-slate-700 font-medium">
                <CheckCircle2 className="w-4 h-4 text-success" /> {proc}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
