from selenium import webdriver
import os

# Settings to get past chrome local host privacy
options = webdriver.ChromeOptions()
options.binary_location = "./chromium-latest-linux/run.sh"
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')

#driver = webdriver.Chrome(executable_path=r'./chromium-latest-linux/run.sh', options=options)
driver = webdriver.Chrome(
    executable_path=r'./chromedriver_linux', options=options)
driver.get('google.com')
# driver.get("https://localhost:5000")

'''
# username = ""
# password = ""
username_textbox = driver.find_element_by_id("user_name")
username_textbox.send_keys(username)
password_textbox = driver.find_element_by_id("password")
password_textbox.send_keys(password)

login_button = driver.find_element_by_id("submitForm")
login_button.submit()
'''
