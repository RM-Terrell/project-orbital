# Project Orbital Startup Guide

## Post Clone Installs

First and foremost this project runs on Django which utilizes Python 3.7.2. Install python by downloading it from
[here](https://www.python.org/downloads/release/python-372/). Preferably download the 64 bit version though
I dont think its required for this project.

YOU MUST INSTALL PYTHON ON YOUR SYSTEM PATH DURING INSTALL. For windows installs, during the install process you
will see a screen like this.
![win_installer](/docs/images/win_installer.png)

At the bottom you can see a checkbox about adding Python to path. Do that. More info on PATH setup including how
to do it on Unix/Linux systems found [here](https://www.tutorialspoint.com/python/python_environment.htm)

This project also utilizes Node.js and the NPM network. You can get Node.js (which include NPM)
from [here](https://nodejs.org/en/).

After cloning the repo and installing the above mentioned software, run the following install commands from inside the project directory (project-orbital):

> pip install -r requirements.txt

and

> npm install

## Startup Commands

To get webpack running and compiling JS and CSS files run the following command from inside the main project directory:

> npm run start

This will build all the JS and CSS files as they are currently coded. To have webpack build the files constantly
as you modify them run:

> npm run watch

and it will rebuild on save. With the JS and CSS files built you can run the Django server to properly start the website.

To start the Django server, navigate inside the `django_orbital` directory and run the following command:

> python manage.py runserver

and this will start the Django server.

Because the npm and django commands need to run in two different directories (the main project dir and django_orbital)
it will probably be helpful to have two separate terminals up when developing. In vscode with both commands on run mode it looks like this:

![terms](/docs/images/terms.png)
