import subprocess
import os
import sys
import time
import requests
import json
from selenium import webdriver

# Disable insecure request warnings from verify = False in requests
import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)


class Server:
    def __init__(self):
        self.active = False
        self.gateway_path = './clientportal.gw'
        self.port_host = 'https://localhost:5000/v1/'
        self.process = None
        self.auth = False

        self.PAPER_USERNAME = 'byusf3215'
        self.PAPER_PASSWORD = 'paper1234'

    # Starts server
    def start_session(self):

        strt_cmd = [r'gnome-terminal', '--', r'bin/run.sh', r'root/conf.yaml']
        self.process = subprocess.Popen(args=strt_cmd, cwd=self.gateway_path)
        #print("session started")
        # time.sleep(3)
        # self.__kill_server()

    # Submits https object and returns response
    def __submit(self):
        pass

    # Checks server state given it is access
    def check_status(self):
        # Confirm server is active
        resp = requests.post(self.port_host + "portal/tickle", verify=False)
        if(resp.status_code != 200):
            print('tickle error')
        if(resp.json()['iserver']['authStatus']['connected']):
            print('connected')
            self.active = True
        else:
            print('not connected')
            self.active = False

        # Check validation
        resp = requests.get(
            self.port_host + "portal/sso/validate", verify=False)
        if(resp.status_code != 200):
            print('validate error')

        # Check authentication status
        resp = requests.post(
            self.port_host + "portal/iserver/auth/status", verify=False)
        if(resp.status_code != 200):
            print('auth error...restarting server')
            self.start_session()
        if(resp.json()["authenticated"]):
            self.auth = True
            print("authenticaed")
        else:
            print("need to re-authenticate")

    # Shuts server down

    def __kill_server(self):

        pid = self.process.pid
        for id in pid(recursive=True):
            id.kill()
        pid.kill()

    # Automates login process

    def __login(self):
        # FIXME - change extension for Linux
        self.driver = webdriver.Chrome(
            'C:\\Coding\SilverFund\selenium_testing\chromedriver', options=options)
        self.driver.get('https://localhost:5000')
        userName = self.driver.find_element_by_id(
            'user_name').send_keys(self.PAPER_USERNAME)
        password = self.driver.find_element_by_id(
            'password').send_keys(self.PAPER_PASSWORD)
        loginButton = self.driver.find_element_by_id('submitForm').click()
        # FIXME - do we want to quit out of the selenium driver at this point?
        # time.sleep(4)
        # self.driver.quit()


server = Server()
server.check_status()
