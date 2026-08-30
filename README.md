# SANKET DONGARE — Creator Portfolio UI

Updated to match the supplied dark neon portfolio reference: fixed icon sidebar, compact top navigation, black/navy panels, pink accents, responsive cards, gallery filters, contact form, login/register screens, and creator-focused homepage.

## Instagram
All Instagram buttons and profile references use:
- `https://www.instagram.com/sanku_048_/`
- `@sanku_048_`

## Pages
- `home.html` — landing page
- `about.html` — About Me
- `gallery.html` — Gallery with category filters
- `world.html` — Your World
- `contact.html` — contact/enquiry form
- `login.html` — local demo login
- `register.html` — local demo registration
- `stories.html`, `posts.html`, `reels.html`, `highlights.html` — legacy content entry pages kept for compatibility
- `enquiry.html` — redirects to `contact.html`
- `admin.html` — local enquiry table + CSV export
- `style.css` — complete responsive UI system
- `app.js` — navigation, filters, local demo auth and enquiry handling
- `Code.gs` — optional Google Apps Script + Sheets/email backend

## Important
Static HTML cannot securely fetch a live Instagram feed, Stories, Reels or Highlights. The site therefore links to the official Instagram profile. Replace gallery placeholders with your own licensed images or official embeds/API integration when available.

The login/register screens are a browser-only demo using `localStorage`; they are not suitable for production authentication. For a real public login system, use a proper server-side authentication provider.

## Google Apps Script
Deploy `Code.gs` as a Web App and set the resulting `/exec` URL in `CONFIG.gasUrl` inside `app.js` if you want enquiries copied to Google Sheets and emailed. The supplied frontend always keeps a local copy for the admin page.

## Run
Open `home.html` in a browser or host the folder on a static web host.
