import { ListTodo, CheckCircle2, Clock, AlertCircle } from 'lucide-react';

const Dashboard = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const pendingTasks = tasks.filter(task => task.status === 'Pending').length;
  const highPriorityTasks = tasks.filter(task => task.priority === 'High' && task.status === 'Pending').length;

  const stats = [
    { label: 'Total Tasks', value: totalTasks, icon: ListTodo, color: 'bg-blue-500' },
    { label: 'Completed', value: completedTasks, icon: CheckCircle2, color: 'bg-green-500' },
    { label: 'Pending', value: pendingTasks, icon: Clock, color: 'bg-yellow-500' },
    { label: 'High Priority', value: highPriorityTasks, icon: AlertCircle, color: 'bg-red-500' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
                <p className="text-3xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <Icon className="text-white" size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Dashboard;
