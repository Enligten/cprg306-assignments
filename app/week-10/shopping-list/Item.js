export default function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <li
      onClick={onSelect}
      className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-sm cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700"
    >
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Category: {category}</p>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <span className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm font-medium">
          x{quantity}
        </span>
        <button
          onClick={(e) => { e.stopPropagation(); onDelete(); }}
          className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1 rounded hover:bg-red-50 dark:hover:bg-gray-700"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
