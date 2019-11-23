// setting up line graph
    let trafficData = {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26','37-3','4-10','11-17','18-24','25-31'],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
2500],
            backgroundColor:
                'rgba(116, 119, 191, .3)',
                  borderWidth: 1,
        }]
    };


    let trafficOptions = {
       legend: {
         display: false
       },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };
    let ctx = document.getElementById('traffic-chart');
    let trafficChart = new Chart(ctx, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
      });

//setting up the banner
const gotSomething = document.getElementById("alert");


gotSomething.innerHTML =
`
 <div class = "alert">
    <p class = "notice"><strong>Alert</strong> You have <strong>6</strong> overdue tasks to
   complete</p>
   <p class="alert-close">x</p>
  </div>
`

gotSomething.addEventListener('click', e => {
const element = e.target;
if (element.classList.contains("alert-close")){
  $(".alert").fadeOut("slow");
  $(".dot").hide();
 }
});


// Setting up bar graph
const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
      label: '# of Hits',
      data: [75, 115, 175, 125, 225, 200, 100],
      backgroundColor: '#7477BF',
      borderWidth: 1
  }]
};

const dailyOptions = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  legend : {
    display: false
  }
}
let dailyBar = document.getElementById('daily-chart');
let dailyChart = new Chart(dailyBar, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// set up doughnut Chart
const mobileData = {
  labels: ["Phones",
  "Tablet",
  "Desktop"],

  datasets:[{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]

  }]
};

const mobileOptions = {
  legend: {
    postion: 'right',
    labels: {
      boxWidth: 20,
      fontStyle: 'bold'
    }
  }
}

let mobileCanvas = document.getElementById('mobile-chart');
let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


const user = document.getElementById("userField");
const message = document.getElementById("message");
const send = document.getElementById("send");

send.addEventListener('click', () => {
  //make sure that the user has filled out the fields
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }


});
