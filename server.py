import subprocess
import os
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

    #Submitts https object and returns response
    def __submit(self):
        pass

    #Checks server state given it is access
    def __check_status(self):
        pass

    #Shuts server down
    def __kill_server(self):
        
        os.kill(os.getpgid(self.process.pid), signal.SIGTERM)
        pass

    #Automates login process
    def __login(self):
        pass



    
    


server = Server()
server.start_session()


