
from playwright.sync_api import sync_playwright, expect

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Navigate to the app
        # Since I started with --port 4200
        page.goto("http://localhost:4200")

        # Wait for content to load
        page.wait_for_selector('h1')

        # Check Language Button
        # It should have text PT or EN. Initial state is EN so button text is PT?
        # Let's check the aria-label
        # Initial language is 'en', so button text is 'PT', aria-label should be 'Switch to Portuguese'

        lang_btn = page.locator('button').filter(has_text="PT")
        if not lang_btn.count():
             lang_btn = page.locator('button').filter(has_text="EN")

        # Verify aria-label
        aria_label = lang_btn.get_attribute("aria-label")
        print(f"Language Button Aria Label: {aria_label}")

        # Verify title
        title = lang_btn.get_attribute("title")
        print(f"Language Button Title: {title}")

        # Focus the button to check focus ring
        lang_btn.focus()
        page.screenshot(path="focus_lang.png")

        # Check Github Link
        github_link = page.locator('a[href*="github.com"]')
        github_link.focus()
        page.screenshot(path="focus_github.png")

        browser.close()

if __name__ == "__main__":
    run()
