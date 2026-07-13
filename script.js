const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const progress = document.getElementById("scrollProgress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const width = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${width}%`;
});


const translations = {
  vi: {
    "nav.about": "Giới thiệu",
    "nav.experience": "Kinh nghiệm",
    "nav.skills": "Kỹ năng",
    "nav.education": "Học vấn",
    "nav.contact": "Liên hệ",
    "hero.role": "IT Support · Technical Support · Software Engineering",
    "hero.description": "Tôi có kinh nghiệm hỗ trợ kỹ thuật, xử lý sự cố Internet, Camera, Truyền hình FPT, quản trị website WordPress, xây dựng thư mời điện tử bằng HTML/CSS và phối hợp cùng các team Social, Design, Content trong môi trường doanh nghiệp.",
    "hero.viewExperience": "Kinh nghiệm",
    "hero.sendEmail": "Gửi email",
    "hero.location": "Phường Tân Sơn Nhì, HCM",
    "hero.available": "Sẵn sàng cho cơ hội mới",
    "about.title": "Mục tiêu nghề nghiệp",
    "about.shortTitle": "Mục tiêu ngắn hạn",
    "about.shortText": "Ứng dụng kiến thức và kỹ năng đã tích lũy để đóng góp xử lý công việc, mang lại kết quả cho công ty, không ngừng học hỏi, nâng cao năng lực và phát triển chuyên môn nghiệp vụ.",
    "about.longTitle": "Mục tiêu dài hạn",
    "about.longText": "Đồng hành lâu dài cùng sự phát triển của công ty, cống hiến tối đa năng lực, xây dựng giá trị bền vững, hoàn thành mục tiêu chung và mang lại giá trị cho tập thể.",
    "about.personalTitle": "Thông tin cá nhân",
    "about.birth": "Ngày sinh",
    "about.address": "Địa chỉ",
    "about.majorLabel": "Chuyên ngành",
    "about.major": "Công nghệ Phần mềm",
    "experience.title": "Kinh nghiệm làm việc",
    "experience.fptRole": "Technical Support FPT Telecom",
    "experience.fpt1": "Hỗ trợ khách hàng xử lý các vấn đề kỹ thuật liên quan đến Internet, Camera và Truyền hình FPT.",
    "experience.fpt2": "Tiếp nhận yêu cầu qua hotline 19006600, kênh chat và các phương tiện truyền thông.",
    "experience.fpt3": "Cung cấp thông tin sản phẩm và chính sách dịch vụ của FPT Telecom.",
    "experience.fpt4": "Tiếp nhận, phân loại và chuyển yêu cầu đến đơn vị liên quan khi cần thiết.",
    "experience.fpt5": "Xử lý khoảng 120–150 case mỗi ngày.",
    "experience.fpt6": "Giải đáp thắc mắc, xử lý tình huống khéo léo và mang lại trải nghiệm tích cực cho khách hàng.",
    "experience.idgRole": "Nhân viên IT · IT Support",
    "experience.idg1": "Tham gia các dự án: World Mobile Broadband, Cloud & AI Summit, Digital Government, Vietnam Retail Banking Forum, Financial Services Forum và Tektalk.",
    "experience.idg2": "Tìm kiếm, chọn lọc, rà soát và thống kê hồ sơ doanh nghiệp và ứng viên.",
    "experience.idg3": "Quản trị website WordPress và cập nhật thông tin thường xuyên.",
    "experience.idg4": "Viết thư mời điện tử bằng HTML và CSS.",
    "experience.idg5": "Gửi thư mời điện tử qua hệ thống VietGuys.",
    "experience.idg6": "Hỗ trợ thiết bị điện tử, máy tính và xử lý sự cố nội bộ.",
    "experience.idg7": "Phối hợp hỗ trợ Team Social, Design và Content.",
    "experience.internRole": "Thực tập sinh Nhân viên IT",
    "experience.intern1": "Hỗ trợ công việc IT nội bộ và xử lý các yêu cầu kỹ thuật cơ bản.",
    "experience.intern2": "Làm quen với quy trình quản trị website và hỗ trợ sự kiện công nghệ.",
    "experience.intern3": "Phối hợp với các phòng ban trong quá trình triển khai công việc.",
    "skills.title": "Kỹ năng chuyên môn",
    "education.eyebrow": "HỌC VẤN",
    "education.title": "Học vấn & Chứng chỉ",
    "education.school": "Đại học Ngoại ngữ và Tin học TP.HCM",
    "education.major": "Chuyên ngành Công nghệ Phần mềm",
    "education.gpaLabel": "GPA / 10",
    "education.projectsLabel": "ĐỒ ÁN",
    "education.scholarshipValue": "Học bổng",
    "education.scholarshipLabel": "Đạt loại giỏi năm 4",
    "education.projectsText": "Các đồ án gồm Cơ sở dữ liệu, Lập trình Web, Lập trình Mobile, Thiết kế giao diện, Kiểm thử phần mềm và Công nghệ Phần mềm.",
    "education.toeicIssuer": "Cấp bởi IIG Việt Nam",
    "education.goodStudentTitle": "Sinh viên giỏi",
    "education.goodStudentText": "Chứng nhận sinh viên giỏi khóa 2023–2024",
    "education.internshipTitle": "Chứng nhận thực tập",
    "education.internshipText": "Chứng nhận thực tập tại IDG Việt Nam",
    "education.clubTitle": "Hoạt động câu lạc bộ",
    "education.clubText": "Tổ chức sự kiện về code và các buổi hội thảo công nghệ.",
    "contact.title": "Sẵn sàng cho cơ hội mới trong lĩnh vực IT.",
    "contact.text": "Tôi mong muốn được làm việc trong môi trường chuyên nghiệp, nơi có thể tiếp tục phát triển kỹ năng và đóng góp vào hiệu quả vận hành của doanh nghiệp.",

    "hero.viewCv": "Xem CV bản cứng",
    "hero.intro": "Xin chào, Tôi là",
    "hero.iAm": "Tôi là",
    "experience.eyebrow": "CHẶNG ĐƯỜNG PHÁT TRIỂN",
    "experience.viewDetails": "Xem chi tiết",
    "skills.eyebrow": "KỸ NĂNG",
    "skills.frontend": "Frontend & Backend",
    "skills.support": "IT Helpdesk / Support",
    "skills.office": "Office & Thiết kế",
    "skills.soft": "Kỹ năng mềm",
    "skills.language": "Ngôn ngữ",
    "skills.troubleshooting": "Xử lý sự cố",
    "skills.selfLearning": "Kỹ năng tự học",
    "skills.teamwork": "Kỹ năng làm việc nhóm",
    "skills.communication": "Kỹ năng giao tiếp",
    "skills.timeManagement": "Quản lý thời gian",
    "skills.problemSolving": "Giải quyết vấn đề",
    "skills.organization": "Tổ chức công việc",
    "skills.vietnamese": "Tiếng Việt",
    "skills.english": "Tiếng Anh cơ bản",
    "cv.eyebrow": "TẢI TÀI LIỆU",
    "cv.title": "Xem trực tiếp Hồ sơ PDF",
    "cv.printQuestion": "Bạn muốn lưu giữ bản in?",
    "cv.description1": "Bên cạnh phiên bản danh thiếp web trực quan, bạn có thể xem bản xem trước trực tiếp của CV bản in định dạng A4 bên phải.",
    "cv.description2": "Hãy nhấn vào nút “Xem toàn màn hình” hoặc “Tải tệp PDF” để nhận tệp CV chính thức và lưu trữ hoặc gửi tới nhà tuyển dụng.",
    "cv.fullscreen": "Xem toàn màn hình",
    "cv.downloadFile": "Tải tệp PDF",
    "cv.heading": "Xem hoặc tải CV",
    "cv.text": "Bạn có thể xem trực tiếp CV bản PDF hoặc tải về thiết bị.",
    "cv.open": "Mở CV",
    "cv.download": "Tải CV về",
  },
  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.role": "IT Support · Technical Support · Software Engineering",
    "hero.description": "I have experience in technical support, troubleshooting Internet, Camera and FPT Television services, managing WordPress websites, creating electronic invitations with HTML/CSS, and collaborating with Social, Design and Content teams in a corporate environment.",
    "hero.viewExperience": "View experience",
    "hero.sendEmail": "Send email",
    "hero.location": "Tan Son Nhat Ward, Ho Chi Minh City",
    "hero.available": "Available for new opportunities",
    "about.title": "Career objectives",
    "about.shortTitle": "Short-term objective",
    "about.shortText": "Apply my accumulated knowledge and skills to solve tasks effectively, contribute meaningful results to the company, continuously learn, improve my capabilities and strengthen my professional expertise.",
    "about.longTitle": "Long-term objective",
    "about.longText": "Grow together with the company over the long term, contribute my best abilities, create sustainable value, achieve shared goals and deliver value to the organization.",
    "about.personalTitle": "Personal information",
    "about.birth": "Date of birth",
    "about.address": "Address",
    "about.majorLabel": "Major",
    "about.major": "Software Engineering",
    "experience.title": "Work experience",
    "experience.fptRole": "Technical Support · FPT Telecom",
    "experience.fpt1": "Supported customers in resolving technical issues related to Internet, Camera and FPT Television services.",
    "experience.fpt2": "Received customer requests through the 19006600 hotline, live chat and online communication channels.",
    "experience.fpt3": "Provided customers with product information and FPT Telecom service policies.",
    "experience.fpt4": "Received, categorized and escalated requests to relevant departments when necessary.",
    "experience.fpt5": "Handled approximately 120–150 cases per day.",
    "experience.fpt6": "Answered customer questions, handled situations tactfully and delivered a positive service experience.",
    "experience.idgRole": "IT Staff · IT Support",
    "experience.idg1": "Participated in projects including World Mobile Broadband, Cloud & AI Summit, Digital Government, Vietnam Retail Banking Forum, Financial Services Forum and Tektalk.",
    "experience.idg2": "Searched, selected, reviewed and compiled business and candidate records.",
    "experience.idg3": "Managed the company WordPress website and updated content regularly.",
    "experience.idg4": "Created electronic invitations using HTML and CSS.",
    "experience.idg5": "Sent electronic invitations through the VietGuys platform.",
    "experience.idg6": "Supported electronic equipment, computers and internal troubleshooting.",
    "experience.idg7": "Collaborated with the Social, Design and Content teams.",
    "experience.internRole": "IT Intern",
    "experience.intern1": "Supported internal IT operations and handled basic technical requests.",
    "experience.intern2": "Gained experience with website administration workflows and technology event support.",
    "experience.intern3": "Collaborated with different departments during task implementation.",
    "skills.title": "Professional skills",
    "skills.eyebrow": "SKILLS",
    "experience.eyebrow": "DEVELOPMENT JOURNEY",
    "education.title": "Education & Certifications",
    "education.eyebrow": "EDUCATION",
    "education.school": "Ho Chi Minh City University of Foreign Languages and Information Technology – HUFLIT",
    "education.major": "Major in Software Engineering",
    "education.gpaLabel": "GPA / 10",
  "education.projectsLabel": "PROJECTS",
    "education.scholarshipValue": "Scholarship",
    "education.scholarshipLabel": "Excellent classification in the fourth year",
    "education.projectsText": "Projects included Database Systems, Web Development, Mobile Development, User Interface Design, Software Testing and Software Engineering.",
    "education.toeicIssuer": "Issued by IIG Vietnam",
    "education.goodStudentTitle": "Scholarship",
    "education.goodStudentText": "Excellent Student Certificate for the 2023–2024 academic year",
    "education.internshipTitle": "Internship Recognition",
    "education.internshipText": "Internship recognition from IDG Vietnam",
    "education.clubTitle": "Club Activities",
    "education.clubText": "Organized coding events and technology workshops.",
    "contact.title": "Ready for new opportunities in IT.",
    "contact.text": "I am looking for a professional working environment where I can continue developing my skills and contribute to efficient business operations.",

    "hero.viewCv": "View full CV",
    "hero.intro": "Hello, I am",
    "hero.iAm": "I am",
    "experience.eyebrow": "DEVELOPMENT JOURNEY",
    "experience.viewDetails": "View details",
    "skills.frontend": "Frontend & Backend",
    "skills.support": "IT Helpdesk / Support",
    "skills.office": "Office & Design",
    "skills.soft": "Soft skills",
    "skills.language": "Languages",
    "skills.troubleshooting": "Troubleshooting",
    "skills.selfLearning": "Self-learning",
    "skills.teamwork": "Teamwork",
    "skills.communication": "Communication",
    "skills.timeManagement": "Time management",
    "skills.problemSolving": "Problem solving",
    "skills.organization": "Work organization",
    "skills.vietnamese": "Vietnamese",
    "skills.english": "Basic English",
    "cv.eyebrow": "DOWNLOAD DOCUMENT",
    "cv.title": "View PDF Resume Directly",
    "cv.printQuestion": "Would you like to keep a printable copy?",
    "cv.description1": "Alongside the visual web portfolio, you can preview the A4 printable CV directly on the right.",
    "cv.description2": "Select “View Full Screen” or “Download PDF” to access the official CV for storage or sending to recruiters.",
    "cv.fullscreen": "View Full Screen",
    "cv.downloadFile": "Download PDF",
    "cv.heading": "View or download CV",
    "cv.text": "You can view the PDF CV directly or download it to your device.",
    "cv.open": "Open CV",
    "cv.download": "Download CV",
  }
};

