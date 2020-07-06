import subprocess
import os
import sys
import time
import requests
import json

class Server:
    def __init__(self):
        self.active = False
        self.gateway_path = './clientportal.gw'
        self.port_host = 'https://localhost:5000/v1/'
        self.process = None

    #Starts server
    def start_session(self):

        strt_cmd = [r'gnome-terminal', '--', r'bin/run.sh', r'root/conf.yaml']
        self.process = subprocess.Popen(args = strt_cmd, cwd = self.gateway_path)
        #print("session started")
        #time.sleep(3)
        #self.__kill_server()

    #Submits https object and returns response
    def __submit(self):
        pass

    #Checks server state given it is access
    def check_status(self):
        resp = requests.post(self.port_host + "portal/tickle", verify = False)
        if(resp.status_code != 200):
            print('error')

        resp = requests.get(self.port_host + "sso/validate", verify = False)
        if(resp.status_code != 200):
            print('error')

        resp = requests.post(self.port_host + "iserver/auth/server", verify = False)
        if(resp.status_code != 200):
            print('error')

    #Shuts server down
    def __kill_server(self):

        pid = self.process.pid
        for id in pid(recursive=True):
            id.kill()
        pid.kill()

        

    #Automates login process
    def __login(self):
        pass



    

server = Server()
server.check_status()


