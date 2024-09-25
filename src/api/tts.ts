const API_URL = import.meta.env.VITE_API_URL;

const fetchAudio = async (text: string): Promise<string> => {
  try {
    const response = await fetch(`${API_URL}/get-audio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Error en la solicitud: ${response.status} - ${errorText}`
      );
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(`Error del servidor: ${data.error}`);
    }

    return data.audioContent as string;
  } catch (error) {
    throw error;
  }
};

export default fetchAudio;
