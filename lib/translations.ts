export interface TranslationDict {
  nav: {
    projects: string;
    experience: string;
    research: string;
    skills: string;
    awards: string;
    resume: string;
  };
  hero: {
    name: string;
    role: string;
    summary: string;
    viewProjects: string;
    contactMe: string;
    emailCopied: string;
  };
  projects: {
    title: string;
    ongoingBadge: string;
    filters: {
      all: string;
      aiMl: string;
      web: string;
    };
    items: Array<{
      slug: string;
      name: string;
      category: "AI/ML" | "Web";
      description: string;
      stack: string[];
      isOngoing?: boolean;
    }>;
  };
  experience: {
    title: string;
    internshipsTitle: string;
    internships: Array<{
      role: string;
      company: string;
      period: string;
      details: string[];
    }>;
    educationTitle: string;
    educationDegree: string;
    educationSchool: string;
    educationPeriod: string;
    educationDetails: string[];
  };
  skills: {
    title: string;
    categories: {
      languages: {
        title: string;
        items: string[];
      };
      aiMl: {
        title: string;
        items: string[];
      };
      backend: {
        title: string;
        items: string[];
      };
      tools: {
        title: string;
        items: string[];
      };
    };
  };
  research: {
    title: string;
    paperTitle: string;
    description: string;
    readPaper: string;
    statValue: string;
    statLabel: string;
  };
  awards: {
    title: string;
    items: Array<{
      title: string;
      period: string;
      description: string;
      isLive?: boolean;
    }>;
  };
  footer: {
    copyright: string;
  };
}

