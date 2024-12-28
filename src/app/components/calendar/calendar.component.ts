import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentMonth: number;
  currentYear: number;
  today: Date;
  months: string[];
  calendarDays: any[] = [];

  constructor() {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.months = [
      'January', 'February', 'March', 'April', 'May',
      'June', 'July', 'August', 'September', 'October',
      'November', 'December'
    ];
  }

  ngOnInit(): void {
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  generateCalendar(month: number, year: number): void {
    this.calendarDays = [];
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(null); // Empty cells before the first day
        } else if (date > daysInMonth) {
          break; // Stop if no more dates
        } else {
          week.push(date);
          date++;
        }
      }
      this.calendarDays.push(week);
    }
  }

  prevMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar(this.currentMonth, this.currentYear);
  }
}
