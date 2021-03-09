FROM python:3.8

WORKDIR /app/backend

COPY requirements/prod.txt /app/backend/requirements/
RUN pip install -r requirements/prod.txt

COPY . /app/backend/

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
