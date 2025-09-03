
import React from 'react';
import PageTitle from '../components/PageTitle';

interface AdventureCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const AdventureCard: React.FC<AdventureCardProps> = ({ title, description, imageUrl }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300">
    <div className="relative h-64">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40"></div>
        <h3 className="absolute bottom-4 right-4 text-3xl font-bold text-white">{title}</h3>
    </div>
    <div className="p-6">
      <p className="text-brand-green mb-4">{description}</p>
      <a href="#/contact" className="text-brand-brown font-bold hover:underline">سجل الآن ←</a>
    </div>
  </div>
);

const Adventures: React.FC = () => {
  return (
    <div className="bg-brand-beige min-h-screen">
      <PageTitle title="اختر مغامرتك" subtitle="برامج مصممة لكل شغف ومستوى" />
      
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-10">
          <AdventureCard 
            title="برامج شهرية"
            description="تجربة غامرة تمتد لشهر، مصممة لبناء مهارات متقدمة في البقاء، القيادة، والعمل الجماعي. مثالية للباحثين عن تحول حقيقي."
            imageUrl="https://images.unsplash.com/photo-1533599132333-a34f3a742e1a?w=400&h=300&fit=crop&q=80"
          />
          <AdventureCard 
            title="كشتة نهاية الأسبوع"
            description="مغامرات سريعة ومكثفة خلال عطلة نهاية الأسبوع. تعلم أساسيات التخييم، الملاحة، والمهارات اليدوية في بيئة طبيعية خلابة."
            imageUrl="https://images.unsplash.com/photo-1519994843236-4a6c459ec7a3?w=400&h=300&fit=crop&q=80"
          />
          <AdventureCard 
            title="برامج ربوع بلادي"
            description="رحلات استكشافية إلى أجمل مناطق المملكة. كل رحلة تركز على التراث الطبيعي والثقافي لمنطقة معينة، مع أنشطة فريدة."
            imageUrl="https://images.unsplash.com/photo-1595623135455-d1508891f7a4?w=400&h=300&fit=crop&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Adventures;
