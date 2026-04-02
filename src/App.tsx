import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import FrameworkLayout from "@/layouts/FrameworkLayout"
import DashboardPage from "@/pages/framework/Dashboard"
import ComponentsPage from "@/pages/framework/Components"
import TypographyPage from "@/pages/framework/Typography"
import FormsPage from "@/pages/framework/Forms"
import DataDisplayPage from "@/pages/framework/DataDisplay"
import FeedbackPage from "@/pages/framework/Feedback"
import WorkspacePatternsPage from "@/pages/framework/WorkspacePatterns"
import Home from "@/pages/Home"
import StyleGuideLayout from "@/layouts/StyleGuideLayout"

// Layouts
import DocLayout from "@/layouts/DocLayout"
import CompareLayout from "@/layouts/CompareLayout"
import ReportLayout from "@/layouts/ReportLayout"
import AiOpsLayout from "@/layouts/AiOpsLayout"

// Stubs & Epics
import MakerUpload from "@/pages/framework/doc/MakerUpload"
import MakerRevision from "@/pages/framework/doc/MakerRevision"
import CheckerQueue from "@/pages/framework/doc/CheckerQueue"
import ManagerQueue from "@/pages/framework/doc/ManagerQueue"

import CompareWorkspace from "@/pages/framework/compare/CompareWorkspace"

import ReportBuilder from "@/pages/framework/report/ReportBuilder"
import ReportApproval from "@/pages/framework/report/ReportApproval"

import RuleLibrary from "@/pages/framework/ai-ops/RuleLibrary"
import RuleTest from "@/pages/framework/ai-ops/RuleTest"
import RuleApproval from "@/pages/framework/ai-ops/RuleApproval"
import FlowLibrary from "@/pages/framework/ai-ops/FlowLibrary"
import FlowTest from "@/pages/framework/ai-ops/FlowTest"
import CommonAiSuite from "@/pages/framework/ai-ops/CommonAiSuite"
import { Toaster } from "@/components/ui/sonner"

export default function App() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).lucide) {
      setTimeout(() => (window as any).lucide.createIcons(), 50)
    }
  }, [location])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<StyleGuideLayout />}>
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/data-display" element={<DataDisplayPage />} />
        </Route>

        <Route path="/app" element={<FrameworkLayout />}>
          {/* Default Route */}
          <Route index element={<DashboardPage />} />
          <Route path="workspace-patterns" element={<WorkspacePatternsPage />} />
          
          <Route path="doc" element={<DocLayout />}>
            <Route index element={<MakerUpload />} />
            <Route path="upload" element={<MakerUpload />} />
            <Route path="revision" element={<MakerRevision />} />
            <Route path="checker" element={<CheckerQueue />} />
            <Route path="manager" element={<ManagerQueue />} />
          </Route>

          <Route path="compare" element={<CompareLayout />}>
            <Route index element={<CompareWorkspace />} />
            {/* Minimal stubs for compare not yet created, leaving them blank for now if not needed, or redirecting to workspace */}
            <Route path="history" element={<CompareWorkspace />} />
            <Route path="results" element={<CompareWorkspace />} />
          </Route>

          <Route path="report" element={<ReportLayout />}>
            <Route index element={<ReportBuilder />} />
            <Route path="templates" element={<ReportBuilder />} />
            <Route path="approval" element={<ReportApproval />} />
          </Route>

          <Route path="ai-ops" element={<AiOpsLayout />}>
            <Route index element={<RuleLibrary />} />
            <Route path="rule-library" element={<RuleLibrary />} />
            <Route path="rule-test" element={<RuleTest />} />
            <Route path="flow-library" element={<FlowLibrary />} />
            <Route path="flow-test" element={<FlowTest />} />
            <Route path="approval" element={<RuleApproval />} />
            <Route path="common-ai" element={<CommonAiSuite />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
    </>
  )
}
