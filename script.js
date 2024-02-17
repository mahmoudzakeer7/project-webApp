var waterData = 80;
var cropData = 100;
var energyData = 100;
new Chart(document.getElementById('pie-chart'), {
    type: 'pie',
    data: {
        labels: ["WATER USAGE", "CROP HEALTH", "ENERGY CONSUPTION"],
        datasets: [{
            backgroundColor: ["#0210F6", "#00F90F",
                "#F90000"
            ],
            data: [waterData, cropData, energyData]
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Pie Chart for admin panel'
        },
        reponsive: true
    }
});

