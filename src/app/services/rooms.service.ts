import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IRooms {
  roomID: number;
  roomName: string;
  roomLocation: string;
  roomPrice: number;
  roomCheckIn: number;
  roomCheckOut: number;
  roomRating: number;
  imageURL: string;
}


@Injectable({
  providedIn: 'root'
})

export class RoomsService {
  private url: string = 'http://localhost:3000/room-list';

  constructor(private http: HttpClient) {}
  getRooms(): Observable<IRooms[]> {
    return this.http.get<IRooms[]>(this.url);
  }
  addRooms(): Observable<IRooms> {
    return this.http.post<IRooms>(this.url, {
      roomID: 5,
    roomName: 'Cozy Single Room',
    roomLocation: 'City Center',
    roomPrice: 100,
    roomCheckIn: 1609459200,
    roomCheckOut: 1612137600,
    roomRating: 4.5,
    imageURL: 'https://via.placeholder.com/150'
    });
  }

  updateRooms(): Observable<IRooms> {
    return this.http.put<IRooms>(this.url + '/1', {
      roomID: 1,
    roomName: 'Cozy Single Room',
    roomLocation: 'City Center',
    roomPrice: 100,
    roomCheckIn: 1609459200,
    roomCheckOut: 1612137600,
    roomRating: 4.5,
    imageURL: 'https://via.placeholder.com/150'
    });
  }

  deleteRooms(): Observable<IRooms> {
    return this.http.delete<IRooms>(this.url + '/1');
  }
  // constructor() { }
}
