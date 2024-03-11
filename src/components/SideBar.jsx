export default function SideBar() {
  return (
    <section className="fixed flex flex-col items-center gap-4 my-4 bg-stone-800 w-1/4 h-full p-8 rounded">
      <label className="text-sm font-bold uppercase text-white">
        Your Projects
      </label>
      <button className="px-4 py-2 text-xs font-light md:text-base rounded-md bg-stone-500 text-stone-100 hover:bg-stone-600 hover:text-stone-100">
        + Add Project
      </button>
    </section>
  );
}
