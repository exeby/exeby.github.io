function generateSeed() {
  const seed = Math.floor(Math.random() * 1000000000);
  document.getElementById("seedResult").innerText = "Seed: " + seed;
}
