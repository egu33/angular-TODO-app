import { Component } from '@angular/core';
import { GridComponent } from '../../grid/component/grid.component';

import { ButtonModule } from 'primeng/button';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/dynamicdialog';
import { AddTaskComponent } from '../../dialog/add-task/add-task.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GridComponent, ButtonModule, DynamicDialogModule],
  providers: [DialogService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(public dialogService: DialogService) {}
  public show() {
    this.dialogService.open(AddTaskComponent, {
      header: 'ADD TASK',
      width: '60%',
      height: '50%',
      contentStyle: { overflow: 'auto' },
    });
  }
}
