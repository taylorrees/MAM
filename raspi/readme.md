
# Get Started

Open the terminal on your raspberry pi and move into the `/home/pi` directory.
This can be achieved by entering the following:

```
$ cd ~
```

Next download the python script `rsn.py` from [here](https://raw.githubusercontent.com/taylorrees/MAM/master/raspi/rsn.py).
This can be achieved in terminal by entering:

```
$ wget https://raw.githubusercontent.com/taylorrees/MAM/master/raspi/rsn.py
```

*(To check if the file downloaded successfully you can type `ls`. This should
list all the files in the current direcetory.)

For the `rsn.py` script to run the ```requests``` module is required.

Installing requests is simple with [pip](https://pip.pypa.io/),
just run the following code in your terminal:

```
$ pip install requests
```

[Requests documentation](http://docs.python-requests.org/en/latest/)

The script should now be able to run and POST to the MAM API. Run the
script by typing the following:

```
$ python rsn.py
```

# Information

The `rsn.py` script is used to request a list of student numbers.

When the script is run the user can input a 7 digit integer (length of a
Cardiff university student number) and hit enter. This will then prompt
for the entry of the next student number. This process will loop
until the terminating condition `-1` is entered.

When the condition is met the list of student numbers is POSTed to the
MAM API and stored in the database. The script will then request a new
list of student numbers.

# Run at Start Up

This script can be run at start up.

To do this the raspberry pi must auto login as the default user (e.g. pi).
You must then alter the `/etc/profile` file (this is one method, others
do exist).

In the terminal enter:

```
$ sudo nano /etc/profile
```

Scroll to the bottom of this file and add the line:

```
$ sudo python /home/pi/rsn.py
```

Then press `ctrl + x` to exit the file.
Type `Y` to save the changes and hit `return` to confirm.

Now you should test to see whether the script runs at start up. To do this
reboot your pi by typing `sudo reboot`. If the process has worked successfully
the script should run when the pi boots up and you should be able to enter
student numbers.
