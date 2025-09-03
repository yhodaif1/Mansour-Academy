
import React from 'react';
import PageTitle from '../components/PageTitle';

const MainCamp: React.FC = () => {
  return (
    <div>
      <PageTitle title="المخيم الرئيسي" subtitle="معلومات عن الموقع وصور المخيم والمرافق" />
      <div className="container mx-auto p-8 text-center">
        <p className="text-lg text-brand-green">محتوى هذه الصفحة سيتم إضافته قريباً.</p>
      </div>
    </div>
  );
};

export default MainCamp;
