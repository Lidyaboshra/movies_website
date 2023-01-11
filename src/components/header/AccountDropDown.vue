<template>
  <div>
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="../../assets/man.png"
          class="rounded-pill mt-1 mb-1"
          style="width: 35px"
        />
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Account Setting</a>
        <a class="dropdown-item" href="#">Support</a>
        <a class="dropdown-item" href="#">Logout</a>
      </div>
    </div>
  </div>
</template>
<style scoped>
.btn:hover {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
</style>
