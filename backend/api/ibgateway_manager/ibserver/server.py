import subprocess
import os
import sys
import time
import requests
import json
from api.ibgateway_manager.handlers.request_handler import submit_request
#from selenium import webdriver

# Disable insecure request warnings from verify = False in requests
import urllib3

urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class IBServer:
    def __init__(self, ib_ipaddress):
        self.active = False
        # Apparently beta is stabler and is recommended by IBKR.
        self.gateway_path = "./clientportal.beta.gw"
        self.port_host = "https://localhost:5000/v1/"
        self.process = None
        self.auth = False

        self.ib_ipaddress = ib_ipaddress

        self.PAPER_USERNAME = "byusf3215"
        self.PAPER_PASSWORD = "paper1234"

    # Starts server
    def start_session(self):

        strt_cmd = [r"gnome-terminal", "--", r"bin/run.sh", r"root/conf.yaml"]
        self.process = subprocess.Popen(args=strt_cmd, cwd=self.gateway_path)
        # print("session started")
        # time.sleep(3)
        # self.__kill_server()

    # Submits https object and returns response
    def __submit(self):
        pass



    def get_account_id(self):
        #resp = requests.get(self.port_host + "portal/portfolio/accounts", verify=False)
        resp = submit_request(self.ib_ipaddress, 'portal/portfolio/accounts', 'GET', None)
        return str(resp[0]['id'])

    # Checks server state given it is access
    def check_status(self):
        resp = submit_request(self.ib_ipaddress, 'portal/tickle', 'POST', None)
        print(resp)
        if resp["iserver"]["authStatus"]["connected"]:
            print("connected")
            self.active = True
        else:
            print("not connected")
            self.active = False

        submit_request(self.ib_ipaddress, 'portal/sso/validate', 'GET', None)
        resp = submit_request(self.ib_ipaddress, 'portal/iserver/auth/status', 'POST', None)
        if resp["authenticated"]:
            self.auth = True
            print("authenticaed")
        else:
            print("need to re-authenticate")

    # Shuts server down
    # def __kill_server(self):

    #     pid = self.process.pid
    #     for id in pid(recursive=True):
    #         id.kill()
    #     pid.kill()

    # Automates login process

    # def __login(self):
    #     # FIXME - change extension for Linux
    #     self.driver = webdriver.Chrome("FIXME ChromeDriver Location", options=options)
    #     self.driver.get("https://localhost:5000")
    #     userName = self.driver.find_element_by_id("user_name").send_keys(
    #         self.PAPER_USERNAME
    #     )
    #     password = self.driver.find_element_by_id("password").send_keys(
    #         self.PAPER_PASSWORD
    #     )
    #     loginButton = self.driver.find_element_by_id("submitForm").click()
    #     # FIXME - do we want to quit out of the selenium driver at this point?
    #     # time.sleep(4)
    #     # self.driver.quit()()



    def check_auth(self):
        auth = 'iserver/auth/status'
        
        try:
            response = requests.post(self.port_host+auth, verify = False)
            response.raise_for_status()
        except requests.exceptions.HTTPError as errh:
            return "An Http Error occured:" + repr(errh)
        except requests.exceptions.ConnectionError as errc:
            return "An Error Connecting to the API occurred:" + repr(errc)
        except requests.exceptions.Timeout as errt:
            return "A Timeout Error occurred:" + repr(errt)
        except requests.exceptions.RequestException as err:
            return "An Unknown Error occurred" + repr(err)
        
        return response.json()['authenticated']
        
        


