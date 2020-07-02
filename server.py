import subprocess

class Server:
    def __init__(self):
        self.active = False

    #Starts server
    def start_session(self):

        subprocess.call(['gnome-terminal', '--'])
 
        print("session started")
        

    #Submitts https object and returns response
    def __submit(self):
        pass

    #Checks server state given it is access
    def __check_status(self):
        pass

    #Shuts server down
    def __kill_server(self):
        pass

    #Automates login process
    def __login(self):
        pass



    
    


server = Server()
server.start_session()


