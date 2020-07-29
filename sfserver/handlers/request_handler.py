import requests

def submit_request(endpoint, req_type, params = None):

    body = "https://localhost:5000/v1/"
    response = None
    
    if req_type =='GET' and params is not None:
        response = requests.get(body + endpoint, json=params, verify=False)
    elif req_type =='GET' and params is None:
        response = requests.get(body + endpoint, verify=False)
    elif req_type =='POST' and params is not None:
        response = requests.post(body + endpoint, json=params, verify=False)
    elif req_type =='POST' and params is None:
        response = requests.post(body + endpoint, verify=False)
    else:
        print("req_type in submit_request")

    #FIXME we may want to do additional error checking here
    if(response.status_code == 200):
        return(response.json())

    else:
        print("error code: " + str(response.status_code))

    


    