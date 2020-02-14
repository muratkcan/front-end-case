<template>
  <v-layout row>
    <v-flex xs12 >
      <v-card>
        <v-img
        v-if="selected[0].children[0].company == 'Boyner'"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Boyner_logo.svg/1200px-Boyner_logo.svg.png"
          height="350px"
        >
         
        </v-img>

        <v-img
        v-if="selected[0].children[0].company == 'Turkcell'"
          src="https://www.icredible.com/images/turkcell.png"
          height="350px"
        >
        </v-img>

         <v-img
        v-if="selected[0].children[0].company == 'HepsiBurada'"
          src="https://media-exp1.licdn.com/dms/image/C4E1BAQHntyWAKaZYHg/company-background_10000/0?e=2159024400&v=beta&t=x8ZWbCfBRGaL7OtAxXZ5TSHvabEgXGkJkgOk724iD-k"
          height="350px"
        >
        </v-img>

         <v-img
        v-if="selected[0].children[0].company == 'Vodafone'"
          src="https://www.pngitem.com/pimgs/m/241-2413685_vodafone-logo-hd-png-download.png"
          height="350px"
        >
        </v-img>

           <v-img
        v-if="selected[0].children[0].company == 'Apple'"
          src="https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201809210816"
          height="350px"
        >
        </v-img>
        <v-card-title  class="purple white--text title custom-title">
        <v-btn @click="back()" outline  class="white--text" style="text-transform:none; color:purple darken-1">Back</v-btn>
             <h1 class="headers">   {{header}}</h1>
        </v-card-title>
        <v-list two-line>

            <v-layout>
        <v-flex xs12 md6>
            <v-card>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">vpn_key</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Job Id</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].jobId}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">format_align_left</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>Company Name</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].company}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">timeline</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Duration Text</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].durationdaytext}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        <v-divider inset></v-divider>
         <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact Phone</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].contactPhone[0].countryCallingCode}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-divider inset></v-divider>

           <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Area Code</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].contactPhone[0].areaCode}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-divider inset></v-divider>
            </v-card>
        </v-flex>

<v-flex xs6 >
<v-card>
          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">assignment</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Position Name</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].position}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

             <v-divider inset></v-divider>

           <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Country Code</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].countryCode}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

        <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Adres</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].address}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-divider inset></v-divider>

          <!-- <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Contact Phone</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].contactPhone[0].countryCallingCode}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-divider inset></v-divider>

           <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">code</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Area Code</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].contactPhone[0].areaCode}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

           <v-divider inset></v-divider> -->

            <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">filter_1</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Number</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].contactPhone[0].number}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

 <v-divider inset></v-divider>

          <v-list-tile >
            <v-list-tile-action>
              <v-icon color="purple">description</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Description</v-list-tile-title>
              <v-list-tile-sub-title>{{selected[0].children[0].description}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
            </v-card>
            </v-flex>
            </v-layout>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  import {items} from '@/api.js'
export default {
    methods:{
        back(){
            this.$router.push("/joblist")
        }
    },
    data:()=>({
        header:"Details",
        selected:null
    }),
    created(){
        
        this.selected=items.filter((i)=>i.jobId==this.$route.params.id)
        
       
        
    },
    
}
</script>
<style>
.btn{
    text-transform:none;
    color:purple;

}
.headers{
  font-family: Roboto;
  padding-left: 557px;
}
</style>