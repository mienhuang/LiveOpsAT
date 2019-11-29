import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../../core/messageService';
declare const google: any;

@Component({
  selector: 'app-front-log',
  templateUrl: './front-log.component.html',
  styleUrls: ['./front-log.component.scss']
})
export class FrontLogComponent implements OnInit {
  @ViewChild('file', { static: true }) file: ElementRef;
  private readonly topics = [
    'ui.jobstate',
    'uimodal',
    'timeline',
    'timecarousel',
    'ReceiveInitialData',
    'correlation',
    'depth_setting',
    'hardware',
    'automation_switch',
    'well_sketch',
    'well_sketch_value',
    'template',
    'tasklist_done',
    'taskList',
    'notification',
    'notification_dismiss',
    'speed',
    'speed_value',
    'tension',
    'surface_tension_value',
    'head_tension_value',
    'tension_log',
    'tension_log_depth',
    'power',
    'lqc',
    'hardware_value_1',
    'hardware_messages_1',
    'hardware_value_2',
    'hardware_messages_2',
    'hardware_value_3',
    'hardware_messages_3',
    'hardware_value_4',
    'hardware_messages_4',
    'hardware_value_5',
    'hardware_messages_5',
    'hardware_value_6',
    'hardware_messages_6',
    'lqc_first_inner',
    'lqc_first_outer',
    'lqc_second_inner',
    'lqc_second_outer',
    'lqc_third_inner',
    'lqc_third_outer',
    'power_first_inner',
    'power_first_outer',
    'power_second_inner',
    'power_second_outer',
    'tension_log_value_1',
    'tension_log_value_2',
    'tension_log_depth_value_1',
    'total'
  ];
  fileToUpload: File = null;
  totalChart;
  itemChart;
  hasFile = false;
  showFilter = false;
  items: any;
  dropOver = false;
  changeDropOvserTimmer: any;
  keyWords = '';
  filterKeys = [];
  constructor(private _ms: MessageService) { }

  ngOnInit() {
    this._ms.sendMessage('Use button select file or drop file to this page', '😁');
  }

  removeKeys(index: number) {
    this.filterKeys.splice(index, 1);
    this.redrawCurve();
  }

  addFilterKey() {
    this.filterKeys.push(this.keyWords);
    this.keyWords = '';
    this.redrawCurve();
  }

  redrawCurve() {
    const list = this.topics.filter(topic => this.filterKeys.some(key => topic.indexOf(key) !== -1));
    this.drawTopicChart(this.items, this.filterKeys.length === 0 ? this.topics : list);
  }

  chartInit = () => {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.setChartsTool);
  }

  setChartsTool = () => {
    this.totalChart = new google.visualization.LineChart(document.getElementById('curve_chart'));
    this.itemChart = new google.visualization.LineChart(document.getElementById('curve_chart2'));
    this.drawTotalChart(this.items);
    this.drawTopicChart(this.items);
    this.showFilter = true;
  }

  onDrop(e) {
    const file = e.dataTransfer.files.item(0);
    this.readFile(file);
    e.preventDefault();
  }
  onDragOver(e) {
    this.dropOver = true;
    clearTimeout(this.changeDropOvserTimmer);
    this.changeDropOvserTimmer = setTimeout(() => {
      this.dropOver = false;
    }, 300)
    e.stopPropagation();
    e.preventDefault();
  }

  triggerFileSelect() {
    this.file.nativeElement.click();
  }

  readFile(file) {
    if (file.type !== 'text/plain') {
      this._ms.sendMessage('Wrong File Selected', '😱')
      return;
    };

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      try {
        this.items = JSON.parse(reader.result.toString());
        this.hasFile = true;
        this.chartInit();
      } catch {
        this._ms.sendMessage('Wrong File Selected', '😱')
      }
    };
  }

  handleFileInput(event) {
    const file = event.target.files.item(0);
    event.target.value = '';
    this.readFile(file);
  }


  private drawTopicChart(items, topicList = this.topics) {
    const indexes = JSON.parse(items.indexes);
    const labelArray = ['Time'];
    const startData = [];
    topicList.forEach((topic) => {
      if (topic !== 'total' && topic !== 'indexes') {
        labelArray.push(topic);
        const item = JSON.parse(items[topic]);
        item.forEach((count, i) => {
          const pre = startData[i] || [];
          startData[i] = [...pre, count]
        });
      };
    });
    indexes.forEach((index, i) => {
      startData[i].unshift(index);
    })
    startData.unshift(labelArray);

    const topicsChartData = google.visualization.arrayToDataTable(startData);
    const topicsChartOptions = {
      title: 'All Topics count in Min',
      curveType: 'function',
      legend: { position: 'bottom' }
    };
    this.itemChart.draw(topicsChartData, topicsChartOptions)
  }

  private drawTotalChart(items) {
    const totalArray = JSON.parse(items.total);
    const indexes = JSON.parse(items.indexes);
    const startData = [
      ['Time', 'Total']
    ];

    totalArray.forEach((count: number, index: number) => {
      startData.push([indexes[index], count])
    });

    const totalChartData = google.visualization.arrayToDataTable(startData);
    const totalChartOptions = {
      title: 'Total count recieved in Min',
      curveType: 'function',
      legend: { position: 'bottom' }
    };
    this.totalChart.draw(totalChartData, totalChartOptions)
  }


}
