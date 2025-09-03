import React from 'react';
import PageTitle from '../components/PageTitle';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-beige">
      <PageTitle title="تواصل معنا" subtitle="نحن هنا للمساعدة في التخطيط لمغامرتك" />
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">أرسل لنا رسالة</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-brand-green font-medium mb-2">الاسم الكامل</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-brand-khaki rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-brand-green font-medium mb-2">البريد الإلكتروني</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-brand-khaki rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-brand-green font-medium mb-2">رسالتك</label>
                <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border border-brand-khaki rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-brown"></textarea>
              </div>
              <button type="submit" className="w-full bg-brand-brown text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                إرسال
              </button>
            </form>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">معلومات الاتصال</h3>
              <p className="text-brand-green mb-2"><strong>البريد الإلكتروني:</strong> info@mansour_acadmey.com</p>
              <p className="text-brand-green"><strong>رقم الهاتف:</strong> 0550040022</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-brand-dark mb-4">موقعنا</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                [خريطة الموقع هنا]
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;