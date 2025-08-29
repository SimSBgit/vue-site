<script setup>
</script>

<template>
  <div id="appRoot">
    <h1>Hello App!</h1>
    <p>경로 : {{ $route.fullPath }}</p>
    <nav>
      <ul>
        <RouterLink to="/">
          <li>Go to Home</li>
        </RouterLink>
        <RouterLink to="/about">
          <li>Go to About</li>
        </RouterLink>
        <RouterLink to="/study">
          <li>Go to StudyView</li>
        </RouterLink>
        <RouterLink to="/wd">
          <li>Go to Ex_WebDesign</li>
        </RouterLink>
      </ul>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
#appRoot {
  text-align: center;
}

li {
  list-style: none;
  font-weight: bolder;
  display: inline-block;
  padding: 20px;
  margin: 10px;
  border: 1px solid gray;
  border-radius: 6px;
  box-shadow: 5px 3px 3px 3px rgba(200, 200, 200, 0.3);
}

li:hover {
  color: #FF1744;
  background-color: lightblue;
}
</style>
