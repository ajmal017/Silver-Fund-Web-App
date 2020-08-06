import requests

def submit_request(ipaddress, endpoint, req_type, params = None):

    body = 'https://' + ipaddress + ':5000/v1/'
    response = None

    headers = {'Content-Type':'application/json'}
    
    if req_type =='GET' and params is not None:
        response = requests.get(body + endpoint, headers= headers, params=params, verify=False)
    elif req_type =='GET' and params is None:
        response = requests.get(body + endpoint, headers= headers, verify=False)
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
        print(response.content)
        print("error code: " + str(response.status_code))

    


    