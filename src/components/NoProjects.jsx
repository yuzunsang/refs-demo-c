import NoProjectsImg from "../assets/no-projects.png";

import Button from "./Button.jsx";

export default function NoProjects({ onStartAddProject }) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        className="w-16 h-16 object-contain mx-auto"
        src={NoProjectsImg}
        alt="Project Board with Pen"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Projects Selected
      </h2>
      <p className="text-stone-400 mb-4">Get started with New Project.</p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Get Started</Button>
      </p>
    </div>
  );
}
