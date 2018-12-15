import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Chart } from 'chart.js';


@Component({
  selector: 'page-statistics',
  templateUrl: 'statistics.html',
})
export class StatisticsPage {
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  months = [];

  @ViewChild('valueBarsCanvas') valueBarsCanvas;
  valueBarsChart: any;
 
  chartData = null;


  constructor(
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) { }

  // The type of chart we want to create ประเภทของแผนภูมิที่เราต้องการสร้าง
  // The data for our dataset ข้อมูลสำหรับชุดข้อมูลของเรา 
  // Configuration options go here ตัวเลือกการกำหนดค่าไปที่นี่

  ionViewDidLoad() {
    // Reference to our Firebase List อ้างอิงถึงรายชื่อ Firebase List ของเรา
    this.ref = this.db.list('AddDataWarehouse', ref => ref.orderByChild('NumberBottls'));
 
    // Catch any update to draw the Chart จับการอัปเดตใด ๆ เพื่อวาดแผนภูมิ
    this.ref.valueChanges().subscribe(result => {
      if (this.chartData) {
        this.updateCharts(result)
      } else {
        this.createCharts(result)
      }
    })
  }

  /* addDataUpdate() {
    this.ref.push(this.AddDataWarehouse).then(() => {
    })
  } */

  getReportValues() {
    let reportByMonth = {
     data: {
       labels: "Jan"
     }
    };
    
    return Object.keys(reportByMonth).map(a => reportByMonth[a]);
  }

  createCharts(data) {
    this.chartData = data;
   
    // Calculate Values for the Chart คำนวณค่าสำหรับแผนภูมิ
    let chartData = this.getReportValues();
   
    // Create the chart สร้างแผนภูมิ
    this.valueBarsChart = new Chart(this.valueBarsCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: Object.keys(this.months).map(a => this.months[a].Number),
        datasets: [{
          data: chartData,
          backgroundColor: '#32db64'
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[tooltipItems.datasetIndex].data[tooltipItems.index];
            }
          }
        },
        scales: {
          xAxes: [{
            ticks: {
              beginAtZero: true
            }
          }],
          yAxes: [{
            ticks: {
              callback: function (Number) {
                return Number;
              },
              suggestedMin: 0
            }
          }]
        },
      }
    });
  }

  updateCharts(data) {
    this.chartData = data;
    let chartData = this.getReportValues();
   
    // Update our dataset อัปเดตข้อมูลของเรา
    this.valueBarsChart.data.datasets.forEach((dataset) => {
      dataset.data = chartData
    });
    this.valueBarsChart.update();
  }


      

}

