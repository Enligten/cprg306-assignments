export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-3 shadow-sm">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">Category: {category}</p>
      </div>
      <span className="ml-4 rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-sm font-medium">
        x{quantity}
      </span>
    </li>
  );
}
