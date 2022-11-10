import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
})
export class CarlistComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  posts = [
    { title: 'Открылся новый ресторан', content: 'Сегодня все быстро в рестик', date: "10.11.2022" },
    { title: 'ЦБ увеличил процентную ставку', content: 'Всё как всегда', date: "8.11.2022" },
    { title: 'Новости спецоперации', content: 'Мы переходим в наступление', date: "3.11.2022" },
  ];

  // check(): void {
  //   let user = localStorage.getItem("user");
  //   if (user === null) {
  //     console.log('Вы не вошли');
  //   } else {
  //     let temp = JSON.parse(user);
  //     console.log('username ' + temp.username);
  //     console.log('firstname ' + temp.firstname);
  //     console.log('surname ' + temp.surname);
  //   }
  // }
}
