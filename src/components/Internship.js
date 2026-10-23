import React from 'react';
import { motion } from 'framer-motion';

const Internship = () => {
    const outputs = [
        {
            id: 1,
            img: process.env.PUBLIC_URL + '/images/intern/Int1.jpeg',
            title: 'Computer Laboratory Supervision & Maintenance',
            desc: 'Responsible for supervising computer laboratories across different PLV campuses to ensure proper use, cleanliness, and functionality of all computer units and peripherals.'
        },
        {
            id: 2,
            img: process.env.PUBLIC_URL + '/images/intern/Int2.jpg',
            title: 'Software Installation & System Configuration',
            desc: 'Performed installation, configuration, and updating of essential software applications such as Visual Studio, Adobe Photoshop, IntelliJ IDEA, Microsoft SQL, Deep Freeze, and Microsoft Office to ensure system readiness for academic use.'
        },
        {
            id: 3,
            img: process.env.PUBLIC_URL + '/images/intern/Int3.jpg',
            title: 'Hardware Inspection & Peripheral Testing',
            desc: 'Conducted hardware inspections by testing RAM, hard drives, and system units, as well as checking peripherals including monitors, UPS, keyboards, mouse, and wireless HDMI transmitters to ensure optimal performance.'
        },
        {
            id: 4,
            img: process.env.PUBLIC_URL + '/images/intern/Int4.jpg',
            title: 'Inventory Management & Documentation',
            desc: 'Recorded system unit and monitor codes, captured reference photos, labeled equipment, and maintained accurate inventory records using Excel for School Unit (SU) and laboratory asset tracking.'
        },
        {
            id: 5,
            img: process.env.PUBLIC_URL + '/images/intern/Int5.jpg',
            title: 'Data Management & Quality Assurance',
            desc: 'Validated and cross-checked professors’ and students’ data in databases and Excel files to ensure accuracy, consistency, and completeness of records.'
        },
        {
            id: 6,
            img: process.env.PUBLIC_URL + '/images/intern/Int6.jpg',
            title: 'Printer Maintenance & Troubleshooting',
            desc: 'Handled printer maintenance and basic troubleshooting, including refilling ink, resolving printing errors, checking printer connectivity, and ensuring printers were operational to support office and laboratory printing needs.'
        }
    ];

  const grouped = [];
  for (let i = 0; i < outputs.length; i += 2) grouped.push(outputs.slice(i, i + 2));

    // motion variants for internship grid and cards
    const gridContainer = {
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.32 } }
    };

return (
    <section id="internship" className="relative z-10 px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
            <motion.h2 className="text-[#F2F4CB] text-5xl font-bold mt-12 mb-6" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                Internship
            </motion.h2>
            

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400 mb-8">
                <p className="text-sm text-gray-300 mb-1"><strong>Company Name:</strong> Pamantasan ng Lungsod ng Valenzuela - IT Office</p>
                <p className="text-sm text-gray-300 mb-1"><strong>Position:</strong> Technical Support / Data Encoder</p>
                <p className="text-sm text-gray-300 mb-1"><strong>Duration:</strong> June 27, 2025 – October 22, 2025</p>
                <p className="text-sm text-gray-300 mb-1"><strong>Hours Rendered:</strong> 486 hours</p>
                <p className="text-sm text-gray-300"><strong>Location:</strong> Maysan RD. Corner Tongco ST., Maysan, Valenzuela City, Philippines</p>
            </div>

            <div className="mt-4">
                
                <h3 className="text-3xl font-semibold text-[#F2F4CB] mb-2">Responsibilities & Achievements</h3><br />  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-gray-300">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400 mb-8">
                        <h5 className="font-semibold text-[#F2F4CB]">Achievements</h5><br />  
                        <p className="text-justify">During my internship, I successfully contributed to maintaining stable and well-organized computer laboratories by ensuring systems were properly configured, updated, and functional.
                                 I helped improve inventory accuracy through systematic documentation, labeling, and validation of equipment and data records.
                                 My involvement in software installations and system maintenance enhanced the readiness of laboratory computers for academic use.
                                 I also supported faculty and students by efficiently handling technical concerns, data management, and printing requests, which helped streamline daily operations.
                                 Overall, my internship strengthened my technical skills, attention to detail, and ability to work effectively in a professional IT environment.
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400 mb-8">
                        <h5 className="font-semibold text-[#F2F4CB]">Responsibilities</h5><br />    
                        <p className="text-justify">As an IT intern, I was responsible for supervising computer laboratories across various PLV campuses to ensure proper usage, organization, and functionality of equipment. 
                                I performed software installation and maintenance tasks, including installing and configuring applications such as Visual Studio, Adobe Photoshop, IntelliJ IDEA, Microsoft SQL, Deep Freeze, and Microsoft Office. 
                                I assisted in inventory management by recording system unit and monitor codes, capturing reference photos, labeling peripherals, and maintaining accurate records using Excel.
                                Additionally, I conducted hardware inspections and troubleshooting, including RAM and hard drive testing, system restoration, backups, and peripheral testing.
                                I also provided technical and administrative support, such as managing faculty schedules, creating student Microsoft accounts, encoding data, assisting with printing requests, and ensuring the accuracy of professors' data through quality assurance.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <h3 className="text-[#F2F4CB] text-2xl font-bold mb-4">PRACTICAL OUTPUTS</h3>

                <div className="space-y-6">
                    {grouped.map((group, gi) => (
                        <div key={gi} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {group.map((item) => (
                                        <motion.div key={item.id} className="bg-white/5 rounded-lg p-3 border border-green-400 flex flex-col items-start"
                                            variants={cardVariants}
                                            whileHover={{ y: -6, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                                            whileTap={{ scale: 0.995 }}
                                        >
                                            <div className="w-full h-full bg-[#222] rounded overflow-hidden mb-3 flex items-center justify-center">
                                                <motion.img src={item.img} alt={item.title} className="w-full h-full object-contain" whileHover={{ scale: 1.02 }} />
                                            </div>
                                            <h4 className="text-[#F2F4CB] font-semibold">{item.title}</h4>
                                            <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
                                        </motion.div>
                                    ))} 
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);
};

export default Internship;
