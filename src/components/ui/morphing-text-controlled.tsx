"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1.2;
const cooldownTime = 0.2;

interface MorphingTextControlledProps {
  className?: string;
  text: string;
}

export const MorphingTextControlled: React.FC<MorphingTextControlledProps> = ({
  text,
  className,
}) => {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  
  // We keep track of what is currently being displayed on screen
  const [displayedText, setDisplayedText] = useState(text);
  const nextTextRef = useRef(text);
  const currentTextRef = useRef(text);
  
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());
  const isMorphingRef = useRef(false);

  const setStyles = useCallback((fraction: number) => {
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (!current1 || !current2) return;

    // Word 2 (incoming)
    current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    // Word 1 (outgoing)
    const invertedFraction = 1 - fraction;
    current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
    current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

    current1.textContent = currentTextRef.current;
    current2.textContent = nextTextRef.current;
  }, []);

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / morphTime;

    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      currentTextRef.current = nextTextRef.current;
      setDisplayedText(nextTextRef.current);
      isMorphingRef.current = false;
      
      if (text1Ref.current && text2Ref.current) {
        text1Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "none";
        text2Ref.current.style.opacity = "0%";
        text1Ref.current.textContent = currentTextRef.current;
      }
    }
  }, [setStyles]);

  useEffect(() => {
    // When the prop 'text' changes, we don't update 'displayedText' immediately.
    // Instead, we trigger the morph animation.
    if (text !== currentTextRef.current) {
      nextTextRef.current = text;
      morphRef.current = 0;
      cooldownRef.current = 0;
      timeRef.current = new Date();
      isMorphingRef.current = true;
    }
  }, [text]);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      if (!isMorphingRef.current) return;

      morphRef.current += dt; // Increment morph progress
      if (cooldownRef.current <= 0) doMorph();
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, [doMorph]);

  return (
    <div
      className={cn(
        "relative h-16 w-full font-sans text-[32pt] md:text-[40pt] leading-none font-bold filter-[url(#threshold)_blur(0.6px)] md:h-24 lg:text-[4.5rem]",
        className
      )}
    >
      <span className="absolute inset-x-0 top-0 inline-block w-full" ref={text1Ref}>
        {displayedText}
      </span>
      <span className="absolute inset-x-0 top-0 inline-block w-full opacity-0" ref={text2Ref} />
      <svg id="filters" className="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};
