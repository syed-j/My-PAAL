import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, BookOpen, BarChart3, Sparkles, Users, Info } from 'lucide-react';

// Types
type QuizQuestion = {
  type: "mcq";
  question: string;
  options: string[];
  answer: string;
};

type Page = 'home' | 'features' | 'courses' | 'quiz' | 'about' | 'login' | 'signup';

// ============= COMPONENTS =============

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: { currentPage: Page; setCurrentPage: (page: Page) => void }) => (
  <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
          <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">PA</span>
          </div>
          <span className="font-bold text-gray-900">PAAL</span>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => setCurrentPage('home')} className={`text-sm font-medium ${currentPage === 'home' ? 'text-emerald-700' : 'text-gray-600 hover:text-gray-900'}`}>Home</button>
          <button onClick={() => setCurrentPage('features')} className={`text-sm font-medium ${currentPage === 'features' ? 'text-emerald-700' : 'text-gray-600 hover:text-gray-900'}`}>Features</button>
          <button onClick={() => setCurrentPage('courses')} className={`text-sm font-medium ${currentPage === 'courses' ? 'text-emerald-700' : 'text-gray-600 hover:text-gray-900'}`}>Courses</button>
          <button onClick={() => setCurrentPage('quiz')} className={`text-sm font-medium ${currentPage === 'quiz' ? 'text-emerald-700' : 'text-gray-600 hover:text-gray-900'}`}>Quiz Generator</button>
          <button onClick={() => setCurrentPage('about')} className={`text-sm font-medium ${currentPage === 'about' ? 'text-emerald-700' : 'text-gray-600 hover:text-gray-900'}`}>About</button>
        </div>
        
        <div className="flex items-center gap-3">
          <button onClick={() => setCurrentPage('login')} className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg">Login</button>
          <button onClick={() => setCurrentPage('signup')} className="px-4 py-2 text-sm font-medium text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg">Sign Up</button>
        </div>
      </div>
    </div>
  </nav>
);

// Footer Component
const Footer = () => (
  <footer className="bg-emerald-900 text-white py-12 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-emerald-900 font-bold text-sm">PA</span>
            </div>
            <span className="font-bold">PAAL</span>
          </div>
          <p className="text-emerald-100 text-sm">Your AI-powered study partner at USF</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-emerald-100">
            <li>Home</li>
            <li>Features</li>
            <li>Courses</li>
            <li>Help Center</li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-emerald-100">University of South Florida<br/>Tampa, FL<br/>support@paal.ai</p>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-emerald-800 text-sm text-emerald-100 flex justify-between">
        <span>© 2025 PAAL. All rights reserved.</span>
        <div className="flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  </footer>
);

// ============= PAGES =============

