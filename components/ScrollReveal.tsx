import React, { useEffect, useRef, useMemo, ReactNode, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement> | null;
  enableBlur?: boolean;
  baseOpacity?: number;
  baseRotation?: number;
  blurStrength?: number;
  containerClassName?: string;
  textClassName?: string;
  rotationEnd?: string;
  wordAnimationEnd?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  scrollContainerRef = null,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom'
}) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

    // Set initial state
    gsap.set(el, { 
      transformOrigin: '0% 50%', 
      rotate: baseRotation,
      opacity: baseOpacity 
    });

    const wordElements = el.querySelectorAll<HTMLElement>('.word');
    
    // Set initial state for words
    gsap.set(wordElements, { 
      opacity: baseOpacity, 
      filter: `blur(${blurStrength}px)`,
      willChange: 'opacity, filter'
    });

    // Container rotation animation
    gsap.to(el, {
      ease: 'none',
      rotate: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom',
        end: rotationEnd,
        scrub: true
      }
    });

    // Word opacity animation
    gsap.to(wordElements, {
      ease: 'none',
      opacity: 1,
      stagger: 0.05,
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=20%',
        end: wordAnimationEnd,
        scrub: true
      }
    });

    // Word blur animation
    if (enableBlur) {
      gsap.to(wordElements, {
        ease: 'none',
        filter: 'blur(0px)',
        stagger: 0.05,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: 'top bottom-=20%',
          end: wordAnimationEnd,
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <h2 ref={containerRef} className={`my-5 ${containerClassName}`}>
      <p className={textClassName}>{splitText}</p>
    </h2>
  );
};

export default ScrollReveal;
