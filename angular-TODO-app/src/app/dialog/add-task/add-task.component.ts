import { Component } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [
    InputTextModule,
    DropdownModule,
    FloatLabelModule,
    InputTextareaModule,
    CalendarModule,
  ],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  priorities: any[] | undefined;
  value8: any;

  constructor() {
    this.priorities = [
      { name: 'Low', value: 'Low' },
      { name: 'Medium', value: 'Medium' },
      { name: 'High', value: 'High' },
    ];
  }

  addTask() {
    console.log('Task added');
  }
}
