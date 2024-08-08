/** @type {import('tailwindcss').Config} */

export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            corCard: "#F5F5F5",
            corBackground: "#EADAD8",
            corBackgroundOther: "#F3C6C0",
            corTexto: "#DB2423",
            corTextoHover: "#C60506",
         },
         screens: {
            s380: "380px",
            s430: "430px", //
            s530: "530px", //
            s630: "630px", //
            s730: "",
            s830: "830px", //
            s930: "930px",
            s1030: "1030px",
         },
         spacing: {
            82: "21rem",
            106: "29rem",
            116: "39rem",
            126: "49rem",
         },
         fontSize: {
            2: "2rem",
         },
      },
   },
   plugins: [],
};
