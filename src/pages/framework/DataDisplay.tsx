import { 
  Table as TableIcon, Search, Filter, Plus, Download, ChevronsUpDown,
  FileText, Eye, Pencil, Trash2, FileSpreadsheet, Sparkles, RefreshCw,
  FileCode, FileArchive, Archive, ArchiveRestore, Gauge, CheckCircle,
  AlertCircle, AlertTriangle, Inbox, FolderOpen, SearchX, ChevronLeft,
  ChevronsLeft, ChevronRight, ChevronsRight, LayoutList, ChevronRight as BreadcrumbRight
} from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function DataDisplayPage() {
  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-0.5" aria-label="Breadcrumb">
                <a href="#" className="hover:text-primary-600 transition-colors">UI Framework</a>
                <BreadcrumbRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-800">Data Display</span>
            </nav>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Tables, Pagination & Trust Score Gauge</h1>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-16 pb-24">

        {/* DATA TABLE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <TableIcon className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Data Table</h2>
              <p className="text-sm text-slate-500">Sortable, filterable data tables</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            {/* Table Header with Actions */}
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input placeholder="Tìm kiếm tài liệu..." className="pl-9 w-64" />
                </div>
                <Button variant="outline" className="text-slate-700">
                  <Filter className="w-4 h-4 mr-2" /> Lọc
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button>
                  <Plus className="w-4 h-4 mr-2" /> Thêm mới
                </Button>
                <Button variant="outline" size="icon">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50 text-slate-700">
                  <TableRow>
                    <TableHead className="w-12"><Checkbox /></TableHead>
                    <TableHead className="cursor-pointer hover:text-primary-600">Tài liệu <ChevronsUpDown className="w-4 h-4 inline-block ml-1 text-slate-400" /></TableHead>
                    <TableHead className="cursor-pointer hover:text-primary-600">Loại <ChevronsUpDown className="w-4 h-4 inline-block ml-1 text-slate-400" /></TableHead>
                    <TableHead className="cursor-pointer hover:text-primary-600">Trạng thái <ChevronsUpDown className="w-4 h-4 inline-block ml-1 text-slate-400" /></TableHead>
                    <TableHead className="cursor-pointer hover:text-primary-600">Người tạo <ChevronsUpDown className="w-4 h-4 inline-block ml-1 text-slate-400" /></TableHead>
                    <TableHead className="cursor-pointer hover:text-primary-600">Ngày tạo <ChevronsUpDown className="w-4 h-4 inline-block ml-1 text-slate-400" /></TableHead>
                    <TableHead className="text-right">Thao tác</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {/* Row 1 */}
                  <TableRow className="hover:bg-slate-50 cursor-pointer">
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-danger/10 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-danger" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Báo cáo tài chính Q1/2024</p>
                          <p className="text-xs text-slate-500">PDF • 2.4 MB</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><span className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Báo cáo</span></TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/20 text-success-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                        Đã duyệt
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-primary-200 rounded-full flex items-center justify-center text-xs font-semibold text-primary-700">TT</div>
                        <span className="text-sm text-slate-700">Trần Toàn</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">15/03/2024</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-slate-500">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Download className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-danger"><Trash2 className="w-4 h-4 text-danger" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  {/* Row 2 */}
                  <TableRow className="hover:bg-slate-50 cursor-pointer">
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                          <FileSpreadsheet className="w-5 h-5 text-success" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Dữ liệu kiểm toán 2024</p>
                          <p className="text-xs text-slate-500">XLSX • 856 KB</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><span className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">Dữ liệu</span></TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/20 text-warning-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-warning"></span>
                        Chờ duyệt
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-warning-200 rounded-full flex items-center justify-center text-xs font-semibold text-warning-700">LN</div>
                        <span className="text-sm text-slate-700">Lê Nam</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">14/03/2024</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-slate-500">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Pencil className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Download className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-danger"><Trash2 className="w-4 h-4 text-danger" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  {/* Row 3 - AI */}
                  <TableRow className="hover:bg-slate-50 cursor-pointer">
                    <TableCell><Checkbox /></TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-ai-100 rounded-lg flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-ai-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">Phân tích AI - Báo cáo rủi ro</p>
                          <p className="text-xs text-slate-500">AI Report • Generated</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><span className="inline-flex items-center px-2 py-1 bg-ai-100 text-ai-700 rounded text-xs">AI</span></TableCell>
                    <TableCell>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-info/20 text-info-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-info relative">
                          <span className="absolute inset-0 rounded-full bg-info animate-ping"></span>
                        </span>
                        Đang xử lý
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-ai-200 rounded-full flex items-center justify-center text-xs font-semibold text-ai-700">AI</div>
                        <span className="text-sm text-slate-700">GPT-4</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-slate-600">14/03/2024</TableCell>
                    <TableCell className="text-right">
                      <div className="flex items-center justify-end gap-1 text-slate-500">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-slate-900"><Eye className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-ai-600 hover:text-ai-700 hover:bg-ai-50"><RefreshCw className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-danger"><Trash2 className="w-4 h-4 text-danger" /></Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            {/* Pagination block */}
            <div className="p-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <span>Hiển thị</span>
                <select className="border border-slate-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>10</option>
                  <option>20</option>
                  <option>50</option>
                </select>
                <span>của 256 kết quả</span>
              </div>
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" disabled className="w-8 h-8"><ChevronsLeft className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" disabled className="w-8 h-8"><ChevronLeft className="w-4 h-4" /></Button>
                <Button variant="default" className="w-8 h-8 p-0">1</Button>
                <Button variant="ghost" className="w-8 h-8 p-0">2</Button>
                <Button variant="ghost" className="w-8 h-8 p-0">3</Button>
                <span className="px-2 text-slate-400">...</span>
                <Button variant="ghost" className="w-8 h-8 p-0">26</Button>
                <Button variant="ghost" size="icon" className="w-8 h-8"><ChevronRight className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="w-8 h-8"><ChevronsRight className="w-4 h-4" /></Button>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST SCORE GAUGE */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Gauge className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Trust Score Gauge</h2>
              <p className="text-sm text-slate-500">Semicircle gauge for confidence scores (0-100)</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* High Trust */}
              <div className="text-center group">
                <div className="relative w-48 mx-auto mb-2">
                  <svg viewBox="0 0 200 110" className="w-full h-auto overflow-visible">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#22C55E" strokeWidth="16" strokeLinecap="round" 
                          className="drop-shadow-md transition-all duration-1000 ease-out" 
                          strokeDasharray="251.2" strokeDashoffset="15.07"/>
                    <circle cx="100" cy="100" r="3" fill="#cbd5e1" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                    <div className="text-4xl font-bold text-slate-800 leading-none group-hover:scale-110 transition-transform">94<span className="text-xl text-slate-400 font-medium ml-0.5">%</span></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-500 mb-3">High Trust</div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/10 text-success-dark rounded-full text-sm font-medium border border-success/20">
                  <CheckCircle className="w-4 h-4" /> Độ tin cậy tuyệt đối
                </div>
              </div>

              {/* Medium Trust */}
              <div className="text-center group">
                <div className="relative w-48 mx-auto mb-2">
                  <svg viewBox="0 0 200 110" className="w-full h-auto overflow-visible">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#F59E0B" strokeWidth="16" strokeLinecap="round" 
                          className="drop-shadow-md transition-all duration-1000 ease-out" 
                          strokeDasharray="251.2" strokeDashoffset="87.92"/>
                    <circle cx="100" cy="100" r="3" fill="#cbd5e1" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                    <div className="text-4xl font-bold text-slate-800 leading-none group-hover:scale-110 transition-transform">65<span className="text-xl text-slate-400 font-medium ml-0.5">%</span></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-500 mb-3">Medium Trust</div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-warning/10 text-warning-dark rounded-full text-sm font-medium border border-warning/20">
                  <AlertCircle className="w-4 h-4" /> Mức độ bình thường
                </div>
              </div>

              {/* Low Trust */}
              <div className="text-center group">
                <div className="relative w-48 mx-auto mb-2">
                  <svg viewBox="0 0 200 110" className="w-full h-auto overflow-visible">
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#e2e8f0" strokeWidth="16" strokeLinecap="round"/>
                    <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#EF4444" strokeWidth="16" strokeLinecap="round" 
                          className="drop-shadow-md transition-all duration-1000 ease-out" 
                          strokeDasharray="251.2" strokeDashoffset="180.86"/>
                    <circle cx="100" cy="100" r="3" fill="#cbd5e1" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end pb-4">
                    <div className="text-4xl font-bold text-slate-800 leading-none group-hover:scale-110 transition-transform">28<span className="text-xl text-slate-400 font-medium ml-0.5">%</span></div>
                  </div>
                </div>
                <div className="text-sm font-medium text-slate-500 mb-3">Low Trust</div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-danger/10 text-danger-dark rounded-full text-sm font-medium border border-danger/20">
                  <AlertTriangle className="w-4 h-4" /> Rủi ro rất cao
                </div>
              </div>
            </div>

            {/* Circular Progress */}
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-primary-900 mb-6 text-center">Circular Progress</h3>
              <div className="flex flex-wrap justify-center gap-12">
                <CircularProgress value={94} color="#22C55E" label="Accuracy" />
                <CircularProgress value={70} color="#3B82F6" label="Complete" />
                <CircularProgress value={30} color="#7C3AED" label="AI Process" valueClass="text-ai-600" labelClass="text-ai-500" />
              </div>
            </div>
          </div>
        </section>

        {/* EMPTY STATES */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Inbox className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Empty States</h2>
              <p className="text-sm text-slate-500">No data and initial states</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <FolderOpen className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Chưa có tài liệu</h3>
              <p className="text-sm text-slate-500 mb-4 whitespace-pre-wrap">Bạn chưa upload tài liệu nào.{"\n"}Hãy bắt đầu ngay!</p>
              <Button>
                <Plus className="w-4 h-4 mr-2" /> Upload tài liệu
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Không tìm thấy</h3>
              <p className="text-sm text-slate-500 mb-4">Không có kết quả phù hợp với từ khóa tìm kiếm</p>
              <Button variant="outline">
                <RefreshCw className="w-4 h-4 mr-2" /> Xóa bộ lọc
              </Button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-ai-100 rounded-full flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 text-ai-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Tạo Workspace đầu tiên</h3>
              <p className="text-sm text-slate-500 mb-4 whitespace-pre-wrap">Bắt đầu bằng cách tạo workspace{"\n"}để phân tích tài liệu với AI</p>
              <Button className="bg-ai-600 hover:bg-ai-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Tạo Workspace
              </Button>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

function CircularProgress({ value, color, label, valueClass = "text-slate-900", labelClass = "text-slate-500" }: { value: number, color: string, label: string, valueClass?: string, labelClass?: string }) {
  const dasharray = 283;
  const dashoffset = dasharray - (dasharray * value) / 100;
  
  return (
    <div className="relative w-32 h-32">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
        <circle cx="50" cy="50" r="45" fill="none" stroke={color} strokeWidth="8" strokeLinecap="round"
          strokeDasharray={dasharray} strokeDashoffset={dashoffset} className="transition-all duration-1000 ease-out"/>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`text-2xl font-bold ${valueClass}`}>{value}%</span>
        <span className={`text-xs ${labelClass}`}>{label}</span>
      </div>
    </div>
  )
}
