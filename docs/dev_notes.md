# Development Notes

## To run Django server

```console
python manage.py runserver
```

## To run react app

```console
npm start
```

## To run Python tests

```console
python manage.py test
```

## To run JavaScript tests

```console
npm test
```

## PYTHONPATH
For a virtualenv you may need to set the python path to something like this in order for the python code to run:

```txt
cd ~/Path/to/your/code/project-orbital/backend/
_OLD_PYTHONPATH="$PYTHONPATH"
PYTHONPATH=$PYTHONPATH:~/Path/to/your/code/project-orbital/backend/
export PYTHONPATH
```

Make sure to change slash direction and such depending on platform of the virtualenv. This example is from a mac.

## Other notes

Consult Dockerfiles and docker-compose file for any other commands needed for running things like the backend server.

This app was constructed within an Ubuntu subsystem on Windows 10 and both the frontend and backend running in that linux environment, and the ultimately constructed in a linux based docker container. Issues may pop up when trying to run this natively on windows.
