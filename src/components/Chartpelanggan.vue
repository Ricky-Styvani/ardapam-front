<script>
        import { Bar } from "vue-chartjs";
        import axios from 'axios'
        export default {
        extends: Bar,
        data(){
            return{
                data:[],
                date:[],
                kubik:[]
            }
        },
        mounted(){
            this.getChart()
        },
        methods:{
        getChart(){
      axios.get(this.$store.state.host+'/api/chart/'+this.$store.state.user.data.id,{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
      .then(res=>{
        this.data = res.data
        this.setData()
      }).catch(err=>{
        console.log({err})
      })
    },
            setData(){
                this.date = []
                this.kubik = []
                for(var data in this.data){
                    this.date.push(this.data[data].month+'/'+this.data[data].year)
                    this.kubik.push(this.data[data].kubik)
                }
                this.renderChart({
                labels: this.date.slice(0).slice(-12),
                datasets: [
                    {
                    label: "Kubik",
                    barThickness: 30,
                    maxBarThickness: 32,
                    backgroundColor: "#0275d8",
                    data: this.kubik.slice(0).slice(-12),
                    
                    }
                ]
                },
                
                { responsive: true, scales:{yAxes:[{ticks: {
                    beginAtZero: true
                    }}]}, maintainAspectRatio: false }
            );
            }
        },
        // watch: { 
        //     data() { 
        //         this.setData()
        //     }
        // }
        }
</script>
