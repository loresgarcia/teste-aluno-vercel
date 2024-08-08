import React from "react";
import { motion } from "framer-motion";
function ModalGanhou({
   setIniciar,
   setVenceu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
   descQntd,
   setIntervaloMsg,
   dificuldade
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-black bg-opacity-25 ">
         <motion.div
            className="w-1/2 h-2/3 bg-corCard flex items-center justify-center flex-col rounded-3xl border-4 border-solid border-white-100"
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
         >
            <h1 className="text-5xl font-bold m-3 text-zinc-700">VENCEU!</h1>
            <p className="text-zinc-700 text-xl">
               Parabéns, você acertou o número secreto.
            </p>
            <button
               onClick={() => {
                  setIniciar(true);
                  setVenceu(false);
                  setQntd(dificuldade - 1);
                  setMsg(descQntd);
                  geradorNumeroAleatorio();
                  setIntervaloMsg("Você é realmente sortudo!");
               }}
               className="bg-green-500 hover:bg-green-600 rounded-md w-32 h-8 m-5 text-white"
            >
               Voltar
            </button>
         </motion.div>
      </div>
   );
}

export default ModalGanhou;
