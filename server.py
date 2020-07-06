import subprocess
import os
import sys
import time
import signal

class Server:
    def __init__(self):
        self.active = False
        self.gateway_path = "./clientportal.gw"
        self.process = None

    #Starts server
    def start_session(self):

        strt_cmd = [r'gnome-terminal', '--', r'bin/run.sh', r'root/conf.yaml']
        self.process = subprocess.Popen(args = strt_cmd, cwd = self.gateway_path)
        print("session started")
        time.sleep(3)
        self.__kill_server()

    #Submitts https object and returns response
    def __submit(self):
        pass

    #Checks server state given it is access
    def __check_status(self):
        pass

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
server.start_session()


