
import React from 'react';
import PageTitle from '../components/PageTitle';

const TeamMemberCard: React.FC<{ name: string; role: string; imageUrl: string; }> = ({ name, role, imageUrl }) => (
  <div className="text-center bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300">
    <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-brand-khaki"/>
    <h3 className="text-xl font-bold text-brand-dark">{name}</h3>
    <p className="text-brand-green">{role}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div>
      <PageTitle title="من نحن" subtitle="خبراء في التعليم التجريبي والتراث" />
      
      <section className="py-20 bg-brand-beige">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="prose prose-lg max-w-none text-brand-green">
              <h2 className="text-3xl font-bold text-brand-brown mb-4">رسالتنا وقيمنا</h2>
              <p>في أكاديمية "فنجال وعلوم رجال"، نسعى لإعادة ربط الجيل الجديد بالطبيعة وتراث الأجداد. نؤمن بأن المهارات المكتسبة من خلال التجربة العملية هي أساس بناء شخصية قوية ومسؤولة. قيمنا تتمحور حول الشجاعة، الاحترام، العمل الجماعي، والحفاظ على بيئتنا وثقافتنا.</p>
              <p>نحن نقدم بيئة آمنة ومحفزة تشجع على الاستكشاف، التعلم، والنمو الشخصي، مع فريق من الخبراء المتفانين في توجيه كل مشارك خلال رحلته.</p>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1616036740257-9449ea1f6605?w=600&h=450&fit=crop&q=80" alt="Our Mission" className="rounded-xl shadow-2xl w-full"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-brand-dark mb-12">خبراؤنا</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <TeamMemberCard name="عبدالله القحطاني" role="مؤسس وخبير بقاء" imageUrl="https://images.unsplash.com/photo-1522529599102-4b320d673c03?w=200&h=200&fit=crop&q=80" />
            <TeamMemberCard name="سارة الأحمدي" role="مرشدة بيئية" imageUrl="https://images.unsplash.com/photo-1542345821-bf933161c52b?w=200&h=200&fit=crop&q=80" />
            <TeamMemberCard name="محمد الشهري" role="مدرب مهارات يدوية" imageUrl="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?w=200&h=200&fit=crop&q=80" />
            <TeamMemberCard name="فاطمة الزهراني" role="خبيرة تراث وثقافة" imageUrl="https://images.unsplash.com/photo-1505248238495-9b4b02534358?w=200&h=200&fit=crop&q=80" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-khaki/20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">الجوائز والشهادات الدولية</h2>
          <p className="text-lg text-brand-green max-w-3xl mx-auto mb-8">
            نحن فخورون بالاعترافات التي حصلنا عليها والتي تعكس التزامنا بالتميز والجودة في التعليم الخارجي.
          </p>
          <div className="flex justify-center items-center space-x-8 space-x-reverse">
            <div className="text-brand-brown">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                <p className="mt-2 font-semibold">اعتماد السلامة الدولية</p>
            </div>
            <div className="text-brand-brown">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v11.494m-9-5.747h18" /></svg>
                <p className="mt-2 font-semibold">جائزة التعليم البيئي</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
