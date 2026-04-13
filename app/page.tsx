import HeroSection from './components/HeroSection';
import CoworkingSection from './components/CoworkingSection';
import LumaCalendarSection from './components/LumaCalendarSection';
import ContactFormSection from './components/ContactFormSection';
import SpaceSection from './components/SpaceSection';
import CompaniesContactSection from './components/CompaniesContactSection';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CoworkingSection />
      <LumaCalendarSection />
      <ContactFormSection />
      <SpaceSection />
      <CompaniesContactSection />
      <Footer />
    </main>
  );
}