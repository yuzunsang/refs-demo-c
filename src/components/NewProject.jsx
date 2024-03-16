import Input from "./Input.jsx";

export default function NewProject() {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="bg-stone-50 text-stone-800 hover:text-red-500">
            Cancel
          </button>
        </li>
        <li>
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div className="flex flex-col">
        <Input type="text" label="Title" />
        <Input type="text" label="Description" textarea />
        <Input type="date" label="Due Date" />
      </div>
    </div>
  );
}
