import { useState, useEffect } from 'react';
import { Sun, Moon, Briefcase, GraduationCap, Award, Code, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import AnimatedSkillBar from '../components/AnimatedSkillBar';

const Index = () => {
  const [theme, setTheme] = useState('light');
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const konami = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konami[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konami.length) {
          setShowEasterEgg(true);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen ${theme === 'light' ? 'bg-orange-50 text-orange-900' : 'bg-orange-950 text-orange-50'} transition-colors duration-300`}>
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
        <h1 className="text-2xl font-bold">Magnus Hambleton</h1>
        <Button variant="outline" size="icon" onClick={toggleTheme}>
          {theme === 'light' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />}
        </Button>
      </nav>

      <main className="container mx-auto px-4 pt-20">
        <section className="min-h-screen flex flex-col justify-center items-center text-center">
          <img src="https://media.licdn.com/dms/image/C5603AQHDpFRXVZXXwg/profile-displayphoto-shrink_800_800/0/1516888344251?e=1687392000&v=beta&t=Oj_Aw5Uy6Uu0Uy0Uy0Uy0Uy0Uy0Uy0Uy0Uy0Uy0" alt="Magnus Hambleton" className="w-48 h-48 rounded-full mb-8 mx-auto object-cover" />
          <h2 className="text-4xl font-bold mb-4">Magnus Hambleton</h2>
          <p className="text-xl mb-8">Founder & CEO at Lov | AI, Product, and Engineering</p>
          <Button className="animate-bounce">
            <ChevronDown className="mr-2 h-4 w-4" /> Scroll to explore
          </Button>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold mb-8">Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg shadow-lg">
              <Briefcase className="w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Founder & CEO</h4>
              <p className="mb-2">Lov</p>
              <p className="text-sm">Apr 2023 - Present</p>
            </div>
            <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg shadow-lg">
              <Briefcase className="w-12 h-12 mb-4" />
              <h4 className="text-xl font-semibold mb-2">Head of Product</h4>
              <p className="mb-2">Anthropic</p>
              <p className="text-sm">Jan 2022 - Apr 2023</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold mb-8">Education</h3>
          <div className="bg-orange-100 dark:bg-orange-900 p-6 rounded-lg shadow-lg">
            <GraduationCap className="w-12 h-12 mb-4" />
            <h4 className="text-xl font-semibold mb-2">University of Cambridge</h4>
            <p className="mb-2">Master of Philosophy (MPhil), Advanced Computer Science</p>
            <p className="text-sm">2013 - 2014</p>
          </div>
        </section>

        <section className="py-16">
          <h3 className="text-3xl font-bold mb-8">Skills & Endorsements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <AnimatedSkillBar skill="Artificial Intelligence" level={95} />
              <AnimatedSkillBar skill="Product Management" level={90} />
              <AnimatedSkillBar skill="Machine Learning" level={85} />
            </div>
            <div>
              <AnimatedSkillBar skill="Software Engineering" level={88} />
              <AnimatedSkillBar skill="Start-ups" level={92} />
              <AnimatedSkillBar skill="Leadership" level={89} />
            </div>
          </div>
        </section>

        {showEasterEgg && (
          <section className="py-16 text-center">
            <h3 className="text-3xl font-bold mb-8">🎉 Easter Egg Found! 🎉</h3>
            <p className="text-xl mb-4">Congratulations on discovering the Konami Code Easter egg!</p>
            <Code className="w-24 h-24 mx-auto mb-4" />
            <p>Here's a fun fact: Magnus is not just a tech enthusiast, but also a secret coding ninja!</p>
          </section>
        )}
      </main>

      <section className="py-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Get in Touch</h3>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/magnushambleton" target="_blank" rel="noopener noreferrer">
            <Github className="w-8 h-8 hover:text-orange-500 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/magnushambleton" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-8 h-8 hover:text-orange-500 transition-colors" />
          </a>
          <a href="mailto:magnus@example.com">
            <Mail className="w-8 h-8 hover:text-orange-500 transition-colors" />
          </a>
        </div>
      </section>

      <footer className="bg-orange-200 dark:bg-orange-900 py-8 text-center">
        <p>&copy; 2023 Magnus Hambleton. All rights reserved.</p>
        <p className="mt-2 text-sm">Designed with ❤️ and AI</p>
      </footer>
    </div>
  );
};

export default Index;
