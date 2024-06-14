const endpoint = "https://egarrisxn.github.io/resume-json/resume.json";

const fetchExampleAPI = async (endpoint: string) => {
  try {
    let res = await fetch(`${endpoint}`, {
      method: "GET",
      cache: "default",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    console.error(err + "Failed to fetch data");
  }
};

export const getExampleAPI = async () => {
  const data = await fetchExampleAPI(endpoint);
  return data.resumeData;
};
