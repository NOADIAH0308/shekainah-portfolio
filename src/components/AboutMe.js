import { motion } from 'framer-motion';

const AboutMe = () => {
  return (
    <section id="about" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl w-full"
      >
        {/* About Me Content */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mb-16">
          {/* Content */}
          <div className="flex-1">
            <h2 className="text-[#F2F4CB] text-5xl font-light mb-8">
              About <span className="font-bold">Me</span>
            </h2>
            
            <div className="text-gray-400 space-y-6">
              <p className="text-lg">
                Hi there, I'm Shekainah Orpilla.
              </p>
              
              <p className="text-lg">
                I am Shekainah Asejo Orpilla, a fourth-year IT student at Pamantasan ng Lungsod ng Valenzuela.
                I am passionate about technology, problem-solving, and creating digital solutions that make a positive impact. 
                I enjoy learning new tools and improving my skills in web development, design, and programming.
                Through my studies and projects, I aim to contribute to innovative and practical IT solutions.
              </p>
            </div>
          </div>

          {/* Image - Hidden on mobile, visible on desktop */}
          <div className="hidden md:block w-64 h-64 rounded-xl overflow-hidden flex-shrink-0">
            <img 
              src={process.env.PUBLIC_URL + "/images/profile.jpg"} 
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Education Timeline */}
        <div className="mt-12">
          <h3 className="text-[#F2F4CB] text-3xl font-light mb-8">
            My <span className="font-bold">Education</span>
          </h3>

          <div className="space-y-8">            {/* Current Education */}
            <div className="relative pl-8 border-l-2 border-[#1DB954]">
              <div className="absolute w-4 h-4 bg-[#1DB954] rounded-full -left-[9px] top-0"></div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/schools/plv-logo.png"} 
                    alt="PLV Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="text-[#F2F4CB]">
                  <h4 className="text-xl font-semibold">Pamantasan ng Lungsod ng Valenzuela</h4>
                  <p className="text-gray-400">2020 - Present</p>
                  <p className="text-gray-400 mt-1">4th Year College</p>
                </div>
              </div>
            </div>

            {/* Senior High School */}
            <div className="relative pl-8 border-l-2 border-[#1DB954]">
              <div className="absolute w-4 h-4 bg-[#1DB954] rounded-full -left-[9px] top-0"></div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/schools/olfu.png"} 
                    alt="PLV Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="text-[#F2F4CB]">
                  <h4 className="text-xl font-semibold">Our Lady of Fatima University
</h4>
                  <p className="text-gray-400">2018 - 2020</p>
                  <p className="text-gray-400 mt-1">Senior High School</p>
                
                </div>
              </div>
            </div>

            {/* Junior High School */}
            <div className="relative pl-8 border-l-2 border-[#1DB954]">
              <div className="absolute w-4 h-4 bg-[#1DB954] rounded-full -left-[9px] top-0"></div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/schools/gent-hs.png"} 
                    alt="CENHS Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="text-[#F2F4CB]">
                  <h4 className="text-xl font-semibold">Gen. T. De Leon National High School</h4>
                  <p className="text-gray-400">2014-2018</p>
                  <p className="text-gray-400 mt-1">Junior High School</p>
                </div>
              </div>
            </div>

            {/* Elementary School */}
            <div className="relative pl-8 border-l-2 border-[#1DB954]">
              <div className="absolute w-4 h-4 bg-[#1DB954] rounded-full -left-[9px] top-0"></div>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={process.env.PUBLIC_URL + "/images/schools/bes.png"} 
                    alt="BES Logo"
                    className="w-full h-full object-contain p-2"
                  />
                </div>
                <div className="text-[#F2F4CB]">
                  <h4 className="text-xl font-semibold">Bitik Elementary School</h4>
                  <p className="text-gray-400">2008-2014</p>
                  <p className="text-gray-400 mt-1">Elementary School</p>
                </div>
                </div>
                </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
