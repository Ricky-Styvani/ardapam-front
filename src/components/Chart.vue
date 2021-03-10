<script>
        import { Bar } from "vue-chartjs";
        import axios from 'axios'
        export default {
        extends: Bar,
        // props: {
        //         data:Array  
        //     },
        data(){
            return{
                data:[],
                date:[],
                pendapatan:[],
                kubik:[]
            }
        },
        mounted(){
            this.getChart()
        },
        methods:{
        getChart(){
      axios.get(this.$store.state.host+'/api/chart',{headers:{Authorization:`Bearer ${window.localStorage.getItem('token')}`}})
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
                this.pendapatan = []
                for(var data in this.data){
                    this.date.push(this.data[data].month+'/'+this.data[data].year)
                    this.kubik.push(this.data[data].kubik)
                    this.pendapatan.push(this.data[data].pendapatan)
                }
                this.renderChart({
                labels: this.date.slice(0).slice(-12),
                datasets: [
                    {
                    label: "Pendapatan",
                    backgroundColor: "#5cb85c",
                    barThickness: 30,
                    maxBarThickness: 32,
                    data: this.pendapatan.slice(0).slice(-12),
                    
                    },
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
