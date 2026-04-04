import { useState, useRef, useEffect } from "react";

export default function SearchSelect({
  options = [],
  value,
  onChange,
  placeholder,
  disabled
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef();

  useEffect(() => {
    const close = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, []);

  const filtered = options.filter(o =>
    o.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div ref={ref} className="relative w-full mt-1">
      {/* Main Input */}
      <input
        type="text"
        className={`text-sm w-full pr-4 py-3 pl-4 border border-gray-300 rounded-lg focus:outline-none focus:border-teal placeholder:text-gray-400 dark:border-gray-600 dark:text-gray-300 ${
          disabled ? "bg-gray-100 cursor-not-allowed dark:bg-gray-800" : ""
        }`}
        placeholder={placeholder}
        value={open ? search : (value?.label || "")}
        onFocus={() => !disabled && setOpen(true)}
        onChange={(e) => setSearch(e.target.value)}
        disabled={disabled}
      />

      {/* Dropdown */}
      {open && !disabled && (
        <ul className="absolute top-full left-0 bg-white w-full text-sm shadow-sm border border-gray-200 rounded-lg z-9 max-h-40 overflow-y-auto dark:bg-gray-900 dark:border-gray-700">
          {filtered.length ? (
            filtered.map(opt => (
              <li
                key={opt.value}
                className="py-2 px-4 hover:bg-teal hover:text-white cursor-pointer dark:text-gray-300"
                onMouseDown={() => { // use onMouseDown so blur doesn’t close before click
                  onChange(opt);
                  setOpen(false);
                  setSearch(opt?.label);
                }}
              >
                {opt.label}
              </li>
            ))
          ) : (
            <li className="text-center text-sm text-gray-500 py-2 px-4">No results</li>
          )}
        </ul>
      )}
    </div>
  );
}