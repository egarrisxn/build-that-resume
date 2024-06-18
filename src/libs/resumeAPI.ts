//! This is where your endpoint will go, once you have created one.
const endpoint = "https://egarrisxn.github.io/resume-json/resume.json";

const fetchResumeAPI = async (endpoint: string) => {
  try {
    const cacheBuster = new Date().getTime();
    let res = await fetch(`${endpoint}?t=${cacheBuster}`, {
      method: "GET",
      headers: {
        "Cache-Control": "no-cache",
        "Pragma": "no-cache",
        "Expires": "0",
        "Content-Type": "application/json; charset=utf-8",
      },
      credentials: "same-origin",
    });
    return res.json();
  } catch (err) {
    console.error("Failed to fetch data:", err);
    throw err;
  }
};

export const getResumeAPI = async () => {
  const data = await fetchResumeAPI(endpoint);
  return data.resumeData;
};
