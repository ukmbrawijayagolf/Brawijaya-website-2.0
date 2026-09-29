# React + Vite

## Firebase setup

Copy `.env.example` to `.env.local` and fill in the web app configuration from Firebase Console under Project settings > General > Your apps. The login feature also requires Email/Password sign-in to be enabled in Authentication and a Firestore database.

Restart the Vite development server after changing `.env.local`. For deployment, set the same `VITE_FIREBASE_*` variables in the hosting provider's environment settings and rebuild the site.

Do not put `serviceAccountKey.json` or any Firebase Admin credentials in these variables or in frontend code. The `VITE_` values are the Firebase web app configuration, not Admin credentials.

If these values are not available, ask the Firebase project administrator to provide the web app configuration.

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Attendance setup

- The member QR contains the member's NIM, so it is readable by anyone who scans it. Do not treat the QR as a secret credential.
- Set `role` to `admin` in `firebase_users_ubg.csv` for trusted admins. Their Firebase Auth accounts must already exist.
- Deploy the Firestore access rules with `firebase deploy --only firestore:rules --project brawijayagolf`.
- Run `npm run sync:attendance-admins` to grant or revoke scanner access based on CSV roles. This uses `serviceAccountKey.json` and does not reset member passwords.
- Camera scanning requires browser camera permission and a secure context (`localhost` or HTTPS).

Attendance is stored in `attendance_records`, with one record per member per selected date. Admins can scan, review, export, and remove a mistaken check-in.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
