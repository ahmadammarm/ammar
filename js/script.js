// Typing Animation
var typed = new Typed(".typing", {
  strings: ["a Student", "Still Learning"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;
const allSection = document.querySelectorAll(".section");
const totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function (event) {
    event.preventDefault();

    removeBackSection();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);

    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function removeBackSection() {
  for (let j = 0; j < totalSection; j++) {
    allSection[j].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}



function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  // console.log(sectionIndex);
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  google.script.run.submitFormToSheet(name, email, message);
  
  // Clear the form fields after submission (optional)
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}

// Download CV
function downloadCV() {
  var link = document.createElement('a');
  link.href = 'assets/CV-Ahmad-Ammar.pdf';
  link.download = 'CV-Ahmad-Ammar.pdf';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const scriptURL = "https://script.google.com/macros/s/AKfycby-TIGP5hd3qZDQkAWczflI3qVDorrRt3egys1dGRolltGTEX6xI5XdumXT7CQdFqiAvA/exec";
      const form = document.forms["submit-to-google-sheet"];

      function handleSubmit(event) {
        event.preventDefault();
        const form = document.forms["submit-to-google-sheet"];
        const nameInput = form.elements["name"];
        const emailInput = form.elements["email"];
        const messageInput = form.elements["pesan"];

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
          // Menampilkan SweetAlert jika terjadi kesalahan input
          Swal.fire({
            icon: "error",
            title: "Kesalahan",
            text: "Harap lengkapi semua kolom sebelum mengirim pesan",
          });
          return;
        }

        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            console.log("Success!", response);
            // Menampilkan SweetAlert setelah pengiriman berhasil
            Swal.fire({
              icon: "success",
              title: "Berhasil",
              text: "Pesan telah terkirim",
              showConfirmButton: false,
              timer: 2000, // Menutup otomatis pesan setelah 2 detik
            });
            // Mereset inputan
            form.reset();
          })
          .catch((error) => {
            console.error("Error!", error.message);
            // Menampilkan SweetAlert jika terjadi kesalahan
            Swal.fire({
              icon: "error",
              title: "Kesalahan",
              text: "Terjadi kesalahan saat mengirim pesan",
            });
          });
      }

      // Fungsi untuk menghilangkan loading setelah 2 detik
      function hideLoadingScreen() {
        const loadingScreen = document.querySelector(".loading-screen");
        loadingScreen.style.display = "none";
      }

      function hideLoadingScreenAndShowHome() {
        const loadingScreen = document.getElementById("loadingScreen");
        const mainContainer = document.querySelector(".main-container");

        // Menghilangkan loading screen
        loadingScreen.style.display = "none";

        // Menampilkan bagian Home dengan menghapus class "active" dari bagian lain
        const sections = document.querySelectorAll(".section");
        sections.forEach((section) => section.classList.remove("active"));
        document.getElementById("home").classList.add("active");

        // Mengaktifkan konten utama
        mainContainer.style.display = "block";
      }

      // Menunggu konten website selesai dimuat
      window.addEventListener("load", function () {
        // Setelah 2 detik, panggil fungsi hideLoadingScreenAndShowHome untuk menghilangkan loading dan menampilkan bagian Home
        setTimeout(hideLoadingScreenAndShowHome, 5000);
      });

      document.addEventListener('DOMContentLoaded', function() {
        const image1 = document.querySelector('.image-1');
        const image2 = document.querySelector('.image-2');
      
        let showImage2 = false;
      
        function toggleImages() {
          if (showImage2) {
            image1.style.opacity = '0';
            image2.style.opacity = '1';
          } else {
            image1.style.opacity = '1';
            image2.style.opacity = '0';
          }
      
          showImage2 = !showImage2;
        }
      
        setInterval(toggleImages, 4000);
      });
    
      function openPopup() {
        document.querySelector('.popup-title').textContent;
        document.querySelector('.popup-description').textContent;
        document.querySelector('.popup-tools').innerHTML;
        document.querySelector('.popup-demo').innerHTML;
        document.querySelector('.popup').style.display = 'block';
      }
      
      function closePopup() {
        document.querySelector('.popup').style.display = 'none';
      }

      function openPopup2() {
        document.querySelector('.popup-title2').textContent;
        document.querySelector('.popup-description2').textContent;
        document.querySelector('.popup-tools2').innerHTML;
        document.querySelector('.popup-demo2').innerHTML;
        document.querySelector('.popup2').style.display = 'block';
      }
      
      function closePopup2() {
        document.querySelector('.popup2').style.display = 'none';
      }

      function openPopup3() {
        document.querySelector('.popup-title3').textContent;
        document.querySelector('.popup-description3').textContent;
        document.querySelector('.popup-tools3').innerHTML;
        document.querySelector('.popup-demo3').innerHTML;
        document.querySelector('.popup3').style.display = 'block';
      }
      
      function closePopup3() {
        document.querySelector('.popup3').style.display = 'none';
      }

      function openPopup4() {
        document.querySelector('.popup-title4').textContent;
        document.querySelector('.popup-description4').textContent;
        document.querySelector('.popup-tools4').innerHTML;
        document.querySelector('.popup-demo4').innerHTML;
        document.querySelector('.popup4').style.display = 'block';
      }
      
      function closePopup4() {
        document.querySelector('.popup4').style.display = 'none';
      }

      function openPopup5() {
        document.querySelector('.popup-title5').textContent;
        document.querySelector('.popup-description5').textContent;
        document.querySelector('.popup-tools5').innerHTML;
        document.querySelector('.popup-demo5').innerHTML;
        document.querySelector('.popup5').style.display = 'block';
      }
      
      function closePopup5() {
        document.querySelector('.popup5').style.display = 'none';
      }

      function openPopup6() {
        document.querySelector('.popup-title6').textContent;
        document.querySelector('.popup-description6').textContent;
        document.querySelector('.popup-tools6').innerHTML;
        document.querySelector('.popup-demo6').innerHTML;
        document.querySelector('.popup6').style.display = 'block';
      }
      
      function closePopup6() {
        document.querySelector('.popup6').style.display = 'none';
      }

      function openPopup7() {
        document.querySelector('.popup-title7').textContent;
        document.querySelector('.popup-description7').textContent;
        document.querySelector('.popup-tools7').innerHTML;
        document.querySelector('.popup-demo7').innerHTML;
        document.querySelector('.popup7').style.display = 'block';
      }
      
      function closePopup7() {
        document.querySelector('.popup7').style.display = 'none';
      }

      function openPopup8() {
        document.querySelector('.popup-title8').textContent;
        document.querySelector('.popup-description8').textContent;
        document.querySelector('.popup-tools8').innerHTML;
        document.querySelector('.popup-demo8').innerHTML;
        document.querySelector('.popup8').style.display = 'block';
      }
      
      function closePopup8() {
        document.querySelector('.popup8').style.display = 'none';
      }

      function openPopup9() {
        document.querySelector('.popup-title9').textContent;
        document.querySelector('.popup-description9').textContent;
        document.querySelector('.popup-tools9').innerHTML;
        document.querySelector('.popup-demo9').innerHTML;
        document.querySelector('.popup9').style.display = 'block';
      }
      
      function closePopup9() {
        document.querySelector('.popup9').style.display = 'none';
      }

      function openPopup10() {
        document.querySelector('.popup-title10').textContent;
        document.querySelector('.popup-description10').textContent;
        document.querySelector('.popup-tools10').innerHTML;
        document.querySelector('.popup-demo10').innerHTML;
        document.querySelector('.popup10').style.display = 'block';
      }
      
      function closePopup10() {
        document.querySelector('.popup10').style.display = 'none';
      }
