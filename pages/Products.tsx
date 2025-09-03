
import React from 'react';
import PageTitle from '../components/PageTitle';

const ProductCard: React.FC<{ title: string; price: string; description: string; imageUrl: string; }> = ({ title, price, description, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        <img src={imageUrl} alt={title} className="w-full h-56 object-cover"/>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-brand-brown mb-2">{title}</h3>
            <p className="text-brand-green mb-4 flex-grow">{description}</p>
            <div className="flex justify-between items-center mt-auto">
                <span className="text-xl font-bold text-brand-dark">{price}</span>
                <a href="#/contact" className="bg-brand-brown text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                    احجز الآن
                </a>
            </div>
        </div>
    </div>
);

const Products: React.FC = () => {
    return (
        <div className="bg-brand-khaki/20">
            <PageTitle title="منتجاتنا وخدماتنا" subtitle="كل ما تحتاجه لمغامرتك القادمة" />
            <div className="container mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <ProductCard
                        title="باقة برنامج شهري"
                        price="١٥٠٠ ريال"
                        description="تسجيل كامل في برنامجنا الشهري المكثف. شامل الإقامة، الوجبات، وجميع الأنشطة التعليمية."
                        imageUrl="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=400&h=300&fit=crop&q=80"
                    />
                    <ProductCard
                        title="باقة كشتة نهاية الأسبوع"
                        price="٥٠٠ ريال"
                        description="انضم إلينا في مغامرة نهاية أسبوع لا تُنسى. شاملة التخييم والأنشطة الرئيسية."
                        imageUrl="https://images.unsplash.com/photo-1559826203-e1b3082a52b4?w=400&h=300&fit=crop&q=80"
                    />
                    <ProductCard
                        title="رحلة ربوع بلادي"
                        price="تعتمد على الوجهة"
                        description="اكتشف كنوز المملكة في رحلة مخصصة. السعر يختلف باختلاف مدة الرحلة والمنطقة."
                        imageUrl="https://images.unsplash.com/photo-1563473213013-de2a0133c100?w=400&h=300&fit=crop&q=80"
                    />
                     <ProductCard
                        title="استئجار المعدات التعليمية"
                        price="تبدأ من ٥٠ ريال/يوم"
                        description="مجموعة كاملة من معدات التخييم والبقاء عالية الجودة للإيجار اليومي أو الأسبوعي."
                        imageUrl="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=400&h=300&fit=crop&q=80"
                    />
                    <ProductCard
                        title="تأجير المخيم الرئيسي"
                        price="تواصل معنا"
                        description="استضف فعاليتك الخاصة أو ورشة عمل في مخيمنا المجهز بالكامل. مثالي للشركات والمجموعات."
                        imageUrl="https://images.unsplash.com/photo-1615873968403-89e068629265?w=400&h=300&fit=crop&q=80"
                    />
                </div>
            </div>
        </div>
    );
};

export default Products;
