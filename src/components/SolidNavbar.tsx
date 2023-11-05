import { createSignal } from "solid-js";

export default function SolidNavbar() {
  const [isOpen, setIsOpen] = createSignal(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen());
  };

  // We'll use the dynamic classes for TailwindCSS to show/hide the menu
  const menuClass = () =>
    isOpen()
      ? "flex flex-col items-center"
      : "hidden md:flex md:flex-row md:items-center";

  const navClass = () =>
    isOpen() && window.innerWidth < 768
      ? "absolute top-0 left-0 w-full h-full bg-white z-10 flex flex-col items-center"
      : "hidden md:flex md:flex-row md:items-center";

  return (
    <nav class={navClass()}>
      <div class={menuClass()}>
        <a href="/" class="block mt-0 mr-6 uppercase text-sm">
          Home
        </a>
        <a href="/about" class="block mt-0 mr-6 uppercase text-sm">
          About
        </a>
        <a href="/pricing" class="block mt-0 mr-6 uppercase text-sm">
          Services
        </a>
        <a
          href="/book"
          class="bg-violet-600 p-2 px-3 text-white rounded uppercase text-sm"
        >
          Book
        </a>
      </div>
      <button class="hamburger md:hidden" onclick={toggleMenu}>
        {/* Hamburger icon */}
        {isOpen() ? (
          <div>X</div>
        ) : (
          <>
            <div class="bar bg-slate-200 my-1 h-0.5 w-6" />
            <div class="bar bg-slate-200 my-1 h-0.5 w-6" />
            <div class="bar bg-slate-200 my-1 h-0.5 w-6" />
          </>
        )}
      </button>
    </nav>
  );
}
