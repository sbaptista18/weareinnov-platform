<template>
  <div id="sidebar" class="col-lg-2 col-sm-3 col-xs-3 sidebar">
    <!-- Sidebar - Brand -->
    <router-link
      to="/"
      class="sidebar-brand d-flex align-items-center justify-content-center"
    >
      <div class="sidebar-brand-icon" style="width: 100%;">
        <img :src="logo" alt="Logo Company" style="width: 100%;" />
      </div>
    </router-link>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <!-- Nav Item - Dashboard -->
    <li class="nav-item active">
      <router-link to="/" class="nav-link">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Painel</span>
      </router-link>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseMedia"
        aria-expanded="true"
        aria-controls="collapseMedia"
      >
        <i class="fas fa-photo-video"></i>
        <span>Multimédia</span>
      </a>
      <div
        id="collapseMedia"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#sidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/add-file" class="collapse-item">
            <span>Adicionar</span>
          </router-link>
          <router-link to="/files" class="collapse-item">
            <span>Biblioteca</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapsePaginas"
        aria-expanded="true"
        aria-controls="collapsePaginas"
      >
        <i class="fas fa-fw fa-copy"></i>
        <span>Páginas</span>
      </a>
      <div
        id="collapsePaginas"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#sidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/add-page" class="collapse-item">
            <span>Adicionar página</span>
          </router-link>
          <router-link to="/pages" class="collapse-item">
            <span>Ver todas as páginas</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUsers"
        aria-expanded="true"
        aria-controls="collapseUsers"
      >
        <i class="fas fa-fw fa-users"></i>
        <span>Utilizadores</span>
      </a>
      <div
        id="collapseUsers"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#sidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/add-user" class="collapse-item">
            <span>Adicionar utilizador</span>
          </router-link>
          <router-link to="/users" class="collapse-item">
            <span>Ver todos os utilizadores</span>
          </router-link>
          <router-link to="/user-profiles" class="collapse-item">
            <span>Perfis</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseOptions"
        aria-expanded="true"
        aria-controls="collapseOptions"
      >
        <i class="fas fa-fw fa-sliders-h"></i>
        <span>Opções</span>
      </a>
      <div
        id="collapseOptions"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#sidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/options" class="collapse-item">
            <span>Geral</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider" />

    <li class="nav-item">
      <a
        class="nav-link"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTools"
        aria-expanded="true"
        aria-controls="collapseTools"
      >
        <i class="fas fa-fw fa-tools"></i>
        <span>Ferramentas</span>
      </a>
      <div
        id="collapseTools"
        class="collapse"
        aria-labelledby="headingPages"
        data-parent="#sidebar"
      >
        <div class="bg-white py-2 collapse-inner rounded">
          <router-link to="/tools" class="collapse-item">
            <span>Geral</span>
          </router-link>
        </div>
      </div>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider d-none d-md-block" />

    <!-- Sidebar Toggler (Sidebar) -->
    <div id="toggleSideBar">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
      <span>Esconder</span>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Logo from "../../assets/logo.svg";

export default {
  data() {
    return {
      logo: Logo,
    };
  },
  methods: {
    toggleSideBar() {
      $("#sidebarToggle, #sidebarToggleTop").on("click", function(e) {
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
        $(".sidebar").toggleClass("col-lg-1");
        $(".sidebar").toggleClass("col-lg-2");
        $("#content-wrapper").toggleClass("col-lg-11");
        $("#content-wrapper").toggleClass("col-lg-10");
        if ($(".sidebar").hasClass("toggled")) {
          $(".sidebar .collapse").collapse("hide");
        }
      });

      // Close any open menu accordions when window is resized below 768px
      $(window).resize(function() {
        if ($(window).width() < 768) {
          $(".sidebar .collapse").collapse("hide");
        }

        // Toggle the side navigation when window is resized below 480px
        if ($(window).width() < 480 && !$(".sidebar").hasClass("toggled")) {
          $("body").addClass("sidebar-toggled");
          $(".sidebar").removeClass("col-lg-2");
          $(".sidebar").addClass("toggled");
          $(".sidebar").addClass("col-lg-1");
          $("#content-wrapper").removeClass("col-lg-11");
          $("#content-wrapper").addClass("col-lg-10");
          $(".sidebar .collapse").collapse("hide");
        }
      });

      // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $("body.fixed-nav .sidebar").on(
        "mousewheel DOMMouseScroll wheel",
        function(e) {
          if ($(window).width() > 768) {
            var e0 = e.originalEvent,
              delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
          }
        }
      );

      // Scroll to top button appear
      $(document).on("scroll", function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $(".scroll-to-top").fadeIn();
        } else {
          $(".scroll-to-top").fadeOut();
        }
      });

      // Smooth scrolling using jQuery easing
      $(document).on("click", "a.scroll-to-top", function(e) {
        var $anchor = $(this);
        $("html, body")
          .stop()
          .animate(
            {
              scrollTop: $($anchor.attr("href")).offset().top,
            },
            1000,
            "easeInOutExpo"
          );
        e.preventDefault();
      });
    },
  },
  mounted() {
    this.toggleSideBar();
  },
};
</script>

