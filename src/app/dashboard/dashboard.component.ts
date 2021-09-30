import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment'

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexFill,
  ApexGrid,
  ApexAnnotations,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexStates,
  ApexTheme,
  ApexLegend,
} from 'ng-apexcharts';



export type ChartOptions = {
  chart: ApexChart|any;
  annotations: ApexAnnotations|any;
  colors: string[]|any;
  dataLabels: ApexDataLabels|any;
  series: ApexAxisChartSeries|any;
  stroke: ApexStroke|any;
  labels: string[]|any;
  legend: ApexLegend|any;
  fill: ApexFill|any;
  tooltip: ApexTooltip|any;
  plotOptions: ApexPlotOptions|any;
  responsive: ApexResponsive[]|any;
  xaxis: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  grid: ApexGrid|any;
  states: ApexStates|any;
  title: ApexTitleSubtitle|any;
  subtitle: ApexTitleSubtitle|any;
  theme: ApexTheme|any;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent {
  Arr = Array;
  num:number = 3;
  num2:number = 4;
  num3:number = 2;

  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;
  public chartOptions2!: Partial<ChartOptions>;


  selectedTab: string = "function";
  clicked(s: string) {
    this.selectedTab = "function"
    
     if (s == '2') {
      this.selectedTab = "route"
     }

     if (s == '3') {
      this.selectedTab = "job order"
     }
  }
  constructor() {
    
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Route 04",
              y: [
                new Date(" 23 Sep 2021 18:30:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 19:50:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Route 03",
              y: [
                new Date(" 23 Sep 2021 17:28:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 16:01:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Route 02",
              y: [
                new Date(" 23 Sep 2021 15:00:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 14:29:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Route 01",
              y: [
                new Date(" 23 Sep 2021 13:30:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 15:02:00 GMT" ).getTime(),
              ]
            }
          ]
        }
      ],
      chart: {
        height: 310,
        type: "rangeBar"
      },
      colors: [

        "#FF7F5C"
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
      },
      xaxis: {
        type: 'datetime',
        
      }
    };
    this.chartOptions2 = {
      series: [
        {
          data: [
            {
              x: "Job 04",
              y: [
                new Date(" 23 Sep 2021 17:30:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 18:50:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Job 03",
              y: [
                new Date(" 23 Sep 2021 12:28:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 16:01:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Job 02",
              y: [
                new Date(" 23 Sep 2021 15:00:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 18:29:00 GMT" ).getTime(),
              ]
            },
            {
              x: "Job 01",
              y: [
                new Date(" 23 Sep 2021 13:30:00 GMT" ).getTime(),
                new Date(" 23 Sep 2021 15:02:00 GMT" ).getTime(),
              ]
            }
          ]
        }
      ],
      chart: {
        height: 310,
        type: "rangeBar"
      },
      colors: [

        "#FF7F5C"
      ],
      plotOptions: {
        bar: {
          horizontal: true,
          
        }
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm:ss',
        },
      },
      xaxis: {
        type: 'datetime',
        
      }
    };
  }
  

   }
  
 
  



