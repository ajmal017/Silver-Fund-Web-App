import requests

def submit_request(self, endpoint, req_type, params = None):

    body = "https://localhost:5000/v1/"
    
    if req_type =='GET' and params is not None:
        response = requests.get(body + endpoint, json=params, vefiy=False)
    if req_type =='GET' and params is None:
        response = requests.get(body + endpoint, vefiy=False)
    if req_type =='POST' and params is not None:
        response = requests.post(body + endpoint, json=params, vefiy=False)
    if req_type =='POST' and params is None:
        response = requests.post(body + endpoint, vefiy=False)
    

    return(response.json())

    


    