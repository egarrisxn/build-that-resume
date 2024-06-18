//! Once you are finished using the example resume, you may delete this.

const endpoint = process.env.NEXT_PUBLIC_RESUME_API_URL || "https://egarrisxn.github.io/resume-json/resume.json";

const fetchExampleAPI = async (endpoint: string) => {
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

export const getExampleAPI = async () => {
  const data = await fetchExampleAPI(endpoint);
  return data.resumeData;
};
