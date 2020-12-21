<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <v-img src="./assets/Recurso 1.svg" style="width: 42%"> </v-img>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-icon>mdi-account</v-icon>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title"> usuario </v-list-item-title>
            <v-list-item-subtitle>correo usuario</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
    <v-card
      class="mx-auto"
      width="300"
    >
      <v-list>
        <v-list-item
        :to="{name:'Home'}">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
  
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
  
        <v-list-group
          prepend-icon="mdi-account-circle"
        >
          <template v-slot:activator>
            <v-list-item-title>Administrar</v-list-item-title>
          </template>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Usuarios</v-list-item-title>
                
              </v-list-item-content>
              <v-icon>mdi-account-multiple-outline</v-icon>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in crudsUsuarios"
              :key="i"
              link
              :to="{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>

          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Categorias</v-list-item-title>
                
              </v-list-item-content>
              <v-icon>mdi-subdirectory-arrow-right</v-icon>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in cruds"
              :key="i"
              link
              :to="{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
  
          <v-list-group
            no-action
            sub-group
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Articulos</v-list-item-title>
              </v-list-item-content>
              <v-icon>mdi-shopping</v-icon>
            </template>
  
            <v-list-item
              v-for="([title, icon, ruta], i) in crudsArticulos"
              :key="i"
              link
              :to="{name: ruta}"
            >
              <v-list-item-title v-text="title"></v-list-item-title>
  
              <v-list-item-icon>
                <v-icon v-text="icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list>
    </v-card>
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        <router-view> </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    drawer: null,
    cruds: [
      ["Ver", "mdi-file-outline","categoria"],
      ["Crear", "mdi-plus-outline","add"],
      ["Actualizar", "mdi-update","update"],
    ],
    crudsUsuarios: [
      ["Ver", "mdi-file-outline","usuario"],
      ["Crear", "mdi-plus-outline","add"],
      ["Actualizar", "mdi-update","update"],
    ],
    crudsArticulos: [
      ["Ver", "mdi-file-outline","articulo"],
      ["Crear", "mdi-plus-outline","add"],
      ["Actualizar", "mdi-update","update"],
    ],
  }),
};
</script>
