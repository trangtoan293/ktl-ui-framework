Tôi sẽ viết đầy đủ Feature Specification và User Flows chi tiết cho toàn bộ hệ thống. Đây là tài liệu thiết kế UI/UX cấp enterprise.
---
🏛️ K-PORTAL — AI Document Intelligence Platform
Feature Specification & User Flow Documentation
Version 1.0 | UI/UX Design Document
---
1. TỔNG QUAN HỆ THỐNG
1.1 Định nghĩa Ứng dụng
K-Portal là nền tảng AI on-premise dành cho kiểm tra, kiểm toán và phân tích tài liệu nội bộ. Hệ thống hỗ trợ tự động hóa quy trình đọc – đối chiếu – tổng hợp – sinh báo cáo từ nhiều nguồn tài liệu phức tạp, hoạt động hoàn toàn trong mạng nội bộ (intranet), không kết nối internet.
1.2 User Roles & Personas
Mô tả
Quản lý model, RAG pipeline, prompt library
Bảo mật, hạ tầng, AD/LDAP, backup
Upload, nhập liệu, gán metadata tài liệu
Phê duyệt/từ chối tài liệu từ Maker
Sử dụng AI để phân tích, đối chiếu, tạo báo cáo
Xem tổng quan, KPI, phê duyệt báo cáo cuối
---
## 2. FEATURE LIST CHI TIẾT THEO EPIC
---
📄 EPIC A — OCR & Tài liệu Đa định dạng
A.1 — Multi-format Document Ingestion
ID	Feature	Mô tả
A1.1	Upload đa định dạng	Hỗ trợ PDF, DOCX, XLSX, PNG, JPG, TIFF, scan
A1.2	Batch upload	Upload nhiều file cùng lúc (drag & drop, folder)
A1.3	Upload queue & progress	Hiển thị tiến trình xử lý từng file
A1.4	Preview trước xử lý	Xem trước file ngay sau upload
A1.5	Re-upload / Replace	Thay thế phiên bản cũ, giữ lịch sử
A.2 — OCR Engine
ID	Feature	Mô tả
A2.1	OCR tiếng Việt	Nhận diện văn bản tiếng Việt có dấu
A2.2	OCR tiếng Anh	Nhận diện văn bản tiếng Anh
A2.3	OCR song ngữ	Phân biệt và xử lý tài liệu có cả 2 ngôn ngữ
A2.4	OCR bảng biểu	Nhận diện và giữ nguyên cấu trúc bảng
A2.5	OCR biểu mẫu	Nhận diện label – value trong form
A2.6	Noise cleaning	Xử lý nhiễu scan, chữ mờ, nền xám
A2.7	Confidence score	Hiển thị độ chính xác OCR từng đoạn
A2.8	Manual correction	Cho phép sửa kết quả OCR thủ công
A.3 — Document Structure Analysis
ID	Feature	Mô tả
A3.1	Tự động phân loại tài liệu	Nhận diện: report, form, chứng từ, quy định, biên bản
A3.2	Tách chương / mục	Nhận diện phân cấp heading (H1, H2, H3...)
A3.3	Nhận diện mục lục	Tự động sinh TOC từ tài liệu
A3.4	Tiêu đề tự động	Trích xuất và suggest tiêu đề tài liệu
A3.5	Trích xuất metadata	Tác giả, ngày tháng, số hiệu văn bản
A.4 — Information Extraction (IE)
ID	Feature	Mô tả
A4.1	Named Entity Recognition	Tổ chức, người, địa điểm, số liệu
A4.2	Key-Value Extraction	Trích xuất cặp field-value từ biểu mẫu
A4.3	Số liệu tài chính	Nhận diện và extract số liệu tiền tệ, %, tỷ lệ
A4.4	Ngày tháng	Chuẩn hóa định dạng ngày tháng
A4.5	Bảng biểu → structured data	Chuyển bảng OCR sang JSON/CSV
---
🔍 EPIC B — Đối chiếu Báo cáo Đa nguồn
B.1 — Report Matching Engine
ID	Feature	Mô tả
B1.1	Matching báo cáo ↔ đề cương	So khớp nội dung báo cáo với yêu cầu đề cương
B1.2	Matching báo cáo ↔ bằng chứng	Kiểm tra bằng chứng đính kèm có đủ không
B1.3	Matching báo cáo ↔ quy định	Đối chiếu với văn bản pháp luật, thông tư
B1.4	Matching báo cáo ↔ thực tế	So sánh với biên bản phỏng vấn, log hệ thống
B1.5	Semantic Matching	Nhận diện nội dung giống nhau nhưng diễn đạt khác
B.2 — Discrepancy Detection
ID	Feature	Mô tả
B2.1	Điểm thiếu	Highlight nội dung yêu cầu nhưng báo cáo không đề cập
B2.2	Điểm sai	Highlight nội dung trái với quy định/thực tế
B2.3	Điểm không rõ	Đánh dấu nội dung mơ hồ, cần làm rõ
B2.4	Consistency số liệu	Phát hiện số liệu mâu thuẫn trong cùng tài liệu
B2.5	Consistency thời gian	Phát hiện logic thời gian không hợp lệ
B2.6	Cross-document inconsistency	Phát hiện mâu thuẫn giữa các tài liệu
B.3 — Trust Score & Quality
ID	Feature	Mô tả
B3.1	Độ tin cậy tổng thể	Score tổng hợp của hồ sơ (0–100%)
B3.2	Score theo tiêu chí	Breakdown score theo từng nhóm tiêu chí
B3.3	Baseline calibration	Hiệu chỉnh score theo hồ sơ chuẩn
B3.4	Heatmap sai lệch	Visualize vùng sai lệch theo topic
B.4 — Matching Workspace
ID	Feature	Mô tả
B4.1	Side-by-side view	Xem song song: báo cáo ↔ quy định
B4.2	Highlight & annotation	Đánh dấu và chú thích trực tiếp trên tài liệu
B4.3	Comment thread	Thảo luận theo từng đoạn văn bản
B4.4	Accept/Reject findings	Kiểm toán viên confirm/bác bỏ kết quả AI
B4.5	Evidence linking	Gán bằng chứng cụ thể cho từng phát hiện
---
📊 EPIC C — Tóm tắt & Sinh Báo cáo
C.1 — Auto Summarization
ID	Feature	Mô tả
C1.1	Tóm tắt tài liệu đơn	AI tóm tắt ngắn gọn 1 tài liệu
C1.2	Tóm tắt nhật ký/biên bản	Tóm tắt theo dòng thời gian
C1.3	Tóm tắt đa tài liệu	Tổng hợp từ nhiều nguồn cùng lúc
C1.4	Custom length	Điều chỉnh độ dài tóm tắt (ngắn/vừa/dài)
C1.5	Summary theo chủ đề	Tóm tắt theo topic/tiêu chí cụ thể
C.2 — Assessment Suggestion
ID	Feature	Mô tả
C2.1	Gợi ý đánh giá	AI đề xuất nhận xét đánh giá theo mẫu
C2.2	Thư viện nhận xét	Bộ câu đánh giá chuẩn có thể customize
C2.3	Tone adjustment	Điều chỉnh văn phong (chính thức / tóm lược)
C.3 — Report Generation
ID	Feature	Mô tả
C3.1	AI Report Generation	Tự động sinh báo cáo kiểm tra hoàn chỉnh
C3.2	Word template filling	Điền tự động vào biên bản làm việc (.docx)
C3.3	Template library	Quản lý nhiều mẫu báo cáo
C3.4	Báo cáo theo chuẩn cơ quan	Format theo đặc thù tổ chức
C3.5	Export PDF / Word	Xuất báo cáo ra file
C3.6	Multi-source synthesis UI	Giao diện tổng hợp dữ liệu từ nhiều nguồn
C3.7	Version control	Lưu lịch sử các phiên bản báo cáo
C3.8	Approval workflow	Báo cáo cần được duyệt trước khi ban hành
---
🔐 EPIC D — Bảo mật & An toàn Thông tin
D.1 — Deployment & Network
ID	Feature	Mô tả
D1.1	On-premise deployment	Hệ thống chạy hoàn toàn nội bộ
D1.2	Air-gap mode	Không có route ra ngoài internet
D1.3	Internal network monitoring	Giám sát kết nối nội bộ
D.2 — Data Classification
ID	Feature	Mô tả
D2.1	Phân loại dữ liệu	Gán nhãn: công khai / nội bộ / mật / tối mật
D2.2	Data isolation	Tách biệt data training, inference, production
D2.3	Sensitive data masking	Ẩn dữ liệu nhạy cảm theo quyền
D.3 — Access Control
ID	Feature	Mô tả
D3.1	AD/LDAP integration	Đăng nhập qua Active Directory
D3.2	RBAC	Phân quyền theo vai trò
D3.3	Department-based access	Phân quyền theo phòng ban
D3.4	Document-level permission	Cấp quyền tài liệu cụ thể
D3.5	MFA	Xác thực 2 yếu tố
D.4 — Audit & Logging
ID	Feature	Mô tả
D4.1	Access log	Ghi nhật ký mọi lần truy cập
D4.2	Action log	Ghi chi tiết thao tác (upload, analyze, export)
D4.3	Audit trail UI	Giao diện xem lịch sử đầy đủ
D4.4	Tamper-proof log	Log không thể sửa xóa sau khi ghi
D4.5	Alert on suspicious	Cảnh báo truy cập bất thường
D.5 — Security Protection
ID	Feature	Mô tả
D5.1	Prompt Injection Protection	Filter và validate prompt đầu vào
D5.2	Input sanitization	Làm sạch dữ liệu đầu vào
D5.3	Encryption at rest	Mã hóa dữ liệu lưu trữ
D5.4	Encryption in transit	HTTPS/TLS nội bộ
D5.5	Third-party lib audit	Đánh giá bảo mật thư viện bên ngoài
D.6 — Backup & Recovery
ID	Feature	Mô tả
D6.1	Auto backup	Tự động backup theo lịch
D6.2	Manual backup	Backup thủ công theo yêu cầu
D6.3	Restore UI	Giao diện restore từ bản backup
D6.4	Backup verification	Kiểm tra tính toàn vẹn backup
---
⚙️ EPIC E — RAG Pipeline & Vận hành
E.1 — Model Management
ID	Feature	Mô tả
E1.1	Model registry	Danh sách model đang dùng và available
E1.2	Model switching	Chọn model cho từng task
E1.3	Quantized model support	Hỗ trợ model nén (GGUF, AWQ, GPTQ)
E1.4	Model update	Cập nhật model mới không đổi kiến trúc
E1.5	Model comparison	So sánh chất lượng giữa các model
E.2 — RAG Pipeline
ID	Feature	Mô tả
E2.1	Document indexing	Index tài liệu vào vector store
E2.2	Auto re-index	Tự động cập nhật index khi có tài liệu mới
E2.3	Data cleaning pipeline	Làm sạch dữ liệu trước khi index
E2.4	Chunking strategy config	Cấu hình chiến lược chia đoạn
E2.5	Missing source alert	Cảnh báo khi thiếu nguồn tham chiếu
E2.6	Source citation	Truy xuất nguồn từng đoạn RAG
E.3 — Prompt Management
ID	Feature	Mô tả
E3.1	Prompt library	Thư viện prompt theo nghiệp vụ
E3.2	Prompt editor	Soạn, test, lưu prompt
E3.3	Prompt versioning	Lịch sử phiên bản prompt
E3.4	Prompt testing	Chạy thử prompt với dữ liệu mẫu
E3.5	Prompt sharing	Chia sẻ prompt giữa users
E.4 — Quality & Monitoring
ID	Feature	Mô tả
E4.1	Feedback collection	Thu thập phản hồi từ analyst về kết quả AI
E4.2	Quality dashboard	Theo dõi chất lượng output AI theo thời gian
E4.3	Hallucination detection	Đánh dấu kết quả AI thiếu nguồn tham chiếu
E4.4	Response latency	Giám sát thời gian phản hồi
E4.5	Error tracking	Log và alert lỗi pipeline
---
📈 EPIC F — KPI & Demo Dashboard
F.1 — KPI Metrics
ID	Feature	Mô tả
F1.1	OCR Accuracy KPI	% độ chính xác OCR trên tài liệu chuẩn
F1.2	IE Recall/Precision	Đánh giá trích xuất thông tin
F1.3	Matching accuracy	% đúng của đối chiếu so với ground truth
F1.4	Consistency detection rate	% phát hiện sai lệch logic
F1.5	Hallucination rate	% câu trả lời AI không có nguồn
F1.6	Response time P95	Thời gian xử lý ở phân vị 95%
F1.7	Security compliance score	Điểm tuân thủ bảo mật
F1.8	RAG update latency	Thời gian cập nhật văn bản mới vào RAG
F.2 — Dashboard UI
ID	Feature	Mô tả
F2.1	Real-time KPI cards	Hiển thị KPI tổng quan real-time
F2.2	Trend charts	Biểu đồ xu hướng theo thời gian
F2.3	Drill-down view	Click vào metric để xem chi tiết
F2.4	KPI filter	Lọc theo thời gian, phòng ban, loại tài liệu
F2.5	Export report	Xuất báo cáo KPI ra PDF/Excel
F2.6	Demo mode	Chế độ demo với dữ liệu mẫu
---
📁 EPIC G — Quản lý Tài liệu Uploaded
G.1 — Document Repository
Mô tả
Một kho lưu trữ tập trung cho toàn tổ chức
Cây thư mục theo phòng ban / dự án / năm
Tên, loại, ngày, người tạo, phòng ban, trạng thái
Tìm kiếm full-text + filter metadata
Gán nhãn tùy chỉnh
Lịch sử phiên bản từng tài liệu
G.2 — Maker-Checker Workflow
Mô tả
Maker nộp tài liệu để Checker duyệt
Giao diện Checker xem và quyết định
Checker approve hoặc reject có ghi lý do
Checker yêu cầu Maker sửa lại
Theo dõi trạng thái tài liệu (Draft / Pending / Approved / Rejected)
Thông báo khi có thay đổi trạng thái
Lịch sử toàn bộ thao tác duyệt
Theo dõi hạn duyệt tài liệu
G.3 — Permission Management
ID	Feature	Mô tả
G3.1	Phân quyền theo phòng ban	Chỉ phòng ban có quyền mới thấy tài liệu của họ
G3.2	View / Edit / Delete	3 cấp quyền cơ bản trên từng tài liệu
G3.3	Cross-dept sharing	Chia sẻ tài liệu sang phòng ban khác
G3.4	Expiry permission	Cấp quyền có thời hạn
---
## 3. USER FLOWS CHI TIẾT
---
👤 MAKER — Người tạo & Upload Tài liệu
Flow M-1: Upload Tài liệu Mới
START: Maker đăng nhập vào hệ thống
  │
  ├─▶ [Dashboard] Maker thấy quick action "Upload Tài liệu"
  │
  ├─▶ [Upload Screen]
  │     ├─ Drag & drop files HOẶC click "Browse Files"
  │     ├─ Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG, TIFF
  │     ├─ Hiển thị upload queue với progress bar từng file
  │     └─ Batch upload: tối đa 20 file/lần
  │
  ├─▶ [Metadata Form — bắt buộc điền sau upload]
  │     ├─ Tên tài liệu *
  │     ├─ Loại tài liệu * (dropdown: Báo cáo / Biên bản / Chứng từ / Quy định / Khác)
  │     ├─ Phòng ban * (lấy từ AD/LDAP của user)
  │     ├─ Năm / Kỳ báo cáo *
  │     ├─ Đơn vị gửi
  │     ├─ Số hiệu văn bản
  │     ├─ Ngày văn bản
  │     ├─ Tags (tùy chọn)
  │     └─ Ghi chú (tùy chọn)
  │
  ├─▶ [OCR Preview — tự động sau upload]
  │     ├─ Hiển thị kết quả OCR preview (first 3 pages)
  │     ├─ Confidence score từng trang
  │     ├─ Maker có thể correct OCR nếu muốn
  │     └─ Maker confirm "Tiếp tục"
  │
  ├─▶ [Submit for Review]
  │     ├─ Maker chọn Checker phụ trách (dropdown danh sách Checker của phòng ban)
  │     ├─ Ghi chú cho Checker (tùy chọn)
  │     └─ Nhấn "Nộp để Duyệt"
  │
  ├─▶ [Confirmation]
  │     ├─ Toast: "Tài liệu đã nộp. Đang chờ duyệt."
  │     ├─ Status: PENDING_REVIEW
  │     └─ Checker nhận notification
  │
