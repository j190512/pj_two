<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hotCities="hotCities" :city="city" :letter="letter"></city-list>
        <city-alphabet :cities="cities" @change="handleChangeLetter"></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/CityHeader'
import CitySearch from './components/CitySearch'
import CityList from './components/CityList'
import CityAlphabet from './components/CityAlphabet'
export default {
    name:'City',
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    data(){
        return {
            city:'',
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    created(){
        // this.city = this.$route.query.city;
        this.city = this.$route.params.city;
        this.getCityInfo()
    },
    methods:{
        getCityInfo(){
            axios.get('/api/city.json').then(res=>{
                res = res.data
                if(res.ret && res.data){
                    const data = res.data;
                    this.cities = data.cities;
                    this.hotCities = data.hotCities;
                }
            })
        },
        handleChangeLetter(letter){
            this.letter = letter
        }

    }
}
</script>

<style>

</style>