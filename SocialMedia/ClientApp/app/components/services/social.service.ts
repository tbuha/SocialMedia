﻿import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SocialService {

    private appid = '76247eeaa25835db3c854fb894704ddf';
    constructor(private http: Http) { }

    getWeather(city: string) {
        const endpoint = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.appid + '';
        return this.http.get(endpoint)//, {search: searchParams})
    }
}