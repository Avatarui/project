import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { GetImg } from '../model/img';
import { Constants } from '../config/constans';
@Injectable({
  providedIn: 'root'
})
export class Getimgservice {


      constructor(private constants : Constants , private http : HttpClient){}
      public async Getimg() {
        const url = this.constants.API_ENDPOINT + "/picture";
        const response = await lastValueFrom(this.http.get(url));
        return response as GetImg[];
      }

      public async InsertVote(uid: number, picture_id: number, point: number, isWinner: boolean ) {
        const url = this.constants.API_ENDPOINT + '/vote/insertimg';
        const body = {
          userid: uid,
          imgid: picture_id,
          score: point,
          isWinner: isWinner,
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
          const response = await this.http.post(url, body, { headers: headers }).toPromise();
          return true;
        } catch (error) {
          throw error;
        }
      }
      public async Updateimg(picture_id: number, point: number) {
        const url = this.constants.API_ENDPOINT + '/picture/update/'+picture_id;
        const body = {
          score: point,
        };
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        try {
          const response = await this.http.put(url, body, { headers: headers }).toPromise();
          return true;
        } catch (error) {
          throw error;
        }
      }
}