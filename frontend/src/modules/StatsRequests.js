/**
 * Module to handle all requests for stats conversions
 */
export default class StatsRequests {
  constructor() {
    this.semToSdURL = 'http://127.0.0.1:8000/rest_api/sem_to_sd/';
    this.ciToSdURL = 'http://127.0.0.1:8000/rest_api/ci_to_sd/';
    this.multipointURL = 'http://127.0.0.1:8000/rest_api/multipoint/';
    this.nPercentURL = 'http://127.0.0.1:8000/rest_api/n_percent/';
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
        // todo string conversion needed?
        sem: semValue,
        n_value: nValue,
      }),
    });
    return StatsRequests.returnResponse(response);
  }

  /**
   * Method for making the call for CI to SD conversions
   * @param {number} upperBound upper bound for the CI to SD conversion
   * @param {number} lowerBound lower bounder for the CI to SD conversion
   * @param {number} nValue N Value
   * @param {number} ciPercent the CI Percentage from a strict set of expected percents
   * @returns {(JSON|false)}
   */
  async ciToSdConvert(upperBound, lowerBound, nValue, ciPercent) {
    const response = await fetch(this.ciToSdURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        upper_bound: upperBound,
        lower_bound: lowerBound,
        n_value: nValue,
        ci_percent: ciPercent,
      }),
    });
    return StatsRequests.returnResponse(response);
  }

  /**
   * Method for making the call for multiple points of data to be converted to Mean / SD
   * @param {[number]} dataPoints the data points to be converted
   * @returns {(JSON|false)}
   */
  async multipointConvert(dataPoints) {
    const response = await fetch(this.multipointURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data_points: dataPoints,
      }),
    });
    return StatsRequests.returnResponse(response);
  }

  /**
   * Method for making the call to convert two n values into percents
   * @param {number} givenN The initial given n value (example 40 out of 55, 40 is the given n)
   * @param {number} totalN the total n value
   * @returns {(JSON|false)}
   */
  async nPercentConvert(givenN, totalN) {
    const response = await fetch(this.nPercentURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        given_n: givenN,
        total_n: totalN,
      }),
    });
    return StatsRequests.returnResponse(response);
  }
}