<style scoped>
hr {
  color: #fff;
}
#sidebar {
  background-color: #262626;
  list-style: none;
  text-align: left;
}

#sidebar.col-lg-1 {
  width: 3.333333%;
}

.sidebar-brand {
  margin: 20px 0;
}

.nav-item .nav-link span {
  margin-left: 20px;
}

.sidebar-toggled .nav-item .nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar-toggled .nav-item .nav-link span {
  display: none;
}

.sidebar-toggled .nav-item .nav-link i {
  font-size: 30px;
}

.sidebar #sidebarToggle {
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  margin-right: 1rem;
  cursor: pointer;
}

.sidebar #sidebarToggle::after {
  font-weight: 900;
  content: "\f104";
  font-family: "Font Awesome 5 Free";
  margin-right: 0.1rem;
}

.sidebar #sidebarToggle:hover {
  text-decoration: none;
}

.sidebar #sidebarToggle:focus {
  outline: none;
}

.sidebar.toggled {
  /* overflow: hidden; */
}

.sidebar.toggled .nav-item .collapse {
  position: absolute;
  left: 3.333333vw;
}

.sidebar.toggled #sidebarToggle::after {
  content: "\f105";
  font-family: "Font Awesome 5 Free";
  margin-left: 0.25rem;
}

#toggleSideBar {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#toggleSideBar span {
  color: #fff;
}

.sidebar.toggled #sidebarToggle {
  margin: 0;
}

.sidebar.toggled #toggleSideBar span {
  display: none;
}

.sidebar .nav-item {
  position: relative;
}

.sidebar .nav-item:last-child {
  margin-bottom: 1rem;
}

.sidebar .nav-item .nav-link {
  /* text-align: center; */
  padding: 0.75rem 1rem;
  /* width: 6.5rem; */
  color: #ffffff;
}

.sidebar .nav-item .nav-link span {
  /* font-size: 0.65rem;
  display: block; */
}

.sidebar .nav-item.active .nav-link {
  font-weight: 700;
}

.sidebar .nav-item .collapse {
  /* position: absolute; */
  left: calc(6.5rem + 1.5rem / 2);
  z-index: 1;
  top: 2px;
}

.sidebar .nav-item .collapse .collapse-inner {
  border-radius: 0.35rem;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
}

.sidebar .nav-item .collapsing {
  display: none;
  transition: none;
}

.sidebar .nav-item .collapse .collapse-inner,
.sidebar .nav-item .collapsing .collapse-inner {
  padding: 0.5rem 0;
  min-width: 10rem;
  font-size: 0.85rem;
  margin: 0 0 1rem 0;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-header,
.sidebar .nav-item .collapsing .collapse-inner .collapse-header {
  margin: 0;
  white-space: nowrap;
  padding: 0.5rem 1.5rem;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 0.9rem;
  color: #b7b9cc;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item {
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  display: block;
  color: #3a3b45;
  text-decoration: none;
  border-radius: 0.35rem;
  white-space: nowrap;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:hover,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:hover {
  background-color: #eaecf4;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item:active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item:active {
  background-color: #dddfeb;
}

.sidebar .nav-item .collapse .collapse-inner .collapse-item.active,
.sidebar .nav-item .collapsing .collapse-inner .collapse-item.active {
  color: #4e73df;
  font-weight: 700;
}
</style>
