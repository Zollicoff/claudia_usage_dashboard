<div align="center">
  <h1>Claude Code Usage Dashboard</h1>
  
  <p>
    <strong>Track your Claude Code usage, costs, and analytics</strong>
  </p>
  <p>
    <strong>A focused dashboard for monitoring Claude API consumption from your Claude Code sessions.</strong>
  </p>
  
  <p>
    <a href="#features"><img src="https://img.shields.io/badge/Features-✨-blue?style=for-the-badge" alt="Features"></a>
    <a href="#installation"><img src="https://img.shields.io/badge/Install-🚀-green?style=for-the-badge" alt="Installation"></a>
    <a href="#usage"><img src="https://img.shields.io/badge/Usage-📖-purple?style=for-the-badge" alt="Usage"></a>
    <a href="#development"><img src="https://img.shields.io/badge/Develop-🛠️-orange?style=for-the-badge" alt="Development"></a>
  </p>
</div>

![457013521-6133a738-d0cb-4d3e-8746-c6768c82672c](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

https://github.com/user-attachments/assets/bf0bdf9d-ba91-45af-9ac4-7274f57075cf

> [!TIP]
> **⭐ Star the repo and follow [@getAsterisk](https://x.com/getAsterisk) on X for early access to `asteria-swe-v0`**.

## 🌟 Overview

**Claude Code Usage Dashboard** is a focused desktop application for tracking and analyzing your Claude Code usage. Built with Tauri 2, it provides a clean interface for monitoring costs, token consumption, and usage patterns from your Claude Code sessions.

The dashboard reads your existing Claude Code session logs from `~/.claude/projects/` and provides detailed analytics without requiring any changes to your workflow.

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [✨ Features](#-features)
  - [🗂️ Project & Session Management](#️-project--session-management)
  - [🤖 CC Agents](#-cc-agents)
  
  - [📊 Usage Analytics Dashboard](#-usage-analytics-dashboard)
  - [🔌 MCP Server Management](#-mcp-server-management)
  - [⏰ Timeline & Checkpoints](#-timeline--checkpoints)
  - [📝 CLAUDE.md Management](#-claudemd-management)
- [📖 Usage](#-usage)
  - [Getting Started](#getting-started)
  - [Managing Projects](#managing-projects)
  - [Creating Agents](#creating-agents)
  - [Tracking Usage](#tracking-usage)
  - [Working with MCP Servers](#working-with-mcp-servers)
- [🚀 Installation](#-installation)
- [🔨 Build from Source](#-build-from-source)
- [🛠️ Development](#️-development)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)

## ✨ Features

### 📊 **Usage Analytics Dashboard**
- **Cost Tracking**: Monitor your Claude API usage and costs in real-time
- **Token Analytics**: Detailed breakdown by model, project, and time period
- **Multi-View Analysis**: View usage by model, project, session, and date
- **Visual Charts**: Beautiful charts showing usage trends and patterns
- **Time Range Filtering**: Filter data by date ranges (7 days, 30 days, all time)
- **Session Tracking**: Track individual session costs and token usage
- **Export Ready**: All data formatted for easy export and analysis

### 🔍 **Detailed Insights**
- **Model Comparison**: Compare costs and usage across different Claude models
- **Project Analytics**: See which projects consume the most tokens and cost
- **Daily Trends**: Visualize your usage patterns over time
- **Cache Analytics**: Track cache read/write token usage for optimization
- **Session History**: Detailed view of each coding session's metrics

## 📖 Usage

### Getting Started

1. **Launch the Dashboard**: Open the application after installation
2. **Welcome Screen**: Click "View Usage Dashboard" to start analyzing your data
3. **Automatic Detection**: The dashboard automatically reads from your `~/.claude/projects/` directory

### Understanding Your Data

The dashboard provides multiple views of your Claude Code usage:

- **Overview**: Summary cards showing total costs, sessions, and tokens
- **By Model**: Breakdown of usage by Claude model (Opus 4, Sonnet 4, etc.)
- **By Project**: See which projects are consuming the most resources
- **By Session**: Individual session tracking with costs and dates
- **Timeline**: Daily usage trends with interactive charts

### Filtering and Analysis

- Use the date range filters (All Time, Last 30 Days, Last 7 Days)
- Switch between different tabs to explore various aspects of your usage
- Hover over charts for detailed information
- All monetary amounts are displayed in USD with precise formatting

## 🚀 Installation

### Prerequisites

- **Claude Code CLI**: Install from [Claude's official site](https://claude.ai/code)

### Release Executables Will Be Published Soon

## 🔨 Build from Source

### Prerequisites

Before building Claudia from source, ensure you have the following installed:

#### System Requirements

- **Operating System**: Windows 10/11, macOS 11+, or Linux (Ubuntu 20.04+)
- **RAM**: Minimum 4GB (8GB recommended)
- **Storage**: At least 1GB free space

#### Required Tools

1. **Rust** (1.70.0 or later)
   ```bash
   # Install via rustup
   curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
   ```

2. **Bun** (latest version)
   ```bash
   # Install bun
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Git**
   ```bash
   # Usually pre-installed, but if not:
   # Ubuntu/Debian: sudo apt install git
   # macOS: brew install git
   # Windows: Download from https://git-scm.com
   ```

4. **Claude Code CLI**
   - Download and install from [Claude's official site](https://claude.ai/code)
   - Ensure `claude` is available in your PATH

#### Platform-Specific Dependencies

**Linux (Ubuntu/Debian)**
```bash
# Install system dependencies
sudo apt update
sudo apt install -y \
  libwebkit2gtk-4.1-dev \
  libgtk-3-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev \
  patchelf \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libxdo-dev \
  libsoup-3.0-dev \
  libjavascriptcoregtk-4.1-dev
```

**macOS**
```bash
# Install Xcode Command Line Tools
xcode-select --install

# Install additional dependencies via Homebrew (optional)
brew install pkg-config
```

**Windows**
- Install [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
- Install [WebView2](https://developer.microsoft.com/microsoft-edge/webview2/) (usually pre-installed on Windows 11)

### Build Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/getAsterisk/claudia.git
   cd claudia
   ```

2. **Install Frontend Dependencies**
   ```bash
   bun install
   ```

3. **Build the Application**
   
   **For Development (with hot reload)**
   ```bash
   bun run tauri dev
   ```
   
   **For Production Build**
   ```bash
   # Build the application
   bun run tauri build
   
   # The built executable will be in:
   # - Linux: src-tauri/target/release/bundle/
   # - macOS: src-tauri/target/release/bundle/
   # - Windows: src-tauri/target/release/bundle/
   ```

4. **Platform-Specific Build Options**
   
   **Debug Build (faster compilation, larger binary)**
   ```bash
   bun run tauri build --debug
   ```
   
   **Build without bundling (creates just the executable)**
   ```bash
   bun run tauri build --no-bundle
   ```
   
   **Universal Binary for macOS (Intel + Apple Silicon)**
   ```bash
   bun run tauri build --target universal-apple-darwin
   ```

### Troubleshooting

#### Common Issues

1. **"cargo not found" error**
   - Ensure Rust is installed and `~/.cargo/bin` is in your PATH
   - Run `source ~/.cargo/env` or restart your terminal

2. **Linux: "webkit2gtk not found" error**
   - Install the webkit2gtk development packages listed above
   - On newer Ubuntu versions, you might need `libwebkit2gtk-4.0-dev`

3. **Windows: "MSVC not found" error**
   - Install Visual Studio Build Tools with C++ support
   - Restart your terminal after installation

4. **"claude command not found" error**
   - Ensure Claude Code CLI is installed and in your PATH
   - Test with `claude --version`

5. **Build fails with "out of memory"**
   - Try building with fewer parallel jobs: `cargo build -j 2`
   - Close other applications to free up RAM

#### Verify Your Build

After building, you can verify the application works:

```bash
# Run the built executable directly
# Linux/macOS
./src-tauri/target/release/claudia

# Windows
./src-tauri/target/release/claudia.exe
```

### Build Artifacts

The build process creates several artifacts:

- **Executable**: The main Claudia application
- **Installers** (when using `tauri build`):
  - `.deb` package (Linux)
  - `.AppImage` (Linux)
  - `.dmg` installer (macOS)
  - `.msi` installer (Windows)
  - `.exe` installer (Windows)

All artifacts are located in `src-tauri/target/release/bundle/`.

## 🛠️ Development

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite 6
- **Backend**: Rust with Tauri 2
- **UI Framework**: Tailwind CSS v4 + shadcn/ui
- **Database**: SQLite (via rusqlite)
- **Package Manager**: Bun

### Project Structure

```
claudia/
├── src/                   # React frontend
│   ├── components/        # UI components
│   ├── lib/               # API client & utilities
│   └── assets/            # Static assets
├── src-tauri/             # Rust backend
│   ├── src/
│   │   ├── commands/      # Tauri command handlers
│   │   ├── checkpoint/    # Timeline management
│   │   └── process/       # Process management
│   └── tests/             # Rust test suite
└── public/                # Public assets
```

### Development Commands

```bash
# Start development server
bun run tauri dev

# Run frontend only
bun run dev

# Type checking
bunx tsc --noEmit

# Run Rust tests
cd src-tauri && cargo test

# Format code
cd src-tauri && cargo fmt
```

## 🔒 Security

Claudia prioritizes your privacy and security:

1. **Process Isolation**: Agents run in separate processes
2. **Permission Control**: Configure file and network access per agent
3. **Local Storage**: All data stays on your machine
4. **No Telemetry**: No data collection or tracking
5. **Open Source**: Full transparency through open source code

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Areas for Contribution

- 🐛 Bug fixes and improvements
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🎨 UI/UX enhancements
- 🧪 Test coverage
- 🌐 Internationalization

## 📄 License

This project is licensed under the AGPL License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tauri](https://tauri.app/) - The secure framework for building desktop apps
- [Claude](https://claude.ai) by Anthropic

---

<div align="center">
  <p>
    <strong>Made with ❤️ by the <a href="https://asterisk.so/">Asterisk</a></strong>
  </p>
  <p>
    <a href="https://github.com/getAsterisk/claudia/issues">Report Bug</a>
    ·
    <a href="https://github.com/getAsterisk/claudia/issues">Request Feature</a>
  </p>
</div>


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=getAsterisk/claudia&type=Date)](https://www.star-history.com/#getAsterisk/claudia&Date)
