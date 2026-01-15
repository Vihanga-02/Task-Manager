import { CheckSquare, ListTodo, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4">
            Manage Your Tasks <span className="text-green-500">Efficiently</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Stay organized, boost productivity, and never miss a deadline
          </p>
          <div className="text-gray-300 text-lg">
            Please <span className="text-green-500 font-semibold">Login</span> or{' '}
            <span className="text-green-500 font-semibold">Sign Up</span> to get started
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ListTodo className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Create Tasks</h3>
            <p className="text-gray-400">
              Easily create and organize your tasks with titles, descriptions, and priorities
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckSquare className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Track Progress</h3>
            <p className="text-gray-400">
              Monitor your task completion and see your productivity at a glance
            </p>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center hover:border-green-500 transition-colors">
            <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Stay Productive</h3>
            <p className="text-gray-400">
              Filter tasks by priority and status to focus on what matters most
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
