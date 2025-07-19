// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;

use commands::usage::{
    get_session_stats, get_usage_by_date_range, get_usage_details, get_usage_stats,
};

fn main() {
    // Initialize logger
    env_logger::init();

    // Start preloading usage data immediately when the app starts
    std::thread::spawn(|| {
        if let Some(_claude_path) = dirs::home_dir().map(|h| h.join(".claude")) {
            // Directly call the preload function to start background loading
            let _ = commands::usage::get_usage_stats(None);
        }
    });

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            // Usage & Analytics
            get_usage_stats,
            get_usage_by_date_range,
            get_usage_details,
            get_session_stats,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