END: Maker quay về Dashboard, thấy tài liệu ở trạng thái "Chờ duyệt"

Flow M-2: Xem Trạng thái Tài liệu của Mình
START: Maker vào "My Documents"
  │
  ├─▶ [My Documents Screen]
  │     ├─ Tab: Tất cả | Chờ duyệt | Đã duyệt | Bị từ chối | Cần sửa
  │     ├─ Mỗi tài liệu hiển thị: Tên | Ngày nộp | Checker | Status badge
  │     └─ Filter: theo loại, theo ngày
  │
  ├─▶ [Nếu tài liệu bị từ chối hoặc cần sửa]
  │     ├─ Badge màu đỏ/vàng
  │     ├─ Click vào tài liệu → xem lý do từ Checker
  │     ├─ Xem comment chi tiết của Checker
  │     └─ Nút "Sửa & Nộp lại"
  │
  ├─▶ [Re-submit flow]
  │     ├─ Maker sửa file (upload phiên bản mới)
  │     ├─ Cập nhật metadata nếu cần
  │     ├─ Ghi chú phản hồi cho Checker
  │     └─ Nộp lại → trạng thái PENDING_REVIEW
  │
END
---
👤 CHECKER — Người duyệt Tài liệu
Flow C-1: Duyệt Tài liệu Pending
START: Checker nhận notification / đăng nhập
  │
  ├─▶ [Dashboard] Checker thấy widget "Chờ duyệt: X tài liệu"
  │
  ├─▶ [Review Queue Screen]
  │     ├─ Danh sách tài liệu pending duyệt của mình
  │     ├─ Cột: Tên | Maker | Loại | Ngày nộp | Deadline
  │     └─ Sort theo deadline / ngày nộp
  │
  ├─▶ [Document Review Screen]
  │     ├─ LEFT PANEL: Document viewer (OCR result, full text)
  │     │   ├─ Cuộn qua toàn bộ tài liệu
  │     │   ├─ Xem metadata Maker đã nhập
  │     │   └─ OCR confidence score
  │     │
  │     ├─ RIGHT PANEL: Review Form
  │     │   ├─ Checklist duyệt tài liệu:
  │     │   │   ☐ Đầy đủ thông tin metadata
  │     │   │   ☐ Đúng định dạng yêu cầu
  │     │   │   ☐ Nội dung hợp lệ
  │     │   │   ☐ Phân loại đúng
  │     │   └─ Ghi chú của Maker (nếu có)
  │     │
  │     └─ Annotation tool: Checker có thể highlight + comment trực tiếp
  │
  ├─▶ [Decision]
  │     ├─ [APPROVE] → Nhấn "Phê duyệt"
  │     │   ├─ Confirm dialog: "Bạn chắc chắn muốn phê duyệt?"
  │     │   ├─ Status → APPROVED
  │     │   └─ Maker nhận notification "Tài liệu đã được duyệt"
  │     │
  │     ├─ [REQUEST REVISION] → Nhấn "Yêu cầu sửa"
  │     │   ├─ Form nhập yêu cầu cụ thể (text area + upload example)
  │     │   ├─ Status → REVISION_REQUESTED
  │     │   └─ Maker nhận notification + chi tiết cần sửa
  │     │
  │     └─ [REJECT] → Nhấn "Từ chối"
  │         ├─ Bắt buộc nhập lý do từ chối
  │         ├─ Status → REJECTED
  │         └─ Maker nhận notification + lý do
  │
