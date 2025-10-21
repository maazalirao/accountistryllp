import React from 'react';

const MaintenancePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Accountistry
          </h1>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Website Under Maintenance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We're currently performing scheduled maintenance to improve your experience. 
            Our website will be back online shortly.
          </p>
        </div>
        
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Expected to be back in approximately 2 weeks
          </p>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm text-gray-500">
            For urgent inquiries, please contact us directly
          </p>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;