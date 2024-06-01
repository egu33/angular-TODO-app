import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

import { tasksList } from '../model/baseColumns';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  imports: [TableModule, CommonModule, TagModule, ButtonModule],
  standalone: true,
})
export class GridComponent implements OnInit {
  columns = [
    'id',
    'priority',
    'title',
    'description',
    'status',
    'limit',
    'timestamp',
  ];
  data: tasksList[] = [
    {
      id: 1,
      priority: 'high',
      title: 'task 1',
      description: 'test task 1',
      status: 'On Hold',
      limit: '2022-10-10',
      timestamp: '2021-10-10',
    },
    {
      id: 2,
      priority: 'middle',
      title: 'task 2',
      description: 'test task 2',
      status: 'Done',
      limit: '2023-10-10',
      timestamp: '2021-10-10',
    },
  ];

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  public getSeverity(stutas: string) {
    switch (stutas) {
      case 'On Hold':
        return 'info';
      case 'Done':
        return 'success';
      default:
        return '';
    }
  }

  // public show() {
  //   const ref = this.dialogService.open(AddTaskComponent, {
  //     header: 'Add Task',
  //     width: '70%',
  //   });
  // }
}
