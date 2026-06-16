# Continue local sessions from any device with Remote Control

Remote Control connects [claude.ai/code](https://claude.ai/code) or the Claude app for iOS and Android to a Claude Code session running on your machine. Start a task at your desk, then pick it up from your phone on the couch or a browser on another computer.

When you start a Remote Control session on your machine, Claude keeps running locally the entire time, so nothing moves to the cloud. With Remote Control you can:

- **Use your full local environment remotely**: your filesystem, MCP servers, tools, and project configuration all stay available, and typing `@` autocompletes file paths from your local project.
- **Work from both surfaces at once**: the conversation stays in sync across all connected devices, so you can send messages from your terminal, browser, and phone interchangeably.
- **Survive interruptions**: if your laptop sleeps or your network drops, the session reconnects automatically when your machine comes back online.

Unlike Claude Code on the web, which runs on cloud infrastructure, Remote Control sessions run directly on your machine and interact with your local filesystem. The web and mobile interfaces are just a window into that local session.

> Remote Control requires Claude Code v2.1.51 or later. Check your version with `claude --version`.

## Requirements

- **Subscription**: available on Pro, Max, Team, and Enterprise plans. API keys are not supported. On Team and Enterprise, an admin must first enable the Remote Control toggle in Claude Code admin settings.
- **Authentication**: run `claude` and use `/login` to sign in through claude.ai if you haven't already.
- **Workspace trust**: run `claude` in your project directory at least once to accept the workspace trust dialog.

## Start a Remote Control session

### Server mode

```bash
claude remote-control
```

Stays running in your terminal, waiting for remote connections. Displays a session URL, and you can press spacebar to show a QR code.

Flags:

| Flag | Description |
| --- | --- |
| `--name "My Project"` | Custom session title. |
| `--remote-control-session-name-prefix <prefix>` | Prefix for auto-generated session names (defaults to hostname). |
| `--spawn <mode>` | `same-dir` (default), `worktree`, or `session`. |
| `--capacity <N>` | Max concurrent sessions (default 32). |
| `--verbose` | Detailed connection and session logs. |
| `--sandbox` / `--no-sandbox` | Enable/disable sandboxing. |

### Interactive session

```bash
claude --remote-control
```

or with a name:

```bash
claude --remote-control "My Project"
```

Gives a full interactive session in your terminal that's also controllable remotely.

### From an existing session

```text
/remote-control
```

or with a name:

```text
/remote-control My Project
```

Carries over your current conversation history.

### VS Code

```text
/remote-control
```

Requires Claude Code v2.1.79 or later.

### Connect from another device

- Open the session URL in any browser.
- Scan the QR code with the Claude app.
- Open claude.ai/code or the Claude app and find the session by name.

### Enable Remote Control for all sessions

Run `/config` and set **Enable Remote Control for all sessions** to `true`.

## Connection and security

Your local Claude Code session makes outbound HTTPS requests only and never opens inbound ports. All traffic travels through the Anthropic API over TLS, using multiple short-lived, scoped credentials.

## Remote Control vs Claude Code on the web

Remote Control executes on your machine, so your local MCP servers, tools, and project configuration stay available. Claude Code on the web executes in Anthropic-managed cloud infrastructure.

## Mobile push notifications

Requires Claude Code v2.1.110 or later. Claude can send a push notification when a long-running task finishes or it needs a decision. Enable via `/config` → **Push when Claude decides**.

## Limitations

- One remote session per interactive process (use server mode for multiple).
- The local process must keep running.
- Extended network outages (~10+ minutes) end the session.
- Starting an ultraplan session disconnects any active Remote Control session.
- Interactive-picker commands (`/plugin`, `/resume`) are local-only; text-output commands work from mobile and web.

## Troubleshooting

Common errors and fixes:

- **"Remote Control requires a claude.ai subscription"**: run `claude auth login` with the claude.ai option; unset `ANTHROPIC_API_KEY` if set.
- **"Remote Control requires a full-scope login token"**: re-authenticate with `claude auth login` instead of a long-lived setup token.
- **"Remote Control is not yet enabled for your account"**: unset `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC`/`DISABLE_TELEMETRY`; not supported with Bedrock/Vertex/Foundry.
- **"Remote Control is disabled by your organization's policy"**: check `/status` for auth method; admins enable the toggle at claude.ai/admin-settings/claude-code.
- **"Remote credentials fetch failed"**: re-run with `--verbose`; check sign-in and network/proxy access to the Anthropic API on port 443.
