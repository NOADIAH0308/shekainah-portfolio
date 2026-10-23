import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  // Keep this empty since we're removing the projects array

  // Motion variants for grids and cards
  const gridContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
  };

 

  // Add this array for your character designs
  const characterDesigns = [
    { src: process.env.PUBLIC_URL + '/images/projects/character jesus.png'},
    { src: process.env.PUBLIC_URL + '/images/projects/character noadiah.png'},
    { src: process.env.PUBLIC_URL + '/images/projects/character noah.png'},
    
  ];

  

  const internshipOutputs = [
    {
      id: 1,
      img: process.env.PUBLIC_URL + '/images/projects/smartbaranggay.png',
      title: 'SMARTBARNGAY: Web-Based System',
      desc: 'Capstone Project: SmartBarangay is a web-based information and service management system designed to modernize barangay operations by digitizing essential services and records. The system enables residents to conveniently request barangay documents such as clearances, certificates, and permits online, while allowing barangay officials to efficiently process requests, manage resident data, handle complaints, and generate reports through a centralized platform. By automating manual procedures, SmartBarangay improves service delivery, enhances transparency, reduces processing time, and supports data-driven decision-making, ultimately promoting effective governance and improved community engagement.'
    },
    {
      id: 2,
      img: process.env.PUBLIC_URL + '/images/projects/abcde.png',
      title: 'BeeGreat',
      desc: 'BeeGreate is a web-based educational application designed to support early childhood learning for pre-kindergarten children aged three to five, with the active involvement of parents or guardians. The platform delivers interactive and game-based activities that help children develop essential foundational skills such as color recognition, shape identification, number recognition, and basic word pronunciation. By combining play and learning, BeeGreate creates an engaging environment that encourages curiosity, focus, and positive learning habits at an early age.'
    },
  ];

  return (
    <>
      <section id="projects" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
     <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-[#F2F4CB] text-5xl font-light"
             >
               <span className="font-bold">Portfolio</span>
             </motion.h2>
                 {/* Web Projects Section (renamed id to avoid conflict with Internship component) */}
                 <section id="web-projects" className="relative z-10 flex flex-col items-start px-4 sm:px-6 pb-24">
            <h2 className="text-[#F2F4CB] text-3xl font-bold mb-6 mt-12" style={{ width: '100%' }}>
              Web Projects
            </h2>

              <div className="w-full">
              <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={gridContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
                {internshipOutputs.map((item) => (
                  <motion.div key={item.id} className="w-full bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-green-400 flex flex-col items-start"
                    variants={cardVariants}
                    whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}
                    whileTap={{ scale: 0.995 }}
                  >
                    <motion.img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-40 object-contain mb-3 rounded"
                      style={{ background: 'transparent' }}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    />
                    <h4 className="text-[#F2F4CB] font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-300 mt-2">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Character Design Section */}
          <section id="character-design" className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 pb-24">
            <h2 className="text-[#F2F4CB] text-3xl font-bold mb-4 mt-12" style={{ textAlign: 'left', width: '100%' }}>
              Character Design
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400" style={{ width: '100%', maxWidth: 900 }}>
              <div className="grid grid-cols-3 gap-4 place-items-start">
                      {characterDesigns.map((char, idx) => (
                        <motion.div key={idx} className="w-full max-w-xs bg-white/3 backdrop-blur-sm rounded-lg p-3 flex flex-col items-start"
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.25)' }}
                          whileTap={{ scale: 0.99 }}
                        >
                    <motion.img
                      src={char.src}
                      alt={char.title}
                      className="w-58 h-58 object-contain mx-auto"
                      style={{ background: 'transparent' }}
                      whileHover={{ 
                        scale: 1.08,
                        transition: { duration: 0.25 }
                      }}
                    />
                    <h4 className="text-[#F2F4CB] font-semibold mt-3">{char.title}</h4>
                    <p className="text-sm text-gray-300 mt-1">{char.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 3D Design section removed per request */}
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
