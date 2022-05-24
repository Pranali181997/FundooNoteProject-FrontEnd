import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../Services/userService/user.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length===0) {
      return value;
    }
    const recievedNoteList = [];
    for (const note of value) {

      if (note['title'] || note['description']) {
        recievedNoteList.push(note);
      }
      return recievedNoteList;
    }
  }
}
