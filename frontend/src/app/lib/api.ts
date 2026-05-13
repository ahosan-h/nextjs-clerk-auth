export const syncUserApi = async (
  token: string
) => {
  const response = await fetch(
    "http://localhost:3929/api/user/sync",
    {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      "Failed to sync user"
    );
  }

  return response.json();
};