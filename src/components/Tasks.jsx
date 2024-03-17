import NewTask from "./NewTask.jsx";

export default function Task({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">TASKS</h2>

      {/* input과 button 렌더 */}
      <NewTask onAdd={onAdd} />

      {/* tasks 의 content 렌더 */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            return (
              <li className="flex justify-between my-4" key={task.id}>
                <span>{task.text}</span>
                <button
                  onClick={() => onDelete(task.id)}
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
