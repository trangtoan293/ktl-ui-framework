import { useState } from "react"
import { 
  MessageSquare, Bell, Check, AlertTriangle, AlertCircle, Info, X,
  CheckCircle, XCircle, MousePointer, Upload, Maximize2, Square,
  Trash2, Maximize, Sparkles, Loader2, Monitor, Inbox, FolderOpen,
  SearchX, AlertOctagon, RefreshCw, Save, RotateCcw
} from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function FeedbackPage() {
  const [uploadProgress, setUploadProgress] = useState(65)

  // Custom Toast configurations matching the design system
  const showToast = (type: "success" | "error" | "warning" | "info") => {
    switch(type) {
      case "success":
        toast.custom((t) => (
          <div className="rounded-lg border border-success/30 bg-success/5 p-4 flex items-start gap-3 w-full shadow-lg backdrop-blur-md">
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shrink-0">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-900">Thành công</p>
              <p className="text-sm text-slate-600">Tài liệu đã được upload thành công.</p>
            </div>
            <button onClick={() => toast.dismiss(t)} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))
        break
      case "error":
        toast.custom((t) => (
          <div className="rounded-lg border border-danger/30 bg-danger/5 p-4 flex items-start gap-3 w-full shadow-lg backdrop-blur-md">
            <div className="w-8 h-8 bg-danger rounded-full flex items-center justify-center shrink-0">
              <AlertTriangle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-900">Lỗi</p>
              <p className="text-sm text-slate-600">Không thể kết nối đến server. Vui lòng thử lại.</p>
            </div>
            <button onClick={() => toast.dismiss(t)} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))
        break
      case "warning":
        toast.custom((t) => (
          <div className="rounded-lg border border-warning/30 bg-warning/5 p-4 flex items-start gap-3 w-full shadow-lg backdrop-blur-md">
            <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center shrink-0">
              <AlertCircle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-900">Cảnh báo</p>
              <p className="text-sm text-slate-600">File vượt quá kích thước giới hạn 50MB.</p>
            </div>
            <button onClick={() => toast.dismiss(t)} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))
        break
      case "info":
        toast.custom((t) => (
          <div className="rounded-lg border border-info/30 bg-info/5 p-4 flex items-start gap-3 w-full shadow-lg backdrop-blur-md">
            <div className="w-8 h-8 bg-info rounded-full flex items-center justify-center shrink-0">
              <Info className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-slate-900">Thông tin</p>
              <p className="text-sm text-slate-600">Phiên bản mới đã được cập nhật.</p>
            </div>
            <button onClick={() => toast.dismiss(t)} className="text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))
        break
    }
  }

  const showToastWithAction = () => {
    toast.custom((t) => (
      <div className="rounded-lg border border-primary-200 bg-primary-50 p-4 flex items-start gap-3 w-full shadow-lg backdrop-blur-md">
        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center shrink-0">
          <Save className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-slate-900">Tài liệu đã được lưu</p>
          <p className="text-sm text-slate-600">Bạn có muốn xem trước?</p>
          <div className="flex gap-2 mt-2">
            <Button size="sm" className="h-7 text-xs px-3">Xem</Button>
            <Button size="sm" variant="outline" className="h-7 text-xs px-3" onClick={() => toast.dismiss(t)}>Đóng</Button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Feedback Components</h1>
            <p className="text-xs text-slate-500">Toast, Modal, Loading States</p>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-16 pb-24">

        {/* TOAST NOTIFICATIONS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Toast Notifications</h2>
              <p className="text-sm text-slate-500">Non-blocking feedback messages</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            {/* Inline Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-lg border border-success/30 bg-success/5 p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Thành công</p>
                  <p className="text-sm text-slate-600">Tài liệu đã được upload thành công.</p>
                </div>
              </div>

              <div className="rounded-lg border border-danger/30 bg-danger/5 p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-danger rounded-full flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Lỗi</p>
                  <p className="text-sm text-slate-600">Không thể kết nối đến server. Vui lòng thử lại.</p>
                </div>
              </div>

              <div className="rounded-lg border border-warning/30 bg-warning/5 p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-warning rounded-full flex items-center justify-center shrink-0">
                  <AlertCircle className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Cảnh báo</p>
                  <p className="text-sm text-slate-600">File vượt quá kích thước giới hạn 50MB.</p>
                </div>
              </div>

              <div className="rounded-lg border border-info/30 bg-info/5 p-4 flex items-start gap-3">
                <div className="w-8 h-8 bg-info rounded-full flex items-center justify-center shrink-0">
                  <Info className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-slate-900">Thông tin</p>
                  <p className="text-sm text-slate-600">Phiên bản mới đã được cập nhật.</p>
                </div>
              </div>
            </div>

            {/* Triggers */}
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => showToast("success")} className="bg-success hover:bg-success-dark text-white shadow-none">
                <CheckCircle className="w-4 h-4 mr-2" /> Success
              </Button>
              <Button onClick={() => showToast("error")} className="bg-danger hover:bg-danger-dark text-white shadow-none">
                <XCircle className="w-4 h-4 mr-2" /> Error
              </Button>
              <Button onClick={() => showToast("warning")} className="bg-warning hover:bg-warning-dark text-white shadow-none">
                <AlertTriangle className="w-4 h-4 mr-2" /> Warning
              </Button>
              <Button onClick={() => showToast("info")} className="bg-info hover:bg-info-dark text-white shadow-none">
                <Info className="w-4 h-4 mr-2" /> Info
              </Button>
              <Button onClick={() => showToastWithAction()}>
                <MousePointer className="w-4 h-4 mr-2" /> With Action
              </Button>
            </div>

            {/* Custom Upload Progress */}
            <div className="mt-8 rounded-lg border border-slate-200 bg-white p-4 max-w-md">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                  <Upload className="w-4 h-4 text-primary-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <p className="font-medium text-slate-900 text-sm">Đang upload...</p>
                    <span className="text-sm text-primary-600 font-medium">{uploadProgress}%</span>
                  </div>
                  <Progress value={uploadProgress} className="h-2 bg-slate-100" />
                  <p className="text-xs text-slate-500 mt-2">Báo_cáo_Q1_2024.pdf • 2.4 MB</p>
                </div>
                <button className="text-slate-400 hover:text-danger ml-2"><X className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </section>

        {/* DIALOG & ALERT DIALOG */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Maximize2 className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Modal & Dialog</h2>
              <p className="text-sm text-slate-500">Overlay dialogs and confirmations</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 flex flex-wrap gap-4">
            
            <Dialog>
              <DialogTrigger asChild>
                <Button><Square className="w-4 h-4 mr-2" /> Simple Modal</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <Info className="w-5 h-5 text-primary-600" />
                  </div>
                  <div className="flex-1 pt-1">
                    <DialogTitle>Thông báo</DialogTitle>
                    <DialogDescription className="mt-1">
                      Tài liệu của bạn đã được lưu thành công. Bạn có muốn tiếp tục không?
                    </DialogDescription>
                  </div>
                </DialogHeader>
                <DialogFooter className="mt-4">
                  <Button variant="outline">Hủy</Button>
                  <Button>Tiếp tục</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-warning hover:bg-warning-dark text-white"><AlertTriangle className="w-4 h-4 mr-2" /> Confirm Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-10 h-10 bg-warning/10 rounded-full flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5 text-warning" />
                  </div>
                  <div className="flex-1 pt-1">
                    <AlertDialogTitle>Xác nhận</AlertDialogTitle>
                    <AlertDialogDescription>
                      Bạn có chắc chắn muốn thực hiện hành động này?
                    </AlertDialogDescription>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-4">
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction className="bg-warning hover:bg-warning-dark text-white focus:ring-warning">Xác nhận</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive"><Trash2 className="w-4 h-4 mr-2" /> Delete Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader className="flex flex-row items-start gap-4 space-y-0">
                  <div className="w-10 h-10 bg-danger/10 rounded-full flex items-center justify-center shrink-0">
                    <Trash2 className="w-5 h-5 text-danger" />
                  </div>
                  <div className="flex-1 pt-1">
                    <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                    <AlertDialogDescription>
                      Bạn có chắc chắn muốn xóa? Hành động này không thể hoàn tác.
                    </AlertDialogDescription>
                  </div>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-4">
                  <AlertDialogCancel>Hủy</AlertDialogCancel>
                  <AlertDialogAction className="bg-danger hover:bg-danger-dark focus:ring-danger text-white">Xóa</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="bg-slate-700 text-white hover:bg-slate-800"><Maximize className="w-4 h-4 mr-2" /> Large Modal</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px] h-[600px] flex flex-col">
                <DialogHeader>
                  <DialogTitle className="text-xl">Large Modal</DialogTitle>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto pr-2 my-4 text-sm text-slate-600">
                  <p className="mb-4">Nội dung modal rộng với nhiều thông tin chi tiết...</p>
                  <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 mb-4">Content area</div>
                  <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 mb-4">Content area</div>
                  <div className="h-48 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400">Content area</div>
                </div>
                <DialogFooter>
                  <Button variant="outline">Đóng</Button>
                  <Button>Lưu</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-ai-600 hover:bg-ai-700 text-white"><Sparkles className="w-4 h-4 mr-2" /> AI Modal</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px] border-ai-200">
                <DialogHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="w-10 h-10 bg-ai-100 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-ai-600" />
                  </div>
                  <div className="flex-1 pt-1">
                    <DialogTitle className="text-ai-900">AI Analysis</DialogTitle>
                    <DialogDescription className="text-ai-600/80">
                      GPT-4 is analyzing your document
                    </DialogDescription>
                  </div>
                </DialogHeader>
                <div className="py-6 flex flex-col items-center justify-center min-h-[150px] space-y-4">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 bg-ai-600 rounded-full animate-bounce"></div>
                    <div className="w-2.5 h-2.5 bg-ai-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2.5 h-2.5 bg-ai-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <p className="text-sm font-medium text-ai-700">Extracting key entities...</p>
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </section>

        {/* LOADING STATES */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Loading States</h2>
              <p className="text-sm text-slate-500">Skeleton, spinner, and progress indicators</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 mb-8 space-y-8">
            
            {/* Spinners */}
            <div>
              <h3 className="text-lg font-bold text-primary-900 mb-6">Spinners</h3>
              <div className="flex flex-wrap items-center gap-10">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-8 h-8 text-primary-600 animate-spin" />
                  <span className="text-xs text-slate-500">Default</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-12 h-12 text-primary-600 animate-spin" />
                  <span className="text-xs text-slate-500">Large</span>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-1 h-8 items-center">
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-primary-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                  <span className="text-xs text-slate-500">Dots</span>
                </div>
              </div>
            </div>

            {/* Skeletons */}
            <div className="pt-8 border-t border-slate-200">
              <h3 className="text-lg font-bold text-primary-900 mb-6">Skeleton Loading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-4">Card Skeleton</p>
                  <div className="bg-white rounded-lg border border-slate-200 p-5 space-y-4">
                    <div className="flex items-start gap-4">
                      <Skeleton className="w-12 h-12 rounded-lg" />
                      <div className="flex-1 space-y-2 py-1">
                        <Skeleton className="h-4 w-3/4 rounded" />
                        <Skeleton className="h-3 w-1/2 rounded" />
                      </div>
                    </div>
                    <div className="space-y-2 pt-2">
                      <Skeleton className="h-3 rounded" />
                      <Skeleton className="h-3 w-5/6 rounded" />
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-4">List Skeleton</p>
                  <div className="bg-white rounded-lg border border-slate-200 divide-y divide-slate-100">
                    {[1,2,3].map((i) => (
                      <div key={i} className="p-4 flex items-center gap-4">
                        <Skeleton className="w-10 h-10 rounded-full" />
                        <div className="flex-1 space-y-2 py-1">
                          <Skeleton className="h-3 w-1/3 rounded" />
                          <Skeleton className="h-2 w-1/4 rounded" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* FULL PAGE LOADING */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Full Page Loading</h2>
              <p className="text-sm text-slate-500">Page-level loading states</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px]">
              <Loader2 className="w-12 h-12 text-primary-600 animate-spin mb-4" />
              <p className="text-lg text-slate-700 font-medium">Đang tải...</p>
              <p className="text-sm text-slate-500">Vui lòng đợi trong giây lát</p>
            </div>

            <div className="border border-ai-200 rounded-xl p-8 flex flex-col items-center justify-center min-h-[200px] bg-ai-50/50">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-ai-600 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-ai-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-3 h-3 bg-ai-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
              <p className="text-lg text-ai-700 font-medium">AI đang xử lý...</p>
              <p className="text-sm text-ai-600">Phân tích tài liệu với GPT-4</p>
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
              <p className="text-sm text-slate-500">No data and error states</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="border border-slate-200 rounded-xl p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <FolderOpen className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Chưa có tài liệu</h3>
              <p className="text-sm text-slate-500 mb-4 whitespace-pre-wrap">Bạn chưa upload tài liệu nào.{"\n"}Hãy bắt đầu ngay!</p>
              <Button>Upload tài liệu</Button>
            </div>

            <div className="border border-slate-200 rounded-xl p-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <SearchX className="w-8 h-8 text-slate-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Không tìm thấy</h3>
              <p className="text-sm text-slate-500 mb-4">Không có kết quả phù hợp với từ khóa</p>
              <Button variant="outline"><RotateCcw className="w-4 h-4 mr-2" /> Xóa bộ lọc</Button>
            </div>

            <div className="border border-danger/20 rounded-xl p-8 text-center bg-danger/5 flex flex-col items-center">
              <div className="w-16 h-16 bg-danger/10 rounded-full flex items-center justify-center mb-4">
                <AlertOctagon className="w-8 h-8 text-danger" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Đã xảy ra lỗi</h3>
              <p className="text-sm text-slate-500 mb-4">Không thể tải dữ liệu. Vui lòng thử lại.</p>
              <Button variant="destructive"><RefreshCw className="w-4 h-4 mr-2" /> Thử lại</Button>
            </div>

          </div>
        </section>

      </div>
    </>
  )
}
