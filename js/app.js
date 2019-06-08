// Bar Chart

const days = ['S','M','T','W','T','F','S'];
const daily = [50,75,150,100,200,175,75];
const dailyTrafficChartHTML = document.getElementById("dailyTrafficChart");
const dailyTrafficChart = new Chart(dailyTrafficChartHTML, {
  type: 'bar',
  data: {
    labels: days,
    datasets: [
      { 
        data: daily,
        backgroundColor: '#7477bf',
        barPercentage: 1
      }
    ]
  },
  options: {
    scales: {
        xAxes: [{
            barPercentage: 0.6,
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 250
            }
        }]
    },
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
}
});

//Doughnut Chart

const userTypes = ['Phones','Tablets','Desktop'];
const userTypeStats = [300,400,2000];
const mobileUsersChartHTML = document.getElementById("mobileUsersChart");
const mobileUsersChart = new Chart(mobileUsersChartHTML, {
  type: 'doughnut',
  data: {
    labels: userTypes,
    datasets: [
      { 
        data: userTypeStats,
        borderWidth: 0,
        backgroundColor: ['#74b1bf','#81c98f','#7477bf']
      }
    ]
  },
    options: {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                padding: 20,
                fontSize: 18
            }
        }
    }
});

// Line Charts

const hours = ['10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm', '8pm'];
const hourly = [22,29,15,33,22,42,20,19,37,18,22];
const trafficChartHourlyHTML = document.getElementById("trafficChartHourly");
const trafficChartHourly = new Chart(trafficChartHourlyHTML, {
  type: 'line',
  data: {
    labels: hours,
    datasets: [
      { 
        data: hourly,
        label: 'Hourly',
        borderColor: '#7477bf',
        borderWidth: 1,
        pointRadius: 6,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        lineTension: 0,
        backgroundColor: '#7476bf30'
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 50
            }
        }]
    },
    legend: {
        display: false
    },
}
});

const lineDays = ['Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri', 'Sat'];
const lineDaily = [220,330,290,190,220,450,295,220,400,320,200];
const trafficChartDailyHTML = document.getElementById("trafficChartDaily");
const trafficChartDaily = new Chart(trafficChartDailyHTML, {
  type: 'line',
  data: {
    labels: lineDays,
    datasets: [
      { 
        data: lineDaily,
        label: 'Daily',
        borderColor: '#7477bf',
        borderWidth: 1,
        pointRadius: 6,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        lineTension: 0,
        backgroundColor: '#7476bf30'
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 500
            }
        }]
    },
    legend: {
        display: false
    },
}
});

const weeks = ['16-22','23-29','30-5','6-12','13-19','20-26','27-3','4-10','11-17','18-24', '25-31'];
const weekly = [500,1000,750,1250,1750,1250,1500,1000,1500,2000,1500];
const trafficChartWeeklyHTML = document.getElementById("trafficChartWeekly");
const trafficChartWeekly = new Chart(trafficChartWeeklyHTML, {
  type: 'line',
  data: {
    labels: weeks,
    datasets: [
      { 
        data: weekly,
        label: 'Weekly',
        borderColor: '#7477bf',
        borderWidth: 1,
        pointRadius: 6,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        lineTension: 0,
        backgroundColor: '#7476bf30'
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 2500
            }
        }]
    },
    legend: {
        display: false
    },
}
});

const months = ['Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar','Apr'];
const monthly = [2200,3500,3700,3200,5500,4200,3100,2700,3900,5100,6000];
const trafficChartMonthlyHTML = document.getElementById("trafficChartMonthly");
const trafficChartMonthly = new Chart(trafficChartMonthlyHTML, {
  type: 'line',
  data: {
    labels: months,
    datasets: [
      { 
        data: monthly,
        label: 'Months',
        borderColor: '#7477bf',
        borderWidth: 1,
        pointRadius: 6,
        pointBorderWidth: 2,
        pointBackgroundColor: '#fff',
        lineTension: 0,
        backgroundColor: '#7476bf30'
      }
    ]
  },
  options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                suggestedMax: 7000
            }
        }]
    },
    legend: {
        display: false
    },
}
});



//traffic chart selection
$('#trafficChartHourly,#trafficChartDaily,#trafficChartMonthly').hide();

$('.chart-options h3').click(function(event) {
    let chartType = $(event.currentTarget).text();
    $('#trafficChartHourly,#trafficChartDaily,#trafficChartWeekly,#trafficChartMonthly').hide();
    if (chartType === 'Hourly') {
        $('#trafficChartHourly').show();
    } else if (chartType === 'Daily') {
        $('#trafficChartDaily').show();
    } else if (chartType === 'Weekly') {
        $('#trafficChartWeekly').show();
    } else if (chartType === 'Monthly') {
        $('#trafficChartMonthly').show();
    }
});

//notifications toggle
$('.bell').click(function(event) {
    $('#notifications').toggle();
});

//remove notifications
$('.x-out').click(function(event) {
    $(event.target).parent().remove();
    if ($('#notifications').children().length === 0) {
        $('#notifications').remove();
        $('.new-notifications').hide();
        $('.bell').addClass('no-notifications');
    }
});

//navigation select
$('.nav-image-wrapper').click(function(event) {
    $('.nav-image-wrapper').removeClass('selected');
    $(event.currentTarget).addClass('selected');
});

//line chart select
$('.chart-options h3').click(function(event) {
    $('.chart-options h3').removeClass('selected-chart');
    $(event.currentTarget).addClass('selected-chart');
});

//send message
const userName = $('.user-search-bar');
const userMessage = $('.send-user-message');
const sendMessage = $('.send-button');
$(sendMessage).click(function(){
    if (userName.val() === '' && userMessage.val() === '') {
        alert('Missing User Name and Message');
    } else if (userName.val() === '') {
        alert('Missing User Name');
    } else if (userMessage.val() === '') {
        alert('Missing Message');
    } else {
        alert(`Message sent to ${userName.val()}`);
    }
});

//save settings popup function
function saveMsg() {
    $('.profile-to-public-wrapper h3').append('<div class= "popup">Saved!</div>'); 
    $('.popup').delay(1000).fadeOut(1500, 'linear');
    setTimeout(function(){
        $('.popup').remove();
    }, 2500);
}

//save settings in local storage
$('.save-button').click(function(){
    localStorage.setItem('timeZone', $('.select-timezone').children('option:selected').text());
    saveMsg();
    if($('#send-email-switch').is(':checked')) {
        localStorage.setItem('emailCheckbox', 'true');
    } else {
        localStorage.setItem('emailCheckbox', 'false');
    }
    if($('#public-switch').is(':checked')) {
        localStorage.setItem('publicCheckbox', 'true');
    } else {
        localStorage.setItem('publicCheckbox', 'false');
    }
});

//load saved settings
function load(){    
    const emailChecked = localStorage.getItem('emailCheckbox');
    const publicChecked = localStorage.getItem('publicCheckbox');
    if (emailChecked === 'true') {
        $('#send-email-switch').attr('checked');
    } else {
        $('#send-email-switch').removeAttr('checked');
    }
    if (publicChecked === 'true') {
        $('#public-switch').attr('checked');
    } else {
        $('#public-switch').removeAttr('checked');
    }
    if(localStorage.getItem('timeZone')){
        $('.select-timezone').val(localStorage.getItem('timeZone'));
    }
}

load();