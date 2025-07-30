import React from 'react';
import AboutSection from '../components/AboutSection';
import WeeklySchedule from '../components/WeeklySchedule';
// import OutcomesSection from '../components/OutcomesSection';
import ClubOutcomes from '../components/ClubOutcomes';

const AboutPage = () => {
  return (
    <main className="pt-20">
      <AboutSection />
      <WeeklySchedule />
      {/* <ClubOutcomes /> */}
    </main>
  );
};

export default AboutPage;