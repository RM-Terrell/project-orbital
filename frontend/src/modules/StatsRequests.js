/**
 * Module to handle all requests for stats conversions
 */
export default class StatsRequests {
  constructor() {
    this.semToSdURL = 'http://127.0.0.1:8000/rest_api/sem_to_sd/';
  }

  /**
   * Method to check for an error in the response
   * @param {response} response
   * @returns {(JSON|false)}
   */
  static async returnResponse(response) {
    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.error(response.statusText);
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
  async semToSdConvert(semValue, nValue) {
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
