"use server";

import { workshops } from "../../lib/workshops";
import {
  validateInterest,
  type InterestState,
} from "../../lib/interest";

export async function requestWorkshopInfo(
  _previousState: InterestState,
  formData: FormData,
): Promise<InterestState> {
  const values = {
    slug: String(formData.get("slug") ?? ""),
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    message: String(formData.get("message") ?? ""),
    consent: formData.get("consent") === "on",
  };

  const errors = validateInterest(values);
  if (!workshops.some((workshop) => workshop.slug === values.slug)) {
    errors.slug = "Choose a valid workshop.";
  }

  if (Object.keys(errors).length > 0) {
    return { values, errors, message: "Please check the highlighted fields.", success: false };
  }

  return {
    values,
    errors: {},
    message: "Your details passed validation. Email isn't connected yet; nothing was sent.",
    success: true,
  };
}
