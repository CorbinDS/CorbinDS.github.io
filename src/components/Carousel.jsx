import { useState } from "react";

export default function Carousel({ items, className = "", aspect = "aspect-video" }) {
  const [current, setCurrent] = useState(0);

  const goTo = (index) => {
    setCurrent((index + items.length) % items.length);
  };

  const item = items[current];

  return (
    <div className={`relative w-full max-w-md ${className}`}>
      {/* Media with transition */}
      <div className={`overflow-hidden rounded relative ${aspect}`}>
        <div className="transition-opacity duration-500 ease-in-out opacity-100 w-full h-full">
          {item.type === "image" ? (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt || "carousel"}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <video
              key={item.src}
              src={item.src}
              controls
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Arrows only if more than one */}
        {items.length > 1 && (
          <>
            <button
              onClick={() => goTo(current - 1)}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 text-white text-2xl z-10"
            >
              ❮
            </button>
            <button
              onClick={() => goTo(current + 1)}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 text-white text-2xl z-10"
            >
              ❯
            </button>
          </>
        )}
      </div>

      {/* Caption */}
      {item.caption && (
        <div className="mt-2 text-sm text-gray-600 text-center italic">
          {item.caption}
        </div>
      )}

      {/* Dots */}
      {items.length > 1 && (
        <div className="flex justify-center mt-2 space-x-2">
          {items.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === current ? "bg-gray-800" : "bg-gray-400"
              }`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
