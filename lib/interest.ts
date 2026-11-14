export type InterestValues = {
  slug: string;
  name: string;
  email: string;
  message: string;
  consent: boolean;
};

export type InterestField = keyof InterestValues;
export type InterestErrors = Partial<Record<InterestField, string>>;

export type InterestState = {
  values: InterestValues;
  errors: InterestErrors;
  message: string;
  success: boolean;
};

export const initialInterestState: InterestState = {
  values: { slug: "", name: "", email: "", message: "", consent: false },
  errors: {},
  message: "",
  success: false,
};

export function validateInterest(values: InterestValues): InterestErrors {
  const errors: InterestErrors = {};

  if (!values.slug.trim()) errors.slug = "Workshop information is missing.";
  if (!values.name.trim()) errors.name = "Enter your name.";
  else if (values.name.trim().length > 120) errors.name = "Name must be 120 characters or fewer.";
  if (!values.email.trim()) errors.email = "Enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (values.message.length > 1000) errors.message = "Message must be 1,000 characters or fewer.";
  if (!values.consent) errors.consent = "Please consent to email about this workshop.";

  return errors;
}
