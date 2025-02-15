import React from 'react';
import Header from './components/Header';
import HomeBanner from './components/HomeBanner.';
import KnockOffSection from './components/KnockOffSection';
import ReviewGenerationSection from './components/ReviewGenerationSection';
import ReviewModerationSection from './components/ReviewModerationSection';
import ReviewMarketingSection from './components/ReviewMarketingSection';
import ReviewAnalyticsSection from './components/ReviewAnalyticsSection';
import BeatCompetitionSection from './components/BeatCompetitionSection';
import IndustriesSection from './components/IndustriesSection';
import TestimonialsSection from './components/TestimonialsSection';
import WhiteLabelServicesSection from './components/WhiteLabelServicesSection';
import ManagedServicesFeaturesSection from './components/ManagedServicesFeaturesSection';
import WatchDemoSection from './components/WatchDemoSection';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <div className="container mt-5">
        {/* Additional page content */}
      <HomeBanner />
      </div>
      <KnockOffSection />
      <ReviewGenerationSection />
      <ReviewModerationSection />
      <ReviewMarketingSection />
      <ReviewAnalyticsSection />
      <BeatCompetitionSection />
      <IndustriesSection />
      <TestimonialsSection />
      <WhiteLabelServicesSection />
      <ManagedServicesFeaturesSection />
      <WatchDemoSection />
      <Footer />
      
    </div>
  );
}

export default App;