END
---
👤 ANALYST — Kiểm toán viên / Người phân tích
Flow A-1: Phân tích Hồ sơ với AI (Core Flow)
START: Analyst nhận nhiệm vụ kiểm tra hồ sơ
  │
  ├─▶ [Create Analysis Session]
  │     ├─ Nhấn "Tạo phiên phân tích mới"
  │     ├─ Đặt tên phiên (VD: "Kiểm tra đơn vị X - Q2 2024")
  │     └─ Chọn loại kiểm tra (dropdown)
  │
  ├─▶ [Document Selection]
  │     ├─ Chọn tài liệu từ kho (đã qua Maker-Checker)
  │     ├─ Gom nhóm:
  │     │   ├─ Nhóm 1: Báo cáo đơn vị (bắt buộc)
  │     │   ├─ Nhóm 2: Đề cương kiểm tra
  │     │   ├─ Nhóm 3: Quy định / Thông tư tham chiếu
  │     │   ├─ Nhóm 4: Bằng chứng đính kèm
  │     │   └─ Nhóm 5: Dữ liệu thực tế (biên bản phỏng vấn, log)
  │     └─ Confirm selection
  │
  ├─▶ [AI Processing — auto]
  │     ├─ Progress screen: 
  │     │   ✓ OCR hoàn tất
  │     │   ✓ Trích xuất thông tin
  │     │   ⟳ Đối chiếu đề cương...
  │     │   ⟳ Kiểm tra quy định...
  │     └─ Thời gian ước tính hiển thị
  │
  ├─▶ [Analysis Dashboard — kết quả chính]
  │     │
  │     ├─ OVERVIEW TAB
  │     │   ├─ Trust Score tổng: 78/100 (gauge chart)
  │     │   ├─ Score breakdown:
  │     │   │   ├─ Đủ nội dung đề cương: 85%
  │     │   │   ├─ Phù hợp quy định: 72%
  │     │   │   ├─ Tính nhất quán số liệu: 91%
  │     │   │   └─ Bằng chứng đính kèm: 65%
  │     │   └─ Summary AI: đoạn tóm tắt kết quả
  │     │
  │     ├─ DISCREPANCY TAB
  │     │   ├─ Danh sách phát hiện (Findings list):
  │     │   │   ├─ 🔴 Critical (cần xử lý ngay)
  │     │   │   ├─ 🟡 Warning (cần xem xét)
  │     │   │   └─ 🔵 Info (lưu ý)
  │     │   ├─ Mỗi finding: mô tả + nguồn tham chiếu + đoạn trích dẫn
  │     │   └─ Analyst: Accept / Reject / Add comment từng finding
  │     │
  │     ├─ MATCHING TAB  
  │     │   ├─ Side-by-side: Báo cáo ↔ Đề cương
  │     │   ├─ Color-coded:
  │     │   │   ├─ Xanh: đã đáp ứng
  │     │   │   ├─ Đỏ: thiếu / sai
  │     │   │   └─ Vàng: không rõ ràng
  │     │   └─ Analyst annotate trực tiếp
  │     │
  │     ├─ DOCUMENTS TAB
  │     │   └─ Xem từng tài liệu nguồn, highlight vùng liên quan
  │     │
  │     └─ NOTES TAB
  │         └─ Ghi chú riêng của Analyst
  │
  ├─▶ [Confirm Findings]
  │     ├─ Analyst review tất cả findings
  │     ├─ Mark: Confirmed / Disputed / N/A
  │     └─ Add evidence links nếu cần
  │
  ├─▶ → Chuyển sang Flow A-2: Sinh báo cáo
  │
END
Flow A-2: Sinh Báo cáo Tự động
START: Từ Analysis Session đã hoàn chỉnh
  │
  ├─▶ [Report Generation Screen]
  │     ├─ Chọn template báo cáo (từ thư viện)
  │     ├─ Preview template structure
  │     └─ Nhấn "Sinh báo cáo AI"
  │
  ├─▶ [AI Draft Generation]
  │     ├─ Loading... (5–30 giây)
  │     └─ Kết quả: Draft báo cáo đầy đủ
  │
  ├─▶ [Report Editor]
  │     ├─ Rich text editor với nội dung AI đã điền
  │     ├─ AI suggestions hiển thị dạng inline (có thể accept/dismiss)
  │     ├─ Từng section có nút "Regenerate" (viết lại)
  │     ├─ Footnotes tự động từ nguồn tham chiếu
  │     └─ Track changes: dễ thấy AI tạo vs Analyst sửa
  │
  ├─▶ [Review & Finalize]
  │     ├─ Analyst review toàn bộ
  │     ├─ Spell check tiếng Việt
  │     ├─ Completeness check (AI check xem còn thiếu mục nào)
  │     └─ Nhấn "Hoàn tất báo cáo"
  │
  ├─▶ [Submit for Manager Approval]
  │     ├─ Chọn Manager duyệt
  │     ├─ Ghi chú tóm tắt
  │     └─ Submit
  │
  ├─▶ [Export]
  │     ├─ Sau khi được duyệt: Export PDF / DOCX
  │     └─ Lưu vào kho tài liệu với trạng thái "Đã ban hành"
  │
END
Flow A-3: Tóm tắt Tài liệu Nhanh
START: Analyst cần đọc nhanh tài liệu dài
  │
  ├─▶ Mở tài liệu từ kho
  ├─▶ Click "AI Tóm tắt" (icon ở toolbar)
  │
  ├─▶ [Summary Options]
  │     ├─ Độ dài: Rất ngắn (< 200 từ) | Vừa | Chi tiết
  │     ├─ Focus: Tổng quát | Số liệu | Rủi ro | Điểm nổi bật
  │     └─ Nhấn "Tóm tắt"
  │
  ├─▶ [Summary Panel — slide in từ phải]
  │     ├─ AI summary text
  │     ├─ Key points (bullet list)
  │     ├─ Số liệu quan trọng (highlight)
  │     ├─ Nút "Copy" | "Export" | "Add to Report"
  │     └─ Thumbs up / down feedback
  │
END
---
👤 MANAGER — Lãnh đạo / Trưởng nhóm
Flow MN-1: Xem Tổng quan KPI & Dashboard
START: Manager đăng nhập
  │
  ├─▶ [Executive Dashboard]
  │     │
  │     ├─ HEADER ROW (4 KPI cards):
  │     │   ├─ Tổng tài liệu đã xử lý tháng này
  │     │   ├─ Số hồ sơ đang phân tích
  │     │   ├─ Báo cáo đang chờ duyệt
  │     │   └─ OCR accuracy TB
  │     │
  │     ├─ MAIN CHARTS:
  │     │   ├─ Trend line: hồ sơ xử lý theo tuần
  │     │   ├─ Bar chart: phân bố sai lệch theo loại
  │     │   ├─ Pie: phân loại tài liệu
  │     │   └─ Gauge: AI quality score
  │     │
  │     ├─ TEAM WORKLOAD:
  │     │   └─ Bảng: Analyst | Số hồ sơ | Trạng thái | Tiến độ
  │     │
  │     └─ RECENT ACTIVITY feed
  │
  ├─▶ [Filter & Drill-down]
  │     ├─ Filter: theo phòng ban, theo kỳ, theo loại
  │     └─ Click vào chart → detail view
  │
END
Flow MN-2: Phê duyệt Báo cáo Cuối
START: Manager nhận notification có báo cáo chờ duyệt
  │
  ├─▶ [Approval Queue]
  │     └─ Danh sách báo cáo cần duyệt: tên | Analyst | ngày | priority
  │
  ├─▶ [Report Review Screen]
  │     ├─ Xem toàn văn báo cáo
  │     ├─ Xem analysis session gốc (findings, evidence)
  │     ├─ Xem lịch sử chỉnh sửa (track changes)
  │     └─ Comment nếu cần
  │
  ├─▶ [Decision]
  │     ├─ APPROVE: "Phê duyệt ban hành" → báo cáo được export chính thức
  │     ├─ REVISE: "Yêu cầu chỉnh sửa" + ghi cụ thể
  │     └─ REJECT: "Từ chối" + lý do
  │
