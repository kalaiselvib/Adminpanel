/*
$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})
*/
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("nav_close").style.display = "block";
    document.getElementById("nav_open").style.display = "none";
    document.getElementById("wrapper").style.paddingLeft = "250px";

}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0px";
    document.getElementById("nav_close").style.display = "none";
    document.getElementById("nav_open").style.display = "block";
    document.getElementById("wrapper").style.paddingLeft = "0px";
   
}



 // Charts
 let myChart = document.getElementById('myChart').getContext('2d');
 let myReport = document.getElementById('myReport').getContext('2d');
 let myBarChart = document.getElementById('bar_chart').getContext('2d');

 // Global Options
 Chart.defaults.global.defaultFontFamily = 'Lato';
 Chart.defaults.global.defaultFontSize = 14;
 Chart.defaults.global.defaultFontColor = '#222';

 let massPopChart = new Chart(myChart, {
   type:'line', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
   data:{
     labels:['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Lorem'],
     datasets:[{
       label:'Data',
       data:[
         617594,
         181045,
         153060,
         106519,
         105162,
         95072
       ],
       //backgroundColor:'green',
       backgroundColor:[
         'rgba(255, 99, 132, 0.6)',
         'rgba(54, 162, 235, 0.6)',
         'rgba(255, 206, 86, 0.6)',
         'rgba(75, 192, 192, 0.6)',
         'rgba(153, 102, 255, 0.6)',
         'rgba(255, 159, 64, 0.6)',
         'rgba(255, 99, 132, 0.6)'
       ],
      
     }]
   },
   options:{
     title:{
       display:true,
       //text:'Largest Cities In Massachusetts',
       fontSize:25
     },
     scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
     legend:{
       display:true,
       position:'right',
       labels:{
         fontColor:'#000'
       }
     },
     layout:{
       padding:{
         left:30,
         right:0,
         bottom:0,
         top:0
       }
     },
     tooltips:{
       enabled:true
     }
   }
 });

 let massRepChart = new Chart(myReport, {
  type:'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Lorem'],
    datasets:[{
      label:'Data',
      data:[
        617594,
        181045,
        153060,
       
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
     
    }]
  },
  options:{
    title:{
      display:true,
      //text:'Largest Cities In Massachusetts',
      fontSize:25
    },
 
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});


let massBarChart = new Chart(myBarChart, {
  type:'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
  data:{
    labels:['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Lorem'],
    datasets:[{
      label:'Data',
      data:[
        617594,
        181045,
        153060,
        566519,
        105162,
        95072
      ],
      //backgroundColor:'green',
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ],
     
    }]
  },
  options:{
    title:{
      display:true,
      //text:'Largest Cities In Massachusetts',
      fontSize:25
    },
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
  },
    legend:{
      display:false,
      position:'right',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:0,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
});



 