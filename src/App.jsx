import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink,
  Code,
  Database,
  Brain,
  Award,
  GraduationCap,
  Briefcase,
  Users,
  ChevronDown,
  Menu,
  X
} from 'lucide-react'
import './App.css'

// Import images
import heroBackground from './assets/qJ1IntKSiBAU.jpg'
import feaVisualization from './assets/35pywgAAqf49.jpg'
import simulationImage from './assets/12QgwPED2bhz.jpg'
import techPattern from './assets/yQLqya7nuKuZ.jpg'
import mohammadPhoto from './assets/Mohammad.jpeg'
import csseClubLogo from './assets/CSSEClubLogo.jpeg'
import heatEquationViz from './assets/heat_equation_viz.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Typewriter effect for hero text
  const [displayText, setDisplayText] = useState('')
  const fullText = "Computer Simulation Engineer"
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    
    return () => clearInterval(timer)
  }, [])

  // Scroll to section
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  // Navigation items
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'leadership', label: 'Leadership' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ]

  // Skills data
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "MATLAB", level: 90 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "JavaScript", level: 70 }
      ]
    },
    {
      title: "Software & Tools",
      skills: [
        { name: "Abaqus", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Git", level: 80 },
        { name: "OpenGL", level: 70 }
      ]
    },
    {
      title: "Numerical Methods",
      skills: [
        { name: "Finite Element Analysis", level: 90 },
        { name: "Discontinuous Galerkin", level: 85 },
        { name: "Computational Fluid Dynamics", level: 80 },
        { name: "Numerical PDEs", level: 85 }
      ]
    }
  ]

  // Projects data
  const projects = [
    {
      title: "Space-Time Discontinuous Galerkin Methods",
      description: "Implemented DG method in Python for hyperbolic PDEs at UCLouvain. Evaluated model accuracy in graduate research environment.",
      tech: ["Python", "Numerical Analysis", "PDEs"],
      type: "Research",
      image: simulationImage
    },
    {
      title: "Finite Element Analysis Projects",
      description: "Performed comprehensive FEA using Abaqus, developed mathematical models in MATLAB for various engineering applications.",
      tech: ["Abaqus", "MATLAB", "FEA"],
      type: "Engineering",
      image: feaVisualization
    },
    {
      title: "Heat Equation Simulations",
      description: "Researched and implemented numerical methods for heat equations using MATLAB simulations with various boundary conditions.",
      tech: ["MATLAB", "Numerical Methods", "Heat Transfer"],
      type: "Research",
      image: heatEquationViz
    }
  ]

  // Certifications data (showing key ones)
  const certifications = [
    { name: "Python HackerRank Certificate", issuer: "HackerRank", year: "2025" },
    { name: "Machine Learning with Python", issuer: "freeCodeCamp", year: "2025" },
    { name: "FEM - Linear, Nonlinear Analysis", issuer: "Coursera", year: "2025" },
    { name: "Java Programming Masterclass", issuer: "Udemy", year: "2025" },
    { name: "AWS Cybersecurity", issuer: "Amazon Web Services", year: "2025" },
    { name: "AI-Powered Marketing", issuer: "Google Digital Academy", year: "2025" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">Mohammad Nawawra</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-blue-400"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 border-t border-blue-500/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
              <img 
                src={mohammadPhoto} 
                alt="Mohammad Nawawra" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Mohammad Nawawra
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            {displayText}<span className="animate-pulse">|</span>
          </div>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Research Enthusiast | UCLouvain Graduate Research Contributor | Numerical Modeling Expert | Python & MATLAB Specialist
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => scrollToSection('projects')}>
              <ExternalLink className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              onClick={() => {
                // Create a temporary link to download CV
                const link = document.createElement('a');
                link.href = '/MohammadNawawraCV.pdf'; // You'll need to add the CV file to public folder
                link.download = 'MohammadNawawraCV.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>
          
          <div className="mt-12 animate-bounce">
            <ChevronDown 
              size={32} 
              className="mx-auto text-blue-400 cursor-pointer"
              onClick={() => scrollToSection('about')}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a highly motivated Computer Simulation Engineer with a strong academic background and practical experience in numerical methods, finite element analysis, and programming. Currently pursuing advanced training at Odoo company while maintaining a 3.39 GPA in my Computer Simulation Engineering degree.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                My international research experience at UCLouvain, Belgium, where I contributed to graduate-level research as an undergraduate student, has strengthened my expertise in discontinuous Galerkin methods and computational fluid dynamics.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">3.39</div>
                  <div className="text-sm text-gray-400">GPA</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">20+</div>
                  <div className="text-sm text-gray-400">Certifications</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">500+</div>
                  <div className="text-sm text-gray-400">LinkedIn Connections</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">2</div>
                  <div className="text-sm text-gray-400">Countries</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={feaVisualization} 
                alt="FEA Visualization" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Education</h2>
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Université catholique de Louvain</CardTitle>
                    <CardDescription className="text-gray-400">Computer Simulations in Science and Engineering | Mar 2025 - Jun 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Contributed to the international XMesh Project as one of the few bachelor students in a graduate research environment. Completed seminar graduation on "Investigating Space-Time Discontinuous Galerkin Methods for Hyperbolic Equations."</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">FEM Analysis</Badge>
                  <Badge variant="secondary">Computational Fluid Dynamics</Badge>
                  <Badge variant="secondary">Graduate Research</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Bethlehem University</CardTitle>
                    <CardDescription className="text-gray-400">B.Sc. in Computer Simulation Engineering | Aug 2021 - Jul 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">GPA: 3.39/4.0 (Major: 3.43/4.0). Comprehensive coursework in numerical methods, finite element analysis, computational fluid dynamics, and advanced mathematics.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Computational Fluid Dynamics</Badge>
                  <Badge variant="secondary">Finite Element Analysis</Badge>
                  <Badge variant="secondary">Numerical Methods</Badge>
                  <Badge variant="secondary">Advanced Mathematics</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Experience</h2>
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Odoo Company Training</CardTitle>
                    <CardDescription className="text-gray-400">Current Training Program | 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p>Currently undergoing comprehensive training at Odoo company through ProMax Traineeship Agreement, focusing on enterprise software development and business applications.</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Research Intern</CardTitle>
                    <CardDescription className="text-gray-400">UCLouvain, Belgium | Feb-May 2025</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Implemented Discontinuous Galerkin (DG) method in Python for PDEs and evaluated model accuracy in a graduate research environment. Worked on cutting-edge numerical methods for hyperbolic equations.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Discontinuous Galerkin</Badge>
                  <Badge variant="secondary">PDEs</Badge>
                  <Badge variant="secondary">Research</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Research Assistant</CardTitle>
                    <CardDescription className="text-gray-400">Bethlehem University | Oct-Dec 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Researched numerical methods for heat equations and conducted comprehensive MATLAB simulations with various boundary conditions and solution techniques.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MATLAB</Badge>
                  <Badge variant="secondary">Heat Equations</Badge>
                  <Badge variant="secondary">Numerical Methods</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Briefcase className="h-8 w-8 text-blue-400" />
                  <div>
                    <CardTitle className="text-white">Intern (FEA & Modeling)</CardTitle>
                    <CardDescription className="text-gray-400">CSSE (Remote) | Jul-Aug 2024</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="text-gray-300">
                <p className="mb-4">Performed comprehensive Finite Element Analysis using Abaqus and developed mathematical models in MATLAB for various engineering applications.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Abaqus</Badge>
                  <Badge variant="secondary">FEA</Badge>
                  <Badge variant="secondary">MATLAB</Badge>
                  <Badge variant="secondary">Mathematical Modeling</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    {index === 0 && <Code className="h-5 w-5 text-blue-400" />}
                    {index === 1 && <Database className="h-5 w-5 text-blue-400" />}
                    {index === 2 && <Brain className="h-5 w-5 text-blue-400" />}
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-blue-400/50 text-blue-400">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Community Section */}
      <section id="leadership" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Leadership & Community</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Users className="h-8 w-8 text-blue-400" />
                    <div>
                      <CardTitle className="text-white">CSSE Club Vice President</CardTitle>
                      <CardDescription className="text-gray-400">Bethlehem University | 2021-2025</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p className="mb-4">Led educational initiatives and workshops for computer simulation engineering students. Organized technical presentations and hands-on training sessions for first and second-year students.</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Leadership</Badge>
                    <Badge variant="secondary">Education</Badge>
                    <Badge variant="secondary">Workshop Organization</Badge>
                    <Badge variant="secondary">Student Mentoring</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="relative">
              <img 
                src={csseClubLogo} 
                alt="CSSE Club Logo" 
                className="rounded-lg shadow-2xl max-w-md mx-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Workshop Contributions</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Abaqus FEA Workshop</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Conducted comprehensive workshop on "Simply Supported Beam Analysis in Abaqus" for engineering students, covering modeling, analysis, and validation techniques.</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/50 border-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Simulation Program Introduction</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  <p>Presented introduction to computer simulation engineering for first and second-year students, helping them understand career paths and opportunities in the field.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Certifications & Achievements</h2>
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">20+ Professional Certifications</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-slate-800/50 border-blue-500/20 hover:border-blue-400/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{cert.name}</CardTitle>
                  <CardDescription className="text-gray-400">{cert.issuer} • {cert.year}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" onClick={() => window.open('https://www.linkedin.com/in/mnawawra/', '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              View All Certifications on LinkedIn
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-blue-400">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always interested in discussing new opportunities, research collaborations, or innovative projects in computational engineering.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg">
              <Mail className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Email</h3>
              <p className="text-gray-400">mnawawra900@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg">
              <Phone className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Phone</h3>
              <p className="text-gray-400">+970 568833066</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-lg">
              <MapPin className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">Location</h3>
              <p className="text-gray-400">Bethlehem, Palestine</p>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => window.open('https://www.linkedin.com/in/mnawawra/', '_blank')}>
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" onClick={() => window.open('https://github.com/MohammadNawawra2003', '_blank')}>
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white" onClick={() => window.open('mailto:mnawawra900@gmail.com?subject=Portfolio Contact&body=Hello Mohammad,', '_blank')}>
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900 border-t border-blue-500/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025 Mohammad Nawawra. Computer Simulation Engineer | Research Enthusiast | Problem Solver
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React, Tailwind CSS, and passion for innovation
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

