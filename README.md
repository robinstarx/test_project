# 🤖 AI Engineer Portfolio

A stunning, interactive 3D portfolio website showcasing AI/ML projects with a scroll-reactive robot and modern UI built with React, Three.js, and Tailwind CSS.

## ✨ Features

- **🤖 Scroll-Reactive 3D Robot**: Custom-built AI robot that animates and rotates based on scroll position
- **🎨 Rich Modern UI**: Glassmorphism effects, gradient animations, and smooth transitions
- **🚀 AI-Focused Projects**: Multimodal RAG, Product Review Analyser, Research Paper Explainer
- **💫 Interactive 3D Elements**: Floating particles, animated cubes, and AI orbs
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🎭 Smooth Animations**: Powered by Framer Motion for silky-smooth interactions
- **🌐 Professional Links**: GitHub, LinkedIn, Kaggle, HuggingFace integration

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### 3D Graphics
- **Three.js** - 3D graphics engine
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for R3F

### UI Components
- **Lucide React** - Beautiful icon library
- **Custom Glass Components** - Glassmorphism design system

## 🚀 Quick Start

### Installation

```bash
# Clone or navigate to the project
cd "/home/robinstarx/Work/Porfolio project"

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── 3DElements.jsx       # 3D Robot & particles
│   ├── Hero.jsx             # Hero section with 3D background
│   ├── Projects.jsx         # AI Projects showcase
│   ├── About.jsx            # Skills & expertise
│   ├── Contact.jsx          # Contact form & social links
│   ├── Navbar.jsx           # Navigation bar
│   └── Footer.jsx           # Footer section
├── lib/
│   └── utils.js             # Utility functions
├── data.js                  # Portfolio data & content
├── App.jsx                  # Main app component
├── main.jsx                 # Entry point
└── index.css                # Global styles & Tailwind
```

## 🎨 Customization

### Update Personal Information

Edit `src/data.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  role: "AI Engineer & Machine Learning Specialist",
  email: "your.email@example.com",
  resume: "https://your-resume-link.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    kaggle: "https://kaggle.com/yourusername",
    huggingface: "https://huggingface.co/yourusername",
  },
  // ... more fields
};
```

### Update Projects

Modify the `projects` array in `src/data.js`:

```javascript
export const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "image-url",
    tags: ["Python", "LangChain", "etc"],
    github: "github-link",
    demo: "demo-link",
    color: "#hexcolor",
    icon: "🤖"
  },
  // ... more projects
];
```

### Update Skills

Edit the `skills` array to add your frameworks and tools:

```javascript
export const skills = [
  {
    category: "AI/ML Frameworks",
    items: ["LangChain", "LangGraph", "CrewAI", "ADK"]
  },
  // ... more categories
];
```

## 🎯 Key Features Breakdown

### 1. 3D Robot Component
- Custom-built AI robot with metallic materials
- Glowing eyes and antenna
- Smooth rotation based on scroll position
- Floating animation for life-like movement

### 2. Projects Section
- Beautiful card layouts with hover effects
- Project images with gradient overlays
- Technology tags with glassmorphism
- Direct links to GitHub and live demos

### 3. Skills & Expertise
- Organized by category (AI/ML, DevOps, Languages)
- Interactive hover effects
- Currently Learning section with special styling
- Statistics cards with gradient animations

### 4. Contact Section
- Working contact form
- Social media integration (GitHub, LinkedIn, Kaggle, HuggingFace)
- Resume download button
- Real-time status indicator

## 🌈 Color Scheme

The portfolio uses a modern blue-purple gradient palette:

- **Primary Blue**: `#3b82f6`
- **Primary Purple**: `#8b5cf6`
- **Accent Green**: `#10b981`
- **Background**: `#0f172a` → `#1e293b`

## 📱 Responsive Design

- **Desktop**: Full 3D experience with all features
- **Tablet**: Optimized layouts with touch support
- **Mobile**: Simplified 3D, mobile-friendly navigation

## ⚡ Performance

- Optimized 3D rendering with LOD (Level of Detail)
- Lazy loading of components
- Efficient particle systems (2000 particles)
- Smooth 60fps animations

## 🔗 Social Links

Make sure to update all social links in `src/data.js`:
- GitHub (code repositories)
- LinkedIn (professional profile)
- Kaggle (ML competitions & datasets)
- HuggingFace (AI models & spaces)

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🙏 Credits

Built with modern web technologies and inspired by cutting-edge UI designs.

---

**Ready to impress?** Customize this portfolio with your information and deploy it to showcase your AI engineering skills! 🚀

## 🎓 Learning Resources

This portfolio demonstrates expertise in:
- LangChain & LangGraph for AI agents
- CrewAI for multi-agent systems
- ADK (Google) for AI development
- DevOps/MLOps practices
- CI/CD pipelines
- Modern web development

Perfect for:
- AI Engineers
- Machine Learning Specialists
- Data Scientists
- Research Engineers
- MLOps Engineers
