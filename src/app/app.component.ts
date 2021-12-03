import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  elementToAdd;
  list: any = [];

  addToList(item) {
    if (item.value != '') {
      let obj = {
        name: item.value,
        status: false,
      };
      this.list.push(obj);
      item.value = '';
    } else {
      alert('Please enter text');
    }
    console.log(this.list);
  }

  moveUp(i, j) {
    if (i >= 0) {
      let temp = this.list[i];
      this.list[i] = this.list[j];
      this.list[j] = temp;
    }
  }

  moveDown(i, j) {
    if (j <= this.list.length - 1) {
      let temp = this.list[i];
      this.list[i] = this.list[j];
      this.list[j] = temp;
    }
  }

  onCheck() {}
}
