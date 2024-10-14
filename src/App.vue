<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div class="container-fluid">
        <router-link class="navbar-brand brand-name" to="/">BrandName</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Todo">Products</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style scoped>
.custom-navbar {
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
}

.brand-name {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  color: #007bff;
  font-size: 24px;
}

.nav-link {
  font-size: 16px;
  color: #333;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-link:hover {
  color: #ffffff;
  background-color: #007bff;
}

.router-link-active {
  background-color: #007bff;
  color: #ffffff;
  font-weight: bold;
  border-radius: 5px;
}

.main-content {
  padding: 30px;
  background-color: #f4f4f9;
  min-height: 80vh;
  transition: background-color 0.3s ease;
}

@media (max-width: 992px) {
  .navbar-nav {
    text-align: center;
    margin-top: 10px;
  }

  .nav-link {
    padding: 10px 10px;
  }
}
</style>
