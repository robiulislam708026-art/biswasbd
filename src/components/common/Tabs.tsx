import React, { useState } from 'react';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  items: TabItem[];
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-4 py-2 font-medium ${
              activeTab === index ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="p-4">{items[activeTab].content}</div>
    </div>
  );
};
