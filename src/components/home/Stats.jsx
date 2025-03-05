import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, value: 500, label: 'Projects Completed', suffix: '+' },
  { id: 2, value: 50, label: 'Expert Team Members', suffix: '+' },
  { id: 3, value: 15, label: 'Years of Experience', suffix: '+' },
  { id: 4, value: 98, label: 'Client Satisfaction', suffix: '%' }
];

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-primary py-16" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              className="text-center text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {isVisible ? (
                  <Counter from={0} to={stat.value} duration={2} />
                ) : (
                  0
                )}
                {stat.suffix}
              </div>
              <div className="text-xl">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Counter = ({ from, to, duration }) => {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);
  
  return <>{count}</>;
};

export default Stats;