import { cva, type VariantProps } from "class-variance-authority"
import { AlertCircle, CheckCircle2, FileX, Sparkles } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const findingVariants = cva(
  "w-full mb-3 border rounded-lg overflow-hidden transition-colors",
  {
    variants: {
      status: {
        match: "border-success/20 bg-success/5",
        mismatch: "border-warning/30 bg-warning/5",
        missing: "border-danger/30 bg-danger/5",
        info: "border-info/20 bg-info/5",
      },
    },
    defaultVariants: {
      status: "match",
    },
  }
)

const badgeVariants = cva("font-semibold", {
  variants: {
    status: {
      match: "bg-success text-white hover:bg-success",
      mismatch: "bg-warning text-white hover:bg-warning",
      missing: "bg-danger text-white hover:bg-danger",
      info: "bg-info text-white hover:bg-info",
    },
  },
})

interface FindingProps extends VariantProps<typeof findingVariants> {
  id: string
  title: string
  statusLabel: string
  confidence?: number
  items: { label: string; document: string; value: string; isError?: boolean }[]
  suggestedFix?: string
}

export function AIFindingAccordion({
  findings
}: {
  findings: FindingProps[]
}) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {findings.map((f) => {
        let Icon = CheckCircle2
        if (f.status === "mismatch") Icon = AlertCircle
        if (f.status === "missing") Icon = FileX
        if (f.status === "info") Icon = Sparkles

        return (
          <AccordionItem key={f.id} value={f.id} className={cn(findingVariants({ status: f.status }), "border-b-0 px-2")}>
            <AccordionTrigger className="hover:no-underline px-2 py-3">
              <div className="flex items-center gap-3 w-full text-left">
                <div className="shrink-0 flex items-center justify-center">
                  <Icon className={cn(
                    "w-5 h-5",
                    f.status === "match" ? "text-success" : 
                    f.status === "mismatch" ? "text-warning" : 
                    f.status === "missing" ? "text-danger" : "text-info"
                  )} />
                </div>
                <div className="flex-1 font-semibold text-slate-800 text-sm">
                  {f.title}
                </div>
                <div className="flex items-center gap-3 mr-2">
                  {f.confidence && (
                    <span className="text-xs font-mono text-slate-500">{f.confidence}%</span>
                  )}
                  <Badge variant="secondary" className={badgeVariants({ status: f.status })}>
                    {f.statusLabel}
                  </Badge>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-2 pb-4">
              <div className="space-y-3 pt-2">
                <div className="grid grid-cols-2 gap-4">
                  {f.items.map((item, idx) => (
                    <div key={idx} className={cn(
                      "p-3 rounded-lg border bg-white",
                      item.isError ? "border-danger/30 ring-1 ring-danger/10" : "border-slate-200"
                    )}>
                      <div className="text-xs text-slate-500 mb-1.5 flex justify-between">
                        <span>{item.label}</span>
                        <span className="font-medium text-slate-700">{item.document}</span>
                      </div>
                      <div className={cn(
                        "text-sm font-medium",
                        item.isError ? "text-danger" : "text-slate-900"
                      )}>{item.value || <span className="text-slate-400 italic">Không có dữ liệu</span>}</div>
                    </div>
                  ))}
                </div>
                
                {f.suggestedFix && (
                  <div className="mt-3 flex items-start gap-2 p-3 bg-ai-50 border border-ai-100 rounded-lg">
                    <Sparkles className="w-4 h-4 text-ai-600 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-ai-800 mb-0.5">Đề xuất của AI</p>
                      <p className="text-sm text-ai-700">{f.suggestedFix}</p>
                    </div>
                  </div>
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        )
      })}
    </Accordion>
  )
}
