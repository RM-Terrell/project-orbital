FROM python:3.8

WORKDIR /app/api

COPY requirements.txt /app/api
RUN pip install -r requirements.txt

COPY . /app/api/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