END
---
👤 ADMIN_AI — Quản trị AI
Flow AA-1: Quản lý Model
START: Admin AI vào Model Management
  │
  ├─▶ [Model Registry Screen]
  │     ├─ List models: Tên | Phiên bản | Kích thước | Task | Status
  │     ├─ Active model: highlight xanh
  │     └─ Quick stats: requests/day, avg latency, accuracy
  │
  ├─▶ [Thêm Model Mới]
  │     ├─ Upload model file (GGUF/safetensors/...)
  │     ├─ Nhập metadata: tên, version, task types
  │     ├─ Cấu hình: quantization level, max context
  │     └─ Chạy benchmark tự động
  │
  ├─▶ [A/B Test Models]
  │     ├─ Chọn model A (current) vs model B (new)
  │     ├─ Chọn test dataset
  │     ├─ Run comparison → kết quả side-by-side
  │     └─ Quyết định promote model B thành production
  │
  ├─▶ [Model Switching]
  │     ├─ Chọn task (OCR / Matching / Summary / ReportGen)
  │     ├─ Assign model cho task
  │     └─ Confirm switch (cần approve 2FA)
  │
END
Flow AA-2: Quản lý RAG Pipeline
START: Admin AI vào RAG Management
  │
  ├─▶ [RAG Dashboard]
  │     ├─ Total documents indexed: X
  │     ├─ Last updated: timestamp
  │     ├─ Index health: OK / Warning / Error
  │     └─ Pipeline status
  │
  ├─▶ [Re-index Tài liệu]
  │     ├─ Chọn scope: Tất cả | Theo phòng ban | Theo loại | Mới nhất
  │     ├─ Cấu hình chunking strategy
  │     ├─ Run cleaning pipeline trước
  │     ├─ Preview samples sau cleaning
  │     └─ Confirm → Index
  │
  ├─▶ [Monitor Pipeline]
  │     ├─ Live log của quá trình index
  │     ├─ Error documents list (failed to index)
  │     ├─ Alert: "12 documents missing reference sources"
  │     └─ Manual re-process failed docs
  │
  ├─▶ [Prompt Library Management]
  │     ├─ Danh sách prompts theo task
  │     ├─ Editor: sửa, test prompt với dữ liệu mẫu
  │     ├─ Version history của mỗi prompt
  │     └─ Publish / Archive prompt
  │
END
Flow AA-3: Monitoring Chất lượng AI
START: Admin AI vào Quality Monitoring
  │
  ├─▶ [Quality Dashboard]
  │     ├─ Feedback score theo ngày (line chart)
  │     ├─ Hallucination rate: X% (gauge, mục tiêu < 5%)
  │     ├─ Distribution: Positive / Negative / No feedback
  │     └─ Top problematic queries (flagged by users)
  │
  ├─▶ [Drill-down: Low quality responses]
  │     ├─ Filter: hallucinated | low confidence | user-rejected
  │     ├─ Xem từng response:
  │     │   ├─ Input (query + context)
  │     │   ├─ AI output
  │     │   ├─ User feedback
  │     │   └─ Source citations (hoặc thiếu)
  │     └─ Tag root cause: prompt issue / data gap / model issue
  │
  ├─▶ [Actions]
  │     ├─ Sửa prompt → test → deploy
  │     ├─ Add missing documents to RAG
  │     └─ Flag for model fine-tuning queue
  │
END
---
👤 IT_ADMIN — Quản trị Hệ thống
Flow IT-1: Quản lý User & Phân quyền
START: IT Admin vào User Management
  │
  ├─▶ [User Directory]
  │     ├─ Sync từ AD/LDAP (nút "Sync Now")
  │     ├─ Danh sách users: Tên | Email | Phòng ban | Role | Status
  │     └─ Search, filter, export
  │
  ├─▶ [Cấp / Thay đổi Role]
  │     ├─ Chọn user
  │     ├─ Assign roles (multi-select): Maker | Checker | Analyst | Manager | Admin
  │     ├─ Gán phòng ban (scoped access)
  │     └─ Save → user nhận notification
  │
  ├─▶ [Department Permission Matrix]
  │     ├─ Bảng: Phòng ban ↔ Tài liệu loại ↔ Quyền (View/Edit/Delete)
  │     └─ Bulk edit hoặc individual
  │
END
Flow IT-2: Giám sát Bảo mật & Audit Log
START: IT Admin vào Security Dashboard
  │
  ├─▶ [Security Overview]
  │     ├─ Active sessions: số user đang online
  │     ├─ Failed logins: X lần trong 24h
  │     ├─ Suspicious activities: X cảnh báo
  │     └─ System health: CPU, RAM, Disk
  │
  ├─▶ [Audit Log Viewer]
  │     ├─ Filter: User | Action | Time range | Resource
  │     ├─ Actions tracked:
  │     │   ├─ LOGIN / LOGOUT / FAILED_LOGIN
  │     │   ├─ DOCUMENT_UPLOAD / VIEW / DOWNLOAD / DELETE
  │     │   ├─ ANALYSIS_CREATE / EXPORT
  │     │   └─ PERMISSION_CHANGE
  │     ├─ Export log: CSV / PDF (signed)
  │     └─ Tamper-proof: không thể sửa xóa
  │
  ├─▶ [Alert Management]
  │     ├─ Xem alerts: multiple failed logins | unusual download | after-hours access
  │     ├─ Acknowledge alert
  │     └─ Escalate / Block user
  │
END
Flow IT-3: Backup & Restore
START: IT Admin vào Backup Management
  │
  ├─▶ [Backup Schedule]
  │     ├─ Configure: Daily / Weekly / Monthly
  │     ├─ Retention policy: giữ X bản gần nhất
  │     └─ Backup location: local storage path
  │
  ├─▶ [Backup History]
  │     ├─ Danh sách: Date | Size | Status | Checksum
  │     ├─ Verify integrity: click "Verify"
  │     └─ Download backup (IT Admin only)
  │
  ├─▶ [Restore]
  │     ├─ Chọn backup point
  │     ├─ Restore scope: Full | DB Only | Files Only
  │     ├─ Confirmation: "Thao tác này sẽ ghi đè dữ liệu hiện tại"
  │     ├─ Nhập confirmation code
  │     └─ Monitor restore progress
  │
END
---
4. NAVIGATION MAP
K-Portal
│
├── 🏠 Dashboard (role-based)
│
├── 📁 Tài liệu
│   ├── Kho tài liệu (All — phân quyền)
│   ├── Upload mới (Maker)
│   ├── Chờ duyệt — Queue (Checker)
│   └── Tài liệu của tôi (Maker)
│
├── 🔍 Phân tích
│   ├── Phiên phân tích của tôi
│   ├── Tạo phiên mới
│   └── Kết quả & Findings
│
├── 📊 Báo cáo
│   ├── Báo cáo của tôi
│   ├── Chờ tôi duyệt (Manager)
│   └── Đã ban hành
│
├── 📈 KPI & Hiệu suất (Manager / Admin)
│   ├── Executive Dashboard
│   ├── AI Quality Metrics
│   └── Team Workload
│
├── ⚙️ AI Admin (Admin AI only)
│   ├── Model Management
│   ├── RAG Pipeline
│   ├── Prompt Library
│   └── Quality Monitoring
│
└── 🔐 Hệ thống (IT Admin only)
    ├── Người dùng & Phân quyền
    ├── Audit Log
    ├── Backup & Restore
    └── Cài đặt bảo mật
---
5. STATUS LIFECYCLE
Tài liệu (Maker-Checker)
DRAFT ──▶ PENDING_REVIEW ──▶ APPROVED ──▶ ARCHIVED
                │
                ├──▶ REVISION_REQUESTED ──▶ (Maker sửa) ──▶ PENDING_REVIEW
                │
                └──▶ REJECTED
Phiên Phân tích (Analysis Session)
CREATED ──▶ PROCESSING ──▶ READY_FOR_REVIEW ──▶ IN_REVIEW ──▶ COMPLETED
                │
                └──▶ FAILED (retry available)
Báo cáo
DRAFT ──▶ PENDING_APPROVAL ──▶ APPROVED ──▶ PUBLISHED
               │
               └──▶ REVISION_REQUESTED ──▶ DRAFT
