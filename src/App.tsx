import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import CoreFeatures from './components/CoreFeatures';
import SocialProof from './components/SocialProof';
import TechnologySection from './components/TechnologySection';
import TeamSection from './components/TeamSection';
import CTA from './components/CTA';
import SupportSection from './components/SupportSection';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
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
        <CoreFeatures />
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
