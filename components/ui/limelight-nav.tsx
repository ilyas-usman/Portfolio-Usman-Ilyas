"use client";

import React, { useState, useRef, useEffect, useLayoutEffect, cloneElement } from 'react';

// --- Internal Types and Defaults ---

const DefaultHomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

const DefaultCompassIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
  </svg>
);

const DefaultBellIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export type NavItem = {
  id: string | number;
  icon: React.ReactElement;
  label?: string;
  href?: string;
  onClick?: () => void;
};

const defaultNavItems: NavItem[] = [
  { id: 'default-home', icon: <DefaultHomeIcon />, label: 'Home', href: '#home' },
  { id: 'default-explore', icon: <DefaultCompassIcon />, label: 'Explore', href: '#explore' },
  { id: 'default-notifications', icon: <DefaultBellIcon />, label: 'Notifications', href: '#notifications' },
];

export type LimelightNavProps = {
  items?: NavItem[];
  defaultActiveIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

/**
 * An adaptive-width navigation bar with a "limelight" effect that highlights the active item.
 */
export const LimelightNav = ({
  items = defaultNavItems,
  defaultActiveIndex = 0,
  onTabChange,
  className = "",
  limelightClassName = "",
  iconContainerClassName = "",
  iconClassName = "",
}: LimelightNavProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const updateLimelight = () => {
    if (items.length === 0) return;

    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;

      if (!isReady) {
        setTimeout(() => setIsReady(true), 50);
      }
    }
  };

  useLayoutEffect(() => {
    updateLimelight();
    const timer = setTimeout(updateLimelight, 20);
    window.addEventListener("resize", updateLimelight);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateLimelight);
    };
  }, [activeIndex, isReady, items]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for floating header navigation

      for (let i = items.length - 1; i >= 0; i--) {
        const item = items[i];
        if (item.href && item.href.startsWith("#")) {
          const section = document.querySelector(item.href);
          if (section) {
            const sectionTop = (section as HTMLElement).offsetTop;
            if (scrollPosition >= sectionTop) {
              setActiveIndex(i);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]);

  if (items.length === 0) {
    return null; 
  }

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, index: number, href?: string, itemOnClick?: () => void) => {
    setActiveIndex(index);
    onTabChange?.(index);
    itemOnClick?.();

    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`relative inline-flex items-center h-12 md:h-16 rounded-full bg-white/85 dark:bg-[#161616]/90 backdrop-blur-md text-foreground border border-slate-200 dark:border-white/10 px-2 sm:px-3 shadow-xl dark:shadow-2xl max-w-[calc(100vw-4rem)] sm:max-w-full overflow-x-auto no-scrollbar transition-all duration-300 ${className}`}>
      {items.map(({ id, icon, label, href, onClick }, index) => (
        <a
          key={id}
          href={href || "#"}
          ref={el => { navItemRefs.current[index] = el; }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center px-2.5 sm:px-4 py-1.5 sm:py-2 gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium transition-all duration-200 ${
            activeIndex === index 
              ? 'text-slate-900 dark:text-white font-semibold' 
              : 'text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
          } ${iconContainerClassName}`}
          onClick={(e) => handleItemClick(e, index, href, onClick)}
          aria-label={label}
        >
          {cloneElement(icon as React.ReactElement<{ className?: string }>, {
            className: `w-4 h-4 sm:w-5 sm:h-5 shrink-0 transition-opacity duration-200 ease-in-out ${
              activeIndex === index ? 'opacity-100 text-red-600 dark:text-red-500' : 'opacity-60'
            } ${(icon as React.ReactElement<{ className?: string }>).props?.className || ''} ${iconClassName || ''}`,
          })}
          {label && (
            <span className={`whitespace-nowrap transition-all duration-200 text-xs sm:text-sm ${
              activeIndex === index 
                ? 'inline-block font-semibold text-slate-900 dark:text-white' 
                : 'hidden md:inline font-normal text-slate-600 dark:text-zinc-400'
            }`}>
              {label}
            </span>
          )}
        </a>
      ))}

      <div 
        ref={limelightRef}
        className={`absolute top-0 z-10 w-10 sm:w-12 h-[4px] rounded-full bg-red-600 dark:bg-red-500 shadow-[0_30px_15px_rgba(239,68,68,0.6)] ${
          isReady ? 'transition-[left] duration-300 ease-in-out' : ''
        } ${limelightClassName}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[4px] w-[160%] h-12 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-red-500/30 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
