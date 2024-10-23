import React from 'react';
import { motion } from 'framer-motion';
import { Video, Calendar, Trash2, ExternalLink, Plus, Info } from 'lucide-react';

const MeetingCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 rounded-full p-2">
            <Video className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold">Sprint 02: Design brief & ideation</h2>
            <p className="text-sm text-gray-500">Apr 24, 2023 - 09:00PM - 10:30PM</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="text-gray-400 hover:text-gray-600">
            <Calendar className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-600">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Info className="w-5 h-5 text-gray-400" />
        <div className="text-sm">
          <span className="font-semibold">ID : </span>
          <span className="text-gray-500">201031016</span>
        </div>
        <div className="text-sm">
          <span className="font-semibold">Host : </span>
          <span className="text-gray-500">Saber Ali</span>
        </div>
      </div>

      <div className="flex justify-end mb-4">
        <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800">
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm font-medium">Join Instructions</span>
        </button>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Meeting Guests</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-3 bg-gray-50 rounded-md p-2">
            <img src="https://i.pravatar.cc/40?img=1" alt="Duan Lee" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Duan Lee</p>
              <p className="text-sm text-gray-500">Web Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 bg-gray-50 rounded-md p-2">
            <img src="https://i.pravatar.cc/40?img=2" alt="Saber Ali" className="w-10 h-10 rounded-full" />
            <div>
              <p className="font-semibold">Saber Ali</p>
              <p className="text-sm text-gray-500">UX Designer</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm text-gray-500 mb-4">
        2 more guest Invite send, Will be added in list once they accepted the invitation
      </p>

      <div className="flex justify-between items-center">
        <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300">
          <Plus className="w-5 h-5" />
          <span>Invite More Guest</span>
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          Back to search
        </button>
      </div>
    </motion.div>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <MeetingCard />
    </div>
  );
}

export default App;