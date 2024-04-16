import { Component } from '@angular/core';
import { RoomsService, IRooms } from '../../services/rooms.service';
import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddRoomComponent } from '../add-room/add-room.component';
import { CommonModule } from '@angular/common';

type RoomType = {
  roomID: number;
  roomName: string;
  roomLocation: string;
  roomPrice: number;
  roomCheckIn: number;
  roomCheckOut: number;
  roomRating: number;
  imageURL: string;
};

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [FormsModule, NgClass, AddRoomComponent, CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  title = 'Room List';
  isHidden = false;
  search = '';
  rooms: IRooms[] = [];

  constructor(private _roomsService: RoomsService) {}

  ngOnInit(): void {
    //get called once the component has been initialized

    this._roomsService.getRooms().subscribe((data) => (this.rooms = data));
  }

  trackByRoomID(index: number, room: any): number {
    return room.roomID; // Assuming roomID is a unique identifier
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
