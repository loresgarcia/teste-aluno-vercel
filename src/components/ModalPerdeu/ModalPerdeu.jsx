
import { motion } from "framer-motion";
function ModalPerdeu({
   setIniciar,
   setPerdeu,
   setQntd,
   setMsg,
   geradorNumeroAleatorio,
   descQntd,
   numeroAleatorio,
   setIntervaloMsg,
   dificuldade
}) {
   return (
      <div className="absolute w-full h-full top-0 right-0 flex items-center justify-center bg-black bg-opacity-25">
         <motion.div
            className="w-1/2 h-2/3 flex items-center justify-center flex-col rounded-3xl bg-corCard border-4 border-solid border-white-100"
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
         >
            <h1 className="text-5xl font-bold m-3 text-zinc-700">PERDEU!</h1>
            <p className="text-zinc-700 text-xl">
               A resposta correta é {numeroAleatorio}. Infelizmente, você
               perdeu.
            </p>
            <button
               className="bg-green-500 hover:bg-green-600 rounded-md w-32 h-8 m-5 text-white"
               onClick={() => {
                  setIniciar(true);
                  setPerdeu(false);
                  setQntd(dificuldade - 1);
                  setMsg(descQntd);
                  geradorNumeroAleatorio();
                  setIntervaloMsg("Você não deve ter tanta sorte assim!");
               }}
            >
               Voltar
            </button>
         </motion.div>
      </div>
   );
}

export default ModalPerdeu;
