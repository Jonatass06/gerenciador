import { useEffect, useRef, useState } from "react";

export default function canvas() {


  let color = "black"

  const canvasRef = useRef(null);
  let canvas = null;
  let context = null;
  let drawing = false;

  useEffect(() => {
    canvas = canvasRef.current;
    context = canvas.getContext('2d');

    // Define o size do canvas
    canvas.width = screen.width;
    canvas.height = screen.height;

    // Configurações iniciais do contexto de desenho
    context.strokeStyle = color;
    context.lineWidth = 1;
    context.lineCap = 'round';
  }, []);


  const startDrawing = (e) => {
    drawing = true;
    const context = canvasRef.current.getContext('2d');
    context.beginPath();
    context.moveTo(e.clientX, e.clientY);
  }

  const endDrawing = () => {
    drawing = false;
    const context = canvasRef.current.getContext('2d');
    context.closePath();
  }

  const draw = (e) => {
    if (!drawing) return;
    const context = canvasRef.current.getContext('2d');
    context.lineTo(e.clientX, e.clientY);
    context.stroke();
  }

  return (
    <div className="w-screen h-screen bg-white">
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={endDrawing}
        onMouseOut={endDrawing}
        onMouseMove={draw}
      />
      <div className="absolute top-0 right-0">
        <input type="color" defaultValue={color} onChange={e => {
          color = e.target.value
          context.strokeStyle = color
        }} />
        <input type="number" defaultValue={1} onChange={e => context.lineWidth = e.target.value} />
        <button onClick={() => context.strokeStyle = context.strokeStyle == color ? "#FCFCFC" : color}>Trocar</button>
      </div>
    </div>
  );
}