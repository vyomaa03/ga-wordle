const container = document.getElementById("container");
for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 5; j++) {
    const box = document.createElement("div");
    box.className = `row${i + 1} box`;
    container.appendChild(box);
  }
}
