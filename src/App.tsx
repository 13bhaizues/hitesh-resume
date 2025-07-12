import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Code, 
  Zap, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Globe,
  Award,
  GraduationCap,
  Briefcase,
  User,
  Wrench,
  FolderOpen,
  Send
} from 'lucide-react';

// React Bits Components
import { Orb } from './components/react-bits/backgrounds/Orb';
import { GridMotion } from './components/react-bits/backgrounds/GridMotion';
import { ShapeBlur } from './components/react-bits/backgrounds/ShapeBlur';
import { ShinyText } from './components/react-bits/text-animations/ShinyText';
import { BlurText } from './components/react-bits/text-animations/BlurText';
import { SplitText } from './components/react-bits/text-animations/SplitText';
import { ScrollReveal } from './components/react-bits/text-animations/ScrollReveal';
import { DecryptedText } from './components/react-bits/text-animations/DecryptedText';
import { GlareHover } from './components/react-bits/animations/GlareHover';
import { ClickSpark } from './components/react-bits/animations/ClickSpark';
import { ProfileCard } from './components/react-bits/components/ProfileCard';
import { AnimatedList } from './components/react-bits/components/AnimatedList';
import { TiltedCard } from './components/react-bits/components/TiltedCard';
import { Stepper } from './components/react-bits/components/Stepper';
import { CardSwap } from './components/react-bits/components/CardSwap';
import { FluidGlass } from './components/react-bits/components/FluidGlass';
import { GlassIcons } from './components/react-bits/components/GlassIcons';
import { Carousel } from './components/react-bits/components/Carousel';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  // Data
  const skills = [
    { id: 1, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10"><span className="text-white font-medium">AI Automation</span></div> },
    { id: 2, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-white/10"><span className="text-white font-medium">No-Code Development</span></div> },
    { id: 3, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-white/10"><span className="text-white font-medium">Process Optimization</span></div> },
    { id: 4, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-white/10"><span className="text-white font-medium">Workflow Design</span></div> },
    { id: 5, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border border-white/10"><span className="text-white font-medium">Data Integration</span></div> },
    { id: 6, content: <div className="p-4 rounded-2xl bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-white/10"><span className="text-white font-medium">API Development</span></div> }
  ];

  const tools = [
    { id: 1, icon: <Zap className="w-6 h-6" />, label: 'Zapier', color: '#ff6b35' },
    { id: 2, icon: <Brain className="w-6 h-6" />, label: 'Make.com', color: '#6366f1' },
    { id: 3, icon: <Code className="w-6 h-6" />, label: 'Bubble', color: '#3b82f6' },
    { id: 4, icon: <Globe className="w-6 h-6" />, label: 'Webflow', color: '#8b5cf6' },
    { id: 5, icon: <Brain className="w-6 h-6" />, label: 'OpenAI', color: '#10b981' },
    { id: 6, icon: <Wrench className="w-6 h-6" />, label: 'Airtable', color: '#f59e0b' }
  ];

  const projects = [
    {
      id: 1,
      title: 'AI Customer Support Bot',
      description: 'Automated customer service system using OpenAI GPT-4 and Zapier integration, reducing response time by 80%.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 2,
      title: 'E-commerce Automation Suite',
      description: 'Complete order processing automation with inventory management and customer notifications.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      id: 3,
      title: 'Lead Generation Pipeline',
      description: 'Automated lead scoring and nurturing system with CRM integration and email sequences.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const experience = [
    {
      id: 1,
      label: 'Senior AI Automation Engineer',
      subtext: 'TechFlow Solutions',
      date: '2023 - Present',
      description: 'Leading AI automation initiatives, designing intelligent workflows, and optimizing business processes using cutting-edge no-code platforms.'
    },
    {
      id: 2,
      label: 'Automation Specialist',
      subtext: 'Digital Dynamics',
      date: '2022 - 2023',
      description: 'Developed and implemented automated solutions for client businesses, resulting in 60% efficiency improvements across various industries.'
    },
    {
      id: 3,
      label: 'No-Code Developer',
      subtext: 'StartupBoost',
      date: '2021 - 2022',
      description: 'Built scalable applications using Bubble and integrated various APIs to create comprehensive business solutions.'
    }
  ];

  const education = [
    {
      id: 1,
      label: 'Master of Computer Science',
      subtext: 'Tech University',
      date: '2019 - 2021',
      description: 'Specialized in Artificial Intelligence and Machine Learning with focus on automation systems.'
    },
    {
      id: 2,
      label: 'Bachelor of Engineering',
      subtext: 'Engineering College',
      date: '2015 - 2019',
      description: 'Computer Science Engineering with distinction. Active in coding competitions and tech societies.'
    }
  ];

  const certifications = [
    'Zapier Certified Expert',
    'Make.com Advanced Automation',
    'Bubble Certified Developer',
    'OpenAI API Specialist',
    'Google Cloud AI/ML',
    'AWS Solutions Architect'
  ];

  // Contact Form Component
  const ContactForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Handle form submission
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
          />
        </div>
        <ClickSpark>
          <button
            type="submit"
            className="w-full p-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Send Message
          </button>
        </ClickSpark>
      </form>
    );
  };

  // Contact Links Component
  const ContactLinks = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Get In Touch</h3>
        <p className="text-gray-300">Let's discuss your automation needs</p>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center gap-3 text-gray-300">
          <Mail className="w-5 h-5 text-violet-400" />
          <span>hitesh.siwach@email.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <Phone className="w-5 h-5 text-violet-400" />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300">
          <MapPin className="w-5 h-5 text-violet-400" />
          <span>San Francisco, CA</span>
        </div>
      </div>

      <div className="flex gap-4 justify-center">
        <ClickSpark>
          <a href="#" className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <Linkedin className="w-5 h-5 text-blue-400" />
          </a>
        </ClickSpark>
        <ClickSpark>
          <a href="#" className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <Github className="w-5 h-5 text-gray-300" />
          </a>
        </ClickSpark>
        <ClickSpark>
          <a href="#" className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-colors duration-300">
            <Globe className="w-5 h-5 text-green-400" />
          </a>
        </ClickSpark>
      </div>

      <ClickSpark>
        <button className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
          <Download className="w-4 h-4" />
          Download Resume
        </button>
      </ClickSpark>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
      {/* Global Background Layers */}
      <GridMotion className="fixed inset-0 z-0" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <Orb className="absolute inset-0 z-0" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <ProfileCard variant="hero" className="backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <ShinyText 
                speed="medium" 
                className="text-5xl md:text-6xl font-bold text-white mb-6"
              >
                Hitesh Siwach
              </ShinyText>
              
              <BlurText 
                delay={0.5}
                className="text-xl md:text-2xl text-transparent bg-gradient-to-r from-violet-400 via-purple-400 to-blue-400 bg-clip-text mb-8"
              >
                AI Automation Expert | No-Code Developer
              </BlurText>
              
              <BlurText 
                delay={1}
                className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
              >
                Transforming businesses through intelligent automation and cutting-edge AI solutions. 
                Building the future, one workflow at a time.
              </BlurText>
            </motion.div>
          </ProfileCard>
        </div>
      </section>

      {/* About Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                About Me
              </SplitText>
              <DecryptedText className="text-lg text-violet-300">
                Clarity-Led Technologist
              </DecryptedText>
            </div>
            
            <FluidGlass className="max-w-4xl mx-auto">
              <div className="flex items-center gap-8">
                <div className="hidden md:block">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                    <User className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    I'm a passionate AI Automation Engineer with a mission to bridge the gap between complex technology 
                    and practical business solutions. With expertise in no-code platforms and AI integration, I help 
                    organizations streamline their operations and unlock new possibilities.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    My approach combines technical precision with creative problem-solving, ensuring that every 
                    automation solution is not just functional, but transformative for the businesses I work with.
                  </p>
                </div>
              </div>
            </FluidGlass>
          </div>
        </section>
      </ScrollReveal>

      {/* Skills Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Core Skills
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Expertise That Drives Results
              </DecryptedText>
            </div>
            
            <FluidGlass>
              <AnimatedList 
                items={skills} 
                variant="fade-up" 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              />
            </FluidGlass>
          </div>
        </section>
      </ScrollReveal>

      {/* Tools & Technologies */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tools & Technologies
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Powered by Industry Leaders
              </DecryptedText>
            </div>
            
            <FluidGlass>
              <div className="flex justify-center">
                <GlassIcons icons={tools} size="lg" />
              </div>
            </FluidGlass>
          </div>
        </section>
      </ScrollReveal>

      {/* Shape Blur Divider */}
      <ShapeBlur variant="wave" />

      {/* Projects Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Projects
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Selected Work
              </DecryptedText>
            </div>
            
            <Carousel gap={32} autoplay autoplayDelay={6000}>
              {projects.map(project => (
                <GlareHover key={project.id}>
                  <TiltedCard
                    title={project.title}
                    description={project.description}
                    imgSrc={project.image}
                    className="w-[350px] h-[450px]"
                  >
                    <div className="mt-4 flex gap-2">
                      <ClickSpark>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white text-sm font-medium hover:from-violet-700 hover:to-purple-700 transition-all duration-300">
                          <ExternalLink className="w-4 h-4" />
                          View Project
                        </button>
                      </ClickSpark>
                    </div>
                  </TiltedCard>
                </GlareHover>
              ))}
            </Carousel>
          </div>
        </section>
      </ScrollReveal>

      {/* Certifications */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Certifications
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Verified Expertise
              </DecryptedText>
            </div>
            
            <FluidGlass>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-white font-medium">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </FluidGlass>
          </div>
        </section>
      </ScrollReveal>

      {/* Shape Blur Divider */}
      <ShapeBlur variant="geometric" />

      {/* Experience */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Experience
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Professional Journey
              </DecryptedText>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Stepper steps={experience} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Education */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Education
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Academic Foundation
              </DecryptedText>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Stepper steps={education} />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Shape Blur Divider */}
      <ShapeBlur variant="organic" />

      {/* Contact Section */}
      <ScrollReveal>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SplitText className="text-4xl md:text-5xl font-bold text-white mb-4">
                Contact
              </SplitText>
              <DecryptedText className="text-lg text-violet-300" delay={0.5}>
                Let's Build Something Amazing
              </DecryptedText>
            </div>
            
            <div className="max-w-2xl mx-auto">
              <CardSwap
                front={<ContactLinks />}
                back={<ContactForm />}
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Hitesh Siwach. Crafted with precision and passion.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;