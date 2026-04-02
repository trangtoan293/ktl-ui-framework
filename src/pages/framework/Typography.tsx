import { Type, Droplet, CheckCircle2, Sparkles, Square, Layers, Code2, ChevronRight, Palette } from "lucide-react"

export default function TypographyPage() {
  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-0.5" aria-label="Breadcrumb">
                <a href="#" className="hover:text-primary-600 transition-colors">UI Framework</a>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-800">Typography & Colors</span>
            </nav>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Typography & Colors Style Guide</h1>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-16 pb-24">
        
        {/* Typography Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Type className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-primary-900">Typography</h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-8">
            {/* Display */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg">
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Display Large</p>
              <p className="text-5xl font-bold text-primary-900 mb-2 leading-[56px]">Display Large 48/56</p>
              <p className="text-xs text-slate-400">Font: Be Vietnam Pro | Weight: 700 | Line-height: 56px</p>
            </div>

            {/* Headings */}
            <div className="space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Heading 1</p>
                <h1 className="text-4xl font-bold text-primary-900 mb-1 leading-[44px]">Heading 1 - 36/44</h1>
                <p className="text-xs text-slate-400">Font: Be Vietnam Pro | Weight: 700 | Line-height: 44px</p>
              </div>
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Heading 2</p>
                <h2 className="text-3xl font-semibold text-primary-900 mb-1 leading-[36px]">Heading 2 - 28/36</h2>
                <p className="text-xs text-slate-400">Font: Be Vietnam Pro | Weight: 600 | Line-height: 36px</p>
              </div>
              <div className="border-b border-slate-200 pb-4">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Heading 3</p>
                <h3 className="text-[22px] font-semibold text-primary-900 mb-1 leading-[28px]">Heading 3 - 22/28</h3>
                <p className="text-xs text-slate-400">Font: Be Vietnam Pro | Weight: 600 | Line-height: 28px</p>
              </div>
            </div>

            {/* Body Text */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Body Large</p>
                <p className="text-base text-slate-700 mb-2">16/24 - Be Vietnam Pro Regular</p>
                <p className="text-xs text-slate-400">Dùng cho nội dung chính</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Body Medium</p>
                <p className="text-sm text-slate-700 mb-2">14/20 - Be Vietnam Pro Regular</p>
                <p className="text-xs text-slate-400">Dùng cho nội dung phụ</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="text-xs text-slate-500 mb-2 uppercase tracking-wide">Body Small</p>
                <p className="text-xs text-slate-700 mb-2">12/18 - Be Vietnam Pro Regular</p>
                <p className="text-xs text-slate-400">Dùng cho caption, meta</p>
              </div>
            </div>

            {/* Monospace */}
            <div className="bg-[#0C2340] text-slate-200 p-6 rounded-lg">
              <p className="text-xs text-primary-300 mb-2 uppercase tracking-wide">Monospace (JetBrains Mono)</p>
              <code className="font-mono text-sm">const kPortal = new Framework();</code>
              <p className="text-xs text-slate-400 mt-2">Dùng cho code, ID, timestamps</p>
            </div>
          </div>
        </section>

        {/* Brand Colors Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Droplet className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-semibold text-primary-900">Brand Colors</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <ColorSwatch name="Primary 900" hex="#0C2340" colorClass="bg-primary-900" desc="Headings" />
            <ColorSwatch name="Primary 800" hex="#153666" colorClass="bg-primary-800" desc="Sidebar bg" />
            <ColorSwatch name="Primary 700" hex="#1E4D8C" colorClass="bg-primary-700" desc="Sidebar hover" />
            <ColorSwatch name="Primary 600" hex="#2563B0" colorClass="bg-primary-600" desc="Primary button" />
            <ColorSwatch name="Primary 500" hex="#3B82D4" colorClass="bg-primary-500" desc="Links, focus" />
            <ColorSwatch name="Primary 100" hex="#DBEAFE" colorClass="bg-primary-100 border border-slate-200" desc="Light BG" />
            <ColorSwatch name="Primary 50" hex="#EFF6FF" colorClass="bg-primary-50 border border-slate-200" desc="Subtle highlight" />
          </div>
        </section>

        {/* Semantic Colors Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="w-6 h-6 text-success" />
            <h2 className="text-2xl font-semibold text-primary-900">Semantic Colors</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SemanticSwatch name="Success" hex="#22C55E" colorClass="bg-success text-white" />
            <SemanticSwatch name="Warning" hex="#F59E0B" colorClass="bg-warning text-white" />
            <SemanticSwatch name="Danger" hex="#EF4444" colorClass="bg-danger text-white" />
            <SemanticSwatch name="Info" hex="#3B82F6" colorClass="bg-info text-white" />
          </div>
        </section>

        {/* AI Colors Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-6 h-6 text-ai-600" />
            <h2 className="text-2xl font-semibold text-primary-900">AI Colors</h2>
          </div>

          <div className="bg-gradient-to-r from-ai-100 to-white rounded-xl p-8 border border-ai-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <ColorSwatch name="AI 600" hex="#7C3AED" colorClass="bg-ai-600" desc="AI elements" />
              <ColorSwatch name="AI 500" hex="#8B5CF6" colorClass="bg-ai-500" desc="Buttons" />
              <ColorSwatch name="AI 400" hex="#A78BFA" colorClass="bg-ai-400" desc="Hover states" />
              <ColorSwatch name="AI 100" hex="#EDE9FE" colorClass="bg-ai-100 border border-slate-200" desc="AI backgrounds" />
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

function ColorSwatch({ name, hex, desc, colorClass }: { name: string, hex: string, desc: string, colorClass: string }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:scale-[1.02] transition-transform">
      <div className={`h-24 ${colorClass}`}></div>
      <div className="p-4">
        <p className="font-semibold text-slate-900 text-sm">{name}</p>
        <code className="text-xs text-slate-500 font-mono">{hex}</code>
        <p className="text-xs text-slate-400 mt-1">{desc}</p>
      </div>
    </div>
  )
}

function SemanticSwatch({ name, hex, colorClass }: { name: string, hex: string, colorClass: string }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
          <Palette className="w-6 h-6" />
        </div>
        <div>
          <p className="font-semibold text-slate-900">{name}</p>
          <code className="text-xs text-slate-500 font-mono">{hex}</code>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-xs text-slate-500">Default + Light bg used across system</p>
      </div>
    </div>
  )
}
