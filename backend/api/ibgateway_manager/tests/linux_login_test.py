from selenium import webdriver
import os

PAPER_USERNAME = "byusf3215"
PAPER_PASSWORD = "paper1234"
GATEWAY_PATH = "./clientportal.beta.gw"

# Settings to get past Chrome local host privacy
options = webdriver.ChromeOptions()
options.binary_location = "./chromium-latest-linux/run.sh"
options.add_argument("--ignore-ssl-errors=yes")
options.add_argument("--ignore-certificate-errors")

# FIXME - Set path to driver
# driver = webdriver.Chrome(executable_path=r'./chromium-latest-linux/run.sh', options=options)
driver = webdriver.Chrome(executable_path=r"./chromedriver_linux", options=options)

# Start up IBKR server (FIXME - VERIFY THIS IS THE RIGHT COMMAND/PATH FOR LINUX)
strt_cmd = [r"gnome-terminal", "--", r"bin/run.sh", r"root/conf.yaml"]
process = subprocess.Popen(args=strt_cmd, cwd=GATEWAY_PATH)

# Go to login page
driver.get("https://localhost:5000")

# Type in username and password
username_textbox = driver.find_element_by_id(PAPER_USERNAME)
username_textbox.send_keys(username)
password_textbox = driver.find_element_by_id(PAPER_PASSWORD)
password_textbox.send_keys(password)

# Click login button / submit
login_button = driver.find_element_by_id("submitForm")
login_button.submit()

