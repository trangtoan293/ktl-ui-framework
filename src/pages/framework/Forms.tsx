import { 
  FormInput, Type, User, CheckCircle, AlertCircle, AlertTriangle, Eye, Search,
  ListFilter, AlignLeft, CheckSquare, Upload, UploadCloud, FileText, FileSpreadsheet,
  FileX, X, Trash2, ToggleLeft, LayoutTemplate, Mail, Lock, Plus, ChevronRight
} from "lucide-react"

import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FormsPage() {
  return (
    <>
      <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8 shrink-0 sticky top-0 z-10 w-full">
        <div className="flex flex-col justify-center">
            <nav className="flex items-center gap-2 text-[11px] font-medium text-slate-500 mb-0.5" aria-label="Breadcrumb">
                <a href="#" className="hover:text-primary-600 transition-colors">UI Framework</a>
                <ChevronRight className="w-3 h-3 text-slate-400" />
                <span className="text-slate-800">Forms</span>
            </nav>
            <h1 className="text-lg font-bold text-slate-900 leading-tight">Input Components & Form Patterns</h1>
        </div>
      </header>

      <div className="p-8 max-w-7xl w-full mx-auto space-y-16 pb-24">

        {/* INPUT COMPONENTS */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Type className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Input Components</h2>
              <p className="text-sm text-slate-500">Text, password, number, date inputs</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Text Input */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Text Input (Default)</Label>
                  <Input placeholder="Nhập họ và tên" />
                  <p className="text-xs text-slate-500">Hỗ trợ tiếng Việt có dấu</p>
                </div>

                <div className="space-y-2">
                  <Label>Text Input with Icon</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input className="pl-9" placeholder="Nhập họ và tên" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Disabled Input</Label>
                  <Input disabled value="Giá trị cố định" />
                </div>

                <div className="space-y-2">
                  <Label>Read Only</Label>
                  <Input readOnly value="Không thể chỉnh sửa" className="bg-slate-50" />
                </div>
              </div>

              {/* States */}
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Success State</Label>
                  <div className="relative">
                    <Input defaultValue="toan.tran@gtel.com" className="pr-10 border-success focus-visible:ring-success" />
                    <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-success" />
                  </div>
                  <p className="text-xs text-success">Email hợp lệ</p>
                </div>

                <div className="space-y-2">
                  <Label>Error State</Label>
                  <div className="relative">
                    <Input defaultValue="invalid-email" className="pr-10 border-danger focus-visible:ring-danger" />
                    <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-danger" />
                  </div>
                  <p className="text-xs text-danger flex items-center gap-1">
                    <AlertTriangle className="w-3 h-3" />
                    Email không đúng định dạng
                  </p>
                </div>

                <div className="space-y-2">
                  <Label>Password Input</Label>
                  <div className="relative">
                    <Input type="password" defaultValue="password123" className="pr-10" />
                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Search Input</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input type="search" placeholder="Tìm kiếm tài liệu..." className="pl-9" />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] uppercase rounded border border-slate-200 hidden sm:block">⌘K</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Number & Date Inputs */}
            <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>Number Input</Label>
                <Input type="number" placeholder="0" min="0" max="100" />
              </div>

              <div className="space-y-2">
                <Label>Date Input</Label>
                <Input type="date" />
              </div>

              <div className="space-y-2">
                <Label>DateTime Input</Label>
                <Input type="datetime-local" />
              </div>
            </div>
          </div>
        </section>

        {/* SELECT / DROPDOWN */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <ListFilter className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Select & Dropdown</h2>
              <p className="text-sm text-slate-500">Single and multi-select components</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Basic Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn phòng ban" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="audit">Kiểm toán</SelectItem>
                      <SelectItem value="finance">Tài chính</SelectItem>
                      <SelectItem value="hr">Nhân sự</SelectItem>
                      <SelectItem value="it">IT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Grouped Select</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn tài liệu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Tài liệu</SelectLabel>
                        <SelectItem value="bctc">Báo cáo tài chính</SelectItem>
                        <SelectItem value="hd">Hợp đồng</SelectItem>
                        <SelectItem value="bb">Biên bản</SelectItem>
                      </SelectGroup>
                      <SelectGroup>
                        <SelectLabel>Rule Set</SelectLabel>
                        <SelectItem value="qdnb">Quy định nội bộ</SelectItem>
                        <SelectItem value="cs">Chính sách</SelectItem>
                        <SelectItem value="qt">Quy trình</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* TEXTAREA */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <AlignLeft className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Textarea</h2>
              <p className="text-sm text-slate-500">Multi-line text input</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label>Basic Textarea</Label>
                <Textarea placeholder="Nhập mô tả chi tiết..." className="min-h-[120px]" />
                <p className="text-xs text-slate-500">Tối đa 500 ký tự</p>
              </div>
            </div>
          </div>
        </section>

        {/* CHECKBOX & RADIO */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Checkbox & Radio</h2>
              <p className="text-sm text-slate-500">Selection controls</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Checkbox */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Checkbox</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="c1" defaultChecked />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="c1" className="text-sm font-medium leading-none text-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Đã chọn</label>
                    <p className="text-sm text-slate-500">Mô tả cho option này</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="c2" />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="c2" className="text-sm font-medium leading-none text-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Chưa chọn</label>
                    <p className="text-sm text-slate-500">Mô tả cho option này</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Checkbox id="c3" disabled />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="c3" className="text-sm font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</label>
                    <p className="text-sm text-slate-400">Không thể tương tác</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Radio */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">Radio Button</h3>
              <RadioGroup defaultValue="r1" className="space-y-4">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="r1" id="r1" />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r1" className="text-sm font-medium leading-none text-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Đã chọn</label>
                    <p className="text-sm text-slate-500">Mô tả cho option này</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="r2" id="r2" />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r2" className="text-sm font-medium leading-none text-slate-900 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Chưa chọn</label>
                    <p className="text-sm text-slate-500">Mô tả cho option này</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="r3" id="r3" disabled />
                  <div className="grid gap-1.5 leading-none">
                    <label htmlFor="r3" className="text-sm font-medium leading-none text-slate-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Disabled</label>
                    <p className="text-sm text-slate-400">Không thể tương tác</p>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </section>

        {/* TOGGLE SWITCH */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <ToggleLeft className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary-900">Toggle Switch</h2>
              <p className="text-sm text-slate-500">On/off state controls</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <div className="max-w-md space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thông báo email</Label>
                  <p className="text-sm text-slate-500">Nhận thông báo qua email</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Chế độ tối</Label>
                  <p className="text-sm text-slate-500">Giao diện tối cho hệ thống</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-slate-400">Tự động lưu</Label>
                  <p className="text-sm text-slate-400">Không thể tắt</p>
                </div>
                <Switch defaultChecked disabled />
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}
