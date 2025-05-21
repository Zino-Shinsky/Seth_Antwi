particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 900
      }
    },
    color: {
      value: ["#1a5f7a", "#3498db", "#2980b9", "#ffffff"]
    },
    shape: {
      type: ["circle", "triangle", "polygon", "star"],
      stroke: {
        width: 1,
        color: "#3498db"
      },
      polygon: {
        nb_sides: 6
      },
      image: {
        src: "img/gear.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.3,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#1a5f7a",
      opacity: 0.4,
      width: 1,
      triangles: {
        enable: true,
        color: "#3498db",
        opacity: 0.1
      }
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "bounce",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["grab", "bubble"]
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 180,
        line_linked: {
          opacity: 0.8,
          color: "#3498db"
        }
      },
      bubble: {
        distance: 200,
        size: 12,
        duration: 2,
        opacity: 0.8,
        speed: 3
      },
      push: {
        particles_nb: 6
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
}); 