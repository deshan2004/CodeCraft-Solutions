import { useState } from 'react';
import {
  MonitorSmartphone,
  Smartphone,
  Cpu,
  PenTool,
  ChevronRight,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const projectsData = [
  {
    name: "Edu-Connect",
    description: "Educational Learning Management System platform.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://edu-connect-rust-eta.vercel.app",
    isLive: true
  },
  {
    name: "Sky-Drifter",
    description: "High-performance 2D platformer developed using the Phaser 3 game engine.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://deshan2004.github.io/Sky-Drifter/",
    isLive: true
  },
  {
    name: "CineMate",
    description: "A sleek movie & TV show discovery web app with real-time data integration.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://deshan2004.github.io/CineMate/",
    isLive: true
  },
  {
    name: "TailWatch",
    description: "Community-Powered Stray Dog Care & Rabies Prevention platform.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://deshan2004.github.io/TailWatch/",
    isLive: true
  },
  {
    name: "CodePulse",
    description: "Automated Software Quality Assurance Dashboard built with FastAPI, Next.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://code-pulse-jzq7.vercel.app/",
    isLive: true
  },
  {
    name: "Neth-Sawan",
    description: "AI-driven accessibility platform for the hearing impaired.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://neth-sawan.vercel.app",
    isLive: true
  },
  {
    name: "ShelfLife-AI",
    description: "AI-powered retail inventory management system using OCR technology.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://shelf-life-ai.vercel.app/dashboard",
    isLive: true
  },
  {
    name: "ChatBot",
    description: "LearnBot: Desktop-based interactive learning platform.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/ChatBot"
  },
  {
    name: "E-commerce Search Automation",
    description: "Automated UI testing project to verify e-commerce search features.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/E-commerce-Website-Search-Automation"
  },
  {
    name: "Airline-Ticketing-Centre",
    description: "Java-based Airline Ticketing Centre Program.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/Airline-Ticketing-Centre-Program-"
  },
  {
    name: "Ultimate Guessing Game",
    description: "Modular, menu-driven Python application featuring multiple guessing games.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://ultimate-guessing-game-python-ufca4jfzddoh3ovzjwg9dm.streamlit.app/",
    isLive: true
  },
  {
    name: "BankAccount Unit Testing",
    description: "Unit testing implementation for a Java BankAccount system.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/BankAccount-Unit-Testing-JUnit"
  },
  {
    name: "Employee Project Management",
    description: "Employee project management system built with PHP.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/employee-project-managment-system"
  },
  {
    name: "Social Media Analysis",
    description: "Statistical analysis of social media addiction among students.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/deshan2004/student-social-media-analysis"
  },
  {
    name: "Kingswood-Connect",
    description: "School networking and community connection platform.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    link: "https://kingswood-connect.vercel.app",
    isLive: true
  }
];

const techCategories = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Vue.js", "TypeScript", "Next.js", "Vite", "Angular", "Tailwind CSS", "Bootstrap"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", ".NET Core", "C#", "Express.js", "Python", "Django", "PHP", "Laravel", "Java", "Spring Boot"]
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Oracle"]
  },
  {
    title: "AI & Machine Learning",
    skills: ["TensorFlow.js", "Web Speech API"]
  },
  {
    title: "QA & Testing Tools",
    skills: ["Software QA", "SQA Testing", "JMeter"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code", "Android Studio", "Postman", "Figma"]
  }
];

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, email, service, message } = formData;

    if (!name || !email || !message) {
      alert('Please fill in all required fields (Name, Email, Message).');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // TODO: Replace with your actual Web3Forms access key
          access_key: "e300e3a7-22a6-4d83-837c-addb91d807d4",
          name: name,
          email: email,
          service: service || 'General',
          message: message,
          subject: `New Inquiry from ${name} - CodeCraft Solutions`,
          from_name: "CodeCraft Website"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', service: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="min-h-screen bg-navy-900 text-gray-100 font-sans selection:bg-cyan-500/30">
      {/* Navigation (Optional but good for a landing page) */}
      <nav className="fixed w-full z-50 glass-panel border-b-0 border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded bg-gradient-to-tr from-cyan-400 to-green-400 flex items-center justify-center">
                <span className="font-bold text-navy-900 text-lg">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">CodeCraft <span className="text-cyan-400">Solutions</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#about" className="hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">About</a>
                <a href="#services" className="hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Services</a>
                <a href="#projects" className="hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Projects</a>
                <a href="#contact" className="hover:text-cyan-400 transition-colors px-3 py-2 text-sm font-medium">Contact</a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 focus:outline-none p-2 transition-colors">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-900/95 backdrop-blur-xl border-b border-gray-800 shadow-xl shadow-cyan-900/10">
            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <a href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all rounded-lg px-4 py-3 text-base font-medium">About</a>
              <a href="#services" onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all rounded-lg px-4 py-3 text-base font-medium">Services</a>
              <a href="#projects" onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all rounded-lg px-4 py-3 text-base font-medium">Projects</a>
              <a href="#contact" onClick={toggleMenu} className="text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-all rounded-lg px-4 py-3 text-base font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-200">Modern Web</span> & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">Mobile Solutions</span> For Your Business
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            We transform your innovative ideas into powerful, high-performing websites and mobile applications tailored to drive your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a href="#contact" className="px-8 py-4 rounded-lg font-bold text-navy-900 bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] flex items-center justify-center group">
              Get a Free Quote
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://deshansiriwardhana.me/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-lg font-bold text-white border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 glass-panel flex items-center justify-center">
              View My Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* 1.5 Stats Section */}
      <section className="py-10 border-y border-gray-800 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400 mb-2">15+</h3>
              <p className="text-gray-400 font-medium">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-green-400 mb-2">2+</h3>
              <p className="text-gray-400 font-medium">Years Experience</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-cyan-400 mb-2">100%</h3>
              <p className="text-gray-400 font-medium">Client Satisfaction</p>
            </div>
            <div>
              <h3 className="text-4xl font-extrabold text-green-400 mb-2">24/7</h3>
              <p className="text-gray-400 font-medium">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Us Section */}
      <section id="about" className="py-20 bg-navy-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Who <span className="text-cyan-400">We Are</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 leading-relaxed">
                At CodeCraft Solutions, we are a passionate technology agency committed to delivering cutting-edge digital experiences. We specialize in full-stack web application development, custom mobile app solutions, and robust enterprise software designed to scale your business.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-green-500/10 rounded-2xl transform rotate-3 scale-105 blur-sm"></div>
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="rounded-2xl shadow-2xl relative z-10 border border-gray-700 object-cover aspect-video" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our <span className="text-green-400">Services</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 */}
            <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-cyan-500/50">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <MonitorSmartphone className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Full-Stack Web Development</h3>
              <p className="text-gray-400">Custom, responsive web applications built with modern frameworks for optimal performance.</p>
            </div>

            {/* Service 2 */}
            <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50">
              <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <Smartphone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Mobile App Development</h3>
              <p className="text-gray-400">iOS and Android native-performing applications that offer seamless user experiences.</p>
            </div>

            {/* Service 3 */}
            <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-cyan-500/50">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <Cpu className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Custom Software & AI</h3>
              <p className="text-gray-400">Enterprise portals, inventory tracking, and smart system integrations to automate your workflow.</p>
            </div>

            {/* Service 4 */}
            <div className="glass-panel p-8 rounded-xl hover:-translate-y-2 transition-all duration-300 group hover:border-green-500/50">
              <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <PenTool className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">UI/UX & QA</h3>
              <p className="text-gray-400">Sleek visual designs and rigorous automated testing ensuring flawless digital products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Tech Stack */}
      <section className="py-20 relative bg-navy-800/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My <span className="text-cyan-400">Tech Stack</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {techCategories.map((category, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-xl border-gray-700 hover:border-cyan-500/30 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-3">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-navy-900/50 rounded-md text-sm text-cyan-200 border border-cyan-500/20 hover:border-cyan-400 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Projects */}
      <section id="projects" className="py-24 bg-navy-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured <span className="text-cyan-400">Projects</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {(showAllProjects ? projectsData : projectsData.slice(0, 4)).map((project, index) => (
              <a key={index} href={project.link} target="_blank" rel="noopener noreferrer" className="block group relative rounded-xl overflow-hidden glass-panel border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="aspect-video w-full overflow-hidden bg-gray-800 relative">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-80"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="bg-navy-900/80 p-2 rounded-full border border-gray-600 group-hover:border-cyan-400 group-hover:text-cyan-400 text-gray-400 transition-all shrink-0 ml-4">
                    {project.isLive ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="px-8 py-3 rounded-full font-bold text-white border border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300 flex items-center"
            >
              {showAllProjects ? (
                <>Show Less <ChevronUp className="ml-2 w-5 h-5" /></>
              ) : (
                <>Show More ({projectsData.length - 4} more) <ChevronDown className="ml-2 w-5 h-5" /></>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 4.5 Service Packages */}
      <section className="py-24 relative bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Service <span className="text-cyan-400">Packages</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">Flexible solutions tailored to your business needs.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Starter Package */}
            <div className="glass-panel p-8 rounded-2xl border-gray-700 hover:border-cyan-500/50 transition-all duration-300 relative flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 mb-6">Perfect for small businesses and personal portfolios.</p>
              <div className="mb-4 flex items-end">
                <span className="text-gray-400 mr-2 mb-1">From</span>
                <span className="text-3xl font-extrabold text-cyan-400">Rs. 15,000</span>
              </div>
              <p className="text-sm text-cyan-400 mb-6 font-medium">Custom Quote available</p>
              <ul className="space-y-4 mb-8 flex-grow text-gray-300">
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Single Page / Landing Page</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Responsive UI Design</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Contact Form Integration</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Basic SEO Optimization</li>
              </ul>
              <a href="#contact" className="w-full py-3 rounded-lg font-bold text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-navy-900 transition-all">Let's Discuss</a>
            </div>

            {/* Professional Package */}
            <div className="glass-panel p-8 rounded-2xl border-cyan-500/50 hover:border-cyan-400 transition-all duration-300 relative flex flex-col transform md:-translate-y-4 shadow-[0_0_30px_rgba(34,211,238,0.15)] bg-cyan-900/10">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400 to-green-400 text-navy-900 px-4 py-1 rounded-full text-sm font-bold tracking-wider">RECOMMENDED</div>
              <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-400 mb-6">Ideal for growing companies needing dynamic features.</p>
              <div className="mb-4 flex items-end">
                <span className="text-gray-400 mr-2 mb-1">From</span>
                <span className="text-3xl font-extrabold text-cyan-400">Rs. 50,000</span>
              </div>
              <p className="text-sm text-cyan-400 mb-6 font-medium">Custom Quote available</p>
              <ul className="space-y-4 mb-8 flex-grow text-gray-300">
                <li className="flex items-center text-sm font-semibold text-white mb-2 pb-2 border-b border-gray-700">Everything in Starter, plus:</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Multi-page Web Application</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Custom Admin Dashboard</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Database Integration</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> User Authentication</li>
              </ul>
              <a href="#contact" className="w-full py-3 rounded-lg font-bold text-center bg-cyan-400 text-navy-900 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)]">Let's Discuss</a>
            </div>

            {/* Enterprise Package */}
            <div className="glass-panel p-8 rounded-2xl border-gray-700 hover:border-green-500/50 transition-all duration-300 relative flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large scale systems and mobile applications.</p>
              <div className="mb-4 flex items-end">
                <span className="text-gray-400 mr-2 mb-1">From</span>
                <span className="text-3xl font-extrabold text-green-400">Rs. 150,000</span>
              </div>
              <p className="text-sm text-green-400 mb-6 font-medium">Custom Quote available</p>
              <ul className="space-y-4 mb-8 flex-grow text-gray-300">
                <li className="flex items-center text-sm font-semibold text-white mb-2 pb-2 border-b border-gray-700">Everything in Professional, plus:</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> iOS & Android Mobile Apps</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> AI & Machine Learning</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> Advanced Security & QA</li>
                <li className="flex items-center"><ChevronRight className="w-5 h-5 text-green-400 mr-2 shrink-0" /> 24/7 Priority Support</li>
              </ul>
              <a href="#contact" className="w-full py-3 rounded-lg font-bold text-center border border-green-400 text-green-400 hover:bg-green-400 hover:text-navy-900 transition-all">Let's Discuss</a>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-navy-800/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Client <span className="text-green-400">Testimonials</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-400 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { text: "Outstanding quality and fast delivery. The web app exceeded all our expectations!", author: "Sarah Jenkins", role: "Startup Founder" },
              { text: "Very professional and communicative throughout the entire process. Highly recommended.", author: "David Chen", role: "Product Manager" },
              { text: "Transformed our ideas into a beautiful, scalable solution. Will definitely work together again.", author: "Amanda Silva", role: "Creative Director" }
            ].map((testimonial, i) => (
              <div key={i} className="glass-panel p-8 rounded-2xl relative border-gray-700 hover:border-green-500/50 transition-all duration-300">
                <svg className="w-10 h-10 text-gray-700 absolute top-6 right-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                <p className="text-gray-300 italic mb-6 relative z-10">"{testimonial.text}"</p>
                <div>
                  <h4 className="text-white font-bold">{testimonial.author}</h4>
                  <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked <span className="text-cyan-400">Questions</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto rounded-full"></div>
          </div>
          <div className="space-y-6">
            {[
              { q: "What is your typical project timeline?", a: "Project timelines vary depending on complexity, but typically a standard web application takes between 2 to 6 weeks from initial consultation to final delivery." },
              { q: "Do you provide ongoing support after deployment?", a: "Yes! We offer maintenance packages to ensure your application remains secure, up-to-date, and continues to perform optimally." },
              { q: "How do we get started?", a: "Simply fill out the contact form below with your project details, and we will get back to you within 24 hours to schedule a free consultation." }
            ].map((faq, i) => (
              <div key={i} className="glass-panel p-6 rounded-xl border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <h4 className="text-lg font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Footer & Contact */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16">

            {/* Contact Details */}
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white">Let's <span className="text-cyan-400">Talk</span></h2>
              <p className="text-gray-400 mb-10 text-lg">
                Ready to transform your ideas into reality? Get in touch with us to discuss your next big project.
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 border border-gray-700">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Email Us</h4>
                    <a href="mailto:codecraftsolutionslk@gmail.com" className="text-lg text-white hover:text-cyan-400 transition-colors">hello@codecraftsolutions.lk</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mr-4 border border-gray-700">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold">Location</h4>
                    <p className="text-lg text-white">Malabe, Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {/* LinkedIn */}
                  <a href="https://linkedin.com/in/deshan-siriwardhana-591763277" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all" title="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com/deshan2004" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(255,255,255,0.2)] transition-all" title="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                  {/* Portfolio */}
                  <a href="https://deshansiriwardhana.me" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-400 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(74,222,128,0.4)] transition-all" title="Portfolio">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </a>
                  {/* WhatsApp */}
                  <a href="https://wa.me/94781776315" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-green-500 hover:bg-gray-700 hover:shadow-[0_0_10px_rgba(34,197,94,0.4)] transition-all" title="WhatsApp">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-panel p-8 md:p-10 rounded-2xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name *</label>
                  <input type="text" id="name" value={formData.name} onChange={handleInputChange} required className="w-full bg-navy-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email *</label>
                  <input type="email" id="email" value={formData.email} onChange={handleInputChange} required className="w-full bg-navy-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">Service Needed</label>
                  <select id="service" value={formData.service} onChange={handleInputChange} className="w-full bg-navy-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all appearance-none">
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App</option>
                    <option value="Custom Software">Custom Software</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message *</label>
                  <textarea id="message" value={formData.message} onChange={handleInputChange} required rows={4} className="w-full bg-navy-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-500 hover:bg-cyan-400 text-navy-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center">
                    Something went wrong. Did you add your Web3Forms Access Key in the code?
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CodeCraft Solutions. All rights reserved.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
