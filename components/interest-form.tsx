"use client";

import { useActionState } from "react";
import { requestWorkshopInfo } from "../app/actions/interest";
import { initialInterestState } from "../lib/interest";

type InterestFormProps = { slug: string };

export function InterestForm({ slug }: InterestFormProps) {
  const [state, formAction, pending] = useActionState(requestWorkshopInfo, {
    ...initialInterestState,
    values: { ...initialInterestState.values, slug },
  });

  return (
    <section className="interest-section" aria-labelledby="interest-title">
      <div className="interest-intro">
        <p className="section-label">Stay in the loop</p>
        <h2 id="interest-title">Interested?</h2>
        <p>Leave your details and we&apos;ll be able to follow up about this workshop when dates are announced.</p>
        <p className="interest-temporary-note">Temporary form: details are validated only. Email isn&apos;t connected, and nothing will be sent.</p>
      </div>
      <form className="interest-form" action={formAction} noValidate>
        <input type="hidden" name="slug" value={slug} />
        <div className="interest-field">
          <label htmlFor="interest-name">Name</label>
          <input id="interest-name" name="name" autoComplete="name" required maxLength={120} defaultValue={state.values.name} aria-invalid={Boolean(state.errors.name)} aria-describedby={state.errors.name ? "interest-name-error" : undefined} />
          {state.errors.name && <p className="interest-error" id="interest-name-error">{state.errors.name}</p>}
        </div>
        <div className="interest-field">
          <label htmlFor="interest-email">Email</label>
          <input id="interest-email" name="email" type="email" autoComplete="email" required defaultValue={state.values.email} aria-invalid={Boolean(state.errors.email)} aria-describedby={state.errors.email ? "interest-email-error" : undefined} />
          {state.errors.email && <p className="interest-error" id="interest-email-error">{state.errors.email}</p>}
        </div>
        <div className="interest-field">
          <label htmlFor="interest-message">Message <span>(optional)</span></label>
          <textarea id="interest-message" name="message" rows={4} maxLength={1000} defaultValue={state.values.message} aria-invalid={Boolean(state.errors.message)} aria-describedby={state.errors.message ? "interest-message-error" : undefined} />
          {state.errors.message && <p className="interest-error" id="interest-message-error">{state.errors.message}</p>}
        </div>
        <div className="interest-field interest-consent-field">
          <div className="interest-consent-row">
            <input id="interest-consent" name="consent" type="checkbox" required defaultChecked={state.values.consent} aria-invalid={Boolean(state.errors.consent)} aria-describedby={state.errors.consent ? "interest-consent-error" : undefined} />
            <label htmlFor="interest-consent">I agree to be emailed about this workshop.</label>
          </div>
          {state.errors.consent && <p className="interest-error" id="interest-consent-error">{state.errors.consent}</p>}
        </div>
        <button className="interest-submit" type="submit" disabled={pending}>{pending ? "Checking…" : "Send interest"}</button>
        <p className={`interest-result${state.success ? " is-success" : ""}`} role="status" aria-live="polite">{state.message}</p>
      </form>
    </section>
  );
}
