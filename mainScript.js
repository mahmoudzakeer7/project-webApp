
const title = document.getElementById('title');
const profileName = document.getElementsByName('profileName');

//boxes
const chartDash = document.querySelector('.chartDash');
const irrigation = document.querySelector('.irrigation');
const energy = document.querySelector('.energy');
const greenArea = document.querySelector('.green-area');
const temp = document.querySelector('.temp');
const control = document.querySelector('.control');

//menue
const setting = document.querySelector('.setting');
const energyBox = document.querySelector('.energyBox');
const crop = document.querySelector('.crop');
const chartBox = document.querySelector('.chartBox');
const water = document.querySelector('.water');
const user = document.querySelector('.user');
const dash = document.querySelector('.dash');
const exit = document.querySelector('.log-out');

const params = new URLSearchParams(window.location.search);

var options = {
    series: [
        {
            name: "Actual",
            data: [
                {
                    x: "2011",
                    y: 12,
                    meta: {
                        "24-30 aug": 23,
                        "16-23 aug": 20,
                        "1-7 aug": 15
                    }
                },
                {
                    x: "2012",
                    y: 44,
                    meta: {
                        "24-30 aug": 13,
                        "16-23 aug": 10,
                        "1-7 aug": 51
                    }
                },
                {
                    x: "2013",
                    y: 54,
                    meta: {
                        "24-30 aug": 3,
                        "16-23 aug": 0,
                        "1-7 aug": 13
                    }
                },
                {
                    x: "2014",
                    y: 66,
                    meta: {
                        "24-30 aug": 2,
                        "16-23 aug": 2,
                        "1-7 aug": 1
                    }
                }
            ]
        }
    ],
    chart: {
        height: 350,
        type: "bar"
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ["#0ed75e"],

    tooltip: {
        custom: (opts) => {
            const { seriesIndex, dataPointIndex, w } = opts;

            const meta = w.config.series[seriesIndex].data[dataPointIndex].meta;
            return Object.entries(meta)
                .map(([k, v]) => {
                    return `
                <div>
                  ${k} - ${v}  
                </div>
              `;
                })
                .join("");
        }
    }
};

var chart = new ApexCharts(document.querySelector("#chart-energy"), options);
chart.render();

window.onload = function () {
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.remove('hide');
    greenArea.classList.remove('hide');
    control.classList.add('hide');
    profileName.textContent = params.get('userName');
}
dash.addEventListener('click', () => {
    title.textContent = 'dashboard';
    irrigation.classList.add('hide');
    energy.classList.add('hide');
    chartDash.classList.add('hide');
    temp.classList.remove('hide');
    greenArea.classList.remove('hide');
    control.classList.add('hide');


});

water.addEventListener('click', () => {
    title.textContent = 'irrigation';
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.remove('hide');
    greenArea.classList.add('hide');
    temp.classList.add('hide');
    control.classList.add('hide');


});

energyBox.addEventListener('click', () => {
    title.textContent = 'energy consumption';
    energy.classList.remove('hide');
    chartDash.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.add('hide');

});


chartBox.addEventListener('click', () => {
    title.textContent = 'chart';
    chartDash.classList.remove('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.add('hide');

});

setting.addEventListener('click', () => {
    title.textContent = 'control';
    chartDash.classList.add('hide');
    energy.classList.add('hide');
    irrigation.classList.add('hide');
    temp.classList.add('hide');
    greenArea.classList.add('hide');
    control.classList.remove('hide');
});

exit.addEventListener('click',()=>{
    location.assign('index.html');
});