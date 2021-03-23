import StatsRequests from './StatsRequests';

const mockedSdResponse = {
  mocked_sd_response: '517',
};

const statsRequests = new StatsRequests();
const mockedErrorMessage = 'Mocked error message';

test(`Given the method for calling the SEM to SD POST call is called with the SEM and N
inputs, verify that the URL and body are correct`, async () => {
  const sem = 2;
  const n = 5;
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedSdResponse),
  }));
  const expectedUrl = 'http://127.0.0.1:8000/rest_api/sem_to_sd/';
  const expectedBody = {
    body: `{"sem":${sem},"n_value":${n}}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const response = await statsRequests.semToSdConvert(sem, n);
  expect(response).toBe(mockedSdResponse);
  expect(window.fetch).toBeCalledWith(expectedUrl, expectedBody);
});

test(`Given the method for calling the SEM to SD POST call is called with the SEM and N
inputs, but with fetch() returning a non "okay" status,
verify "false" is returned and an error is logged to console`, async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve(mockedSdResponse),
    statusText: mockedErrorMessage,
  }));
  global.console = { error: jest.fn() };

  const response = await statsRequests.semToSdConvert(2, 5);
  expect(response).not.toBe(mockedSdResponse);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(`${mockedErrorMessage}`);
});

test(`Given the method for calling the CI to SD POST call is called with the bound, n,
and percent inputs, verify that the URL and body are correct.`, async () => {
  const upper = 5;
  const lower = 2;
  const n = 10;
  const percent = 90;
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedSdResponse),
  }));
  const expectedUrl = 'http://127.0.0.1:8000/rest_api/ci_to_sd/';
  const expectedBody = {
    body: `{"upper_bound":${upper},"lower_bound":${lower},"n_value":${n},"ci_percent":${percent}}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const response = await statsRequests.ciToSdConvert(upper, lower, n, percent);
  expect(response).toBe(mockedSdResponse);
  expect(window.fetch).toBeCalledWith(expectedUrl, expectedBody);
});

test(`Given the method for calling the CI to SD POST call is called with the proper
inputs, but with fetch() returning a non "okay" status,
verify "false" is returned and an error is logged to console`, async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve(mockedSdResponse),
    statusText: mockedErrorMessage,
  }));
  global.console = { error: jest.fn() };

  const response = await statsRequests.ciToSdConvert(5, 2, 10, 90);
  expect(response).not.toBe(mockedSdResponse);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(`${mockedErrorMessage}`);
});

test(`Given the method for calling the multipoint to Mean / SD POST call is called with the proper inputs,
verify that the URL and body are correct.`, async () => {
  const values = [1, 2, 3];
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedSdResponse),
  }));
  const expectedUrl = 'http://127.0.0.1:8000/rest_api/multipoint/';
  const expectedBody = {
    body: `{"data_points":[${values}]}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const response = await statsRequests.multipointConvert(values);
  expect(response).toBe(mockedSdResponse);
  expect(window.fetch).toBeCalledWith(expectedUrl, expectedBody);
});

test(`Given the method for calling the multipoint POST call is called with the proper
inputs, but with fetch() returning a non "okay" status,
verify "false" is returned and an error is logged to console`, async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve(mockedSdResponse),
    statusText: mockedErrorMessage,
  }));
  global.console = { error: jest.fn() };

  const response = await statsRequests.multipointConvert([1, 2, 3]);
  expect(response).not.toBe(mockedSdResponse);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(`${mockedErrorMessage}`);
});

test(`Given the method for calling the n to percent POST call is called with the proper inputs,
verify that the URL and body are correct.`, async () => {
  const givenN = 5;
  const totalN = 15;
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockedSdResponse),
  }));
  const expectedUrl = 'http://127.0.0.1:8000/rest_api/n_percent/';
  const expectedBody = {
    body: `{"given_n":${givenN},"total_n":${totalN}}`,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  };
  const response = await statsRequests.nPercentConvert(givenN, totalN);
  expect(response).toBe(mockedSdResponse);
  expect(window.fetch).toBeCalledWith(expectedUrl, expectedBody);
});

test(`Given the method for calling the n to percent POST call is called with the proper
inputs, but with fetch() returning a non "okay" status,
verify "false" is returned and an error is logged to console`, async () => {
  global.fetch = jest.fn().mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve(mockedSdResponse),
    statusText: mockedErrorMessage,
  }));
  global.console = { error: jest.fn() };

  const response = await statsRequests.nPercentConvert(5, 15);
  expect(response).not.toBe(mockedSdResponse);
  // eslint-disable-next-line no-console
  expect(console.error).toBeCalledWith(`${mockedErrorMessage}`);
});
