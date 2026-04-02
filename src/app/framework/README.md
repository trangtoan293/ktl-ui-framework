# K-Portal UI Framework

Framework UI mẫu cho toàn bộ ứng dụng K-Portal - Audit Intelligence Platform.

## Files Structure

```
framework/
├── README.md                    # Documentation này
├── typography-colors.html       # Style guide cho typography và colors
├── layout-framework.html        # Layout với sidebar và navigation
├── components-framework.html    # Button, Badge, Card components
├── forms-framework.html         # Form components
├── feedback-framework.html      # Toast, Modal, Loading states
└── data-display-framework.html  # Tables, Pagination, Gauge
```

## Quick Start

Mở các file HTML trong browser để xem demo:

```bash
# Ví dụ mở với VS Code Live Server
# Hoặc mở trực tiếp trong browser
open typography-colors.html
```

## Design System

### Colors

Hệ thống màu được map trực tiếp vào `tailwind.config.js` để đảm bảo tính đồng nhất.

**Brand Colors (Primary):**
Được sử dụng cho các thành phần chính, sidebar, và nhận diện thương hiệu.
- `primary-900`: `#0C2340` (Text Headings, High Contrast)
- `primary-800`: `#153666` (Sidebar background)
- `primary-700`: `#1E4D8C` (Sidebar hover, Active states)
- `primary-600`: `#2563B0` (Primary button, Call to Action)
- `primary-500`: `#3B82D4` (Links, Focus Rings)
- `primary-100`: `#DBEAFE` (Selected/Active tab backgrounds)
- `primary-50`: `#EFF6FF` (Subtle highlight, Table rows hover)

**Semantic Colors (Trạng thái):**
- **Success**: `success-600` (`#16A34A`), Bg: `success-50` (`#F0FDF4`)
- **Warning**: `warning-600` (`#D97706`), Bg: `warning-50` (`#FFFBEB`)
- **Danger**: `danger-600` (`#DC2626`), Bg: `danger-50` (`#FEF2F2`)
- **Info**: `info-600` (`#2563EB`), Bg: `info-50` (`#EFF6FF`)

**AI Colors (Trí tuệ nhân tạo):**
Dành riêng cho các tính năng liên quan đến AI (Gợi ý, Phân tích, Insights).
- `ai-600`: `#7C3AED` (AI Button, AI Icons)
- `ai-100`: `#EDE9FE` (AI Highlights)
- Khuyến khích sử dụng Gradient để nhấn mạnh AI: `bg-gradient-to-r from-ai-600 to-indigo-500`

### Typography

- **Font Family:** Be Vietnam Pro (Vietnamese content)
- **Monospace:** JetBrains Mono

**Type Scale:**
- Display Large: 48px/56px, weight 700
- H1: 36px/44px, weight 700
- H2: 28px/36px, weight 600
- H3: 22px/28px, weight 600
- Body Large: 16px/24px
- Body Medium: 14px/20px
- Body Small: 12px/18px

### Layout Grid

- Container max-width: 1440px
- Content max-width: 1200px
- Sidebar expanded: 240px
- Sidebar collapsed: 72px
- Gutter: 24px

### Border Radius

- sm: 4px
- md: 8px
- lg: 12px
- xl: 16px
- full: 9999px

## Components Overview

### 1. Button System
- Variants: primary, secondary, danger, ghost, ai
- Sizes: sm, md, lg, xl
- States: default, hover, focus, active, disabled, loading

### 2. Status Badge System
- Variants: draft, pending, approved, rejected, processing, revision, published, archived
- Dot indicator + label

### 3. Card Components
- Document Card
- Finding Card (severity: critical/warning/info)
- KPI Stat Card
- AI Suggestion Card

### 4. Form Components
- Input (text, password, number, date)
- Select/Dropdown
- Textarea
- Checkbox, Radio
- File Upload Zone (Dropzone)
- Toggle Switch

### 5. Navigation Components
- Sidebar (expanded/collapsed states)
- Top Navigation Bar
- Breadcrumb
- Tabs (horizontal, vertical, pill)

### 6. Feedback Components
- Toast Notifications (success/error/warning/info)
- Modal/Dialog (simple, confirm, delete, large, AI)
- Confirm Dialog
- Loading States (skeleton, spinner, progress)
- Empty States

