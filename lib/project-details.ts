import type { Language } from "@/components/language-provider";

export type ProjectSlug =
  | "kindy-mate-ai-companion"
  | "rag-codebase-qa-pipeline"
  | "brfn-digital-marketplace"
  | "critical-care-ccu-dashboard"
  | "vehicle-damage-detection";

export type ProjectDetail = {
  slug: ProjectSlug;
  status: string;
  timeline: string;
  role: string;
  summary: string;
  problem: string;
  contribution: string[];
  implementation: string[];
  impact: string[];
  learnings: string[];
  demoImage?: string;
  demoImageAlt?: string;
  links: Array<{
    label: string;
    href: string;
    disabled?: boolean;
  }>;
};

type DetailLabels = {
  back: string;
  project: string;
  status: string;
  timeline: string;
  role: string;
  overview: string;
  problem: string;
  contribution: string;
  implementation: string;
  impact: string;
  learnings: string;
  stack: string;
  links: string;
  preview: string;
  demoMissing: string;
  previous: string;
  next: string;
  unavailable: string;
  notFoundTitle: string;
  notFoundBody: string;
};

export const projectDetailLabels: Record<Language, DetailLabels> = {
  en: {
    back: "Back to projects",
    project: "Project case study",
    status: "Status",
    timeline: "Timeline",
    role: "Role",
    overview: "Overview",
    problem: "Problem",
    contribution: "My contribution",
    implementation: "Implementation notes",
    impact: "Outcome and evidence",
    learnings: "What this demonstrates",
    stack: "Tech stack",
    links: "Project links",
    preview: "Project preview",
    demoMissing: "Demo image placeholder",
    previous: "Previous project",
    next: "Next project",
    unavailable: "Available on request",
    notFoundTitle: "Project not found",
    notFoundBody: "This project detail page does not exist yet.",
  },
  vi: {
    back: "Quay l\u1ea1i d\u1ef1 \u00e1n",
    project: "Chi ti\u1ebft d\u1ef1 \u00e1n",
    status: "Tr\u1ea1ng th\u00e1i",
    timeline: "Th\u1eddi gian",
    role: "Vai tr\u00f2",
    overview: "T\u1ed5ng quan",
    problem: "B\u00e0i to\u00e1n",
    contribution: "Ph\u1ea7n t\u00f4i th\u1ef1c hi\u1ec7n",
    implementation: "Ghi ch\u00fa tri\u1ec3n khai",
    impact: "K\u1ebft qu\u1ea3 v\u00e0 minh ch\u1ee9ng",
    learnings: "N\u0103ng l\u1ef1c th\u1ec3 hi\u1ec7n",
    stack: "C\u00f4ng ngh\u1ec7",
    links: "Li\u00ean k\u1ebft d\u1ef1 \u00e1n",
    preview: "Minh h\u1ecda d\u1ef1 \u00e1n",
    demoMissing: "Ch\u01b0a c\u00f3 \u1ea3nh demo trong th\u01b0 m\u1ee5c public",
    previous: "D\u1ef1 \u00e1n tr\u01b0\u1edbc",
    next: "D\u1ef1 \u00e1n ti\u1ebfp theo",
    unavailable: "Cung c\u1ea5p khi \u0111\u01b0\u1ee3c y\u00eau c\u1ea7u",
    notFoundTitle: "Kh\u00f4ng t\u00ecm th\u1ea5y d\u1ef1 \u00e1n",
    notFoundBody: "Trang chi ti\u1ebft cho d\u1ef1 \u00e1n n\u00e0y ch\u01b0a t\u1ed3n t\u1ea1i.",
  },
};

