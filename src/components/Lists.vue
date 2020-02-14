<template  >
  <v-container fluid>
    <v-card-title class="kybele-title">
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card>
      <v-card-title  class="purple white--text title custom-title">

           <v-flex xs12 sm3>  
           <v-img
           style="height:50px; width:50px;"
           class="img"
          src="https://m.kariyer.net/MobileAssets/images/selvi-landing/howto-img1.png"
         
        ></v-img> 
           </v-flex> 
             <v-flex xs12 sm6>

             <h1 class="headers"> İş İlanları  </h1>
             </v-flex>

        <v-flex xs12 sm3> 
           <v-text-field
           
        v-model="search"
        append-icon="search"
        label="Search"
        solo
        hide-details
        style="width:300px;"
        
      ></v-text-field>

      
      </v-flex>
      
             
        </v-card-title>
        <template>
  <v-card>
    <v-card-title>
      
      <v-spacer></v-spacer>
      <!-- <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field> -->
    </v-card-title>
    
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
      v-model="selected"
      class="elevation-1"
      item-key="jobId"
    >
    
    
      <template v-slot:items="props">
      
        <td class="text-xs-left">{{ props.item.jobId }}</td>
        <td class="text-xs-left">{{ props.item.position }}</td>
        <td class="text-xs-left">{{ props.item.company }}</td>
        <td class="text-xs-left">{{ props.item.durationday }}</td>
        <td class="text-xs-left">{{ props.item.durationdaytext }}</td>
        <td class="text-xs-left">{{ props.item.distance }}</td>
        <td class="text-xs-left">{{ props.item.city }}</td>
        <td class="text-xs-left">{{ props.item.town }}</td>
        <td style="padding-left:22px; width:70px; text-align:center;">
              <v-btn style="text-transform:none" class="white--text"  color="purple" @click="detail(props.item)"> Detay</v-btn>
            </td>
      </template>
      <template v-slot:no-results>
        <v-alert :value="true" color="error" icon="warning">
          Your search for "{{ search }}" found no results.
        </v-alert>
      </template>
    </v-data-table>
  </v-card>
</template>
      </v-card>
      </v-container>
      </template>

      <script>
      import {items} from '@/api.js'
  export default {
    methods: {

      detail(selected){
        // alert(selected[0]);
        this.$router.push("/jobdetail/"+selected.jobId)
        console.log(selected.children[0].address)
      },
    async SelectModal(item, props) { 
      if (item.click == "detail") {
        this.textEditor=true;
      } 
     
        },
    },
    data () {

     
      return {
        textEditor:false,
        search: '',
        selected:[],
         Menuitems:[
      {
        id: 0,
        title: "Detayları Gör",
        click: "detail"
      },
      


    ],
        headers: [
         
          {
            text: 'Job Id',
            align: 'left',
            
            value: 'jobId'
          },
          { text: 'Position Name', align: 'left', value: 'position' },
          { text: 'Company Name', value: 'company' },
          { text: 'Duration Day', value: 'durationday' },
          { text: 'Duration Day Text', value: 'durationdaytext' },
          { text: 'Distance', value: 'distance' },
          { text: 'City Name', value: 'city' },
          { text: 'Town Name', value: 'town' },
          { text: "Details", align: "center", sortable: false }
        ],
        desserts: items
      }
    }
  }
  
</script>

<style scoped>
.v-input__slot{
  width: 500px;
}
.headers{
  font-family: Roboto;
  padding-left: 257px;
}

</style>

