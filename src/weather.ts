import { BASE_URL } from "./constants";

export abstract class WeatherAPI {
  protected city: string;
  protected date: string;
  protected unit: string

  constructor(city, date, unit) {
    this.city = city
    this.date = date
    this.unit = unit
  }

  private getErrorMessage(error) {
    if ('code' in error && 'info' in error) {
      return `Error ${error.code}: ${error.info}`
    } else {
      return error
    }
  }

  private async fetchHistorical() {
    try {
      const url = `${BASE_URL}&query=${this.city}&units=${this.unit}&historical_date=${this.date}`
      const response = await fetch(url)
      const data = await response.json()
      if (data.hasOwnProperty('error')) {
        throw data.error
      }
      await console.log('Historical: ', data)
    } catch (error) {
      console.log(this.getErrorMessage(error))
    }
  }

  protected async getHistorical() {
    await this.fetchHistorical()
  }

  public async init() {
    await this.getHistorical()
  }
}

export class HistoricalWeather extends WeatherAPI { 
  constructor(city: string, date, unit = 'f') { 
      super(city, date, unit);
  }
}
