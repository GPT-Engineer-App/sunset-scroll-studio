import { useState, useEffect } from 'react';
import { Progress } from "@/components/ui/progress";

const AnimatedSkillBar = ({ skill, level }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(level), 500);
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium">{skill}</span>
        <span className="text-sm font-medium">{progress}%</span>
      </div>
      <Progress value={progress} className="w-full" />
    </div>
  );
};

export default AnimatedSkillBar;
