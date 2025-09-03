
import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center py-16 bg-brand-khaki/20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-brand-brown">{title}</h1>
      {subtitle && <p className="mt-4 text-lg text-brand-green">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;