### 7. Data Display
- Data Table (sortable, selectable)
- Pagination (simple, compact, with info)
- Trust Score Gauge (semicircle, 0-100)
- Circular Progress
- Empty States

### 8. Layout Components
- Page Layout (Sidebar + Main Content)
- Split Pane
- Panel/Card Container

## Dependencies

- **Tailwind CSS:** Utility-first CSS framework
- **Lucide Icons:** Icon library (https://unpkg.com/lucide@latest)
- **Google Fonts:** Be Vietnam Pro, JetBrains Mono

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Navigation Structure

```
K-Portal
├── Trang chủ (Dashboard)
├── Tài liệu
│   ├── Kho tài liệu
│   ├── Upload mới
│   ├── Chờ tôi duyệt
│   └── Tài liệu của tôi
├── Rule Set
│   ├── Thư viện Rule Set
│   ├── Tạo Rule Set mới
│   └── Chờ tôi duyệt
├── Workspace
│   ├── Workspace của tôi
│   └── Tạo Workspace mới
├── Báo cáo
│   ├── Báo cáo của tôi
│   ├── Chờ tôi duyệt
│   └── Đã ban hành
├── KPI & Hiệu suất
├── AI Admin (SYSTEM_ADMIN only)
│   ├── Quản lý Mô hình
│   ├── RAG Pipeline
│   ├── Thư viện Prompt
│   └── Monitoring Chất lượng
└── Hệ thống (SYSTEM_ADMIN only)
    ├── Người dùng & Quyền
    ├── Nhật ký Kiểm toán
    ├── Backup & Restore
    └── Cài đặt Bảo mật
```

## Usage Guidelines

### 1. Best Practices với Tailwind CSS

Khi viết components, bạn **BẮT BUỘC** phải bao gồm đầy đủ **Interactive States** (hover, focus, active/press) và **Accessibility** (a11y) để đạt chuẩn Enterprise cao cấp.

```html
<!-- Primary Button chuẩn (Có Focus Ring, Transition và Active state) -->
<button 
  aria-label="Thêm tài liệu mới"
  class="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 transition-all duration-200 active:scale-[0.98]">
  <i data-lucide="plus" class="w-4 h-4"></i>
  Thêm mới
</button>

<!-- Status Badge chuẩn (Có Accessibility Role và Animation) -->
<div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-50 text-success-700 border border-success-200" role="status">
  <span class="w-1.5 h-1.5 rounded-full bg-success-600 animate-pulse"></span>
  Đã duyệt
</div>
```

### 2. Animations & Micro-interactions

Để UI chân thực và "Premium", hệ thống quy định:
- **Hover & Focus:** Luôn kèm `transition-all duration-200 ease-in-out`.
- **Modals/Dropdowns:** Phải có hiệu ứng bay vào/lên (`animate-in fade-in zoom-in-95`).
- **AI Processing:** Sử dụng class `animate-pulse` trên icon hoặc loading shimmers để thể hiện mô hình đang chạy.

### 3. Responsive Design

K-Portal phục vụ môi trường văn phòng/công sở, do đó thiết kế ưu tiên màn hình Desktop lớn, nhưng vẫn đảm bảo hiển thị tốt trên Mobile/Tablet:
- **Mobile (sm):** `< 640px` (Hide sidebar, thay bằng hamburger menu)
- **Tablet (md-lg):** `640px - 1024px` (Thu gọn sidebar dạng icon 72px)
- **Desktop (xl):** `1024px - 1440px` (Default)
- **Large Desktop (2xl):** `> 1440px` (Hiển thị max-width container, cân bằng layout)

### 4. Dark Mode Support

Colors đã tính toán cho khả năng chuyển hóa Dark Mode:
- Dùng CSS Variables kết hợp Tailwind (`bg-primary-600` mapping tới Hex tùy theo theme/class `dark:`).
- Tuyệt đối hạn chế hardcode (VD: `text-[#333]`), hãy dùng `text-gray-800` để scale động dễ dàng.

## Contributing

Khi thêm component mới:
1. Tuân thủ design system (colors, typography, spacing)
2. Đảm bảo responsive
3. Thêm interactive states (hover, focus, disabled)
4. Test trên các browsers khác nhau

## License

Internal use only - K-Portal Project
