# Contact API

## Endpoint

```http
POST /api/contact
Content-Type: application/json
```

Defined in `app/api/contact/route.ts`. Used by the contact form in `app/components/Contacts.tsx`.

### Request body

| Field | Type | Required |
| --- | --- | --- |
| `name` | string | yes |
| `email` | string | yes |
| `message` | string | yes |

Example:

```json
{ "name": "Jane Doe", "email": "jane@example.com", "message": "Hello!" }
```

### Responses

| Status | Body | When |
| --- | --- | --- |
| `200` | `{ "ok": true }` | Email accepted by Resend |
| `400` | `{ "error": "Please provide name, email, and message." }` | Any field missing |
| `500` | `{ "error": "Email service is not configured..." }` | An environment variable is missing |
| `500` | `{ "error": "Unable to send message. Please try again later." }` | Resend error or unexpected exception |

The specific Resend error is logged server-side (`console.error`) but never returned to the client.

## Environment variables

Set in `.env.local` locally and in the hosting dashboard in production (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from <https://resend.com/api-keys> |
| `FROM_EMAIL` | Verified sender address in Resend |
| `TO_EMAIL` | Inbox that receives submitted messages |

## Flow

1. Visitor submits the form; `Contacts.tsx` validates that all fields are filled and shows a "Sending message..." state.
2. The form POSTs JSON to `/api/contact`.
3. The route validates the fields, builds a plain-text and HTML email (subject: `New message from <name> via portfolio`), and calls `https://api.resend.com/emails` with the API key as a bearer token.
4. On success the form resets and shows a success message; on failure it shows an error message and keeps the visitor's input.

The page also offers a fallback: the "Email" link opens a pre-filled Gmail compose window, so visitors can still reach out if the form is unavailable.

## Current limitations

- No rate limiting — the endpoint can be spammed.
- No spam protection (honeypot, CAPTCHA, or origin check).
- User input is interpolated into the HTML email body without sanitization; it is treated as trusted internal email today, but escaping should be added if the format ever changes.
- No storage — messages exist only in the email that was sent.
