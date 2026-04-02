import { Link } from "react-router-dom"
import { ShieldCheck, Palette, Layout, Component, FormInput, MessageSquare, Table2, ArrowRight, LayoutTemplate } from "lucide-react"

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white py-16 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <ShieldCheck className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">K-Portal UI Framework</h1>
          <p className="text-lg text-primary-200 mb-8 max-w-2xl mx-auto">
            Framework UI mẫu đầy đủ các thành phần cho ứng dụng K-Portal - Audit Intelligence Platform
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">React + Vite</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Shadcn UI</span>
            <span className="px-3 py-1 bg-purple-500/50 rounded-full text-sm text-purple-50 border border-purple-400">AI Component Ready</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-8 py-16 w-full">
        
        {/* Application Templates */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-primary-900 mb-8 text-center flex items-center justify-center gap-2">
            <LayoutTemplate className="w-6 h-6" />
            Application Templates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link to="/app" className="group bg-white rounded-xl border border-primary-200 p-6 shadow-sm hover:shadow-lg hover:border-primary-400 transition-all flex items-start gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <Layout className="w-6 h-6 text-primary-600 group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">Institutional Layout</h3>
                <p className="text-sm text-slate-500 mb-3">Template Layout chính của dự án K-Portal bao gồm Sidebar phân cấp cấp vĩ mô / vi mô.</p>
                <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:underline">Xem Layout Demo <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </div>
        </section>

        {/* Framework Guide Files */}
        <section className="mb-16 border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center flex items-center justify-center gap-2">
            <Component className="w-6 h-6 text-slate-500" />
            UI Framework Library
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Typography & Colors */}
            <Link to="/typography" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Palette className="w-6 h-6 text-slate-600 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Typography & Colors</h3>
              <p className="text-sm text-slate-500">Style guide với color tokens, typography scale, và design tokens</p>
            </Link>

            {/* Components */}
            <Link to="/components" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Component className="w-6 h-6 text-slate-600 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Components</h3>
              <p className="text-sm text-slate-500">Button system, status badges, document cards, finding cards, KPI cards</p>
            </Link>

            {/* Forms */}
            <Link to="/forms" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <FormInput className="w-6 h-6 text-slate-600 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Forms</h3>
              <p className="text-sm text-slate-500">Input fields, select dropdowns, checkboxes, radios, file upload</p>
            </Link>

            {/* Feedback */}
            <Link to="/feedback" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <MessageSquare className="w-6 h-6 text-slate-600 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Feedback</h3>
              <p className="text-sm text-slate-500">Toast notifications, modals, loading states, skeletons, empty states</p>
            </Link>

            {/* Data Display */}
            <Link to="/data-display" className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
              <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <Table2 className="w-6 h-6 text-slate-600 group-hover:text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Data Display</h3>
              <p className="text-sm text-slate-500">Data tables, pagination, trust score gauge, progress indicators</p>
            </Link>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-slate-900">K-Portal</span>
          </div>
          <p className="text-sm text-slate-500">Audit Intelligence Platform • Developer UI Guide</p>
        </div>
      </footer>
    </div>
  )
}
