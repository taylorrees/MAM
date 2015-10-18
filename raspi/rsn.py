
# File: rsn.py (request student number)
#This script will request a list of student numbers.

'''The requests module is used to make HTTP requests. It's
a modern HTTP library written in python that will be used
to make requests to the MAM API.
'''
import requests

def request_numbers_loop():
    '''This function will loop until the terminating condition -1
    is passed in as input. The loop will continually request
    student numbers, adding each number to a list of integers.
    This list is returned from the function.
    '''

    student_numbers = []

    while True:

        user_input = str(input())

        if user_input != -1 and len(user_input) == 7:
            student_numbers.append(int(user_input))
        elif int(user_input) == -1:
            print (student_numbers)
            r = requests.post('https://mamon.herokuapp.com/api/lectures/add', json={"student_numbers":student_numbers})
            print(r.json)
            student_numbers = []
        else:
            pass

request_numbers_loop()
