import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  styleUrls: ['./chart.component.css'],
  templateUrl: './chart.component.html'
})
export class ChartComponent implements OnInit {
  @ViewChild('acquisitionsCanvas', { static: true }) acquisitionsCanvas!: ElementRef;
  @ViewChild('primaryYears', { static: true }) primaryYears!: ElementRef;
  @ViewChild('primaryDatas', { static: true }) primaryDatas!: ElementRef;
  @ViewChild('secondaryYears', { static: true }) secondaryYears!: ElementRef;
  @ViewChild('secondaryDatas', { static: true }) secondaryDatas!: ElementRef;

  private myChart: Chart | undefined;

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    // Define your initial data here or get it from a service
    const data = [
      { year: '2020', count: 10 },
      { year: '2021', count: 20 },
      // Add more data points as needed
    ];

    const canvas = this.acquisitionsCanvas.nativeElement.getContext('2d');

    this.myChart = new Chart(
      canvas,
      {
        type: 'bar',
        options: {
          animation: false,
          plugins: {
            legend: {
              display: false
            },
            tooltip: {
              enabled: false
            }
          }
        },
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  }

  private updateChartWithData(data: any[]): void {
    if (this.myChart) {
      this.myChart.data.labels = data.map(row => row.year);
      this.myChart.data.datasets[0].data = data.map(row => row.count);
      this.myChart.update();
    }
  }

  updateChart(primaryYear: any, primaryData: any, secondaryYear: any, secondaryData: any): void {
    const data = [
      { year: primaryYear, count: primaryData },
      { year: secondaryYear, count: secondaryData },
      // Add more data points as needed
    ];

    this.updateChartWithData(data);
  }
}
