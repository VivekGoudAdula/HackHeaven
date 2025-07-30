import React from 'react';
import { MessageSquare, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import GlareHover from './GlareHover';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp Group',
      description: 'Join our active community chat',
      action: 'Join WhatsApp',
      link: 'https://chat.whatsapp.com/BpiP13MLqPl8fgX5Zmdst6',
      color: 'text-green-400'
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow us for updates and behind-the-scenes',
      action: 'Follow Us',
      link: 'https://www.instagram.com/codeverseau?utm_source=qr&igsh=YW50cXE1YzN4NGYy',
      color: 'text-pink-400'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect with us professionally',
      action: 'Connect',
      link: 'https://www.linkedin.com/in/CodeVerse-AU/',
      color: 'text-blue-500'
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-text">Get In Touch</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Connect with us through any of these platforms
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <GlareHover
              key={index}
              className="h-full"
              background="rgba(31, 41, 55, 0.7)"
              borderColor="rgba(239, 221, 58, 0.2)"
              glareColor="rgba(239, 221, 58, 0.2)"
              glareOpacity={0.4}
              glareSize={200}
              glareAngle={-30}
              transitionDuration={600}
            >
              <div className="h-full p-5 sm:p-6 rounded-xl">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`p-2 sm:p-3 rounded-lg ${method.color} bg-opacity-10 mr-3 sm:mr-4`}>
                    <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white whitespace-nowrap">{method.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 mb-4 min-h-[40px]">{method.description}</p>
                <a
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 font-medium group text-sm sm:text-base"
                  aria-label={`${method.action} on ${method.title}`}
                >
                  {method.action}
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </GlareHover>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 text-center px-2">
          <div className="bg-gradient-to-r from-emerald-500 to-blue-500 p-6 sm:p-8 rounded-xl text-white max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join With Us</h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 opacity-90">
              Be part of our growing community of coders, innovators, and tech enthusiasts. 
              Connect with us on any of the platforms above to stay updated and get involved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;