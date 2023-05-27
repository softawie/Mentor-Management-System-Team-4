import { storeItem } from "src/utils/localStorage";

const loginMock = async (values) => {
  console.log("values:", values);
  try {
    const mockRes = {
      user: {
        success: true,
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIiLCJlbWFpbCI6InJrZGVwbG95QGdtYWlsLmNvbSIsImlhdCI6MTY4MzQ4MTAxMn0.K_j_RzRcX7qg5FESveecc-ENYQ4tGmLH01yDx_rR7N0",
        data: {
          user_id: "2",
          firstName: "Raoul",
          lastName: "KUATE",
          email: "rkdeploy@gmail.com",
          bio: null,
          website: null,
          country: null,
          city: null,
          image_url: null,
          user_role: "admin",
          gitHub: null,
          instagram: null,
          linkedIn: null,
          twitter: null,
          created_at: "2023-05-07T11:57:32.372Z",
          updated_at: "2023-05-07T11:57:32.094Z",
        },
      },
    };
    storeItem(mockRes.user.token, mockRes.access_token);
    // store.dispatch(setToken(mockRes.access_token));

    return mockRes;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

export { loginMock };
