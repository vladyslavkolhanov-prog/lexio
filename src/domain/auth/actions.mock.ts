import { fn } from "@storybook/test"

import { resolveAfter } from "@/shared/utils/resolve-after"

export const signIn = fn()
  .mockName("signIn")
  .mockImplementation(async () =>
    resolveAfter(
      {
        data: { success: true, message: "Mock sign in" },
        status: "success",
        error: null,
      },
      2000
    )
  )

export const signInWithProvider = fn()
  .mockName("signInWithProvider")
  .mockImplementation(async () =>
    resolveAfter(
      {
        data: { success: true, message: "Mock sign in with provider" },
        status: "success",
        error: null,
      },
      2000
    )
  )

export const signUp = fn().mockName("signUp")
export const signOut = fn().mockName("signOut")
export const resendEmail = fn().mockName("resendEmail")
export const forgotPassword = fn().mockName("forgotPassword")
export const resendForgotPassword = fn().mockName("resendForgotPassword")
export const resetPassword = fn().mockName("resetPassword")
