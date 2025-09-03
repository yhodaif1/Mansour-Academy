import React from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => (
  <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542282246-2771c129a9a3?w=1600&h=900&fit=crop&q=80')" }}>
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">فنجال وعلوم رجال</h1>
        <p className="text-xl md:text-2xl font-light">"التجارب العملية في الطبيعة تنمي الشخصية وتبني ذكريات قوية"</p>
        <NavLink to="/adventures" className="mt-8 inline-block bg-brand-brown text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
          اكتشف مغامراتنا
        </NavLink>
      </div>
    </div>
  </div>
);

const ProgramCard: React.FC<{ title: string; description: string; delay: number }> = ({ title, description, delay }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <h3 className="text-2xl font-bold text-brand-brown mb-4">{title}</h3>
      <p className="text-brand-green">{description}</p>
    </div>
);


const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">مرحباً بكم في أكاديميتنا</h2>
          <p className="text-lg text-brand-green max-w-3xl mx-auto">
            نحن نؤمن بأن التعلم الحقيقي يحدث يكمل ما تعمله الطلاب بين جدران الفصول الدراسية. نقدم تجارب فريدة في الهواء الطلق تجمع بين المهارات الحياتية، التراث الثقافي، والمغامرة لبناء جيل من القادة الواثقين.
          </p>
        </div>
      </section>

      <section className="py-20 bg-brand-khaki/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">برامجنا التعليمية</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <ProgramCard title="برامج شهرية" description="انغمس في تجربة تعليمية شاملة تمتد لشهر كامل، تركز على تطوير المهارات العميقة والشخصية." delay={0} />
            <ProgramCard title="كشتة نهاية الأسبوع" description="مغامرات قصيرة ومكثفة في عطلة نهاية الأسبوع، مثالية لاستكشاف مهارات جديدة وتجديد الطاقة." delay={100} />
            <ProgramCard title="برامج ربوع بلادي" description="استكشف جمال وتراث مناطق مختلفة من المملكة في رحلات تعليمية مصممة خصيصاً." delay={200} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-brand-dark mb-6">لماذا تختارنا؟</h2>
            <ul className="space-y-4 text-lg text-brand-green">
              <li className="flex items-start"><span className="text-brand-brown font-bold text-2xl ml-3 mt-1">✓</span><div><strong>خبراء متخصصون:</strong> فريقنا مكون من مدربين ومرشدين ذوي خبرة عالية في التعليم الخارجي والتراث.</div></li>
              <li className="flex items-start"><span className="text-brand-brown font-bold text-2xl ml-3 mt-1">✓</span><div><strong>منهجية فريدة:</strong> ندمج بين التعلم التجريبي، المهارات العملية، والقيم الثقافية الأصيلة.</div></li>
              <li className="flex items-start"><span className="text-brand-brown font-bold text-2xl ml-3 mt-1">✓</span><div><strong>السلامة أولاً:</strong> نطبق أعلى معايير السلامة والأمان في جميع أنشطتنا ومخيماتنا.</div></li>
              <li className="flex items-start"><span className="text-brand-brown font-bold text-2xl ml-3 mt-1">✓</span><div><strong>احترام الثقافة:</strong> برامجنا مصممة لتعزيز الفهم والاحترام العميق لثقافتنا وتراثنا.</div></li>
            </ul>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop&q=80" alt="Why Choose Us" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;