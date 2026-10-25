# MR SURAJ Configuration Panel

A Render-ready, neon-green configuration panel inspired by the supplied screenshot.

## Deploy to Render
1. Extract this ZIP and upload the folder to a GitHub repository.
2. Open Render and choose **New + → Blueprint**.
3. Connect the repository containing `render.yaml`.
4. Select **Apply**. Render will install dependencies and run `npm start`.
5. Open the deployed service URL.

You can also create a **Web Service** manually:
- Runtime: Node
- Build command: `npm install`
- Start command: `npm start`

## Included behavior
- TXT file is read in the browser only and line count is shown.
- Configuration fields are validated locally.
- Owner name is MR SURAJ.
- `/health` endpoint is available for health checks.

## Important
This is a UI/configuration demo. It does not send bulk messages, automate accounts, or use access tokens. The token field is never transmitted or stored. Do not deploy a panel that collects other people's credentials or tokens.