const languageToggle = document.getElementById("languageToggle");
let currentLanguage = localStorage.getItem("portfolioLanguage") || "vi";

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  localStorage.setItem("portfolioLanguage", language);

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;
    const translatedText = translations[language]?.[key];

    if (translatedText) {
      element.textContent = translatedText;
      element.classList.remove("i18n-fade");
      void element.offsetWidth;
      element.classList.add("i18n-fade");
    }
  });

  document.querySelectorAll("[data-lang-option]").forEach(option => {
    option.classList.toggle("active", option.dataset.langOption === language);
  });

  menuBtn.setAttribute(
    "aria-label",
    language === "vi" ? "Mở menu" : "Open menu"
  );

  document.title =
    language === "vi"
      ? "Phạm Tấn Hưng | IT Support Portfolio"
      : "Pham Tan Hung | IT Support Portfolio";
}

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "vi" ? "en" : "vi");
});

applyLanguage(currentLanguage);


// Experience modal data
const experienceData = {
  fpt: {
    company: "FPT TELECOM",
    roleVi: "Technical Support FPT Telecom",
    roleEn: "Technical Support · FPT Telecom",
    period: "03/2025 — 03/2026",
    vi: [
      "Hỗ trợ khách hàng xử lý các vấn đề kỹ thuật liên quan đến Internet, Camera và Truyền hình FPT.",
      "Tiếp nhận yêu cầu qua hotline 19006600, kênh chat và các phương tiện truyền thông.",
      "Cung cấp thông tin sản phẩm và chính sách dịch vụ của FPT Telecom.",
      "Tiếp nhận, phân loại và chuyển yêu cầu đến đơn vị liên quan khi cần thiết.",
      "Xử lý khoảng 120–150 case mỗi ngày.",
      "Giải đáp thắc mắc, xử lý tình huống khéo léo và mang lại trải nghiệm tích cực cho khách hàng."
    ],
    en: [
      "Supported customers with technical issues related to Internet, Camera and FPT Television services.",
      "Received requests through hotline 19006600, live chat and digital communication channels.",
      "Provided information about products and FPT Telecom service policies.",
      "Categorized and escalated requests to relevant departments when necessary.",
      "Handled approximately 120–150 cases per day.",
      "Resolved customer concerns tactfully and delivered a positive service experience."
    ]
  },
  idg: {
    company: "IDG VIỆT NAM",
    roleVi: "Nhân viên IT · IT Support",
    roleEn: "IT Staff · IT Support",
    period: "11/2023 — 11/2024",
    vi: [
      "Tham gia các dự án World Mobile Broadband, Cloud & AI Summit, Digital Government, Vietnam Retail Banking Forum, Financial Services Forum và Tektalk.",
      "Tìm kiếm, chọn lọc, rà soát và thống kê hồ sơ doanh nghiệp và ứng viên.",
      "Quản trị website WordPress và cập nhật thông tin thường xuyên.",
      "Viết thư mời điện tử bằng HTML và CSS.",
      "Gửi thư mời điện tử qua hệ thống VietGuys.",
      "Hỗ trợ thiết bị điện tử, máy tính và xử lý sự cố nội bộ.",
      "Phối hợp hỗ trợ Team Social, Design và Content."
    ],
    en: [
      "Participated in World Mobile Broadband, Cloud & AI Summit, Digital Government, Vietnam Retail Banking Forum, Financial Services Forum and Tektalk.",
      "Searched, selected, reviewed and compiled company and candidate records.",
      "Managed the company WordPress website and updated content regularly.",
      "Created electronic invitations using HTML and CSS.",
      "Sent electronic invitations through the VietGuys platform.",
      "Supported computers, electronic equipment and internal troubleshooting.",
      "Collaborated with Social, Design and Content teams."
    ]
  },
  intern: {
    company: "IDG VIỆT NAM",
    roleVi: "Thực tập sinh Nhân viên IT",
    roleEn: "IT Intern",
    period: "07/2023 — 10/2023",
    vi: [
      "Hỗ trợ công việc IT nội bộ và xử lý các yêu cầu kỹ thuật cơ bản.",
      "Làm quen với quy trình quản trị website và hỗ trợ sự kiện công nghệ.",
      "Phối hợp với các phòng ban trong quá trình triển khai công việc."
    ],
    en: [
      "Supported internal IT operations and basic technical requests.",
      "Learned website administration workflows and supported technology events.",
      "Collaborated with departments during task implementation."
    ]
  }
};

