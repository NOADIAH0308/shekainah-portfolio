import React from 'react';
import { 
  FaHtml5, FaFigma, FaPalette, FaMicrosoft, FaPaintBrush, FaCube
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
     {
      title: "Design & UX/UI",
      icon: <FaPalette className="text-4xl mb-2 text-[#1DB954]" />,
      skills: [
        { name: "Blender", icon: <FaCube />, level: "Basic", description: "3D modeling and animation" },
        { name: "Figma", icon: <FaFigma />, level: "Basic", description: "UI/UX design and prototyping" },
        { name: "Canva", icon: <FaPaintBrush />, level: "Basic", description: "Digital design and social media" },
        
      ]
    },
    {
      title: "Front-End Development",
      icon: <FaPalette className="text-4xl mb-2 text-[#1DB954]" />,
      skills: [
        { name: "HTML/CSS", icon: <FaHtml5 />, level: "Basic", description: "Building and styling responsive web pages" },
       
      ]
    },
   
    {
      title: "Office Tools",
      icon: <FaMicrosoft className="text-4xl mb-2 text-[#1DB954]" />,
      skills: [
        { name: "Word", icon: <FaMicrosoft />, level: "Proficient", description: "Document creation" },
        { name: "Excel", icon: <FaMicrosoft />, level: "Basic", description: "Data analysis and organization" },
        { name: "PowerPoint", icon: <FaMicrosoft />, level: "Basic", description: "Presentation creation" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24">
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
          className="text-[#F2F4CB] text-5xl font-light mb-12"
        >
          My <span className="font-bold">Skills</span>
        </motion.h2>
        <h3 className="text-[#F2F4CB] text-2xl font-bold mb-6">Hard Skills</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-[#110B11]/50 rounded-xl p-6 border border-[#1DB954]/20"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-[#F2F4CB] text-2xl font-bold ml-3">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="flex items-center group">
                    <div className="text-[#1DB954] text-xl mr-3 transition-transform duration-300 group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <div>
                      <div className="text-[#1DB954]">{skill.name}</div>
                      <div className="text-gray-400 text-sm">{skill.description}</div>
                    </div>
                    <div className="ml-auto">
                      <span className="text-[#1DB954] text-sm">{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 bg-[#110B11]/50 rounded-xl p-6 border border-[#1DB954]/20"
        >
          <h3 className="text-[#F2F4CB] text-2xl font-bold mb-6">Soft Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { skill: "Written Communication", description: "Clearly conveys ideas through well-structured written messages." },
              { skill: "Dependability", description: "Consistently fulfills duties on time and as expected." },
              { skill: "Conflict Management", description: "Handles disagreements calmly and constructively." },
              { skill: "Accountability", description: "Takes responsibility for actions and outcomes." },  
              { skill: "Resilience ", description: "Recovers quickly from challenges and setbacks." }, 
              { skill: "Analytical Thinking", description: "Evaluates information logically to make sound decisions." },
              { skill: "Troubleshooting", description: " Identifies and resolves problems efficiently." }, 
              { skill: "Patience", description: "Remains calm and composed in difficult situations." },
              { skill: "Humility", description: "Accepts feedback and values others’ contributions." },
              { skill: "Perseverance", description: "Maintains effort despite obstacles or difficulties." },
              { skill: "Loyalty", description: "Shows commitment and dedication to the organization." },
              { skill: "Work Ethic", description: "Demonstrates diligence, professionalism, and integrity at work." },
            ].map((skill, index) => (
              <div key={index} className="bg-[#1DB954]/10 rounded-lg p-4">
                <h4 className="text-[#F2F4CB] font-semibold mb-2">{skill.skill}</h4>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