export const projectDetails: Record<Language, Record<ProjectSlug, ProjectDetail>> = {
  en: {
    "kindy-mate-ai-companion": {
      slug: "kindy-mate-ai-companion",
      status: "Working MVP built, expanding behavior logic and analytics",
      timeline: "2026 - Present",
      role: "Product Lead, Full-stack Developer, AI Experience Designer",
      summary:
        "A parent-led child digital habit platform that combines parent controls, child-safe activity flows, post-session analytics, and a bounded AI assistant for family guidance.",
      problem:
        "Parents need a practical way to guide children's digital routines without turning screen-time management into punishment. Most tools either focus only on restriction or treat all screen activity the same, while children actually move between learning, passive viewing, off-screen tasks, and guided interaction. Kindy-Mate is designed to help families structure those sessions more intentionally, with parent controls, child-safe flows, and post-session insights.",
      contribution: [
        "Defined the product architecture around a parent-led model: child mode, parent controls, post-session reporting, and bounded AI support.",
        "Designed and implemented the full-stack MVP using Django REST, Next.js, PostgreSQL, and Docker-based local deployment.",
        "Built the child experience as an interactive hub with activity zones, mascot-led interaction, and session-aware flows.",
        "Designed the parent system for session rules, bedtime settings, screen/off-screen tracking, and child-specific configuration.",
        "Developed the reporting layer for activity analysis, including active vs. passive patterns, screen vs. off-screen breakdowns, and parent-facing summaries.",
        "Integrated a scoped parent assistant using a local LLM workflow with strict guardrails and data-limited prompting.",
      ],
      implementation: [
        "Built separate parent and child application shells with clear authorization boundaries and role-specific UX.",
        "Implemented child-mode session tracking with backend logging for screen-based and off-screen activities.",
        "Added per-child rule configuration, including session duration, total screen time, continuous screen time, break logic, and bedtime settings.",
        "Designed the child UI as an interactive room-based hub instead of a dashboard-style interface, making navigation more intuitive for ages 3-8.",
        "Implemented parent reporting views with post-session summaries, activity distributions, date filtering, and exploratory-style analytics.",
        "Connected the parent assistant to local LLM inference while constraining scope to project data, safety rules, and non-diagnostic language.",
      ],
      impact: [
        "A working MVP is already available with authentication, parent-child mode separation, child profile management, session controls, activity tracking, analytics pages, and a parent assistant.",
        "The product is not only a concept prototype: core flows such as login, child mode entry, parent rule configuration, post-session reporting, and guided child interaction have been implemented end-to-end.",
        "The current build demonstrates technical feasibility for a parent-led AI product in the child digital wellbeing space, with room for stronger bedtime enforcement, richer content systems, and additional testing.",
      ],
      learnings: [
        "Ability to translate a sensitive social problem into a structured digital product with clear user roles and safeguards.",
        "Full-stack execution across backend APIs, frontend interaction design, stateful session logic, analytics, and local AI integration.",
        "Practical product thinking: not just building screens, but designing parent controls, child-safe experiences, and reportable behavioral signals.",
        "Awareness of safety, scope control, and bounded AI behavior in a child-related application context.",
      ],
      demoImage: "/projects/kindy-mate-ai-companion/demo/cover.png",
      demoImageAlt: "Kindy-Mate product demo screenshot",
      links: [
        { label: "Repository", href: "https://github.com/RinaniRita/KINDY-MATE.git" },
        { label: "Presentation deck", href: "/projects/kindy-mate-ai-companion/slides/kindy-mate-slide.pdf" },
      ],
    },
    "rag-codebase-qa-pipeline": {
      slug: "rag-codebase-qa-pipeline",
      status: "Research project",
      timeline: "2025 - 2026",
      role: "Researcher, Pipeline Developer",
      summary:
        "A repository QA evaluation pipeline comparing single-pass long-context prompting, standard RAG, and a structure-aware iterative reader under controlled retrieval noise.",
      problem:
        "Large codebases are difficult for LLMs to answer about reliably. A useful evaluation needs to measure not only answer quality, but also whether the model strictly grounds its response in the right files and line citations, especially under noisy retrieval conditions (Context-Rot).",
      contribution: [
        "Designed a benchmark with 60 complex QA scenarios covering both single-hop and multi-hop codebase queries.",
        "Built and evaluated 3 distinct QA architectures: single-pass Long-context, Standard RAG, and a Structure-Aware Iterative Reader.",
        "Developed a custom evaluation harness combining LLM-as-a-Judge for answer correctness and deterministic geometric metrics for citation file/span accuracy.",
        "Engineered a controlled Context-Rot stress test using adversarial distractors (inverted-gold noise).",
      ],
      implementation: [
        "Used ChromaDB with bge-small embeddings and a custom heuristic reranker to manage code context.",
        "Simulated Context-Rot by injecting structured adversarial distractors into the candidate pool to explicitly test synthesis resilience.",
        "Built a fully automated evaluation pipeline that tracks answer score, File F1, Weighted Span, latency, and model-call costs across the 3 architectures.",
      ],
      impact: [
        "Proved that Standard RAG degrades sharply under adversarial noise (distractor poisoning), while Iterative Reading degrades much more gracefully.",
        "Quantified a clear architectural trade-off: bounded iterative reading provides superior factual grounding and robustness, but at a premium in latency and computational cost.",
      ],
      learnings: [
        "Deep expertise in AI engineering, RAG architectures, and mitigating LLM hallucinations.",
        "Ability to move beyond simple demos into rigorous, metrics-driven LLM evaluation design.",
        "Strong understanding of real-world deployment trade-offs: quality vs. latency and cost.",
      ],
      demoImage: "/projects/rag-codebase-qa-pipeline/demo/cover.png",
      demoImageAlt: "RAG Codebase QA Pipeline demo screenshot",
      links: [
        { label: "Project report", href: "/rag_paper.pdf" },
        { label: "Repository", href: "https://github.com/muoimeo/evaluating-long-context-rag-and-recursive-reading-for-llm-repository-qa.git" },
      ],
    },
    "brfn-digital-marketplace": {
      slug: "brfn-digital-marketplace",
      status: "Completed",
      timeline: "2025-2026",
      role: "Full-stack Developer, AI Integration Developer",
      summary:
        "A Django-based local food marketplace with role-based commerce flows, checkout validation, surplus and bulk pricing, organisation approvals, and responsible integration with external AI recommendation, forecasting, and quality inspection services.",
      problem:
        "Small agricultural marketplace flows need more than basic product listing. The platform had to support role-based buying and selling, cart and checkout validation, organisation purchasing, producer stock management, customer convenience features, and responsible integration with external AI services without making unsupported automation decisions.",
      contribution: [
        "Built and refined role-based Django flows for customers, producers, organisations, and administrators.",
        "Implemented marketplace browsing, product management, cart, checkout review, saved delivery locations, order history, notifications, invoices, and approval workflows.",
        "Integrated external Advanced AI APIs for quick re-order recommendations, discovery suggestions, producer demand forecasting, and optional produce quality inspection.",
        "Added read-only AI data export and event sync layers so DESD can share anonymised marketplace events without copying AI code or connecting to the AI database.",
        "Improved pricing behaviour for surplus campaigns, bulk discounts, and combined discount previews across cart, checkout, and order snapshots.",
      ],
      implementation: [
        "Used Django templates, forms, views, and models to keep the marketplace server-rendered and maintainable.",
        "Added Docker-based local development with MySQL for persistent marketplace data.",
        "Kept DESD and Advanced AI separated by HTTP APIs: DESD owns operational marketplace data, while AI owns recommendations, forecasts, quality scoring, and explainability evidence.",
        "Added best-effort API failure handling so marketplace browsing, checkout, and producer workflows continue even when AI services are unavailable.",
        "Implemented customer-facing UI safeguards so AI suggestions are explainable but not treated as automatic product approval.",
      ],
      impact: [
        "Delivered an end-to-end Django marketplace covering product listing, cart, checkout, order management, organisation approval, saved delivery locations, reviews, invoices, and admin reports.",
        "Integrated AI-powered recommendation, discovery, producer forecast, and quality inspection features through API boundaries.",
        "Demonstrated responsible AI integration by showing reason codes, forecast explanations, quality grades, and manual review controls without letting AI automatically change stock, availability, or pricing.",
      ],
      learnings: [
        "Full-stack Django development with relational data modelling and role-based workflows.",
        "Practical integration of external AI services into a production-style web application.",
        "Transaction-aware marketplace logic including cart validation, surplus pricing, bulk discounts, checkout, invoices, and admin reporting.",
        "Responsible AI system design: explainability, fallback handling, manual review, and separation between operational data and AI model services.",
      ],
      demoImage: "/projects/brfn-digital-marketplace/demo/cover.png",
      demoImageAlt: "BRFN Digital Marketplace demo screenshot",
      links: [
        { label: "Marketplace repository", href: "https://github.com/muoimeo/desd-brfn-marketplace.git" },
        { label: "AI service repository", href: "https://github.com/muoimeo/advanced-ai-brfn.git" },
      ],
    },
    "critical-care-ccu-dashboard": {
      slug: "critical-care-ccu-dashboard",
      status: "Completed Prototype",
      timeline: "2025",
      role: "Frontend Lead & System Architect",
      summary:
        "A Flask-based CCU dashboard prototype for patient management, encounter tracking, nutrition referrals, reporting, dietitian assignment, and ML-assisted referral prediction.",
      problem:
        "CCU staff and dietitians need a clearer way to manage patient nutrition referrals, track encounter data, and identify patients who may require dietitian intervention. Without a structured dashboard, patient records, referral status, physiological measurements, and dietitian workload can become difficult to monitor consistently.",
      contribution: [
        "Designed the frontend structure for the administrator interface, including patient management, referral tracking, and report-related views.",
        "Built the dietitian-facing interface with role-specific access and workflows.",
        "Helped define the initial database structure to keep frontend flows consistent with stored patient, referral, and user data.",
        "Split the system into admin and dietitian user flows, then unified them through consistent interface patterns.",
        "Integrated and refined the final user interface, debugging visual and functional issues across the system.",
      ],
      implementation: [
        "Built the application as a Flask-based web system with modular project structure, separating routes, models, utilities, configuration, migrations, and ML scripts.",
        "Used SQLAlchemy and Flask-Migrate to define and evolve database models for users, patients, dietitians, encounters, measurements, referrals, reports, and assignments.",
        "Implemented role-based authentication using Flask-Login, Flask-Bcrypt, Flask-WTF, and decorator-based authorization.",
        "Developed patient, encounter, measurement, referral, dietitian, reporting, and assignment workflows through structured routes and templates.",
        "Integrated ML referral prediction into the encounter workflow using saved Scikit-learn artifacts and SHAP explanations.",
        "Styled and refined the interface using Tailwind CSS and JavaScript, with responsive layout and improved user interaction.",
      ],
      impact: [
        "Delivered a working healthcare dashboard prototype supporting patient management, encounter tracking, nutrition referrals, dietitian management, reporting, and assignment workflows.",
        "Demonstrated full-stack system thinking by connecting frontend flows with database models, authentication, and role-based access.",
        "Integrated an ML-assisted referral workflow using synthetic physiological data, preprocessing artifacts, Random Forest prediction, and SHAP explanations.",
        "Produced a maintainable architecture using Flask Blueprints, SQLAlchemy ORM, migration scripts, utility scripts, and structured documentation.",
        "Identified realistic limitations, including reliance on synthetic data, need for stronger model validation, and future scalability improvements.",
      ],
      learnings: [
        "Ability to design role-based healthcare software around real operational workflows, not just static dashboard screens.",
        "Strong frontend and system architecture thinking, especially in separating admin and dietitian user journeys while keeping the interface consistent.",
        "Practical understanding of database-driven web applications using Flask, SQLAlchemy, authentication, migrations, and structured CRUD workflows.",
        "Awareness of responsible ML integration in sensitive domains, including interpretability, data limitations, and the need for real-world validation.",
        "Ability to communicate technical limitations honestly instead of overstating a prototype as a production-ready clinical system.",
      ],
      links: [
        { label: "Repository", href: "https://gitlab.uwe.ac.uk/bvn2-minh/ccu-htm.git" },
      ],
    },
    "vehicle-damage-detection": {
      slug: "vehicle-damage-detection",
      status: "Completed",
      timeline: "2024",
      role: "Computer Vision Developer",
      summary:
        "A YOLOv8-based vehicle damage detection model trained on custom scraped and manually annotated vehicle images for automated inspection workflows.",
      problem:
        "Vehicle inspection requires consistent identification of visible damage. Manual review is time-consuming, while generic object detection models need domain-specific data to perform reliably.",
      contribution: [
        "Collected and curated custom vehicle damage image data.",
        "Annotated images with Label Studio for object detection training.",
        "Trained and evaluated YOLOv8 models using PyTorch-based workflows.",
        "Analyzed detection behavior to identify data quality and annotation gaps.",
      ],
      implementation: [
        "Prepared a custom dataset with bounding-box annotations for visible damage regions.",
        "Trained YOLOv8 with iterative dataset refinement and validation checks.",
        "Reviewed false positives and missed detections to guide future data collection.",
      ],
      impact: [
        "Supported practical computer vision workflows during engineering internship experience.",
        "Demonstrates the full data loop: collection, labelling, training, evaluation, and iteration.",
      ],
      learnings: [
        "Applied object detection with custom data rather than benchmark-only datasets.",
        "Dataset quality and annotation consistency matter as much as model choice.",
        "Clear fit for computer vision and applied ML engineering work.",
      ],
      links: [
        { label: "Repository", href: "https://github.com/NguyenDucTrung999/car-damage-segmentation.git" },
      ],
    },
  },
  vi: {
    "kindy-mate-ai-companion": {
      slug: "kindy-mate-ai-companion",
      status: "MVP đã hoạt động, đang mở rộng logic hành vi và phân tích",
      timeline: "2026 - Hiện tại",
      role: "Định hướng sản phẩm, Lập trình full-stack, Thiết kế trải nghiệm AI",
      summary:
        "Nền tảng do phụ huynh định hướng, giúp trẻ xây dựng thói quen số lành mạnh thông qua bộ quy tắc của phụ huynh, luồng hoạt động an toàn cho trẻ, phân tích sau phiên sử dụng và một trợ lý AI có phạm vi kiểm soát.",
      problem:
        "Phụ huynh cần một cách thực tế để định hướng thói quen số của trẻ mà không biến quản lý thời gian màn hình thành hình phạt. Phần lớn công cụ hiện tại chỉ tập trung vào hạn chế hoặc xem mọi hoạt động màn hình như nhau, trong khi trẻ thực tế chuyển đổi giữa học tập, xem thụ động, hoạt động ngoài màn hình và tương tác có hướng dẫn. Kindy-Mate được thiết kế để giúp gia đình cấu trúc các phiên sử dụng có chủ đích hơn, với bộ quy tắc phụ huynh, luồng an toàn cho trẻ và insight sau phiên.",
      contribution: [
        "Định nghĩa kiến trúc sản phẩm quanh mô hình do phụ huynh định hướng: chế độ trẻ em, bộ quy tắc phụ huynh, báo cáo sau phiên và hỗ trợ AI có giới hạn.",
        "Thiết kế và triển khai MVP full-stack bằng Django REST, Next.js, PostgreSQL và môi trường chạy local dựa trên Docker.",
        "Xây dựng trải nghiệm trẻ em như một hub tương tác với các khu vực hoạt động, tương tác cùng mascot và luồng theo phiên sử dụng.",
        "Thiết kế hệ thống phụ huynh cho quy tắc phiên, giờ ngủ, theo dõi hoạt động trên/ngoài màn hình và cấu hình riêng theo từng trẻ.",
        "Phát triển lớp báo cáo để phân tích hoạt động, gồm mẫu chủ động/thụ động, phân tách trên/ngoài màn hình và tóm tắt cho phụ huynh.",
        "Tích hợp trợ lý phụ huynh có phạm vi giới hạn bằng local LLM, kèm guardrail chặt và prompt chỉ dùng dữ liệu cần thiết.",
      ],
      implementation: [
        "Xây dựng shell ứng dụng riêng cho phụ huynh và trẻ em, với ranh giới phân quyền rõ ràng và UX theo từng vai trò.",
        "Triển khai theo dõi phiên ở chế độ trẻ em, có backend logging cho hoạt động trên màn hình và ngoài màn hình.",
        "Thêm cấu hình quy tắc theo từng trẻ, gồm thời lượng phiên, tổng thời gian màn hình, thời gian màn hình liên tục, logic nghỉ và giờ ngủ.",
        "Thiết kế UI trẻ em theo dạng căn phòng tương tác thay vì dashboard, giúp trẻ 3-8 tuổi điều hướng trực quan hơn.",
        "Triển khai màn hình báo cáo cho phụ huynh với tóm tắt sau phiên, phân bổ hoạt động, lọc theo ngày và phân tích khám phá.",
        "Kết nối trợ lý phụ huynh với local LLM inference, đồng thời giới hạn phạm vi vào dữ liệu dự án, quy tắc an toàn và ngôn ngữ không chẩn đoán.",
      ],
      impact: [
        "MVP đang hoạt động đã có xác thực, tách chế độ phụ huynh/trẻ em, quản lý hồ sơ trẻ, điều khiển phiên, theo dõi hoạt động, trang phân tích và trợ lý phụ huynh.",
        "Sản phẩm không chỉ là concept prototype: các luồng chính như đăng nhập, vào chế độ trẻ em, cấu hình quy tắc, báo cáo sau phiên và tương tác có hướng dẫn đã được triển khai end-to-end.",
        "Bản hiện tại chứng minh tính khả thi kỹ thuật cho một sản phẩm AI do phụ huynh định hướng trong mảng child digital wellbeing, với dư địa cải thiện enforcement giờ ngủ, hệ thống nội dung và kiểm thử.",
      ],
      learnings: [
        "Khả năng chuyển một vấn đề xã hội nhạy cảm thành sản phẩm số có vai trò người dùng và safeguard rõ ràng.",
        "Khả năng triển khai full-stack qua backend API, thiết kế tương tác frontend, logic phiên có trạng thái, phân tích dữ liệu và tích hợp AI local.",
        "Tư duy sản phẩm thực tế: không chỉ dựng màn hình, mà thiết kế bộ quy tắc phụ huynh, trải nghiệm an toàn cho trẻ và tín hiệu hành vi có thể báo cáo.",
        "Nhận thức về an toàn, kiểm soát phạm vi và hành vi AI có giới hạn trong bối cảnh ứng dụng liên quan đến trẻ em.",
      ],
      demoImage: "/projects/kindy-mate-ai-companion/demo/cover.png",
      demoImageAlt: "Ảnh demo sản phẩm Kindy-Mate",
      links: [
        { label: "Repository", href: "https://github.com/RinaniRita/KINDY-MATE.git" },
        { label: "Slide thuy\u1ebft tr\u00ecnh", href: "/projects/kindy-mate-ai-companion/slides/kindy-mate-slide.pdf" },
      ],
    },
    "rag-codebase-qa-pipeline": {
      slug: "rag-codebase-qa-pipeline",
      status: "Dự án nghiên cứu",
      timeline: "2025 - 2026",
      role: "Researcher, Pipeline Developer",
      summary:
        "Pipeline đánh giá repository QA, so sánh single-pass long-context prompting, standard RAG và structure-aware iterative reader trong điều kiện retrieval noise có kiểm soát.",
      problem:
        "Codebase lớn khiến LLM khó trả lời đáng tin cậy. Một quy trình đánh giá tốt cần đo không chỉ chất lượng câu trả lời, mà còn việc mô hình có grounding nghiêm ngặt vào đúng file và line citation hay không, đặc biệt dưới điều kiện retrieval nhiễu (Context-Rot).",
      contribution: [
        "Thiết kế benchmark gồm 60 kịch bản QA phức tạp, bao phủ cả truy vấn single-hop và multi-hop trên codebase.",
        "Xây dựng và đánh giá 3 kiến trúc QA riêng biệt: single-pass Long-context, Standard RAG và Structure-Aware Iterative Reader.",
        "Phát triển evaluation harness tùy chỉnh, kết hợp LLM-as-a-Judge cho độ đúng của câu trả lời và deterministic geometric metrics cho độ chính xác file/span citation.",
        "Thiết kế stress test Context-Rot có kiểm soát bằng adversarial distractors (inverted-gold noise).",
      ],
      implementation: [
        "Dùng ChromaDB với bge-small embeddings và custom heuristic reranker để quản lý code context.",
        "Mô phỏng Context-Rot bằng cách bơm structured adversarial distractors vào candidate pool để kiểm tra trực tiếp khả năng tổng hợp thông tin khi có nhiễu.",
        "Xây dựng pipeline đánh giá tự động, theo dõi answer score, File F1, Weighted Span, latency và model-call cost trên cả 3 kiến trúc.",
      ],
      impact: [
        "Chứng minh Standard RAG suy giảm mạnh dưới adversarial noise (distractor poisoning), trong khi Iterative Reading suy giảm ổn định hơn nhiều.",
        "Định lượng trade-off kiến trúc rõ ràng: bounded iterative reading cho factual grounding và robustness tốt hơn, nhưng phải trả giá bằng latency và computational cost cao hơn.",
      ],
      learnings: [
        "Chuyên môn sâu về AI engineering, kiến trúc RAG và giảm thiểu hallucination của LLM.",
        "Khả năng đi xa hơn demo đơn giản để thiết kế đánh giá LLM nghiêm ngặt, dựa trên metric.",
        "Hiểu rõ trade-off triển khai thực tế giữa chất lượng, latency và chi phí.",
      ],
      demoImage: "/projects/rag-codebase-qa-pipeline/demo/cover.png",
      demoImageAlt: "Ảnh demo RAG Codebase QA Pipeline",
      links: [
        { label: "Báo cáo dự án", href: "/rag_paper.pdf" },
        { label: "Repository", href: "https://github.com/muoimeo/evaluating-long-context-rag-and-recursive-reading-for-llm-repository-qa.git" },
      ],
    },
    "brfn-digital-marketplace": {
      slug: "brfn-digital-marketplace",
      status: "Hoàn thành",
      timeline: "2025-2026",
      role: "Full-stack Developer, AI Integration Developer",
      summary:
        "Marketplace thực phẩm địa phương xây dựng bằng Django, hỗ trợ luồng thương mại theo vai trò, kiểm tra checkout, giá surplus/bulk, phê duyệt tổ chức và tích hợp có trách nhiệm với các dịch vụ AI bên ngoài cho recommendation, forecasting và quality inspection.",
      problem:
        "Luồng marketplace nông sản cần nhiều hơn việc đăng sản phẩm cơ bản. Nền tảng phải hỗ trợ mua bán theo vai trò, kiểm tra giỏ hàng và checkout, mua hàng theo tổ chức, quản lý tồn kho của producer, tiện ích cho customer và tích hợp có trách nhiệm với dịch vụ AI bên ngoài mà không đưa ra quyết định tự động thiếu cơ sở.",
      contribution: [
        "Xây dựng và tinh chỉnh các luồng Django theo vai trò cho customer, producer, organisation và administrator.",
        "Triển khai marketplace browsing, product management, cart, checkout review, saved delivery locations, order history, notifications, invoices và approval workflows.",
        "Tích hợp các Advanced AI API bên ngoài cho quick re-order recommendations, discovery suggestions, producer demand forecasting và optional produce quality inspection.",
        "Thêm lớp read-only AI data export và event sync để DESD chia sẻ marketplace events đã ẩn danh mà không sao chép AI code hoặc kết nối trực tiếp tới AI database.",
        "Cải thiện pricing behaviour cho surplus campaigns, bulk discounts và combined discount previews xuyên suốt cart, checkout và order snapshots.",
      ],
      implementation: [
        "Dùng Django templates, forms, views và models để giữ marketplace theo hướng server-rendered và dễ bảo trì.",
        "Thêm môi trường local development dựa trên Docker với MySQL cho dữ liệu marketplace bền vững.",
        "Tách DESD và Advanced AI qua HTTP APIs: DESD sở hữu operational marketplace data, còn AI sở hữu recommendations, forecasts, quality scoring và explainability evidence.",
        "Thêm best-effort API failure handling để browsing, checkout và producer workflows vẫn tiếp tục khi AI services không khả dụng.",
        "Triển khai customer-facing UI safeguards để AI suggestions có giải thích nhưng không bị xem như automatic product approval.",
      ],
      impact: [
        "Hoàn thiện marketplace Django end-to-end bao gồm product listing, cart, checkout, order management, organisation approval, saved delivery locations, reviews, invoices và admin reports.",
        "Tích hợp recommendation, discovery, producer forecast và quality inspection có hỗ trợ AI thông qua ranh giới API rõ ràng.",
        "Thể hiện responsible AI integration bằng reason codes, forecast explanations, quality grades và manual review controls, không để AI tự động thay đổi stock, availability hoặc pricing.",
      ],
      learnings: [
        "Phát triển full-stack Django với relational data modelling và workflow theo vai trò.",
        "Tích hợp thực tế các dịch vụ AI bên ngoài vào một web application theo phong cách production.",
        "Marketplace logic có nhận thức giao dịch, gồm cart validation, surplus pricing, bulk discounts, checkout, invoices và admin reporting.",
        "Thiết kế hệ thống AI có trách nhiệm: explainability, fallback handling, manual review và tách biệt operational data khỏi AI model services.",
      ],
      demoImage: "/projects/brfn-digital-marketplace/demo/cover.png",
      demoImageAlt: "Ảnh demo BRFN Digital Marketplace",
      links: [
        { label: "Repo marketplace", href: "https://github.com/muoimeo/desd-brfn-marketplace.git" },
        { label: "Repo AI service", href: "https://github.com/muoimeo/advanced-ai-brfn.git" },
      ],
    },
    "critical-care-ccu-dashboard": {
      slug: "critical-care-ccu-dashboard",
      status: "Prototype hoàn thành",
      timeline: "2025",
      role: "Frontend Lead & System Architect",
      summary:
        "Prototype dashboard CCU xây dựng bằng Flask cho quản lý bệnh nhân, theo dõi encounter, referral dinh dưỡng, báo cáo, phân công dietitian và dự đoán referral có hỗ trợ ML.",
      problem:
        "Nhân sự CCU và dietitian cần một cách rõ ràng hơn để quản lý referral dinh dưỡng, theo dõi dữ liệu encounter và xác định bệnh nhân có thể cần can thiệp dinh dưỡng. Nếu thiếu dashboard có cấu trúc, hồ sơ bệnh nhân, trạng thái referral, chỉ số sinh lý và workload của dietitian sẽ khó được giám sát nhất quán.",
      contribution: [
        "Thiết kế cấu trúc frontend cho giao diện administrator, bao gồm quản lý bệnh nhân, theo dõi referral và các view liên quan đến báo cáo.",
        "Xây dựng giao diện dành cho dietitian với quyền truy cập và workflow riêng theo vai trò.",
        "Hỗ trợ định nghĩa cấu trúc database ban đầu để các luồng frontend nhất quán với dữ liệu bệnh nhân, referral và user được lưu trữ.",
        "Tách hệ thống thành hai luồng admin và dietitian, sau đó thống nhất bằng các pattern giao diện nhất quán.",
        "Tích hợp và tinh chỉnh giao diện cuối cùng, debug các lỗi hiển thị và chức năng trên toàn hệ thống.",
      ],
      implementation: [
        "Xây dựng ứng dụng như một hệ thống web Flask có cấu trúc module rõ ràng, tách routes, models, utilities, configuration, migrations và ML scripts.",
        "Dùng SQLAlchemy và Flask-Migrate để định nghĩa và phát triển database models cho users, patients, dietitians, encounters, measurements, referrals, reports và assignments.",
        "Triển khai xác thực theo vai trò bằng Flask-Login, Flask-Bcrypt, Flask-WTF và decorator-based authorization.",
        "Phát triển các workflow patient, encounter, measurement, referral, dietitian, reporting và assignment thông qua routes và templates có cấu trúc.",
        "Tích hợp dự đoán referral bằng ML vào encounter workflow, sử dụng các Scikit-learn artifacts đã lưu và SHAP explanations.",
        "Styling và tinh chỉnh giao diện bằng Tailwind CSS và JavaScript, với layout responsive và tương tác người dùng rõ hơn.",
      ],
      impact: [
        "Hoàn thiện một prototype dashboard healthcare hoạt động được, hỗ trợ quản lý bệnh nhân, theo dõi encounter, referral dinh dưỡng, quản lý dietitian, báo cáo và workflow phân công.",
        "Thể hiện tư duy full-stack system bằng cách kết nối luồng frontend với database models, authentication và role-based access.",
        "Tích hợp workflow referral có hỗ trợ ML bằng dữ liệu sinh lý synthetic, preprocessing artifacts, Random Forest prediction và SHAP explanations.",
        "Tạo kiến trúc dễ bảo trì với Flask Blueprints, SQLAlchemy ORM, migration scripts, utility scripts và tài liệu có cấu trúc.",
        "Nhận diện rõ các giới hạn thực tế, bao gồm phụ thuộc vào synthetic data, nhu cầu validation mô hình mạnh hơn và cải thiện khả năng mở rộng trong tương lai.",
      ],
      learnings: [
        "Khả năng thiết kế phần mềm healthcare theo vai trò xoay quanh workflow vận hành thực, không chỉ là dashboard tĩnh.",
        "Tư duy frontend và system architecture tốt, đặc biệt trong việc tách user journey của admin và dietitian nhưng vẫn giữ giao diện nhất quán.",
        "Hiểu biết thực tế về ứng dụng web dựa trên database với Flask, SQLAlchemy, authentication, migrations và CRUD workflows có cấu trúc.",
        "Nhận thức về tích hợp ML có trách nhiệm trong domain nhạy cảm, bao gồm interpretability, giới hạn dữ liệu và nhu cầu validation thực tế.",
        "Khả năng trình bày giới hạn kỹ thuật trung thực thay vì phóng đại prototype thành hệ thống clinical production-ready.",
      ],
      links: [
        { label: "Repository", href: "https://gitlab.uwe.ac.uk/bvn2-minh/ccu-htm.git" },
      ],
    },
    "vehicle-damage-detection": {
      slug: "vehicle-damage-detection",
      status: "Hoàn thành",
      timeline: "2024",
      role: "Computer Vision Developer",
      summary:
        "Mô hình phát hiện hư hại xe cộ dựa trên YOLOv8, huấn luyện bằng dữ liệu ảnh tự thu thập và gán nhãn thủ công cho workflow kiểm định xe.",
      problem:
        "Kiểm định xe cần nhận diện hư hại một cách nhất quán. Review thủ công tốn thời gian, còn model object detection chung cần dữ liệu domain-specific để hoạt động đáng tin cậy.",
      contribution: [
        "Thu thập và làm sạch dữ liệu ảnh hư hại xe.",
        "Gán nhãn ảnh bằng Label Studio cho bài toán object detection.",
        "Huấn luyện và đánh giá YOLOv8 bằng workflow dựa trên PyTorch.",
        "Phân tích detection behavior để xác định vấn đề dữ liệu và annotation.",
      ],
      implementation: [
        "Chuẩn bị custom dataset với bounding box cho các vùng hư hại nhìn thấy được.",
        "Huấn luyện YOLOv8 qua nhiều vòng cải thiện dataset và validation.",
        "Rà soát false positive và missed detection để định hướng thu thập dữ liệu tiếp theo.",
      ],
      impact: [
        "Hỗ trợ workflow computer vision thực tế trong trải nghiệm internship kỹ thuật.",
        "Thể hiện đầy đủ vòng lặp dữ liệu: collection, labelling, training, evaluation và iteration.",
      ],
      learnings: [
        "Ứng dụng object detection với custom data thay vì chỉ dùng benchmark dataset.",
        "Chất lượng dữ liệu và annotation quan trọng ngang với lựa chọn mô hình.",
        "Phù hợp với hướng computer vision và applied ML engineering.",
      ],
      links: [
        { label: "Repository", href: "https://github.com/NguyenDucTrung999/car-damage-segmentation.git" },
      ],
    },
  },
};