const experienceModal = document.getElementById("experienceModal");
const modalClose = document.getElementById("modalClose");
const modalCompany = document.getElementById("experienceModalCompany");
const modalTitle = document.getElementById("experienceModalTitle");
const modalPeriod = document.getElementById("experienceModalPeriod");
const modalList = document.getElementById("experienceModalList");

function openExperienceModal(key) {
  const data = experienceData[key];
  if (!data) return;

  const lang = currentLanguage || "vi";
  modalCompany.textContent = data.company;
  modalTitle.textContent = lang === "vi" ? data.roleVi : data.roleEn;
  modalPeriod.textContent = data.period;
  modalList.innerHTML = "";

  data[lang].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalList.appendChild(li);
  });

  experienceModal.classList.add("open");
  experienceModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeExperienceModal() {
  experienceModal.classList.remove("open");
  experienceModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll("[data-experience]").forEach(node => {
  node.addEventListener("click", () => openExperienceModal(node.dataset.experience));
});

modalClose.addEventListener("click", closeExperienceModal);
document.querySelectorAll("[data-close-modal]").forEach(el => {
  el.addEventListener("click", closeExperienceModal);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeExperienceModal();
});

// Skills category tabs
document.querySelectorAll("[data-skill-tab]").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll("[data-skill-tab]").forEach(item => item.classList.remove("active"));
    document.querySelectorAll("[data-skill-panel]").forEach(panel => panel.classList.remove("active"));

    tab.classList.add("active");
    const panel = document.querySelector(`[data-skill-panel="${tab.dataset.skillTab}"]`);
    if (panel) panel.classList.add("active");
  });
});


