import { Pencil, Trash2, CheckCircle, Circle } from 'lucide-react';

const TaskCard = ({ task, onEdit, onDelete, onToggleStatus }) => {
  const priorityColors = {
    Low: 'bg-blue-500',
    Medium: 'bg-yellow-500',
    High: 'bg-red-500',
  };

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-green-500 transition-colors">
      <div className="flex justify-between items-start mb-3">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="text-lg font-semibold text-white">{task.title}</h3>
            {task.priority && (
              <span className={`${priorityColors[task.priority]} text-white text-xs px-2 py-1 rounded`}>
                {task.priority}
              </span>
            )}
          </div>
          <p className="text-gray-400 text-sm mb-2">{task.description}</p>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <span>Created: {new Date(task.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <button
          onClick={() => onToggleStatus(task)}
          className="ml-2"
        >
          {task.status === 'Completed' ? (
            <CheckCircle className="text-green-500" size={24} />
          ) : (
            <Circle className="text-gray-500" size={24} />
          )}
        </button>
      </div>

      <div className="flex space-x-2 pt-3 border-t border-gray-700">
        <button
          onClick={() => onEdit(task)}
          className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          <Pencil size={14} />
          <span>Edit</span>
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
        >
          <Trash2 size={14} />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
