#!/bin/bash

# Default values
STARTING_DIR=""
SKIP_CONFIRMATION=false
SKIP_TUTORIALS=false

# Function to display usage information
usage() {
    echo "Usage: $0 [OPTIONS] DIRECTORY"
    echo "Delete markdown files from the specified directory and its subdirectories."
    echo ""
    echo "Options:"
    echo "  --skip              Skip confirmation prompt"
    echo "  --skip-tutorials    Preserve files in directories named 'tutorials'"
    echo "  -h, --help          Display this help message"
    echo ""
    echo "DIRECTORY argument is required."
    exit 1
}

# Process command line arguments
while [ $# -gt 0 ]; do
    case "$1" in
        --skip)
            SKIP_CONFIRMATION=true
            shift
            ;;
        --skip-tutorials)
            SKIP_TUTORIALS=true
            shift
            ;;
        -h|--help)
            usage
            ;;
        -*)
            echo "Unknown option: $1"
            usage
            ;;
        *)
            # First non-option argument is the directory
            STARTING_DIR="$1"
            shift
            ;;
    esac
done

# Ensure a directory was specified
if [ -z "$STARTING_DIR" ]; then
    echo "Error: No directory specified."
    usage
fi

# Ensure the specified directory exists
if [ ! -d "$STARTING_DIR" ]; then
    echo "Error: Directory '$STARTING_DIR' does not exist or is not accessible."
    exit 1
fi

# Script to find, print, and delete markdown files in the specified directory and subdirectories
echo "Searching for markdown files in: $STARTING_DIR"
if [ "$SKIP_TUTORIALS" = true ]; then
    echo "Note: Files in directories named 'tutorials' will be preserved."
fi

# Build the find command based on options
if [ "$SKIP_TUTORIALS" = true ]; then
    # Find markdown files but exclude those in 'tutorials' directories
    files=$(find "$STARTING_DIR" -type f \( -name "*.md" -o -name "*.markdown" \) | grep -v "/tutorials/")
else
    # Find all markdown files
    files=$(find "$STARTING_DIR" -type f \( -name "*.md" -o -name "*.markdown" \))
fi

# Count the total number of markdown files that match our criteria
total_files=$(echo "$files" | wc -l)
if [ -z "$files" ]; then
    total_files=0
fi
echo "Found $total_files markdown files that meet deletion criteria."

# Safety confirmation (unless --skip is used)
if [ "$total_files" -gt 0 ] && [ "$SKIP_CONFIRMATION" = false ]; then
    read -p "Are you sure you want to DELETE these markdown files? (yes/no): " confirmation
    if [ "$confirmation" != "yes" ]; then
        echo "Operation cancelled."
        exit 0
    fi
fi

# Process each file
if [ "$total_files" -gt 0 ]; then
    echo "$files" | sort | while read -r file; do
        echo "Deleting: $file"
        rm "$file"
    done
    echo "Deletion complete."
else
    echo "No files to delete."
fi