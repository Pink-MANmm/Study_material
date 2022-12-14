from selenium import webdriver
def create_chrome_driver(*,headless=False):
    options=webdriver.ChromeOptions()
    if headless:
        options.add_argument('--headless')
    options.add_experimental_option('excludeSwitches',['enable-automation'])
    options.add_experimental_option('useAutomationExtension',False)
    browser=webdriver.Chrome(options=options)
    browser.execute_cdp_cmd(
        'Page.addScriptToEvaluateOnNewDocument',
        {'source':'Object.defineProperty(navigator,"webdriver",{get:() => undefined})'}
    )
    return browser