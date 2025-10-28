# CylinderTrack

Mobile-first web app (PWA) for LPG delivery tracking and cylinder returns — hackathon starter for Green Wells Innovation Challenge.

Quick start

1. Clone the repo
   - git clone https://github.com/immaculatechepkirui/cylinder_track.git

2. Install dependencies
   - cd cylinder_track && npm install

3. Create a Firebase project and enable Firestore + Hosting. Copy your Firebase config into `src/services/firebase.js`.

4. (Optional) For driver simulation, create a service account key and save it as `serviceAccountKey.json` (DO NOT commit public keys).

5. Local development
   - npm run dev

6. Build & deploy
   - npm run build
   - firebase deploy --only hosting

Files included
- src/: React app scaffold (Order form, Admin dashboard, Map placeholder)
- scripts/simulate_driver.js: Node script using firebase-admin to push telemetry points
- firestore.rules: basic demo Firestore rules
- firebase.json, .firebaserc: Firebase config for hosting and rules

Notes
- Replace Firebase config placeholders in `src/services/firebase.js` with your project values.
- Do NOT commit `serviceAccountKey.json` to a public repo.
