    const ssvg = document.getElementById('ssvg');
    const navbar = document.getElementById('navbar');
    const minIcon = document.getElementById('minIcon');
    const items_admin = document.getElementById('nav-items-admin');
     document.getElementById('icon').onclick = function () {
    this.classList.toggle('change');
    navbar.classList.toggle('active');
    items_admin.classList.toggle('active');
    ssvg.classList.toggle('del');
    minIcon.classList.toggle('del-2');
    }
    //  let allLi  = document.getElementsByTagName("li")

    //  console.log(allLi);
    //  alllLi = function() {
    //   this.classList.remove("wow");
    // }

      document.getElementById("ul-dropdown").onclick =  function() {
        this.classList.toggle('change');
      }
      document.getElementById("ul-dropdown-Two").onclick =  function() {
        this.classList.toggle('change');
      }
      document.getElementById("ul-dropdown-Three").onclick =  function() {
        this.classList.toggle('change');
      }
      document.getElementById("ul-dropdown-Four").onclick =  function() {
        this.classList.toggle('change');
      }
      document.getElementById("ul-dropdown-five").onclick =  function() {
        this.classList.toggle('change');
      }





    document.getElementById("colmun-add-one").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("colmun-add-two").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("colmun-add-three").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("colmun-add-four").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("colmun-add-five").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("colmun-add-secth").onclick = function () {
        this.classList.toggle("active");
    }



    document.getElementById("news-calman-one").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("news-calman-two").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("news-calman-three").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("news-calman-four").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("news-calman-five").onclick = function () {
        this.classList.toggle("active");
    }
    document.getElementById("news-calman-secth").onclick = function () {
        this.classList.toggle("active");
    }

    // var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
    // var yValues = [55, 49, 44, 24, 15];
    // var barColors = ["red", "green","blue","orange","brown"];
    //
    // new Chart("myChart", {
    //     type: "bar",
    //     data: {
    //         labels: xValues,
    //         datasets: [{
    //             backgroundColor: barColors,
    //             data: yValues
    //         }]
    //     },
    //     options: {...}
    // });