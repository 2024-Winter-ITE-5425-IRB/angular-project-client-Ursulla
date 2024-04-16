import { Component } from '@angular/core';
import { RoomsService, IRooms } from '../../services/rooms.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  rooms: IRooms[] = [];

  constructor(private _roomsService: RoomsService) {}

  ngOnInit(): void {
    //get called once the component has been initialized

    this._roomsService.getRooms().subscribe((data) => (this.rooms = data));
  }

  addnewRoom() {
    this._roomsService.addRooms().subscribe((data) => console.log(data));
  }
  updatetheRoom() {
    this._roomsService.updateRooms().subscribe((data) => console.log(data));
  }
  deletetheRoom() {
    this._roomsService.deleteRooms().subscribe((data) => console.log(data));
  }
}