// Bilingual looping job-title typing effect
const jobTypingText = document.getElementById("jobTypingText");

const jobTitles = {
  vi: [
    "Nhân viên IT Helpdesk",
    "Nhân viên IT Support",
    "Nhân viên Technical Support",
    "Lập trình viên Frontend",
    "Kỹ sư Công nghệ Phần mềm"
  ],
  en: [
    "an IT Helpdesk",
    "an IT Support",
    "a Technical Support Specialist",
    "a Frontend Developer",
    "a Software Engineering Graduate"
  ]
};

let jobPhraseIndex = 0;
let jobCharIndex = 0;
let jobDeleting = false;
let jobTypingTimer;

function runJobTyping() {
  const language = currentLanguage || "vi";
  const titles = jobTitles[language];
  const currentTitle = titles[jobPhraseIndex % titles.length];

  if (!jobDeleting) {
    jobTypingText.textContent = currentTitle.slice(0, jobCharIndex);
    jobCharIndex += 1;
  } else {
    jobTypingText.textContent = currentTitle.slice(0, jobCharIndex);
    jobCharIndex -= 1;
  }

  let delay = jobDeleting ? 38 : 72;

  if (!jobDeleting && jobCharIndex > currentTitle.length) {
    jobDeleting = true;
    delay = 1200;
  } else if (jobDeleting && jobCharIndex < 0) {
    jobDeleting = false;
    jobPhraseIndex = (jobPhraseIndex + 1) % titles.length;
    jobCharIndex = 0;
    delay = 280;
  }

  jobTypingTimer = window.setTimeout(runJobTyping, delay);
}

function restartJobTyping() {
  window.clearTimeout(jobTypingTimer);
  jobPhraseIndex = 0;
  jobCharIndex = 0;
  jobDeleting = false;
  jobTypingText.textContent = "";
  runJobTyping();
}

restartJobTyping();

// Restart typing immediately when VI/EN changes.
languageToggle.addEventListener("click", () => {
  window.setTimeout(restartJobTyping, 0);
});
