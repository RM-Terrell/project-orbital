# Project Orbital Startup Guide

Initial setup inspiration [here](https://medium.com/labcodes/configuring-django-with-react-4c599d1eae63), bunch of npm package versions needed tweaking though.

## Post Clone Installs

First and foremost this project runs on Django which utilizes Python 3.7.2. Install python by downloading it from [here](https://www.python.org/downloads/release/python-372/). Preferably download the 64 bit version though I dont think its required for this project.

YOU MUST INSTALL PYTHON ON YOUR SYSTEM PATH DURING INSTALL. For windows installs, during the install process you will see a screen like this.

![win_installer](/docs/images/win_installer.png)

At the bottom you can see a checkbox about adding Python to path. Do that. More info on PATH setup including how to do it on Unix/Linux systems found [here](https://www.tutorialspoint.com/python/python_environment.htm)

This project also utilizes Node.js and the NPM network. You can get Node.js (which include NPM) from [here](https://nodejs.org/en/).

After cloning the repo and installing the above mentioned software, run the following install commands from inside the project directory (project-orbital):

> pip install -r requirements.txt

and

> npm install

## Startup Commands

To get webpack running and compiling JS and CSS files, run the following command from inside the main project directory:

> npm run start

This will build all the JS and CSS files as they are currently coded. To have webpack build the files constantly as you modify them run:

> npm run watch

and it will rebuild on save. With the JS and CSS files built you can run the Django server to properly start the website.

To start the Django server, navigate inside the `django_orbital` directory, then apply all initial migrations with the following command:

> python manage.py migrate

After migrations have ran, the start the server with this command:

> python manage.py runserver

To either stop the Django server, or stop the NPM watch script, use the console command:

> crtl + c

Because the npm and django commands need to run in two different directories (the main project dir and django_orbital) it will probably be helpful to have two separate terminals up when developing. In vscode with both commands on run mode it looks like this:

![terms](/docs/images/terms.png)

## Setting up Selenium Testing

To set up selenium testing you'll first need to download the proper gecko driver for firefox which is the primary development browser, it can be found [here](https://github.com/mozilla/geckodriver/releases). It is best to copy the driver into the `selenium_tests` dir of the project so that it will appear on your PYTHONPATH, as the whole project will get added to your machines PYTHONPATH for running the Selenium scripts anyway.

To install all needed python packages the following command can be ran:

> pip install requirements.txt

Importantly, the scripts located in the project, and the geckodriver mentioned above need to be seen by your machines PTYONPATH.

### PYTHONPATH FOR WINDOWS

Search PATH in the windows search bar (as of newest Windows 10 build its actually not garbage) and click the "Edit the system environment variables" option that comes up. Click "Environment Variables" in the bottom right. Under "System Variables" pane, add a new one called "PYTHONPATH" and give it a value of path to the project. Forward vs backslash matters.

Example:
> C:\Users\your_user_name\Documents\project\project-orbital

and this will place both the selenium scripts in the project and the geckodriver onto the PATH.

### PYTHON PATH FOR LINUX / UNIX

Same as windows with setting a variable called "PYTHONPATH" to the path to the project (use `pwd` to get the path easy) but do it via linux things. I dont know google it or something, you should be used to that on a linux setup :stuck_out_tongue_winking_eye:. Seriously though using a virtualenv or virtualenv wrapper would be the easiest way to set and unset it as needed when working in a linux / unix environment.
