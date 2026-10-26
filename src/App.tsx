import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import CoreFeatures from './components/CoreFeatures';
import RiskScoreSection from './components/RiskScoreSection';
import SocialProof from './components/SocialProof';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import CTA from './components/CTA';
import SupportSection from './components/SupportSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.9, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -12 * t)), smoothWheel: true, wheelMultiplier: 1.05, touchMultiplier: 1.5 });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    const stored = localStorage.getItem('th-theme');
    if (stored === 'light') document.documentElement.classList.add('light');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const handleMouseMove = (e: MouseEvent) => {
      const orbs = document.querySelectorAll<HTMLElement>('.orb');
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      orbs.forEach((orb) => {
        const speed = parseFloat(orb.dataset.speed ?? '0.02');
        orb.style.transform = `translate(${x * speed * 1000}px, ${y * speed * 1000}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    const handleScroll = () => {
      const y = window.scrollY;
      const orbs = document.querySelectorAll<HTMLElement>('.orb');
      orbs.forEach((orb) => {
        const speed = parseFloat(orb.dataset.speed ?? '0.02');
        orb.style.transform = `translateY(${y * speed * 0.6}px)`;
      });
      const mx = (y * 0.04) % 60;
      const my = (y * 0.025) % 40;
      document.documentElement.style.setProperty('--mesh-x', mx + 'px');
      document.documentElement.style.setProperty('--mesh-y', my + 'px');
      // Parallax on individual cards for a visible 'boxes moving' feel
      const cards = document.querySelectorAll<HTMLElement>('.card-base, .tactile-raised');
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = (center - window.innerHeight / 2) / window.innerHeight;
        const move = dist * 32 * (i % 2 === 0 ? 1 : -1);
        card.style.transform = `translateY(${move}px)`;
      });
      // Grid containers drift too
      const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const offset = (window.innerHeight - rect.top) * 0.05;
        el.style.transform = `translateY(${Math.max(-60, Math.min(60, offset * 0.4))}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    const cards = document.querySelectorAll<HTMLElement>('.tactile-raised');
    const handleCardMove = (e: MouseEvent, card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (e.clientY - rect.top - centerY) / 50;
      const rotateY = (centerX - (e.clientX - rect.left)) / 50;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };
    const handleCardLeave = (card: HTMLElement) => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleCardMove(e, card));
      card.addEventListener('mouseleave', () => handleCardLeave(card));
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (e) => handleCardMove(e, card));
        card.removeEventListener('mouseleave', () => handleCardLeave(card));
      });
    };
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <CoreFeatures />
        <RiskScoreSection />
        <SocialProof />
        <TechnologySection />
        <TeamSection />
        <CTA />
        <SupportSection />
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
