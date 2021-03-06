"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

from rest_api.views import SemToSd, CiToSd, NPercent, MultipointMeanSD

urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest_api/sem_to_sd/', SemToSd.as_view(), name='sem_to_sd'),
    path('rest_api/ci_to_sd/', CiToSd.as_view(), name='ci_to_sd'),
    path('rest_api/n_percent/', NPercent.as_view(), name='n_percent'),
    path('rest_api/multipoint/', MultipointMeanSD.as_view(), name='multipoint'),
]
