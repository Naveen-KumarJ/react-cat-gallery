import React, { useState } from "react";
import cat1 from "./assets/cat_1.png";
import cat2 from "./assets/cat_2.png";
import cat3 from "./assets/cat_3.png";
import cat4 from "./assets/cat_4.png";
function App() {
  const [image, setImage] = useState(null);
  const images = [cat1, cat2, cat3, cat4];
  return (
    <main className="min-h-screen p-4">
      <div className="container mx-auto flex flex-col gap-10  justify-center items-center text-center p-2">
        <div>
          <p className="underline font-semibold">click an image!</p>
          <div className="images-container flex flex-col md:flex-row justify-center items-center gap-6 mt-4">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="w-42 aspect-square rounded-md shadow-2xl cursor-pointer transition-all ease-in-out duration-250 hover:transform hover:scale-110"
              >
                <img
                  src={img}
                  alt={`cat_${idx + 1}`}
                  className="w-full h-full object-cover rounded-md"
                  onClick={() => setImage(img)}
                />
              </div>
            ))}
          </div>
        </div>

        {image && (
          <div>
            <p className="font-bold text-xl">Selected Image</p>
            <div className="md:w-xl aspect-video rounded-md shadow-2xl cursor-pointer mt-2">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <button
              className="mt-4 px-4 py-2 bg-red-500 cursor-pointer text-white rounded-md hover:bg-red-600 transition-all"
              onClick={() => setImage(null)}
            >
              Clear
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
