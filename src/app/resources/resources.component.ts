import { Component, OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
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
  selector: 'app-resources',
  templateUrl:'./resources.component.html',
  styleUrls: ['./resources.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ResourcesComponent implements OnInit {
   @ViewChild("chart")
   chart!: ChartComponent;

   myProgress : number = 30;
   public chartOptions!: Partial<ChartOptions>;

  Arr = Array;
  num:number = 6;
  num2:number =9;


  selectedTab: string = "material list";
  clicked(s: string) {
    this.selectedTab = "material list"
    
     if (s == '2') {
      this.selectedTab = "material profile"
     }


  }
  constructor() {    this.chartOptions = {
   series: [
     {
       name: "PRODUCT A",
       data: [40,]
     },
     {
       name: "PRODUCT B",
       data: [30, ]
     },
     {
       name: "PRODUCT C",
       data: [40, ]
     },
     {
       name: "PRODUCT D",
       data: [30,]
     },
     {
      name: "PRODUCT E",
      data: [20,]
    },
    {
      name: "PRODUCT F",
      data: [200,]
    },
    {
      name: "PRODUCT G",
      data: [30,]
    },
    {
      name: "PRODUCT H",
      data: [40,]
    },
    {
      name: "PRODUCT I",
      data: [100,]
    },
    {
      name: "PRODUCT I",
      data: [400,]
    },

   ],
   chart: {
     type: "bar",
     height: 540,
     width: 150,
     stacked: true,
     toolbar: {
       show: false
     },
     
   },
  
   responsive: [
     {
       breakpoint: 480,
       options: {
         legend: {
           position: "bottom",
           offsetX: -10,
           offsetY: 0
         }
       }
     }
   ],
   plotOptions: {
     bar: {
       horizontal: false,
       columnWidth: "45%",
       barHeight: '50px',
       borderRadius: 5,

     }
   },
   colors: [
      "#00D1DE",
      "#00A5B7",
      "#00879C",
      "#00637D",
      "#003F5C",
      "#003F5C",
      "#754B61",
      "#8E4F63",
      "#BD5364",
      "#EC5967",
    ],
    
   xaxis: {
      lines: {
         show:false,

      },
      
      show:false,
      type: "category",
      categories: [
        "",

      ]
    },
    yaxis: {
      lines: {
         show:false,

      },
       show: false,
       showAlways: false,
       showForNullSeries: false,

    },
    labels: {
       show: false,
    },
    
   
 
   legend: {
      show: false,
     position: "right",
     offsetY: 40
   },
   fill: {
     opacity: 1
   },
  
 };
 
     
   }

  ngOnInit(): void {
  }

}
