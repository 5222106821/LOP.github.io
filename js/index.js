// 柱状图模块1
(function(){
    var myChart = echarts.init(document.querySelector
        (".bar .chart"));
    var option = {
        color:["#3398DB"],
        tooltrip: {
            trigger:"axis",
            axisPointer: {
                type:"shadow"
            }
        },
        grid: {
            left: "0%",
            top: "10px",
            right:"0%",
            bottom:"4%",
            containLabel: true
        },
        xAxis:[
            {
                type:"category",
                data:["公用事业","商业","工业","房地产","综合","金融"],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel:{
                    color:"rgba(255,255,255,.6)",
                    fontSize:"12"
                },
                axisLine:{
                    show: false
                }
            }
        ],
        yAxis:[
            {
                type:"value",
                axisLabel: {
                    color:"rgba(255,255,255,.6)",
                    fontSize:"12"
                },
                axisLine:{
                    lineStyle:{
                        color:"rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [{
            name:"直接访问",
            type:"bar",
            barWidth:"60%",
            data:[10.16,4.08,8.71,12.32,1.34,25.52]
        }
    ]
    };
    myChart.setOption(option)
    window.addEventListener('resize',function(){
        myChart.resize();
    })

})();
// 堆叠线状图模块2
(function(){
    var myChart = echarts.init(document.querySelector
        (".line .chart"));
    var option = {
        title: {
          text: ''
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['综合', '商业', '工业', '公用事业', '房地产','金融']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2018-01-01', '2018-03-31', '2018-06-30', '2018-09-30', '2018-12-31', '2019-01-01', '2019-03-31','2019-06-30','2019-09-30']
        },
        yAxis: {
          show:false,
        },
        series: [
          {
            name: '综合',
            type: 'line',
            stack: 'Total',
            data: [5.328310,2.972141,1.783388,4.783322,-4.577015,-1.130064,-4.061329,3.644138,2.952466]
          },
          {
            name: '商业',
            type: 'line',
            stack: 'Total',
            data: [5.701136,6.373535,3.675896,2.664921,2.099528,2.962627,4.882364,4.350739,4.603818]
          },
          {
            name: '工业',
            type: 'line',
            stack: 'Total',
            data: [10.530130,9.031773, 9.861743,9.751459,6.131115,7.418912,7.794753,8.943285,9.021426]
          },
          {
            name: '公用事业',
            type: 'line',
            stack: 'Total',
            data: [14.366953,10.095341,13.489839,13.016080,3.901390,6.043222,8.384915,10.962921,11.303460]
          }, 
              {
            name: '房地产',
            type: 'line',
            stack: 'Total',
            data: [18.121952,9.040921,12.835296,11.820874,11.855030,12.774541,9.071026,13.203266,11.536068]
          },
           {
            name: '金融',
            type: 'line',
            stack: 'Total',
            data: [18.650302,24.404603,21.932361,28.194384,18.647745, 19.734888,56.721949,25.658777,22.177032]
          },

        ]
      };
      myChart.setOption(option)
      window.addEventListener('resize',function(){
        myChart.resize();})
})();
// 柱形图模块3
(function () {
  var myChart = echarts.init(document.querySelector
    (".bar2 .chart"));
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['证券,期货业', '其他金融业','银行业'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '利润率',
          type: 'bar',
          barWidth: '60%',
          data: [37.075897, 16.242532, 15.200000]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();})
})();
// 柱形图模块4
(function () {
  var myChart = echarts.init(document.querySelector
    (".bar3 .chart"))
    var option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['300059T1', '600783', '600864', '600155', '300309'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: '利润率',
          type: 'bar',
          barWidth: '60%',
          data: [53.559184,52.791887,50.297880,37.611918,34.749083]
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize',function(){
      myChart.resize();})
})();
// 饼图5
(function(){
  var myChart = echarts.init(document.querySelector(".pie .chart"))
  var option = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 0.6, name: '财务费用' },
          { value: 17.5, name: '营业成本' },
          { value: 1.9, name: '营业税金及附加' },
          { value: 14.9, name: '销售费用' },
          { value: 65.2, name: '管理费用' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();})
})();
//柱状折线图
(function(){
  var myChart = echarts.init(document.querySelector(".barline .chart"))
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    legend: {
      data: ['营业总成本', '营业总收入', '利润率','资产负债率']
    },
    xAxis: [
      {
        type: 'category',
        data: ['2019-3-31','2019-6-30','2019-9-30'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '金额',
        min: 0,
        max: 10e+08,
        interval: 50,
        axisLabel: {
          formatter: '{value} ml'
        }
      },
      {
        type: 'value',
        name: '比值',
        min: 0,
        max: 100,
        interval: 10,
      }
    ],
    series: [
      {
        name: '营业总成本',
        type: 'bar',
        data: [
          9.267591e+08,1.997742e+09,3.096765e+09
        ]
      },
      {
        name: '营业总收入',
        type: 'bar',
        data: [
          5.620134e+08 ,1.130847e+09 ,1.669572e+09
        ]
      },
      {
        name: '利润率',
        type: 'line',
        yAxisIndex: 1,
        data: [49.529858,52.219082,53.559184]
      },
      {
        name: '资产负债率',
        type: 'line',
        yAxisIndex: 1,
        data: [71.329596,62.817713,61.042425]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener('resize',function(){
    myChart.resize();})
})();