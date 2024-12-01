<template>
 
    <!-- ========================= header start ========================= -->
    <header class="header navbar-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <nav class="navbar navbar-expand-lg">
              <a class="navbar-brand">
                <NuxtLink to="/">
                  <img src="/img/logo/logo.svg" alt="Logo">
                </NuxtLink>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
                <span class="toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                <ul id="nav" class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="page-scroll dd-menu" href="javascript:void(0)">How it Works</a>
                    <ul class="sub-menu">
                      <li class="nav-item active"><b><a>How-Tarinn-Works</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/how-it-works/how-tarinn-works/how-ordering-works">How-ordering-works</NuxtLink></li>
                      <li class="nav-item"><NuxtLink to="/en/how-it-works/how-tarinn-works/oem-service">OEM Service</NuxtLink></li>
                      <li class="nav-item active"><b><a>Recourse & Support</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/how-it-works/resource-support/directory-of-tests">Directory-Of-Tests</NuxtLink></li>
                      <li class="nav-item active"><b><a>After-sales Service</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/how-it-works/after-sales-service/after-sales-service">After-sales Service</NuxtLink></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll dd-menu" href="javascript:void(0)">Products & Capabilities</a>
                    <ul class="sub-menu">
                      <li class="nav-item active"><b><a>Small Animal</a></b></li>
                      <li class="nav-item"><a href="service-1.html">Infectious Diseases</a></li>
                      <li class="nav-item"><a href="service-1.html">Infectious Diseases</a></li>
                      <li class="nav-item"><a href="service-1.html">Infectious Diseases</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll dd-menu" href="javascript:void(0)">Case Study</a>

                    <ul class="sub-menu">
                      <li class="nav-item active"><b><a>Clinical Study</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/case-study/clinical-study">Clinical Study</NuxtLink></li>
                      <li class="nav-item active"><b><a>Case study</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/case-study/case-study">Case study</NuxtLink></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll dd-menu" href="javascript:void(0)">News & Insights</a>

                    <ul class="sub-menu">
                      <li class="nav-item active"><b><a>News</a></b></li>
                      <li class="nav-item"><NuxtLink to="/">Blogs</NuxtLink></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="page-scroll dd-menu" href="javascript:void(0)">Company</a>

                    <ul class="sub-menu">
                      <li class="nav-item active"><b><a>About Us</a></b></li>
                      <li class="nav-item"><NuxtLink to="/en/company/about-us">About Us</NuxtLink></li>
                      <li class="nav-item active"><b><a>Become A Partner</a></b></li>
                      <li class="nav-item"><NuxtLink to="/">Become A Partner</NuxtLink></li>
                      <li class="nav-item active"><b><a>Contact Us</a></b></li>
                      <li class="nav-item"><NuxtLink to="/">Contact Us</NuxtLink></li>
                    </ul>
                  </li>
                </ul>
                <form action="#" class="search-form">
                  <input type="text" placeholder="Search">
                  <button type="submit"><i class="lni lni-search-alt"></i></button>
                </form>
              </div> <!-- navbar collapse -->
            </nav> <!-- navbar -->
          </div>
        </div> <!-- row -->
      </div> <!-- container -->

    </header>
    <!-- ========================= header end ========================= -->
    <main>
        <NuxtPage></NuxtPage>
    </main>



</template>

<script setup>


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
