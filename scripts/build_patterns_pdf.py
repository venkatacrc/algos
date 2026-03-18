#!/usr/bin/env python3
"""
Build a single print-ready HTML and optional PDF of all algo pattern pages.
Usage: python scripts/build_patterns_pdf.py
Output: patterns/patterns_all.html (and patterns/patterns_all.pdf if weasyprint is available)
"""
import re
import os
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
PATTERNS_DIR = REPO_ROOT / "patterns"
OUTPUT_HTML = PATTERNS_DIR / "patterns_all.html"
OUTPUT_PDF = PATTERNS_DIR / "patterns_all.pdf"

# Order of pattern files
PATTERN_FILES = [
    "01_sliding_window.html",
    "02_two_pointers.html",
    "03_merge_intervals.html",
    "04_cyclic_sort.html",
    "05_linked_list.html",
    "06_tree_bfs.html",
    "07_tree_dfs.html",
    "08_topological_sort.html",
    "09_union_find.html",
    "10_two_heaps.html",
    "11_top_k_elements.html",
    "12_kway_merge.html",
    "13_trie.html",
    "14_modified_binary_search.html",
    "15_subsets.html",
    "16_bitwise_xor.html",
    "17_dynamic_programming.html",
    "18_bst_and_spatial_trees.html",
]


def extract_container_content(html: str) -> str:
    """Extract the inner HTML of the first <div class="container">."""
    # Find start of container (allow for optional whitespace in class)
    m = re.search(r'<div\s+class="container"[^>]*>\s*', html, re.IGNORECASE | re.DOTALL)
    if not m:
        # Fallback: get everything between <body> and </body>
        body = re.search(r"<body[^>]*>(.*)</body>", html, re.IGNORECASE | re.DOTALL)
        return body.group(1).strip() if body else html
    start = m.end()
    depth = 1
    i = start
    while i < len(html) and depth > 0:
        next_open = html.find("<div", i)
        next_close = html.find("</div>", i)
        if next_close == -1:
            break
        if next_open != -1 and next_open < next_close:
            depth += 1
            i = next_open + 4
        else:
            depth -= 1
            i = next_close + 6
            if depth == 0:
                return html[start : next_close].strip()
    return html[start:].strip()


def main():
    contents = []
    for name in PATTERN_FILES:
        path = PATTERNS_DIR / name
        if not path.exists():
            print(f"Skip (not found): {name}")
            continue
        html = path.read_text(encoding="utf-8")
        content = extract_container_content(html)
        contents.append((name, content))

    print_style = """
        @media print {
            body { background: white; padding: 0; margin: 0; }
            .pattern-chapter { page-break-before: always; }
            .pattern-chapter:first-of-type { page-break-before: avoid; }
            .container { max-width: 100%; padding: 10px; box-shadow: none; }
            .pattern, .section { page-break-inside: avoid; }
            .code-block { page-break-inside: avoid; font-size: 11px; background: #f5f5f5 !important; border: 1px solid #ccc; }
            .concept, .techniques, .complexity, .problem { page-break-inside: avoid; background: #fafafa !important; border: 1px solid #ddd; }
            h1, h2, h3, h4 { page-break-after: avoid; color: #000 !important; }
            .complexity th { background: #e0e0e0 !important; color: #000 !important; }
            a { color: #000; text-decoration: underline; }
        }
    """

    base_styles = """
        * { box-sizing: border-box; }
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.5; color: #333; margin: 0; padding: 20px; max-width: 900px; margin-left: auto; margin-right: auto; }
        .pattern-chapter { margin-bottom: 2em; }
        .container { margin-bottom: 30px; }
        h1 { color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 8px; margin-bottom: 20px; font-size: 1.8em; }
        .pattern { margin-bottom: 25px; padding: 20px; background: #fafafa; border-left: 5px solid #3498db; border-radius: 5px; }
        .pattern h2 { color: #2c3e50; margin-bottom: 12px; font-size: 1.4em; }
        .section { margin-bottom: 16px; }
        .section h3 { color: #34495e; margin-bottom: 8px; font-size: 1.1em; border-bottom: 2px solid #ecf0f1; padding-bottom: 4px; }
        .concept, .techniques, .complexity, .problem { padding: 12px; border-radius: 5px; margin-bottom: 12px; }
        .concept { background: #e8f4f8; }
        .techniques { background: #fff9e6; }
        .techniques ul { margin-left: 20px; margin-top: 8px; }
        .techniques li { margin-bottom: 6px; }
        .complexity { background: #e8f5e9; }
        .complexity table { width: 100%; border-collapse: collapse; margin-top: 8px; }
        .complexity th, .complexity td { padding: 8px; text-align: left; border: 1px solid #ddd; }
        .complexity th { background: #4caf50; color: white; }
        .problem { background: #f0f0f0; }
        .problem h4 { color: #e74c3c; margin-bottom: 8px; }
        .code-block { background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 5px; overflow-x: auto; margin: 12px 0; font-size: 13px; }
        .code-block pre { margin: 0; padding: 16px; font-family: 'JetBrains Mono', Consolas, monospace; white-space: pre; }
        .code-block code { font-family: 'JetBrains Mono', Consolas, monospace; }
    """

    head = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algorithm Patterns – All-in-One (Print / PDF)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
        {base_styles}
        {print_style}
    </style>
</head>
<body>
    <p style="text-align:center; font-size:0.9em; color:#666; margin-bottom:24px;">
        Algorithm Patterns – All 18 patterns. Print or Save as PDF from the browser (Ctrl+P / Cmd+P).
    </p>
"""

    parts = [head]
    for i, (name, content) in enumerate(contents):
        cls = "pattern-chapter"
        parts.append(f'<section class="{cls}">')
        parts.append(f'<div class="container">')
        parts.append(content)
        parts.append("</div></section>\n")

    parts.append("</body>\n</html>")
    full_html = "\n".join(parts)

    OUTPUT_HTML.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_HTML.write_text(full_html, encoding="utf-8")
    print(f"Wrote: {OUTPUT_HTML}")

    # Try weasyprint for PDF
    try:
        from weasyprint import HTML

        HTML(string=full_html).write_pdf(OUTPUT_PDF)
        print(f"Wrote: {OUTPUT_PDF}")
    except ImportError:
        print("PDF not generated (install weasyprint: pip install weasyprint). Open the HTML and use Print → Save as PDF.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
