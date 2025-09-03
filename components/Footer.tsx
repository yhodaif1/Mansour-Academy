import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-green text-brand-beige py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
        <div>
          <h3 className="text-xl font-bold mb-4">أكاديمية فنجال وعلوم رجال</h3>
          <p className="text-brand-khaki">
            التجارب العملية في الطبيعة تنمي الشخصية وتبني ذكريات قوية.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li><a href="#/about" className="hover:text-white transition-colors">من نحن</a></li>
            <li><a href="#/adventures" className="hover:text-white transition-colors">مغامراتنا</a></li>
            <li><a href="#/activities" className="hover:text-white transition-colors">الأنشطة</a></li>
            <li><a href="#/contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">تواصل معنا</h3>
          <p className="text-brand-khaki">البريد الإلكتروني: info@mansour_acadmey.com</p>
          <p className="text-brand-khaki">رقم الهاتف: 0550040022</p>
          <div className="flex justify-center md:justify-start mt-4 space-x-4 space-x-reverse">
            <a href="#" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-brand-khaki mt-8 pt-8 border-t border-brand-khaki/20">
        <p>&copy; {new Date().getFullYear()} أكاديمية فنجال وعلوم رجال. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;