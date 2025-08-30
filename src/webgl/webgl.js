function initWebGL(canvas) {
  const gl = canvas.getContext("webgl");
  if (!gl) {
    console.warn("WebGL non supporté");
    return;
  }

  // Ajuste la taille du canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Couleur de fond animée
  gl.clearColor(0.05, 0.05, 0.1, 1.0); // bleu nuit
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Tu peux ajouter ici des shaders, des formes, des animations...
}
