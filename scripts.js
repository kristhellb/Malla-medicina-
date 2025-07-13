document.addEventListener("DOMContentLoaded", function () {
  const ramos = [
    { nombre: "Anatomía I", semestre: 1, tipo: "TP", creditos: 11, prereq: "Admisión", habilita: "Anatomía II" },
    { nombre: "Biología Celular", semestre: 1, tipo: "TP", creditos: 5, prereq: "Admisión", habilita: "Biología Molecular y Genética" },
    { nombre: "Fisiología I", semestre: 3, tipo: "TP", creditos: 8, prereq: "Anatomía II, Bioquímica-Biofísica, Biología Molecular y Genética", habilita: "Fisiología II, Semiología I, Neurociencias" },
    // ...agrega más ramos aquí
  ];

  const container = document.getElementById("malla");
  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.textContent = ramo.nombre;
    div.onclick = () => mostrarModal(ramo);
    container.appendChild(div);
  });

  const modal = document.getElementById("modal");
  const closeBtn = document.querySelector(".close");

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

  function mostrarModal(r) {
    modal.style.display = "block";
    document.getElementById("ramo-nombre").textContent = r.nombre;
    document.getElementById("ramo-semestre").textContent = r.semestre;
    document.getElementById("ramo-tipo").textContent = r.tipo;
    document.getElementById("ramo-creditos").textContent = r.creditos;
    document.getElementById("ramo-prereq").textContent = r.prereq;
    document.getElementById("ramo-habilita").textContent = r.habilita;
  }
});