export const translations: Record<"en" | "vi", TranslationDict> = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience & Education",
      research: "Research",
      skills: "Skills",
      awards: "Awards",
      resume: "Resume",
    },
    hero: {
      name: "Bui Vu Nhat Minh",
      role: "Computer Science - Artificial Intelligence (AI) Student",
      summary: "Building intelligent systems with analytical precision. Passionate about machine learning, data-driven optimization, and engineering robust software architectures for the future.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      emailCopied: "Email copied to clipboard!",
    },
    projects: {
      title: "Selected Projects",
      ongoingBadge: "Ongoing",
      filters: {
        all: "All",
        aiMl: "AI/ML",
        web: "Web",
      },
      items: [
        {
          slug: "kindy-mate-ai-companion",
          name: "Kindy-Mate: Parent-Led Child Digital Habit Platform",
          category: "Web",
          description: "Built a parent-led AI companion platform helping kids build healthy digital habits. Features screen-time tracking, AI-assistant activity insights, mascot chats, and parent analytics.",
          stack: ["Django REST", "Next.js", "PostgreSQL", "Tailwind", "Docker", "Ollama"],
          isOngoing: true,
        },
        {
          slug: "rag-codebase-qa-pipeline",
          name: "RAG Codebase QA Pipeline",
          category: "AI/ML",
          description: "Built a QA evaluation pipeline comparing long-context prompting, standard RAG, and bounded iterative reading across a 60-question benchmark for codebase query resolution.",
          stack: ["Python", "RAG", "ChromaDB", "LLM-as-a-Judge", "Deterministic Metrics"],
        },
        {
          slug: "brfn-digital-marketplace",
          name: "BRFN Digital Marketplace",
          category: "Web",
          description: "Built a Django-based local food marketplace with role-based commerce flows, checkout validation, surplus and bulk pricing, organisation approvals, and responsible external AI service integration.",
          stack: ["Django", "MySQL", "Docker", "Stripe", "REST API Integration", "Server-rendered Templates", "AI Service Integration"],
        },
        {
          slug: "critical-care-ccu-dashboard",
          name: "Critical Care CCU Dashboard",
          category: "Web",
          description: "Delivered a Flask-based CCU dashboard prototype for patient management, encounter tracking, nutrition referrals, reports, and dietitian assignment.",
          stack: ["Flask", "MySQL", "SQLAlchemy", "Flask-Migrate", "Flask-Login", "Tailwind CSS", "JavaScript", "Scikit-learn", "SHAP"],
        },
        {
          slug: "vehicle-damage-detection",
          name: "Vehicle Damage Detection",
          category: "AI/ML",
          description: "Trained a YOLOv8-based vehicle damage detection model using custom scraped images annotated in Label Studio for automated vehicle inspections.",
          stack: ["YOLOv8", "Python", "Label Studio", "PyTorch"],
        },
      ],
    },
    experience: {
      title: "Experience & Education",
      internshipsTitle: "Internship Experience",
      internships: [
        {
          role: "Research Intern (Full-time)",
          company: "Business AI Lab, National Economics University (NEU)",
          period: "07/2025 - 01/2026",
          details: [
            "Conducting research in Machine Learning (ML) with focus on model development and evaluation.",
            "Enhancing expertise in Python and data-driven analysis.",
            "Preparing to review academic papers and contribute future publications for the lab and university.",
          ],
        },
        {
          role: "Engineering Intern (Full-time)",
          company: "Aggregatori Capaci (AC), Hanoi Office",
          period: "June 2024 - August 2024",
          details: [
            "Implemented computer vision workflows for car damage inspection, brand sorting, and license plate recognition.",
            "Automated image data collection and labelling for model training.",
            "Supported production deployment and integration of AI pipelines under Agile workflows.",
          ],
        },
      ],
      educationTitle: "Education",
      educationDegree: "BSc (Hons) Computer Science (Artificial Intelligence)",
      educationSchool: "University of the West of England, Phenikaa Campus",
      educationPeriod: "Expected May 2026",
      educationDetails: [
        "GPA (1st & 2nd year): 77.45/100 (Distinction range)",
        "Dean's scholarship (50% tuition fees for 3 years)",
        "Coursework: AI, Machine Learning, Advanced Algorithms, Advanced Software Development, Computer Architecture",
      ],
    },
    skills: {
      title: "Technical Skills",
      categories: {
        languages: {
          title: "Languages",
          items: ["Python", "C", "SQL", "HTML/CSS", "Kotlin"],
        },
        aiMl: {
          title: "AI & Machine Learning",
          items: ["TensorFlow", "scikit-learn", "YOLOv8", "RAG", "CNNs", "Supervised Learning", "Model Evaluation"],
        },
        backend: {
          title: "Backend & Databases",
          items: ["Flask", "Django", "MySQL", "REST API"],
        },
        tools: {
          title: "Tools & Deployment",
          items: ["Git", "GitHub", "Docker", "Google Colab", "AWS EC2", "ChromaDB"],
        },
      },
    },
    research: {
      title: "Featured Research",
      paperTitle: "Evaluating RAG and Iterative Reading for Large Codebase QA",
      description: "Investigated QA evaluation pipelines comparing long-context prompting, standard RAG, and bounded iterative reading. Designed context-rot experiments showing iterative reading improved citation grounding over standard RAG.",
      readPaper: "View Project's Paper",
      statValue: "60+",
      statLabel: "Benchmark QA Scenarios Evaluation",
    },
    awards: {
      title: "Awards & Honors",
      items: [
        {
          title: "Participating, Green Intelligence Challenge 2026",
          period: "Phenikaa University, Vietnam",
          description: "Participating as Team Leader, App Developer, and Research Assistant in the challenge hosted by the UK-Vietnam EmpowerTNE Network. Leading the development of the 'Kindy-Mate AI Companion' platform to promote healthy digital habits for kids.",
          isLive: true,
        },
        {
          title: "1st Runner-up, Future Business Analyst Season 5",
          period: "RMIT University, Vietnam",
          description: "Selected from ~100 initial teams; contributed data analysis on default risk (default rate) using customer features from a bank dataset provided by the organizers for the team's business case solution.",
        },
        {
          title: "Second Prize - International Student Innovation Challenge 2024",
          period: "Phenikaa University, Vietnam",
          description: "Awarded second prize in the Technology field of the competition for an Intelligent Vehicle Observation and Analysis System using computer vision.",
        },
        {
          title: "Global Innovative Technology Award - 10th International Students' Start-up Conference",
          period: "Tongmyong University, South Korea",
          description: "Recognised for a technology-driven innovation project presentation. The project proposed integrating AI in drones to locate and optimize trash collection/cleanup routes for a green city.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Bui Vu Nhat Minh",
    },
  },
  vi: {
    nav: {
      projects: "Dự án",
      experience: "Kinh nghiệm & Học vấn",
      research: "Nghiên cứu",
      skills: "Kỹ năng",
      awards: "Giải thưởng",
      resume: "CV",
    },
    hero: {
      name: "Bùi Vũ Nhật Minh",
      role: "Sinh viên Khoa học Máy tính - Trí tuệ Nhân tạo (AI)",
      summary: "Xây dựng các hệ thống thông minh với độ chính xác phân tích. Đam mê học máy, tối ưu hóa dựa trên dữ liệu và thiết kế các kiến trúc phần mềm mạnh mẽ cho tương lai.",
      viewProjects: "Xem Dự Án",
      contactMe: "Liên Hệ",
      emailCopied: "Đã sao chép email vào bộ nhớ tạm!",
    },
    projects: {
      title: "Dự Án Tiêu Biểu",
      ongoingBadge: "Đang phát triển",
      filters: {
        all: "Tất cả",
        aiMl: "AI/ML",
        web: "Web",
      },
      items: [
        {
          slug: "kindy-mate-ai-companion",
          name: "Kindy-Mate: N\u1ec1n t\u1ea3ng x\u00e2y d\u1ef1ng th\u00f3i quen s\u1ed1 cho tr\u1ebb do ph\u1ee5 huynh \u0111\u1ecbnh h\u01b0\u1edbng",
          category: "Web",
          description: "Xây dựng nền tảng đồng hành AI giúp trẻ hình thành thói quen số lành mạnh. Tích hợp theo dõi thời gian sử dụng, phân tích hành vi trẻ bằng AI, linh vật và cổng quản trị cho cha mẹ.",
          stack: ["Django REST", "Next.js", "PostgreSQL", "Tailwind", "Docker", "Ollama"],
          isOngoing: true,
        },
        {
          slug: "rag-codebase-qa-pipeline",
          name: "Hệ thống QA RAG Codebase",
          category: "AI/ML",
          description: "Xây dựng đường ống đánh giá hỏi đáp so sánh giữa prompt ngữ cảnh dài, RAG tiêu chuẩn và đọc lặp giới hạn trên bộ kiểm thử 60 câu hỏi truy vấn mã nguồn.",
          stack: ["Python", "RAG", "ChromaDB", "LLM-as-a-Judge", "Deterministic Metrics"],
        },
        {
          slug: "brfn-digital-marketplace",
          name: "Chợ số BRFN",
          category: "Web",
          description: "Xây dựng marketplace thực phẩm địa phương bằng Django với luồng thương mại theo vai trò, kiểm tra checkout, giá surplus/bulk, phê duyệt tổ chức và tích hợp có trách nhiệm với dịch vụ AI bên ngoài.",
          stack: ["Django", "MySQL", "Docker", "Stripe", "REST API Integration", "Server-rendered Templates", "AI Service Integration"],
        },
        {
          slug: "critical-care-ccu-dashboard",
          name: "Bảng điều khiển Phòng CCU",
          category: "Web",
          description: "Hoàn thiện prototype dashboard CCU bằng Flask cho quản lý bệnh nhân, theo dõi encounter, referral dinh dưỡng, báo cáo và phân công dietitian.",
          stack: ["Flask", "MySQL", "SQLAlchemy", "Flask-Migrate", "Flask-Login", "Tailwind CSS", "JavaScript", "Scikit-learn", "SHAP"],
        },
        {
          slug: "vehicle-damage-detection",
          name: "Nhận diện Hư hại Xe cộ",
          category: "AI/ML",
          description: "Huấn luyện mô hình phát hiện hư hại xe cộ dựa trên YOLOv8 sử dụng dữ liệu hình ảnh thu thập qua cào web và dán nhãn thủ công bằng Label Studio.",
          stack: ["YOLOv8", "Python", "Label Studio", "PyTorch"],
        },
      ],
    },
    experience: {
      title: "Kinh nghiệm & Học vấn",
      internshipsTitle: "Kinh nghiệm Thực tập",
      internships: [
        {
          role: "Thực tập sinh Nghiên cứu (Toàn thời gian)",
          company: "Business AI Lab, Đại học Kinh tế Quốc dân (NEU)",
          period: "07/2025 - 01/2026",
          details: [
            "Tiến hành nghiên cứu về Học Máy (ML) tập trung vào phát triển và đánh giá mô hình.",
            "Nâng cao chuyên môn lập trình Python và kỹ năng phân tích định hướng dữ liệu.",
            "Chuẩn bị kỹ năng bình duyệt bài báo học thuật và đóng góp vào các công bố nghiên cứu khoa học trong tương lai cho phòng Lab và nhà trường.",
          ],
        },
        {
          role: "Thực tập sinh Kỹ thuật (Toàn thời gian)",
          company: "Aggregatori Capaci (AC), Văn phòng Hà Nội",
          period: "Tháng 6, 2024 - Tháng 8, 2024",
          details: [
            "Triển khai quy trình thị giác máy tính để kiểm tra hư hại ô tô, phân loại thương hiệu và nhận diện biển số xe.",
            "Tự động hóa thu thập và dán nhãn dữ liệu hình ảnh phục vụ huấn luyện mô hình.",
            "Hỗ trợ triển khai sản phẩm lên production và tích hợp các đường ống AI theo quy trình làm việc Agile.",
          ],
        },
      ],
      educationTitle: "Học vấn",
      educationDegree: "Cử nhân (Danh dự) Khoa học Máy tính (Trí tuệ Nhân tạo)",
      educationSchool: "University of the West of England - Phenikaa Campus",
      educationPeriod: "Dự kiến tốt nghiệp Tháng 5, 2026",
      educationDetails: [
        "GPA (đã xác nhận): 77.45/100 (Phân loại Xuất sắc / Distinction)",
        "Học bổng Dean (50% học phí trong 3 năm)",
        "Môn học liên quan: Trí tuệ Nhân tạo, Học máy, Thuật toán Nâng cao, Phát triển Phần mềm Nâng cao, Kiến trúc Máy tính",
      ],
    },
    skills: {
      title: "Kỹ Năng Kỹ Thuật",
      categories: {
        languages: {
          title: "Ngôn ngữ Lập trình",
          items: ["Python", "C", "SQL", "HTML/CSS", "Kotlin"],
        },
        aiMl: {
          title: "AI & Trí Tuệ Nhân Tạo",
          items: ["TensorFlow", "scikit-learn", "YOLOv8", "RAG", "CNNs", "Học có giám sát", "Đánh giá Mô hình"],
        },
        backend: {
          title: "Backend & Cơ sở Dữ liệu",
          items: ["Flask", "Django", "MySQL", "REST API"],
        },
        tools: {
          title: "Công cụ & Triển khai",
          items: ["Git", "GitHub", "Docker", "Google Colab", "AWS EC2", "ChromaDB"],
        },
      },
    },
    research: {
      title: "Nghiên Cứu Nổi bật",
      paperTitle: "Đánh giá RAG và Đọc Lặp để Hỏi Đáp trên Kho mã nguồn lớn",
      description: "Nghiên cứu các quy trình đánh giá QA so sánh giữa prompt ngữ cảnh dài, RAG tiêu chuẩn và đọc lặp có giới hạn. Thiết kế các thử nghiệm suy giảm ngữ cảnh chứng minh đọc lặp cải thiện độ chính xác trích dẫn so với RAG.",
      readPaper: "Xem Bài báo của Dự án",
      statValue: "60+",
      statLabel: "Kịch bản Hỏi Đáp được Đánh giá",
    },
    awards: {
      title: "Giải Thưởng & Cuộc Thi",
      items: [
        {
          title: "Đang tham gia, Green Intelligence Challenge 2026",
          period: "Đại học Phenikaa, Việt Nam",
          description: "Tham gia với vai trò Trưởng nhóm, Lập trình viên ứng dụng và Trợ lý nghiên cứu trong cuộc thi do Mạng lưới UK-Vietnam EmpowerTNE Network tổ chức. Dẫn dắt phát triển hệ thống đồng hành AI 'Kindy-Mate' nhằm hỗ trợ hình thành thói quen số lành mạnh cho trẻ em.",
          isLive: true,
        },
        {
          title: "Á quân - Future Business Analyst Season 5",
          period: "Đại học RMIT, Việt Nam",
          description: "Vượt qua khoảng 100 đội đăng ký ban đầu; thực hiện đóng góp phần phân tích dữ liệu về rủi ro vỡ nợ (default rate) dựa trên các đặc trưng của khách hàng từ tập dữ liệu ngân hàng do ban tổ chức cung cấp để xây dựng phương án giải quyết tình huống kinh doanh của đội.",
        },
        {
          title: "Giải Nhì - International Student Innovation Challenge 2024",
          period: "Đại học Phenikaa, Việt Nam",
          description: "Tôi đạt Giải Nhì trong lĩnh vực Công nghệ của cuộc thi với dự án Hệ thống Quan sát và Phân tích Phương tiện Thông minh sử dụng thị giác máy tính.",
        },
        {
          title: "Giải thưởng Công nghệ Sáng tạo Toàn cầu - Hội nghị Khởi nghiệp Sinh viên Quốc tế lần thứ 10",
          period: "Đại học Tongmyong, Hàn Quốc",
          description: "Được công nhận cho phần thuyết trình dự án đổi mới sáng tạo dựa trên công nghệ. Dự án đề xuất ý tưởng tích hợp AI vào thiết bị bay không người lái (drone) để phát hiện và tối ưu hóa lộ trình thu gom dọn rác cho một đô thị xanh.",
        },
      ],
    },
    footer: {
      copyright: "© 2026 Bùi Vũ Nhật Minh",
    },
  },
};
