import React from "react";
import { useCallback } from "react";

function IconsNumbers({ numeroSelecionado, numeroAleatorio }) {
   const randomColors = useCallback(() => {
      const hue = Math.floor(Math.random() * 360);
      const lightness = `hsl(${hue}, 85%, 95%)`;
      const darkness = `hsl(${hue}, 100%, 20%)`;
      return { lightness, darkness };
   }, []);
   //
   return (
      <div
         className="bg-stone-300 flex justify-center items-center rounded m-0.5 hover:bg-zinc-600 hover:text-green-300 s380:w-8 s380:text-xl s380:h-8 s430:w-9 s430:h-9 s430:text-xl s830:w-10 s830:h-10 s830:text-2xl s1030:w-12 s1030:h-12 s1030:text-3xl"
      >
         <p className="hover:duration-500">{numeroSelecionado}</p>
      </div>
   );
}

export default IconsNumbers;
