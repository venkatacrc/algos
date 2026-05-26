import os
import re

def inject_test_mode_script():
    base_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print(f"Base Directory: {base_dir}")

    # Files to process in root or subdirectories
    html_files = []
    
    # Traverse directories
    for root, dirs, files in os.walk(base_dir):
        # Ignore git, cache directories
        if '.git' in root or '.system_generated' in root:
            continue
        
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))

    print(f"Found {len(html_files)} HTML files to process.")

    injected_count = 0
    skipped_count = 0

    for file_path in html_files:
        # Calculate relative path to test-mode.js in base_dir
        rel_path_to_base = os.path.relpath(base_dir, os.path.dirname(file_path))
        
        # Determine correct src attribute value
        if rel_path_to_base == ".":
            script_src = "test-mode.js"
        else:
            script_src = os.path.join(rel_path_to_base, "test-mode.js")

        script_tag = f'<script src="{script_src}" defer></script>'
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Check if already injected
        if "test-mode.js" in content:
            # Check if using the exact correct tag
            if script_tag in content:
                print(f"Skipped (already injected): {os.path.relpath(file_path, base_dir)}")
                skipped_count += 1
                continue
            else:
                # Update existing script path to make sure it's correct
                print(f"Updating injection path in: {os.path.relpath(file_path, base_dir)}")
                content = re.sub(r'<script src=".*?test-mode\.js" defer></script>', script_tag, content)
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                injected_count += 1
                continue

        # Inject right before </head>
        if "</head>" in content:
            new_content = content.replace("</head>", f"    {script_tag}\n</head>")
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Injected successfully: {os.path.relpath(file_path, base_dir)}")
            injected_count += 1
        else:
            # Fallback if no head tag, inject right at the top
            new_content = f"{script_tag}\n" + content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Injected successfully (fallback): {os.path.relpath(file_path, base_dir)}")
            injected_count += 1

    print(f"\nCompleted injection pipeline.")
    print(f"Injected/Updated: {injected_count} files")
    print(f"Skipped: {skipped_count} files")

if __name__ == "__main__":
    inject_test_mode_script()
