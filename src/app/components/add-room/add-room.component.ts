import { Component, Output, EventEmitter } from '@angular/core';
import {
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

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
  selector: 'app-add-room',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-room.component.html',
  styleUrl: './add-room.component.css'
})
export class AddRoomComponent {
  @Output() addRoom: EventEmitter<RoomType> =
  new EventEmitter<RoomType>();
onSubmit(form: NgForm) {
  console.log(form);
  let roomID = Math.floor(Math.random() * 1000);
  let roomName = form.value.roomName;
  let roomLocation = form.value.roomLocation;
  let roomPrice = form.value.roomPrice;
  let roomCheckIn = form.value.roomCheckIn;
  let roomCheckOut = form.value.roomCheckOut;
  let roomRating = form.value.roomRating;
  let imageURL = form.value.imageURL;
  this.addRoom.emit({ roomID, roomName, roomLocation, roomPrice, roomCheckIn, roomCheckOut,  roomRating, imageURL });
}

roomForm = new FormGroup({
  roomName: new FormControl('', [Validators.required, Validators.minLength(3)]),
  roomLocation: new FormControl('', [Validators.required, Validators.minLength(3)]),
  roomPrice: new FormControl<number | null>(null, [
    Validators.required,
    Validators.pattern('^[0-9]{1,5}$'),
  ]),
    roomCheckIn: new FormControl<number | null>(null, [
      Validators.required,
      Validators.pattern('^[0-9]{1,5}$'),
    ]),
      roomCheckOut: new FormControl<number | null>(null, [
        Validators.required,
        Validators.pattern('^[0-9]{1,5}$'),
      ]),
        roomRating: new FormControl<number | null>(null, [
          Validators.required,
          Validators.pattern('^[0-9]{1,5}$'),
        ]),
          imageURL: new FormControl('', [Validators.required, Validators.minLength(3)]),
});

onSubmit2() {
  this.addRoom.emit({
    roomID: Math.floor(Math.random() * 1000),
    roomName: this.roomForm.value.roomName!,
    roomLocation: this.roomForm.value.roomLocation!,
    roomPrice: this.roomForm.value.roomPrice!,
    roomCheckIn: this.roomForm.value.roomCheckIn!,
    roomCheckOut: this.roomForm.value.roomCheckOut!,
    roomRating: this.roomForm.value.roomRating!,
    imageURL: this.roomForm.value.imageURL!,
  });
}
}
