FROM python:3.8

# Set environment varibles
# Prevents Python from writing pyc files to disc
ENV PYTHONDONTWRITEBYTECODE 1
# Prevents Python from buffering stdout and stderr
ENV PYTHONUNBUFFERED 1

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app/api
COPY requirements.txt /app/api
RUN pip install -r requirements.txt

# copy project
COPY . /app/api/

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
