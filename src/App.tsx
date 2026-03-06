import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, Plus, Minus, Github, Twitter, Linkedin, ExternalLink, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['홈', '블로그', '포트폴리오', 'AI 프롬프트', '추천 사이트', 'FAQ'];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-extrabold text-2xl tracking-tighter text-gray-900">ZENTO</div>
        <nav className="hidden md:flex space-x-10">
          {links.map((link) => (
            <a key={link} href={`#${link}`} className="nav-link text-base font-bold">
              {link}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden p-2 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="text-gray-600 font-bold text-lg hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="홈" className="relative min-h-screen flex items-center justify-center bg-mesh pt-20 overflow-hidden">
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl font-extrabold text-gray-900 tracking-tight mb-6"
        >
          ZENTO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-3xl font-medium text-gray-700 mb-12"
        >
          From Zero to One - Creating something from nothing
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-xl hover:bg-gray-800 transition-colors"
        >
          프로젝트 문의하기
        </motion.button>
      </div>
    </section>
  );
};

const Card = ({ title, summary, image, type }: { key?: React.Key, title: React.ReactNode, summary?: string, image: string, type: 'blog' | 'portfolio' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 cursor-pointer"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          style={{ filter: 'grayscale(85%) contrast(90%) brightness(105%) sepia(10%)' }}
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-8">
        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-3">{title}</h3>
        {type === 'blog' && summary && <p className="text-gray-500 mb-6 line-clamp-2">{summary}</p>}
        <div className="flex justify-end mt-4">
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-900 transition-colors duration-300">
            <ArrowRight className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  const posts = [
    { title: <>AI 시대의 기획자<br />생존 전략</>, summary: "생성형 AI가 가져온 변화 속에서 기획자는 어떤 역량을 길러야 할까요? 3가지 핵심 전략을 알아봅니다.", image: "https://picsum.photos/seed/minimal_ai/800/600" },
    { title: "Zero to One: 무에서 유를 창조하는 과정", summary: "아이디어를 실제 프로덕트로 만들어내는 A to Z 과정을 상세히 공유합니다.", image: "https://picsum.photos/seed/minimal_startup/800/600" },
    { title: <>효과적인 프롬프트<br />엔지니어링 가이드</>, summary: "원하는 결과물을 정확하게 얻어내기 위한 프롬프트 작성 노하우 대공개.", image: "https://picsum.photos/seed/minimal_tech/800/600" }
  ];

  return (
    <section id="블로그" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">블로그</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Card key={idx} title={post.title} summary={post.summary} image={post.image} type="blog" />
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = [
    { title: "AI 기반 콘텐츠 자동화 플랫폼 기획", image: "https://picsum.photos/seed/minimal_platform/800/600" },
    { title: "스타트업 B2B SaaS 대시보드 리뉴얼", image: "https://picsum.photos/seed/minimal_dashboard/800/600" },
    { title: "개인화 추천 알고리즘 서비스 설계", image: "https://picsum.photos/seed/minimal_algorithm/800/600" }
  ];

  return (
    <section id="포트폴리오" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">포트폴리오</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card key={idx} title={project.title} image={project.image} type="portfolio" />
          ))}
        </div>
      </div>
    </section>
  );
};

const AIPrompts = () => {
  const prompts = [
    "기획서 초안 작성 프롬프트",
    "카피라이팅 아이디어 도출",
    "데이터 분석 및 시각화 요청",
    "코드 리뷰 및 리팩토링",
    "블로그 포스팅 개요 잡기",
    "이메일 커뮤니케이션 템플릿",
    "페르소나 설정 및 지시사항",
    "시장 조사 및 경쟁사 분석"
  ];

  return (
    <section id="AI 프롬프트" className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">AI 프롬프트</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {prompts.map((prompt, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="flex items-center gap-3 bg-gray-50 border border-gray-200 px-6 py-4 rounded-2xl shadow-sm cursor-pointer hover:shadow-md hover:border-gray-400 transition-all"
            >
              <Sparkles className="w-5 h-5 text-gray-700 flex-shrink-0" />
              <span className="font-medium text-gray-800">{prompt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecommendedSites = () => {
  const sites = [
    { name: "Awwwards", desc: "웹 디자인 트렌드 레퍼런스", url: "https://www.awwwards.com" },
    { name: "Mobbin", desc: "모바일 UI 패턴 라이브러리", url: "https://mobbin.com" },
    { name: "Product Hunt", desc: "최신 프로덕트 및 스타트업", url: "https://www.producthunt.com" },
    { name: "Medium", desc: "인사이트가 담긴 아티클", url: "https://medium.com" },
  ];

  return (
    <section id="추천 사이트" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">추천 사이트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sites.map((site, idx) => (
            <motion.a
              key={idx}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -6 }}
              className="block bg-white p-8 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all"
            >
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-6">
                <ExternalLink className="w-7 h-7 text-gray-800" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
              <p className="text-sm text-gray-500">{site.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }: { key?: React.Key, question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-8 text-left focus:outline-none"
      >
        <span className="text-xl font-medium text-gray-900">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? <Minus className="w-6 h-6 text-gray-900" /> : <Plus className="w-6 h-6 text-gray-400" />}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-600 leading-relaxed text-lg">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "어떤 분야의 기획을 주로 하시나요?", a: "IT 서비스, 특히 AI를 활용한 프로덕트 기획과 콘텐츠 전략을 주로 다룹니다. 사용자 경험을 최우선으로 생각하며 문제 해결에 집중합니다." },
    { q: "프로젝트 의뢰는 어떻게 하나요?", a: "상단의 '프로젝트 문의하기' 버튼을 통해 이메일을 남겨주시면, 24시간 이내에 회신해 드립니다." },
    { q: "AI 프롬프트는 어떻게 활용하면 좋나요?", a: "제공된 프롬프트를 복사하여 ChatGPT, Claude 등의 AI 모델에 붙여넣기만 하면 됩니다. 본인의 상황에 맞게 괄호 안의 내용을 수정하여 사용하세요." }
  ];

  return (
    <section id="FAQ" className="py-32 bg-[#F9FAFB]">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center">FAQ</h2>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-3xl font-extrabold text-gray-900 mb-8 md:mb-0">ZENTO</div>
        <div className="flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Twitter className="w-7 h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Github className="w-7 h-7" />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
            <Linkedin className="w-7 h-7" />
          </a>
        </div>
        <div className="mt-8 md:mt-0 text-[#333333] font-medium">
          © {new Date().getFullYear()} ZENTO. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-gray-200 selection:text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Blog />
        <Portfolio />
        <AIPrompts />
        <RecommendedSites />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