// Home Page
const HomePage = ({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) => (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-br from-emerald-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-emerald-900 mb-6">Ace Your USF Classes With AI</h1>
            <p className="text-xl text-gray-600 mb-8">A personalized, promptless study assistant trained on all USF courses.</p>
            <div className="flex gap-4">
              <button onClick={() => setCurrentPage('courses')} className="px-6 py-3 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800">Start Learning</button>
              <button onClick={() => setCurrentPage('quiz')} className="px-6 py-3 border border-emerald-700 text-emerald-700 rounded-lg font-medium hover:bg-emerald-50">Try Demo Quiz</button>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">PAAL Assistant</p>
                <p className="text-sm text-gray-500">Always here to help</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-emerald-700 text-white px-4 py-2 rounded-lg inline-block">Explain recursion in COP 2510</div>
              <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-lg">
                <p className="text-sm mb-3">Recursion is when a function calls itself in COP 2510, you'll use it to solve problems like factorial calculations...</p>
                <button className="bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Generate a practice quiz</button>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Ask me anything about your course...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Features Overview */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Succeed</h2>
          <p className="text-lg text-gray-600">PAAL adapts to your learning style and helps you master every concept.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Concept Help</h3>
            <p className="text-gray-600">Get clear explanations for any topic in your USF courses. No prompting needed—just ask naturally.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Auto-Generated Quizzes</h3>
            <p className="text-gray-600">Practice with AI-generated quizzes tailored to your specific course content and difficulty level.</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Study Dashboard</h3>
            <p className="text-gray-600">Track your progress, identify weak areas, and get personalized study recommendations.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Find Your Course */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Your Course</h2>
          <p className="text-lg text-gray-600">Access AI assistance for hundreds of USF courses</p>
        </div>
        
        <div className="max-w-2xl mx-auto mb-8">
          <input type="text" placeholder="Search USF courses (e.g., COP 2510, MAC 2311)" className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { code: 'COP 2510', name: 'Programming Concepts' },
            { code: 'MAC 2311', name: 'Calculus I' },
            { code: 'BSC 2010', name: 'Biology I' },
            { code: 'CHM 2045', name: 'General Chemistry I' },
            { code: 'ENC 1101', name: 'English Composition I' },
            { code: 'PSY 2012', name: 'Introduction to Psychology' },
            { code: 'MAC 2312', name: 'Calculus II' },
            { code: 'PHY 2048', name: 'General Physics I' }
          ].map((course) => (
            <div key={course.code} className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded mb-2">{course.code}</div>
              <p className="font-medium text-gray-900 text-sm">{course.name}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button onClick={() => setCurrentPage('courses')} className="text-emerald-700 font-medium hover:text-emerald-800">View all courses →</button>
        </div>
      </div>
    </section>

    {/* Practice Makes Perfect */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Practice Makes Perfect</h2>
          <p className="text-lg text-gray-600">Test your knowledge with AI-generated quizzes</p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-xl p-8">
          <div className="inline-block bg-emerald-100 text-emerald-700 text-sm font-semibold px-3 py-1 rounded mb-4">COP 2510 - Question 1 of 5</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">What is recursion in programming?</h3>
          
          <div className="space-y-3 mb-6">
            {[
              'A function that repeats a fixed number of times',
              'A function that calls itself to solve a problem',
              'A function that only works with arrays',
              'A function that cannot return a value'
            ].map((option, idx) => (
              <button key={idx} className={`w-full text-left px-4 py-3 rounded-lg border ${idx === 1 ? 'border-emerald-500 bg-emerald-50' : 'border-gray-300 hover:border-gray-400'}`}>
                {option}
              </button>
            ))}
          </div>
          
          <button onClick={() => setCurrentPage('quiz')} className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800">Generate a Quiz for Your Class</button>
        </div>
      </div>
    </section>
  </div>
);

// Features Page
const FeaturesPage = () => (
  <div>
    <section className="bg-emerald-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Powerful Features for Smarter Learning</h1>
        <p className="text-xl text-emerald-100">Everything you need to excel in your USF courses, powered by advanced AI technology.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Instant Concept Help</h2>
            <p className="text-gray-600 mb-4">Get clear explanations for any topic in your USF courses. No prompting needed—just ask naturally.</p>
            <p className="text-gray-600">Our AI understands context and provides detailed explanations tailored to your course material and learning style.</p>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
            <MessageSquare className="w-32 h-32 text-emerald-200" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center order-2 md:order-1">
            <BookOpen className="w-32 h-32 text-emerald-200" />
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Auto-Generated Quizzes</h2>
            <p className="text-gray-600 mb-4">Practice with AI-generated quizzes tailored to your specific course content and difficulty level.</p>
            <p className="text-gray-600">Configure quiz difficulty, question types (multiple-choice, short answer, true/false), and topics to target your study needs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-emerald-700" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart Study Dashboard</h2>
            <p className="text-gray-600 mb-4">Track your progress, identify weak areas, and get personalized study recommendations.</p>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-semibold text-emerald-700">87%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-emerald-600 h-2 rounded-full" style={{ width: '87%' }}></div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center">
            <BarChart3 className="w-32 h-32 text-emerald-200" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">And So Much More</h2>
          <p className="text-lg text-gray-600">Discover all the tools and features designed to help you succeed.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Sparkles, title: 'Adaptive Learning', desc: 'AI adapts to your learning pace, strengthening weak areas and challenging you where you\'re confident.' },
            { icon: BookOpen, title: 'Focused Study Plans', desc: 'Get personalized study schedules based on your course syllabus and assignments.' },
            { icon: MessageSquare, title: 'Quick Answers', desc: 'Instant responses to your academic questions—just like having a tutor available 24/7.' },
            { icon: BookOpen, title: 'Course Materials', desc: 'Access comprehensive course content and resources in a centralized location.' },
            { icon: BarChart3, title: 'Progress Tracking', desc: 'Monitor your improvement over time with detailed analytics and insights.' },
            { icon: Users, title: 'Collaborative Learning', desc: 'Share study materials and quiz results with classmates for better group learning.' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

// Courses Page
const CoursesPage = () => {
  const [selectedDept, setSelectedDept] = useState('All Courses');
  
  const courses = [
    { code: 'COP 2510', name: 'Programming Concepts', dept: 'Computer Science', desc: 'Introduction to programming using high-level languages. Problem-solving methods and algorithm development.' },
    { code: 'MAC 2311', name: 'Calculus I', dept: 'Mathematics', desc: 'Limits, continuity, derivatives, applications of derivatives, and introduction to integration.' },
    { code: 'BSC 2010', name: 'Biology I', dept: 'Natural Sciences', desc: 'Study of life at the molecular, cellular, organism, and population levels including genetics and evolution.' },
    { code: 'CHM 2045', name: 'General Chemistry I', dept: 'Natural Sciences', desc: 'Fundamental principles, including atomic structure, bonding, and stoichiometry.' },
    { code: 'ENC 1101', name: 'English Composition I', dept: 'Humanities', desc: 'Emphasis on effective writing skills. Expository and essay development.' },
    { code: 'PSY 2012', name: 'Introduction to Psychology', dept: 'Humanities', desc: 'Introduction to methods, including learning, memory, cognition, and social influences.' },
    { code: 'MAC 2312', name: 'Calculus II', dept: 'Mathematics', desc: 'Integration techniques, sequences of functions, parametric equations, polar coordinates.' },
    { code: 'PHY 2048', name: 'General Physics I', dept: 'Natural Sciences', desc: 'Mechanics, wave motion, and thermodynamics using calculus.' },
    { code: 'COP 3514', name: 'Program Design', dept: 'Computer Science', desc: 'Advanced programming concepts, data structures and object-oriented design.' }
  ];

  const departments = ['All Courses', 'Computer Science', 'Mathematics', 'Natural Sciences', 'Humanities', 'Engineering'];

  return (
    <div>
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Browse USF Courses</h1>
          <p className="text-xl text-emerald-100">AI assistance available for 100+ courses across all departments</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <input type="text" placeholder="Search by course code, name, or department..." className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg font-medium text-sm ${selectedDept === dept ? 'bg-emerald-700 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:border-emerald-700'}`}
              >
                {dept} {dept !== 'All Courses' && `(${courses.filter(c => c.dept === dept).length})`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses
              .filter(course => selectedDept === 'All Courses' || course.dept === selectedDept)
              .map((course) => (
                <div key={course.code} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-2 py-1 rounded mb-3">{course.dept}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.code}</h3>
                  <h4 className="text-gray-700 font-medium mb-3">{course.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{course.desc}</p>
                  <button className="w-full bg-emerald-700 text-white py-2 rounded-lg font-medium hover:bg-emerald-800">Start Learning</button>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Quiz Generator Page (with OpenAI integration)
const QuizGeneratorPage = () => {
  const [course, setCourse] = useState("");
  const [chapter, setChapter] = useState("");
  const [topic, setTopic] = useState("");
  const [quiz, setQuiz] = useState<QuizQuestion[] | null>(null);
  const [selected, setSelected] = useState<Record<number, string>>({});
  const [loading, setLoading] = useState<"quiz" | "chat" | null>(null);
  
  // Chat state
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([
    { role: 'assistant', content: 'Hi! I\'m PAAL, your AI study assistant. Ask me anything about your courses, or I can generate a quiz for you!' }
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  // OpenAI API Key
  const OPENAI_API_KEY = "Enter API here";

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Send chat message
  async function sendChatMessage() {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    
    // Check if user is requesting a quiz
    const quizKeywords = ['generate quiz', 'create quiz', 'make quiz', 'quiz me', 'generate a quiz', 'create a quiz'];
    const isQuizRequest = quizKeywords.some(keyword => userMessage.toLowerCase().includes(keyword));
    
    if (isQuizRequest) {
      // Trigger quiz generation instead of regular chat
      generateQuiz(true);
      return;
    }
    
    setLoading("chat");

    try {
      const contextMessage = course || chapter || topic 
        ? `Context: Course: ${course || "N/A"}, Chapter: ${chapter || "N/A"}, Topic: ${topic || "N/A"}\n\n${userMessage}`
        : userMessage;

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4-turbo-preview",
          messages: [
            {
              role: "system",
              content: "You are PAAL (Promptless AI Assisted Learning), a helpful AI tutor for USF students. Explain concepts clearly and provide helpful study guidance. Keep responses concise but informative."
            },
            ...chatMessages.slice(-6),
            { role: "user", content: contextMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content ?? "I'm having trouble responding right now.";
      setChatMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
    } catch (err) {
      console.error(err);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '⚠️ Sorry, I encountered an error. Please try again!' 
      }]);
    } finally {
      setLoading(null);
    }
  }

  async function generateQuiz(fromChat = false) {
    // Only add user request to chat if called from button, not from chat itself
    if (!fromChat) {
      const contextInfo = [course, chapter, topic].filter(Boolean);
      const userMessage = contextInfo.length > 0 
        ? `Generate a quiz for ${contextInfo.join(', ')}`
        : 'Generate a quiz for me';
      
      setChatMessages(prev => [...prev, { 
        role: 'user', 
        content: userMessage 
      }]);
      
      // Add "generating" message
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: '✨ Generating your personalized quiz... This will take just a moment!' 
      }]);
    }
    
    setLoading("quiz");
    setQuiz(null);
    setSelected({});

    const prompt = `You are PAAL, a study assistant for University of South Florida students.

Generate 5 multiple-choice quiz questions on:
Course: ${course || "General Knowledge"}
Chapter: ${chapter || "N/A"}
Topic: ${topic || "N/A"}

ONLY create multiple-choice questions (no short answers).
Each question must have exactly 4 options.

Return ONLY valid JSON (no markdown, no backticks, no explanation)
in this exact format:

{
  "questions": [
    {
      "type": "mcq",
      "question": "Question text",
      "options": ["A) ...", "B) ...", "C) ...", "D) ..."],
      "answer": "B) ..."
    }
  ]
}

"answer" MUST be exactly one of the strings in "options".`;

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4-turbo-preview",
          messages: [{ role: "user", content: prompt }]
        })
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const data = await response.json();
      const text = data.choices[0].message.content ?? "";
      
      // Try to parse JSON, handle markdown code blocks if present
      let parsed;
      try {
        parsed = JSON.parse(text);
      } catch {
        // Remove markdown code blocks if present
        const cleanedText = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
        parsed = JSON.parse(cleanedText);
      }
      
      setQuiz(parsed.questions);
      
      // Update chat with success message
      const contextInfo = [course, chapter, topic].filter(Boolean);
      setChatMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: 'assistant',
          content: `✅ Perfect! I've generated ${parsed.questions.length} questions for you. ${contextInfo.length > 0 ? `They cover ${contextInfo.join(', ')}.` : ''} The quiz is now displayed on the right. Click on any answer to check if it's correct. Good luck! 🎯`
        };
        return newMessages;
      });
    } catch (err) {
      console.error(err);
      
      // Update chat with error message
      setChatMessages(prev => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1] = {
          role: 'assistant',
          content: '⚠️ Sorry, I encountered an error generating the quiz. Please try again or ask me a question instead!'
        };
        return newMessages;
      });
    } finally {
      setLoading(null);
    }
  }

  function handleOptionClick(qIndex: number, option: string) {
    setSelected((prev) => ({
      ...prev,
      [qIndex]: option,
    }));
  }

  function getOptionClass(q: QuizQuestion, qIndex: number, option: string) {
    const chosen = selected[qIndex];
    if (!chosen) return "border-gray-300 hover:border-emerald-500";

    if (option === q.answer && option === chosen) {
      return "border-emerald-600 bg-emerald-50";
    }
    if (option === chosen && option !== q.answer) {
      return "border-red-500 bg-red-50";
    }
    if (option === q.answer) {
      return "border-emerald-400 bg-emerald-50";
    }
    return "border-gray-300";
  }

  return (
    <div>
      <section className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-8 h-8 text-emerald-900" />
          </div>
          <h1 className="text-4xl font-bold mb-4">PAAL AI Assistant</h1>
          <p className="text-xl text-emerald-100">Chat with AI or generate personalized quizzes for any USF course</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Chat Interface */}
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex flex-col" style={{ height: '700px' }}>
              <div className="bg-emerald-700 text-white p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">PAAL Assistant</h3>
                  <p className="text-xs text-emerald-100">Always here to help</p>
                </div>
              </div>

              {/* Course Context Bar */}
              <div className="bg-emerald-50 border-b border-emerald-200 p-3">
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    placeholder="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Chapter"
                    value={chapter}
                    onChange={(e) => setChapter(e.target.value)}
                    className="text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                  <input
                    type="text"
                    placeholder="Topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="text-xs px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                {(course || chapter || topic) && (
                  <p className="text-xs text-emerald-700 mt-2">
                    📚 Context: {[course, chapter, topic].filter(Boolean).join(' • ')}
                  </p>
                )}
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.role === 'user' 
                        ? 'bg-emerald-700 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                {loading === "chat" && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 rounded-lg px-4 py-2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Quick Actions */}
              <div className="border-t border-gray-200 p-3 bg-gray-50">
                <div className="flex gap-2 mb-2">
                  <button
                    onClick={() => generateQuiz(false)}
                    disabled={loading === "quiz"}
                    className="flex-1 text-xs bg-emerald-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-emerald-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {loading === "quiz" ? "Generating..." : "✨ Generate Quiz"}
                  </button>
                  <button
                    onClick={() => {
                      setChatMessages([{ 
                        role: 'assistant', 
                        content: 'Hi! I\'m PAAL, your AI study assistant. Ask me anything about your courses, or I can generate a quiz for you!' 
                      }]);
                      setQuiz(null);
                      setSelected({});
                    }}
                    className="text-xs bg-gray-200 text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-300"
                  >
                    Clear Chat
                  </button>
                </div>
              </div>

              {/* Input */}
              <div className="border-t border-gray-200 p-4">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                    placeholder="Ask me anything or request a quiz..."
                    disabled={loading === "chat"}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 disabled:bg-gray-100"
                  />
                  <button
                    onClick={sendChatMessage}
                    disabled={loading === "chat" || !chatInput.trim()}
                    className="bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Quiz Output */}
            <div className="bg-white border border-gray-200 rounded-xl p-6" style={{ height: '700px', overflowY: 'auto' }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 sticky top-0 bg-white pb-2">
                {loading === 'quiz' ? '⏳ Generating Quiz...' : quiz ? '📝 Your Quiz' : '💡 Instructions'}
              </h2>
              
              {loading === 'quiz' ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <div className="relative">
                    <div className="w-20 h-20 border-4 border-emerald-200 rounded-full"></div>
                    <div className="w-20 h-20 border-4 border-emerald-600 rounded-full border-t-transparent animate-spin absolute top-0 left-0"></div>
                  </div>
                  <p className="mt-6 text-gray-600 font-medium">Creating your personalized quiz...</p>
                  <p className="mt-2 text-sm text-gray-500">This usually takes 5-10 seconds</p>
                </div>
              ) : quiz && quiz.length > 0 ? (
                <div className="space-y-6">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
                    <p className="text-sm text-emerald-800">
                      <strong>{quiz.length} questions</strong> • Click an answer to check if it's correct!
                    </p>
                  </div>
                  {quiz.map((q, qi) => (
                    <div key={qi} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex gap-3 mb-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-semibold text-sm">
                          Q{qi + 1}
                        </span>
                        <p className="text-gray-900 font-medium pt-1">{q.question}</p>
                      </div>
                      <div className="pl-11 space-y-2">
                        {q.options.map((opt, oi) => (
                          <button
                            key={oi}
                            onClick={() => handleOptionClick(qi, opt)}
                            className={`w-full text-left px-4 py-3 rounded-lg border transition-colors ${getOptionClass(q, qi, opt)}`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Welcome to PAAL!</h3>
                    <p className="text-sm text-gray-700 mb-4">Your AI-powered study companion for USF courses. Here's how to get started:</p>
                    
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Set Your Context</p>
                          <p className="text-xs text-gray-600">Enter your course, chapter, and topic at the top of the chat</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Ask Questions</p>
                          <p className="text-xs text-gray-600">Type any study question in the chat box</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                        <div>
                          <p className="text-sm font-medium text-gray-900">Generate Quizzes</p>
                          <p className="text-xs text-gray-600">Click "Generate Quiz" or type "generate quiz" in chat</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Example Questions</h3>
                    <div className="space-y-2 text-sm">
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700">"Explain recursion in simple terms"</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700">"What's the difference between mitosis and meiosis?"</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                        <p className="text-gray-700">"Generate a quiz on Chapter 5"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = () => (
  <div>
    <section className="bg-emerald-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">About PAAL</h1>
        <p className="text-xl text-emerald-100">Empowering USF students with AI-powered learning tools</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-4">
            PAAL (Promptless AI Assisted Learning) was created to bridge the gap between traditional learning methods and modern AI technology. We believe every USF student deserves personalized, accessible learning support that adapts to their unique learning style, background.
          </p>
          <p className="text-lg text-gray-600">
            By eliminating the need for complex prompting and providing instant, course-specific assistance, we're making AI-powered learning truly accessible to all students—regardless of their prior technical background.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Users,
                title: 'Student Focused',
                desc: 'Everything we build prioritizes student success & need.'
              },
              {
                icon: BookOpen,
                title: 'Access to Learning',
                desc: 'Quality education should be accessible to everyone, anytime.'
              },
              {
                icon: Sparkles,
                title: 'Innovation',
                desc: 'We leverage cutting-edge AI to create transformative learning experiences.'
              },
              {
                icon: Info,
                title: 'Privacy First',
                desc: 'Your data and information remain secure and private.'
              }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-4">
            PAAL was born in 2024 when a group of USF faculty members and alumni recognized a critical need: students were struggling with the overwhelming complexity of AI tools. Traditional tutoring wasn't keeping up with gen-AI learning today.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            We saw how AI technology was revolutionizing many industries, but education tools were still complex and required technical expertise. We asked ourselves: "What if we could make AI assistance as easy as having a conversation with a knowledgeable friend?"
          </p>
          <p className="text-lg text-gray-600">
            That simple question led to PAAL. Today, we're proud to support hundreds of students across dozens of courses, helping them understand complex concepts, practice with personalized quizzes, and track their progress—all without needing to learn prompt engineering or AI technology. Our journey is just beginning, and we're committed to continuously improving PAAL based on student feedback and the latest advances in AI technology.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { name: 'Dr. Sarah Johnson', role: 'Founder & CEO', dept: 'Former USF Professor of Computer Science' },
              { name: 'Michael Chen', role: 'CTO', dept: 'B.S. Computer Sci., USF \'20' },
              { name: 'Emily Rodriguez', role: 'Head of Education', dept: 'Educational Technology Specialist' },
              { name: 'James Park', role: 'Lead Developer', dept: 'Full-stack Engineer' }
            ].map((member, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-emerald-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="text-emerald-700 font-medium">{member.role}</p>
                <p className="text-sm text-gray-600">{member.dept}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-emerald-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 mb-8">Have questions or feedback? We'd love to hear from you.</p>
        <button className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-emerald-800">Contact Us</button>
      </div>
    </section>
  </div>
);

// Login Page
const LoginPage = ({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-emerald-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Log in to continue your learning journey</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input type="email" placeholder="your.email@usf.edu" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <a href="#" className="text-sm text-emerald-700 hover:text-emerald-800">Forgot password?</a>
            </div>
            <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div className="flex items-center">
            <input type="checkbox" id="remember" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500" />
            <label htmlFor="remember" className="ml-2 text-sm text-gray-700">Remember me for 30 days</label>
          </div>

          <button className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800">Log in</button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign in with</span>
            </div>
          </div>

          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign in with Google
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign in with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account? <button onClick={() => setCurrentPage('signup')} className="text-emerald-700 font-medium hover:text-emerald-800">Sign up</button>
        </p>
      </div>
    </div>
  </div>
);

// Sign Up Page
const SignUpPage = ({ setCurrentPage }: { setCurrentPage: (page: Page) => void }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Sparkles className="w-8 h-8 text-emerald-700" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
          <p className="text-gray-600">Start your AI-powered learning journey today</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">USF Email Address</label>
            <input type="email" placeholder="your.email@usf.edu" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
            <p className="mt-1 text-xs text-gray-500">Use your official USF email address</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" placeholder="Create a strong password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
          </div>

          <div className="flex items-start">
            <input type="checkbox" id="terms" className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500 mt-1" />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              I agree to the <a href="#" className="text-emerald-700 hover:text-emerald-800">Terms of Service</a> and <a href="#" className="text-emerald-700 hover:text-emerald-800">Privacy Policy</a>
            </label>
          </div>

          <button className="w-full bg-emerald-700 text-white py-3 rounded-lg font-medium hover:bg-emerald-800">Create Account</button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Sign up with Google
          </button>

          <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Sign up with GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account? <button onClick={() => setCurrentPage('login')} className="text-emerald-700 font-medium hover:text-emerald-800">Log in</button>
        </p>
      </div>
    </div>
  </div>
);

// ============= MAIN APP =============
function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'features':
        return <FeaturesPage />;
      case 'courses':
        return <CoursesPage />;
      case 'quiz':
        return <QuizGeneratorPage />;
      case 'about':
        return <AboutPage />;
      case 'login':
        return <LoginPage setCurrentPage={setCurrentPage} />;
      case 'signup':
        return <SignUpPage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  // Don't show nav/footer on login/signup pages
  const showLayout = currentPage !== 'login' && currentPage !== 'signup';

  return (
    <div className="min-h-screen bg-white">
      {showLayout && <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />}
      {renderPage()}
      {showLayout && <Footer />}
    </div>
  );
}

export default App;
