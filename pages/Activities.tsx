
import React, { useState } from 'react';
import PageTitle from '../components/PageTitle';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-brand-khaki">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-right py-5 px-6 text-xl font-semibold text-brand-dark hover:bg-brand-khaki/20 focus:outline-none"
    >
      <span>{title}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
    >
      <div className="p-6 bg-white">
        {children}
      </div>
    </div>
  </div>
);

const activitiesData = [
  {
    category: 'مهارات البقاء والتخييم',
    skills: ['بناء الملاجئ الطبيعية', 'إشعال النار بالطرق البدائية', 'تنقية المياه', 'الطبخ في الهواء الطلق', 'نصب الخيام']
  },
  {
    category: 'المهارات التقنية واليدوية',
    skills: ['نحت الخشب', 'صناعة الحبال', 'إصلاح المعدات', 'التعامل مع الأدوات اليدوية']
  },
  {
    category: 'المغامرات والرياضات الخارجية',
    skills: ['تسلق الجبال', 'المشي لمسافات طويلة (الهايكنج)', 'التجديف', 'ركوب الدراجات الجبلية', 'الملاحة بالخريطة والبوصلة']
  },
  {
    category: 'القيادة والعمل الجماعي',
    skills: ['حل المشكلات الجماعية', 'بناء الثقة', 'التواصل الفعال', 'توزيع المهام']
  },
  {
    category: 'المهارات البيئية',
    skills: ['التعرف على النباتات والحيوانات المحلية', 'مبادئ "لا تترك أثراً"', 'فهم الأنظمة البيئية']
  },
  {
    category: 'الثقافة والتراث',
    skills: ['رواية القصص التقليدية', 'التعرف على الفنون الصخرية', 'إعداد القهوة العربية', 'آداب المجلس']
  }
];

const Activities: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className="bg-brand-beige">
      <PageTitle title="الأنشطة والمهارات" subtitle="اكتسب خبرات تدوم مدى الحياة" />
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-brand-beige">
            {activitiesData.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.category}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                >
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc list-inside text-brand-green">
                        {item.skills.map(skill => <li key={skill}>{skill}</li>)}
                    </ul>
                </AccordionItem>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Activities;
