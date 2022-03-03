const BASE_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oi30gNm2QXH7NcuJGkRM/scores';

const sendScore = async (formData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const status = await response.json();
  return status;
};

const fetchScores = async () => {
  const response = await fetch(BASE_URL);
  const scores = response.json();
  return scores;
};

export { fetchScores, sendScore };
