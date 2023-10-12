import { useEffect, useState } from "react";

export default function Grafico({ porcentagem }) {
    const [porcAtual, setPorcAtual]= useState(0);
    let transform = {
        transform: "rotate(" + (porcAtual / 100) * 180 + "deg)"
    }
    let gradiente = {
        border: "double 14px transparent",
        backgroundImage: "linear-gradient(white, white), radial-gradient(circle at left, #EF4996, #EF4996, #EF4996, #FF973D, #FF973D)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box"
    }
    useEffect(() => {
        function animateBar() {
          if (porcAtual < porcentagem) {
            setPorcAtual(prevPorc => prevPorc + 1);
          }
        }
    
        const interval = setInterval(animateBar, 16); // Aproximadamente 60 FPS
    
        return () => clearInterval(interval);
      }, [porcAtual, porcentagem]);

    return (
        <div className="relative flex justify-center h-[130px] w-full">
            <div className="flex justify-center w-full">
                <div className="w-min h-[77px] flex overflow-clip absolute top-0 bottom-0">
                    <div className="graficoBorda overflow-hidden w-[155px] rounded-full h-[155px] border-[15px] flex items-start p-6 justify-center" style={gradiente}>
                        {porcAtual}%
                    </div>
                </div>
                <div className="h-[77px] overflow-x-clip overflow-y-clip absolute flex justify-center top-0 bottom-0">
                    <div className="h-[155px] flex items-start justify-center" style={transform}>
                        <div className="h-[77px] overflow-x-clip overflow-y-clip flex justify-center ">
                            <div className="min-w-[155px] h-[155px] border-[15px] rounded-full border-zinc-200"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}