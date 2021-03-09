import StatsRequests from './StatsRequests';

const mockedSemSdResponseObject = {
  mocked_sd_response: '517',
};

const statsRequests = new StatsRequests();

test(`Given the method for calling the SEM to SD POST call is called with the SEM and N
inputs, verify that the called URL is correct`, async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedSemSdResponseObject),
  }));
  const expectedUrl = 'http://127.0.0.1:8000/rest_api/sem_to_sd/';
  const expectedBody = {
    body: '{"sem":"2","n_value":5}',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const response = await statsRequests.semToSdConvert(2, 5);
  expect(response).toBe(mockedSemSdResponseObject);
  expect(window.fetch).toBeCalledWith(expectedUrl, expectedBody);
});

test(`Given the method for calling the SEM to SD POST call is called with the SEM and N
inputs, but with fetch() returning a non "okay" status,
verify "false" is returned and an error is logged to console`, async () => {
  const mockedErrorMessage = 'Mocked error message';
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve(mockedSemSdResponseObject),
    statusText: mockedErrorMessage,
  }));
  global.console = { error: jest.fn() };

  const response = await statsRequests.semToSdConvert(2, 5);
  expect(response).not.toBe(mockedSemSdResponseObject);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(`${mockedErrorMessage}`);
});
