<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/"><button>Home</button></router-link>
      </li>
      <li>
        <router-link to="/eventAndMethode"><button>Event & Method</button></router-link>
      </li>
      <li>
        <router-link to="/data"><button>Data & Variables</button></router-link>
      </li>
      <li>
        <router-link to="/computed"><button>Computed</button></router-link>
      </li>
      <li>
        <router-link to="/binding"><button>Binding</button></router-link>
      </li>
      <li>
        <router-link to="/form"><button>Form</button></router-link>
      </li>
      <li>
        <router-link to="/slot"><button>Slot</button></router-link>
      </li>
      <li>
        <router-link to="/condition"><button>Condition</button></router-link>
      </li>
      <li>
        <router-link to="/loop"><button>Loop</button></router-link>
      </li>
      <li>
        <router-link to="/lifecycle"><button>Lifecycle Hooks</button></router-link>
      </li>
      <li>
        <router-link to="/state"><button>Normal Vs State variables</button></router-link>
      </li>
      <li>
        <router-link to="/ref"><button>Ref</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
ul li {
  display: inline;
  padding-right: 5px;
}
</style>
