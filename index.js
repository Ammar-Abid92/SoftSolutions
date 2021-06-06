const MoonPath =
  "M14 28C14 43.464 27.5 55 27.5 56C12.3122 56 0 43.464 0 28C0 12.536 12.3122 0 27.5 0C26.9908 0.00470297 14 12.536 14 28Z";

const SunPath =
  "M55 28C55 43.464 42.6878 56 27.5 56C12.3122 56 0 43.464 0 28C0 12.536 12.3122 0 27.5 0C42.6878 0 55 12.536 55 28Z";

const DarkMode = document.querySelector("#darkmode");
let toggle = false;

DarkMode.addEventListener("click", () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: "easeOutExpo",
  });

  timeline
    .add({
      targets: ".sun",
      d: [{ value: toggle ? SunPath : MoonPath }],
    })
    .add(
      {
        targets: "#darkmode",
        rotate: 320,
      },
      "-= 320"
    )
    .add(
      {
        targets: "section",
        backgroundColor: toggle ? "rgb(255,255,255)" : "rgb(22,22,22)",
        color: toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    },
      "-=700"
    );

    if(!toggle){
        toggle = true

    }else{
        toggle = false
    }

    
}
);