(function () {
  const synth = window.speechSynthesis;

  const prompts = [
    "You are deploying an AI system that affects human outcomes.",
    "Before capability, explain responsibility.",
    "If this system causes harm, who is accountable?",
    "Do not reference the system. Do not say we. Speak as an operator."
  ];

  let step = 0;

  const btnStart = document.getElementById("btn-start");
  const scenario = document.getElementById("scenario");
  const ethicsText = document.getElementById("ethics-text");
  const result = document.getElementById("result");

  function speak(text) {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.9;
    u.pitch = 1;
    u.volume = 1;
    synth.speak(u);
  }

  btnStart.onclick = () => {
    scenario.classList.remove("hidden");
    btnStart.remove();

    ethicsText.textContent = prompts[0];
    speak(prompts[0]);
  };

  document.getElementById("btn-submit").onclick = () => {
    step++;

    if (step < prompts.length) {
      ethicsText.textContent = prompts[step];
      speak(prompts[step]);
      return;
    }

    // FINAL LOCK
    speak(
      "This assessment is complete. Ethics cannot be outsourced. Responsibility acknowledged."
    );

    result.textContent =
      "STATUS: COMPLETED — Spoken ethics confirmation required for certification.";
  };
})();
