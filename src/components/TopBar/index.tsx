export const TopBar = () => {
  return (
    <div className="h-12 fixed font-semibold bg-gray-400 dark:bg-gray-900 dark:text-white w-screen z-50 flex justify-center gap-6 items-center">
      <span className="dark:hover:text-gray-300 cursor-pointer duration-300">
        <a href="#about">About</a>
      </span>
      <span className="dark:hover:text-gray-300 cursor-pointer duration-300">
        <a href="#projects">Projects</a>
      </span>
      <span className="dark:hover:text-gray-300 cursor-pointer duration-300">
        HOME
      </span>
      <span className="dark:hover:text-gray-300 cursor-pointer duration-300">
        <a href="#availability">Availability</a>
      </span>
      <span className="dark:hover:text-gray-300 cursor-pointer duration-300">
        <a href="#contact">Contact</a>
      </span>
    </div>
  );
};
