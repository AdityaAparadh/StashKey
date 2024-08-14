#!/bin/bash

# ASCII Art
cat << "EOF"
 _____     _ _     _             _    
|  ___|   | | |   | |           | |   
| |__ _   | | |___| |_ __ _  ___| | __
|  __| | | | / __| __/ _` |/ __| |/ /
| |__| |_| | \__ \ || (_| | (__|   < 
\____/\__,_|_|___/\__\__,_|\___|_|\_\
                                     
EOF

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Root directory (where this script is located)
ROOT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Function to start all services
start_all() {
    echo -e "${GREEN}Starting all services...${NC}"
    cd "$ROOT_DIR/Backend" && bun run main.js & # Start backend
    PID_BACKEND=$!
    cd "$ROOT_DIR/Frontend" && bun run tailwind & # Start Tailwind
    PID_TAILWIND=$!
    cd "$ROOT_DIR/Frontend" && bun run dev & # Start frontend
    PID_FRONTEND=$!
    cd "$ROOT_DIR"
    echo -e "${GREEN}All services started!${NC}"
}

# Function to stop a service
stop_service() {
    if [ -n "$1" ]; then
        echo -e "${YELLOW}Stopping $2...${NC}"
        kill $1
        wait $1 2>/dev/null
        echo -e "${GREEN}$2 stopped.${NC}"
    else
        echo -e "${RED}$2 is not running.${NC}"
    fi
}

# Function to restart a service
restart_service() {
    stop_service $1 "$2"
    echo -e "${YELLOW}Restarting $2...${NC}"
    case "$2" in
        "Backend")
            cd "$ROOT_DIR/Backend" && bun run main.js &
            PID_BACKEND=$!
            ;;
        "Tailwind")
            cd "$ROOT_DIR/Frontend" && bun run tailwind &
            PID_TAILWIND=$!
            ;;
        "Frontend")
            cd "$ROOT_DIR/Frontend" && bun run dev &
            PID_FRONTEND=$!
            ;;
    esac
    cd "$ROOT_DIR"
    echo -e "${GREEN}$2 restarted.${NC}"
}

# Start all services initially
start_all

# Main loop
while true; do
    echo -e "\n${YELLOW}Choose an action:${NC}"
    echo "1) Restart Backend"
    echo "2) Restart Tailwind"
    echo "3) Restart Frontend"
    echo "4) Stop all and exit"
    read -p "Enter your choice (1-4): " choice

    case $choice in
        1) restart_service $PID_BACKEND "Backend" ;;
        2) restart_service $PID_TAILWIND "Tailwind" ;;
        3) restart_service $PID_FRONTEND "Frontend" ;;
        4) 
            stop_service $PID_BACKEND "Backend"
            stop_service $PID_TAILWIND "Tailwind"
            stop_service $PID_FRONTEND "Frontend"
            echo -e "${GREEN}All services stopped. Exiting...${NC}"
            exit 0
            ;;
        *) echo -e "${RED}Invalid option. Please try again.${NC}" ;;
    esac
done