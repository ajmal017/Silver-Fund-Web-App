from selenium import webdriver
import os

#Settings to get past chrome local host privacy
options = webdriver.ChromeOptions()
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--ignore-certificate-errors')

username = "samsv1875"
password = "Sis4samuel"



#os.system('cmd /k "Your Command Prompt Command"')



driver = webdriver.Chrome("../chromium-latest-linux/run.shs", options=options)
driver.get("https://localhost:5000")


username_textbox = driver.find_element_by_id("user_name")
username_textbox.send_keys(username)
password_textbox = driver.find_element_by_id("password")
password_textbox.send_keys(password)

login_button = driver.find_element_by_id("submitForm")
login_button.submit()
