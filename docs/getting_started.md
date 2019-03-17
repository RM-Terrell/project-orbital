# Post Clone Installs

First and foremost this project runs on Django which utilizes Python 3.7.2. Install python by downloading it from
[here](https://www.python.org/downloads/release/python-372/). Preferably download the 64 bit version though
I dont think its required for this project.

YOU MUST INSTALL PYTHON ON YOUR SYSTEM PATH DURING INSTALL. For windows installs, during the install process you
will see a screen like this.
![win_installer](/docs/images/win_installer.png)

At the bottom you can see a checkbox about adding Python to path. Do that. More info on PATH setup including how
to do it on Unix/Linux systems found [here](https://www.tutorialspoint.com/python/python_environment.htm)

This project also utilizes Node.js and the NPM network. You can get Node.js (whcih include NPM)
from [here](https://nodejs.org/en/).

After cloning the repo and installing the above mentioned software, run the following install commands from inside the project directory (project-orbital):

> pip install -r requirements.txt

and

> npm install

# Startup Commands

To get webpack running and compiling JS and CSS files run the following command:


To start the Django server, navigate inside the `django_orbital` directory and run the following command:

> python manage.py runserver

and this will start the Django server.