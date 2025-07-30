import React from 'react';
import { Link } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import vivImg from './viv.png';
import navyaImg from './navya.png';
import sreeshaImg from './sreesha.png';
import charithaImg from './charitha.png';
import vishnuImg from './vishnu.png';
import priyaImg from './priya.png';
import akshayImg from './akshay.png';
import sidharthImg from './sidharth.png';

const TeamSection = () => {
  // Group team members by their roles for better organization
  const leadershipTeam = [
    {
      name: 'Vivek Goud Adula',
      role: 'Lead',
      description: 'Oversees the entire club vision, planning, coordination, and communication with faculty.',
      avatar: vivImg,
      linkedin: 'https://www.linkedin.com/in/vivekgoudadula/'
    },
    {
      name: 'Myadarapu Navya',
      role: 'Co-Lead',
      description: 'Supports the Lead and acts as substitute when needed.',
      avatar: navyaImg,
      linkedin: 'https://www.linkedin.com/in/navya-myadarapu-a14920303/'
    }
  ];

  const technicalTeam = [
    {
      name: 'Vishnu Vardhan',
      role: 'Tech Lead',
      description: 'Manages coding challenges, contests, and technical sessions.',
      avatar: vishnuImg,
      linkedin: 'https://www.linkedin.com/in/polla-vishnu-vardhan/'
    },
    {
      name: 'Lakshmi Priya',
      role: 'Event Lead',
      description: 'Organizes workshops, events, and competitions.',
      avatar: priyaImg,
      linkedin: 'https://www.linkedin.com/in/s-lakshmi-priya-49408b304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Mogilipalem Charitha',
      role: 'Event Lead',
      description: 'Collaboratively organizes workshops, events, and competitions.',
      avatar: charithaImg,
      linkedin: 'http://www.linkedin.com/in/charitha-mogilipalem-981097304'
    }
  ];

  const communityTeam = [
    {
      name: 'Akshay Sagar',
      role: 'Community Outreach Lead',
      description: 'Handles promotions, communications, and student engagement.',
      avatar: akshayImg,
      linkedin: 'https://www.linkedin.com/in/s-akshay-sagar-6ab6402bb/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },
    {
      name: 'Sreesha Thummalapalli',
      role: 'Community Outreach Lead',
      description: 'Manages promotions, communications, and student engagement.',
      avatar: sreeshaImg,
      linkedin: 'https://www.linkedin.com/in/sreesha-thummalapalli-6029ab335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
    },
    {
      name: 'Sai Siddha Gangadhar',
      role: 'Documentation Lead',
      description: 'Maintains records, certificates, attendance, and event reports.',
      avatar: sidharthImg,
      linkedin: 'https://www.linkedin.com/in/potharla-sai-siddha-gangadhar-86b404299/'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 gradient-text">Core Team</h2>
        </div>

        {/* Leadership Team */}
        <div className="mt-8 md:mt-12">
          <div className="flex flex-wrap justify-center gap-12 sm:gap-18 md:gap-24 max-w-6xl mx-auto px-4 sm:px-6">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] transform transition-all duration-300 hover:scale-[1.02] flex justify-center">
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/\s+/g, '')}
                  status=""
                  contactText="Contact Me"
                  avatarUrl={member.avatar}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => window.open(member.linkedin, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech & Event Leads */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 sm:px-4">
            {technicalTeam.map((member, index) => (
              <div key={index} className="w-full transform transition-all duration-300 hover:scale-[1.02]">
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/\s+/g, '')}
                  status=""
                  contactText="Contact Me"
                  avatarUrl={member.avatar}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => window.open(member.linkedin, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Community & Documentation */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 sm:px-4">
            {communityTeam.map((member, index) => (
              <div key={index} className="w-full transform transition-all duration-300 hover:scale-[1.02]">
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  handle={member.name.toLowerCase().replace(/\s+/g, '')}
                  status=""
                  contactText="Contact Me"
                  avatarUrl={member.avatar}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => window.open(member.linkedin, '_blank')}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center px-4">
          <div className="bg-gray-900 p-6 md:p-8 rounded-xl border border-gray-700 max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-300 text-sm md:text-base mb-6">
              We're always looking for passionate individuals to help grow our community. 
              Whether you're interested in organizing events, mentoring others, or contributing your technical skills, 
              there's a place for you in our team.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 text-sm md:text-base"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;