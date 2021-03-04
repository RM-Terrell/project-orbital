/**
 * Module to handle all requests for stats conversions
 */
export default class StatsRequests {
  constructor() {
    this.semToSdURL = 'http://127.0.0.1:8000/rest_api/sem_to_sd/';
  }

  static async returnResponse(response) {
    if (!response.ok) {
      return false;
    }
    const body = await response.json();
    return body;
  }

  /**
   * Method for making the call for SEM to SD conversions
   * @param {number} semValue
   * @param {number} nValue
   * @returns {(JSON|false)}
   */
  async semSdPost(semValue, nValue) {
    const response = await fetch(this.semToSdURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sem: String(semValue),
        n_value: nValue,
      }),
    });
    return StatsRequests.returnResponse(response);
  }
}
