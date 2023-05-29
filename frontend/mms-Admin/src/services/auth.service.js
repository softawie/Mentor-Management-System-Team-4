import api from './api.service';

const auth = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({ url: '/auth/login', method: 'POST', data: credentials }),
    }),
    logout: builder.mutation({
      query: (userId) => ({ url: '/auth/logout', method: 'POST', data: { userId } }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({ url: '/auth/password-reset', method: 'POST', data }),
    }),
    forgotPassword: builder.mutation({
      query: ( data) => ({ url: '/auth/forgot', method: 'POST', data }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({ url: '/auth/password/change', method: 'POST', data }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation
} = auth;

export default auth;
