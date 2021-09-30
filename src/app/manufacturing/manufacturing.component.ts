import { Component, OnInit, ViewChild } from '@angular/core';
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
  ApexMarkers,
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
  axisTicks: ApexXAxis|any;
  axisBorder: ApexXAxis|any;
  yaxis: ApexYAxis|any;
  grid: ApexGrid|any;
  states: ApexStates|any;
  title: ApexTitleSubtitle|any;
  subtitle: ApexTitleSubtitle|any;
  theme: ApexTheme|any;
  markers: ApexMarkers|any;
};
@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css']
})
export class ManufacturingComponent implements OnInit {
  Arr = Array;
  num:number = 6;
  num2:number = 7;
  @ViewChild("chart")
  chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>;

  selectedTab: string = "list";
  clicked(s: string) {
    this.selectedTab = "list"
    
     if (s == '2') {
      this.selectedTab = "chart"
     }


  }
  selectedTab2!: string;
  clicked2(s: string) {
    if (s == '1')
    this.selectedTab2 = "material"
    if (s == '2')
    this.selectedTab2 = "function"
    if (s == '3')
    this.selectedTab2 = "product"
  }
  constructor() { 
    this.chartOptions = {
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

  ngOnInit(): void {
  }

}