---
6. DESIGN PRINCIPLES
Principle	Áp dụng
Progressive Disclosure	Hiển thị thông tin đơn giản trước, chi tiết khi cần
AI Transparency	Mọi kết quả AI phải có nguồn tham chiếu rõ ràng
Human-in-the-loop	Analyst luôn có quyền accept/reject kết quả AI
Role-based UI	Mỗi role thấy đúng giao diện và quyền của mình
Feedback-driven	Thu thập feedback để cải thiện AI liên tục
Security-first	Mọi action nhạy cảm đều có confirm + audit log
Offline-capable	Hệ thống hoạt động hoàn toàn trong intranet
---
Tài liệu này cover 7 EPICs, 6 user roles, 11 user flows chi tiết và toàn bộ feature list theo priority. Bạn muốn tôi đi sâu vào phần nào tiếp theo?
# Questions
Bạn muốn tôi đi sâu vào phần nào tiếp theo?
Wireframe screens (Recommended)
Tôi sẽ mô tả chi tiết wireframe layout cho từng màn hình chính theo từng role.
---
🖥️ K-PORTAL — Wireframe Screens Specification
Detailed UI Layout Documentation
---
SCREEN 1: LOGIN PAGE
┌─────────────────────────────────────────────────────────────────┐
│                                                                   │
│                    [K-PORTAL Logo + Icon]                        │
│               "Nền tảng AI Phân tích Tài liệu"                  │
│                                                                   │
│              ┌────────────────────────────────┐                  │
│              │  🔒  Đăng nhập nội bộ          │                  │
│              │                                 │                  │
│              │  Tên đăng nhập (AD)             │                  │
│              │  ┌─────────────────────────┐   │                  │
│              │  │ username@domain          │   │                  │
│              │  └─────────────────────────┘   │                  │
│              │                                 │                  │
│              │  Mật khẩu                       │                  │
│              │  ┌─────────────────────────┐   │                  │
│              │  │ ••••••••••••            │ 👁│   │                  │
│              │  └─────────────────────────┘   │                  │
│              │                                 │                  │
│              │  ┌─────────────────────────┐   │                  │
│              │  │   ĐĂNG NHẬP (primary)   │   │                  │
│              │  └─────────────────────────┘   │                  │
│              │                                 │                  │
│              │  ──── hoặc ────                 │                  │
│              │  [🏢 Đăng nhập qua AD/LDAP]    │                  │
│              └────────────────────────────────┘                  │
│                                                                   │
│              ⚠️  Hệ thống chỉ dùng trong mạng nội bộ            │
│              📞  Liên hệ IT Admin: ext. 1234                     │
└─────────────────────────────────────────────────────────────────┘
---
SCREEN 2: DASHBOARD — ANALYST (màn hình sau login)
┌──────────────────────────────────────────────────────────────────────────┐
│ [≡] K-PORTAL         🔍 Tìm kiếm toàn cục...        🔔3  👤Nguyễn Văn A│
├──────┬───────────────────────────────────────────────────────────────────┤
│      │                                                                    │
│  🏠  │  ╔══════════════════════════════════════════════════════════════╗ │
│      │  ║  Xin chào, Nguyễn Văn A 👋   Thứ Tư, 01/04/2026           ║ │
│  📁  │  ╚══════════════════════════════════════════════════════════════╝ │
│      │                                                                    │
│  🔍  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│      │  │    12    │ │    3     │ │    8     │ │   87%    │            │
│  📊  │  │ Hồ sơ   │ │ Đang xử │ │ Chờ tôi │ │ Độ chính │            │
│      │  │ tháng   │ │  lý     │ │  duyệt  │ │ xác AI   │            │
│  📈  │  │  này    │ │         │ │         │ │          │            │
│      │  └──────────┘ └──────────┘ └──────────┘ └──────────┘            │
│  ⚙️  │                                                                    │
│      │  ┌─────────────────────────────┐  ┌──────────────────────────┐  │
│  🔐  │  │  PHIÊN PHÂN TÍCH GẦN ĐÂY   │  │   HÀNH ĐỘNG NHANH        │  │
│      │  │                             │  │                           │  │
│      │  │ 📄 Kiểm tra Đơn vị X       │  │  [+ Tạo phiên mới]       │  │
│      │  │    Q2 2024 · 85% · ⟳Đang  │  │  [📤 Upload tài liệu]    │  │
│      │  │                             │  │  [📋 Xem báo cáo]        │  │
│      │  │ 📄 Đối chiếu Báo cáo Y     │  │                           │  │
│      │  │    Q1 2024 · 92% · ✓Done  │  │  THÔNG BÁO               │  │
│      │  │                             │  │  🔵 Tài liệu X đã duyệt  │  │
│      │  │ 📄 Kiểm tra Đơn vị Z       │  │  🟡 AI: 1 hallucination  │  │
│      │  │    Q2 2024 · 71% · ✏️Edit │  │     detected             │  │
│      │  │                             │  │  🔵 Mô hình mới có sẵn   │  │
│      │  │ [Xem tất cả →]             │  │                           │  │
│      │  └─────────────────────────────┘  └──────────────────────────┘  │
└──────┴───────────────────────────────────────────────────────────────────┘
---
SCREEN 3: DOCUMENT UPLOAD — MAKER
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Tài liệu  /  Upload Tài liệu Mới                     Bước 1/3 ●○○  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ╔══════════════════════════════════════════════════════════════════════╗ │
│  ║  Bước 1: Chọn & Upload File                                         ║ │
│  ╚══════════════════════════════════════════════════════════════════════╝ │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │                                                                      │  │
│  │              ☁️  Kéo thả file vào đây                             │  │
│  │                                                                      │  │
│  │              hoặc  [📂 Chọn từ máy tính]                          │  │
│  │                                                                      │  │
│  │    Hỗ trợ: PDF, DOCX, XLSX, JPG, PNG, TIFF  ·  Tối đa 50MB/file  │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  QUEUE UPLOAD (3 files)                                                   │
│  ┌──────────────────────────────────────────────────┬────────┬────────┐  │
│  │ 📄 BaoCao_Q2_DonViX.pdf                  2.3 MB │ ████░░ │  ✕    │  │
│  │    ██████████████████████████░░░░  75%           │        │        │  │
│  ├──────────────────────────────────────────────────┼────────┼────────┤  │
│  │ 📊 SoLieu_2024.xlsx                      1.1 MB │ ██████ │  ✓    │  │
│  │    ██████████████████████████████  100% ✓ Done  │        │        │  │
│  ├──────────────────────────────────────────────────┼────────┼────────┤  │
│  │ 🖼️  Scan_BieuMau.tiff                    5.8 MB │ ░░░░░░ │  ✕    │  │
│  │    Đang chờ...                                    │        │        │  │
│  └──────────────────────────────────────────────────┴────────┴────────┘  │
│                                                                            │
│                           [Tiếp theo →]                                   │
└──────────────────────────────────────────────────────────────────────────┘
SCREEN 3B: METADATA FORM — Bước 2/3
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Upload  /  Thông tin Tài liệu                         Bước 2/3 ●●○  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────────────────────────┐  ┌───────────────────────────────────┐ │
│  │  THÔNG TIN CHÍNH *           │  │  👁️ PREVIEW: BaoCao_Q2_DonViX.pdf│ │
│  │                              │  │                                    │ │
│  │  Tên tài liệu *              │  │  [Page 1 of 24]                   │ │
│  │  ┌────────────────────────┐  │  │  ┌────────────────────────────┐  │ │
│  │  │ Báo cáo Q2 - Đơn vị X │  │  │  │                            │  │ │
│  │  └────────────────────────┘  │  │  │   [Document preview here]  │  │ │
│  │                              │  │  │   Trang 1/24               │  │ │
│  │  Loại tài liệu *             │  │  │                            │  │ │
│  │  ┌────────────────────────┐  │  │  └────────────────────────────┘  │ │
│  │  │ ▼ Báo cáo             │  │  │  OCR Confidence: 94% ████████░░  │ │
│  │  └────────────────────────┘  │  │                                    │ │
│  │                              │  │  ⚠️ Trang 3, 7: Độ tin cậy thấp  │ │
│  │  Phòng ban *                 │  │  [Xem chi tiết]                    │ │
│  │  ┌────────────────────────┐  │  └───────────────────────────────────┘ │
│  │  │ Phòng Kiểm tra I      │  │                                         │
│  │  └────────────────────────┘  │                                         │
│  │                              │                                         │
│  │  Năm / Kỳ báo cáo *         │                                         │
│  │  ┌──────────┐ ┌───────────┐  │                                         │
│  │  │ 2024    │ │ ▼ Quý 2  │  │                                         │
│  │  └──────────┘ └───────────┘  │                                         │
│  │                              │                                         │
│  │  Số hiệu văn bản             │                                         │
│  │  ┌────────────────────────┐  │                                         │
│  │  │ 123/BC-DX              │  │                                         │
│  │  └────────────────────────┘  │                                         │
│  │                              │                                         │
│  │  Tags   [+ Thêm tag]        │                                         │
│  │  [Kiểm tra] [Q2] [×]        │                                         │
│  │                              │                                         │
│  │  [← Quay lại] [Tiếp theo →] │                                         │
│  └──────────────────────────────┘                                         │
└──────────────────────────────────────────────────────────────────────────┘
SCREEN 3C: SUBMIT FOR REVIEW — Bước 3/3
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Upload  /  Nộp để Duyệt                               Bước 3/3 ●●●  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ╔═════════════════════════════════════╗                                  │
│  ║ ✓ Upload: 3 files thành công       ║                                  │
│  ║ ✓ OCR: Hoàn tất                    ║                                  │
│  ║ ✓ Metadata: Đã điền đầy đủ        ║                                  │
│  ╚═════════════════════════════════════╝                                  │
│                                                                            │
│  CHỌN CHECKER DUYỆT *                                                     │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  🔍 Tìm checker...                                                   │ │
│  │  ○ Trần Thị B  — Phòng Kiểm tra I  (3 hồ sơ đang duyệt)           │ │
│  │  ● Lê Văn C    — Phòng Kiểm tra I  (1 hồ sơ đang duyệt) ← Đề xuất│ │
│  │  ○ Phạm Thị D  — Phòng Kiểm tra I  (0 hồ sơ đang duyệt)           │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  GHI CHÚ CHO CHECKER (tùy chọn)                                          │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ VD: Lưu ý trang 5 có bảng số liệu cần đối chiếu thêm...           │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  ⏰ Hạn duyệt đề xuất: 03/04/2026  [Thay đổi]                          │
│                                                                            │
│                    [← Quay lại]   [📤 NỘP ĐỂ DUYỆT]                    │
│                                                                            │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 4: CHECKER REVIEW SCREEN
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Hàng duyệt  /  BaoCao_Q2_DonViX.pdf           [Reject] [Sửa] [✓ Duyệt]│
├─────────────────────────────────┬────────────────────────────────────────┤
│                                 │                                          │
│  ◀ 1/24 ▶  🔍 +  –  100%  ⊡  │  THÔNG TIN TÀI LIỆU                     │
│  ─────────────────────────────  │  ────────────────────────────────────── │
│  │                           │  │  Tên:    Báo cáo Q2 - Đơn vị X        │
│  │  [Document full-text      │  │  Loại:   Báo cáo                       │
│  │   viewer with OCR result  │  │  Người nộp: Nguyễn Văn A              │
│  │                           │  │  Nộp lúc: 01/04/2026 14:30            │
│  │   Lorem ipsum dolor sit   │  │  Phòng ban: Kiểm tra I                 │
│  │   amet, consectetur       │  │  Kỳ báo cáo: Q2/2024                  │
│  │   adipiscing elit...      │  │  OCR confidence: 94%                   │
│  │                           │  │                                          │
│  │   [Highlighted section    │  │  GHI CHÚ CỦA MAKER                     │
│  │    with annotation pin 📌]│  │  ────────────────────────────────────── │
│  │                           │  │  "Lưu ý trang 5 có bảng số liệu"      │
│  │   ...                     │  │                                          │
│  │                           │  │  CHECKLIST DUYỆT                        │
│  │                           │  │  ────────────────────────────────────── │
│  │                           │  │  ☑ Metadata đầy đủ                     │
│  │                           │  │  ☑ Định dạng đúng yêu cầu             │
│  │                           │  │  ☐ Nội dung hợp lệ          ← Pending │
│  │                           │  │  ☐ Phân loại đúng            ← Pending │
│  │                           │  │                                          │
│  │                           │  │  GHI CHÚ CỦA CHECKER                   │
│  │                           │  │  ┌──────────────────────────────────┐  │
│  │                           │  │  │ Nhận xét / Yêu cầu sửa...       │  │
│  │                           │  │  └──────────────────────────────────┘  │
│  │                           │  │                                          │
│  │                           │  │  ┌──────────┐ ┌────────┐ ┌──────────┐ │
│  │                           │  │  │ ✕ Từ chối│ │ ✏️ Sửa │ │ ✓ Duyệt │ │
│  └───────────────────────────┘  │  └──────────┘ └────────┘ └──────────┘ │
│                                 │                                          │
└─────────────────────────────────┴────────────────────────────────────────┘
---
SCREEN 5: CREATE ANALYSIS SESSION — ANALYST
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Phân tích  /  Tạo Phiên Phân tích Mới                               │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │  Tên phiên phân tích *                                            │    │
│  │  ┌────────────────────────────────────────────────────────────┐  │    │
│  │  │ VD: Kiểm tra Đơn vị X - Quý 2 năm 2024                   │  │    │
│  │  └────────────────────────────────────────────────────────────┘  │    │
│  │                                                                    │    │
│  │  Loại kiểm tra *     ┌─────────────────────────┐                  │    │
│  │                      │ ▼ Kiểm tra định kỳ      │                  │    │
│  │                      └─────────────────────────┘                  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  CHỌN TÀI LIỆU THEO NHÓM                                                 │
│                                                                            │
│  ┌──────────────────────────┐  ┌──────────────────────────────────────┐  │
│  │ NHÓM 1: BÁO CÁO ĐƠN VỊ │  │   📄 CHỌN TỪ KHO TÀI LIỆU           │  │
│  │ * bắt buộc              │  │                                        │  │
│  │                          │  │  🔍 Tìm kiếm tài liệu...             │  │
│  │  [+ Thêm tài liệu]      │  │                                        │  │
│  │                          │  │  Filter: ▼ Loại  ▼ Kỳ  ▼ Đơn vị    │  │
│  │  📄 BaoCao_Q2_X.pdf ×   │  │                                        │  │
│  │  📄 PhuLuc_Q2_X.docx ×  │  │  ☐ 📄 BaoCao_Q2_DonViX.pdf          │  │
│  │                          │  │     Q2/2024 · Đơn vị X · Đã duyệt  │  │
│  ├──────────────────────────┤  │                                        │  │
│  │ NHÓM 2: ĐỀ CƯƠNG KIỂM  │  │  ☑ 📋 DeCuong_KiemTra2024.pdf       │  │
│  │                          │  │     2024 · Phòng KT I · Đã duyệt   │  │
│  │  [+ Thêm]               │  │                                        │  │
│  │  📋 DeCuong_KT2024.pdf ×│  │  ☐ 📊 SoLieu_ThucTe_Q2.xlsx         │  │
│  │                          │  │     Q2/2024 · IT Dept · Đã duyệt   │  │
│  ├──────────────────────────┤  │                                        │  │
│  │ NHÓM 3: QUY ĐỊNH        │  │  ☐ 📄 ThongTu_15_2023.pdf           │  │
│  │                          │  │     2023 · Quy định · Đã duyệt     │  │
│  │  [+ Thêm]               │  │                                        │  │
│  │  📄 ThongTu_15.pdf ×    │  │              [Thêm vào nhóm ▾]       │  │
│  ├──────────────────────────┤  └──────────────────────────────────────┘  │
│  │ NHÓM 4: BẰNG CHỨNG     │                                              │
│  │  [+ Thêm]               │                                              │
│  ├──────────────────────────┤                                              │
│  │ NHÓM 5: DỮ LIỆU THỰC TẾ│                                              │
│  │  [+ Thêm]               │                                              │
│  └──────────────────────────┘                                              │
│                                                                            │
│          [Hủy]              [🚀 Bắt đầu Phân tích AI]                    │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 6: AI PROCESSING SCREEN
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                            │
│              🤖  AI đang phân tích hồ sơ...                              │
│              "Kiểm tra Đơn vị X - Quý 2 năm 2024"                       │
│                                                                            │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │  TIẾN TRÌNH XỬ LÝ                                    ~3 phút còn lại│ │
│  │                                                                       │ │
│  │  ✅  OCR & Trích xuất văn bản           (5 files · 2m 30s)          │ │
│  │  ✅  Nhận diện cấu trúc tài liệu        (2m 45s)                    │ │
│  │  ✅  Trích xuất thông tin (IE)          (3m 10s)                    │ │
│  │  ⟳   Đối chiếu báo cáo ↔ đề cương...  ████████░░░░  65%            │ │
│  │  ⏳  Kiểm tra quy định / thông tư       Đang chờ...                 │ │
│  │  ⏳  Phân tích consistency số liệu      Đang chờ...                 │ │
│  │  ⏳  Tính điểm tin cậy                  Đang chờ...                 │ │
│  │                                                                       │ │
│  │  ████████████████████░░░░░░░░░░  65%  Tổng thể                      │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  📋 LOG THỜI GIAN THỰC                                                   │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ 14:32:15  ✓ OCR page 1-24: confidence avg 94.2%                     │ │
│  │ 14:32:48  ✓ Extracted 47 key-value pairs                            │ │
│  │ 14:33:05  ✓ Identified 3 tables, 12 charts                          │ │
│  │ 14:33:22  ⟳ Matching section 4.2 against Đề cương criteria...       │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│              [⏸ Tạm dừng]    [Thông báo khi xong ✉️]                    │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 7: ANALYSIS RESULTS DASHBOARD — Core Screen
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Phiên phân tích  /  Kiểm tra Đơn vị X - Q2/2024         [Export ▾] │
├──────────────────────────────────────────────────────────────────────────┤
│  [TỔNG QUAN]  [SAI LỆCH (12)]  [ĐỐI CHIẾU]  [TÀI LIỆU]  [GHI CHÚ]    │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌──────────────────────┐  ┌───────────────────────────────────────────┐ │
│  │   ĐIỂM TIN CẬY TỔNG  │  │  BREAKDOWN THEO TIÊU CHÍ                 │ │
│  │                       │  │                                            │ │
│  │       78/100          │  │  Đủ nội dung đề cương ─────────── 85%   │ │
│  │    ┌─────────┐        │  │  Phù hợp quy định ─────────────── 72%   │ │
│  │    │ GAUGE   │        │  │  Nhất quán số liệu ─────────────── 91%  │ │
│  │    │   78%   │        │  │  Bằng chứng đầy đủ ─────────────── 65%  │ │
│  │    └─────────┘        │  │  Logic thời gian ───────────────── 88%  │ │
│  │  🟡 Trung bình        │  │                                            │ │
│  └──────────────────────┘  └───────────────────────────────────────────┘ │
│                                                                            │
│  TÓM TẮT AI                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ 🤖 Hồ sơ đáp ứng 85% yêu cầu đề cương kiểm tra. Phát hiện 4 điểm  │ │
│  │ thiếu quan trọng liên quan đến Mục 3.2 và 4.1. Số liệu tài chính   │ │
│  │ nhất quán. Bằng chứng đính kèm còn thiếu cho 3 tiêu chí.           │ │
│  │ [Xem chi tiết] [👍] [👎]                                            │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  PHÁT HIỆN QUAN TRỌNG                                    [Xem tất cả 12] │
│  ┌────┬────────────────────────────────────────────────┬────────┬──────┐ │
│  │ 🔴 │ Thiếu báo cáo tài chính Q2 theo Mục 3.2 TT15  │ Thiếu │ ─── │ │
│  ├────┼────────────────────────────────────────────────┼────────┼──────┤ │
│  │ 🔴 │ Số liệu nhân sự mâu thuẫn: trang 3 vs trang 8 │ Sai   │ ─── │ │
│  ├────┼────────────────────────────────────────────────┼────────┼──────┤ │
│  │ 🟡 │ Mục 4.1 chưa rõ ràng, cần làm rõ              │ Mơ hồ │ ─── │ │
│  ├────┼────────────────────────────────────────────────┼────────┼──────┤ │
│  │ 🟡 │ Thiếu biên bản họp ngày 15/03/2024             │ Thiếu │ ─── │ │
│  └────┴────────────────────────────────────────────────┴────────┴──────┘ │
└──────────────────────────────────────────────────────────────────────────┘
SCREEN 7B: TAB SAI LỆCH — Chi tiết
┌──────────────────────────────────────────────────────────────────────────┐
│  [TỔNG QUAN]  [SAI LỆCH (12) ←ACTIVE]  [ĐỐI CHIẾU]  [TÀI LIỆU]       │
├────────────────────────┬─────────────────────────────────────────────────┤
│                        │                                                   │
│  DANH SÁCH PHÁT HIỆN  │  CHI TIẾT FINDING #1                             │
│                        │  ─────────────────────────────────────────────── │
│  Filter: 🔴3  🟡6  🔵3│  🔴 CRITICAL — Thiếu báo cáo tài chính Q2      │
│                        │                                                   │
│  🔴 F-001 ← SELECTED  │  MÔ TẢ:                                          │
│  Thiếu BC tài chính   │  Theo Mục 3.2 Thông tư 15/2023, đơn vị phải     │
│                        │  nộp báo cáo tài chính 6 tháng đầu năm.         │
│  🔴 F-002             │  Hồ sơ hiện tại không có tài liệu này.          │
│  Số liệu mâu thuẫn    │                                                   │
│                        │  NGUỒN THAM CHIẾU:                               │
│  🟡 F-003             │  📄 "ThongTu_15.pdf" > Mục 3.2, trang 12        │
│  Mục 4.1 không rõ     │  [Xem đoạn trích dẫn ▾]                         │
│                        │  ┌─────────────────────────────────────────────┐│
│  🟡 F-004             │  │"...đơn vị phải nộp BCTC 6 tháng đầu năm    ││
│  Thiếu biên bản họp   │  │trước ngày 30/7 hàng năm..."               ││
│                        │  └─────────────────────────────────────────────┘│
│  🟡 F-005             │                                                   │
│  Logic thời gian       │  TRONG BÁO CÁO:                                  │
│                        │  ⚠️ Không tìm thấy nội dung liên quan           │
│  🔵 F-006             │                                                   │
│  Ghi chú thông tin    │  QUYẾT ĐỊNH:                                      │
│                        │  ┌──────────────┐  ┌──────────────┐              │
│  [Xem thêm...]        │  │ ✓ Xác nhận   │  │ ✕ Bác bỏ AI │              │
│                        │  └──────────────┘  └──────────────┘              │
│                        │                                                   │
│                        │  GHI CHÚ CỦA TÔI:                               │
│                        │  ┌──────────────────────────────────────────┐   │
│                        │  │ Đã xác nhận: thiếu BCTC 6T. Cần yêu cầu│   │
│                        │  │ đơn vị bổ sung...                        │   │
│                        │  └──────────────────────────────────────────┘   │
│                        │                                                   │
│                        │  LINK BẰNG CHỨNG: [+ Đính kèm]                  │
└────────────────────────┴─────────────────────────────────────────────────┘
SCREEN 7C: TAB ĐỐI CHIẾU — Side-by-Side
┌──────────────────────────────────────────────────────────────────────────┐
│  [TỔNG QUAN]  [SAI LỆCH]  [ĐỐI CHIẾU ←ACTIVE]  [TÀI LIỆU]             │
│                                                                            │
│  So sánh: [▼ Báo cáo Đơn vị X]  ↔  [▼ Đề cương Kiểm tra 2024]         │
├─────────────────────────────────┬────────────────────────────────────────┤
│  BÁO CÁO ĐƠN VỊ X (P.24)       │  ĐỀ CƯƠNG KIỂM TRA 2024              │
│                                  │                                         │
│  Mục 1: Tổng quan   ✅          │  1. Thông tin chung              ✅   │
│  ┌──────────────────────────┐   │  ┌──────────────────────────────────┐ │
│  │ Đơn vị được kiểm tra:   │   │  │ Yêu cầu: Tên, địa chỉ, loại   │ │
│  │ Công ty TNHH ABC...      │   │  │ hình, người đại diện...         │ │
│  └──────────────────────────┘   │  └──────────────────────────────────┘ │
│                                  │                                         │
│  Mục 2: Tài chính  ✅           │  2. Tình hình tài chính          ✅   │
│  ┌──────────────────────────┐   │  ┌──────────────────────────────────┐ │
│  │ Doanh thu Q2: 15.2 tỷ   │   │  │ Yêu cầu: Doanh thu, chi phí,   │ │
│  │ Chi phí Q2: 12.8 tỷ     │   │  │ lợi nhuận, công nợ...           │ │
│  └──────────────────────────┘   │  └──────────────────────────────────┘ │
│                                  │                                         │
│  Mục 3: Nhân sự    ✅           │  3. Quản lý nhân sự              ✅   │
│                                  │                                         │
│  ┌──────────────────────────┐   │  3.2 Báo cáo tài chính 6T        ❌   │
│  │ ⚠️  KHÔNG TÌM THẤY NỘI  │   │  ┌──────────────────────────────────┐ │
│  │ DUNG TƯƠNG ỨNG           │   │  │ Yêu cầu: BCTC 6 tháng đầu năm, │ │
│  └──────────────────────────┘   │  │ có xác nhận của kế toán trưởng  │ │
│                                  │  └──────────────────────────────────┘ │
│  Mục 4: Quy trình  🟡           │  4. Quy trình nghiệp vụ          🟡   │
│  ┌──────────────────────────┐   │  ┌──────────────────────────────────┐ │
│  │ Quy trình phê duyệt được │   │  │ Yêu cầu: Quy trình rõ ràng,    │ │
│  │ thực hiện... [mơ hồ]    │   │  │ có văn bản hướng dẫn...          │ │
│  └──────────────────────────┘   │  └──────────────────────────────────┘ │
│                                  │                                         │
│  LEGEND: ✅ Đáp ứng  ❌ Thiếu  🟡 Không rõ  ⚠️ Mâu thuẫn             │
└─────────────────────────────────┴────────────────────────────────────────┘
---
SCREEN 8: REPORT EDITOR — Sinh báo cáo AI
┌──────────────────────────────────────────────────────────────────────────┐
│ [←] Phiên phân tích  /  Soạn thảo Báo cáo                               │
│ Template: Biên bản làm việc v2.1                    [💾 Lưu] [Preview] │
├──────────────────────────────────────────────────────────────────────────┤
│  │B│ │I│ │U│ ─── │H1▾│ ─── [Undo] [Redo] ─── [🤖 Viết lại đoạn này]  │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  BIÊN BẢN LÀM VIỆC                                                       │
│  ════════════════════                                                      │
│                                                                            │
│  I. THÔNG TIN CHUNG                                                       │
│  ─────────────────────────────────────────────────────────────────────── │
│  Căn cứ Kế hoạch kiểm tra số .../KH-KT ngày ...                         │
│  Đoàn kiểm tra đã làm việc với [Công ty TNHH ABC] từ ngày ... đến ...  │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ 🤖 AI Suggestion: Thêm thông tin đầy đủ về thành phần đoàn kiểm   │  │
│  │    tra theo mẫu chuẩn.  [Accept ✓]  [Dismiss ✗]  [Sửa ✏️]         │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  II. NỘI DUNG KIỂM TRA VÀ KẾT QUẢ                                       │
│  ─────────────────────────────────────────────────────────────────────── │
│  2.1 Tình hình tài chính                                                  │
│                                                                            │
│  Doanh thu Q2/2024: **15.2 tỷ đồng**¹                                   │
│  Chi phí Q2/2024:   **12.8 tỷ đồng**¹                                   │
│                                                                            │
│  2.2 Những tồn tại, hạn chế                                              │
│                                                                            │
│  ┌────────────────────────────────────────────────────────────────────┐  │
│  │ 🤖 [AI tạo]  Qua kiểm tra, đoàn nhận thấy một số tồn tại:        │  │
│  │  1. Đơn vị chưa nộp báo cáo tài chính 6 tháng theo quy định...   │  │
│  │  2. Số liệu nhân sự trang 3 và trang 8 có mâu thuẫn...            │  │
│  │                             [🔄 Viết lại]  [Accept tất cả]         │  │
│  └────────────────────────────────────────────────────────────────────┘  │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────── │
│  ¹ Nguồn: BaoCao_Q2_DonViX.pdf, trang 5, bảng 2                        │
│                                                                            │
│  ✅ Completeness: 8/10 mục đã điền  [Xem mục còn thiếu]                 │
│                                                                            │
│              [Lưu nháp]          [Nộp cho Manager duyệt →]               │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 9: KPI DASHBOARD — MANAGER
┌──────────────────────────────────────────────────────────────────────────┐
│ KPI & Hiệu suất AI              Kỳ: [▼ Tháng 4/2026]  [Export PDF]     │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐           │
│  │  OCR       │ │  Matching  │ │Hallucination│ │ P95 Latency│           │
│  │  Accuracy  │ │  Accuracy  │ │    Rate    │ │            │           │
│  │            │ │            │ │            │ │            │           │
│  │   96.2%    │ │   89.4%    │ │   3.1%     │ │   4.2s     │           │
│  │  ↑ +1.3%  │ │  ↑ +2.1%  │ │  ↓ -0.8%  │ │  ↓ -0.5s  │           │
│  │  vs tháng │ │  vs tháng  │ │  vs tháng  │ │  vs tháng  │           │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘           │
│                                                                            │
│  ┌───────────────────────────────┐  ┌────────────────────────────────┐  │
│  │  XU HƯỚNG HỒ SƠ XỬ LÝ       │  │  PHÂN BỐ SAI LỆCH THEO LOẠI   │  │
│  │                               │  │                                  │  │
│  │  50┤              ╭─╮        │  │   Thiếu bằng chứng  ████ 38%   │  │
│  │  40┤         ╭────╯ ╰──      │  │   Số liệu mâu thuẫn ███  24%   │  │
│  │  30┤    ╭────╯               │  │   Vi phạm quy định  ██   18%   │  │
│  │  20┤────╯                    │  │   Logic thời gian   ██   12%   │  │
│  │  10┤                         │  │   Khác              █    8%    │  │
│  │    └──T1─T2─T3─T4            │  │                                  │  │
│  └───────────────────────────────┘  └────────────────────────────────┘  │
│                                                                            │
│  WORKLOAD ANALYST                                                          │
│  ┌───────────────┬──────────┬──────────┬────────────┬──────────────────┐ │
│  │ Analyst       │ Hồ sơ    │ Đang xử  │ Hoàn thành │ Avg Quality     │ │
│  ├───────────────┼──────────┼──────────┼────────────┼──────────────────┤ │
│  │ Nguyễn Văn A  │ 8        │ 2        │ 6 (75%)    │ ████████  87%  │ │
│  │ Trần Thị B    │ 5        │ 1        │ 4 (80%)    │ █████████ 91%  │ │
│  │ Lê Văn C      │ 3        │ 3        │ 0 (0%)     │ N/A             │ │
│  └───────────────┴──────────┴──────────┴────────────┴──────────────────┘ │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 10: MODEL MANAGEMENT — ADMIN AI
┌──────────────────────────────────────────────────────────────────────────┐
│ AI Admin  /  Quản lý Mô hình                             [+ Upload Model]│
├──────────────────────────────────────────────────────────────────────────┤
│  MODELS ĐANG HOẠT ĐỘNG                                                    │
│                                                                            │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │  🟢 PRODUCTION                                                    │    │
│  │  ┌───────────────┬─────────────┬───────────┬──────────────────┐  │    │
│  │  │ Model         │ Task        │ Size      │ Performance      │  │    │
│  │  ├───────────────┼─────────────┼───────────┼──────────────────┤  │    │
│  │  │ Vistral-7B-Q4 │ OCR + IE    │ 4.1 GB    │ 96.2% ↑          │  │    │
│  │  │               │             │           │ 2.1s latency     │  │    │
│  │  │               │             │           │ [Config] [Swap]  │  │    │
│  │  ├───────────────┼─────────────┼───────────┼──────────────────┤  │    │
│  │  │ SeaLLM-7B-Q4  │ Matching +  │ 4.3 GB    │ 89.4% ↑          │  │    │
│  │  │               │ Summary     │           │ 3.8s latency     │  │    │
│  │  │               │             │           │ [Config] [Swap]  │  │    │
│  │  └───────────────┴─────────────┴───────────┴──────────────────┘  │    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  MODELS CÓ SẴN (Chưa dùng)                                               │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │  ⚪ Vistral-7B-Q8  │ 8.2 GB  │ Uploaded 30/03  │ [Benchmark] [Deploy]│    │
│  │  ⚪ PhoGPT-4B-Q4   │ 2.3 GB  │ Uploaded 25/03  │ [Benchmark] [Deploy]│    │
│  └──────────────────────────────────────────────────────────────────┘    │
│                                                                            │
│  A/B TESTING ACTIVE                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │  SeaLLM-7B-Q4 (current)  vs  Vistral-7B-Q8 (challenger)         │    │
│  │  Traffic split: 80% / 20%  ·  Running since 29/03                │    │
│  │  Challenger: 91.2% accuracy ↑ vs 89.4% current                  │    │
│  │  [📊 Xem kết quả đầy đủ]  [🚀 Promote Challenger]  [⏹ Dừng]   │    │
│  └──────────────────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 11: AUDIT LOG — IT ADMIN
┌──────────────────────────────────────────────────────────────────────────┐
│ Hệ thống  /  Nhật ký Kiểm toán                    [Export CSV] [Export PDF]│
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  FILTER: [👤 Tất cả users▾] [⚡ Tất cả actions▾] [📅 Hôm nay▾] [🔍]   │
│                                                                            │
│  🔴 CẢNH BÁO BẢO MẬT (2)                                                │
│  ┌─────────────────────────────────────────────────────────────────────┐ │
│  │ ⚠️ 14:15:02  nguyen_c — LOGIN_FAILED × 5 lần — IP: 192.168.1.45   │ │
│  │    → Tài khoản tạm khóa 30 phút  [Mở khóa] [Xem chi tiết]         │ │
│  │                                                                       │ │
│  │ ⚠️ 11:32:45  tran_b — BULK_EXPORT 847 tài liệu — bất thường        │ │
│  │    → Cần xác nhận  [Cho phép] [Chặn] [Liên hệ user]                │ │
│  └─────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  NHẬT KÝ CHI TIẾT                                                         │
│  ┌──────────┬─────────────┬─────────────────────────────┬──────────────┐ │
│  │ Thời gian│ Người dùng  │ Hành động                   │ Kết quả     │ │
│  ├──────────┼─────────────┼─────────────────────────────┼──────────────┤ │
│  │ 14:32:15 │ nguyen_a    │ DOCUMENT_UPLOAD             │ ✅ Thành công│ │
│  │          │ Phòng KT I  │ BaoCao_Q2_X.pdf (2.3MB)     │              │ │
│  ├──────────┼─────────────┼─────────────────────────────┼──────────────┤ │
│  │ 14:28:03 │ le_c        │ ANALYSIS_CREATE             │ ✅ Thành công│ │
│  │          │ Phòng KT I  │ Session: KT DV X Q2         │              │ │
│  ├──────────┼─────────────┼─────────────────────────────┼──────────────┤ │
│  │ 14:15:02 │ nguyen_c    │ LOGIN_FAILED                │ ❌ Thất bại  │ │
│  │          │ Phòng KT II │ IP: 192.168.1.45            │ 🔴 Alert     │ │
│  ├──────────┼─────────────┼─────────────────────────────┼──────────────┤ │
│  │ 14:02:18 │ tran_b      │ REPORT_EXPORT               │ ✅ Thành công│ │
│  │          │ Phòng KT I  │ PDF · BieuBan_KT_X.pdf      │              │ │
│  └──────────┴─────────────┴─────────────────────────────┴──────────────┘ │
│                                                                            │
│  Hiển thị 1-4 / 2,847 bản ghi                   [← Trước]  1  [Sau →]  │
└──────────────────────────────────────────────────────────────────────────┘
---
SCREEN 12: DOCUMENT REPOSITORY — KQTL Tập trung
┌──────────────────────────────────────────────────────────────────────────┐
│ Kho Tài liệu                                              [+ Upload mới] │
├──────────────────────────────────────────────────────────────────────────┤
│  🔍 Tìm kiếm full-text...          [▼ Loại] [▼ Kỳ] [▼ Phòng ban] [▼ Status]│
├──────────────────────────────────────────────────────────────────────────┤
│                                                                            │
│  ├─ 📁 Phòng Kiểm tra I                                                  │
│  │   ├─ 📁 2024                                                           │
│  │   │   ├─ 📁 Quý 2                                                      │
│  │   │   │   ├─ 📄 BaoCao_Q2_DonViX.pdf    ✅ Đã duyệt   [···]          │
│  │   │   │   ├─ 📊 SoLieu_Q2_DonViX.xlsx   ✅ Đã duyệt   [···]          │
│  │   │   │   └─ 📄 BieuMau_DX_Q2.docx      🟡 Chờ duyệt  [···]          │
│  │   │   └─ 📁 Quý 1                                                      │
│  │   │       └─ 📄 BaoCao_Q1_DonViY.pdf    ✅ Đã duyệt   [···]          │
│  │   └─ 📁 Văn bản quy định                                               │
│  │       └─ 📄 ThongTu_15_2023.pdf         ✅ Đã duyệt   [···]          │
│  │                                                                         │
│  ├─ 📁 Phòng Kiểm tra II  🔒 (Không có quyền truy cập)                  │
│  │                                                                         │
│  └─ 📁 Văn bản chung                                                      │
│      └─ 📄 DeCuong_KiemTra2024.pdf         ✅ Đã duyệt   [···]          │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────── │
│  Tổng: 247 tài liệu  |  Đã duyệt: 221  |  Chờ duyệt: 18  |  Từ chối: 8 │
└──────────────────────────────────────────────────────────────────────────┘
---
COMPONENT STATES SUMMARY
States
🟤 Draft · 🟡 Pending · ✅ Approved · ❌ Rejected · 🔵 Processing
🔴 Critical · 🟡 Warning · 🔵 Info
✅ Matched · ❌ Missing · 🟡 Partial · ⚠️ Conflict
🔴 0–60 · 🟡 61–80 · 🟢 81–100
Accept / Dismiss / Edit
Uploading / OCR Processing / Done / Error
---
Tổng cộng 12 màn hình chính được wireframe chi tiết. Bạn muốn bước tiếp theo là gì?