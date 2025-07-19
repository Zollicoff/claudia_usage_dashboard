# Claude Code Usage Dashboard

**A focused desktop application for tracking and analyzing your Claude Code usage and costs.**

![Screenshot of Claude Code Usage Dashboard showing analytics](https://github.com/user-attachments/assets/a028de9e-d881-44d8-bae5-7326ab3558b9)

## 🌟 Overview

Claude Code Usage Dashboard is a lightweight desktop application that analyzes your existing Claude Code session logs and provides detailed usage analytics. Built with Tauri 2 for optimal performance, it reads from your `~/.claude/projects/` directory to display costs, token consumption, and usage patterns.

## ✨ Features

### 📊 **Usage Analytics**
- **Cost Tracking**: Monitor your Claude API usage and costs in real-time
- **Token Analytics**: Detailed breakdown by model, project, and time period  
- **Multi-View Analysis**: View usage by model, project, session, and timeline
- **Time Range Filtering**: Filter data by date ranges (7 days, 30 days, all time)
- **Performance Optimized**: Fast loading with background caching

### 🔍 **Detailed Insights**
- **Model Comparison**: Compare costs across different Claude models (Opus 4, Sonnet 4, etc.)
- **Project Analytics**: See which projects consume the most tokens and cost
- **Daily Trends**: Interactive charts showing usage patterns over time
- **Cache Analytics**: Track cache read/write token usage for optimization
- **Session History**: Detailed view of each coding session's metrics

## 🚀 Quick Start

### Prerequisites
- **Claude Code CLI**: Install from [Claude's official site](https://claude.ai/code)
- **macOS**: Currently built for Apple Silicon (Intel support available)

### Installation

1. **Download the app** from the [releases page](../../releases)
2. **Install via DMG**: Double-click the `.dmg` file and drag to Applications
3. **Launch**: Open from Applications or Spotlight search

### Usage

1. **Launch the Dashboard**: Open the application
2. **Click "View Usage Dashboard"**: The app automatically reads from `~/.claude/projects/`
3. **Explore Your Data**: Use the tabs to view different analytics:
   - **Overview**: Summary cards with total costs and usage
   - **By Model**: Breakdown by Claude model
   - **By Project**: Project-wise resource consumption
   - **By Session**: Individual session tracking
   - **Timeline**: Daily usage trends with interactive charts

## 🔨 Build from Source

### Prerequisites
- **Rust** (1.70.0 or later)
- **Node.js** (18+ recommended)  
- **Claude Code CLI**

### Build Steps

```bash
# Clone the repository
git clone https://github.com/Zollicoff/claudia_usage_dashboard.git
cd claudia_usage_dashboard

# Install dependencies
npm install

# Build for development
npm run tauri dev

# Build for production
npm run tauri build
```

The built app will be in `src-tauri/target/release/bundle/`:
- **macOS**: `.app` bundle and `.dmg` installer
- **Other platforms**: Platform-specific installers

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Rust with Tauri 2
- **UI**: Tailwind CSS + shadcn/ui components
- **Performance**: Static caching with background preloading

## 📄 License

This project is licensed under the AGPL License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Tauri](https://tauri.app/)
- [Claude Code](https://claude.ai/code) by Anthropic
- Forked from [Claudia](https://github.com/getAsterisk/claudia) by Asterisk

---

<div align="center">
  <p><strong>A focused tool for Claude Code analytics</strong></p>
</div>