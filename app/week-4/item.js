export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-md border p-3 shadow-sm">
      <div>
        <p className="font-medium">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="ml-4 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
        x{quantity}
      </span>
    </li>
  );
}
