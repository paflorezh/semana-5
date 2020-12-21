<template>
    <div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="nombre"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Articulos</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Ingresar Artículo
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{formTitle}}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.codigo"
                        label="Código"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre Artículo"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.descripcion"
                        label="Descripción"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.categoriaId"
                        label="Categoría"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.estado"
                        label="Estado"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="600px">
            <v-card>
              <v-card-title class="headline">¿Seguro desea cambiar el estado del artículo?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
        <template v-if="item.estado">
          mdi-toggle-switch
        </template>
        <template v-else>
          mdi-toggle-switch-off-outline
        </template>  
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-app>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: 'ID',
        align: 'start',
        sortable: true,
        value: 'id',
      },
      { text: 'Código', value: 'codigo', sortable: true },
      { text: 'Nombre Artículo', value: 'nombre', sortable: true },
      { text: 'Descripción', value: 'descripcion'},
      { text: 'Categoria', value: 'categoriaId' },
      { text: 'Estado', value: 'estado' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    desserts: [],
    articulos: [],
    editedIndex: -1,
    editedItem: {
      codigo: '',
      nombre:'',
      categoriaId: '',
      estado: '',
      
    },
    defaultItem: {
      id:'',
      codigo: '',
      nombre:'',
      categoriaId: '',
      estado: '',
      
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nuevo Artículo' : 'Editar Artículo'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.list()
  },

  methods: {
    initialize () {
      this.desserts = [
        {
          nombre: 'Frozen Yogurt',
          descripcion: 159,
          estado: 6.0,
        },
      ]
    },

    list(){
      axios.get('http://localhost:3000/api/articulo/list')
      .then(response =>{
        this.articulos = response.data;
      })
      .catch(error)
    },

    editItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      if (this.editedItem.estado === 0) {
        axios.put('http://localhost:3000/api/articulo/activate', {
          "id": this.editedItem.id,
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
      } else {
        axios.put('http://localhost:3000/api/articulo/deactivate', {
          "id": this.editedItem.id,
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
        this.desserts.push(this.editedItem)
      }
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        axios.put('http://localhost:3000/api/articulo/update', {
          "id": this.editedItem.id,
          "nombre": this.editedItem.nombre,
          "descripcion": this.editedItem.descripcion,
          "codigo": this.editedItem.codigo,
          "estado": this.editedItem.estado,
          "categoriaId": this.editedItem.categoriaId,
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
      } else {
        axios.post('http://localhost:3000/api/articulo/add', {
          "nombre": this.editedItem.nombre,
          "descripcion": this.editedItem.descripcion,
          "codigo": this.editedItem.codigo,
          "estado": this.editedItem.estado,
          "categoriaId": this.editedItem.categoriaId,
        })
          .then(response =>{
            this.list();
          })
          .catch(error =>{
            return error;
          })
        this.desserts.push(this.editedItem)
      }
      this.close()
    },
  },
}
</script>