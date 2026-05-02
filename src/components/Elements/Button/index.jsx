export function Button({ children, onClick }) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
}

export function LinkButton({
  children = "Mulai",
  classone = "bg-linear-to-r from-brand-orange to-brand-magenta hover:scale-105 hover:-translate-y-1",
  classtwo = "bg-linear-to-r from-brand-orange to-brand-magenta",
  padding = "px-14 py-2",
  href = "#",
  target,
  rel,
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={`
        p-0.5 rounded-xl ${classone}
        transition-all duration-300 ease-out
        active:scale-95
      `}
    >
      <div
        className={`
          ${classtwo} 
          rounded-xl w-full h-full ${padding}
          flex items-center justify-center font-semibold
        `}
      >
        {children}
      </div>
    </a>
  );
}
