import { Outlet, Link, useLocation } from "react-router-dom"
import { Palette, ArrowLeft, ArrowRight } from "lucide-react"

export default function StyleGuideLayout() {
  const location = useLocation()
  
  const getPageTitle = (path: string) => {
    if (path.includes("typography")) return "Typography & Colors"
    if (path.includes("components")) return "Components"
    if (path.includes("forms")) return "Forms"
    if (path.includes("feedback")) return "Feedback"
    if (path.includes("data-display")) return "Data Display"
    if (path.includes("workspace")) return "Workspace Patterns"
    return "UI Framework"
  }

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header className="bg-primary-900 text-white py-6 px-8 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <Palette className="w-8 h-8" />
              <div>
                <h1 className="text-2xl font-bold">{getPageTitle(location.pathname)}</h1>
                <p className="text-primary-200 text-sm">K-Portal Design System Style Guide</p>
              </div>
            </div>
          </div>
          <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <span className="text-sm">Trang chủ Framework</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full relative">
        <Outlet />
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t border-slate-200 py-8 px-8 mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">K-Portal Framework v1.0</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/app" className="text-sm text-primary-600 hover:text-primary-700 font-medium">App Template Layout</Link>
            <Link to="/typography" className="text-sm text-slate-600 hover:text-primary-700">Typography</Link>
            <Link to="/components" className="text-sm text-slate-600 hover:text-primary-700">Components</Link>
            <Link to="/forms" className="text-sm text-slate-600 hover:text-primary-700">Forms</Link>
            <Link to="/feedback" className="text-sm text-slate-600 hover:text-primary-700">Feedback</Link>
            <Link to="/data-display" className="text-sm text-slate-600 hover:text-primary-700">Data Display</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
