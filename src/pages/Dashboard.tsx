import React from 'react';
import { Clock, FileText, AlertCircle, CheckCircle } from 'lucide-react';

function Dashboard() {
  const applications = [
    {
      id: '1',
      type: 'Skilled Worker Visa',
      status: 'In Progress',
      submittedDate: '2024-03-15',
      nextAction: 'Upload remaining documents',
      progress: 65
    }
  ];

  const notifications = [
    {
      id: '1',
      type: 'document',
      message: 'Please upload your bank statements',
      date: '2024-03-16'
    },
    {
      id: '2',
      type: 'status',
      message: 'Your application has been received',
      date: '2024-03-15'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Application Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          {
            title: 'Applications',
            value: '1',
            status: 'Active',
            icon: <FileText className="h-6 w-6 text-blue-600" />
          },
          {
            title: 'Processing Time',
            value: '15 days',
            status: 'Remaining',
            icon: <Clock className="h-6 w-6 text-yellow-600" />
          },
          {
            title: 'Documents',
            value: '8/12',
            status: 'Uploaded',
            icon: <CheckCircle className="h-6 w-6 text-green-600" />
          }
        ].map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{stat.title}</h3>
              {stat.icon}
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.status}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Active Applications */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
        <h2 className="text-xl font-semibold mb-6">Active Applications</h2>
        {applications.map((app) => (
          <div key={app.id} className="border-b border-gray-200 pb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-lg">{app.type}</h3>
                <p className="text-sm text-gray-500">Submitted: {app.submittedDate}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {app.status}
              </span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>{app.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 rounded-full h-2"
                  style={{ width: `${app.progress}%` }}
                />
              </div>
            </div>
            <div className="flex items-center text-sm text-blue-600">
              <AlertCircle className="h-4 w-4 mr-1" />
              <span>Next action: {app.nextAction}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Notifications */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold mb-6">Recent Notifications</h2>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start">
              {notification.type === 'document' ? (
                <FileText className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              ) : (
                <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-0.5" />
              )}
              <div>
                <p className="text-gray-900">{notification.message}</p>
                <p className="text-sm text-gray-500">{notification.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;